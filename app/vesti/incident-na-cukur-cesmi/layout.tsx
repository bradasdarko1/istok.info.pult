import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Na današnji dan: Incident na Čukur česmi koji je ubrzao oslobođenje Srbije',

  description:
    'Na današnji dan 1862. godine dogodio se incident na Čukur česmi u Beogradu, jedan od ključnih događaja koji je doprineo konačnom oslobođenju Srbije od osmanske vlasti.',

  openGraph: {
    title:
      'Na današnji dan: Incident na Čukur česmi koji je ubrzao oslobođenje Srbije',

    description:
      'Sukob kod Čukur česme i kasnije tursko bombardovanje Beograda 1862. godine ostavili su dubok trag u srpskoj istoriji i učvrstili težnju ka slobodi i nezavisnosti.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/incident-na-cukur-cesmi',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/incident-na-cukur-cesmi.jpeg',
        width: 1200,
        height: 630,
        alt: 'Incident na Čukur česmi u Beogradu 1862. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Na današnji dan: Incident na Čukur česmi koji je ubrzao oslobođenje Srbije',

    description:
      'Incident na Čukur česmi 1862. godine i bombardovanje Beograda predstavljali su prekretnicu u borbi Srbije za slobodu i državnu samostalnost.',

    images: [
      'https://istokinfopult.rs/static/images/incident-na-cukur-cesmi.jpeg',
    ],
  },
}

export default function IncidentNaCukurCesmiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}