import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multi Bee 360 Roofing System',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
