import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Hilandarske svetinje stižu u Beograd: istorijski događaj povodom 850 godina od rođenja Svetog Save',
  description:
    'Povodom 850 godina od rođenja Svetog Save, u Beograd stižu najznačajnije svetinje iz Manastira Hilandara. Izložba „Sveti Sava“ biće održana u Galeriji SANU od 15. maja do 19. jula.',

  openGraph: {
    title:
      'Hilandarske svetinje stižu u Beograd: istorijski događaj povodom 850 godina od rođenja Svetog Save',
    description:
      'U Beograd stižu dragocene svetinje iz Manastira Hilandara povodom 850 godina od rođenja Svetog Save.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/hilandarske-svetinje-u-beogradu',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/hilandarske-svetinje.jpg',
        width: 1200,
        height: 630,
        alt: 'Hilandarske svetinje stižu u Beograd',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Hilandarske svetinje stižu u Beograd: istorijski događaj povodom 850 godina od rođenja Svetog Save',
    description:
      'U Beograd stižu dragocene svetinje iz Manastira Hilandara povodom 850 godina od rođenja Svetog Save.',
    images: ['https://istokinfopult.rs/static/images/hilandarske-svetinje.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
