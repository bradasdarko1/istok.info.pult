import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Da li bi Prvi srpski ustanak opstao bez Rusije? Šest godina zajedničke borbe',

  description:
    'Rusko carstvo pružilo je vojnu, diplomatsku i finansijsku pomoć Prvom srpskom ustanku od 1806. do 1812. godine. Saznajte kako je zajednička borba Srbije i Rusije oblikovala tok srpske istorije.',

  openGraph: {
    title:
      'Da li bi Prvi srpski ustanak opstao bez Rusije? Šest godina zajedničke borbe',

    description:
      'Od zajedničkih pobeda kod Varvarina, Loznice, Štubika i Malajnice do Bukureštanskog mira 1812. godine – pogledajte kako je ruska pomoć uticala na tok Prvog srpskog ustanka.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/prvi-srpski-ustanak-i-rusija',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/bratski-narod.jpg',
        width: 1200,
        height: 630,
        alt: 'Srpski ustanici i ruska vojska tokom Prvog srpskog ustanka',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Da li bi Prvi srpski ustanak opstao bez Rusije?',

    description:
      'Priča o šest godina zajedničke borbe Srbije i Rusije protiv Osmanskog carstva i događajima koji su promenili tok srpske istorije.',

    images: [
      'https://istokinfopult.rs/static/images/bratski-narod.jpg',
    ],
  },
}

export default function PrviSrpskiUstanakIRusijaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
