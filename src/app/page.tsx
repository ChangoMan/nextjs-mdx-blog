import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <h1>Home Page</h1>
        <p>
          Next.js starter template for your next blog or personal site. Built
          with:
        </p>
        <ul className="my-6 list-disc space-y-2 pl-4">
          <li>
            <Link className="link" href="https://nextjs.org/docs/app">
              Next.js - App Router
            </Link>
          </li>
          <li>
            <Link className="link" href="https://www.contentlayer.dev/">
              Contentlayer
            </Link>
          </li>
          <li>MDX</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>

        <Button asChild>
          <a href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog">
            <Github className="mr-1" /> Get the source code!
          </a>
        </Button>
      </div>

      <div className="mt-16">
        <h2>From the blog</h2>
        <p className="mt-2 leading-8">
          Blog posts are written with MDX and processed through Contentlayer.
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
