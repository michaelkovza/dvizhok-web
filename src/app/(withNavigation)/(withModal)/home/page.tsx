// FIXME make correct paths in tsconfig by FSD style
import { EventsList } from '@/entities/Events/ui/EventsList/EventsList'
import { FiltersButton } from '@/entities/Filters/ui/FiltersButton/FiltersButton'
import { Typography } from '@/shared/Typography/Typography'
import Footer from '@/widgets/Footer/Footer'
import { PrismaClient } from '@prisma/client'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'

const prisma = new PrismaClient()

function fetchTags() {
  return prisma.tags.findMany()
}

export default async function Home() {
  const tags = await fetchTags()

  return (
    <main>
      <div className="sticky top-0 bg-accent-dark pb-4 z-10">
        <div className="flex flex-row justify-between p-4 items-center">
          <Typography variant="lead" className="font-semibold text-lg">
            Рекомендация
          </Typography>

          <FiltersButton />
        </div>

        <TagsList tags={tags} />
      </div>
      <div className="px-4">
        <EventsList />
      </div>

      <Footer />
    </main>
  )
}
