import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import './globals.css'


export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <ModalProvider/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
