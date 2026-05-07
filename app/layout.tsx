import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StageCraft Academy | Project Eloquencia',
  description: 'Master the stage with Project Eloquencia seminar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  )
}