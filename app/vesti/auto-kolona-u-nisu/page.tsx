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
  title: 'Auto-kolona u Nišu povodom Dana Rusije 11. juna',
  date: 'Objavljeno: 9. jun 2026.',
  lead: 'Uoči Dana Rusije, koji se tradicionalno obeležava 12. juna, Društvo rusko-srpskog prijateljstva „Bratstvo“ iz Niša organizuje svečanu auto-kolonu koja će biti održana 11. juna sa početkom u 18.15 časova.',
  paragraphs: [
    'Ovom akcijom organizatori žele da na dostojanstven način obeleže jedan od najvažnijih državnih praznika Ruske Federacije i još jednom istaknu prijateljske veze između srpskog i ruskog naroda.',
    'Iz Društva „Bratstvo“ pozivaju sve zainteresovane građane da se priključe auto-koloni i svojim prisustvom podrže ovu manifestaciju. Organizatori ističu da će događaj proteći u svečanom i prijateljskom duhu, uz poštovanje svih učesnika i saobraćajnih propisa.'
  ],
  
  highlight1: 'Društvo rusko-srpskog prijateljstva „Bratstvo“ iz Niša organizuje svečanu auto-kolonu u susret Danu Rusije.',
  highlight2: 'Okupljanje učesnika zakazano je za 11. jun u 18.15 časova, a organizatori pozivaju građane da se pridruže obeležavanju praznika.',
}

const ruText = {
  category: 'Новости',
  title: 'Автоколонна в Нише в честь Дня России пройдет 11 июня',
  date: 'Опубликовано: 9 июня 2026 г.',
  lead: 'В преддверии Дня России, который ежегодно отмечается 12 июня, Общество русско-сербской дружбы «Братство» из Ниша организует праздничную автоколонну. Мероприятие состоится 11 июня, начало запланировано на 18:15.',
  paragraphs: [
    'Цель акции — отметить один из главных государственных праздников Российской Федерации и подчеркнуть многолетние дружественные связи между сербским и русским народами.',
    'Организаторы приглашают всех желающих принять участие в автоколонне и поддержать праздничное мероприятие. По их словам, акция пройдет в дружественной и торжественной атмосфере с соблюдением всех правил дорожного движения и уважением ко всем участникам.'
  ],
  
  highlight1: 'Общество русско-сербской дружбы «Братство» из Ниша организует праздничную автоколонну в преддверии Дня России.',
  highlight2: 'Сбор участников назначен на 11 июня в 18:15, организаторы приглашают всех желающих присоединиться к акции.',
}

export default function AutoKolonaUNisuPage() {
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
            src="/static/images/auto-kolona-u-nisu.jpeg"
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

          <CommentsSection postSlug="auto-kolona-u-nisu" />
        </motion.div>
      </article>
    </main>
  )
}