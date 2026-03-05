import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  meta_title: z.string().optional(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  categories: z.array(z.string()).default(() => []),
  author: z.string().optional(),
  tags: z.array(z.string()).default(() => []),
  draft: z.boolean().default(false),
});

export const collections = {
  blog: defineCollection({ schema: postSchema }),
  pages: defineCollection({ schema: postSchema }),
};
