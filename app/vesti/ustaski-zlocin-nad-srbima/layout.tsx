import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Navršile se 83 godine od ustaškog zločina nad Srbima u Srebrenici, Zalažju i Vitlovcima',
  description:
    'Kod Spomen-kosturnice u Srebrenici danas će biti služen parastos i obeležene 83 godine od jednog od najtragičnijih zločina počinjenih nad srpskim stanovništvom tokom Drugog svetskog rata.',

  openGraph: {
    title:
      'Navršile se 83 godine od ustaškog zločina nad Srbima u Srebrenici, Zalažju i Vitlovcima',
    description:
      'Parastosom kod Spomen-kosturnice obeležava se sećanje na više od 250 srpskih civila ubijenih u junu 1943. godine.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/ustaski-zlocin-nad-srbima',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/srebrenica.jpg',
        width: 1200,
        height: 630,
        alt: 'Spomen-kosturnica u Srebrenici',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Navršile se 83 godine od ustaškog zločina nad Srbima u Srebrenici, Zalažju i Vitlovcima',
    description:
      'U Srebrenici se danas obeležavaju 83 godine od stradanja više od 250 srpskih civila, među kojima je bilo i 80 dece.',
    images: ['https://istokinfopult.rs/static/images/srebrenica.jpg'],
  },
}

export default function UstaskiZlocinNadSrbimaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
