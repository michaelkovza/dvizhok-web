import { Tag } from '@/entities/Tags/ui/Tag/Tag'

const TAGS_LIST = [
  {
    title: 'Бильярд',
    id: '1',
    color: 'white',
  },
  {
    title: 'Кружок чтения',
    id: '2',
    color: 'white',
  },
]

type Props = {
  onTagSelect: (id: string) => void
}

export function TagsList({ onTagSelect }: Props) {
  return (
    <div className="overflow-y-auto flex gap-2 px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {TAGS_LIST.map((tag) => (
        <Tag key={tag.id} id={tag.id} title={tag.title} color={tag.color} onClick={onTagSelect} />
      ))}
    </div>
  )
}
