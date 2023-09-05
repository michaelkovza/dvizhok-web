import Link from 'next/link'

export default function Footer() {
  return (
    <div className="sticky bottom-0 flex justify-between py-2 px-4 bg-accent-dark">
      <Link href="/">Ищу</Link>
      <Link href="/map">Карта</Link>
      <Link href="/create">Создать</Link>
      <Link href="/profile">Профиль</Link>
    </div>
  )
}
