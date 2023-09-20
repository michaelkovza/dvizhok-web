import Link from 'next/link'
import { CreateEventButton } from '@/entities/Events/ui/CreateEventButton/CreateEventButton'

export default function Footer() {
  return (
    <div className="sticky bottom-0 flex justify-between py-2 px-4 bg-accent-dark">
      <CreateEventButton />
    </div>
  )
}
