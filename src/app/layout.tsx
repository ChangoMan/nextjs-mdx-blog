import { Providers } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const meta = {
  title: 'Hunter Chang - Website',
  description:
    'Sleep deprived father. FE Engineer in China. Lover of Ramen and Kpop',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Hunter Chang',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-zinc-50 dark:bg-gray-900')}>
        <Providers>
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                Built by{' '}
                <Link href="https://twitter.com/hunterhchang">
                  Hunter Chang
                </Link>
              </p>
            </Container>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
