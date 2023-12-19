import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MyHeader from './components/header/MyHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Portofolio',
  description: 'Una demo de una landing page con Next.js, TypeScript y Tailwind CSS',
  keywords: 'Next.js, TypeScript, Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        {children}
      </body>
    </html>
  )
}
