import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Francuz koji je rizikovao sve zbog Srbije: Pjer Anri Binel istinski heroj',
  description:
    'Priča o Pjeru Anriju Binelu, bivšem majoru francuske vojne obaveštajne službe koji je rizikovao karijeru kako bi pomogao Srbiji.',

  openGraph: {
    title:
      'Francuz koji je rizikovao sve zbog Srbije: Pjer Anri Binel istinski heroj',
    description:
      'Zbog pomoći Srbiji izgubio je čin, odlikovanja i karijeru — ali nikada čast.',
    url: 'https://istokinfopult.rs/vesti/pjer-anri-binel',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/pjer.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pjer Anri Binel',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Francuz koji je rizikovao sve zbog Srbije: Pjer Anri Binel istinski heroj',
    description:
      'Sutra objavljujemo i pismo Pjera Anrija Binela upućeno srpskom narodu.',
    images: ['https://istokinfopult.rs/static/images/pjer.jpeg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
