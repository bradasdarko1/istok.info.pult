
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const article = {
  slug: 'mica-zivojinovic-o-drazi-mihajlovicu',

  title:
    'Mića Živojinović otkriva tajne o Draži Mihailoviću | Istok Info Pult',

  description:
    'Mića Živojinović u podkastu Razgovori u Istoku najavljuje dosad neobjavljena saznanja o generalu Draži Mihailoviću. Saznajte šta donosi nova epizoda.',

  image:
    '/static/images/mica-zivojinovic-o-drazi-mihajlovicu.jpg',

  publishedAt: '2026-10-29',

  author: 'Istok Info Pult',
}

export const metadata: Metadata = createArticleSeo(article).metadata

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
