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
  title:
    'U MOSKVI PREDSTAVLJEN SPOMENIK RUSKOM HEROJU KOJI ĆE BITI PODIGNUT U SRBIJI',
  date: 'Objavljeno: 24. april 2026.',
  lead: 'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi, a namenjen da bude podignut u Srbiji.',
  paragraphs: [
    'U Moscow je svečano predstavljen projekat spomenika pukovniku Nikolaj Nikolajevič Rajevski, ruskom oficiru i dobrovoljcu koji je položio život boreći se za slobodu Srbije. Monument će uskoro biti podignut u Srbiji, kao trajni znak poštovanja prema čoveku čije ime zauzima posebno mesto u srpsko-ruskoj istoriji.',
    'Predstavljanje je održano uz prisustvo brojnih zvanica, umetnika i predstavnika javnog života, a autor spomenika je poznati vajar Ajdin Zejnalov, akademik Ruske akademije umetnosti. Reč je o bisti koja će biti deo njegovog „Balkanskog ciklusa“, umetničke serije posvećene velikim ruskim ličnostima koje su ostavile dubok trag na Balkanu.',
    'Pukovnik Rajevski ostao je upamćen kao simbol časti, hrabrosti i bratstva dva naroda. Njegova žrtva u borbi za Srbiju i danas inspiriše generacije, a podizanje spomenika predstavlja snažnu poruku da istorijsko savezništvo i zajedničke vrednosti ne blede kroz vreme.',
    'Ovaj spomenik neće biti samo umetničko delo, već mesto sećanja, zahvalnosti i poštovanja prema ruskom heroju koji je svoju sudbinu vezao za srpski narod.'
  ],
  highlight1: 'SIMBOL BRATSTVA SRPSKOG I RUSKOG NARODA',
  highlight2: 'SEĆANJE NA ČOVEKA KOJI JE DAO ŽIVOT ZA SRBIJU',
}

const ruText = {
  category: 'Новости',
  title:
    'В МОСКВЕ ПРЕДСТАВЛЕН ПАМЯТНИК РУССКОМУ ГЕРОЮ, КОТОРЫЙ БУДЕТ УСТАНОВЛЕН В СЕРБИИ',
  date: 'Опубликовано: 24 апреля 2026 г.',
  lead: 'Память о полковнике Николае Раевском, русском герое, отдавшем жизнь за Сербию, получает новое воплощение в памятнике, представленном в Москве и предназначенном для установки в Сербии.',
  paragraphs: [
    'В Москве торжественно представлен проект памятника полковнику Николаю Николаевичу Раевскому — русскому офицеру и добровольцу, который отдал жизнь, сражаясь за свободу Сербии. Монумент вскоре будет установлен в Сербии как знак глубокого уважения к человеку, чьё имя занимает особое место в истории сербско-русских отношений.',
    'Презентация прошла в присутствии многочисленных гостей, деятелей культуры и представителей общественной жизни. Автор памятника — известный скульптор Айдин Зейналов, академик Российской академии художеств. Бюст станет частью его «Балканского цикла» — серии работ, посвящённых выдающимся русским личностям, оставившим след на Балканах.',
    'Полковник Раевский навсегда остался символом чести, мужества и братства двух народов. Его подвиг в борьбе за Сербию вдохновляет новые поколения, а установка памятника станет напоминанием о прочной исторической связи и общих ценностях России и Сербии.',
    'Этот памятник станет не только произведением искусства, но и местом памяти, благодарности и уважения к русскому герою, связавшему свою судьбу с сербским народом.'
  ],
  highlight1: 'СИМВОЛ БРАТСТВА СЕРБСКОГО И РУССКОГО НАРОДОВ',
  highlight2: 'ПАМЯТЬ О ЧЕЛОВЕКЕ, ОТДАВШЕМ ЖИЗНЬ ЗА СЕРБИЮ',
}

export default function SpomenikNikolajuUSrbijiPage() {
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
            src="/static/images/spomenik-nikolaju.jpeg"
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
              const isPinned =
                paragraph.startsWith('📌') ||
                paragraph.startsWith('📍') ||
                paragraph.startsWith('📎')

              if (isPinned) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-4 text-white shadow-[0_0_20px_rgba(234,179,8,0.08)]"
                  >
                    <p className="text-base font-medium leading-8 md:text-lg">
                      {paragraph}
                    </p>
                  </div>
                )
              }

              return (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-300 md:text-lg"
                >
                  {paragraph}
                </p>
              )
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

          <CommentsSection postSlug="spomenik-nikolaju" />
        </motion.div>
      </article>
    </main>
  )
}
