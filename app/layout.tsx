import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import AIChatbot from '@/components/AIChatbot'

export const metadata: Metadata = {
  title: 'Siddhartha Store - AI-Powered Shopping Experience',
  description: 'Discover products tailored just for you with AI-powered recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <AIChatbot />
      </body>
    </html>
  )
}

