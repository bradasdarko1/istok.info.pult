import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Na današnji dan ubijen knez Mihailo Obrenović – vladar koji je oslobodio srpske gradove od turskih garnizona',

  description:
    'Na današnji dan 1868. godine u Košutnjaku je ubijen knez Mihailo Obrenović, jedan od najznačajnijih srpskih vladara XIX veka i državnik koji je iz srpskih gradova povukao turske garnizone.',

  openGraph: {
    title:
      'Na današnji dan ubijen knez Mihailo Obrenović',

    description:
      'Knez Mihailo Obrenović ostao je upamćen kao vladar koji je Srbiju vodio putem modernizacije i jačanja njene samostalnosti.',

    type: 'article',

    url:
      'https://istokinfopult.rs/vesti/na-danasnji-dan-ubijen-knez-mihailo-obrenovic',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/knez-mihailo-obrenovic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Knez Mihailo Obrenović',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Na današnji dan ubijen knez Mihailo Obrenović',

    description:
      'Na današnji dan 1868. godine u Košutnjaku je ubijen knez Mihailo Obrenović, jedan od najznačajnijih srpskih državnika XIX veka.',

    images: [
      'https://istokinfopult.rs/static/images/knez-mihailo-obrenovic.jpeg',
    ],
  },
}

export default function NaDanasnjiDanUbijenKnezMihailoObrenovicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}