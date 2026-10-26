import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const article = {
  slug: 'novi-sad-je-sinoc-disao-slobodu-ponovo-ce-procvetati-bozur',

  title:
    'Novi Sad je sinoć disao slobodu – ponovo će procvetati božur',

  description:
    'Trg slobode u Novom Sadu bio je ispunjen pesmom, zastavama i proslavom pobede Studentske liste. Šesnaest minuta tišine odalo je počast žrtvama pada nadstrešnice.',

  image: '/static/images/srbija-je-slobodna.jpg',

  publishedAt: '2026-10-26T10:40:00+01:00',

  author: 'Istok Info Pult',
}

const seo = createArticleSeo(article)

export const metadata: Metadata = seo.metadata

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}