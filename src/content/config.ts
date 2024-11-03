import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.date().transform((str) => new Date(str)),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    }),
  }),
}
