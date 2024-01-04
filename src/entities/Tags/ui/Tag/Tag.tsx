'use client'

import { Button } from '@material-tailwind/react'

type Props = {
  color: string
  name: string
}

export function Tag({ name, color }: Props) {
  return (
    <Button size="sm" className="bg-card-background rounded" style={{ color }} onClick={() => null}>
      {name}
    </Button>
  )
}
