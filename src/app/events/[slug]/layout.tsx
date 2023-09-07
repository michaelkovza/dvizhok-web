import { Header } from '@/widgets/Header/Header'
import Dvizhok from '../../../../public/dvizhok.svg'
import Image from 'next/image'
import React from 'react'

export default function DetailedEventLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header withBackButton>
        <Image src={Dvizhok} alt="logo" />
      </Header>

      {children}
    </main>
  )
}
