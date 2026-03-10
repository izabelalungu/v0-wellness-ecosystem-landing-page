import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platforma digitală pentru progresul tău | STAI DREPT',
  description: 'Dashboard complet pentru gestionarea antrenamentelor, nutriției, progresului și programărilor. Urmărești postura și îți atingi obiectivele de wellness.',
  keywords: ['platformă wellness', 'tracker fitness', 'progres postură', 'aplicație wellness', 'dashboard antrenamente'],
}

export default function PlatformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
