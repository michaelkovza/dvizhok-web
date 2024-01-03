'use client'

import { Button } from '@material-tailwind/react'

type Props = {
  color: string
  name: string
}

export function Tag({ name, color }: Props) {
  return (
    <Button className="bg-card-background py-1.5 px-3 rounded" style={{ color }}>
      {name}
    </Button>
  )
}
