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
  title: 'RAZGOVORI U ISTOKU | GOST MARIJA JOVOVIĆ',
  date: 'Objavljeno: 22. oktobar 2026.',
  lead: 'Imamo tu čast i zadovoljstvo da u trećoj epizodi naše emisije „Razgovori u Istoku“ ugostimo gospođu Mariju Jovović, ćerku Blagoja Jovovića, čoveka čije je ime ostavilo dubok trag u srpskoj istoriji.',
  paragraphs: [
    'Marija Jovović posvećena je očuvanju uspomene na svog oca, Blagoja Jovovića, poznatog po atentatu na Antu Pavelića, poglavnika Nezavisne Države Hrvatske. Kroz svoju knjigu i javna gostovanja nastoji da sačuva porodično svedočanstvo i rasvetli važne stranice naše prošlosti.',
    ' U trećoj epizodi emisije „Razgovori u Istoku“ razgovaramo o promociji njene knjige, životu i delu Blagoja Jovovića, porodičnom nasleđu, ali i o tome kolika je čast, odgovornost i težina nositi prezime Jovović.',
    'ISTOK KLUB – budite deo naše priče!'
  ],
  
  highlight1: 'Marija Jovović o životu svog oca Blagoja Jovovića, njegovom istorijskom nasleđu i očuvanju porodične istine.',
  highlight2: 'Kolika je čast, odgovornost i težina nositi prezime Jovović? Priča o knjizi, istoriji i nasleđu koje obavezuje.',
}

const ruText = {
  category: 'Новости',
  title: 'РАЗГОВОРЫ В «ИСТОКЕ» | ГОСТЬ — МАРИЯ ЙОВОВИЧ',
  date: 'Опубликовано: 22 октябрь 2026 г.',
  lead: 'Для нас большая честь и удовольствие приветствовать в третьем выпуске нашей программы «Разговоры в Истоке» госпожу Марию Йовович, дочь Благое Йововича, человека, чьё имя оставило глубокий след в сербской истории.',
  paragraphs: [
    'Мария Йовович посвятила себя сохранению памяти о своём отце, Благое Йововиче, известном покушением на Анте Павелича, главу Независимого государства Хорватия. Через свою книгу и публичные выступления она стремится сохранить семейные свидетельства и пролить свет на важные страницы нашей истории.',
    'В третьем выпуске программы «Разговоры в Истоке» мы поговорим о презентации её книги, жизни и деятельности Благое Йововича, семейном наследии, а также о том, какая честь, ответственность и тяжесть стоят за фамилией Йовович.',
    'ИСТОК КЛУБ — станьте частью нашей истории!'

  ],
  
  highlight1: 'Мария Йовович о жизни своего отца Благое Йововича, его историческом наследии и сохранении семейной правды.',
  highlight2: 'Какая честь, ответственность и тяжесть стоят за фамилией Йовович? История о книге, прошлом и наследии, которое обязывает.',
}

export default function RazgovoriUIstokuGostMarijaJovovicPage() {
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
            src="/static/images/marija-jovovic.jpeg"
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

          <CommentsSection postSlug="razgovori-u-istoku-gost-marija-jovovic" />
        </motion.div>
      </article>
    </main>
  )
}