'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

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

export default function KonkursiPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

  const isCyr = script === 'cyr'

  const content = {
    sr: {
      title: isCyr ? 'КОНКУРСИ' : 'KONKURSI',
      intro: isCyr
        ? 'Актуелни конкурси, програми и могућности за образовање, рад и стручно усавршавање.'
        : 'Aktuelni konkursi, programi i mogućnosti za obrazovanje, rad i stručno usavršavanje.',
      items: [
        {
          href: '/vesti/rusija-otvara-vrata',
          category: isCyr ? 'Конкурси' : 'Konkursi',
          title: isCyr
            ? 'РУСИЈА ОТВАРА ВРАТА СТРАНИМ СТРУЧЊАЦИМА'
            : 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',
          excerpt: isCyr
            ? 'Нова дигитална услуга за живот и рад у Русији намењена је страним стручњацима који испуњавају прописане услове.'
            : 'Nova digitalna usluga za život i rad u Rusiji namenjena je stranim stručnjacima koji ispunjavaju propisane uslove.',
          image: '/static/images/rusija-otvara-vrata.jpeg',
          date: isCyr ? '21. април 2026.' : '21. april 2026.',
        },
      ],
    },
    ru: {
      title: 'КОНКУРСЫ',
      intro: 'Актуальные конкурсы, программы и возможности для обучения, работы и профессионального развития.',
      items: [
        {
          href: '/vesti/rusija-otvara-vrata',
          category: 'Конкурсы',
          title: 'РОССИЯ ОТКРЫВАЕТ ДВЕРИ ДЛЯ ИНОСТРАННЫХ ЭКСПЕРТОВ',
          excerpt:
            'Новый цифровой сервис для жизни и работы в России предназначен для иностранных специалистов, соответствующих установленным критериям.',
          image: '/static/images/rusija-otvara-vrata.jpeg',
          date: '21 апреля 2026 г.',
        },
      ],
    },
  }

  const data = language === 'ru' ? content.ru : content.sr

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 md:px-8">
      <section className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            {data.intro}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/40 transition hover:border-yellow-400/50 hover:bg-black/60"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">
                    {item.category}
                  </p>

                  <h2 className="mb-3 text-xl font-extrabold leading-tight text-white">
                    {item.title}
                  </h2>

                  <p className="mb-4 text-sm text-white/50">{item.date}</p>

                  <p className="text-sm leading-7 text-zinc-300">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
