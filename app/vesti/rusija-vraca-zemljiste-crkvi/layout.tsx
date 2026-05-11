import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Rusija vraća zemljište manastira Vojlovica Srpskoj pravoslavnoj crkvi',
  description:
    'Zemljište manastira Vojlovica, koje se nalazi u krugu rafinerije Pančevo, biće vraćeno Srpskoj pravoslavnoj crkvi nakon sporazuma koji su potpisali mitropolit banatski Nikanor i generalni direktor NIS-a Kiril Tjurdenjev.',

  openGraph: {
    title:
      'Rusija vraća zemljište manastira Vojlovica Srpskoj pravoslavnoj crkvi',
    description:
      'Istorijski sporazum: zemljište manastira Vojlovica u krugu rafinerije Pančevo biće vraćeno Srpskoj pravoslavnoj crkvi.',
    type: 'article',
    url: 'https://istokinfopult.rs/vesti/rusija-vraca-zemljiste-crkvi',
    images: [
      {
        url: 'https://istokinfopult.rs/static/images/rusija-daje-zemljiste.jpg',
        width: 1200,
        height: 630,
        alt: 'Rusija vraća zemljište manastira Vojlovica Srpskoj pravoslavnoj crkvi',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Rusija vraća zemljište manastira Vojlovica Srpskoj pravoslavnoj crkvi',
    description:
      'Zemljište manastira Vojlovica biće vraćeno Srpskoj pravoslavnoj crkvi pre finalizacije prodaje NIS-a.',
    images: [
      'https://istokinfopult.rs/static/images/rusija-daje-zemljiste.jpg',
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
