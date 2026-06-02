import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Dr Aleksa Filipović održao predavanje u Tuli: Spoljna politika Srbije između četiri stuba',
  description:
    'Dr Aleksa Filipović govorio je u Tuli o spoljnoj politici Srbije, odnosima sa EU, SAD, Rusijom i Kinom, vojnoj neutralnosti i savremenim geopolitičkim izazovima.',

  openGraph: {
    title:
      'Dr Aleksa Filipović održao predavanje u Tuli: Spoljna politika Srbije između četiri stuba',
    description:
      'Dr Aleksa Filipović govorio je u Tuli o spoljnoj politici Srbije, odnosima sa EU, SAD, Rusijom i Kinom, vojnoj neutralnosti i savremenim geopolitičkim izazovima.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/aleksa-filipovic-predavanje-u-tuli',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/aleksa-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dr Aleksa Filipović održao predavanje u Tuli',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Dr Aleksa Filipović održao predavanje u Tuli',
    description:
      'Dr Aleksa Filipović govorio je u Tuli o spoljnoj politici Srbije, odnosima sa EU, SAD, Rusijom i Kinom, vojnoj neutralnosti i savremenim geopolitičkim izazovima.',
    images: ['https://istokinfopult.rs/static/images/aleksa-1.jpeg'],
  },
}

export default function AleksaFilipovicPredavanjeUTuliLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
