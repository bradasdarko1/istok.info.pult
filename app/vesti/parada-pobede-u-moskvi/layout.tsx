import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parada pobede u Moskvi završena vazdušnim spektaklom',
  description:
    'Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom, uz manevar „Kubanski dijamant“ i prelet aviona Su-25 u bojama ruske zastave.',

  openGraph: {
    title: 'Parada pobede u Moskvi završena vazdušnim spektaklom',
    description:
      'Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom, uz manevar „Kubanski dijamant“ i prelet aviona Su-25 u bojama ruske zastave.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/parada-pobede-u-moskvi',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/parada-pobede-u-moskvi.jpg',
        width: 1200,
        height: 630,
        alt: 'Parada pobede u Moskvi završena vazdušnim spektaklom',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Parada pobede u Moskvi završena vazdušnim spektaklom',
    description:
      'Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom, uz manevar „Kubanski dijamant“ i prelet aviona Su-25 u bojama ruske zastave.',
    images: ['https://istokinfopult.rs/static/images/parada-pobede-u-moskvi.jpg'],
  },
}

export default function ParadaPobedeUMoskviLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
