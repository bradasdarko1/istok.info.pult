
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const article = {
  slug: 'marija-jovovic-razgovori-u-istoku-price-koje-do-sada-niste-culi',

  title:
    'Marija Jovović u Razgovorima u Istoku – priče koje do sada niste čuli',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, otkriva neispričane priče o svom ocu, porodičnom nasleđu i težini prezimena koje nosi. Premijera podkasta Razgovori u Istoku danas u 17 časova.',

  image: '/static/images/istina-o-blagoju-jovovicu.jpg',

  publishedAt: '2026-10-26T11:00:00+01:00',

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
