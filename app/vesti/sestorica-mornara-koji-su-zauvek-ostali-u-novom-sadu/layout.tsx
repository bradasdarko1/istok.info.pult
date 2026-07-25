import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Šestorica mornara koji su zauvek ostali u Novom Sadu',

  description:
    'Iza zidina nekadašnje kasarne „Aleksandar Berić“ nalazi se malo vojno groblje na kojem počivaju šestorica sovjetskih mornara — četvorica sa sačuvanim imenima i dvojica nepoznatih.',

  openGraph: {
    title: 'Šestorica mornara koji su zauvek ostali u Novom Sadu',

    description:
      'Priča o šestorici sovjetskih mornara koji su stradali tokom oslobađanja Novog Sada i čišćenja Dunava od mina. Četvorica imaju ime, dok su dvojica ostala nepoznata.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/sestorica-mornara.jpg',
        width: 1200,
        height: 630,
        alt: 'Šestorica sovjetskih mornara koji počivaju u Novom Sadu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Šestorica mornara koji su zauvek ostali u Novom Sadu',

    description:
      'Više od osam decenija u Novom Sadu počivaju šestorica sovjetskih mornara. Četvorica sa svojim imenima, a dvojica kao nepoznati junaci.',

    images: [
      'https://istokinfopult.rs/static/images/sestorica-mornara.jpg',
    ],
  },
}

export default function SestoricaMornaraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
