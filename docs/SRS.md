# GreenNest — Software Requirements Specification (SRS)

**Version:** 1.2
**Status:** Final
**Last Updated:** 2026-07-15

## 1. Introduction

### 1.1 Purpose
This SRS defines the requirements for the GreenNest website: a multi-page Next.js application for an offline (physical/in-store) ornamental plant business. The site's job is to showcase the plant catalog, build trust, and drive foot traffic / inquiries to the physical store — it is not an e-commerce checkout system.

### 1.2 Scope
- In scope: landing page, browsable plant catalog (no cart/checkout), blog, location/visit-us page, contact/inquiry page, About page, SEO infrastructure.
- Out of scope (explicit, per stakeholder decision): user accounts, shopping cart/checkout/payments, database-backed backend, headless CMS, custom email-sending API routes.

### 1.3 Ownership & Maintenance Model
Content (plant catalog entries, blog posts) is authored and updated by the developer directly in the codebase (MDX/JSON files), occasionally — not by non-technical store staff, and not through a CMS UI. This decision shapes several downstream technology choices below.

### 1.4 Deployment Target
Vercel (native Next.js hosting).

---

## 2. Overall Description

The product is a **static-first, developer-maintained marketing and catalog site**. There is no database and no custom backend service — inquiries are funneled through direct `tel:`/WhatsApp links, with an optional form that posts to a third-party no-backend form endpoint (e.g., Web3Forms) rather than a self-hosted API route.

---

## 3. Functional Requirements

### 3.1 Pages

| Page | Requirements |
|---|---|
| **Home / Landing** | Hero section, value proposition, featured/seasonal plants, "why choose us", testimonials, primary CTA (Call / WhatsApp / Get Directions). |
| **Catalog** | Grid of plants grouped by category (indoor, outdoor, succulents, flowering, etc.); client-side filters (category, light/water needs, size); links to detail pages. No cart, no checkout, no payment. |
| **Plant Detail** | Dynamic route per plant (from local data): photos, care instructions, price display (informational only), related plants. |
| **About** | Business story, nursery photos, team. |
| **Blog** | Plant-care articles authored in MDX; listing page + detail pages; written for SEO/organic search traffic. |
| **Location / Visit Us** | Embedded Google Maps `<iframe>`, address, store hours, directions link, `tel:`/WhatsApp CTA. |
| **Contact** | Primary: `tel:` and WhatsApp click-to-chat links. Secondary (optional): lightweight form posting to a third-party no-backend form endpoint. |

### 3.2 Cross-Cutting Functional Requirements
- SEO: per-page metadata via the Next.js Metadata API, `sitemap.ts`, `robots.ts`, Open Graph images, and `LocalBusiness` JSON-LD structured data (important for local search discoverability given the business is physical/offline).
- All catalog and gallery images served through `next/image` for optimization.
- Lightweight, cookie-consent-free analytics (Vercel Analytics) to observe page/plant traffic.

---

## 4. Non-Functional Requirements
- **Performance**: static generation for all content pages; Lighthouse/PageSpeed targets validated before adding any animation.
- **Accessibility**: keyboard navigation, sufficient contrast, alt text on all plant photography.
- **Maintainability**: content changes should be possible via a code change + redeploy, with type safety on content data (no silent schema drift between catalog/blog entries).
- **No backend/database**: reinforced as a constraint, not just an initial-launch simplification — keeps hosting and ongoing maintenance costs minimal for a solo-maintained site.

---

## 5. Technology Stack (verified stable as of July 2026)

| Concern | Choice | Version | Rationale |
|---|---|---|---|
| Framework | `next` | **16.2.x** | Current stable major; Turbopack default, Node 20+ baseline. Avoid 16.3 (still preview). |
| UI runtime | `react` / `react-dom` | **19.0.x** (19.0.7+) | React 19 is the current stable line; React 20 is still in RFC/dev — not production-ready. |
| Language | `typescript` | **6.0.x** | TypeScript 7.0 (GA July 8, 2026) is a Go-native rewrite that dropped the JS Compiler API, currently breaking MDX/webpack-loader tooling (incl. the Velite content pipeline) until TS 7.1 restores a programmatic API (~3-4 months out). TS 6.0 is the final JS-based release, fully tool-compatible, and still officially current. Revisit TS 7 once the content pipeline confirms support. |
| Styling | `tailwindcss` | **4.3.x** | CSS-native v4 engine (cascade layers, `@property`), significantly faster builds; current stable line. |
| Components | Custom components built directly with Tailwind CSS (no shadcn/ui) + `@radix-ui/react-*` primitives, `class-variance-authority`, `tailwind-merge`, `clsx` | latest | No third-party component library layer — components are hand-built for this site. Use Radix primitives directly only where accessibility-critical interactivity is needed (mobile nav, filter dropdowns, dialogs). Server Components by default, `"use client"` only on those interactive pieces. |
| Icons | `react-icons` | latest | Aggregates multiple icon sets (Feather, Font Awesome, Material, etc.) behind one package. |
| Content layer | `velite` | latest | Zod-schema-validated data layer compiling MDX/JSON/YAML in `content/` into typed data — used for both the blog and the plant catalog. Actively maintained (successor to the now-abandoned Contentlayer); handles static asset copying for content images automatically. |
| Forms/validation | `react-hook-form` **7.66.x**, `zod` **4.1.x**, `@hookform/resolvers` **5.2.x** | as listed | Standard, type-safe form stack; same Zod schema validates the optional contact form client-side. |
| Contact form backend | Web3Forms or Formspree (external, free tier) | n/a | Keeps the site fully static/no custom backend, per requirements — form POSTs directly to the third-party endpoint. |
| Animation (optional/light) | `motion` (formerly `framer-motion`) | **12.x** | Import from `motion/react`, not the legacy `framer-motion` package. Use sparingly (hero/scroll reveals only) to keep a marketing site fast. |
| Linting/formatting | `biome` | latest | Officially supported by Next.js since 15.5; single config, far faster than ESLint+Prettier; sufficient for a project this size without ESLint's plugin ecosystem. |
| Package manager | `npm` | latest (bundled with Node 20+) | Zero-effort default — ships with Node, no extra install/onboarding step, works fine for a single-app (non-monorepo) project of this size. |
| Maps | none — Google Maps `<iframe>` embed | n/a | No API key or package needed for a single static location. |
| Hosting/analytics | Vercel + `@vercel/analytics`, `@vercel/speed-insights` | latest | Native to the chosen deployment target, no extra configuration. |
| Unit/component testing | `vitest`, `@vitest/browser-playwright` | **4.1.x** | Current default for new projects — Vite-native, 2-4x faster than Jest, near-identical API, officially documented by Next.js for App Router unit testing. |
| Testing utilities | `@testing-library/react`, `@testing-library/jest-dom` | latest | Standard companion to Vitest for testing component output/interaction without relying on implementation details. |
| E2E testing | `@playwright/test` | **1.60.x** | Current leader for E2E in 2026 — less flaky than Cypress, first-class TypeScript, officially documented by Next.js for App Router E2E testing. |

**Explicitly deferred:** headless CMS (Sanity/Payload), any database (Postgres/Neon), custom email-sending API routes — not essential for the initial static, developer-maintained site.

---

## 6. Testing Strategy

Scoped to what a small, developer-maintained static site actually needs — not full enterprise coverage.

| Layer | Tool | Covers |
|---|---|---|
| Unit | Vitest | Zod/Velite content schemas (plant + blog frontmatter validation), utility/helper functions (filtering, formatting). |
| Component | Vitest + React Testing Library | Interactive pieces only — catalog filter logic, mobile nav, contact form validation states. Server Components with no interactivity are not unit-tested; they're covered by E2E. |
| E2E (smoke) | Playwright | Critical user journeys: home → catalog → plant detail navigation; catalog filtering; all `tel:`/WhatsApp CTA links resolve; Location page map renders; contact form (if used) submits successfully; sitemap/robots respond. Run against the production build, not dev server. |

Not included: visual regression testing, load/performance testing, accessibility audit automation (beyond Biome's built-in a11y lint rules) — can be added later if the site's complexity grows.

CI: run `vitest run` and `playwright test` on every push via GitHub Actions (or Vercel's build step) before merge to `main`.

---

## 7. Proposed Project Structure (for a future implementation pass)

```
content/
  plants/*.json        # catalog entries (Zod schema via Velite)
  blog/*.mdx            # plant-care articles
app/
  (site)/page.tsx                  # Home
  (site)/catalog/page.tsx          # Catalog grid + filters
  (site)/catalog/[slug]/page.tsx   # Plant detail
  (site)/about/page.tsx
  (site)/blog/page.tsx
  (site)/blog/[slug]/page.tsx
  (site)/visit-us/page.tsx         # Map + hours
  (site)/contact/page.tsx
  sitemap.ts
  robots.ts
components/
  ui/         # hand-built primitives (Button, Card, etc.) + Radix-based interactive elements
  blocks/     # page-level compositions (Hero, PlantCard, CTASection, etc.)
docs/
  SRS.md      # this document
tests/
  unit/       # Vitest unit + component specs
  e2e/        # Playwright specs
```

---

## 8. Verification
- Version numbers above should be re-validated against npm/release notes at the start of actual implementation, since this is a fast-moving stack and time will have passed between spec and build.
- Before scaffolding: confirm `create-next-app` defaults to Next 16.2.x / React 19.0.x (pin manually if the CLI defaults drift), and that `velite` compiles a sample MDX + JSON entry cleanly under TypeScript 6.0.x.
- Confirm `vitest run` and `npx playwright test` both execute cleanly against a minimal scaffold before building out full page content.
