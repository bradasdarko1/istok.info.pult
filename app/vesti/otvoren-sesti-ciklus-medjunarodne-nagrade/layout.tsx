import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Otvoren šesti ciklus Međunarodne nagrade #WEARETOGETHER',
  description:
    'Otvoren je prijem prijava za šesti ciklus Međunarodne nagrade #WEARETOGETHER namenjene humanitarnim, volonterskim, društvenim i ekološkim projektima iz celog sveta.',

  openGraph: {
    title:
      'Otvoren šesti ciklus Međunarodne nagrade #WEARETOGETHER',
    description:
      'Prijave za međunarodnu nagradu #WEARETOGETHER otvorene su do 14. juna. Učešće mogu da uzmu pojedinci, organizacije i volonterske inicijative iz celog sveta.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/otvoren-sesti-ciklus-medjunarodne-nagrade',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/medjunarodne-nagrade.jpeg',
        width: 1200,
        height: 630,
        alt: 'Međunarodna nagrada WEARETOGETHER',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Otvoren šesti ciklus Međunarodne nagrade #WEARETOGETHER',
    description:
      'Prijave su otvorene do 14. juna za humanitarne, volonterske i ekološke projekte iz celog sveta.',
    images: [
      'https://istokinfopult.rs/static/images/medjunarodne-nagrade.jpeg',
    ],
  },
}

export default function OtvorenSestiCiklusMedjunarodneNagradeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
