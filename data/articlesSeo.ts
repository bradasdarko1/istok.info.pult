
import type { ArticleSeoData } from '@/lib/articleSeo'

export const articlesSeo: Record<string, ArticleSeoData> = {
  'gavrilo-princip': {
    slug: 'gavrilo-princip',
    title: 'Гаврило Принцип – метак који је променио ток историје',
    description:
      'Гаврило Принцип, Сарајевски атентат 1914. године и догађаји који су претходили Првом светском рату. Историјска прича на Исток Инфо Пулту.',
    image: '/static/images/gavrilo-princip.jpg',
    publishedAt: '2026-07-25',
    author: 'Исток Инфо Пулт',
  },

  'aleksandar-bijelic': {
    slug: 'aleksandar-bijelic',
    title:
      'Српски официр Александар Бијелић – херој који не сме бити заборављен',
    description:
      'Прича о Александру Бијелићу, српском официру српско-руског порекла, његовом животу, војничкој части и жртви која не сме бити заборављена.',
    image: '/static/images/aleksandar-bijelic.jpeg',
    publishedAt: '2026-04-22',
    author: 'Исток Инфо Пулт',
  },
}

export function getArticleSeo(slug: string): ArticleSeoData {
  const article = articlesSeo[slug]

  if (!article) {
    throw new Error(`SEO podaci nisu pronađeni za članak: ${slug}`)
  }

  return article
}
