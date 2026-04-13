'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

function latinToCyrillic(text: string) {
  const multiMap: Record<string, string> = {
    Dž: 'Џ',
    DŽ: 'Џ',
    dž: 'џ',
    Lj: 'Љ',
    LJ: 'Љ',
    lj: 'љ',
    Nj: 'Њ',
    NJ: 'Њ',
    nj: 'њ',
  }

  let result = text

  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  category: 'Vesti',
  title: 'MEĐUNARODNA POLITIKA',
  subtitle:
    'Najvažnije političke vesti iz sveta, diplomatski odnosi, izbori i međunarodni događaji koji oblikuju savremeni poredak.',
  news: [
    {
      title: 'MAĐAR OSVOJIO MAĐARSKU',
      date: 'Objavljeno: 13. april 2026.',
      excerpt:
        'Smena Orbana nakon 16 godina na vlasti i početak nove političke etape u Mađarskoj.',
      href: '/vesti/izbori-madjarska',
      image: '/static/images/madjarska.jpg',
    },
  ],
  highlight1: 'SVETSKA POLITIKA MENJA TOK DOGAĐAJA',
  highlight2: 'PRATIMO KLJUČNE PROMENE I ODLUKE',
  readMore: 'Pročitaj više',
}

const ruText = {
  category: 'Новости',
  title: 'МЕЖДУНАРОДНАЯ ПОЛИТИКА',
  subtitle:
    'Важнейшие политические новости из мира, дипломатические отношения, выборы и международные события, формирующие современный порядок.',
  news: [
    {
      title: 'ВЕНГР ЗАВОЕВАЛ ВЕНГРИЮ',
      date: 'Опубликовано: 13. апреля 2026 г.',
      excerpt:
        'Смена Орбана после 16 лет у власти и начало нового политического этапа в Венгрии.',
      href: '/vesti/izbori-madjarska',
      image: '/static/images/madjarska.jpg',
    },
  ],
  highlight1: 'МИРОВАЯ ПОЛИТИКА МЕНЯЕТ ХОД СОБЫТИЙ',
  highlight2: 'СЛЕДИМ ЗА КЛЮЧЕВЫМИ ПЕРЕМЕНАМИ И РЕШЕНИЯМИ',
  readMore: 'Читать далее',
}

export default function MedjunarodnaPolitikaPage() {
  const { language, script } = useLanguage() as {
    language: 'sr' | 'ru'
    script: 'lat' | 'cyr'
  }

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            subtitle: latinToCyrillic(srLatin.subtitle),
            news: srLatin.news.map((item) => ({
              ...item,
              title: latinToCyrillic(item.title),
              date: latinToCyrillic(item.date),
              excerpt: latinToCyrillic(item.excerpt),
            })),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
            readMore: latinToCyrillic(srLatin.readMore),
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
            {content.category}
          </p>

          <h1 className="mb-4 text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl">
            {content.title}
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid gap-8"
        >
          {content.news.map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-yellow-400/30 hover:bg-white/10">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mb-3 text-sm text-white/60">{item.date}</p>

                  <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
                    {item.title}
                  </h2>

                  <p className="text-base leading-8 text-gray-300 md:text-lg">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {content.readMore}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-12 rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center"
        >
          <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
            {content.highlight1}
          </p>

          <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

          <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
            {content.highlight2}
          </p>
        </motion.div>
      </section>
    </main>
  )
}
