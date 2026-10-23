import type { APIRoute } from 'astro'

import { type Language, localesWithoutDefault } from '@/i18n/ui'

import { generateRssResponse } from '@/utils/rss'

export const getStaticPaths = () => {
  return localesWithoutDefault.map((lang) => ({
    params: {
      lang,
    },
  }))
}

export const GET: APIRoute = async ({ params }) =>
  generateRssResponse(params.lang as Language)
