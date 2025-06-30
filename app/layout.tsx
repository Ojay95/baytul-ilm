import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Baytul-Ilm - Islamic Learning Platform',
  description: 'Learn Quran, Islamic Studies, Arabic Language, and more with expert instructors on our comprehensive Islamic learning platform.',
  keywords: 'Islamic studies, Quran learning, Arabic language, Islamic education, online courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="min-h-screen bg-white font-nunito antialiased">
        {children}
      </body>
    </html>
  )
}