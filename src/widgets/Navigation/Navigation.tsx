'use client'
import { Button } from '@material-tailwind/react'
import { useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'

// FIXME стилизовать под макет
export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  const handleToSearchPage = useCallback(() => router.push('/'), [router])
  const handleToFutureEventsPage = useCallback(() => router.push('/future-events'), [router])
  const handleToMyEventsPage = useCallback(() => router.push('/my-events'), [router])

  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        variant="text"
        className={`${
          pathname === '/' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal`}
        onClick={handleToSearchPage}
      >
        Ищу
      </Button>
      <Button
        variant="text"
        className={`${
          pathname === '/future-events' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal`}
        onClick={handleToFutureEventsPage}
      >
        Пойду
      </Button>
      <Button
        variant="text"
        className={`${
          pathname === '/my-events' ? 'text-white' : 'text-accent-purple'
        } font-semibold text-lg	p-0 normal-case font-normal`}
        onClick={handleToMyEventsPage}
      >
        Организую
      </Button>
    </div>
  )
}
