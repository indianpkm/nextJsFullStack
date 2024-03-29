"use client"

import AccountProvider from '@/context/AccountProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Mobilicis App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AccountProvider>
        {children}
        </AccountProvider>
        </body>
    </html>
  )
}
