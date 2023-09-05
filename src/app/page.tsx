import EventCard from '@/entities/Events/ui/EventCard/EventCard'
import Link from 'next/link'
import { EventsList } from '@/entities/Events/ui/EventsList/EventsList'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import Footer from '@/widgets/Footer/Footer'

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 bg-accent-dark pb-4 z-10">
        <header className="flex flex-row justify-center p-4">
          {/* TODO определить локацию? как */}
          <p className="flex justify-start w-full">Moscow</p>
          <p>DVIZHOK</p>
          <div className="flex justify-end w-full">X</div>
        </header>

        {/* TODO думать как их реализовать ссылки + сср */}

        <div>
          <Link href="/">Ищу</Link>
          <Link href="/feature-events">Пойду</Link>
          <Link href="/my-events">Организую</Link>
        </div>

        <div className="flex flex-row justify-between p-4">
          <p>Рекомендация</p>
          <Link href="/filters">Фильтры</Link>
        </div>
        <TagsList />
      </div>
      <div className="px-4">
        <EventsList />
      </div>
      <Footer />
    </main>
  )
}
