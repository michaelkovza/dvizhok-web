import { Navigation } from '@/widgets/Navigation/Navigation'
import React from 'react'
import { Header } from '@/widgets/header/header'
import Footer from '@/widgets/Footer/Footer'

function WithNavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      <Navigation />

      {children}

      <Footer />
    </div>
  )
}

export default WithNavigationLayout
