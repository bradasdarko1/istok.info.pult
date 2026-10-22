
import type { ReactNode } from 'react'
import AutoRelatedArticles from '@/components/AutoRelatedArticles'

export default function VestiLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      {children}
      <AutoRelatedArticles />
    </>
  )
}
