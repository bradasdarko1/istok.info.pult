import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Počinje Petrovski (Apostolski) post',
  description:
    'Od prvog ponedeljka nakon Duhova počinje Petrovski ili Apostolski post. Ove godine traje od 8. juna do 12. jula, u čast svetih apostola Petra i Pavla.',

  openGraph: {
    title:
      'Počinje Petrovski (Apostolski) post',
    description:
      'Petrovski ili Apostolski post počinje 8. juna i traje do 12. jula. Vernici ulaze u period posta, molitve i duhovne pripreme u čast svetih apostola Petra i Pavla.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/pocinje-petrovski-post',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/petrovski-post-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Počinje Petrovski Apostolski post',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Počinje Petrovski (Apostolski) post',
    description:
      'Petrovski post traje od 8. juna do 12. jula i posvećen je svetim apostolima Petru i Pavlu.',
    images: ['https://istokinfopult.rs/static/images/petrovski-post-1.jpeg'],
  },
}

export default function PocinjePetrovskiPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
