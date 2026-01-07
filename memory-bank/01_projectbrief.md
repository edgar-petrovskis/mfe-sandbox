# 01-projectbrief — MFE Sandbox (Nx + React + Webpack Module Federation)

## One-liner

A dev-only micro-frontend sandbox built with **Nx, React, and Webpack Module Federation (static remotes)** to study real-world dev orchestration, runtime sharing, and DX limitations.

---

## Purpose

This repository exists to:

- Understand how **Nx Module Federation generators** structure configuration and execution
- Study **dev-time orchestration** of host and remotes in an Nx workspace
- Validate **runtime sharing behavior** (React, shared UI, singletons)
- Observe and document **actual DX and HMR limitations** in Module Federation setups
- Build a reliable mental model for MF in a monorepo context

The focus is learning through verified behavior, not building a production system.

---

## Explicit Non-Goals

This project intentionally does NOT aim to:

- Provide a production-ready architecture
- Implement SSR, RSC, or server-side rendering
- Support dynamic or runtime-loaded remotes
- Optimize bundles or performance for production
- Serve as a reference implementation for deployment

Any production-related concerns are explicitly out of scope.

---

## High-Level Topology (Dev)

- **shell-app**
  - Host application
  - Owns routing and integration
  - Loads remotes via Module Federation

- **remoteApp1**
  - Federated remote
  - Exposes a React module

- **remoteApp2**
  - Federated remote
  - Exposes a React module

- **visualizerApp**
  - Federated remote
  - Sorting visualizer using Strategy pattern + FSD slices

The host runs on port 4200, with remotes on 4201, 4202, and 4203.

---

## Guiding Principles

- Dev-only correctness over production completeness
- Explicit configuration over implicit behavior
- Documentation of observed behavior over assumed behavior
- Architectural clarity over convenience
- Decisions are recorded and traceable

---

## Audience

This repository is intended for:

- Front-end engineers learning or validating Module Federation with Nx
- Engineers exploring micro-frontend dev workflows in a controlled environment
- Long-running AI-assisted development using an explicit memory bank

---

## How to Read This Repository

- `01_projectbrief.md` explains **why the project exists**
- `02_techContext.md` documents **what is technically true**
- `03_systemPatterns.md` defines **what is allowed or forbidden**
- `04_activeContext.md` shows **what is happening right now**
- `05_progress.md` records **what has been decided and completed**
