import { getCollection, getEntries } from 'astro:content'
import i18next from 'i18next'

export const getPosts = async () => {
  const currentLanguage = i18next.language

  const posts = await getCollection('posts', ({ id, data }) => {
    const isDev = process.env.NODE_ENV !== 'production'
    return (
      id.startsWith(`${currentLanguage}/`) && (data.isDraft === false || isDev)
    )
  })
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
    )
  })
  return sortedPosts
}

export const getPostsByTag = async (tag: string) => {
  const posts = await getPosts()
  return posts.filter((post) => post.data.tags?.includes(tag))
}

export const getRelatedPosts = async (relatedPosts: any) => {
  return await getEntries(relatedPosts)
}
