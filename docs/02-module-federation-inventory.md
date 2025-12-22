# Module Federation Inventory (Nx)

This document describes **where Module Federation configuration lives**
and which files act as **source of truth** in the Nx workspace.

The goal is to answer:
> “Where do I change X, and why does it work this way?”

---

## MF Source of Truth Map

| Project     | File                                            | Purpose                                              | Notes |
|------------|--------------------------------------------------|------------------------------------------------------|-------|
| shell-app  | apps/shell-app/webpack.config.ts                 | Webpack integration with Nx MF plugin                | Uses `withModuleFederation`; imports base config |
| shell-app  | apps/shell-app/module-federation.config.ts       | MF logical config for host                            | `name = shell-app`; `remotes = [remoteApp1, remoteApp2]`; no shared defined |
| shell-app  | apps/shell-app/project.json                      | Nx targets for build/serve                            | `@nx/react:module-federation-dev-server`; port `4200`; `devRemotes` enabled |
| remoteApp1 | apps/remoteApp1/project.json                     | Nx serve config for remoteApp1                       | MF dev-server; port `4201` |
| remoteApp1 | apps/remoteApp1/module-federation.config.ts      | MF logical config for remoteApp1                     | `name = remoteApp1`; exposes `./Module` |
| remoteApp2 | apps/remoteApp2/project.json                     | Nx serve config for remoteApp2                       | MF dev-server; port `4202` |
| remoteApp2 | apps/remoteApp2/module-federation.config.ts      | MF logical config for remoteApp2                     | `name = remoteApp2`; exposes `./Module` |

---

## Important Distinction

### Logical MF model
Defined in:
- `module-federation.config.ts`

Contains:
- `name`
- `remotes`
- `exposes`
- (optionally) `shared`

---

### Physical dev model
Defined in:
- `project.json` → `targets.serve`

Contains:
- ports
- dev-server executor
- file watching behavior (`devRemotes`)

---

## Key Nx Insight

Nx **separates**:
- *what is federated*  
  from
- *what is actually running & watched in dev*

This separation is intentional and critical for DX control.
