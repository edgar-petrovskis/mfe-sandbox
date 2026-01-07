# 04-activeContext — Active Work Context

## Current Focus

- Implementing **Tailwind CSS** as a shared design system across the monorepo to ensure style consistency between host and remotes without CSS duplication.
- Bringing up the new **visualizerApp** remote (static MF) for sorting visualization using Strategy + FSD structure.

---

## In Progress

- [ ] Researching the best way to share `tailwind.config.ts` in Nx.
- [ ] Creating the base CSS package (design tokens, global styles).
- [ ] Configuring PostCSS for Webpack Module Federation compatibility.
- [ ] Adding more sorting strategies (beyond Bubble) and refining chart playback controls in `visualizerApp`.

---

## Recently Finalized

- ✅ Transition to Automatic Memory Bank (AMB) completed.
- ✅ Removed legacy files (`docs/`, `CONTEXT-ANCHOR.md`, `PROMPT.md`).
- ✅ Project Roadmap integrated into `05-progress.md`.
- ✅ `visualizerApp` MF wiring validated (port 4203) and host route resolved.
- ✅ `visualizerApp` FSD skeleton created (`01_app`, `02_pages/visualizer`, `03_widgets`, `04_features`, `05_entities`) with stub `VisualizerPage`.
- ✅ Strategy contract + registry stubbed; Visualizer UI shell parses numbers, selects algorithms from registry, and has a Run trigger + chart.
- ✅ Bubble sort strategy implemented with step emission; chart widget renders bars with highlighted comparisons and auto-plays steps.
- ✅ Visualizer UI/components refactored to styled-components; chart now renders axes/labels/ticks with improved layout; controls (select/speed/input) styled and typed.

---

## Next Steps

- Scaffold the `ui-styles` library.
- Add Tailwind directives to `shell-app` and verify integration with `ui-components`.
- Add more algorithms to the registry and improve chart controls (play/pause/reset, speed).
