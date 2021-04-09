import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { PostType } from '../types/post';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta: MetaProps = {
    title: 'Hunter Chang - Website',
    description:
      'Sleep Deprived Father. Senior Web Developer. Lover of all things Ramen and Kpop.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${WEBSITE_HOST_URL}${router.asPath}`}
        />
        <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hunter Chang - Website" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huntarosan" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            {mounted && (
              <ThemeSwitch
                isDark={theme === 'dark'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://twitter.com/huntarosan"
          >
            Hunter Chang
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
