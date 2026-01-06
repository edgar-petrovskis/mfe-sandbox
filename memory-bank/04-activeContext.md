# 04-activeContext — Active Work Context

## Current Focus

- Implementing **Tailwind CSS** as a shared design system across the monorepo to ensure style consistency between host and remotes without CSS duplication.
- Bringing up the new **visualizerApp** remote (static MF) for sorting visualization using Strategy + FSD structure.

---

## In Progress

- [ ] Researching the best way to share `tailwind.config.ts` in Nx.
- [ ] Creating the base CSS package (design tokens, global styles).
- [ ] Configuring PostCSS for Webpack Module Federation compatibility.
- [ ] Defining `visualizerApp` Strategy interface/registry and hooking UI shell (input + algorithm dropdown + run trigger + chart placeholder).

---

## Recently Finalized

- ✅ Transition to Automatic Memory Bank (AMB) completed.
- ✅ Removed legacy files (`docs/`, `CONTEXT-ANCHOR.md`, `PROMPT.md`).
- ✅ Project Roadmap integrated into `05-progress.md`.
- ✅ `visualizerApp` MF wiring validated (port 4203) and host route resolved.
- ✅ `visualizerApp` FSD skeleton created (`01-app`, `02-pages/visualizer`, `03-widgets`, `04-features`, `05-entities`) with stub `VisualizerPage`.

---

## Next Steps

- Scaffold the `ui-styles` library.
- Add Tailwind directives to `shell-app` and verify integration with `ui-components`.
- Scaffold `visualizerApp` page shell: number input, algorithm dropdown, Run trigger, chart placeholder.
