import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'U Nišu otkriven mural ruskom heroju Nikolaju Rajevskom',
  description:
    'U Nišu je otkriven mural posvećen ruskom pukovniku Nikolaju Rajevskom, heroju Srpsko-turskog rata i simbolu rusko-srpskog bratstva.',

  openGraph: {
    title: 'U Nišu otkriven mural ruskom heroju Nikolaju Rajevskom',
    description:
      'Mural u čast ruskog pukovnika Nikolaja Rajevskog otkriven je povodom priprema za obeležavanje 150 godina od početka Srpsko-turskog rata.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/u-nisu-mural-nikolaju-rajevskom',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/nikolaj-rajevski-mural.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mural Nikolaju Rajevskom u Nišu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'U Nišu otkriven mural ruskom heroju Nikolaju Rajevskom',
    description:
      'U Nišu je otkriven mural posvećen ruskom pukovniku Nikolaju Rajevskom, heroju Srpsko-turskog rata.',
    images: ['https://istokinfopult.rs/static/images/nikolaj-rajevski-mural.jpeg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
