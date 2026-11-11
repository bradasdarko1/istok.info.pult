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
  title: 'KOME I ZAŠTO SMETAJU RUSKA FEDERACIJA I RUSKI DRŽAVLJANI U SRBIJI?',
  date: 'Objavljeno: 11. novembar 2026.',
  lead: 'Odnosi Srbije i Rusije decenijama predstavljaju važnu političku, istorijsku i društvenu temu. Međutim, poslednjih godina, naročito u svetlu međunarodnih sukoba i geopolitičkih promena, sve češće se otvaraju pitanja o odnosu prema Ruskoj Federaciji, ali i prema ruskim državljanima koji žive i rade u Srbiji.',
  paragraphs: [
    'Da li su negativni stavovi prema Rusiji prvenstveno posledica političkih neslaganja, međunarodnih pritisaka, medijskog uticaja ili postoje i drugi razlozi? Gde prestaje legitimna kritika politike jedne države, a gde počinju predrasude prema njenim građanima?',
    'Posebno pitanje jeste kako se ruski državljani osećaju u Srbiji, kakva su njihova iskustva i da li ih srpsko društvo prihvata nezavisno od političkih događaja.',
    'Istok Info Pult otvara javnu debatu i poziva čitaoce da iznesu svoje mišljenje.',
    'Da li smatrate da u Srbiji postoji negativan odnos prema Rusiji i ruskim državljanima? Ako postoji, ko ga podstiče i zbog čega? Ili je reč o različitim političkim stavovima koji se ponekad pogrešno predstavljaju kao neprijateljstvo prema jednom narodu?',
    'Pozivamo i ruske državljane koji žive u Srbiji da podele svoja iskustva.',
    'Ova tema nema unapred određen odgovor. Želimo da čujemo vaše argumente, iskustva i stavove.',
    'Prostor za komentare je otvoren. Razgovarajmo argumentovano, uz međusobno poštovanje i bez uvreda na nacionalnoj osnovi.'
  ],
  
  highlight1: 'Da li je odnos prema Rusiji u Srbiji pitanje politike i geopolitike ili se politička neslaganja prenose i na ruske državljane koji ovde žive?',
  highlight2: 'Kome i zašto smetaju Ruska Federacija i ruski državljani u Srbiji? Istok Info Pult otvara javnu debatu — pozivamo vas da iznesete svoje mišljenje u komentarima.',
}

const ruText = {
  category: 'Новости',
  title: 'КОМУ И ПОЧЕМУ МЕШАЮТ РОССИЙСКАЯ ФЕДЕРАЦИЯ И ГРАЖДАНЕ РОССИИ В СЕРБИИ?',
  date: 'Опубликовано: 11 ноября 2026 г.',
  lead: 'Отношения Сербии и России на протяжении десятилетий остаются важной политической, исторической и общественной темой. Однако в последние годы, особенно на фоне международных конфликтов и геополитических изменений, всё чаще возникают вопросы об отношении к Российской Федерации, а также к российским гражданам, которые живут и работают в Сербии.',
  paragraphs: [
    'Связано ли негативное отношение к России прежде всего с политическими разногласиями, международным давлением, влиянием СМИ или существуют и другие причины? Где заканчивается обоснованная критика политики государства и начинаются предубеждения по отношению к его гражданам?',
    'Отдельного внимания заслуживает вопрос о том, как российские граждане чувствуют себя в Сербии, с какими ситуациями сталкиваются и принимает ли их сербское общество независимо от политических событий.',
    '«Исток Инфо Пулт» открывает общественную дискуссию и приглашает читателей поделиться своим мнением.',
    'Считаете ли вы, что в Сербии существует негативное отношение к России и российским гражданам? Если да, кто способствует его распространению и почему? Или речь идёт о различных политических взглядах, которые иногда ошибочно воспринимаются как враждебность по отношению к целому народу?',
    'Мы также приглашаем граждан России, проживающих в Сербии, поделиться своим личным опытом.',
    'У этой темы нет заранее определённого ответа. Нам важно услышать ваши аргументы, истории и точки зрения.',
    'Комментарии открыты для обсуждения. Давайте вести диалог уважительно, опираясь на аргументы и избегая оскорблений по национальному признаку.'

  ],
  
  highlight1: 'Отношение к России в Сербии — это вопрос политики и геополитики или политические разногласия отражаются и на российских гражданах, проживающих в стране?',
  highlight2: 'Кому и почему мешают Российская Федерация и граждане России в Сербии? «Исток Инфо Пулт» открывает общественную дискуссию — приглашаем вас поделиться своим мнением в комментариях.',
}

export default function KomeIZastoSmetaRuskaFederacijaIDrzavljaniRusijeUSrbijiPage() {
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
            src="/static/images/ruska-federacija.jpg"
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

          <CommentsSection postSlug="kome-i-zasto-smeta-ruska-federacija-i-drzavljani-rusije-u-srbiji" />
        </motion.div>
      </article>
    </main>
  )
}