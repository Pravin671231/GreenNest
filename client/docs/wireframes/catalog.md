# GreenNest — Wireframe: Catalog

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Catalog page, satisfying [`../issues.md`](../issues.md) #5. Covers every content block listed for Catalog in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md). No cart/checkout — cards link to Plant Detail (`/catalog/[slug]`) only.

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│  CATALOG                                                            │
│  Filters:  [ Category ▾ ]  [ Light/Water ▾ ]  [ Size ▾ ]   [Clear]  │ ← inline dropdown row (Radix)
├────────────────────────────────────────────────────────────────────┤
│  Indoor                                                             │
│  [Card] [Card] [Card] [Card]        ← each card → /catalog/[slug]   │
│                                                                      │
│  Outdoor                                                            │
│  [Card] [Card] [Card] [Card]                                        │
│                                                                      │
│  Succulents                                                         │
│  [Card] [Card] [Card] [Card]                                        │
│                                                                      │
│  Flowering                                                          │
│  [Card] [Card] [Card] [Card]        ← grid repeats per category      │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                              │
└────────────────────────────────────────────────────────────────────┘
```

### Desktop — empty state (filters active, no matches)

```
┌────────────────────────────────────────────────────────────────────┐
│  Filters:  [Category: Succulents ▾] [Light: Low ▾] [Size: Large ▾]  [Clear] │
├────────────────────────────────────────────────────────────────────┤
│                                                                       │
│                    [Icon]                                            │
│              No plants match your filters                            │
│         Try removing a filter, or  [ Clear all filters ]             │
│                                                                       │
└────────────────────────────────────────────────────────────────────┘
```

---

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ CATALOG                    │
│ [ Filters (0) ▾ ]          │ ← button opens filter dialog; badge shows active count
├───────────────────────────┤
│ Indoor                     │
│ [Card] [Card]               │ ← wraps to 2-up grid
│ [Card] [Card]               │
│                            │
│ Outdoor                    │
│ [Card] [Card]               │
│ ...                        │  ← repeats per category
├───────────────────────────┤
│ FOOTER                     │
└───────────────────────────┘
```

### Mobile filter interaction (Radix `Dialog`, full-screen/bottom-sheet)

Per SRS §5, mobile filter UI is accessibility-critical interactive UI — built with a Radix `Dialog` (not a plain dropdown), triggered by the "Filters" button:

```
┌───────────────────────────┐
│  Filters             [X]   │
├───────────────────────────┤
│ Category                   │
│  ( ) Indoor   ( ) Outdoor   │
│  ( ) Succulents ( ) Flowering│
│                             │
│ Light / Water needs         │
│  ( ) Low  ( ) Medium ( ) High│
│                             │
│ Size                        │
│  ( ) Small ( ) Medium ( ) Large │
├───────────────────────────┤
│ [ Clear ]    [ Apply (12) ] │ ← sticky action row; count = live match preview
└───────────────────────────┘
```

- Focus is trapped inside the dialog while open (Radix default); closes on Apply, Clear, `Esc`, or backdrop tap.
- "Apply (N)" shows a live count of matching plants before the user commits, so they don't apply a filter combination blind.

### Mobile — empty state

```
┌───────────────────────────┐
│ [ Filters (3) ▾ ]          │
├───────────────────────────┤
│                            │
│        [Icon]              │
│   No plants match          │
│   your filters              │
│   [ Clear all filters ]    │
│                            │
├───────────────────────────┤
│ FOOTER                     │
└───────────────────────────┘
```

---

## Content Block Coverage

- [x] Plant grid grouped by category (indoor, outdoor, succulents, flowering, etc.)
- [x] Client-side filters (category, light/water needs, size) — desktop inline dropdowns, mobile Radix `Dialog`
- [x] Empty-state (no results after filtering) — desktop and mobile
- [x] Links to detail pages (each card → `/catalog/[slug]`)

No cart/checkout affordance appears anywhere in this wireframe, per SRS §1.2/§3.1 scope.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Catalog wireframe (issue #5): grid + category grouping, desktop/mobile filter UI (Radix Dialog on mobile), empty state. |
