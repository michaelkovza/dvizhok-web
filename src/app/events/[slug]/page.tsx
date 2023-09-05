import { Button } from '@/shared/Button/Button'
import { DetailedEventCard } from '@/entities/Events/ui/DetailedEventCard/DetailedEventCard'

export default function DetailedEvent() {
  return (
    <>
      <div className="h-screen bg-main">
        <DetailedEventCard />
      </div>
      <div className="sticky bottom-0 p-4">
        <Button>Посетить</Button>
      </div>
    </>
  )
}
