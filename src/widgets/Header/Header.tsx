'use client'

import { BackButton } from '@/shared/BackButton/BackButton'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '../../../public/dvizhok.svg'
import React from 'react'
import Image from 'next/image'

type Props = {
  children?: React.ReactNode
}

export function Header({ children }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const withBackButton = pathname?.includes('/events/')

  return (
    <header className="flex content-center px-4 py-4 justify-center relative">
      {withBackButton && <BackButton handleOnBack={router.back} />}
      <Image src={Logo} alt="Logo" />
      {children}
    </header>
  )
}
