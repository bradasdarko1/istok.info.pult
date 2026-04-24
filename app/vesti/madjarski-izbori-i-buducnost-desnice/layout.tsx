import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tribina u Novom Sadu: Mađarski izbori i budućnost desnice | Istok Info Pult',
  description:
    'U subotu 25. aprila u 19 časova u Istok Info Pultu u Novom Sadu biće održana tribina „Mađarski izbori i budućnost desnice“. Govori dr Dušan Dostanić.',

  openGraph: {
    title: 'Tribina u Novom Sadu: Mađarski izbori i budućnost desnice',
    description:
      'Gost tribine je dr Dušan Dostanić, saradnik Instituta za političke studije. Događaj se održava 25. aprila u 19 časova, Maksima Gorkog 2a, Novi Sad.',
    url: 'https://istokinfopult.rs/vesti/madjarski-izbori-i-buducnost-desnice',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/dusan-dostanic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tribina Mađarski izbori i budućnost desnice',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tribina u Novom Sadu: Mađarski izbori i budućnost desnice',
    description:
      'U subotu 25. aprila u 19 časova u Istok Info Pultu. Govori dr Dušan Dostanić.',
    images: ['https://istokinfopult.rs/static/images/dusan-dostanic.jpeg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
