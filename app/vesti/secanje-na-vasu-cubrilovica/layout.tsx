import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Sećanje na Vasu Čubrilovića: Najmlađi učesnik Sarajevskog atentata i jedan od najvećih srpskih istoričara',

  description:
    'Na današnji dan, 11. juna 1990. godine, preminuo je Vaso Čubrilović, najmlađi učesnik Sarajevskog atentata, profesor Beogradskog univerziteta i akademik SANU.',

  openGraph: {
    title:
      'Sećanje na Vasu Čubrilovića: Najmlađi učesnik Sarajevskog atentata i jedan od najvećih srpskih istoričara',

    description:
      'Od osuđenika na 16 godina robije do akademika SANU i autora više od 70 istorijskih dela. Sećanje na Vasu Čubrilovića.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/secanje-na-vasu-cubrilovica',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/vaso-cubrilovic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vaso Čubrilović',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Sećanje na Vasu Čubrilovića: Najmlađi učesnik Sarajevskog atentata',

    description:
      'Na današnji dan 1990. godine preminuo je Vaso Čubrilović, najmlađi učesnik Sarajevskog atentata i jedan od najznačajnijih srpskih istoričara.',

    images: [
      'https://istokinfopult.rs/static/images/vaso-cubrilovic.jpeg',
    ],
  },
}

export default function SecanjeNaVasuCubrilovicaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
