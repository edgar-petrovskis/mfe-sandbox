# HMR and Developer Experience (Nx + Module Federation)

This document describes the **actual, fixed state** of HMR and rebuild behavior
in this Nx Module Federation sandbox.

The goal is to clarify **what is fixed**, **what is intentionally not**, and
what the correct mental model for development is.

---

## Current Status

- ✅ Remote applications are **watched**
- ✅ Remote applications are **rebuilt on change**
- ❌ Remote applications do **not have full HMR inside the host**
- ✅ This behavior is **expected and correct**

---

## Applied Fix: `devRemotes`

Remote rebuilds were enabled by explicitly declaring remotes in the host
serve configuration.

```
"devRemotes": ["remoteApp1", "remoteApp2"]
```

Location:
- apps/shell-app/project.json
- targets.serve.options

This setting ensures that remotes are:
- started in dev mode
- included in the Nx serve graph
- watched for file changes

---

## What Was Fixed

- Remote source files are now watched
- Any change in a remote triggers a rebuild
- Nx logs clearly indicate remote rebuild events
- Development feedback loop is restored

---

## What Is NOT Fixed (By Design)

- No reliable hot module replacement for remotes inside the host
- No automatic React tree patching across MF boundaries
- No SPA-like HMR behavior for federated code

This is not a bug.
It is a known and accepted limitation of:
- Webpack Module Federation
- Nx Module Federation dev-server

---

## Correct Mental Model

> devRemotes fixes **rebuild**, not **HMR**

The correct workflow is:
- develop remotes in isolation (standalone port)
- use the host for integration testing
- refresh the page when remote code changes

---

## Why This Is Acceptable

- Module Federation loads remotes as runtime bundles
- HMR boundaries do not propagate reliably across federated modules
- Most real-world MF systems use rebuild + refresh

---

## Summary

- `devRemotes` is mandatory for sane DX in Nx MF setups
- Full HMR for remotes is not a goal
- Rebuild + refresh is the correct and stable development model
