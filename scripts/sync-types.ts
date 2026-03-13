import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import fs from "fs";
import { compile, type JSONSchema } from "json-schema-to-typescript";
import path from "path";
import sortKeys from "sort-keys";
import { parseArgs } from "util";

import { ResourceService } from "@otterscale/api/resource/v1";

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    cluster: {
      type: "string",
      short: "c",
      default: process.env.CLUSTER_NAME || "cluster",
    },
    baseUrl: {
      type: "string",
      short: "u",
      default: process.env.API_BASE_URL || "http://localhost:8299",
    },
    token: {
      type: "string",
      short: "t",
      default: process.env.API_BEARER_TOKEN || "",
    },
  },
});

const CONFIG = {
  cluster: values.cluster!,
  baseUrl: values.baseUrl!,
  token: values.token!,
  outputDir: path.join(import.meta.dirname, "../src"),
  indexDtsFile: path.join(import.meta.dirname, "../src/index.d.ts"),
  indexJsFile: path.join(import.meta.dirname, "../src/index.js"),
};

const INCLUDE_GROUPS = new Set([
  "", // kubernetes core
  "admissionregistration.k8s.io",
  "apiextensions.k8s.io",
  "apiregistration.k8s.io",
  "apps",
  "authentication.k8s.io",
  "authorization.k8s.io",
  "autoscaling",
  "batch",
  "cdi.kubevirt.io",
  "ceph.rook.io",
  "certificates.k8s.io",
  "clone.kubevirt.io",
  "coordination.k8s.io",
  "discovery.k8s.io",
  "events.k8s.io",
  "export.kubevirt.io",
  "fleet.otterscale.io",
  "flowcontrol.apiserver.k8s.io",
  "gateway.networking.k8s.io",
  "helm.toolkit.fluxcd.io",
  "inference.networking.k8s.io",
  "instancetype.kubevirt.io",
  "kustomize.toolkit.fluxcd.io",
  "migrations.kubevirt.io",
  "model.otterscale.io",
  "module.otterscale.io",
  "networking.k8s.io",
  "node.k8s.io",
  "policy",
  "pool.kubevirt.io",
  "rbac.authorization.k8s.io",
  "resource.k8s.io",
  "scheduling.k8s.io",
  "snapshot.kubevirt.io",
  "source.toolkit.fluxcd.io",
  "storage.k8s.io",
  "tenant.otterscale.io",
  "workload.otterscale.io",
]);

const transport = createConnectTransport({
  httpVersion: "1.1",
  baseUrl: CONFIG.baseUrl,
  interceptors: CONFIG.token
    ? [
        (next) => (req) => {
          req.header.set("Authorization", `Bearer ${CONFIG.token}`);
          return next(req);
        },
      ]
    : [],
});

const client = createClient(ResourceService, transport);

async function main() {
  console.log(`🔧 Configuration:`);
  console.log(`   - Cluster:  ${CONFIG.cluster}`);
  console.log(`   - Base URL: ${CONFIG.baseUrl}`);
  console.log(`   - Token:    ${CONFIG.token ? "***" : "(none)"}`);
  console.log(`   - Output:   ${CONFIG.outputDir}`);
  console.log("🔄 Connecting to Backend to fetch schemas...");

  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Remove existing generated files so output is exactly what this run produces
  const existing = fs.readdirSync(CONFIG.outputDir);
  for (const name of existing) {
    if (name.endsWith(".d.ts") || name.endsWith(".js")) {
      fs.unlinkSync(path.join(CONFIG.outputDir, name));
    }
  }
  console.log(
    `🧹 Cleared ${existing.filter((n) => n.endsWith(".d.ts") || n.endsWith(".js")).length} existing generated file(s).`,
  );

  try {
    // Step 1: Discovery
    const discoveryRes = await client.discovery({ cluster: CONFIG.cluster });
    const resources = discoveryRes.apiResources;

    console.log(`📦 Found ${resources.length} total resources via Discovery.`);

    const indexExports: string[] = [];
    const excludeGroups = new Set<string>();
    let successCount = 0;
    let failCount = 0;

    // Step 2: Iterate & Generate
    for (const res of resources) {
      // Filter: Group check
      if (!INCLUDE_GROUPS.has(res.group)) {
        excludeGroups.add(res.group);
        continue;
      }

      // Filter: Subresource check (e.g., pods/status)
      if (res.resource.includes("/")) {
        // console.debug(`\t- Skipping subresource: ${res.resource}`);
        continue;
      }

      try {
        console.log(
          `\t- Fetching schema for ${res.kind} (${res.group}/${res.version})...`,
        );

        // Fetch Schema RPC
        const schemaRes = await client.schema({
          cluster: CONFIG.cluster,
          group: res.group,
          version: res.version,
          kind: res.kind,
        });

        const gvk = `${res.group ? res.group : "core"}.${res.version}.${res.kind}`;

        // Convert Protobuf Struct to JSON Object
        const jsonSchema = schemaRes.schema as JSONSchema;

        // Add title for TS interface naming
        jsonSchema.title = gvk;

        // Sort property keys before compiling so generated files have deterministic field order
        const sortedSchema = sortKeys(jsonSchema, { deep: true });

        // Compile to TypeScript
        const tsCode = await compile(sortedSchema, gvk, {
          bannerComment: `/** Generated from Remote JSON Schema for ${gvk} */`,
          style: { singleQuote: true, semi: true },
          ignoreMinAndMaxItems: true,
        });

        // Write .d.ts (type declarations)
        const dtsFileName = `${gvk}.d.ts`;
        fs.writeFileSync(path.join(CONFIG.outputDir, dtsFileName), tsCode);

        // Write .js (empty stub: interfaces have no runtime representation,
        // but ESM resolution requires a loadable module; .d.ts alone is not resolved at runtime)
        const jsFileName = `${gvk}.js`;
        fs.writeFileSync(
          path.join(CONFIG.outputDir, jsFileName),
          "export {};\n",
        );

        indexExports.push(`export * from './${gvk}.js';`);
        successCount++;
      } catch (err) {
        console.warn(`⚠️  Failed to generate type for ${res.kind}:`, err);
        failCount++;
      }
    }

    // Step 3: Wrap up
    console.log("\n🚫 Skipped Groups:", [...excludeGroups].sort());

    // Generate index.d.ts (type re-exports)
    // sort so order is stable and not affected by backend response order
    indexExports.sort();
    const indexDtsContent = indexExports.join("\n");
    fs.writeFileSync(CONFIG.indexDtsFile, indexDtsContent);

    // Generate index.js (runtime re-exports, resolves to empty modules)
    fs.writeFileSync(CONFIG.indexJsFile, indexDtsContent);

    console.log("\n=============================================");
    console.log(`✅ Sync Completed!`);
    console.log(`   - Success: ${successCount}`);
    console.log(`   - Failed:  ${failCount}`);
    console.log(`   - Output:  ${CONFIG.indexDtsFile}`);
    console.log("=============================================");

    if (failCount > 0) {
      console.warn("⚠️  Some types failed to generate. Check logs above.");
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Fatal error during sync:", err);
    process.exit(1);
  }
}

main();
