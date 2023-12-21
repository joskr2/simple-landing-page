import MyHeader from '@/components/commons/header/MyHeader'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Esta pagina muestra informacion sobre un pokemon',
  keywords: 'about, sobre mi,front end, developer'
}

export default function PokemonLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        {children}</body>
    </html>
  )
}
