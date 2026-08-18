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
    'Kroz muziku, istorijske priče i kulturni program podsetićemo se svetinja, predaka i naroda koji vekovima čuvaju srpsko ime na Kosovu i Metohiji. Istovremeno, okupićemo se oko plemenitog cilja – da pružimo pomoć deci sa Kosova i Metohije i onima kojima je ona najpotrebnija.',
    'Svi koji žele da podrže ovu humanitarnu akciju i daju svoj doprinos mogu to učiniti uplatom donacije na sledeće račune:',
    'DINARSKI RAČUN',
    '265-1650310004323-44',
    'Svrha uplate: Donacija za decu sa Kosova i Metohije',
    'DEVIZNI RAČUN',
    'IBAN: RS35160600000084810544',
    'SWIFT: DBDBRSBG',
    'Svaka pomoć, bez obzira na iznos, predstavlja znak da nismo zaboravili one zbog kojih se okupljamo i da zajedništvo nije samo reč, već delo.',
    'Dođite da zajedno pokažemo da Kosovo i Metohija nisu zaboravljeni.',
    'Da naša istorija nije samo priča o prošlosti, već zavet koji se prenosi budućim pokolenjima.',
    'Neka te večeri Kula bude mesto gde će jednim glasom progovoriti kultura, vera, istorija i humanost.',
    'Dođite zbog pesme.',
    'Dođite zbog ljudi.',
    'Dođite zbog Kosova i Metohije.',
    'Vidimo se u Kuli!',
    'Jer dok pamtimo Kosovo, pamtimo ko smo.'
  ],
  
  highlight1: 'DINARSKI RAČUN: 265-1650310004323-44 | Svrha uplate: Donacija za decu sa Kosova i Metohije',
  highlight2: 'DEVIZNI RAČUN | IBAN: RS35160600000084810544 | SWIFT: DBDBRSBG',
}

const ruText = {
  category: 'Новости',
  title: 'ВЕЧЕР, ПОСВЯЩЁННЫЙ КОСОВО И МЕТОХИИ В КУЛЕ — МУЗЫКА, ИСТОРИЯ И МИЛОСЕРДИЕ В ОДНОМ МЕСТЕ',
  date: 'Опубликовано: 31 июль 2026 г.',
  lead: 'Приглашаем вас присоединиться к нам 29 августа 2026 года на открытых бассейнах города Кула. Начало программы — в 15:00. Вас ждёт особый вечер, посвящённый Косово и Метохии, сербской истории, культуре и милосердию.',
  paragraphs: [
    'Это будет не просто концерт.',
    'Это будет встреча песни и памяти, веры и единства, прошлого, которое мы храним, и будущего, за которое мы несём ответственность.',
    'Через музыку, исторические рассказы и культурную программу мы вспомним наши святыни, наших предков и народ, который веками сохраняет сербское имя в Косово и Метохии. В то же время мы объединимся ради благородной цели — оказать помощь детям Косово и Метохии и тем, кто больше всего в ней нуждается.',
    'Все, кто желает поддержать эту гуманитарную акцию и внести свой вклад, могут сделать пожертвование по следующим реквизитам:',
    'ДИНАРОВЫЙ СЧЁТ',
    '265-1650310004323-44',
    'Назначение платежа: Пожертвование для детей Косово и Метохии',
    'ВАЛЮТНЫЙ СЧЁТ',
    'IBAN: RS35160600000084810544',
    'SWIFT: DBDBRSBG',
    'Каждая помощь, независимо от суммы, — это знак того, что мы не забыли тех, ради кого собираемся, и что единство для нас — не просто слово, а дело.',
    'Приходите, чтобы вместе показать, что Косово и Метохия не забыты.',
    'Что наша история — это не только рассказ о прошлом, но и завет, который передаётся будущим поколениям.',
    'Пусть в этот вечер Кула станет местом, где в один голос заговорят культура, вера, история и гуманность.',
    'Приходите ради песни.',
    'Приходите ради людей.',
    'Приходите ради Косово и Метохии.',
    'До встречи в Куле!',
    'Пока мы помним Косово, мы помним, кто мы.'
  ],
  
  highlight1: 'ДИНАРОВЫЙ СЧЁТ: 265-1650310004323-44 | Назначение платежа: Пожертвование для детей Косово и Метохии',
  highlight2: 'ВАЛЮТНЫЙ СЧЁТ | IBAN: RS35160600000084810544 | SWIFT: DBDBRSBG',
}

export default function VeceZaKosovoIMetohijuPage() {
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
            src="/static/images/kosovo-i-metohija.jpg"
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

          <CommentsSection postSlug="vece-za-kosovo-i-metohiju" />
        </motion.div>
      </article>
    </main>
  )
}