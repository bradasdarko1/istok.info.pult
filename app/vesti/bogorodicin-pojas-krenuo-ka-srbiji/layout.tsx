import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Bogorodičin pojas krenuo ka Srbiji — vernici sa nestrpljenjem očekuju svetinju',
  description:
    'Velika pravoslavna svetinja — Bogorodičin pojas — krenula je ka Srbiji, gde se očekuje dolazak koji će okupiti hiljade vernika iz celog regiona.',

  openGraph: {
    title:
      'Bogorodičin pojas krenuo ka Srbiji — vernici sa nestrpljenjem očekuju svetinju',
    description:
      'Velika pravoslavna svetinja — Bogorodičin pojas — krenula je ka Srbiji, gde se očekuje dolazak koji će okupiti hiljade vernika iz celog regiona.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/bogorodicin-pojas-krenuo-ka-srbiji',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/bogorodicin-pojas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bogorodičin pojas krenuo ka Srbiji',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Bogorodičin pojas krenuo ka Srbiji — vernici sa nestrpljenjem očekuju svetinju',
    description:
      'Jedna od najvećih pravoslavnih svetinja krenula je ka Srbiji uz posebne mere bezbednosti.',
    images: ['https://istokinfopult.rs/static/images/bogorodicin-pojas.jpeg'],
  },
}

export default function BogorodicinPojasKrenuoKaSrbijiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
