'use client'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import '@/styles/globals.scss'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  display: 'swap'
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru" className={`root ${nunito.variable}`}>
      <body>
        {children}
      </body>
    </html>
)
}

export default RootLayout