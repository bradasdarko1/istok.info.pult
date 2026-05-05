import type { Metadata } from 'next'

const title =
  'Nagrada Evroazije 2026: Otvorene prijave za najbolje projekte iz celog sveta'

const description =
  'Prijave za Međunarodnu nagradu Evroazije 2026. su otvorene. Nagradni fond iznosi 17 miliona rubalja, a finalisti će svoje projekte predstaviti u Moskvi.'

const image = '/static/images/nagrada-evroazije.png'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    locale: 'sr_RS',
    url: 'https://istokinfopult.rs/vesti/nagrada-evrovizije-2026',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
}

export default function NagradaEvrovizije2026Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}