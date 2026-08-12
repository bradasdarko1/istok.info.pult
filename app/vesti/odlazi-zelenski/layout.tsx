import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Odlazi, Zelenski: infopartner RIA „Voronjež“ ispričao kako je dočekao kolonu ukrajinskog predsednika u Beogradu',

  description:
    'Aktivisti pokreta „Izbor Naš!“ dočekali su kolonu Vladimira Zelenskog u Beogradu transparentima sa porukom „Odlazi, Zelenski“. Lider pokreta Dane Čanković govorio je o poseti ukrajinskog predsednika Srbiji i odnosima Srbije i Rusije.',

  openGraph: {
    title:
      '„Odlazi, Zelenski!“ — poruka koja je dočekala ukrajinskog predsednika u Beogradu',

    description:
      'Aktivisti pokreta „Izbor Naš!“ dočekali su Vladimira Zelenskog u Beogradu transparentima protiv njegove posete. Dane Čanković poručio je da Srbija ne sme da bude okrenuta protiv Rusije.',

    type: 'article',

    url: 'https://istokinfopult.rs/vesti/odlazi-zelenski',

    images: [
      {
        url: 'https://istokinfopult.rs/static/images/odlazi-zelenski.jpeg',
        width: 1200,
        height: 630,
        alt: 'Odlazi, Zelenski — doček kolone Vladimira Zelenskog u Beogradu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      '„Odlazi, Zelenski!“ — poruka koja je dočekala ukrajinskog predsednika u Beogradu',

    description:
      'Pokret „Izbor Naš!“ dočekao je kolonu Vladimira Zelenskog u Beogradu transparentima. Dane Čanković govorio je o odnosima Srbije i Rusije i poseti ukrajinskog predsednika.',

    images: [
      'https://istokinfopult.rs/static/images/odlazi-zelenski.jpeg',
    ],
  },
}

export default function OdlaziZelenskiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}