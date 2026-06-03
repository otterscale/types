# OtterScale Types

[![Release](https://img.shields.io/github/v/release/otterscale/types)](https://github.com/otterscale/types/releases/latest)
[![npm](https://img.shields.io/npm/v/@otterscale/types)](https://www.npmjs.com/package/@otterscale/types)
[![License](https://img.shields.io/github/license/otterscale/types)](LICENSE)

**TypeScript type definitions for Kubernetes and OtterScale custom resources.**

`@otterscale/types` is a type-only package that gives the OtterScale frontend a type-safe view of every resource it works with — core Kubernetes kinds, common operators (KubeVirt, CDI, Rook Ceph, KServe, Flux), and OtterScale's own custom resources. The definitions are generated from the JSON Schemas served by the [OtterScale API](https://github.com/otterscale/api), so the types always track the platform's actual resource shapes.

## Coverage

- **Core Kubernetes** — Deployments, StatefulSets, DaemonSets, CronJobs, and the standard API groups (autoscaling, batch, networking, storage, RBAC, and more).
- **Operators** — KubeVirt, CDI, Rook Ceph, KServe, and the Flux toolkit.
- **OtterScale custom resources** — fleet, model, module, tenant, and workload kinds under the `*.otterscale.io` API groups.

## Documentation

Generation and release details will be published in the project documentation. Because this is a declaration-only package, importing a type pulls in its interface with no runtime code.

## Ecosystem

OtterScale Types is generated from the [otterscale/api](https://github.com/otterscale/api) schemas and consumed by the OtterScale frontend. See the [otterscale](https://github.com/otterscale/otterscale) repository for an overview of the full project and its components.

## Contributing

Contributions are welcome. A contribution guide (`CONTRIBUTING.md`) covering the schema-sync workflow will follow; until then, please open an issue or a pull request to get involved.

## License

This project is licensed under the [Apache License 2.0](LICENSE).
