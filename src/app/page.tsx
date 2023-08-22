import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
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
            <Link href="https://nextjs.org/docs/app">Next.js - App Router</Link>
          </li>
          <li>
            <Link href="https://www.contentlayer.dev/">Contentlayer</Link>
          </li>
          <li>MDX</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>

        <a
          href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
          className="inline-block rounded-md bg-blue-600 px-7 py-3 text-white hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
        >
          Get the source code!
        </a>
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
