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
  title: 'POTPISANI „ANTIRUSKI“ MEMORANDUMI U BEOGRADU?',
  date: 'Objavljeno: 25. maj 2026.',
  lead: 'Predstavnici Vlade Republike Srbije i Vlade Ukrajine potpisali su niz memoranduma i sporazuma koji se odnose na unapređenje međusobne trgovine. Sa srpske strane dokumente je potpisala ministarka unutrašnje i spoljne trgovine Jagoda Lazarević, dok je ukrajinsku stranu predstavljao potpredsednik Vlade Ukrajine Taras Kačka.',
  paragraphs: [
    'Takođe je potpisan i memorandum o saradnji u oblasti evropskih integracija, čiji su potpisnici ministar za evropske integracije Nemanja Starović i Taras Kačka.',
    'Međutim, u javnosti se postavlja pitanje kakve bi posledice ovakvi sporazumi mogli imati po srpsku stranu. Deo analitičara smatra da su potezi koji su usledili nakon ovog susreta u Beogradu izrazito proukrajinski i proevropski orijentisani, te da mogu dodatno udaljiti Srbiju od tradicionalno bliskih odnosa sa Rusijom.',
    'U kontekstu složenih međunarodnih odnosa i razvoja sukoba između Rusije i Ukrajine, ovakvi potezi otvaraju prostor za različita tumačenja i reakcije, kako na unutrašnjem, tako i na spoljnopolitičkom planu.'
  ],
  
  highlight1: 'Potpisani sporazumi Srbije i Ukrajine otvaraju pitanje spoljnopolitičkog kursa i odnosa prema Rusiji.',
  highlight2: 'Memorandum o evropskim integracijama izazvao različita tumačenja i reakcije u javnosti.',
}

const ruText = {
  category: 'Новости',
  title: 'В БЕЛГРАДЕ ПОДПИСАНЫ «АНТИРОССИЙСКИЕ» МЕМОРАНДУМЫ?',
  date: 'Опубликовано: 25 мая 2026 г.',
  lead: 'Представители правительства Республики Сербия и правительства Украины подписали ряд меморандумов и соглашений, направленных на развитие взаимной торговли. С сербской стороны документы подписала министр внутренней и внешней торговли Ягода Лазаревич, а Украину представлял вице-премьер Тарас Качка.',
  paragraphs: [
    'Также был подписан меморандум о сотрудничестве в сфере европейской интеграции, подписантами которого стали министр по европейской интеграции Неманя Старович и Тарас Качка.',
    'Вместе с тем в общественном пространстве возникает вопрос о возможных последствиях подобных соглашений для сербской стороны. Некоторые аналитики считают, что шаги, предпринятые после встречи в Белграде, носят выраженный проукраинский и проевропейский характер и могут привести к дальнейшему отдалению Сербии от традиционно близких отношений с Россией.',
    'На фоне сложной международной обстановки и развития конфликта между Россией и Украиной подобные решения вызывают различные интерпретации и реакции как внутри страны, так и на внешнеполитическом уровне.'
  ],
  
  highlight1: 'Подписанные соглашения между Сербией и Украиной поднимают вопрос внешнеполитического курса и отношений с Россией.',
  highlight2: 'Меморандум о европейской интеграции вызвал различные интерпретации и реакции в обществе.',
}

export default function Page() {
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
            src="/static/images/srbija-ukrajina.jpeg"
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

          <CommentsSection postSlug="" />
        </motion.div>
      </article>
    </main>
  )
}
