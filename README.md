# @otterscale/k8s-types

> TypeScript type definitions for Kubernetes resources, generated on demand from the OtterScale Backend.

This package connects to the Backend's `ResourceService` (ConnectRPC), discovers every registered **GVK** (Group / Version / Kind) in the target cluster, and compiles their JSON Schemas into `.d.ts` declaration files for use by the frontend dashboard.

---

## 📋 Prerequisites

Before running the sync, you'll need the following three values:

| Item             | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| **Cluster Name** | Identifier of the target Kubernetes cluster within OtterScale |
| **API Base URL** | Endpoint of the OtterScale Backend                            |
| **Access Token** | Bearer token (JWT) issued by Keycloak                         |

> 💡 The access token can be obtained from the Keycloak `otterscale-dashboard` service account. Tokens are short-lived and must be refreshed once expired.

---

## 🚀 Usage

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the sync

You can provide credentials either as CLI flags or as environment variables.

#### Option A — CLI flags _(recommended)_

```bash
pnpm run sync \
  --cluster <cluster-name> \
  --baseUrl <api-base-url> \
  --token   <api-bearer-token>
```

Short-form equivalents:

```bash
pnpm run sync \
  -c <cluster-name> \
  -u <api-base-url> \
  -t <api-bearer-token>
```

#### Option B — Environment variables

```bash
export CLUSTER_NAME=<cluster-name>
export API_BASE_URL=<api-base-url>
export API_BEARER_TOKEN=<api-bearer-token>

pnpm run sync
```

#### Reference

| Flag            | Environment variable |
| --------------- | -------------------- |
| `-c, --cluster` | `CLUSTER_NAME`       |
| `-u, --baseUrl` | `API_BASE_URL`       |
| `-t, --token`   | `API_BEARER_TOKEN`   |

---

## ⚙️ How it works

When executed, `scripts/sync.ts` performs the following steps:

### 1. Clear stale types

All `.d.ts` and `.js` files under `src/` are deleted so the output reflects exactly what this run produces — no leftovers from CRDs that have since been removed from the cluster.

### 2. Discovery

Calls `ResourceService.Discovery` to list every API resource in the cluster (built-ins and CRDs alike).

### 3. Filter resources

- ✅ **Keeps** only resources whose API Group is in the `INCLUDE_GROUPS` allowlist (e.g. `apps`, `ceph.rook.io`, `kubevirt.io`, `serving.kserve.io`).
- 🚫 **Skips** subresources such as `pods/status` and `deployments/scale`.
- 📋 **Reports** any groups outside the allowlist under `🚫 Skipped Groups` in the console output.

### 4. Fetch each schema

For every matching GVK, calls `ResourceService.Schema` to retrieve its JSON Schema.

### 5. Compile to TypeScript

- Deep-sorts schema properties with `sort-keys` for deterministic, diff-friendly output.
- Compiles each schema into a TypeScript interface via `json-schema-to-typescript`.
- Emits **two files per GVK** into `src/`:
  - `<group>.<version>.<Kind>.d.ts` — the type declaration
  - `<group>.<version>.<Kind>.js` — an empty module stub (required for ESM runtime resolution)
- The Kubernetes core group (empty string) is named `core`, e.g. `core.v1.Pod.d.ts`.

### 6. Generate index

Writes all GVK modules — in sorted order — into `src/index.d.ts` and `src/index.js` as the package's entry point.

### 7. Summary

Prints success / failure counts. Exits with code `1` if any GVK failed to generate.

---

## 📂 Output layout

```
src/
├── index.d.ts                       # Re-exports all types
├── index.js                         # Re-exports all runtime stubs
├── <group>.<version>.<Kind>.d.ts
├── <group>.<version>.<Kind>.js
├── ...
```

---

## ➕ Adding a new API Group

To include a newly deployed CRD group (e.g. from a freshly installed Operator):

1. Open `scripts/sync.ts`.
2. Add the group name to the `INCLUDE_GROUPS` set.
3. Re-run `pnpm run sync`.

---

## ⚠️ Notes

- 🔁 **The script fully rebuilds `src/` on every run.** Do not hand-edit any file under `src/` — your changes will be lost.
- 💥 **On failure, `src/` may be left empty.** Because cleanup happens up front, an aborted run (e.g. Backend unreachable, Discovery RPC error) can leave the directory bare. Simply re-run once the issue is fixed.
- 🔐 **The built-in default token is for local testing only.** Always supply a fresh token via flag or environment variable in any non-local environment.
