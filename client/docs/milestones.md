# GreenNest — Product Development Milestones

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

This document defines the phase order for building GreenNest. Related docs: [`../../docs/SRS.md`](../../docs/SRS.md) (requirements) and [`./srs-client.md`](./srs-client.md) (client-side orientation pointer).

---

## Milestone 0 — Planning & Design Docs

**Goal:** Establish the reference plan that every later milestone builds against.

**Deliverables:**
- Reference-base page list-out (which pages exist, per SRS §3.1)
- Design direction (visual style, tone)
- Wireframes for each page
- Layouts (page-level composition)
- Component inventory (UI primitives + page-level blocks)

**Exit criteria:** every page in SRS §3.1 has an agreed wireframe/layout and the component list needed to build it is known.

---

## Milestone 1 — Base Setup + Test Suite

**Goal:** Stand up the app skeleton with testing wired in from day one, not bolted on later.

**Deliverables:**
- Project scaffold per SRS §7 structure and §5 stack (Next.js, TypeScript, Tailwind, Velite, etc.)
- Vitest + React Testing Library configured (unit/component layer, SRS §6)
- Playwright configured (E2E layer, SRS §6)
- A minimal smoke test passing in both layers

**Exit criteria:** `vitest run` and `npx playwright test` both execute cleanly against the scaffold (per SRS §8 verification).

---

## Milestone 2 — CI Pipeline (GitHub Actions)

**Goal:** Automated tests run on every push, not just locally.

**Deliverables:**
- GitHub Actions workflow running `vitest run` and `playwright test` on push/PR
- Branch protection requiring the workflow to pass before merge to `main`

**Exit criteria:** a PR with a failing test is blocked from merge; a PR with passing tests shows a green check.

---

## Milestone 3 — Docker + CI/CD for Deployment

**Goal:** Reliable, repeatable deployment pipeline.

**Deliverables:**
- Dockerfile for the app (build + run)
- CI/CD pipeline stage: build → test → deploy
- Deployment target confirmed (Vercel, per SRS §1.4) and wired into the pipeline

**Exit criteria:** a merge to `main` results in an automated deploy without manual steps.

---

## Milestone 4 — Feature Build-out

**Goal:** Implement the site page by page against the Milestone 0 plan.

**Deliverables:**
- Features/pages built incrementally, each on its own branch
- Feature branches rebased onto `main` (not merge commits) to keep history linear
- Each feature merged only once its own tests (unit/component/E2E) pass in CI

**Exit criteria:** all pages from SRS §3.1 are implemented, tested, and deployed.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial milestone roadmap created (Milestones 0-4). |
