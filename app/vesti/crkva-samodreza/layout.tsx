import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Crkva Samodreža – svetinja u kojoj se, prema predanju, knez Lazar pričestio pred Kosovski boj',

  description:
    'Crkva Samodreža kod Vučitrna, posvećena Svetom Jovanu Krstitelju, zauzima posebno mesto u srpskoj istoriji i narodnom predanju. Prema tradiciji, upravo u ovoj svetinji knez Lazar pričestio se sa vojskom pred Kosovski boj 1389. godine.',

  openGraph: {
    title:
      'Crkva Samodreža – svetinja u kojoj se, prema predanju, knez Lazar pričestio pred Kosovski boj',

    description:
      'Jedna od najznačajnijih srpskih svetinja na Kosovu i Metohiji, Crkva Samodreža vekovima svedoči o istoriji, stradanju i duhovnom nasleđu srpskog naroda.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/crkva-samodreza',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/crkva-samodrez.jpeg',
        width: 1200,
        height: 630,
        alt: 'Crkva Samodreža kod Vučitrna',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Crkva Samodreža – svetinja u kojoj se, prema predanju, knez Lazar pričestio pred Kosovski boj',

    description:
      'Crkva Samodreža predstavlja jednu od najvažnijih srpskih svetinja na Kosovu i Metohiji i neraskidivo je povezana sa predanjem o Kosovskom boju 1389. godine.',

    images: [
      'https://istokinfopult.rs/static/images/crkva-samodrez.jpeg',
    ],
  },
}

export default function CrkvaSamodrezaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}