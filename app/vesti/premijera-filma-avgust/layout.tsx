import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premijera ruske vojne drame „Avgust“ u Ruskom domu u Beogradu',
  description:
    'Nova ruska vojna drama „Avgust“ biće premijerno prikazana srpskoj publici 9. maja u Ruskom domu u Beogradu, uz srpske titlove.',

  openGraph: {
    title: 'Premijera ruske vojne drame „Avgust“ u Ruskom domu u Beogradu',
    description:
      'Nova ruska vojna drama „Avgust“ biće premijerno prikazana srpskoj publici 9. maja u Ruskom domu u Beogradu, uz srpske titlove.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/premijera-filma-avgust',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/avgust.jpg',
        width: 1200,
        height: 630,
        alt: 'Premijera filma Avgust u Ruskom domu u Beogradu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Premijera ruske vojne drame „Avgust“ u Ruskom domu u Beogradu',
    description:
      'Nova ruska vojna drama „Avgust“ biće premijerno prikazana srpskoj publici 9. maja u Ruskom domu u Beogradu, uz srpske titlove.',
    images: ['https://istokinfopult.rs/static/images/avgust.jpg'],
  },
}

export default function PremijeraFilmaAvgustLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
