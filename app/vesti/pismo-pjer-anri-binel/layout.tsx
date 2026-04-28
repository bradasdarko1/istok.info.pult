import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Pismo i poruka Pjera Anrija Binela srpskom narodu | Istok Info Pult',
  description:
    'Pismo Pjera Anrija Binela srpskom narodu — reči prijatelja koji je stao uz Srbiju i ostavio snažnu poruku o časti, istini i prijateljstvu.',

  openGraph: {
    title:
      'Pismo i poruka Pjera Anrija Binela srpskom narodu',
    description:
      'Reči prijatelja koji je stao uz Srbiju — pismo Pjera Anrija Binela srpskom narodu.',
    url: 'https://istokinfopult.rs/vesti/pismo-pjer-anri-binel',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/pismo-srbiji.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pismo i poruka Pjera Anrija Binela srpskom narodu',
      },
    ],
    locale: 'sr_RS',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Pismo i poruka Pjera Anrija Binela srpskom narodu',
    description:
      'Reči prijatelja koji je stao uz Srbiju — pismo Pjera Anrija Binela srpskom narodu.',
    images: ['https://istokinfopult.rs/static/images/pismo-srbiji.jpeg'],
  },
}

export default function PismoPjeraAnrijaBinelaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
