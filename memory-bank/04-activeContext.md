# 04-activeContext — Active Work Context

## Current Focus

- Implementing **Tailwind CSS** as a shared design system across the monorepo to ensure style consistency between host and remotes without CSS duplication.
- Bringing up the new **visualizerApp** remote (static MF) for sorting visualization using Strategy + FSD structure.

---

## In Progress

- [ ] Researching the best way to share `tailwind.config.ts` in Nx.
- [ ] Creating the base CSS package (design tokens, global styles).
- [ ] Configuring PostCSS for Webpack Module Federation compatibility.
- [ ] Validating `visualizerApp` MF wiring (port 4203) and defining Strategy interface/registry + FSD folders.

---

## Recently Finalized

- ✅ Transition to Automatic Memory Bank (AMB) completed.
- ✅ Removed legacy files (`docs/`, `CONTEXT-ANCHOR.md`, `PROMPT.md`).
- ✅ Project Roadmap integrated into `05-progress.md`.

---

## Next Steps

- Scaffold the `ui-styles` library.
- Add Tailwind directives to `shell-app` and verify integration with `ui-components`.
- Scaffold `visualizerApp` page shell: number input, algorithm dropdown, Run trigger, chart placeholder.
