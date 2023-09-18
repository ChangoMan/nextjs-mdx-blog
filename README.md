# NextJS - MDX - shadcn-ui - Tailwind - Blog

**UPDATED on 2023-08-22 to use Next.js App Router!**

A Next.js starter template for your next blog or personal site. Built with:

- Next.js [App Router](https://nextjs.org/docs/app)
- Content processing with [Contentlayer](https://www.contentlayer.dev/)
- Write posts with [MDX](https://mdxjs.com/)
- UI components with [shadcn-ui](https://ui.shadcn.com/)
- Style with [Tailwind CSS](https://tailwindcss.com/)

This Starter is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io).

👀 [View the Live Demo](https://nextjs-typescript-mdx-blog.vercel.app/)

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-mdx-blog.git
cd nextjs-typescript-mdx-blog

npm install

npm run dev
```

Your new site will be up at http://localhost:3000/

Blog posts can be added to the `posts` directory, in the root folder.

Update the `WEBSITE_HOST_URL` when taking your site live. This lives in `/src/lib/constants.ts`

Make sure to update the `sitemap.ts` file, specifically the `const routes` if you add more pages to the website.
