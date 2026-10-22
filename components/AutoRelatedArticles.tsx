
'use client'

import { usePathname } from 'next/navigation'
import RelatedArticles from '@/components/RelatedArticles'
import { articlesSeo } from '@/data/articlesSeo'

const excludedSlugs = new Set([
  'srbija',
  'sport',
  'politika',
  'vesti-istok',
])

export default function AutoRelatedArticles() {
  const pathname = usePathname()

  const match = pathname.match(/^\/vesti\/([^/]+)\/?$/)

  if (!match) return null

  const slug = decodeURIComponent(match[1])

  if (excludedSlugs.has(slug)) return null
  if (!Object.prototype.hasOwnProperty.call(articlesSeo, slug)) {
    return null
  }

  return <RelatedArticles slug={slug} />
}
