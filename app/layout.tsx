import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'STAI DREPT | Posture, Recovery & Wellness Ecosystem',
  description: 'Transform your posture and wellbeing with STAI DREPT. An integrated ecosystem combining gym training, postural recovery, nutrition, and AI-powered assessments.',
  keywords: ['posture correction', 'wellness', 'physiotherapy', 'nutrition', 'fitness', 'postural recovery', 'AI posture evaluation'],
  openGraph: {
    title: 'STAI DREPT | Posture, Recovery & Wellness Ecosystem',
    description: 'Transform your posture and wellbeing with our integrated wellness ecosystem.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
