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
  title: 'Car koji je voleo Srbiju više nego politiku: Na današnji dan rođen Nikolaj II Romanov',
  date: 'Objavljeno: 19. maj 2026.',
  lead: '„Nećete mi zameriti, gospodo, što sam pre svega Rus. Ali Vas uveravam da sam odmah posle toga Srbin i da su mi najdraži interesi srpskog naroda...”',
  paragraphs: [
    'Ove reči nisu samo istorijska beleška — one su svedočanstvo o neraskidivoj vezi između dva naroda, oličenoj u ličnosti poslednjeg ruskog cara, Nikolaja II Romanova.',
    'Na današnji dan 1868. godine rođen je čovek koji će ostati upamćen ne samo kao vladar ogromne imperije, već kao iskreni prijatelj Srbije u njenim najtežim trenucima. Kao car Rusije, Nikolaj II je u presudnim istorijskim momentima stao uz srpski narod — ne iz političke računice, već iz dubokog osećaja pravde, časti i bratstva.',
    'Kada je 1914. godine Austro-Ugarska objavila rat Srbiji, sudbina male balkanske države visila je o koncu. Upravo tada, car Nikolaj II donosi jednu od najvažnijih odluka u modernoj istoriji — staje u zaštitu Srbije, pokrećući mobilizaciju ruske vojske i time direktno ulazeći u sukob koji će prerasti u Prvi svetski rat.',
    'Njegova odluka nije bila samo vojna — bila je moralna. Bila je izraz vernosti, ali i žrtve. Jer, upravo taj potez pokrenuo je lanac događaja koji će na kraju dovesti do sloma Ruske imperije i njegove lične tragedije.',
    'Ipak, u srpskom narodu, ime Nikolaja II zauvek ostaje upisano kao simbol bratstva i nesebične pomoći. Njegova podrška nije bila samo politička — bila je istorijska, sudbinska i duboko ljudska.',
    'Danas, više od jednog veka kasnije, Srbija pamti. I ne zaboravlja.'
  ],
  
  highlight1: 'Car koji je ušao u rat zbog Srbije — odluka koja je promenila tok istorije',
  highlight2: 'Žrtva imperije za bratstvo naroda — Nikolaj II kao simbol večne povezanosti Srbije i Rusije',
}

const ruText = {
  category: 'Новости',
  title: 'Царь, который любил Сербию больше политики: в этот день родился Николай II Романов',
  date: 'Опубликовано: 19 мая 2026 г.',
  lead: '«Вы не будете на меня сердиться, господа, что я прежде всего русский. Но уверяю вас, что сразу после этого я серб, и что интересы сербского народа мне особенно дороги…»',
  paragraphs: [
    'Эти слова — не просто цитата, а отражение глубокой духовной связи между двумя братскими народами, воплощённой в личности последнего российского императора, Nikolay II Romanov.',
    'В этот день, в 1868 году, родился человек, который вошёл в историю не только как правитель огромной империи, но и как искренний защитник Сербии в её самые тяжёлые времена.',
    'Когда в 1914 году Австро-Венгрия объявила войну Сербии, судьба страны оказалась под угрозой. Именно тогда император Николай II принял судьбоносное решение — встать на сторону Сербии и начать мобилизацию российской армии, что стало одним из ключевых моментов начала Первой мировой войны.',
    'Это было не просто политическое решение — это был акт чести, верности и братства. Цена этого решения оказалась огромной: Россия вступила в войну, а сам император впоследствии потерял трон и жизнь.',
    'Тем не менее, в памяти сербского народа Николай II навсегда остался символом поддержки, жертвы и искренней преданности. Его помощь была не только политической — она была глубоко человеческой и исторически значимой.',
    'Сегодня, спустя более века, Сербия помнит. И не забывает.'
  ],
  
  highlight1: 'Царь, вступивший в войну ради Сербии — решение, изменившее ход истории',
  highlight2: 'Жертва империи ради братства народов — Николай II как символ вечной связи Сербии и России',
}

export default function NikolajIIRomanovPage() {
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
            src="/static/images/nikolaj-II-romanov.jpg"
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

          <CommentsSection postSlug="nikolaj-II-romanov" />
        </motion.div>
      </article>
    </main>
  )
}