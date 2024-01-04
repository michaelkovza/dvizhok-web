import { Tag } from '../Tag/Tag'
import { Tag as TagType } from '../../model/types'

type Props = {
  tags?: TagType[]
  onTagSelect?: (tag: string) => void
}

export function TagsList({ tags }: Props) {
  return (
    <div className="flex w-max-content items-center gap-2 px-4 overflow-y-auto hidden-scrollbar">
      {tags?.map((item) => (
        <div key={item.id}>
          <Tag color={item.color} name={item.name} />
        </div>
      ))}
    </div>
  )
}
