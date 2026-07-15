# GreenNest — Client SRS Reference

**Version:** 1.0
**Status:** Active
**Last Updated:** 2026-07-15
**Tracks SRS Version:** 1.2

This is a pointer, not a duplicate. The canonical, authoritative SRS lives at [`../../docs/SRS.md`](../../docs/SRS.md) — always check that file for full detail and the latest updates.

## Quick orientation for work inside `client/`

- **Tech stack** (SRS §5): Next.js 16.2.x, React 19.0.x, TypeScript 6.0.x, Tailwind CSS 4.3.x, Radix UI primitives, Velite for content, react-hook-form + Zod, Vitest + Playwright for testing.
- **Project structure** (SRS §7): `content/` (plants + blog via Velite), `app/(site)/...` routes, `components/ui` + `components/blocks`, `tests/unit` + `tests/e2e`.
- **Pages** (SRS §3.1): Home, Catalog, Plant Detail, About, Blog, Location/Visit Us, Contact.
- **Hard constraints**: no database, no custom backend/API routes, no cart/checkout — static-first, developer-maintained content via MDX/JSON.

For anything beyond this summary — non-functional requirements, testing strategy, verification steps — read [`../../docs/SRS.md`](../../docs/SRS.md) directly.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Active | Initial reference note created, pointing to SRS v1.2. |
