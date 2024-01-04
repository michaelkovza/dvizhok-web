import { Tag } from '@/entities/Tags/ui/Tag/Tag'
import { Tag as TagType } from '../../model/types'

type Props = {
  tags?: TagType[]
  onTagSelect?: (tag: string) => void
}

export function TagsList({ tags }: Props) {
  return (
    <div className="flex gap-2 px-4 overflow-y-auto hidden-scrollbar">
      {tags?.map((item) => <Tag key={item.id} color={item.color} name={item.name} />)}
    </div>
  )
}
