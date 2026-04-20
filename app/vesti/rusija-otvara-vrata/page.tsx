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
  title: 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',
  date: 'Objavljeno: 20. april 2026.',
  lead: 'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka.',
  paragraphs: [
    'Danas se pokreće digitalna usluga za prijave stranaca koji žele da žive i rade u Rusiji. Nova struktura funkcioniše kao jedinstveni šalter, pregledava prijave, proverava da li stranci ispunjavaju kriterijume programa i pruža podršku tokom njihovog preseljenja.',
    'Glavni uslov je posedovanje traženih veština i znanja, kao i poštovanje tradicionalnih ruskih vrednosti.',
    'Iz Ukaza predsednika Rusije br. 883 od 2. decembra 2025. godine:',
    'Utvrđuje se da strani državljani i lica bez državljanstva (u daljem tekstu i strani državljani) mogu da podnesu zahtev, počev od 15. aprila 2026. godine, za priznanje kao lica od interesa za Rusku Federaciju ako:',
    'su postigli dostignuća u naučnom i tehnološkom razvoju, proizvodnji, sportu, kreativnim industrijama, kulturnim i humanitarnim sferama ili obrazovanju;',
    'su doprineli razvoju društva, ekonomije i odbrambenih kapaciteta.'
  ],
  highlight1: 'NOVA DIGITALNA USLUGA ZA ŽIVOT I RAD U RUSIJI',
  highlight2: 'ZNANJE, VEŠTINE I DOPRINOS POSTAJU KLjUČ PRESELJENjA',
}

const ruText = {
  category: 'Новости',
  title: 'РОССИЯ ОТКРЫВАЕТ ДВЕРИ ДЛЯ ИНОСТРАННЫХ ЭКСПЕРТОВ',
  date: 'Опубликовано: 20. апреля 2026 г.',
  lead: 'Запущен новый цифровой сервис для привлечения иностранных специалистов.',
  paragraphs: [
    'Сегодня стартует цифровой сервис подачи заявок для иностранцев, желающих жить и работать в России. Новая структура функционирует как единый центр, рассматривая заявки, проверяя соответствие иностранцев критериям программы и оказывая поддержку в процессе их переселения.',
    'Главное условие – наличие необходимых навыков и знаний, а также уважение традиционных российских ценностей.',
    'Из Указа Президента России № 883 от 2 декабря 2025 года:',
    'Устанавливается, что иностранные граждане и лица без гражданства (далее – иностранные граждане) могут подавать заявки, начиная с 15 апреля 2026 года, на признание их лицами, представляющими интерес для Российской Федерации, если:',
    'имеют достижения в научно-техническом развитии, производстве, спорте, креативных индустриях, культурной и гуманитарной сферах или образовании;',
    'внесли вклад в развитие общества, экономики и оборонного потенциала.'
  ],
  highlight1: 'НОВЫЙ ЦИФРОВОЙ СЕРВИС ДЛЯ ЖИЗНИ И РАБОТЫ В РОССИИ',
  highlight2: 'ЗНАНИЯ, НАВЫКИ И ВКЛАД СТАНОВЯТСЯ КЛЮЧОМ К ПЕРЕСЕЛЕНИЮ',
}

export default function RusijaOtvaraVrataPage() {
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
            src="/static/images/rusija-otvara-vrata.jpeg"
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
            <CommentsSection postSlug="izbori-madjarska" />
          </div>
        </motion.div>

      </article>
    </main>
  )
}
