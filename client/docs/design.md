# GreenNest — Design Direction / Style Guide

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Shared visual language for GreenNest, satisfying [`./issues.md`](./issues.md) #2. This defines tokens and direction — not pixel-perfect mockups. Wireframe issues (#4-#10) and the shared layout (#3) build on top of this. Accessibility targets follow [`../../docs/SRS.md`](../../docs/SRS.md) §4 (sufficient contrast, keyboard navigation).

---

## Color Palette

All text-on-background pairs below are checked against WCAG 2.1 contrast ratios (4.5:1 minimum for normal text, 3:1 for large text/UI components).

### Primary — "Fern Green"

| Token | Hex | Usage |
|---|---|---|
| `primary-50` | `#EAF3EC` | Tinted section backgrounds |
| `primary-100` | `#CFE4D3` | Hover backgrounds, subtle badges |
| `primary-300` | `#8FBF9A` | Borders, disabled states |
| `primary-500` | `#4A8C56` | Secondary accents, icons |
| `primary-600` | `#2F6B3A` | Primary buttons/links — **6.39:1** on white, **6.39:1** with white text on it |
| `primary-700` | `#24512C` | Hover/pressed state, high-contrast headings — **9.18:1** on white |

### Accent — "Terracotta"

| Token | Hex | Usage |
|---|---|---|
| `accent-50` | `#FBEEE6` | Tinted callout backgrounds |
| `accent-100` | `#F5D6C2` | Hover backgrounds |
| `accent-300` | `#E3A57C` | Borders, decorative accents |
| `accent-500` | `#D97742` | Large-scale decorative use (illustrations, graphics) |
| `accent-600` | `#C6602E` | Large text / icons / UI only — **4.11:1** on white (below the 4.5:1 body-text threshold) |
| `accent-700` | `#A44E24` | Use for accent-colored **body text** — **5.69:1** on white |

### Neutrals — warm stone (matches the photo-forward, plant-first tone rather than cool gray)

| Token | Hex | Usage |
|---|---|---|
| `neutral-50` | `#FAFAF9` | Page/section background |
| `neutral-100` | `#F5F5F4` | Card backgrounds |
| `neutral-300` | `#D6D3D1` | Borders, dividers |
| `neutral-600` | `#78716C` | Secondary/muted text — **4.80:1** on white (meets AA minimum) |
| `neutral-900` | `#292524` | Primary body text — **15.17:1** on white |

### Semantic

| Token | Hex | Usage | Contrast on white |
|---|---|---|---|
| `success` | `#2F6B3A` (= `primary-600`) | Success messages/states | 6.39:1 |
| `warning` | `#92400E` (bg tint `#FEF3E2`) | Warning messages/states | 7.09:1 |
| `error` | `#B91C1C` (bg tint `#FEF1F1`) | Error/validation messages (react-hook-form + Zod, SRS §5) | 6.47:1 |
| `info` | `#1D4ED8` (bg tint `#EFF4FE`) | Informational messages | 6.70:1 |

**Rule of thumb:** any `-600` step is safe for large text (≥24px or ≥19px bold) and UI elements (buttons, icons, borders) but not guaranteed for small body text — use the corresponding `-700` step for small running text.

---

## Typography

- **Font family:** Geist Sans (`--font-geist-sans`, already wired via `next/font` in the scaffold) for all UI and body text. Geist Mono is available but not expected to see use outside of any incidental code snippets.
- **Scale:** Tailwind's default `text-*` scale, used as-is (no custom scale needed for a site this size).

| Role | Classes | Usage |
|---|---|---|
| Display / H1 | `text-4xl md:text-5xl font-bold leading-tight` | Hero headline (Home) |
| H2 | `text-3xl md:text-4xl font-bold leading-tight` | Section headings |
| H3 | `text-2xl md:text-3xl font-semibold leading-tight` | Subsection headings |
| H4 | `text-xl font-semibold leading-snug` | Card/component titles |
| Body large | `text-lg leading-relaxed` | Intro paragraphs, value prop copy |
| Body | `text-base leading-relaxed` | Default paragraph text, blog/care-instruction copy |
| Small / caption | `text-sm leading-normal` | Captions, metadata, form labels |

---

## Spacing / Sizing Scale

Uses Tailwind's default spacing scale (4px base unit) **unmodified** — no documented override. A site this size (7 pages, marketing/informational, no complex app UI) doesn't need a custom scale, and deviating adds maintenance cost for no real benefit. Container max-width and grid/breakpoint rules are deferred to the shared layout doc (issue #3), which builds on these tokens.

---

## Tone & Imagery Direction

- **Warm, photo-forward, plant-first:** real nursery photography (plants, store, team) takes visual priority over illustration or stock imagery wherever possible.
- **Natural light, greenery-forward compositions** — avoid heavily staged/studio-lit shots to keep the "physical nursery" feel authentic.
- **Minimal decorative UI chrome** — let photography and the plants themselves carry the visual weight; UI elements (cards, buttons) stay simple and get out of the way.
- **Soft, organic shapes:** rounded corners on cards/images/buttons over sharp edges, echoing the organic subject matter.
- **Iconography:** simple line-style icons (Feather set via `react-icons`, SRS §5) — light and natural rather than heavy/filled icon styles.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial design direction / style guide (issue #2): color palette, typography scale, spacing scale, tone/imagery direction. |
