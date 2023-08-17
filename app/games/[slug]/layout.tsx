import type { Metadata } from 'next'
import "@/app/global.css";

export const metadata: Metadata = {
  title: 'Game Calendar - Game',
  description: 'Created by Gabriel Gava',
}

export default function RootLayout({children}: {children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
          <body>{children}</body>
      </html>
  )
}
