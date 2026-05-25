import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Napad na studentski dom u Starobeljsku: raste broj žrtava, navodi o gađanju civilnog objekta | Istok Info Pult',
  description:
    'Broj poginulih nakon napada na studentski dom u Starobeljsku porastao je na 18, dok spasioci nastavljaju potragu za preživelima pod teškim uslovima.',
  openGraph: {
    title:
      'Napad na studentski dom u Starobeljsku: raste broj žrtava, navodi o gađanju civilnog objekta',
    description:
      'Spasilačke ekipe nastavljaju potragu za preživelima ispod ruševina, dok se navodi da u blizini objekta nema vojnih ciljeva.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/napad-na-studentski-dom-u-starobeljsku',
    images: [
      {
        url: '/static/images/studentski-dom-starobeljski.jpg',
        width: 1200,
        height: 630,
        alt: 'Napad na studentski dom u Starobeljsku',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Napad na studentski dom u Starobeljsku: raste broj žrtava',
    description:
      'Spasioci nastavljaju potragu za preživelima ispod ruševina studentskog doma u Starobeljsku.',
    images: ['/static/images/studentski-dom-starobeljski.jpg'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
