'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'


function latinToCyrillic(text: string) {
  const protectedWords = [
    'YouTube',
  ]

  const placeholders: string[] = []

  let result = text.replace(/YouTube/gi, (match) => {
    const index = placeholders.push('YouTube') - 1
    return `§${index}§`
  })

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

  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ',
    D: 'Д', Đ: 'Ђ', E: 'Е', F: 'Ф',
    G: 'Г', H: 'Х', I: 'И', J: 'Ј',
    K: 'К', L: 'Л', M: 'М', N: 'Н',
    O: 'О', P: 'П', R: 'Р', S: 'С',
    Š: 'Ш', T: 'Т', U: 'У', V: 'В',
    Z: 'З', Ž: 'Ж',

    a: 'а', b: 'б', c: 'ц', č: 'ч',
    ć: 'ћ', d: 'д', đ: 'ђ', e: 'е',
    f: 'ф', g: 'г', h: 'х', i: 'и',
    j: 'ј', k: 'к', l: 'л', m: 'м',
    n: 'н', o: 'о', p: 'п', r: 'р',
    s: 'с', š: 'ш', t: 'т', u: 'у',
    v: 'в', z: 'з', ž: 'ж',
  }

  result = result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')

  return result.replace(/§(\d+)§/g, (_, index) => {
    return placeholders[Number(index)] ?? ''
  })
}



const srLatin = {
  category: 'Vesti',
  title: 'MARIJA JOVOVIĆ U „RAZGOVORIMA U ISTOKU“ – PRIČE KOJE DO SADA NISTE ČULI',
  date: 'Objavljeno: 26. oktobar 2026.',
  lead: 'Danas u 17 časova, premijerno na YouTube kanalu Istok Info Pult, donosimo novu epizodu podkasta „Razgovori u Istoku“.',
  paragraphs: [
    'Naša specijalna gošća, Marija Jovović, ćerka Blagoja Jovovića, otkriva do sada neispričane priče o svom ocu, porodičnom nasleđu i težini prezimena koje nosi.',
    'Istorija iz prve ruke. Priče koje se pamte. Svedočenja koja ne ostavljaju ravnodušnim.',
    'Ne propustite premijeru!'
  ],
  
  highlight1: 'Marija Jovović otkriva neispričane priče o svom ocu, Blagoju Jovoviću.',
  highlight2: 'Danas u 17 časova – premijera na YouTube kanalu Istok Info Pult!',
}

const ruText = {
  category: 'Новости',
  title: 'МАРИЯ ЙОВОВИЧ В «РАЗГОВОРАХ В ИСТОКЕ» — ИСТОРИИ, КОТОРЫЕ ВЫ ЕЩЁ НЕ СЛЫШАЛИ',
  date: 'Опубликовано: 26 октябрь 2026 г.',
  lead: 'Сегодня в 17:00 на YouTube-канале «Исток Инфо Пулт» состоится премьера нового выпуска подкаста «Разговоры в Истоке».',
  paragraphs: [
    'Наша специальная гостья, Мария Йовович, дочь Благоя Йововича, поделится ранее нерассказанными историями о своём отце, семейном наследии и ответственности, которую несёт известная фамилия.',
    'История из первых уст. Рассказы, которые остаются в памяти. Свидетельства, которые никого не оставят равнодушным.',
    'Не пропустите премьеру!'

  ],
  
  highlight1: 'Мария Йовович раскрывает неизвестные истории о своём отце, Благое Йововиче.',
  highlight2: 'Сегодня в 17:00 — премьера на YouTube-канале «Исток Инфо Пулт»!',
}

export default function MarijaJovovicRazgovoriUIstokuPriceKojeDoSadaNisteCuliPage() {
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
            src="/static/images/istina-o-blagoju-jovovicu.jpg"
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

          <CommentsSection postSlug="marija-jovovic-razgovori-u-istoku-price-koje-do-sada-niste-culi" />
        </motion.div>
      </article>
    </main>
  )
}