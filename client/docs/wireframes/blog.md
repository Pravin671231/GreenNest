# GreenNest — Wireframe: Blog (Listing + Detail)

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Blog listing (`/blog`) and detail (`/blog/[slug]`) pages, satisfying [`../issues.md`](../issues.md) #8. Covers every content block listed for Blog in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md). Articles are MDX-authored, written for SEO/organic traffic (SRS §3.1).

---

## Listing Page (`/blog`)

### Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│  BLOG — plant-care articles                                           │
├────────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  Watering Your Monstera: A Beginner's Guide              │
│  │  Image   │  Excerpt — one or two lines of preview text...          │
│  └─────────┘  2026-07-10                                              │
│                                                                        │
│  ┌─────────┐  5 Low-Light Plants for Indoor Spaces                    │
│  │  Image   │  Excerpt — one or two lines of preview text...          │
│  └─────────┘  2026-07-02                                              │
│                                                                        │
│  ... (repeats, one row per article → links to /blog/[slug])           │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

### Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ BLOG                        │
├───────────────────────────┤
│ [ Image ]                   │
│ Watering Your Monstera       │
│ Excerpt — preview text...    │  ← image above text, stacked card
│ 2026-07-10                    │
│                             │
│ [ Image ]                    │
│ 5 Low-Light Plants           │
│ Excerpt — preview text...     │
│ 2026-07-02                    │
├───────────────────────────┤
│ FOOTER                        │
└───────────────────────────┘
```

### Listing — Content Block Coverage

- [x] Article title
- [x] Excerpt
- [x] Image
- [x] Date

---

## Detail Page (`/blog/[slug]`)

### Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│ Blog / Watering Your Monstera: A Beginner's Guide      ← breadcrumb   │
├────────────────────────────────────────────────────────────────────┤
│  Watering Your Monstera: A Beginner's Guide            (H1)          │
│  2026-07-10  ·  5 min read                              ← metadata   │
│                                                                       │
│  [ Cover Image ]                                                     │
│                                                                       │
│  Article body — MDX-rendered prose: headings, paragraphs,            │
│  inline images, lists, as authored.                                  │
│                                                                       │
├────────────────────────────────────────────────────────────────────┤
│  RELATED POSTS                                                        │
│  [Card] [Card] [Card]         ← each card → its own detail page       │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

### Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ ‹ Back to Blog               │
├───────────────────────────┤
│ Watering Your Monstera        │  ← H1, wraps as needed
│ 2026-07-10 · 5 min read        │  ← metadata
│ [ Cover Image ]                │
│                              │
│ Article body — MDX-rendered   │
│ prose, full-width, single      │
│ column                         │
├───────────────────────────┤
│ RELATED POSTS                  │
│ [Card][Card][Card] →           │  ← horizontal scroll/swipe
├───────────────────────────┤
│ FOOTER                         │
└───────────────────────────┘
```

### Detail — Content Block Coverage

- [x] Article body (MDX-rendered)
- [x] Metadata (date, read time)
- [x] Related-posts section

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Blog wireframe (issue #8): listing page (previews) and detail page (body, metadata, related posts), desktop + mobile. |
