'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'

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
  category: 'Vesti',
  title: 'Herojstvo za nezaborav',
  date: 'Objavljeno: 9. april 2026.',
  lead: 'Na današnji dan 1999. godine počela je Bitka za Košare, jedna od najtežih i najsimboličnijih borbi u novijoj istoriji srpske vojske.',
  paragraphs: [
    'Borba na srpsko-albanskoj granici trajala je 67 dana i odnela 108 života.',
    'U početku je oko hiljadu pripadnika terorističke OVK, uz podršku albanske artiljerije, NATO avijacije i instruktora, napalo rejon karaule Košare na srpsko-albanskoj granici.',
    'Napad na frontu širine nekoliko kilometara počeo je rano ujutro 9. aprila 1999. godine.',
    'Do 9. aprila NATO nije gađao Košare, ali jeste druge položaje na jugoslovensko-albanskoj granici. Karaula je bila locirana na obroncima Prokletija, nedaleko od Đakovice i Dečana.',
    'Bitka za Košare postala je simbol odbrane otadžbine, hrabrosti, istrajnosti i žrtve srpskih vojnika.',
    'Hvala svim herojima Košara.',
  ],
  highlight1: 'KOŠARE 1999',
  highlight2: 'HVALA SVIM HEROJIMA',
}

const ruText = {
  category: 'Новости',
  title: 'Героизм, который не забывается',
  date: 'Опубликовано: 9 апреля 2026 г.',
  lead: 'В этот день в 1999 году началась Битва за Кошаре — одно из самых тяжёлых и символичных сражений в новейшей истории сербской армии.',
  paragraphs: [
    'Бои на сербско-албанской границе длились 67 дней и унесли 108 жизней.',
    'Вначале около тысячи боевиков террористической ОВК при поддержке албанской артиллерии, авиации НАТО и инструкторов атаковали район пограничной заставы Кошаре на сербско-албанской границе.',
    'Наступление на фронте шириной в несколько километров началось рано утром 9 апреля 1999 года.',
    'До 9 апреля НАТО не наносило удары по Кошаре, но атаковало другие позиции на югославско-албанской границе. Застава располагалась на склонах Проклетий, недалеко от Джяковицы и Дечан.',
    'Битва за Кошаре стала символом защиты Отечества, мужества, стойкости и жертвы сербских солдат.',
    'Спасибо всем героям Кошар.',
  ],
  highlight1: 'КОШАРЕ 1999',
  highlight2: 'СПАСИБО ВСЕМ ГЕРОЯМ',
}

export default function KosarePage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            lead: latinToCyrillic(srLatin.lead),
            paragraphs: srLatin.paragraphs.map(latinToCyrillic),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {content.title}
          </h1>

          <p className="text-sm text-white/60 md:text-base">
            {content.date}
          </p>
          <ShareButtons
                    title={content.title}
                    text="Pogledaj ovu vest na sajtu Istok Info Pult"
                   />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src="/static/images/kosare.jpeg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
          </div>
        </motion.div>
      </article>
    </main>
  )
}
