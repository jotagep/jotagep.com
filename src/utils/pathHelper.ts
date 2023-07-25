import { localizePath } from 'astro-i18next'

import { ROUTES } from '@/data/config'

export const getHomePath = () => {
  return localizePath(ROUTES.HOME)
}

export const getBlogPath = (slug = '') => {
  return localizePath(`${ROUTES.BLOG}/${slug}`).replace(/\/$/, '')
}

export const getTagPath = (tag = '') => {
  return localizePath(`${ROUTES.TAG}/${tag}`).replace(/\/$/, '')
}
