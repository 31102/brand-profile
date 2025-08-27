import type React from "react"
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Hamed Al Ayafei - Strategic Leadership & Investment | حامد العيافي",
  description:
    "Former Major General in Qatar Armed Forces, now entrepreneur, advisor, and investor. Bridging local opportunities with international ambition. | لواء سابق في القوات المسلحة القطرية، الآن رجل أعمال ومستشار ومستثمر",
  keywords: "Qatar, Leadership, Investment, Military, Entrepreneur, Business Advisory, CSR, Sports Management",
  openGraph: {
    title: "Hamed Al Ayafei - Strategic Leadership & Investment",
    description: "Former Major General in Qatar Armed Forces, now entrepreneur, advisor, and investor.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_QA",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hamed Al Ayafei" />
        <link rel="canonical" href="https://generalhamed.com" />
        <link rel="alternate" hrefLang="ar" href="https://generalhamed.com/ar" />
        <link rel="alternate" hrefLang="en" href="https://generalhamed.com/en" />
        <meta name="theme-color" content="#8B1538" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter">
        <LanguageProvider>
          {children}
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  )
}
