# NextJS - Typescript - MDX - Blog

UPDATED on 08-22-23 to use Next.js App Router!

A Next.js starter template for your next blog or personal site. Built with:

- Next.js App Router
- Content processing with [Contentlayer](https://www.contentlayer.dev/)
- Write posts with [MDX](https://mdxjs.com/)
- Style with [Tailwind CSS](https://tailwindcss.com/)

This Starter is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io).

👀 [View the Live Demo](https://nextjs-typescript-mdx-blog.vercel.app/)

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-typescript-mdx-blog.git
cd nextjs-typescript-mdx-blog

npm install

npm run dev
```

Your new site will be up at http://localhost:3000/

Blog posts can be added to the `posts` directory, in the root folder.

Update the `WEBSITE_HOST_URL` when taking your site live. This lives in `/src/lib/constants.ts`

Make sure to update the `sitemap.ts` file, specifically the `const routes` if you add more pages to the website.
