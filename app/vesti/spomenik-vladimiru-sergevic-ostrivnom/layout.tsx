import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Pokrenuta akcija za podizanje spomenika Vladimiru Ostrivnom na groblju Orlovača',
  description:
    'Posle višegodišnjih administrativnih prepreka obezbeđena je dozvola za postavljanje spomenika ruskom državljaninu Vladimiru Sergejeviču Ostrivnom, ubijenom u Beogradu 2018. godine.',

  openGraph: {
    title:
      'Pokrenuta akcija za podizanje spomenika Vladimiru Ostrivnom na groblju Orlovača',
    description:
      'Posle višegodišnjih administrativnih prepreka obezbeđena je dozvola za postavljanje spomenika Vladimiru Ostrivnom. Svi koji žele mogu podržati realizaciju projekta dobrovoljnom donacijom.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/spomenik-vladimiru-sergevic-ostrivnom',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/spomenik-vladimiru-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Spomenik Vladimiru Ostrivnom',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Pokrenuta akcija za podizanje spomenika Vladimiru Ostrivnom na groblju Orlovača',
    description:
      'Pokrenuta je akcija za postavljanje spomenika Vladimiru Sergejeviču Ostrivnom na groblju Orlovača.',
    images: ['https://istokinfopult.rs/static/images/spomenik-vladimiru-1.jpg'],
  },
}

export default function SpomenikVladimiruSergevicOstrivnomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
