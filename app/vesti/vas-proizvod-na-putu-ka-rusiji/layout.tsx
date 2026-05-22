import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaš proizvod na putu ka Rusiji | Istok Info Pult',
  description:
    'Otvoren konkurs za kompanije, startap timove, inovatore i pojedince koji žele da predstave svoje proizvode i ideje partnerima iz Rusije.',

  openGraph: {
    title: 'Vaš proizvod na putu ka Rusiji',
    description:
      'Predstavite svoj proizvod, katalog ili poslovnu ideju ruskim partnerima kroz konkurs Istok Info Pulta.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/vas-proizvod-na-putu-ka-rusiji',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/saradnja-sa-rusijom.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vaš proizvod na putu ka Rusiji',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vaš proizvod na putu ka Rusiji',
    description:
      'Konkurs za saradnju sa partnerima iz Rusije — predstavite svoj proizvod ili poslovnu ideju.',
    images: ['https://istokinfopult.rs/static/images/saradnja-sa-rusijom.jpeg'],
  },
}

export default function VasProizvodNaPutuKaRusijiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
