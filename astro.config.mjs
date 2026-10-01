import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import config from './src/data/config'
import { defaultLang, langCodes, locales } from './src/i18n/ui'
import {
  getPostsSitemap,
  linkItemTranslated,
} from './src/script/getPostSitemap.js'

// Get posts data for sitemap
const posts = getPostsSitemap()

// Calculate the latest post date for the blog index
const latestPostDate = posts.reduce((latest, post) => {
  const postDate = new Date(post.lastmod)
  return postDate > latest ? postDate : latest
}, new Date(0))

const LAST_UPDATE_BLOG = latestPostDate.toISOString()
const LAST_UPDATE_HOME = new Date().toISOString()

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: langCodes,
      },
      async serialize(item) {
        if (item.url.includes('/blog/tag/')) {
          return false
        }

        // Check if this is a blog post URL
        const blogPostMatch = item.url.match(/\/blog\/([^/]+)\/?$/)
        if (blogPostMatch) {
          const slug = blogPostMatch[1]
          const lang = item.url.includes('/es/') ? 'es' : 'en'
          const post = posts.find((p) => p.slug === slug && p.lang === lang)

          if (post) {
            return {
              ...item,
              links: [
                {
                  url: item.url,
                  lang: langCodes[lang],
                },
                linkItemTranslated(lang, post.translated),
              ],
              lastmod: post.lastmod,
            }
          }
        }

        if (item.url.includes('/blog/')) {
          return {
            ...item,
            lastmod: new Date(LAST_UPDATE_BLOG).toISOString(),
          }
        }

        return {
          ...item,
          lastmod: new Date(LAST_UPDATE_HOME).toISOString(),
        }
      },
    }),
    mdx(),
    react(),
  ],
  i18n: {
    defaultLocale: defaultLang,
    locales: locales,
  },
  site:
    process.env.NODE_ENV === 'production'
      ? config.siteUrl
      : 'http://localhost:4321',
  // Astro 7 changed the `compressHTML` default from `true` to `'jsx'` (strips
  // whitespace between inline elements). Pinned to `true` to keep the v5
  // output identical and avoid words gluing together in prose and links.
  compressHTML: true,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
  },
})
