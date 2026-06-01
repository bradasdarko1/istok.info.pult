import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Otvoreno predavanje na TulGU: Evropa između liberalizma i tradicionalnih vrednosti',
  description:
    'Na Tulskom državnom univerzitetu održano je otvoreno predavanje doktora istorijskih nauka i slaviste Marka Štefana Petersa o političkim promenama u Evropi nakon parlamentarnih izbora u Mađarskoj.',

  openGraph: {
    title:
      'Otvoreno predavanje na TulGU: Evropa između liberalizma i tradicionalnih vrednosti',
    description:
      'Poznati slavista i istoričar Mark Štefan Peters održao je predavanje o političkim promenama u Evropi, odnosima Mađarske i Evropske unije i savremenim geopolitičkim procesima.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/otvoreno-predavnje-u-tulgu',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/otvoreno-predavnje-u-tulgu-4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Otvoreno predavanje na TulGU',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Otvoreno predavanje na TulGU: Evropa između liberalizma i tradicionalnih vrednosti',
    description:
      'Predavanje Marka Štefana Petersa na Tulskom državnom univerzitetu privuklo je veliku pažnju studenata i profesora.',
    images: [
      'https://istokinfopult.rs/static/images/otvoreno-predavnje-u-tulgu-4.jpeg',
    ],
  },
}

export default function OtvorenoPredavnjeUTulguLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
