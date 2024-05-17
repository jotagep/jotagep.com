import { getRelativeLocaleUrl } from 'astro:i18n'

import { ROUTES } from '@/data/config'

import { defaultLang, type Language } from '@/i18n/ui'

export const getHomePath = (lang: Language = defaultLang) => {
  return getRelativeLocaleUrl(lang, ROUTES.HOME)
}

export const getBlogPath = (lang: Language = defaultLang, slug = '') => {
  return getRelativeLocaleUrl(lang, `${ROUTES.BLOG}/${slug}`).replace(/\/$/, '')
}

export const getTagPath = (lang: Language = defaultLang, tag = '') => {
  return getRelativeLocaleUrl(lang, `${ROUTES.TAG}/${tag}`).replace(/\/$/, '')
}
