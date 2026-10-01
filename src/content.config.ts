import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection, reference } from 'astro:content'

import { tagSlugEnum } from '@/data/tags'

const postsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
    generateId: ({ entry, data }) => {
      const slug = typeof data.slug === 'string' ? data.slug.trim() : ''
      if (!slug) {
        throw new Error(
          `Post "${entry}" is missing a "slug" frontmatter field. It is required to generate stable URLs and to resolve relatedPosts/translated references.`,
        )
      }
      return slug
    },
  }),
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
  loader: glob({
    pattern: '*.{md,mdx}',
    base: './src/content/privacy',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
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
