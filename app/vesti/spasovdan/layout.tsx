import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spasovdan – praznik Hristovog vaznesenja',
  description:
    'Srpska pravoslavna crkva i vernici obeležavaju Spasovdan, praznik Hristovog vaznesenja, jedan od najvažnijih datuma u hrišćanskom kalendaru.',

  openGraph: {
    title: 'Spasovdan – praznik Hristovog vaznesenja',
    description:
      'Spasovdan se obeležava četrdeset dana nakon Vaskrsa i podseća na Hristovo vaznesenje na nebo.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/spasovdan',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/spasovdan.jpg',
        width: 1200,
        height: 630,
        alt: 'Spasovdan – praznik Hristovog vaznesenja',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Spasovdan – praznik Hristovog vaznesenja',
    description:
      'Spasovdan se obeležava četrdeset dana nakon Vaskrsa i jedan je od najvažnijih hrišćanskih praznika.',
    images: ['https://istokinfopult.rs/static/images/spasovdan.jpg'],
  },
}

export default function SpasovdanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
