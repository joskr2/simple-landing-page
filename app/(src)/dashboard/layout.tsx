import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'La vista de dashboard'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children} 
      </body>
    </html>
  )
}
