import MyHeader from '@/components/commons/header/MyHeader'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About',
  description: 'Esta pagina muestra informacion sobre mi',
  keywords: 'about, sobre mi,front end, developer'
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        {children}</body>
    </html>
  )
}
