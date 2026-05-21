import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA | Istok Info Pult',
  description:
    'Priča o italijanskom generalu Rafaeleu Iubiniju i italijanskim padobrancima KFOR-a koji su tokom martovskog pogroma 2004. godine stali u odbranu Pećke patrijaršije, srpskih svetinja i nevinih ljudi.',
  openGraph: {
    title:
      'ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA',
    description:
      'U danima martovskog pogroma 2004. godine, italijanski padobranci stali su u odbranu srpskih svetinja na Kosovu i Metohiji.',
    url: 'https://istokinfopult.rs/vesti/italijanski-general-koji-je-stao-uz-srpske-svetinje',
    siteName: 'Istok Info Pult',
    type: 'article',
    images: [
      {
        url: '/static/images/italijanski-general.jpg',
        width: 1200,
        height: 630,
        alt: 'Italijanski general koji je stao uz srpske svetinje',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA',
    description:
      'Italijanski padobranci KFOR-a tokom martovskog pogroma 2004. godine stali su u odbranu Pećke patrijaršije i srpskih svetinja.',
    images: ['/static/images/italijanski-general.jpg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
