# AdibaIcon Improvement TODO

Status: [In Progress] | Plan: Make production-ready (tests/lint/build/docs/CI)

## 1. Setup Tooling (Lint/Test)

- [x] Add ESLint/Prettier configs + scripts
- [x] Add Vitest + deps
- [x] Create jest.config.js/vitest.config.js
- [x] Add initial tests (React/Vue components, CSS snapshots)

## 2. Refactor Build System

- [x] Enhance webpack.config.js (source maps, ESM, subset fonts)
- [ ] Rewrite scripts/build.js (remove regex minify, add validation)
- [ ] Add tree-shaking support for icons

## 3. Code Cleanups

- [ ] src/css/adibaIcon.css: Remove legacy `icon-*` selectors
- [ ] src/scss/: Improve variables/loops
- [ ] Add CSS custom properties for theming
- [ ] JS: Make main.js registry tree-shakable + TS defs

## 4. Docs & Maintenance

- [ ] Merge docs/CHANGELOG.md → root CHANGELOG.md
- [ ] Update CONTRIBUTING.md/package.json
- [ ] Add .github/workflows/ci.yml (lint/test/build)

## 5. Integrations & Security

- [ ] TS for React/Vue components
- [ ] Add security deps (audit in CI)
- [ ] Version pinning/lockfile cleanup

## 6. Finalize

- [ ] Run full build/test/lint
- [ ] Commit as `blackboxai/improvements-v2.3.0`
- [ ] PR via gh

Progress will be updated after each step.
