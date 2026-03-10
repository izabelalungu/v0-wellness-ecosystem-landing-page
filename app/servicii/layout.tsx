import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii integrate pentru postură și wellness | STAI DREPT',
  description: 'Ecosistem complet cu antrenament personalizat, recuperare posturală, nutriție și platformă digitală. Servicii onsite și online în București.',
  keywords: ['servicii wellness', 'antrenament personalizat', 'recuperare posturală', 'nutriție', 'fizioterapie', 'kinetoterapie'],
}

export default function ServiciiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
