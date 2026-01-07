# MFE Sandbox (Nx + React + Webpack Module Federation)

Dev-only Nx monorepo to study static Module Federation with a host + three remotes and a shared UI singleton.

## Workspace map
- `apps/shell-app` — host; loads `remoteApp1`, `remoteApp2`, and `visualizerApp`
- `apps/remoteApp1`, `apps/remoteApp2`, `apps/visualizer-app` — remotes exposed via Module Federation
- `packages/ui-components` — shared UI library (Button, Input, Card) consumed as an MF singleton
- `memory-bank/` — project brief, tech context, rules, active work, and progress history

## Getting started
```sh
yarn install
yarn nx serve shell-app   # starts host and dev remotes (4200/4201/4202/4203)
```
You can run remotes individually when needed: `yarn nx serve remoteApp1`, `yarn nx serve remoteApp2`, `yarn nx serve visualizer-app`.

## Lint / Test
- Lint: `yarn nx lint shell-app remoteApp1 remoteApp2 @mfe-sandbox/ui-components`
- Tests: Jest configs exist (`apps/*/jest.config.cts`); add specs and run e.g. `yarn nx test shell-app`

## Module Federation facts
- Static remotes declared in `apps/shell-app/module-federation.config.ts`
- Nx dev server resolves remotes by name → port (no hardcoded URLs); ports: 4200/4201/4202/4203
- Shared UI singleton configured in `apps/*/module-federation.config.ts`
- HMR across MF boundaries is not guaranteed; expect rebuild + refresh during development

## Tooling
- Yarn (via corepack) workspace, Nx, Webpack, Jest
- Conventional commits via commitlint + Husky (`commitlint.config.js`, `.husky/commit-msg`)
