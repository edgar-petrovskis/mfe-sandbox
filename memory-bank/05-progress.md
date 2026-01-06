# 05-progress — Decisions & Milestones

## Purpose

This file records finalized decisions, milestones, and the overall project Roadmap.
Completed phases are described in detail; future steps are kept as a checklist.

---

## 🏁 Completed Phases (History)

### Phase 1–3 — Bootstrap & MFE Structure

- **Decision:** Created Nx workspace, enabled Yarn Classic, generated host and 2 static remotes.
- **Outcome:** Core infrastructure is operational; ports (4200-4202) are fixed.

### Phase 4 — Dev Orchestration & DX

- **Decision:** Implemented `devRemotes` in `project.json` for automatic watch/rebuild.
- **Outcome:** DX stabilized via the "rebuild + manual refresh" model.

### Phase 5 — Shared UI Strategy

- **Decision:** Adopted MF Shared Singleton strategy for the `@mfe-sandbox/ui-components` package.
- **Outcome:** First component (`Button`) is successfully shared across all apps at runtime.

### Phase 6 — Automatic Memory Bank (AMB)

- **Decision:** Formalized 01-05 structure for AI context management.
- **Outcome:** Legacy docs (`docs/`, `CONTEXT-ANCHOR.md`) and `PROMPT.md` removed. Context normalized.

---

## 🗺 Roadmap (Future Steps)

### [ ] Phase 7 — Tailwind CSS (Next Focus)

- [ ] Create `ui-styles` library (shared config, globals.css).
- [ ] Integrate Tailwind into all applications.
- [ ] Verify single theme instance without bundle duplication.

### [ ] Phase 7b — Sorting Visualizer (New Remote)

- [x] Validate `visualizerApp` Module Federation wiring (port 4203) and host route.
- [x] Establish FSD layout (app/pages/widgets/features/entities/shared) and stub `VisualizerPage`.
- [ ] Define shared Strategy interface + registry.
- [ ] Implement input parsing + algorithm dropdown + Run control.
- [ ] Add animated chart to visualize algorithm steps across strategies.

### [ ] Phase 8 — Remote ↔ Remote Integration

- [ ] Export/import modules between remotes bypassing the host.
- [ ] Analyze circular dependencies and loading order.

### [ ] Phase 9 — MSW & Backend Strategy

- [ ] Integrate MSW for API mocking (`/api/profile`, `/api/feature-flags`).

### [ ] Phase 10 — Observability & CI/CD

- [ ] Health panel in `shell-app`, Error Boundaries, Nx affected lint/test.
