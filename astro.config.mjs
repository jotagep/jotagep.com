import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import config from './src/data/config'

const langCodes = {
  en: 'en-US',
  es: 'es-ES',
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
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
  site: config.siteUrl,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
  },
})
