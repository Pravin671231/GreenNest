# GreenNest — Milestone Issue Breakdown

**Version:** 1.1
**Status:** Draft
**Last Updated:** 2026-07-15

Issue-style breakdown of [Milestones 0-3](./milestones.md). Each item below is written to be copy-pasted as a GitHub issue: title, context, and acceptance criteria (the "test" for the issue — what must be true for it to be closed). Work through them in order; later issues depend on earlier ones as noted. Milestone 4 (Feature Build-out) is intentionally not broken down yet — plan it separately once Milestones 1-3 are underway.

---

## Milestone 0 — Planning & Design Docs

### #1 — Reference-base page list & content inventory

**Depends on:** —
**Labels:** `milestone-0`, `docs`

**Context**
Before any design work starts, nail down exactly which pages exist and what content each one needs, grounded in SRS §3.1. This is the single reference every later wireframe/layout issue points back to.

**Acceptance criteria**
- [ ] Every page from SRS §3.1 (Home, Catalog, Plant Detail, About, Blog, Location/Visit Us, Contact) is listed with its purpose in one place.
- [ ] For each page, the required content blocks are listed (e.g. Home: hero, value prop, featured plants, testimonials, CTA).
- [ ] Any page-level content not yet decided is flagged as an open question rather than silently omitted.

---

### #2 — Design direction / style guide

**Depends on:** #1
**Labels:** `milestone-0`, `design`

**Context**
A physical plant nursery's site needs a visual identity before wireframes are drawn, so every page feels consistent. This defines the shared visual language — not final pixel-perfect mockups.

**Acceptance criteria**
- [ ] Color palette defined (primary, accent, neutrals, semantic colors) with contrast-ratio checked for accessibility (SRS §4).
- [ ] Typography scale defined (font family, heading/body sizes).
- [ ] Spacing/sizing scale defined (consistent with Tailwind's default or a documented override).
- [ ] Tone/imagery direction documented (e.g. warm, photo-forward, plant-first).

---

### #3 — Shared layout definition

**Depends on:** #1, #2
**Labels:** `milestone-0`, `design`

**Context**
Header, footer, and page container behavior are shared across every page — defining this once avoids inconsistency across the seven per-page wireframes that follow.

**Acceptance criteria**
- [ ] Header/nav layout defined (desktop + mobile), including primary CTA placement (Call/WhatsApp/Directions per SRS §3.1).
- [ ] Footer layout defined (links, contact info, socials if any).
- [ ] Page container/grid rules defined (max width, breakpoints, gutter).
- [ ] Layout is documented as reusable by all page wireframes below.

---

### #4 — Wireframe: Home / Landing

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: hero, value proposition, featured/seasonal plants, "why choose us", testimonials, primary CTA.

**Acceptance criteria**
- [ ] Wireframe covers every content block listed for Home in #1.
- [ ] Mobile and desktop breakpoints both shown.
- [ ] Primary CTA (Call/WhatsApp/Directions) is visually prominent above the fold.

---

### #5 — Wireframe: Catalog

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: grid of plants grouped by category, client-side filters (category, light/water needs, size), links to detail pages. No cart/checkout.

**Acceptance criteria**
- [ ] Wireframe shows the plant grid and category grouping.
- [ ] Filter UI is wireframed (including mobile filter interaction, since it needs a Radix-based dropdown/dialog per SRS §5).
- [ ] Empty-state (no results after filtering) is covered.

---

### #6 — Wireframe: Plant Detail

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: photos, care instructions, informational price display, related plants.

**Acceptance criteria**
- [ ] Wireframe covers photo gallery, care instructions, price display, and related-plants section.
- [ ] Clear that price is informational only (no cart/buy action) per SRS §1.1 scope.

---

### #7 — Wireframe: About

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: business story, nursery photos, team.

**Acceptance criteria**
- [ ] Wireframe covers story, photo gallery, and team sections.

---

### #8 — Wireframe: Blog (listing + detail)

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: MDX-authored plant-care articles; listing page + detail pages; written for SEO/organic traffic.

**Acceptance criteria**
- [ ] Listing page wireframe covers article previews (title, excerpt, image, date).
- [ ] Detail page wireframe covers article body, metadata, and related-posts section.

---

### #9 — Wireframe: Location / Visit Us

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: embedded Google Maps `<iframe>`, address, store hours, directions link, tel/WhatsApp CTA.

**Acceptance criteria**
- [ ] Wireframe covers map embed, address/hours block, and CTA placement.

---

### #10 — Wireframe: Contact

**Depends on:** #1, #2, #3
**Labels:** `milestone-0`, `wireframe`

**Context**
Per SRS §3.1: primary tel/WhatsApp click-to-chat links; secondary optional form posting to a third-party endpoint.

**Acceptance criteria**
- [ ] Wireframe covers primary tel/WhatsApp CTAs as the dominant path.
- [ ] Optional form fields are wireframed, including validation/error states (SRS §5 react-hook-form + Zod).

---

### #11 — Component inventory

**Depends on:** #4, #5, #6, #7, #8, #9, #10
**Labels:** `milestone-0`, `docs`

**Context**
With every page wireframed, extract the full set of reusable components needed to build them, split into UI primitives vs. page-level blocks (matching SRS §7's `components/ui` / `components/blocks` split).

**Acceptance criteria**
- [ ] Every wireframe from #4-#10 has been reviewed and its components extracted.
- [ ] Components are split into `ui/` (primitives: Button, Card, Badge, etc.) and `blocks/` (compositions: Hero, PlantCard, CTASection, etc.).
- [ ] Any component needing Radix for accessibility (mobile nav, filter dropdowns, dialogs per SRS §5) is flagged.
- [ ] List is ready to seed Milestone 1's scaffold.

---

## Milestone 1 — Base Setup + Test Suite

### #12 — Scaffold Next.js app

**Depends on:** #11
**Labels:** `milestone-1`, `setup`

**Context**
With Milestone 0's component inventory in hand, stand up the actual Next.js project per SRS §5 (Next 16.2.x, React 19.0.x, TypeScript 6.0.x, Tailwind 4.3.x) and §7's folder structure.

**Acceptance criteria**
- [ ] `create-next-app` scaffold confirmed on Next 16.2.x / React 19.0.x, pinned manually if CLI defaults drift (per SRS §8).
- [ ] TypeScript 6.0.x and Tailwind CSS 4.3.x configured.
- [ ] Folder structure matches SRS §7 (`app/(site)/`, `components/ui`, `components/blocks`, `content/`, `tests/unit`, `tests/e2e`).
- [ ] App builds and runs locally (`next dev`) with no errors.

---

### #13 — Configure Velite content layer

**Depends on:** #12
**Labels:** `milestone-1`, `setup`

**Context**
Per SRS §5, Velite compiles MDX/JSON/YAML in `content/` into typed data via Zod schemas, used for both the plant catalog and the blog.

**Acceptance criteria**
- [ ] Velite installed and configured to compile `content/plants/*.json` and `content/blog/*.mdx`.
- [ ] Zod schema defined for plant entries (matching the Plant Detail fields from #6).
- [ ] Zod schema defined for blog entries (matching the Blog fields from #8).
- [ ] A sample plant JSON and sample blog MDX compile cleanly under TypeScript 6.0.x (per SRS §8).

---

### #14 — Configure Biome

**Depends on:** #12
**Labels:** `milestone-1`, `setup`

**Context**
Per SRS §5, Biome is the single lint/format tool for the project (replaces ESLint+Prettier).

**Acceptance criteria**
- [ ] Biome installed and configured.
- [ ] Lint/format scripts added to `package.json`.
- [ ] Running the lint script on the initial scaffold reports no errors.

---

### #15 — Configure Vitest + React Testing Library

**Depends on:** #12
**Labels:** `milestone-1`, `testing`

**Context**
Per SRS §6, unit tests cover Zod/Velite schemas and utility functions; component tests cover interactive pieces only.

**Acceptance criteria**
- [ ] Vitest 4.1.x configured for the project.
- [ ] `@testing-library/react` + `jest-dom` configured.
- [ ] `tests/unit` directory wired into the Vitest config.

---

### #16 — Configure Playwright

**Depends on:** #12
**Labels:** `milestone-1`, `testing`

**Context**
Per SRS §6, E2E smoke tests run against the production build, not the dev server.

**Acceptance criteria**
- [ ] `@playwright/test` 1.60.x configured.
- [ ] `tests/e2e` directory wired into the Playwright config.
- [ ] Config runs against a production build (`next build && next start`), not `next dev`.

---

### #17 — Minimal smoke test passing in both layers

**Depends on:** #13, #14, #15, #16
**Labels:** `milestone-1`, `testing`

**Context**
Confirms the whole scaffold works end-to-end before any real feature work starts, per SRS §8's verification step.

**Acceptance criteria**
- [ ] `vitest run` passes with at least one real unit test (e.g. validating the Velite plant schema from #13).
- [ ] `npx playwright test` passes with at least one real E2E test (e.g. homepage loads and returns 200).
- [ ] Both commands run cleanly from a clean checkout, with no undocumented manual setup steps.

---

## Milestone 2 — CI Pipeline

### #18 — GitHub Actions workflow: `vitest run` on push/PR

**Depends on:** #15
**Labels:** `milestone-2`, `ci`

**Context**
Per SRS §6, CI must run `vitest run` on every push before merge to `main`.

**Acceptance criteria**
- [ ] Workflow triggers on `push` and `pull_request`.
- [ ] Workflow installs dependencies and runs `vitest run`.
- [ ] A PR with a deliberately failing unit test shows a red check.

---

### #19 — GitHub Actions workflow: `playwright test` on push/PR

**Depends on:** #16
**Labels:** `milestone-2`, `ci`

**Context**
Per SRS §6, E2E tests run against the production build in CI.

**Acceptance criteria**
- [ ] Workflow builds the app (`next build`) before running Playwright.
- [ ] Workflow runs `npx playwright test` against the built app.
- [ ] A PR with a deliberately failing E2E test shows a red check.

---

### #20 — Branch protection requiring CI pass before merge

**Depends on:** #18, #19
**Labels:** `milestone-2`, `ci`

**Context**
Per SRS §6, tests must pass before merge to `main`.

**Acceptance criteria**
- [ ] Branch protection rule on `main` requires both CI checks (#18, #19) to pass.
- [ ] Direct pushes to `main` bypassing CI are disabled (or restricted to admins only).

---

## Milestone 3 — Docker + CI/CD for Deployment

### #21 — Write Dockerfile

**Depends on:** #12
**Labels:** `milestone-3`, `deployment`

**Context**
Containerize the app for reproducible builds and deployment/local-parity testing.

**Acceptance criteria**
- [ ] Dockerfile builds the app as a production-ready image (multi-stage: deps → build → run).
- [ ] Image runs the app and serves it on a configurable port.
- [ ] Image size is reasonable (no dev dependencies in the final stage).

---

### #22 — Extend CI workflow with production build verification

**Depends on:** #18
**Labels:** `milestone-3`, `ci`

**Context**
Confirms the app builds successfully (not just passes tests) before it's eligible for deploy.

**Acceptance criteria**
- [ ] CI workflow includes a `next build` (or Docker build, from #21) step that must succeed.
- [ ] Build failures block merge, same as test failures.

---

### #23 — Wire auto-deploy to Vercel on merge to main

**Depends on:** #20
**Labels:** `milestone-3`, `deployment`

**Context**
Per SRS §1.4, Vercel is the deployment target; deploys should be automatic once CI passes.

**Acceptance criteria**
- [ ] Vercel project connected to the GitHub repo.
- [ ] Merge to `main` triggers an automatic production deploy.
- [ ] Preview deploys are generated for PRs.

---

### #24 — Document local Docker run instructions

**Depends on:** #21
**Labels:** `milestone-3`, `docs`

**Context**
Even though Vercel is the deploy target, Docker is useful for local parity and testing.

**Acceptance criteria**
- [ ] README or docs section explains `docker build` / `docker run` commands.
- [ ] Instructions verified by actually running the container locally.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Milestone 0 issue breakdown (#1-#11). |
| 1.1 | 2026-07-15 | Draft | Added Milestone 1 (#12-#17), Milestone 2 (#18-#20), Milestone 3 (#21-#24). Milestone 4 intentionally excluded for now. |
