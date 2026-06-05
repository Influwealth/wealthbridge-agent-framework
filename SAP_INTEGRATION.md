# WealthBridge Agent Framework — SAP Integration

## Role in Sovereign Architecture
This is the **canonical WebMCP TypeScript frontend** (MCP-HI layer).
The `apps/mcp-ui/` workspace is the production WebMCP client.

## Structure
```
wealthbridge-agent-framework/
├── apps/
│   └── mcp-ui/        ← WebMCP TypeScript frontend (canonical)
├── packages/
│   └── ...            ← Shared TypeScript packages
└── package.json       ← pnpm workspace root
```

## WebMCP / MCP-HI
- Browser-facing, TypeScript only
- Uses `@jason.today/webmcp` for MCP protocol
- Calls DeepFlex Supervisor at http://localhost:8000
- NO Python code in this repo

## SAP Headers (TypeScript)
```typescript
const sapHeaders = {
  "x-sap-node-id": "wealthbridge-mcp-ui",
  "x-sap-trace-id": crypto.randomUUID(),
  "x-sap-version": "1.0",
};
```

## Upstream Services
| Service | URL | Purpose |
|---------|-----|---------|
| DeepFlex Supervisor | http://localhost:8000 | All task dispatch |
| WealthBridge OS | http://localhost:8001 | Business workflows (via DeepFlex) |
| Token Gateway | http://localhost:8002 | Token balances display |

## Development
```bash
pnpm install
pnpm dev --filter mcp-ui
```

## Branch
All synthesis work: `claude/deepflex-argus-synthesis-jWjmO`
