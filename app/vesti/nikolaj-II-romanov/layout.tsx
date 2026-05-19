import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Car koji je voleo Srbiju više nego politiku: Na današnji dan rođen Nikolaj II Romanov',
  description:
    'Na današnji dan 1868. godine rođen je ruski car Nikolaj II Romanov, poslednji car Rusije i istorijski simbol bratstva Srbije i Rusije.',

  openGraph: {
    title:
      'Car koji je voleo Srbiju više nego politiku: Na današnji dan rođen Nikolaj II Romanov',
    description:
      'Nikolaj II Romanov ostao je upamćen kao ruski car koji je u najtežim trenucima stao uz Srbiju i srpski narod.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/nikolaj-II-romanov',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/nikolaj-II-romanov.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikolaj II Romanov - car koji je voleo Srbiju',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Car koji je voleo Srbiju više nego politiku: Na današnji dan rođen Nikolaj II Romanov',
    description:
      'Na današnji dan 1868. godine rođen je ruski car Nikolaj II Romanov, poslednji car Rusije i veliki prijatelj srpskog naroda.',
    images: ['https://istokinfopult.rs/static/images/nikolaj-II-romanov.jpg'],
  },
}

export default function NikolajIIRomanovLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
