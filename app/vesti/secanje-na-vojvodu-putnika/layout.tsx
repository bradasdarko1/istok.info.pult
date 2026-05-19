import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Sećanje na vojvodu Radomira Putnika — stratega koji je obeležio istoriju Srbije',
  description:
    'Sećanje na vojvodu Radomira Putnika, jednog od najvećih srpskih vojskovođa, načelnika Vrhovne komande i simbola časti, discipline i služenja otadžbini.',

  openGraph: {
    title:
      'Sećanje na vojvodu Radomira Putnika — stratega koji je obeležio istoriju Srbije',
    description:
      'Vojvoda Radomir Putnik ostao je upamćen kao jedan od najvećih srpskih vojnih stratega, pod čijom komandom su izvojevane pobede na Ceru i Kolubari.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/secanje-na-vojvodu-putnika',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/radomir-putnik.jpg',
        width: 1200,
        height: 630,
        alt: 'Sećanje na vojvodu Radomira Putnika',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Sećanje na vojvodu Radomira Putnika — stratega koji je obeležio istoriju Srbije',
    description:
      'Sećanje na vojvodu Radomira Putnika, simbol časti, discipline i nepokolebljive odanosti otadžbini.',
    images: ['https://istokinfopult.rs/static/images/radomir-putnik.jpg'],
  },
}

export default function SecanjeNaVojvoduPutnikaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
