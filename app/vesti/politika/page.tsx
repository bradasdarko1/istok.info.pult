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
  eyebrow: 'Sekcija',
  title: 'POLITIKA',
  subtitle:
    'Najvažnije političke vesti, analize, izjave i događaji iz zemlje, regiona i sveta na jednom mestu.',
  intro:
    'U ovoj rubrici pratićemo aktuelna politička dešavanja, izborne procese, diplomatske susrete, državne odluke i teme koje oblikuju savremeni društveni i međunarodni poredak.',
  cards: [
    {
      title: 'Domaća politika',
      description:
        'Vesti i analize o političkim događajima u Srbiji, radu institucija, izborima i javnim inicijativama.',
      href: '/vesti/politika/domaca-politika',
    },
    {
      title: 'Međunarodna politika',
      description:
        'Pregled globalnih političkih kretanja, odnosa među državama, diplomatskih susreta i međunarodnih pitanja.',
      href: '/vesti/politika/medjunarodna-politika',
    },
    {
      title: 'Analize i komentari',
      description:
        'Šira slika političkih procesa kroz tekstove koji pomažu da se razumeju uzroci i posledice važnih događaja.',
      href: '/vesti/politika/analize',
    },
  ],
  highlight1: 'POLITIKA KAO OGLEDALO VREMENA',
  highlight2: 'RAZUMEVANJE DOGAĐAJA KOJI MENJAJU DRUŠTVO',
}

const ruText = {
  eyebrow: 'Раздел',
  title: 'ПОЛИТИКА',
  subtitle:
    'Самые важные политические новости, аналитика, заявления и события из страны, региона и мира в одном месте.',
  intro:
    'В этой рубрике мы будем следить за актуальными политическими событиями, избирательными процессами, дипломатическими встречами, государственными решениями и темами, формирующими современный общественный и международный порядок.',
  cards: [
    {
      title: 'Внутренняя политика',
      description:
        'Новости и анализ политических событий в Сербии, работы институтов, выборов и общественных инициатив.',
      href: '/politika/domaca-politika',
    },
    {
      title: 'Международная политика',
      description:
        'Обзор глобальных политических процессов, отношений между государствами, дипломатических встреч и международных вопросов.',
      href: '/politika/medjunarodna-politika',
    },
    {
      title: 'Аналитика и комментарии',
      description:
        'Более широкий взгляд на политические процессы через тексты, помогающие понять причины и последствия важных событий.',
      href: '/politika/analize',
    },
  ],
  highlight1: 'ПОЛИТИКА КАК ЗЕРКАЛО ВРЕМЕНИ',
  highlight2: 'ПОНИМАНИЕ СОБЫТИЙ, МЕНЯЮЩИХ ОБЩЕСТВО',
}

export default function PolitikaPage() {
  const { language, script } = useLanguage() as {
    language: 'sr' | 'ru'
    script: 'lat' | 'cyr'
  }

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            eyebrow: latinToCyrillic(srLatin.eyebrow),
            title: latinToCyrillic(srLatin.title),
            subtitle: latinToCyrillic(srLatin.subtitle),
            intro: latinToCyrillic(srLatin.intro),
            cards: srLatin.cards.map((card) => ({
              ...card,
              title: latinToCyrillic(card.title),
              description: latinToCyrillic(card.description),
            })),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
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
            {content.eyebrow}
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
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <p className="text-base leading-8 text-gray-300 md:text-lg">
            {content.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {content.cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/30 hover:bg-white/10"
            >
              <div className="mb-4 h-1 w-16 rounded-full bg-yellow-400/70 transition group-hover:w-24" />

              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                {card.title}
              </h2>

              <p className="text-sm leading-7 text-gray-300 md:text-base">
                {card.description}
              </p>

              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                →
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
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
