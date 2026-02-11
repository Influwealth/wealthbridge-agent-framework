# Infrastructure – Introduction

WealthBridge OS runs across a mesh of nodes:

- **Mobile:** S23, A7 Lite
- **Laptops:** EliteBook 840
- **Servers:** Spectre (Proxmox), IONOS, OpenStack

## Roles

- **Mobile Nodes** – UI, light agents, education, demos.
- **Laptops** – Documentation, planning, light development, remote control.
- **Servers** – Heavy compute, GPU inference, multi-agent swarms, production MCP servers and capsules.
- **Cloud / OpenStack** – Public endpoints, external integrations, scalable services.

Infra is designed to be:

- Redundant
- Composable
- Sovereign
- Documented for inheritance
