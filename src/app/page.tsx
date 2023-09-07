import Link from 'next/link'
import { EventsList } from '@/entities/Events/ui/EventsList/EventsList'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import Footer from '@/widgets/Footer/Footer'
import { Header } from '@/widgets/Header/Header'
import Image from 'next/image'
import Dvizhok from '../../public/dvizhok.svg'
import Filters from '../../public/filters.svg'
import { Navigation } from '@/widgets/Navigation/Navigation'

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 bg-accent-dark pb-4 z-10">
        {/* TODO определить локацию? как */}
        <Header>
          <Image src={Dvizhok} alt="logo icon" />
        </Header>

        <Navigation />

        <div className="flex flex-row justify-between p-4 items-center">
          <p className="font-semibold">Рекомендация</p>
          <Link href="/filters">
            <Image src={Filters} alt="filters icon" />
          </Link>
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
