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
  title: '26. jun 1999: Masakr u Dojincu – zločin nad srpskim civilima koji ne sme biti zaboravljen',
  date: 'Objavljeno: 26. jun 2026.',
  lead: 'Na današnji dan, 26. juna 1999. godine, selo Dojince kod Prizrena postalo je poprište jednog od najtežih zločina nad srpskim civilima nakon završetka oružanih sukoba na Kosovu i Metohiji.',
  paragraphs: [
    'Tokom napada na selo ubijeno je 16 srpskih civila, među kojima je bilo devet žena. Većina stradalih bili su stariji i nemoćni meštani koji nisu uspeli da napuste svoje domove na vreme, dok su ostali stanovnici bili prinuđeni da se spas potraže u bekstvu.',
    'Nakon ubistava selo je opljačkano i spaljeno, čime je praktično prestalo da postoji kao srpsko naselje.',
    'Sećanje na nevine žrtve predstavlja obavezu da se ovakvi zločini nikada ne zaborave i da svaka nevina žrtva dobije dostojanstveno mesto u istorijskom pamćenju.'
  ],
  
  highlight1: 'Na današnji dan 1999. godine u selu Dojince kod Prizrena ubijeno je 16 srpskih civila, među kojima je bilo devet žena.',
  highlight2: 'Nakon masakra selo je spaljeno, a preživeli meštani bili su primorani da zauvek napuste svoje domove.',
}

const ruText = {
  category: 'Новости',
  title: '26 июня 1999 года: массовое убийство в Дойинце — преступление против сербских мирных жителей, которое нельзя забыть',
  date: 'Опубликовано: 26 июня 2026 г.',
  lead: '26 июня 1999 года село Дойинце, расположенное недалеко от Призрена, стало местом одного из самых трагических преступлений против сербского мирного населения после окончания вооружённого конфликта в Косове и Метохии.',
  paragraphs: [
    'Во время нападения были убиты 16 сербских мирных жителей, среди которых девять женщин. Большинство погибших составляли пожилые и тяжело больные люди, не успевшие покинуть свои дома, тогда как остальные жители были вынуждены спасаться бегством.',
    'После убийств село было разграблено и полностью сожжено, фактически перестав существовать как сербское населённое место.',
    'Память о невинных жертвах напоминает о необходимости сохранять историческую память и делать всё возможное, чтобы подобные трагедии никогда не были забыты.'
  ],
  
  highlight1: '26 июня 1999 года в селе Дойинце близ Призрена были убиты 16 сербских мирных жителей, среди которых девять женщин.',
  highlight2: 'После массового убийства село было сожжено, а оставшиеся в живых жители были вынуждены навсегда покинуть свои дома.',
}

export default function MasakrUDojinciPage() {
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
            src="/static/images/dojince.jpeg"
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

          <CommentsSection postSlug="masakr-u-dojinci" />
        </motion.div>
      </article>
    </main>
  )
}