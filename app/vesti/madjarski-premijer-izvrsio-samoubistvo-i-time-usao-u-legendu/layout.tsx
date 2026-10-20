
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Mađarski premijer izvršio samoubistvo i time ušao u legendu',

  description:
    'Potresna priča o Palu Telekiju, mađarskom premijeru koji je 3. aprila 1941. godine izvršio samoubistvo, suočen sa Hitlerovim zahtevom da Mađarska učestvuje u napadu na Kraljevinu Jugoslaviju.',

  openGraph: {
    title:
      'Mađarski premijer izvršio samoubistvo i time ušao u legendu',

    description:
      'Mađarski premijer Pal Teleki oduzeo je sebi život 3. aprila 1941. godine, uoči nacističkog napada na Jugoslaviju. Njegovo oproštajno pismo ostalo je potresno istorijsko svedočanstvo.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/pal-teleki.jpg',
        width: 1200,
        height: 630,
        alt: 'Pal Teleki – mađarski premijer koji je izvršio samoubistvo 3. aprila 1941. godine',
      },
    ],

    siteName: 'Istok Info Pult',
    locale: 'sr_RS',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Mađarski premijer izvršio samoubistvo i time ušao u legendu',

    description:
      'Pal Teleki, mađarski premijer koji je 1941. godine izvršio samoubistvo, suočen sa kršenjem ugovora o večnom prijateljstvu sa Jugoslavijom.',

    images: [
      'https://istokinfopult.rs/static/images/pal-teleki.jpg',
    ],
  },

  alternates: {
    canonical:
      'https://istokinfopult.rs/vesti/madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu',
  },
}

export default function MadjarskiPremijerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
