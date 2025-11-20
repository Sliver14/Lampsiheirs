import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geistSans = GeistSans({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = GeistMono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  // Primary SEO
  title: 'Lampsi Heirs Limited – Premium Tiles, Granites & Sanitary Wares in Lagos, Nigeria',
  description: 'Best prices on floor & wall tiles, bathroom suites, bathtubs, PVC cladding. Nationwide delivery & professional installation. Chat on WhatsApp for instant quote!',

  // Open Graph – Critical for WhatsApp, Facebook, Instagram sharing in Nigeria
  openGraph: {
    title: 'Lampsi Heirs Limited – Premium Tiles & Sanitary Wares | Nationwide Delivery',
    description: 'Quality tiles, granites, bathroom fittings with delivery & installation across Nigeria. Lagos • Abuja • Ibadan • Port Harcourt',
    url: 'https://www.lampsiheirs.com',
    siteName: 'Lampsi Heirs Limited',
    images: [
      {
        url: 'https://www.lampsiheirs.com/og-image.jpg', // Create this: 1200×630 with logo + phone
        width: 1200,
        height: 630,
        alt: 'Lampsi Heirs Limited – Premium Tiles & Sanitary Wares Nigeria',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },

  // Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Lampsi Heirs Limited – Tiles & Sanitary Wares',
    description: 'Nationwide delivery • Lagos showroom • WhatsApp for quote',
    images: ['https://www.lampsiheirs.com/og-image.jpg'],
  },

  // Icons
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },

  // Extra SEO wins
  alternates: {
    canonical: 'https://www.lampsiheirs.com',
  },
  robots: 'index, follow',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data – Google loves this for local business ranking */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeImprovementStore",
              "name": "Lampsi Heirs Limited",
              "image": "https://www.lampsiheirs.com/logo.png",
              "url": "https://www.lampsiheirs.com",
              "logo": "https://www.lampsiheirs.com/logo.png",
              "description": "Premium tiles, granites, PVC cladding and sanitary wares with nationwide delivery and installation in Nigeria.",
              "telephone": "+2347034523498",
              "email": "victorcourage375@gmail.com",
              "priceRange": "₦₦",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ikeja",
                "addressRegion": "Lagos",
                "addressCountry": "NG"
              },
              "sameAs": [
                "https://wa.me/2347034523498"
              ]
            })
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}