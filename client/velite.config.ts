import { defineCollection, defineConfig, s } from "velite";

// Fields match the Plant Detail wireframe (client/docs/wireframes/plant-detail.md #6):
// photo gallery, care instructions, informational price, related plants.
const plants = defineCollection({
  name: "Plant",
  pattern: "plants/*.json",
  schema: s.object({
    slug: s.slug("plants"),
    name: s.string(),
    category: s.string(),
    price: s.number(),
    light: s.enum(["Low", "Medium", "High"]),
    water: s.enum(["Low", "Medium", "High"]),
    size: s.enum(["Small", "Medium", "Large"]),
    soil: s.string(),
    difficulty: s.enum(["Easy", "Moderate", "Difficult"]),
    images: s.array(s.string()).min(1),
    relatedSlugs: s.array(s.string()).optional(),
  }),
});

// Fields match the Blog wireframe (client/docs/wireframes/blog.md #8):
// listing previews (title, excerpt, image, date) + detail (body, metadata, related posts).
const posts = defineCollection({
  name: "Post",
  pattern: "blog/*.mdx",
  schema: s.object({
    slug: s.slug("posts"),
    title: s.string(),
    excerpt: s.string(),
    date: s.isodate(),
    image: s.string(),
    metadata: s.metadata(),
    body: s.mdx(),
    relatedSlugs: s.array(s.string()).optional(),
  }),
});

export default defineConfig({
  collections: { plants, posts },
});
