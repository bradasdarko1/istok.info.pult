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
  title: 'NOVI SAD JE SINOĆ DISAO SLOBODU – PONOVO ĆE PROCVETATI BOŽUR',
  date: 'Objavljeno: 26. oktobar 2026.',
  lead: 'Sinoć je Novi Sad imao poseban sjaj. Trg slobode bio je ispunjen pesmom, osmesima, zagrljajima i ljudima koji su slavili pobedu Studentske liste. Igralo se kolo, vijorile su se srpske zastave, a gradom je odjekivala radost i nada u neko novo, bolje sutra.',
  paragraphs: [
    'Ali u toj noći punoj emocija postojao je i trenutak kada je sve utihnulo. Šesnaest minuta tišine za šesnaest nevinih života izgubljenih pod nadstrešnicom. Trenutak dostojanstva, sećanja i poštovanja. Da se nikada ne zaboravi odakle je sve počelo.',
    'Sinoć se na Trgu slobode nije slavila samo izborna pobeda. Slavile su se nada, zajedništvo i vera da Srbija može biti zemlja u kojoj će buduće generacije želeti da ostanu, stvaraju i podižu svoje porodice.',
    'A možda je upravo najlepša poruka te noći bila da posle svake duge zime dolazi proleće.',
    'Srbija ponovo sanja slobodu. I ponovo će procvetati božur.'
  ],
  
  highlight1: 'Sinoć se na Trgu slobode nije slavila samo izborna pobeda. Slavile su se nada, zajedništvo i vera da Srbija može biti zemlja u kojoj će buduće generacije želeti da ostanu, stvaraju i podižu svoje porodice.',
  highlight2: 'Srbija ponovo sanja slobodu. I ponovo će procvetati božur.',
}

const ruText = {
  category: 'Новости',
  title: 'НОВИ-САД ВЧЕРА ДЫШАЛ СВОБОДОЙ — И ВНОВЬ РАСЦВЕТЁТ ПИОН',
  date: 'Опубликовано: 26 октябрь 2026 г.',
  lead: 'Вчера вечером Нови-Сад сиял по-особенному. Площадь Свободы была наполнена песнями, улыбками, объятиями и людьми, праздновавшими победу Студенческого списка. Люди водили традиционный сербский хоровод — коло, развевались сербские флаги, а город был охвачен радостью и надеждой на новое, лучшее завтра.',
  paragraphs: [
    'Но в эту ночь, наполненную эмоциями, наступил и момент, когда всё замерло. Шестнадцать минут молчания в память о шестнадцати невинных жизнях, оборвавшихся в результате обрушения навеса на железнодорожном вокзале. Момент достоинства, памяти и уважения. Чтобы никогда не забывать, с чего всё началось.',
    'Вчера на площади Свободы праздновали не только победу на выборах. Люди праздновали надежду, единство и веру в то, что Сербия может стать страной, в которой будущие поколения захотят оставаться, созидать и растить свои семьи.',
    'И, возможно, самым прекрасным посланием той ночи стало напоминание о том, что после каждой долгой зимы неизменно приходит весна.',
    'Сербия вновь мечтает о свободе. И вновь расцветёт пион.'

  ],
  
  highlight1: 'Вчера на площади Свободы праздновали не только победу на выборах. Люди праздновали надежду, единство и веру в то, что Сербия может стать страной, в которой будущие поколения захотят оставаться, созидать и растить свои семьи.',
  highlight2: 'Сербия вновь мечтает о свободе. И вновь расцветёт пион.',
}

export default function NoviSadJeSinocDisaoSloboduPonovoCeProcvetatiBozurPage() {
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
            src="/static/images/srbija-je-slobodna.jpg"
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

          <CommentsSection postSlug="novi-sad-je-sinoc-disao-slobodu-ponovo-ce-procvetati-bozur" />
        </motion.div>
      </article>
    </main>
  )
}