import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game Calendar',
  description: 'Created by Gabriel Gava',
}

export default function RootLayout({children}: {children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
          <body className={inter.className}>{children}</body>
      </html>
  )
}
