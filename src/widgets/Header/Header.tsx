'use client'

import { BackButton } from '@/shared/BackButton/BackButton'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
  withBackButton?: boolean
}

export function Header({ children, withBackButton }: Props) {
  const router = useRouter()

  return (
    <header className="flex content-center px-4 py-4">
      {withBackButton && <BackButton handleOnBack={router.back} />}
      {children}
    </header>
  )
}
