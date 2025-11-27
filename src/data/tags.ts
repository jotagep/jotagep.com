import { z } from 'astro/zod'

import type { ColorBadge } from '@/components/shared/Badge/badgeHelper'

export type Tag = {
  label: string
  slug: string
  color: ColorBadge
}

export const TAGS: Tag[] = [
  { label: 'Web dev', slug: 'web-dev', color: 'white' },
  { label: 'JavaScript', slug: 'javascript', color: 'yellow' },
  { label: 'AI', slug: 'ai', color: 'orange' },
  { label: 'Angular', slug: 'angular', color: 'red' },
]

const TAG_SLUGS: [Tag['slug'], ...Tag['slug'][]] = [
  TAGS[0].slug,
  ...TAGS.slice(1).map((item) => item.slug),
]

export const tagSlugEnum = z.enum(TAG_SLUGS)
