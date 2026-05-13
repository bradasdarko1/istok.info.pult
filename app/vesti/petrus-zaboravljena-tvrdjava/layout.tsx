import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Petrus – zaboravljena tvrđava koja i dalje čuva duh srpske istorije',
  description:
    'Nedaleko od Paraćina nalaze se ostaci tvrđave Petrus, jednog od tihih, ali snažnih svedoka srpske istorije i duhovnog nasleđa Petruške oblasti.',

  openGraph: {
    title: 'Petrus – zaboravljena tvrđava koja i dalje čuva duh srpske istorije',
    description:
      'Tvrđava Petrus kod Paraćina nije samo ruševina, već svedočanstvo jednog vremena, vere, odbrane i istorijskog pamćenja.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/petrus-zaboravljena-tvrdjava',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/petrus-tvrdjava.jpg',
        width: 1200,
        height: 630,
        alt: 'Tvrđava Petrus kod Paraćina',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Petrus – zaboravljena tvrđava koja i dalje čuva duh srpske istorije',
    description:
      'Mesto gde kamen pamti više nego što mi danas želimo da čujemo.',
    images: ['https://istokinfopult.rs/static/images/petrus-tvrdjava.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
