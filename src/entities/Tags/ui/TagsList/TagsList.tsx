import { Tag } from '@/entities/Tags/ui/Tag/Tag'
import { Tag as TagType } from '../../model/types'

type Props = {
  tags: TagType[]
}

export function TagsList({ tags }: Props) {
  return (
    <div className="flex gap-2 mx-4">
      {tags.map((item) => (
        <Tag key={item.id} color={item.color} name={item.name} />
      ))}
    </div>
  )
}
