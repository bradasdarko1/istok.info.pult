import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dan kada se srpska zastava zavijorila iznad Bele kuće',

  description:
    'Dana 28. jula 1918. godine u Sjedinjenim Američkim Državama obeležen je „Srpski dan“, a zastava Kraljevine Srbije zavijorila se iznad Bele kuće u čast srpskog naroda i njegovih žrtava u Velikom ratu.',

  openGraph: {
    title: 'Dan kada se srpska zastava zavijorila iznad Bele kuće',

    description:
      'Na četvrtu godišnjicu austrougarske objave rata Srbiji, predsednik SAD Vudro Vilson proglasio je 28. jul 1918. godine „Srpskim danom“. Zastava Kraljevine Srbije podignuta je iznad Bele kuće u znak poštovanja prema hrabrosti i žrtvama srpskog naroda.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/dan-kada-se-srpska-zastava-zavijorila-iznad-bele-kuce',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/srpska-zastava.jpg',
        width: 1200,
        height: 630,
        alt: 'Zastava Kraljevine Srbije iznad Bele kuće 28. jula 1918. godine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Dan kada se srpska zastava zavijorila iznad Bele kuće',

    description:
      'Dana 28. jula 1918. godine zastava Kraljevine Srbije zavijorila se iznad Bele kuće, dok su Sjedinjene Američke Države obeležavale „Srpski dan“.',

    images: [
      'https://istokinfopult.rs/static/images/srpska-zastava.jpg',
    ],
  },
}

export default function DanKadaSeSrpskaZastavaZavijorilaIznadBeleKuceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
