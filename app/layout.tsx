import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'STAI DREPT | Recuperare Posturală, Fitness și Wellness',
  description: 'Ecosistem integrat de wellness care combină antrenament, recuperare posturală, nutriție și evaluare posturală prin inteligență artificială.',
  keywords: ['postură', 'recuperare posturală', 'fizioterapie', 'kinetoterapie', 'nutriție', 'fitness', 'evaluare posturală AI'],
  openGraph: {
    title: 'STAI DREPT | Recuperare Posturală, Fitness și Wellness',
    description: 'Ecosistem integrat pentru îmbunătățirea posturii și a sănătății.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#CE1111',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={montserrat.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
