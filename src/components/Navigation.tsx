import Link from 'next/link'

export function Navigation() {
  return (
    <nav>
      <Link href="/" className="py-4 pr-6 text-gray-900 dark:text-white">
        Home
      </Link>
      <Link href="/about" className="px-6 py-4 text-gray-900 dark:text-white">
        About
      </Link>
    </nav>
  )
}
