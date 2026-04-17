import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Balkanski most sećanja u Rusiji | Istok Info Pult',
  description:
    'Na Tulskom državnom univerzitetu premijerno je u Rusiji prikazan film „Ustaški Alkazar“, uz razgovor o zajedničkim korenima genocida nad Slovenima.',
  openGraph: {
    title: 'Balkanski most sećanja u Rusiji',
    description:
      'Premijera filma „Ustaški Alkazar“ u Rusiji i razgovor o zajedničkom istorijskom stradanju slovenskih naroda.',
    url: 'https://istokinfopult.com/vesti/balkanski-most',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: '/static/images/balkanski-most-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Balkanski most sećanja u Rusiji',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balkanski most sećanja u Rusiji',
    description:
      'Premijera filma „Ustaški Alkazar“ u Rusiji i razgovor o zajedničkom istorijskom stradanju slovenskih naroda.',
    images: ['/static/images/balkanski-most-1.jpeg'],
  },
}

export default function BalkanMostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}