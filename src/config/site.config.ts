import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export const siteConfig = {
  title: "Foy's Portfolio",
  description: 'I build things in TypeScript, React, Next.js, and Node.js',
}

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    metadataBase: new URL(process.env.SITE_URL!),
    alternates: {
      canonical: '/',
    },
    title: title ? `${title} - Foy's Portfolio` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Foy's Portfolio` : siteConfig.title,
      description,
      url: process.env.SITE_URL!,
      siteName: "Foy's Portfolio",
      images: {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  }
}
