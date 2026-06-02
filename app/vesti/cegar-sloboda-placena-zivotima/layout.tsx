import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Čegar – mesto gde je sloboda plaćena životom: 217 godina od podviga Stevana Sinđelića',

  description:
    'Na Čegaru kod Niša obeležena je 217. godišnjica slavne Čegarske bitke, jednog od najznačajnijih događaja Prvog srpskog ustanka i simbol srpskog junaštva.',

  openGraph: {
    title:
      'Čegar – mesto gde je sloboda plaćena životom: 217 godina od podviga Stevana Sinđelića',

    description:
      'Herojska žrtva vojvode Stevana Sinđelića i njegovih ustanika ostala je večni simbol borbe za slobodu, čast i opstanak srpskog naroda.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/cegar-sloboda-placena-zivotima',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/cegar.jpg',
        width: 1200,
        height: 630,
        alt: 'Spomenik na Čegaru kod Niša',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Čegar – mesto gde je sloboda plaćena životom: 217 godina od podviga Stevana Sinđelića',

    description:
      'Na brdu Čegar kod Niša obeležena je 217. godišnjica jedne od najznačajnijih bitaka Prvog srpskog ustanka.',

    images: ['https://istokinfopult.rs/static/images/cegar.jpg'],
  },
}

export default function CegarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}