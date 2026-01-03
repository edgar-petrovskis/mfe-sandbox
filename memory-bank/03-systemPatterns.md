# 03-systemPatterns — Ruleset (Nx MF Sandbox)

## Purpose

This file defines non-negotiable architectural rules.
Any suggestion that violates this file is considered invalid.

---

## Non-negotiable Policies (MUST)

- MUST: This repository is a dev-only sandbox. No production assumptions.
- MUST: Use static remotes only. Dynamic/runtime remotes are forbidden.
- MUST: The host (shell-app) owns routing and integration.
- MUST: Remotes only expose isolated modules.
- MUST: devRemotes must be explicitly configured for sane DX.
- MUST: Shared UI package is declared as an MF shared singleton.
- MUST: All applications consume the same runtime instance of shared UI.
- MUST: The accepted MF dev model is rebuild + refresh.

---

## Forbidden Changes (MUST NOT)

- MUST NOT: Add SSR, RSC, or any server runtime.
- MUST NOT: Add production pipelines or prod-like setup.
- MUST NOT: Expect or simulate full HMR across MF boundaries.
- MUST NOT: Introduce webpack or HMR hacks to bypass MF limitations.
- MUST NOT: Switch from static to dynamic remotes.
- MUST NOT: Revert shared UI to monorepo-only import without MF shared.

---

## Decision Discipline

- SHOULD: Any change affecting these rules must be recorded in:
  - activeContext (current work)
  - progress (finalized decisions)
- SHOULD: Every decision must include a short “why”.

---

## AI Contract

- If a request violates any MUST or MUST NOT rule, the assistant must explicitly point it out.
- If required information is missing from techContext, the assistant must say “unknown” and not assume.
