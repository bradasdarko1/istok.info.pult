import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novac za vojni rok preusmeren na sport i kulturu',
  description:
    'Vlada Srbije preusmerila je skoro 300 miliona dinara, prvobitno namenjenih za realizaciju obaveznog vojnog roka, ministarstvima sporta i kulture.',

  openGraph: {
    title: 'Novac za vojni rok preusmeren na sport i kulturu',
    description:
      'Vlada Srbije preusmerila je skoro 300 miliona dinara, prvobitno namenjenih za realizaciju obaveznog vojnog roka, ministarstvima sporta i kulture.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/novac-za-vojni-rok-preusmeren-na-sport-i-kulturu',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/novac-za-vojni-rok.jpg',
        width: 1200,
        height: 630,
        alt: 'Novac za vojni rok preusmeren na sport i kulturu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Novac za vojni rok preusmeren na sport i kulturu',
    description:
      'Vlada Srbije preusmerila je skoro 300 miliona dinara, prvobitno namenjenih za realizaciju obaveznog vojnog roka, ministarstvima sporta i kulture.',
    images: ['https://istokinfopult.rs/static/images/novac-za-vojni-rok.jpg'],
  },
}

export default function NovacZaVojniRokPreusmerenNaSportIKulturuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
