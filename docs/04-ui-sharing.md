# UI Sharing: Monorepo Import vs MF Shared

## Options
- **Monorepo import (build-time)** — `import { Button } from '@mfe-sandbox/ui-components'` without an MF remote.
- **MF shared (runtime)** — same import, but the library is declared in `shared` (singleton) in host and remotes.

## Behavior
- Monorepo import: code is bundled into each app separately; no network requests to another server.
- MF shared: code is served once (host), remotes consume the shared instance via MF runtime.

## Pros / cons
- Monorepo import: simplest DX, but duplicates code across bundles.
- MF shared: smaller bundles and a single runtime version; requires MF shared config and version compatibility.

## When to choose which
- Fast prototyping or isolated dev — monorepo import is fine.
- Integrated dev/closer-to-prod model — MF shared to avoid duplication and keep one UI instance.
