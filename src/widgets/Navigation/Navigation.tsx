import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="flex justify-between px-4">
      <Link href="/">Ищу</Link>
      <Link href="/feature-events">Пойду</Link>
      <Link href="/my-events">Организую</Link>
    </nav>
  )
}
