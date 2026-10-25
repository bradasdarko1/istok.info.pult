'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

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
  title: 'STUDENTSKA LISTA POBEDILA NA IZBORIMA U SRBIJI – VUČIĆ PRIZNAO PORAZ',
  date: 'Objavljeno: 25. oktobar 2026.',
  lead: 'Studentska lista ostvarila je pobedu na vanrednim parlamentarnim izborima održanim 25. oktobra 2026. godine u Srbiji.',
  paragraphs: [
    'Prema prvim projekcijama CeSID-a, Studentska lista osvojila je oko 52 odsto glasova i 139 poslaničkih mandata, dok je lista „Aleksandar Vučić – Ujedinjena Srbija“ osvojila 39,3 odsto glasova i 104 mandata.',
    'Aleksandar Vučić priznao je izborni poraz, čime je otvoren put velikim političkim promenama u Srbiji. Konačni rezultati Republičke izborne komisije još se očekuju.'
  ],
  
  highlight1: 'Studentska lista osvojila oko 52 odsto glasova i većinu mandata u Narodnoj skupštini.',
  highlight2: 'Aleksandar Vučić priznao izborni poraz – Srbija pred velikim političkim promenama.',
}

const ruText = {
  category: 'Новости',
  title: 'СТУДЕНЧЕСКИЙ СПИСОК ПОБЕДИЛ НА ВЫБОРАХ В СЕРБИИ — ВУЧИЧ ПРИЗНАЛ ПОРАЖЕНИЕ',
  date: 'Опубликовано: 25 октябрь 2026 г.',
  lead: 'Студенческий избирательный список одержал победу на досрочных парламентских выборах, состоявшихся 25 октября 2026 года в Сербии.',
  paragraphs: [
    'Согласно первым прогнозам CeSID, Студенческий список получил около 52% голосов и 139 депутатских мандатов, в то время как список «Александар Вучич — Объединённая Сербия» набрал 39,3% голосов и 104 мандата.',
    'Александар Вучич признал поражение на выборах, что открывает путь к масштабным политическим переменам в Сербии. Окончательные результаты Республиканской избирательной комиссии пока ожидаются.'

  ],
  
  highlight1: 'Студенческий список получил около 52% голосов и большинство мест в Народной скупщине.',
  highlight2: 'Александар Вучич признал поражение на выборах — Сербия стоит на пороге крупных политических перемен.',
}

export default function SrbijaJeSlobodnaStudenskaListaOdnelaPobeduPage() {
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
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-yellow-400 uppercase">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl">
            {content.title}
          </h1>

          <p className="text-sm text-white/60 md:text-base">{content.date}</p>

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
            src="/static/images/studentska-lista-odnela-pobedu.jpg"
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
          <p className="mb-6 text-lg leading-8 font-medium text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold tracking-wide text-white uppercase md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold tracking-wide text-yellow-300 uppercase md:text-xl">
              {content.highlight2}
            </p>
          </div>

          <CommentsSection postSlug="srbija-je-slobodna-studenska-lista-odnela-pobedu" />
        </motion.div>
      </article>
    </main>
  )
}