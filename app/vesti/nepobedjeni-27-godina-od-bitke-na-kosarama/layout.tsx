import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Nepobeđeni: 27 godina od završetka Bitke na Košarama',

  description:
    'Na današnji dan pre 27 godina završena je Bitka na Košarama, jedna od najznačajnijih i najtežih bitaka tokom sukoba na Kosovu i Metohiji. Tokom 67 dana borbi pripadnici Vojske Jugoslavije branili su državnu granicu.',

  openGraph: {
    title:
      'Nepobeđeni: 27 godina od završetka Bitke na Košarama',

    description:
      'Bitka na Košarama ostala je simbol hrabrosti, istrajnosti i požrtvovanosti pripadnika Vojske Jugoslavije koji su tokom 67 dana branili državnu granicu.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/nepobedjeni-27-godina-od-zavrsetka-bitke-na-kosarama',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/kosaree.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bitka na Košarama',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Nepobeđeni: 27 godina od završetka Bitke na Košarama',

    description:
      'Pre 27 godina završena je Bitka na Košarama, jedna od najznačajnijih bitaka tokom sukoba na Kosovu i Metohiji.',

    images: [
      'https://istokinfopult.rs/static/images/kosaree.jpeg',
    ],
  },
}

export default function Nepobedjeni27GodinaOdBitkeNaKosaramaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
