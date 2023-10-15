import { EventsList } from '@/entities/Events/ui/EventsList/EventsList'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import { FiltersButton } from '@/entities/Filters/ui/FiltersButton/FiltersButton'
import { Typography } from '@/shared/Typography/Typography'

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 bg-accent-dark pb-4 z-10">
        <div className="flex flex-row justify-between p-4 items-center">
          <Typography variant="lead" className="font-semibold text-lg">
            Рекомендация
          </Typography>

          <FiltersButton />
        </div>
        {/*<TagsList />*/}
      </div>
      <div className="px-4">
        <EventsList />
      </div>
    </main>
  )
}
