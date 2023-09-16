'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-zinc-50 [@media(prefers-color-scheme:dark)]:stroke-zinc-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-zinc-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-600" />
      <MoonStar className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-zinc-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-zinc-500" />
    </button>
  )
}

export default ThemeSwitch
