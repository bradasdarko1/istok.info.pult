
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const seo = createArticleSeo({
  slug: 'aleksandar-bijelic',

  title:
    'Српски официр Александар Бијелић – херој који не сме бити заборављен',

  description:
    'Прича о Александру Бијелићу, српском официру српско-руског порекла, његовом животу, војничкој части и жртви која не сме бити заборављена.',

  image: '/static/images/aleksandar-bijelic.jpeg',

  publishedAt: '2026-04-22',

  author: 'Исток Инфо Пулт',
})

export const metadata = seo.metadata

export default function AleksandarBijelicLayout({
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
