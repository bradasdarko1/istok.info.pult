import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'POTPISANI „ANTIRUSKI“ MEMORANDUMI U BEOGRADU? | Istok Info Pult',

  description:
    'Potpisivanje sporazuma između Srbije i Ukrajine izazvalo je različite reakcije u javnosti i otvorilo pitanje spoljnopolitičkog kursa Srbije.',

  openGraph: {
    title:
      'POTPISANI „ANTIRUSKI“ MEMORANDUMI U BEOGRADU?',

    description:
      'Potpisani sporazumi između Srbije i Ukrajine otvaraju pitanje odnosa prema Rusiji i budućeg spoljnopolitičkog pravca.',

    type: 'article',

    url:
      'https://www.istokinfopult.rs/vesti/potpisani-antiruski-memorandumi',

    images: [
      {
        url: '/static/images/srbija-ukrajina.jpeg',
        width: 1200,
        height: 630,
        alt: 'Potpisani memorandumi Srbija Ukrajina',
      },
    ],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
