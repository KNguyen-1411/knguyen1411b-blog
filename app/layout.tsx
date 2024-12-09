import type { Metadata } from 'next'
import MetaData from '@/config/Metadata.json'
import '@/styles/globals.css'
import '@/styles/custom.css'

export const metadata: Metadata = MetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased ">{children}</body>
    </html>
  )
}
