import Link from 'next/link'
import { Icon } from '@/shared/Icon/Icon'

export default function Footer() {
  return (
    <div className="fixed left-0 right-0 bottom-0 flex justify-between py-2 px-4 bg-accent-dark">
      <Link href="/">
        <Icon name="search" />
      </Link>

      <Link href="/map">
        <Icon name="map" />
      </Link>

      <Link href="/create/event">
        <Icon name="plus" />
      </Link>

      <Link href="/profile">
        <Icon name="profile" />
      </Link>
    </div>
  )
}
