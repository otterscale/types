import { toJson } from '@bufbuild/protobuf';
import { StructSchema } from '@bufbuild/protobuf/wkt';
import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';
import fs from 'fs';
import { compile, type JSONSchema } from 'json-schema-to-typescript';
import path from 'path';
import { parseArgs } from 'util';

import { ResourceService } from '@otterscale/api/resource/v1';

const { values } = parseArgs({
	args: process.argv.slice(2),
	options: {
		cluster: {
			type: 'string',
			short: 'c',
			default: process.env.CLUSTER_NAME || 'cluster'
		},
		baseUrl: {
			type: 'string',
			short: 'u',
			default: process.env.API_BASE_URL || 'http://localhost:8299'
		},
		token: {
			type: 'string',
			short: 't',
			default: process.env.API_BEARER_TOKEN || ''
		}
	}
});

const CONFIG = {
	cluster: values.cluster!,
	baseUrl: values.baseUrl!,
	token: values.token!,
	outputDir: path.join(import.meta.dirname, '../src'),
	indexDtsFile: path.join(import.meta.dirname, '../src/index.d.ts'),
	indexJsFile: path.join(import.meta.dirname, '../src/index.js')
};

const INCLUDE_GROUPS = new Set([
	'', // kubernetes core
	'admissionregistration.k8s.io',
	'apiextensions.k8s.io',
	'apiregistration.k8s.io',
	'apps',
	'authentication.k8s.io',
	'authorization.k8s.io',
	'autoscaling',
	'batch',
	'certificates.k8s.io',
	'coordination.k8s.io',
	'discovery.k8s.io',
	'events.k8s.io',
	'flowcontrol.apiserver.k8s.io',
	'gateway.networking.k8s.io',
	'groupsnapshot.storage.k8s.io',
	'inference.networking.k8s.io',
	'metrics.k8s.io',
	'networking.k8s.io',
	'node.k8s.io',
	'policy',
	'rbac.authorization.k8s.io',
	'scheduling.k8s.io',
	'security.istio.io', // istio
	'snapshot.storage.k8s.io',
	'storage.k8s.io',
	'tenant.otterscale.io' // otterscale
]);

const transport = createConnectTransport({
	httpVersion: '1.1',
	baseUrl: CONFIG.baseUrl,
	interceptors: CONFIG.token
		? [
				(next) => (req) => {
					req.header.set('Authorization', `Bearer ${CONFIG.token}`);
					return next(req);
				}
			]
		: []
});

const client = createClient(ResourceService, transport);

async function main() {
	console.log(`🔧 Configuration:`);
	console.log(`   - Cluster:  ${CONFIG.cluster}`);
	console.log(`   - Base URL: ${CONFIG.baseUrl}`);
	console.log(`   - Token:    ${CONFIG.token ? '***' : '(none)'}`);
	console.log(`   - Output:   ${CONFIG.outputDir}`);
	console.log('🔄 Connecting to Backend to fetch schemas...');

	if (!fs.existsSync(CONFIG.outputDir)) {
		fs.mkdirSync(CONFIG.outputDir, { recursive: true });
	}

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
			if (res.resource.includes('/')) {
				// console.debug(`\t- Skipping subresource: ${res.resource}`);
				continue;
			}

			try {
				console.log(`\t- Fetching schema for ${res.kind} (${res.group}/${res.version})...`);

				// Fetch Schema RPC
				const schemaRes = await client.schema({
					cluster: CONFIG.cluster,
					group: res.group,
					version: res.version,
					kind: res.kind
				});

				const gvk = `${res.group ? res.group : 'core'}.${res.version}.${res.kind}`;

				// Convert Protobuf Struct to JSON Object
				const jsonSchema = toJson(StructSchema, schemaRes) as JSONSchema;

				// Add title for TS interface naming
				jsonSchema.title = gvk;

				// Compile to TypeScript
				const tsCode = await compile(jsonSchema, gvk, {
					bannerComment: `/** Generated from Remote JSON Schema for ${gvk} */`,
					style: { singleQuote: true, semi: true },
					ignoreMinAndMaxItems: true
				});

				// Write .d.ts (type declarations)
				const dtsFileName = `${gvk}.d.ts`;
				fs.writeFileSync(path.join(CONFIG.outputDir, dtsFileName), tsCode);

				// Write .js (empty module, interfaces have no runtime representation)
				const jsFileName = `${gvk}.js`;
				fs.writeFileSync(path.join(CONFIG.outputDir, jsFileName), 'export {};\n');

				indexExports.push(`export * from './${gvk}.js';`);
				successCount++;
			} catch (err) {
				console.warn(`⚠️  Failed to generate type for ${res.kind}:`, err);
				failCount++;
			}
		}

		// Step 3: Wrap up
		console.log('\n🚫 Skipped Groups:', [...excludeGroups].sort());

		// Generate index.d.ts (type re-exports)
		const indexDtsContent = indexExports.join('\n');
		fs.writeFileSync(CONFIG.indexDtsFile, indexDtsContent);

		// Generate index.js (runtime re-exports, resolves to empty modules)
		fs.writeFileSync(CONFIG.indexJsFile, indexDtsContent);

		console.log('\n=============================================');
		console.log(`✅ Sync Completed!`);
		console.log(`   - Success: ${successCount}`);
		console.log(`   - Failed:  ${failCount}`);
		console.log(`   - Output:  ${CONFIG.indexDtsFile}`);
		console.log('=============================================');

		if (failCount > 0) {
			console.warn('⚠️  Some types failed to generate. Check logs above.');
			process.exit(1);
		}
	} catch (err) {
		console.error('❌ Fatal error during sync:', err);
		process.exit(1);
	}
}

main();
