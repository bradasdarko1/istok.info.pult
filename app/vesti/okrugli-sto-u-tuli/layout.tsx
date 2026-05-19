import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata',
  description:
    'Na Tulskom državnom univerzitetu održan je međunarodni okrugli sto o očuvanju istorijskog pamćenja i suprotstavljanju falsifikovanju istorije.',

  openGraph: {
    title: 'Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata',
    description:
      'Skup u Tuli okupio je istraživače iz Rusije, Srbije i Južne Osetije, koji su govorili o reviziji istorije, kulturi pamćenja i savremenim informacionim sukobima.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/okrugli-sto-u-tuli',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/okrugli-sto-3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Okrugli sto u Tuli',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata',
    description:
      'Međunarodni okrugli sto u Tuli posvećen očuvanju istorijskog pamćenja i borbi protiv falsifikovanja istorije.',
    images: ['https://istokinfopult.rs/static/images/okrugli-sto-3.jpeg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
