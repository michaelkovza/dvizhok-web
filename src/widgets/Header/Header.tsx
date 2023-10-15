'use client'

import { BackButton } from '@/shared/BackButton/BackButton'
import { useRouter } from 'next/navigation'
import Logo from '../../../public/dvizhok.svg'
import React from 'react'
import Image from 'next/image'

type Props = {
  children?: React.ReactNode
  withBackButton?: boolean
}

export function Header({ children, withBackButton }: Props) {
  const { back } = useRouter()

  return (
    <header className="flex content-center px-4 py-4 justify-center relative">
      {withBackButton && <BackButton handleOnBack={back} />}
      <Image src={Logo} alt="Logo" />
      {children}
    </header>
  )
}
