'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

function latinToCyrillic(text: string) {
  const multiMap: Record<string, string> = {
    'Dž': 'Џ',
    'DŽ': 'Џ',
    'dž': 'џ',
    'Lj': 'Љ',
    'LJ': 'Љ',
    'lj': 'љ',
    'Nj': 'Њ',
    'NJ': 'Њ',
    'nj': 'њ',
  }

  let result = text

  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ',
    E: 'Е', F: 'Ф', G: 'Г', H: 'Х', I: 'И', J: 'Ј', K: 'К',
    L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П', R: 'Р', S: 'С',
    Š: 'Ш', T: 'Т', U: 'У', V: 'В', Z: 'З', Ž: 'Ж',
    a: 'а', b: 'б', c: 'ц', č: 'ч', ć: 'ћ', d: 'д', đ: 'ђ',
    e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј', k: 'к',
    l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с',
    š: 'ш', t: 'т', u: 'у', v: 'в', z: 'з', ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  pageTitle: 'ISTOK VESTI',
  pageDescription:
    'Najvažnije vesti iz Rusije, Belorusije i drugih zemalja Istoka.',
  news: [
    // 👉 OVDE DODAJEŠ SVOJE VESTI
    {
      title: 'Predavanje o sećanju i bratstvu održano na Državnom univerzitetu u Tuli.',
      date: '9. april 2026.',
      excerpt:
        'Gostujući predavač bio je Vladimir Nikolajevič Kulik, lekar i pisac. Njegova izabrana tema retko se čuje u učionici: "Ruske medicinske misije u Srbiji tokom Balkanskih ratova i Prvog svetskog rata".',
      href: '/vesti/vesti-istok/rusija-predavanje',
      image: '/static/images/rusija-2.jpeg',
    },
  ],
}

const ruText = {
  pageTitle: 'НОВОСТИ ВОСТОКА',
  pageDescription:
    'Самые важные новости из России, Беларуси и других стран Востока.',
  news: [
    {
      title: 'Лекция о памяти и братстве, прочитанная в Тульском государственном университете.',
      date: '9 апреля 2026 г.',
      excerpt:
        'Приглашенным лектором был Владимир Николаевич Кулик, врач и писатель. Выбранная им тема редко встречается в учебных программах: «Российские медицинские миссии в Сербии во время Балканских войн и Первой мировой войны».',
      href: '/vesti/vesti-istok/rusija-predavanje',
      image: '/static/images/rusija-2.jpeg',
    },
  ],
}

export default function IstokVestiPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            pageTitle: latinToCyrillic(srLatin.pageTitle),
            pageDescription: latinToCyrillic(srLatin.pageDescription),
            news: srLatin.news.map((item) => ({
              ...item,
              title: latinToCyrillic(item.title),
              date: latinToCyrillic(item.date),
              excerpt: latinToCyrillic(item.excerpt),
            })),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <section className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.pageTitle}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            {content.pageTitle}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            {content.pageDescription}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {content.news.map((item, index) => (
            <motion.article
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-yellow-400/30 hover:bg-white/10"
            >
              <Link href={item.href}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
              </Link>

              <div className="p-6">
                <p className="mb-3 text-sm text-white/60">{item.date}</p>

                <Link href={item.href}>
                  <h2 className="mb-4 text-2xl font-extrabold leading-tight hover:text-yellow-300">
                    {item.title}
                  </h2>
                </Link>

                <p className="mb-6 text-base text-gray-300">
                  {item.excerpt}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-300 hover:bg-yellow-400/20"
                >
                  {language === 'ru'
                    ? 'Прочитать новость'
                    : script === 'cyr'
                      ? 'Прочитај вест'
                      : 'Pročitaj vest'}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </section>
    </main>
  )
}
