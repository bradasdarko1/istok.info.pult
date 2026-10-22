
import type { ReactNode } from 'react'
import { createArticleSeo } from '@/lib/articleSeo'

const { metadata, structuredData } = createArticleSeo({
  slug: 'razgovori-u-istoku-gost-marija-jovovic',

  title:
    'Marija Jovović gošća treće epizode podkasta „Razgovori u Istoku“',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, gošća je treće epizode podkasta „Razgovori u Istoku“. Razgovor o knjizi, porodičnom nasleđu, istoriji i odgovornosti koju nosi prezime Jovović.',

  image: '/static/images/marija-jovovic.jpeg',

  publishedAt: '2026-10-22T08:00:00+02:00',

  author: 'Istok Info Pult',
})

export { metadata }

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
