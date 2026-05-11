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
  title: 'NOVAC ZA VOJNI ROK PREUSMEREN NA SPORT I KULTURU',
  date: 'Objavljeno: 11. maj 2026.',
  lead: 'Vlada Srbije donela je odluku da skoro 300 miliona dinara, koji su bili predviđeni za realizaciju obaveznog vojnog roka, preusmeri na potrebe sporta i kulture.',
  paragraphs: [
    'Prema rešenjima objavljenim u Službenom glasniku, 260 miliona dinara biće prebačeno Ministarstvu sporta radi organizacije međunarodnih sportskih takmičenja, dok će dodatnih 37 miliona dinara biti usmereno Ministarstvu kulture za otkup umetničkih dela i podršku ustanovama kulture.',
    'Predstavnici vlasti su tokom prethodnih meseci više puta isticali da je vraćanje obaveznog vojnog roka jedan od ključnih državnih prioriteta. Predsednik Srbije Aleksandar Vučić ranije je najavljivao da bi prvi regruti mogli da stupe na služenje već od marta naredne godine.',
    'Ipak, najnovije odluke Vlade otvorile su pitanja u javnosti o tome da li dolazi do promene prioriteta i da li realizacija vojnog roka ostaje u fokusu državne politike.',
    'U objavljenim dokumentima nije precizirano na koja konkretna sportska takmičenja će sredstva biti potrošena, kao ni koja će umetnička dela biti otkupljena.'
  ],
  
  highlight1: 'Oko 2,5 miliona evra, prvobitno namenjenih za realizaciju obaveznog vojnog roka, preusmereno je ministarstvima sporta i kulture.',
  highlight2: 'U dokumentima objavljenim u Službenom glasniku nije navedeno na koja konkretna sportska takmičenja i umetnička dela će sredstva biti potrošena.',
}

const ruText = {
  category: 'Новости',
  title: 'СРЕДСТВА ДЛЯ ВОЕННОЙ СЛУЖБЫ ПЕРЕНАПРАВЛЕНЫ НА СПОРТ И КУЛЬТУРУ',
  date: 'Опубликовано: 11 мая 2026 г.',
  lead: '',
  paragraphs: [
    'Правительство Сербии приняло решение перенаправить почти 300 миллионов динаров, ранее предусмотренных для реализации обязательной военной службы, на нужды спорта и культуры.',
    'Согласно решениям, опубликованным в «Службеном гласнике», 260 миллионов динаров будут перечислены Министерству спорта для организации международных спортивных соревнований, а ещё 37 миллионов — Министерству культуры для закупки произведений искусства и поддержки культурных учреждений.',
    'Ранее представители власти неоднократно заявляли, что возвращение обязательной военной службы является одним из ключевых государственных приоритетов. Президент Сербии Александр Вучич также сообщал, что первые призывники могут начать службу уже с марта следующего года.',
    'Однако последние решения правительства вызвали вопросы в обществе о том, меняются ли государственные приоритеты и остаётся ли проект военной службы в центре внимания государственной политики.',
    'В опубликованных документах не уточняется, на какие именно спортивные соревнования будут направлены средства, а также какие произведения искусства планируется приобрести.'
  ],
  
  highlight1: 'Около 2,5 миллиона евро, ранее предназначенных для реализации обязательной военной службы, были перенаправлены Министерствам спорта и культуры.',
  highlight2: 'В опубликованных документах не указано, на какие именно спортивные мероприятия и произведения искусства будут потрачены выделенные средства.',
}

export default function NovacZaVojniRokPreusmerenNaSportIKulturuPage() {
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
            src="/static/images/novac-za-vojni-rok.jpg"
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

          <CommentsSection postSlug="novac-za-vojni-rok-preusmeren-na-sport-i-kulturu" />
        </motion.div>
      </article>
    </main>
  )
}