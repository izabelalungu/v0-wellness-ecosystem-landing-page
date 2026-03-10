import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program de nutriție personalizat | STAI DREPT',
  description: 'Mese zilnice proaspete și echilibrate, preparate după obiectivele tale. Plan personalizat, livrare disponibilă, sincronizare cu antrenamentele.',
  keywords: ['nutriție personalizată', 'mese sănătoase', 'livrare mâncare', 'macros tracker', 'dietă fitness', 'program nutriție'],
}

export default function NutrieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
