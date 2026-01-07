# 02-techContext — Technical Context (Nx + React + Webpack MF, dev-only)

## Scope

This file describes the FACTUAL technical state of the repository.
It is the source of truth for tooling, configuration, and actual dev behavior.

If something is not written here, it must be treated as unknown.

---

## Workspace

- Nx monorepo
- Package manager: Yarn classic (via corepack)
- Repository type: dev-only sandbox
- No production setup or pipelines

---

## Core Stack

- React
- Webpack
- Webpack Module Federation
- Nx Module Federation dev-server

---

## Applications

- shell-app
  - Role: Host
  - Owns routing and integration
  - Loads remotes via Module Federation runtime

- remoteApp1
  - Role: Federated remote
  - Exposes a React module

- remoteApp2
  - Role: Federated remote
  - Exposes a React module

- visualizerApp
  - Role: Federated remote (static MF)
  - Exposes sorting visualizer page (Strategy pattern, FSD slices, styled-components UI)

---

## Dev Runtime Ports

| App        | Port |
| ---------- | ---- |
| shell-app  | 4200 |
| remoteApp1 | 4201 |
| remoteApp2 | 4202 |
| visualizerApp | 4203 |

---

## Module Federation — Source of Truth

### Logical federation model

Defined in:

- apps/\*/module-federation.config.ts

Contains:

- name
- remotes (host)
- exposes (remotes)
- shared (optional)

Answers: what is federated.

---

### Physical dev execution model

Defined in:

- apps/\*/project.json → targets.serve

Contains:

- dev-server executor
- ports
- file watching behavior
- devRemotes

Answers: what actually runs and is watched in dev.

---

## Nx Dev Orchestration

- nx serve shell-app does NOT watch remotes by default
- devRemotes must be explicitly configured
- devRemotes control which remotes are:
  - started
  - watched
  - rebuilt on change

Logical MF graph and dev execution graph are intentionally separated.

---

## Static Remotes Model

- Remotes are referenced by NAME, not by URL
- No hardcoded remoteEntry.js URLs in MF config
- Ports are defined in:
  - apps/remoteApp\*/project.json → targets.serve.options.port

Nx resolves remotes at runtime as:
remoteName → http://localhost:<port>/remoteEntry.js

---

## Shared Dependencies

### React

- Shared as a singleton
- Runtime verification confirms:
  - host React instance === remote React instance

### react-dom/client

- Not a singleton by default
- createRoot references differ between host and remotes
- This behavior is documented and accepted in the current setup

---

## HMR & Developer Experience

### What works

- Remotes are started automatically (with devRemotes)
- Remote source files are watched
- Changes trigger rebuilds

### What does not work (by design)

- No reliable HMR propagation across MF boundaries
- No React tree patching inside the host for remote updates

Accepted mental model:
MF development = rebuild + manual refresh

---

## Shared UI Strategy (FACT)

- Shared UI lives as an Nx package in the monorepo
- The library is declared as an MF shared singleton
- All applications consume the SAME runtime instance
- Monorepo-only import without MF shared is NOT used in the current setup
