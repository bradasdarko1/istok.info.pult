import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Šetate pored njihovih zgrada svaki dan, a gotovo niko ne zna da su ih projektovali Rusi koji su izgubili svoju domovinu',

  description:
    'Posle Oktobarske revolucije hiljade ruskih emigranata pronašle su novi dom u Srbiji. Arhitekte, inženjeri, lekari i profesori ostavili su dubok trag u razvoju Novog Sada, a njihove građevine i danas predstavljaju deo identiteta grada.',

  openGraph: {
    title:
      'Šetate pored njihovih zgrada svaki dan, a gotovo niko ne zna da su ih projektovali Rusi koji su izgubili svoju domovinu',

    description:
      'Malo ko zna da su mnoge prepoznatljive građevine Novog Sada projektovali ruski emigranti koji su posle 1917. godine pronašli novi dom u Srbiji. Njihovo znanje, kultura i rad zauvek su promenili izgled grada.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/rusi-koji-su-gradili-novi-sad',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/rusi-koji-su-gradili-novi-sad.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruski emigranti koji su gradili Novi Sad posle 1917. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Šetate pored njihovih zgrada svaki dan, a gotovo niko ne zna da su ih projektovali Rusi koji su izgubili svoju domovinu',

    description:
      'Hiljade ruskih emigranata posle Oktobarske revolucije pomogle su izgradnju Novog Sada. Njihovo nasleđe i danas živi kroz arhitekturu, kulturu i obrazovanje.',

    images: [
      'https://istokinfopult.rs/static/images/rusi-koji-su-gradili-novi-sad.jpg',
    ],
  },
}

export default function RusiKojiSuGradiliNoviSadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
