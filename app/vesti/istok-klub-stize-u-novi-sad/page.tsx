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
  title: 'ISTOK KLUB STIŽE U NOVI SAD – Više od kafe, više od druženja!',
  date: 'Objavljeno: 12. oktobar 2026.',
  lead: 'Novi Sad uskoro dobija novo mesto susreta, kulture, dobre energije i nezaboravnih trenutaka!',
  paragraphs: [
    'Na adresi Maksima Gorkog 2A uskoro otvara svoja vrata ISTOK KLUB – mesto koje spaja vrhunsku kafu, prijatan ambijent, bogatu literaturu i ljude koji imaju šta da kažu.',
    'Ali ISTOK KLUB neće biti samo još jedan kafić!',
    'Očekuju vas podkast emisije, zanimljivi gosti, kvizovi znanja, karaoke večeri, kulturni i zabavni programi, kao i prostor za druženje, razgovor i stvaranje novih prijateljstava.',
    'U vremenu kada se sve više gledamo preko ekrana, želimo da stvorimo mesto na kojem ćemo se ponovo gledati u oči, razgovarati, smejati i deliti dobre trenutke.',
    'Mesto gde se dolazi zbog kafe, a ostaje zbog ljudi.',
    '📍 Maksima Gorkog 2A, Novi Sad',
    'ISTOK KLUB – uskoro otvaramo vrata. A vi budite deo naše priče!'
  ],
  
  highlight1: 'Novi Sad uskoro dobija jedinstveno mesto susreta, kulture i dobre energije – ISTOK KLUB otvara svoja vrata na adresi Maksima Gorkog 2A!',
  highlight2: 'Vrhunska kafa, podkasti, kvizovi, karaoke i druženja koja se pamte. Mesto gde se dolazi zbog kafe, a ostaje zbog ljudi!',
}

const ruText = {
  category: 'Новости',
  title: 'ИСТОК КЛУБ ОТКРЫВАЕТСЯ В НОВИ-САДЕ – Больше, чем кофе, больше, чем общение!',
  date: 'Опубликовано: 12 октябрь 2026 г.',
  lead: 'Совсем скоро в Нови-Саде появится новое место встреч, культуры, позитивной энергии и незабываемых моментов!',
  paragraphs: [
    'По адресу Максима Горького, 2А скоро откроет свои двери ИСТОК КЛУБ – место, где объединяются превосходный кофе, уютная атмосфера, богатая коллекция литературы и люди, которым есть что сказать.',
    'Но ИСТОК КЛУБ – это не просто очередное кафе!',
    'Вас ждут подкасты, интересные гости, интеллектуальные викторины, вечера караоке, культурные и развлекательные мероприятия, а также пространство для общения, увлекательных бесед и новых знакомств.',
    'В мире, где мы всё чаще смотрим друг на друга через экраны, мы хотим создать место, где люди снова смогут смотреть друг другу в глаза, разговаривать, смеяться и разделять прекрасные моменты.',
    'Место, куда приходят за кофе, а остаются ради людей.',
    '📍 Максима Горького, 2А, Нови-Сад',
    'ИСТОК КЛУБ – скоро мы откроем свои двери. Станьте частью нашей истории!'

  ],
  
  highlight1: 'Скоро в Нови-Саде появится уникальное место встреч, культуры и позитивной энергии – ИСТОК КЛУБ откроет свои двери по адресу Максима Горького, 2А!',
  highlight2: 'Превосходный кофе, подкасты, викторины, караоке и незабываемые встречи. Место, куда приходят за кофе, а остаются ради людей!',
}

export default function OtkazanHumanitarniDogadjajUKuliPage() {
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
            src="/static/images/istok-klub.jpg"
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

          <CommentsSection postSlug="istok-klub-stize-u-novi-sad" />
        </motion.div>
      </article>
    </main>
  )
}