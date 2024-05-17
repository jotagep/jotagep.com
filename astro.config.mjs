import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import config from './src/data/config'
import { defaultLang, langCodes, locales } from './src/i18n/ui'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: langCodes,
      },
      changefreq: 'weekly',
      priority: 0.6,
      async serialize(item) {
        if (/.*\/blog\/(?!tag\/).+/.test(item.url)) {
          return {
            ...item,
            priority: 0.7,
          }
        }

        if (item.url === config.siteUrl) {
          return {
            ...item,
            priority: 1,
          }
        }

        return item
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
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
  },
})
