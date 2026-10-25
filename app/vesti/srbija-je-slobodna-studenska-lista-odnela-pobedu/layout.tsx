
import type { Metadata } from 'next'
import { getArticleSeo } from '@/data/articlesSeo'
import { createArticleSeo } from '@/lib/articleSeo'

const slug = 'srbija-je-slobodna-studenska-lista-odnela-pobedu'

export const metadata: Metadata = createArticleSeo(
  getArticleSeo(slug)
).metadata

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
