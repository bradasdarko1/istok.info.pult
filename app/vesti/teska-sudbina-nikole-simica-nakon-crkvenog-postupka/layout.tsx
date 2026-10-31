
import type { Metadata } from 'next'
import { createArticleSeo } from '@/lib/articleSeo'

const article = {
  slug: 'teska-sudbina-nikole-simica-nakon-crkvenog-postupka',

  title:
    'Od oltara do građevine u tuđini: Teška sudbina Nikole Simića',

  description:
    'Nikola Simić, nekadašnji sveštenik Eparhije šumadijske, nakon crkvenog postupka ostao je bez svešteničkog čina. Njegova sudbina otvara pitanja crkvene discipline, slobode savesti i milosrđa.',

  image: '/static/images/nikola-simic.jpg',

  publishedAt: '2026-10-31',

  author: 'Istok Info Pult',
}

const { metadata: articleMetadata, structuredData } =
  createArticleSeo(article)

export const metadata: Metadata = articleMetadata

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />
      {children}
    </>
  )
}
