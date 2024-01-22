'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

// FIXME стилизовать под макет
export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="grid grid-cols-3 gap-2 px-4">
      <Link
        className={`${
          pathname === '/home' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal text-center`}
        href="/"
      >
        Ищу
      </Link>

      <Link
        className={`${
          pathname === '/future-events' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal text-center`}
        href="/future-events"
      >
        Пойду
      </Link>

      <Link
        className={`${
          pathname === '/my-events' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal text-center`}
        href="/my-events"
      >
        Организую
      </Link>
    </div>
  )
}
