
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const seo = createArticleSeo({
  slug: 'gavrilo-princip',

  title:
    'Гаврило Принцип – метак који је променио ток историје',

  description:
    'Гаврило Принцип, Сарајевски атентат 1914. године и догађаји који су претходили Првом светском рату. Историјска прича на Исток Инфо Пулту.',

  image: '/static/images/gavrilo-princip.jpg',

  publishedAt: '2026-07-25',

  author: 'Исток Инфо Пулт',
})

export const metadata = seo.metadata

export default function GavriloPrincipLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seo.structuredData
          ).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
