import Image from 'next/image'
import EventImage from '../../../../../public/lib.jpg'
import Link from 'next/link'
import { Typography } from '@/shared/Typography/Typography'

type Props = {
  id?: string
  title: string
  timestamp: string
  distance: string
  image: string
  tags: string[]
}

export default function EventCard({ title, timestamp, distance, image, tags }: Props) {
  return (
    <Link href="/events/book-club">
      <div className="flex bg-card-background mb-2 rounded">
        <div className="w-20 relative overflow-hidden rounded">
          <Image src={image || EventImage} alt={title} className="object-cover" fill />
        </div>

        <div className="pl-3 pt-2.5 pb-2.5 w-full">
          <Typography className="font-semibold text-lg pr-3">{title}</Typography>

          <Typography className="font-normal text-sm border-b pb-2.5 mb-2.5">{timestamp}</Typography>

          <div className="flex flex-row justify-between items-center pr-3">
            <div className="flex flex-row justify-start gap-2">
              {tags.map((tag) => (
                <Typography className="font-normal text-sm" as="span" key={tag}>
                  {`#${tag}`}
                </Typography>
              ))}
            </div>

            <Typography className="font-normal text-xs">{distance}</Typography>
          </div>
        </div>
      </div>
    </Link>
  )
}
