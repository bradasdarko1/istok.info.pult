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
  title: 'MAĐARSKI PREMIJER IZVRŠIO SAMOUBISTVO I TIME UŠAO U LEGENDU',
  date: 'Objavljeno: 20. oktobar 2026.',
  lead: 'Samo nekoliko meseci nakon potpisivanja ugovora o večnom prijateljstvu sa Kraljevinom Jugoslavijom, Mađarska se našla pred Hitlerovim zahtevom da učestvuje u njenom napadu.',
  paragraphs: [
    'Suočen sa gaženjem date reči i gubitkom državne časti, mađarski premijer Pal Teleki izvršio je samoubistvo 3. aprila 1941. godine.',
    'Dana 12. decembra 1940. godine Mađarska i Kraljevina Jugoslavija potpisale su Ugovor o večnom prijateljstvu, kojim su nastojale da očuvaju mir u Evropi zahvaćenoj ratom.',
    'Međutim, nakon vojnog puča u Beogradu 27. marta 1941. godine, Adolf Hitler odlučio je da napadne Jugoslaviju i zatražio saradnju Mađarske, nudeći joj zauzvrat delove jugoslovenske teritorije.',
    'Za premijera Pala Telekija to je predstavljalo težak politički i moralni sukob. Nije želeo da njegova zemlja pogazi sporazum koji je potpisala svega nekoliko meseci ranije.',
    'U noći između 2. i 3. aprila 1941. godine Teleki je sebi oduzeo život, ostavivši oproštajno pismo mađarskom regentu Miklošu Hortiju.',
    'U njemu je napisao potresne reči:',
    '„Prekršili smo datu reč... Stali smo na stranu nitkova... Postaćemo pljačkaši mrtvih! [...] Nisam te sprečio. Kriv sam.“',
    'Samo tri dana kasnije, 6. aprila 1941. godine, nacistička Nemačka započela je napad na Kraljevinu Jugoslaviju, dok se Mađarska invaziji priključila nekoliko dana kasnije.',
    'Iako je Telekijevo političko nasleđe bilo složeno i opterećeno diskriminatornim zakonima njegove vlade, njegov poslednji čin ostao je upamćen kao dramatičan protest protiv kršenja sporazuma sa Jugoslavijom.',
    'Njegova sudbina i danas otvara pitanje koliko vredi data reč kada se država nađe pred pritiskom moćnijih sila.'
  ],
  
  highlight1: 'Samo nekoliko meseci nakon potpisivanja ugovora o večnom prijateljstvu sa Jugoslavijom, Hitler je od Mađarske zatražio učešće u njenom napadu.',
  highlight2: 'Ne želeći da pogazi datu reč, mađarski premijer Pal Teleki oduzeo je sebi život 3. aprila 1941. godine, ostavivši potresno oproštajno pismo.',
}

const ruText = {
  category: 'Новости',
  title: 'ВЕНГЕРСКИЙ ПРЕМЬЕР-МИНИСТР ПОКОНЧИЛ С СОБОЙ И ТЕМ САМЫМ ВОШЁЛ В ЛЕГЕНДУ',
  date: 'Опубликовано: 20 октябрь 2026 г.',
  lead: 'Всего через несколько месяцев после подписания договора о вечной дружбе с Королевством Югославия Венгрия столкнулась с требованием Гитлера принять участие в нападении на соседнее государство.',
  paragraphs: [
    'Столкнувшись с нарушением данного слова и утратой государственной чести, премьер-министр Венгрии Пал Телеки покончил с собой 3 апреля 1941 года.',
    '12 декабря 1940 года Венгрия и Королевство Югославия подписали Договор о вечной дружбе, стремясь сохранить мир в Европе, охваченной войной.',
    'Однако после военного переворота в Белграде 27 марта 1941 года Адольф Гитлер принял решение напасть на Югославию и потребовал содействия Венгрии, пообещав ей взамен часть югославских территорий.',
    'Для премьер-министра Пала Телеки это стало тяжёлым политическим и нравственным испытанием. Он не хотел, чтобы его страна нарушила соглашение, подписанное всего несколькими месяцами ранее.',
    'В ночь со 2 на 3 апреля 1941 года Телеки покончил с собой, оставив прощальное письмо регенту Венгрии Миклошу Хорти.',
    'В нём он написал пронзительные слова:',
    '«Мы нарушили данное слово... Мы встали на сторону негодяев... Мы станем мародёрами! [...] Я не смог тебя остановить. Я виновен».',
    'Всего три дня спустя, 6 апреля 1941 года, нацистская Германия начала вторжение в Королевство Югославия, а через несколько дней к военной операции присоединилась и Венгрия.',
    'Хотя политическое наследие Телеки было противоречивым и омрачённым дискриминационными законами его правительства, его последний поступок остался в истории как драматический протест против нарушения договора с Югославией.',
    'Его судьба и сегодня заставляет задуматься: чего стоит данное слово, когда государство оказывается под давлением более могущественных сил?'

  ],
  
  highlight1: 'Всего через несколько месяцев после подписания договора о вечной дружбе с Югославией Гитлер потребовал от Венгрии участия в нападении на неё.',
  highlight2: 'Не желая нарушать данное слово, премьер-министр Венгрии Пал Телеки покончил с собой 3 апреля 1941 года, оставив пронзительное прощальное письмо.',
}

export default function MadjarskiPremijerIzvrsioSamoubistvoITimeUsaoULegenduPage() {
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
            src="/static/images/pal-teleki.jpg"
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

          <CommentsSection postSlug="madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu" />
        </motion.div>
      </article>
    </main>
  )
}