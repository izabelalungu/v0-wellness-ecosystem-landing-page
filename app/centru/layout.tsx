import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Centrul STAI DREPT în București | Gym, Fizioterapie și Wellness',
  description: 'Vizitează centrul STAI DREPT. Spații dedicate pentru antrenament, recuperare posturală, masaj și saună. Specialiști cu experiență în București.',
  keywords: ['centru wellness București', 'gym București', 'fizioterapie', 'kinetoterapie', 'masaj terapeutic', 'recuperare posturală'],
}

export default function CentruLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
