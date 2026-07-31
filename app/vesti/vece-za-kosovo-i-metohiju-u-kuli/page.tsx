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
  title: 'VEČE ZA KOSOVO I METOHIJU U KULI — PESMA, ISTORIJA I HUMANOST NA JEDNOM MESTU',
  date: 'Objavljeno: 31. jul 2026.',
  lead: 'Pozivamo vas da nam se pridružite na otvorenim bazenima u Kuli 29.08.2026. godine, sa početkom programa u 15 časova, na posebnoj večeri posvećenoj Kosovu i Metohiji, srpskoj istoriji, kulturi i humanosti.',
  paragraphs: [
    'Ovo neće biti samo koncert.',
    'Biće to susret pesme i pamćenja, vere i zajedništva, prošlosti koju čuvamo i budućnosti za koju smo odgovorni.',
    'Kroz muziku, istorijske priče i kulturni program podsetićemo se svetinja, predaka i naroda koji vekovima čuvaju srpsko ime na Kosovu i Metohiji. Istovremeno, okupićemo se oko plemenitog cilja – da pružimo pomoć onima kojima je ona najpotrebnija.',
    'Dođite da zajedno pokažemo da Kosovo i Metohija nisu zaboravljeni.',
    'Da naša istorija nije samo priča o prošlosti, već zavet koji se prenosi budućim pokolenjima.',
    'Neka te večeri Kula bude mesto gde će jednim glasom progovoriti kultura, vera, istorija i humanost.',
    'Dođite zbog pesme.',
    'Dođite zbog ljudi.',
    'Dođite zbog Kosova i Metohije.',
    'Vidimo se u Kuli!',
    'Jer dok pamtimo Kosovo, pamtimo ko smo.'
  ],
  
  highlight1: 'Dana 29. avgusta 2026. godine, sa početkom u 15 časova, otvoreni bazeni u Kuli postaće mesto okupljanja svih koji žele da pokažu da Kosovo i Metohija nisu zaboravljeni.',
  highlight2: 'Kroz muziku, istorijske priče i humanitarnu akciju, veče će spojiti veru, kulturu i zajedništvo u znak podrške srpskom narodu i svetinjama na Kosovu i Metohiji.',
}

const ruText = {
  category: 'Новости',
  title: 'ВЕЧЕР, ПОСВЯЩЁННЫЙ КОСОВО И МЕТОХИИ В КУЛЕ — МУЗЫКА, ИСТОРИЯ И МИЛОСЕРДИЕ В ОДНОМ МЕСТЕ',
  date: 'Опубликовано: 31 июль 2026 г.',
  lead: 'Приглашаем вас присоединиться к нам 29 августа 2026 года на открытых бассейнах города Кула. Начало программы — в 15:00. Вас ждёт особый вечер, посвящённый Косово и Метохии, сербской истории, культуре и милосердию.',
  paragraphs: [
    'Это будет не просто концерт.',
    'Это станет встречей песни и памяти, веры и единства, прошлого, которое мы бережно храним, и будущего, за которое несём ответственность.',
    'Через музыку, исторические рассказы и культурную программу мы вспомним святыни, наших предков и народ, который на протяжении веков хранит сербское имя в Косово и Метохии. Одновременно мы объединимся ради благородной цели — оказать помощь тем, кто особенно в ней нуждается.',
    'Приходите, чтобы вместе показать, что Косово и Метохия не забыты.',
    'Что наша история — это не только рассказ о прошлом, но и завет, который передаётся будущим поколениям.',
    'Пусть в этот вечер Кула станет местом, где единым голосом прозвучат культура, вера, история и милосердие.',
    'Приходите ради песни.',
    'Приходите ради людей.',
    'Приходите ради Косово и Метохии.',
    'До встречи в Куле!',
    'Пока мы помним Косово, мы помним, кто мы есть.'
  ],
  
  highlight1: '29 августа 2026 года, начало программы в 15:00, открытые бассейны города Кула станут местом встречи всех, кто хочет показать, что Косово и Метохия не забыты.',
  highlight2: 'Музыка, исторические рассказы и благотворительная акция объединят веру, культуру и единство в поддержку сербского народа и православных святынь Косово и Метохии.',
}

export default function VeceZaKosovoIMetohijuUKuliPage() {
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
            src="/static/images/vece-za-kosovo.jpg"
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

          <CommentsSection postSlug="vece-za-kosovo-i-metohiju-u-kuli" />
        </motion.div>
      </article>
    </main>
  )
}