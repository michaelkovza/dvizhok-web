import Image from 'next/image'
import EventImage from '../../../../../public/lib.jpg'
import Link from 'next/link'

type Props = {
  title: string
  timestamp: string
  distance: string
  image: string
  tags: string[]
}

export default function EventCard({ title, timestamp, distance, image, tags }: Props) {
  return (
    <Link href="/events/book-club">
      <div className="flex items-center mb-2 rounded-sm">
        <div className="h-24 w-20 relative overflow-hidden rounded">
          <Image src={image || EventImage} alt={title} className="object-cover" fill />
        </div>
        <div className="flex-1 px-3">
          <p>{title}</p>
          <p>{timestamp}</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start gap-4">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p>{distance}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
