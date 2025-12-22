# Architecture Overview — FE Micro-Frontend Sandbox

This repository is a **dev-only Micro-Frontend sandbox** built with **Nx + React + Webpack Module Federation**.

The goal is to study:
- Nx Module Federation generators behavior
- Runtime sharing (React, ReactDOM)
- Dev orchestration and HMR limitations
- Remote-to-host and future remote-to-remote interactions

> ⚠️ This project intentionally has **no production setup**.
> All findings and decisions are made in context of **local development only**.

---

## High-level Architecture

- **shell-app**
    - Host application
    - Owns routing and integration
    - Loads remotes via Module Federation

- **remoteApp1**
    - Federated remote
    - Exposes a React module via MF

- **remoteApp2**
    - Federated remote
    - Exposes a React module via MF

---

## Runtime Topology (dev)

| App         | Role   | Port |
|------------|--------|------|
| shell-app  | Host   | 4200 |
| remoteApp1 | Remote | 4201 |
| remoteApp2 | Remote | 4202 |

---

## Key Architectural Decisions

- Nx **Module Federation dev-server** is used instead of raw webpack-dev-server
- Remotes are defined as **static remotes by name**
- File watching for remotes is enabled explicitly via `devRemotes`
- React is shared as a **singleton**
- `react-dom/client` is **not singleton by default** (documented behavior)
