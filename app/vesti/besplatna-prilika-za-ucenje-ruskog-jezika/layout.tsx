import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Besplatna prilika za učenje ruskog jezika: HSE Sankt Peterburg poziva na onlajn Razgovorni klub',
  description:
    'Nacionalni istraživački univerzitet „Visoka škola ekonomije“ iz Sankt Peterburga organizuje besplatan onlajn Razgovorni klub za sve koji žele da započnu učenje ruskog jezika.',

  openGraph: {
    title:
      'Besplatna prilika za učenje ruskog jezika: HSE Sankt Peterburg poziva na onlajn Razgovorni klub',
    description:
      'Pridružite se besplatnom onlajn Razgovornom klubu 19. juna i upoznajte Zlatni prsten Rusije kroz prve korake u učenju ruskog jezika.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/besplatna-prilika-za-ucenje-ruskog-jezika',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/besplatna-prilika-za-ucenje-ruskog-jezika.png',
        width: 1200,
        height: 630,
        alt: 'Razgovorni klub HSE Sankt Peterburg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Besplatna prilika za učenje ruskog jezika: HSE Sankt Peterburg poziva na onlajn Razgovorni klub',
    description:
      'Besplatan onlajn čas za početnike održava se 19. juna u organizaciji HSE iz Sankt Peterburga.',
    images: [
      'https://istokinfopult.rs/static/images/besplatna-prilika-za-ucenje-ruskog-jezika.png',
    ],
  },
}

export default function RazgovorniKlubHSELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}