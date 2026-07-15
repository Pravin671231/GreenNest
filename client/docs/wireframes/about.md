# GreenNest — Wireframe: About

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the About page, satisfying [`../issues.md`](../issues.md) #7. Covers every content block listed for About in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md).

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│  OUR STORY                                                            │
│  ┌─────────────┐   Business story copy — how the nursery started,     │
│  │   Photo      │   what it's about, what makes it different          │
│  │             │   (2-3 paragraphs)                                   │
│  └─────────────┘                                                     │
├────────────────────────────────────────────────────────────────────┤
│  NURSERY PHOTOS                                                       │
│  [Photo] [Photo] [Photo] [Photo]      ← grid gallery                  │
│  [Photo] [Photo] [Photo] [Photo]                                       │
├────────────────────────────────────────────────────────────────────┤
│  MEET THE TEAM                                                        │
│  [Photo]        [Photo]        [Photo]                                 │
│  Name / Role    Name / Role    Name / Role                             │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ OUR STORY                   │
│ [Photo]                     │
│ Business story copy          │  ← photo above text, stacked
│ (2-3 paragraphs)              │
├───────────────────────────┤
│ NURSERY PHOTOS                │
│ [Photo][Photo]                 │  ← 2-up grid
│ [Photo][Photo]                 │
├───────────────────────────┤
│ MEET THE TEAM                  │
│ [Photo]                        │
│ Name / Role                     │  ← stacked cards
│ [Photo]                        │
│ Name / Role                     │
├───────────────────────────┤
│ FOOTER                         │
└───────────────────────────┘
```

---

## Content Block Coverage

- [x] Business story
- [x] Nursery photo gallery
- [x] Team section

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial About wireframe (issue #7): story, photo gallery, team sections, desktop + mobile. |
