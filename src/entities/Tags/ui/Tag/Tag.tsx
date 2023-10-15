import { useCallback } from 'react'

type Props = {
  id?: string
  title: string
  color: string
  onClick?: (id: string) => void
}

export function Tag({ onClick, title, id }: Props) {
  const onTagClick = useCallback(() => {
    if (id) {
      onClick?.(id)
    }
  }, [id, onClick])

  return (
    <p className="py-1.5 px-3 rounded bg-accent-purple" onClick={onTagClick}>
      {title}
    </p>
  )
}
