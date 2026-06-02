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
  title: 'Čegar – mesto gde je sloboda plaćena životom: 217 godina od podviga Stevana Sinđelića',
  date: 'Objavljeno: 1. jun 2026.',
  lead: 'Na Čegaru kod Niša danas je svečano obeležena 217. godišnjica slavne Čegarske bitke, jednog od najznačajnijih i najheroiskijih događaja iz vremena Prvog srpskog ustanka. Predstavnici državnih institucija, vojske, lokalne samouprave, brojna udruženja i građani položili su vence i odali poštu junacima koji su 1809. godine dali svoje živote u borbi za slobodu Srbije.',
  paragraphs: [
    'Bitka na Čegaru ostala je upamćena po neustrašivosti srpskih ustanika predvođenih vojvodom Stevanom Sinđelićem. Suočeni sa višestruko nadmoćnijom osmanskom vojskom i svesni da im preti siguran poraz i zarobljavanje, Sinđelić i njegovi saborci odlučili su da se do poslednjeg trenutka bore za slobodu i dostojanstvo svoga naroda.',
    'Kada su osmanske snage prodrle u srpski šanac, vojvoda Sinđelić je, prema narodnom predanju, ispalio hitac u barutanu i izazvao snažnu eksploziju koja je usmrtila veliki broj napadača, ali i branilaca. Njegov čin ostao je simbol nesalomive volje, požrtvovanosti i spremnosti da se sloboda brani po svaku cenu.',
    'U znak odmazde nakon bitke, osmanske vlasti podigle su Ćele-kulu od lobanja poginulih srpskih ustanika, koja je danas jedno od najpotresnijih i najznačajnijih spomen-obeležja srpske istorije. Ćele-kula svedoči o stradanju, ali i o nepokolebljivom duhu naroda koji nije odustao od borbe za oslobođenje.',
    'Dva veka kasnije, podvig Stevana Sinđelića i njegovih saboraca nastavlja da inspiriše generacije Srba, podsećajući da su sloboda, čast i nacionalno dostojanstvo vrednosti koje su naši preci branili najvećom mogućom žrtvom.'
  ],
  
  highlight1: 'Na brdu Čegar kod Niša obeležena je 217. godišnjica jedne od najznačajnijih bitaka Prvog srpskog ustanka.',
  highlight2: 'Herojska žrtva vojvode Stevana Sinđelića i njegovih ustanika ostala je večni simbol borbe za slobodu, čast i opstanak srpskog naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'Чегар — место, где свобода была оплачена жизнью: 217 лет подвигу Стевана Синджелича',
  date: 'Опубликовано: 1 июня 2026 г.',
  lead: 'Сегодня на Чегаре близ Ниша состоялось торжественное мероприятие, посвящённое 217-й годовщине знаменитого Чегарского сражения — одного из самых значимых и героических событий Первого сербского восстания. Представители государственных учреждений, армии, местных органов власти, общественных организаций и жители региона почтили память павших героев и возложили венки к памятным местам.',
  paragraphs: [
    'Сражение при Чегаре навсегда вошло в историю благодаря беспримерному мужеству сербских повстанцев под командованием воеводы Стевана Синджелича. Оказавшись перед лицом многократно превосходящих сил Османской империи и понимая неизбежность окружения, защитники решили сражаться до последнего за свободу и достоинство своего народа.',
    'Согласно народному преданию, когда османские войска ворвались в сербские укрепления, Стеван Синджелич выстрелил в пороховой склад, вызвав мощный взрыв. В результате погибли как многочисленные нападавшие, так и сами защитники. Этот поступок стал символом самоотверженности, несгибаемой воли и готовности пожертвовать жизнью ради свободы Отечества.',
    'После битвы в качестве устрашения османские власти построили знаменитую Челе-кулу из черепов погибших сербских повстанцев. Сегодня этот памятник является одним из самых известных свидетельств страданий и героизма сербского народа в его многовековой борьбе за независимость.',
    'Спустя более двух столетий подвиг Стевана Синджелича и его соратников продолжает вдохновлять новые поколения, напоминая о том, что свобода, честь и национальное достоинство нередко требуют величайшей жертвы.'
  ],
  
  highlight1: 'На холме Чегар возле Ниша отмечена 217-я годовщина одного из важнейших сражений Первого сербского восстания.',
  highlight2: 'Героическая жертва воеводы Стевана Синджелича и его повстанцев навсегда осталась символом борьбы за свободу, честь и будущее сербского народа.',
}

export default function CegarSlobodaPlacenaZivotimaPage() {
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
            src="/static/images/cegar.jpg"
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

          <CommentsSection postSlug="cegar-sloboda-placena-zivotima" />
        </motion.div>
      </article>
    </main>
  )
}