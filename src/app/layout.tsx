import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'

import 'react-modern-drawer/dist/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(props) {
  return (
    <html className="bg-accent-dark" lang="en">
      <body className={inter.className}>
        <Header />

        {props.children}

        <Footer />
      </body>
    </html>
  )
}
