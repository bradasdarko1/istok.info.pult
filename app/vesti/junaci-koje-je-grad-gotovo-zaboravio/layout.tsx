import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Ruski trag u Novom Sadu: Junaci koje je grad gotovo zaboravio',

  description:
    'Portal Istok Info pokreće serijal priča o ruskim oficirima, inženjerima, lekarima, profesorima, umetnicima i mornarima koji su svojim radom, znanjem i žrtvom ostavili dubok trag u istoriji Novog Sada.',

  openGraph: {
    title:
      'Ruski trag u Novom Sadu: Junaci koje je grad gotovo zaboravio',

    description:
      'Više od dva veka ruski oficiri, inženjeri, naučnici, lekari, umetnici i dobrovoljci gradili su, branili i menjali Novi Sad. Istok Info donosi priče o ljudima koje grad ne sme da zaboravi.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/junaci-koje-je-grad-gotovo-zaboravio',

    images: [
      {
        url:
          'https://istokinfopult.rs/static/images/ruski-trag-u-novom-sadu.jpg',
        width: 1200,
        height: 630,
        alt:
          'Ruski trag u Novom Sadu – sećanje na ruske i sovjetske junake',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ruski trag u Novom Sadu: Junaci koje je grad gotovo zaboravio',

    description:
      'Istok Info pokreće serijal o Rusima koji su svojim radom, znanjem i žrtvom postali deo istorije Novog Sada.',

    images: [
      'https://istokinfopult.rs/static/images/ruski-trag-u-novom-sadu.jpg',
    ],
  },
}

export default function RuskiTragUNovomSaduLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}