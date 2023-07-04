import AuthContext from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jacaranda Tree',
  description: 'An Australian Marketplace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  )
}
