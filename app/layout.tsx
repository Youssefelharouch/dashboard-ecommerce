import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import './globals.css'
import { ToasterProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'


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
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
        <ToasterProvider/>
        <ModalProvider/>
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
