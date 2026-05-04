import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA U SASTAVU',
  description:
    'Trojica srpskih odbojkaša koji su igrali u Rusiji dobili su poziv za reprezentaciju Srbije. Pripreme za Ligu nacija počinju 4. maja.',

  openGraph: {
    title:
      'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA U SASTAVU',
    description:
      'Trojica srpskih odbojkaša iz ruskog prvenstva u sastavu Srbije za Ligu nacija.',
    url: 'https://istokinfopult.rs/vesti/srbija-okuplja-tim-za-ligu-nacija',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/liga-nacije.jpg',
        width: 1200,
        height: 630,
        alt: 'Reprezentacija Srbije u odbojci',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA',
    description:
      'Trojica srpskih odbojkaša iz ruskog prvenstva dobili su poziv u reprezentaciju Srbije.',
    images: ['https://istokinfopult.rs/static/images/liga-nacije.jpg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}