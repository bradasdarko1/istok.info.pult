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
  title: 'SVETLO VASKRSENJA DONOSI NADU I NOVI POČETAK',
  date: 'Objavljeno: 12. april 2026.',
  lead: 'Pravoslavni vernici širom sveta danas obeležavaju najveći hrišćanski praznik – Vaskrs, dan pobede života nad smrću, svetlosti nad tamom i vere nad beznađem.',
  paragraphs: [
    'U hramovima su služene svečane liturgije, a zvona su označila dolazak praznika koji simbolizuje obnovu, praštanje i zajedništvo. Vernici su se okupili da podele radost Vaskrsenja, uz tradicionalni pozdrav: „Hristos Voskrese!“ – „Vaistinu Hristos Voskrese!',
    'Vaskrs nas podseća na značaj međusobnog razumevanja, ljubavi i solidarnosti. Ovo je vreme kada se porodice okupljaju, kada se jačaju duhovne vrednosti i kada se šalje poruka mira i nade celom svetu.',
    'U domovima širom Srbije i pravoslavnog sveta, praznik se obeležava uz tradicionalno farbanje jaja, bogatu trpezu i običaje koji se prenose sa kolena na koleno, čuvajući identitet i veru našeg naroda.',
    'Neka praznik Vaskrsenja Hristovog svima donese zdravlje, radost i snagu za nove pobede u životu.',
    'Hristos Voskrese!'
  ],
  highlight1: 'VERA KOJA NAS DRŽI NA OKUPU',
  highlight2: 'TRADICIJA KOJA NE BLEDI',
}

const ruText = {
  category: 'Новости',
  title: 'СВЕТ ВОСКРЕСЕНИЯ ПРИНОСИТ НАДЕЖДУ И НОВОЕ НАЧАЛО',
  date: 'Опубликовано: 12. апреля 2026 г.',
  lead: 'Православные верующие по всему миру сегодня отмечают величайший христианский праздник — Пасху, день победы жизни над смертью, света над тьмой и веры над отчаянием.',
  paragraphs: [
    'В храмах прошли торжественные богослужения, а колокольный звон возвестил о наступлении праздника, символизирующего обновление, прощение и единство. Верующие собрались, чтобы разделить радость Воскресения, приветствуя друг друга словами: «Христос Воскресе!» — «Воистину Воскресе!»',
    'Пасха напоминает нам о важности взаимопонимания, любви и солидарности. Это время, когда семьи собираются вместе, укрепляются духовные ценности и посылается послание мира и надежды всему миру.',
    'В домах по всей Сербии и православному миру праздник отмечается традиционным окрашиванием яиц, богатым праздничным столом и обычаями, передающимися из поколения в поколение, сохраняя идентичность и веру народа.',
    'Пусть праздник Воскресения Христова принесёт всем здоровье, радость и силы для новых побед в жизни.',
    'Христос Воскресе!'

  ],
  highlight1: 'ВЕРА, КОТОРАЯ ДЕРЖИТ НАС ВМЕСТЕ',
  highlight2: 'ТРАДИЦИЯ, КОТОРАЯ НЕ УГАСАЕТ',
}

export default function HristosVoskresePage() {
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
            src="/static/images/vaskrs.jpeg"
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
        </motion.div>

      </article>
    </main>
  )
}
