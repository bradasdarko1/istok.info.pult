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
  title: 'ISTOK INFO PULT I SRPSKO-RUSKI CENTAR „MAJAK“ OZVANIČILI SARADNJU',
  date: 'Objavljeno: 23. oktobar 2026.',
  lead: 'Istok Info Pult i Srpsko-ruski centar „Majak“ potpisali su protokol o saradnji, otvarajući novo poglavlje zajedničkog delovanja na polju kulture, istorije i očuvanja tradicionalnih vrednosti.',
  paragraphs: [
    'Ovo partnerstvo predstavlja važan korak ka realizaciji zajedničkih projekata, organizaciji kulturnih događaja i jačanju veza između srpskog i ruskog naroda.',
    'Zahvaljujemo se prijateljima iz centra „Majak“ na ukazanom poverenju i radujemo se budućoj saradnji.'
  ],
  
  highlight1: 'Zajedničkim snagama u očuvanju kulture, tradicije i istorijskog pamćenja.',
  highlight2: 'Novo partnerstvo – novi korak u jačanju srpsko-ruskog prijateljstva.',
}

const ruText = {
  category: 'Новости',
  title: '«ИСТОК ИНФО ПУЛТ» И СЕРБСКО-РУССКИЙ ЦЕНТР «МАЯК» ОФИЦИАЛЬНО ЗАКРЕПИЛИ СОТРУДНИЧЕСТВО',
  date: 'Опубликовано: 23 октября 2026 г.',
  lead: '«Исток Инфо Пулт» и Сербско-русский центр «Маяк» подписали протокол о сотрудничестве, открыв новую главу совместной деятельности в сфере культуры, истории и сохранения традиционных ценностей.',
  paragraphs: [
    'Это партнёрство станет важным шагом на пути реализации совместных проектов, организации культурных мероприятий и укрепления связей между сербским и русским народами.',
    'Благодарим наших друзей из центра «Маяк» за оказанное доверие и с нетерпением ждём дальнейшего сотрудничества.'

  ],
  
  highlight1: 'Общими усилиями — ради сохранения культуры, традиций и исторической памяти.',
  highlight2: 'Новое партнёрство — новый шаг к укреплению сербско-русской дружбы.',
}

export default function IstokInfoPultISrpskoRuskiCentarMajakOzvaniciliSaradnjuPage() {
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
            src="/static/images/potpisan-protokol-o-saradnji.jpeg"
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

          <CommentsSection postSlug="istok-info-pult-i-srpsko-ruski-centar-majak-ozvanicili-saradnju" />
        </motion.div>
      </article>
    </main>
  )
}