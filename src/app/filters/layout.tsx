import React from 'react'
import { Header } from '@/widgets/Header/Header'

export default function FiltersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header withBackButton>
        <h1 className="font-bold text-xl text-center flex-1">Фильтры</h1>
      </Header>

      {children}
    </main>
  )
}
