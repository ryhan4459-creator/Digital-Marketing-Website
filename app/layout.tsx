import React from "react"
import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri, Noto_Sans_Bengali } from 'next/font/google'

import './globals.css'

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-bengali',
})

export const metadata: Metadata = {
  title: 'ডিজিটাল মার্কেটিং - আপনার ব্যবসার ডিজিটাল সাফল্যের পথ',
  description:
    'ডিজিটাল মার্কেটিং সম্পর্কে বিস্তারিত তথ্য জানুন। এসইও, সোশ্যাল মিডিয়া, কন্টেন্ট মার্কেটিং এবং আরও অনেক কিছু।',
}

export const viewport: Viewport = {
  themeColor: '#0d9373',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body
        className={`${hindSiliguri.variable} ${notoSansBengali.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
