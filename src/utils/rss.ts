import config from '@/data/config'

import { defaultLang, langCodes, type Language } from '@/i18n/ui'
import { useTranslations } from '@/i18n/utils'

import { getPosts } from '@/lib/contentApi'

import { getBlogPath, getHomePath, getRssPath } from '@/utils/pathHelper'

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export const generateRssResponse = async (lang: Language = defaultLang) => {
  const t = useTranslations(lang)
  const posts = (await getPosts(lang)).filter((post) => post.data.isPublish)

  const siteTitle = t('site.title') || config.title
  const siteDescription = t('site.description') || config.description
  const channelLink = new URL(getHomePath(lang), config.siteUrl).href
  const selfLink = new URL(getRssPath(lang), config.siteUrl).href

  const itemsXml = posts
    .map((post) => {
      const postUrl = new URL(getBlogPath(lang, post.id), config.siteUrl).href
      const categories = (post.data.tags ?? [])
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join('')

      return `<item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${new Date(post.data.publishedAt).toUTCString()}</pubDate>
      ${categories}
    </item>`
    })
    .join('\n    ')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <description>${escapeXml(siteDescription)}</description>
    <link>${escapeXml(channelLink)}</link>
    <language>${langCodes[lang]}</language>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
