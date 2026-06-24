import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Nevesinjska puška 1875: Iskra slobode koja je pokrenula oslobođenje srpskog naroda',

  description:
    'Na današnji dan 1875. godine izbio je Nevesinjski ustanak, poznat kao Nevesinjska puška. Događaj koji je otvorio Istočno pitanje i najavio oslobođenje srpskog naroda od osmanske vlasti.',

  openGraph: {
    title:
      'Nevesinjska puška 1875: Iskra slobode koja je pokrenula oslobođenje srpskog naroda',

    description:
      'Prvi pucnji Nevesinjskog ustanka odjeknuli su 1875. godine u Hercegovini. Među ustanicima se borio i budući kralj Srbije Petar I Karađorđević, poznat kao Petar Mrkonjić.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/nevesinjska-puska-1875',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/nevesinjska-bitka.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nevesinjska puška 1875. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Nevesinjska puška 1875: Iskra slobode koja je pokrenula oslobođenje srpskog naroda',

    description:
      'Nevesinjski ustanak iz 1875. godine predstavlja jedan od najznačajnijih događaja u istoriji srpskog naroda i početak velikih promena na Balkanu.',

    images: [
      'https://istokinfopult.rs/static/images/nevesinjska-bitka.jpeg',
    ],
  },
}

export default function NevesinjskaPuska1875Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}