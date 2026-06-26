import { defineCollection, reference, z } from 'astro:content'

import { tagSlugEnum } from '@/data/tags'

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().optional(),
      publishedAt: z.date(),
      description: z.string(),
      relatedPosts: z.array(reference('posts')).optional(),
      tags: z.array(tagSlugEnum).optional(),
      translated: reference('posts').optional(),
      isPublish: z.boolean(),
      isDraft: z.boolean().default(false),
      objectContainImage: z.boolean().optional().default(false),
    }),
})

const privacyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
  }),
})

export const collections = {
  posts: postsCollection,
  privacy: privacyCollection,
}
