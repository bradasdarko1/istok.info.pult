import type { Metadata } from 'next'

const title =
  'STAVROPOLJ I SRBIJA JAČAJU SARADNJU: NOVE ŠANSE ZA POLJOPRIVREDU I PRIVREDU'

const description =
  'Saradnja između Srbije i Stavropoljskog kraja dobija konkretne obrise – fokus je na poljoprivredi, zajedničkim projektima i razmeni stručnjaka.'

const image = '/static/images/saradnja.jpg'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://istokinfopult.rs/vesti/razvoj-saradnje-srbije-i-stavropolja',
    siteName: 'Istok Info Pult',
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'sr_RS',
    type: 'article',
    publishedTime: '2026-04-30',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
}

export default function RazvojSaradnjeSrbijeIStavropoljaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
