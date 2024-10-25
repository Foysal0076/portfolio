import type { Metadata } from 'next'
import '@/styles/globals.css'

import { Rubik, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navigation/nvabar'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Foy's Portfolio",
  description: 'I build things in React & Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${robotoMono.variable} ${rubik.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
