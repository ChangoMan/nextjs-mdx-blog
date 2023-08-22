import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }))

  const routes = ['', '/about'].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
