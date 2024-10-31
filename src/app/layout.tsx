import type { Metadata } from 'next'
import '@/styles/globals.css'

import { Rubik, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/footer'
import SideLinksElement from '@/components/side-link-element'
import SideEmailElement from '@/components/side-email.element'
import { Navbar } from '@/components/navigation/navbar'

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
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${robotoMono.variable} ${rubik.variable}`}>
        <Navbar />
        <SideLinksElement />
        <SideEmailElement />
        <main className='px-6 max-xl:px-[9.375rem] max-lg:px-[6.25rem] max-md:px-[3.125rem] max-sm:px-6'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
