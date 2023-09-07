import React from 'react'
import { Header } from '@/widgets/Header/Header'

export default function CreateEventLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header withBackButton>
        <h1 className="font-bold text-xl text-center flex-1">Создать событие</h1>
      </Header>

      {children}
    </main>
  )
}
