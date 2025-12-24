# MFE Sandbox (Nx + React + Webpack Module Federation)

Dev-only monorepo to explore Nx Module Federation with static remotes and shared UI.

## Projects
- `apps/shell-app` — host (MF static remotes)
- `apps/remoteApp1`, `apps/remoteApp2` — remotes
- `packages/ui-components` — shared UI lib (Button, Input, Card), shared as MF singleton
- `docs/` — architecture/HMR/sharing notes (`docs/04-ui-sharing.md`)

## Getting started
```sh
yarn install
npx nx serve shell-app   # runs host + remotes
```
Remotes can be served individually if needed: `npx nx serve remoteApp1`, `npx nx serve remoteApp2`.

## Lint / Test
- Lint: `npx nx lint shell-app remoteApp1 remoteApp2 @mfe-sandbox/ui-components`
- Tests (Jest configs exist; enable as needed): `npx nx test shell-app` (similarly for remotes)

## Module Federation
- Static remotes declared in `apps/shell-app/module-federation.config.ts`
- Shared UI: `@mfe-sandbox/ui-components` marked singleton via `shared` fn in `apps/*/module-federation.config.ts`

## Tooling
- Conventional commits via commitlint + Husky (`commitlint.config.js`, `.husky/commit-msg`)

## Docs
- [docs/01-architecture-overview.md](docs/01-architecture-overview.md) — high-level MF architecture (host/remotes, ports, decisions)
- [docs/02-module-federation-inventory.md](docs/02-module-federation-inventory.md) — where MF config lives and how Nx orchestrates
- [docs/03-hmr-and-dx.md](docs/03-hmr-and-dx.md) — HMR expectations and dev workflow (rebuild + refresh)
- [docs/04-ui-sharing.md](docs/04-ui-sharing.md) — monorepo import vs MF shared for UI lib
- [CONTEXT-ANCHOR.md](CONTEXT-ANCHOR.md) — current state/next steps summary
