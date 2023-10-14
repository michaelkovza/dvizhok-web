import { Tag } from '@/entities/Tags/ui/Tag/Tag'

export function TagsList() {
  return (
    <div className="overflow-y-auto flex gap-2 px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </div>
  )
}
