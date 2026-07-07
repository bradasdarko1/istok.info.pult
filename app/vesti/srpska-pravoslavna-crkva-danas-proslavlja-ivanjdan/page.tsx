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
  title: 'Srpska pravoslavna crkva danas proslavlja Ivanjdan – Rođenje Svetog Jovana Preteče',
  date: 'Objavljeno: 7. jul 2026.',
  lead: 'Srpska pravoslavna crkva i njeni vernici danas proslavljaju Ivanjdan, praznik posvećen Rođenju Svetog Jovana Preteče i Krstitelja, jednog od najpoštovanijih svetitelja u hrišćanstvu.',
  paragraphs: [
    'Sveti Jovan rođen je šest meseci pre Isusa Hrista, kao od Boga izmoljeno dete pravednih roditelja, sveštenika Zaharije i njegove supruge Jelisavete. Njegovo rođenje najavio je arhanđel Gavrilo, a još od samog početka njegov život bio je ispunjen čudesnim događajima.',
    'Veći deo života proveo je u judejskoj pustinji, gde se posvetio molitvi, postu i propovedanju pokajanja. Živeo je skromno, hraneći se divljim medom i biljem, dok je nosio odeću od kamilje dlake, simbolizujući potpuno odricanje od ovozemaljskih zadovoljstava.',
    'Najznačajniji događaj njegovog života bilo je krštenje Isusa Hrista u reci Jordan. Tim činom započela je Hristova javna služba, a hrišćanska tradicija ovaj događaj smatra jednim od ključnih trenutaka u istoriji spasenja.',
    'Sveti Jovan Preteča ostao je upamćen kao veliki prorok, propovednik istine i primer nepokolebljive vere. Njegova žrtva i odanost Bogu vekovima predstavljaju uzor svim pravoslavnim vernicima.'
  ],
  
  highlight1: 'Sveti Jovan Preteča rođen je šest meseci pre Isusa Hrista i smatra se poslednjim velikim prorokom Starog zaveta.',
  highlight2: 'Njegovo krštenje Isusa Hrista na reci Jordan označilo je početak Hristove javne propovedi i Novog zaveta.',
}

const ruText = {
  category: 'Новости',
  title: 'Сербская Православная Церковь отмечает Иванов день — Рождество святого Иоанна Предтечи',
  date: 'Опубликовано: 7 июль 2026 г.',
  lead: 'Сегодня Сербская Православная Церковь и её верующие празднуют Иванов день — Рождество святого Иоанна Предтечи и Крестителя Господня, одного из самых почитаемых святых христианского мира.',
  paragraphs: [
    'Святой Иоанн родился за шесть месяцев до Иисуса Христа как долгожданный, Богом дарованный сын праведных родителей — священника Захарии и праведной Елисаветы. Его рождение было предвозвещено архангелом Гавриилом, а вся его жизнь сопровождалась удивительными событиями.',
    'Большую часть своей жизни Иоанн провёл в Иудейской пустыне, посвятив себя молитве, посту и проповеди покаяния. Он жил очень скромно, питался диким мёдом и растениями, а носил одежду из верблюжьей шерсти, являя пример полного отречения от мирских благ.',
    'Главным событием его земной жизни стало Крещение Господа Иисуса Христа в реке Иордан. Именно этот момент считается началом общественного служения Спасителя и одним из важнейших событий в истории христианства.',
    'Святой Иоанн Предтеча навсегда остался примером непоколебимой веры, мужества и верности Богу. Его жизнь и подвиг продолжают вдохновлять миллионы православных христиан по всему миру.'
  ],
  
  highlight1: 'Святой Иоанн Предтеча родился за шесть месяцев до Иисуса Христа и считается последним великим пророком Ветхого Завета.',
  highlight2: 'Крещение Иисуса Христа в реке Иордан, совершённое Иоанном, стало началом земной проповеди Спасителя и Нового Завета.',
}

export default function SrpskaPravoslavnaCrkvaDanasProslavljaIvanjdanPage() {
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
            src="/static/images/sveti-jovan.jpeg"
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

          <CommentsSection postSlug="srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan" />
        </motion.div>
      </article>
    </main>
  )
}