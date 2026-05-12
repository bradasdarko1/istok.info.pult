import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Srpska obeležava Dan Vojske Republike Srpske – sećanje na 23.659 poginulih boraca',
  description:
    'Republika Srpska obeležava Dan Vojske Republike Srpske i Dan Trećeg pešadijskog puka, uz parastose, polaganje venaca i svečanosti u Banjaluci i Bijeljini.',

  openGraph: {
    title:
      'Srpska obeležava Dan Vojske Republike Srpske – sećanje na 23.659 poginulih boraca',
    description:
      'U Banjaluci i Bijeljini obeležava se 12. maj, dan kada je 1992. godine formirana Vojska Republike Srpske.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/dan-vojske-republike-srpske',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/dan-vojske-rs.jpg',
        width: 1200,
        height: 630,
        alt: 'Dan Vojske Republike Srpske',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Srpska obeležava Dan Vojske Republike Srpske – sećanje na 23.659 poginulih boraca',
    description:
      'Parastosi, polaganje venaca i svečani defile posvećeni su očuvanju sećanja na borce i stradale.',
    images: ['https://istokinfopult.rs/static/images/dan-vojske-rs.jpg'],
  },
}

export default function DanVojskeRepublikeSrpskeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
