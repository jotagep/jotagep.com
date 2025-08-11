import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { langCodes, locales } from '../i18n/ui'

export function getPostsSitemap() {
  const postsDir = path.join(process.cwd(), 'src/content/posts')
  const posts = []

  for (const lang of locales) {
    const langDir = path.join(postsDir, lang)

    if (!fs.existsSync(langDir)) continue

    const files = fs.readdirSync(langDir)

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue

      const filePath = path.join(langDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      try {
        const { data } = matter(fileContent)

        // Only include published posts
        if (data.isPublish !== false && data.publishedAt && data.slug) {
          posts.push({
            slug: data.slug,
            lastmod: data.publishedAt,
            translated: data.translated,
            lang,
          })
        }
      } catch (error) {
        console.warn(`Error parsing frontmatter for ${filePath}:`, error)
      }
    }
  }

  return posts
}

export function getLastModForSlug(slug, lang) {
  const posts = getPostsSitemap()

  const post = posts.find((p) => p.slug === slug && (!lang || p.lang === lang))

  return post?.lastmod || null
}

export const linkItemTranslated = (lang, slug) => {
  return {
    url: lang === 'es' ? `/blog/${slug}/` : `/es/blog/${slug}/`,
    lang: langCodes[lang === 'es' ? 'en' : 'es'],
  }
}
