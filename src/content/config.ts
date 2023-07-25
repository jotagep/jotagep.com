import { defineCollection, reference, z } from 'astro:content'

import { tagSlugEnum } from '@/data/tags'

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image()
        .refine((img) => img.width >= 600, {
          message: 'Cover image must be at least 600 pixels wide!',
        })
        .optional(),
      publishedAt: z.date(),
      description: z.string(),
      relatedPosts: z.array(reference('posts')).optional(),
      tags: z.array(tagSlugEnum).optional(),
      translated: reference('posts').optional(),
      isPublish: z.boolean(),
      isDraft: z.boolean().default(false),
    }),
})

export const collections = { posts: postsCollection }
