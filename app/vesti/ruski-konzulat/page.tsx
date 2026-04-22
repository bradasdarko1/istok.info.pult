'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

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

const srLatin = {
  category: 'Vesti',
  title: 'NOVI SAD DOBIJA POČASNI KONZULAT RUSIJE',
  date: 'Objavljeno: 22. april 2026.',
  lead: 'Otvaranjem Počasnog konzulata Rusije u Novi Sad, grad postaje novo važno diplomatsko i privredno središte saradnje između Srbija i Rusija, uz dodatno jačanje prijateljskih odnosa i institucionalnih veza dve zemlje.',
  paragraphs: [
    'U četvrtak 23.04. se u Novi Sad otvara, po nalogu Ministarstvo spoljnih poslova Ruske Federacije, Počasni konzulat Rusije.'
  ],
  highlight1: 'DIPLOMATSKO JAČANJE PRIJATELJSTVA',
  highlight2: 'NOVI SAD NA MAPI VAŽNIH ODNOSA',
}

const ruText = {
  category: 'Новости',
  title: 'В НОВОМ САДУ ОТКРЫВАЕТСЯ ПОЧЁТНОЕ КОНСУЛЬСТВО РОССИИ',
  date: 'Опубликовано: 22 апреля 2026 г.',
  lead: 'С открытием Почётного консульства России в Novi Sad город становится новым важным дипломатическим и экономическим центром сотрудничества между Сербия и Россия, что будет способствовать дальнейшему укреплению дружественных отношений и институциональных связей двух стран.',
  paragraphs: [
    'В четверг, 23.04, в Novi Sad по распоряжению Министерство иностранных дел Российской Федерации открывается Почётное консульство России.'
  ],
  highlight1: 'УКРЕПЛЕНИЕ ДРУЖЕСКИХ ОТНОШЕНИЙ',
  highlight2: 'НОВЫЙ САД НА КАРТЕ ВАЖНЫХ ОТНОШЕНИЙ',
}

export default function RuskiKonzulatPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

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
            src="/static/images/ruski-konzulat.jpeg"
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

          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => {
              const headingIndexes = [1, 5, 10, 12]
              const bulletIndexes = [2, 3, 4, 6, 7, 8]
              const numberedIndexes = [13, 14, 15, 16]
              const infoBoxIndexes = [9, 17]
              const isEmailLine = index === 18

              if (headingIndexes.includes(index)) {
                return (
                  <h3
                    key={index}
                    className="pt-4 text-xl font-bold text-white border-t border-white/10"
                  >
                    {paragraph}
                  </h3>
                )
              }

              if (bulletIndexes.includes(index)) {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-yellow-400/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                    <p>{paragraph}</p>
                  </div>
                )
              }

              if (numberedIndexes.includes(index)) {
                const number = index - 12
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black text-sm">
                      {number}
                    </span>
                    <p className="flex-1">{paragraph.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                )
              }

              if (infoBoxIndexes.includes(index)) {
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-white"
                  >
                    {paragraph}
                  </div>
                )
              }

              if (isEmailLine) {
                const email = 'balkans.dialogue@gorchakovfund.ru'
                const parts = paragraph.split(email)

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p>
                      {parts[0]}
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold text-yellow-400 transition hover:text-yellow-300 break-all"
                      >
                        {email}
                      </a>
                      {parts[1]}
                    </p>
                  </div>
                )
              }

              return <p key={index}>{paragraph}</p>
            })}
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

          <CommentsSection postSlug="ruski-konzulat" />
        </motion.div>
      </article>
    </main>
  )
}
