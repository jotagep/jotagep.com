import { getCollection, getEntries } from 'astro:content'

import { defaultLang, type Language } from '@/i18n/ui'

export const getPosts = async (lang: Language = defaultLang) => {
  const posts = await getCollection('posts', ({ id, data }) => {
    const isDev = process.env.NODE_ENV !== 'production'
    return id.startsWith(`${lang}/`) && (data.isDraft === false || isDev)
  })
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
    )
  })
  return sortedPosts
}

export const getPostsByTag = async (
  tag: string,
  lang: Language = defaultLang,
) => {
  const posts = await getPosts(lang)
  return posts.filter((post) => post.data.tags?.includes(tag))
}

export const getRelatedPosts = async (relatedPosts: any) => {
  return await getEntries(relatedPosts)
}
