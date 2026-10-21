
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Dragana Trifković prva gošća podkasta „Razgovori u Istoku“',

  description:
    'Istok Info Pult započeo je novi podkast „Razgovori u Istoku“. Prva gošća Dragana Trifković govorila je o geopolitici, međunarodnim odnosima i izazovima savremenog sveta u Istok klubu u Novom Sadu.',

  openGraph: {
    title:
      'Dragana Trifković prva gošća podkasta „Razgovori u Istoku“',

    description:
      'Prva epizoda podkasta „Razgovori u Istoku“ donosi razgovor sa Draganom Trifković o aktuelnim geopolitičkim procesima, međunarodnim odnosima i savremenim izazovima. Pogledajte celu epizodu na sajtu Istok Info Pult.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/razgovori-u-istoku',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/dragana-trifkovic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dragana Trifković – prva gošća podkasta Razgovori u Istoku',
      },
    ],

    siteName: 'Istok Info Pult',
    locale: 'sr_RS',

    publishedTime: '2026-10-21T00:00:00+02:00',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Dragana Trifković prva gošća podkasta „Razgovori u Istoku“',

    description:
      'Istok Info Pult predstavlja prvu epizodu podkasta „Razgovori u Istoku“. Gošća Dragana Trifković govori o geopolitici, međunarodnim odnosima i aktuelnim svetskim temama.',

    images: [
      'https://istokinfopult.rs/static/images/istok-klub.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://istokinfopult.rs/vesti/razgovori-u-istoku',
  },
}

export default function DraganaTrifkovicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
