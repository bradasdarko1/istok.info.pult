import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Na današnji dan: Nikola Tesla stigao u Beograd i dobio Orden Svetog Save',
  description:
    'Veliki srpski i svetski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine, kada je odlikovan Ordenom Svetog Save drugog stepena.',

  openGraph: {
    title:
      'Na današnji dan: Nikola Tesla stigao u Beograd i dobio Orden Svetog Save',
    description:
      'Veliki srpski i svetski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine, kada je odlikovan Ordenom Svetog Save drugog stepena.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/nikola-tesla-dobio-orden-svetog-save',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/nikola-tesla.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nikola Tesla u Beogradu 1892. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Na današnji dan: Nikola Tesla stigao u Beograd i dobio Orden Svetog Save',
    description:
      'Nikola Tesla je 2. juna 1892. godine posetio Beograd i tom prilikom primio Orden Svetog Save drugog stepena.',
    images: ['https://istokinfopult.rs/static/images/nikola-tesla.jpeg'],
  },
}

export default function NikolaTeslaDobioOrdenSvetogSaveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
