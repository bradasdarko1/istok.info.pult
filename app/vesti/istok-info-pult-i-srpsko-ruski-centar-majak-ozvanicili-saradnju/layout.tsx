
import type { ReactNode } from 'react'
import { getArticleSeo } from '@/data/articlesSeo'
import { createArticleSeo } from '@/lib/articleSeo'

const seo = createArticleSeo(
  getArticleSeo(
    'istok-info-pult-i-srpsko-ruski-centar-majak-ozvanicili-saradnju'
  )
)

export const metadata = seo.metadata

export default function MajakSaradnjaLayout({
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
