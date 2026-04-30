'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

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
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  category: 'Vesti',
  title: 'STAVROPOLJ I SRBIJA JAČAJU SARADNJU: NOVE ŠANSE ZA POLJOPRIVREDU I PRIVREDU',
  date: 'Objavljeno: 30. april 2026.',
  lead: 'Saradnja između Srbije i Stavropoljskog kraja dobija konkretne obrise – fokus je na poljoprivredi, zajedničkim projektima i razmeni stručnjaka.',
  paragraphs: [
    'MOSKVA / STAVROPOLJ, 29. april — Saradnja između Srbije i Stavropoljskog kraja mogla bi u narednom periodu da dobije konkretne oblike, pre svega u oblasti poljoprivrede, trgovine i razmene stručnjaka.',
    'Tokom Kavkaskog investicionog foruma u Stavropolju, održan je radni sastanak između Vladimir Vladimirov i Dragan Glamočić, na kojem je postignuta saglasnost o unapređenju saradnje između ruskog regiona i Srbije.',
    'U fokusu razgovora bili su razvoj trgovinsko-ekonomskih odnosa, saradnja u agroindustrijskom kompleksu, kao i mogućnosti za dugoročne zajedničke projekte. Stavropoljski kraj predstavlja jedan od ključnih poljoprivrednih regiona Rusije, sa snažnom proizvodnjom hrane, mineralnih đubriva i razvijenim potencijalom u turizmu.',
    'Posebna pažnja posvećena je saradnji u oblasti rasadničarstva i voćarstva. Razmatrana je mogućnost osnivanja zajedničkih preduzeća, što bi omogućilo direktno povezivanje srpskih i ruskih proizvođača, kao i razmenu znanja i tehnologija.',
    'Takođe je razgovarano o jačanju obrazovne saradnje, uključujući obuku stručnjaka u oblasti hortikulture. U tom kontekstu, srpski eksperti pozvani su da učestvuju na međunarodnoj izložbi „PRO Jabuka 2026“, koja će biti održana u Stavropoljskom kraju.',
    'Ovaj sastanak predstavlja konkretan korak ka produbljivanju ekonomskih veza između Srbije i ruskih regiona, sa potencijalom da donese dugoročne koristi u oblasti poljoprivrede i privrednog razvoja.'
  ],
  highlight1: 'Dogovorena mogućnost osnivanja zajedničkih preduzeća u oblasti voćarstva i rasadničarstva.',
  highlight2: 'Srpski stručnjaci pozvani na međunarodnu izložbu „PRO Jabuka 2026“ u Stavropolju.',
}

const ruText = {
  category: 'Новости',
  title: 'СТАВРОПОЛЬ И СЕРБИЯ УКРЕПЛЯЮТ СОТРУДНИЧЕСТВО: НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ АГРАРНОГО СЕКТОРА И ЭКОНОМИКИ',
  date: 'Опубликовано: 30 апреля 2026 г.',
  lead: 'Сотрудничество между Сербией и Ставропольским краем выходит на новый уровень — акцент на сельском хозяйстве, совместных проектах и обмене специалистами.',
  paragraphs: [
    'МОСКВА / СТАВРОПОЛЬ, 29 апреля — Сотрудничество между Сербией и Ставропольским краем в ближайший период может получить конкретное развитие, прежде всего в сфере сельского хозяйства, торговли и обмена специалистами.',
    'В рамках Кавказского инвестиционного форума в Ставрополе состоялась рабочая встреча между Владимир Владимиров и Драган Гламочич, на которой стороны договорились о расширении сотрудничества между российским регионом и Сербией.',
    'В центре обсуждения находились вопросы развития торгово-экономических связей, взаимодействия в агропромышленном комплексе, а также перспективы реализации долгосрочных совместных проектов. Ставропольский край является одним из ведущих сельскохозяйственных регионов России, обладающим мощной производственной базой и развитым туристическим потенциалом.',
    'Особое внимание было уделено сотрудничеству в области питомниководства и садоводства. Рассматривалась возможность создания совместных предприятий, что позволит объединить опыт сербских и российских специалистов и наладить более тесное взаимодействие производителей.',
    'Также обсуждалось развитие образовательного сотрудничества, включая подготовку специалистов в области садоводства. В этом контексте сербские эксперты приглашены к участию в международной выставке «ПРО Яблоко 2026», которая пройдет в Ставропольском крае.',
    'Данная встреча стала очередным шагом к укреплению экономических связей между Сербией и российскими регионами и может принести значительные долгосрочные результаты в аграрной сфере и развитии экономики.'
  ],
  highlight1: 'Обсуждается создание совместных предприятий в сфере питомниководства и садоводства.',
  highlight2: 'Сербские специалисты приглашены на международную выставку «ПРО Яблоко 2026» в Ставропольском крае.',
}

export default function RazvojSaradnjeSrbijeIStavropoljaPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
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
            src="/static/images/saradnja.jpg"
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
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => {
              const headingIndexes = [1, 5, 10, 12]
              const bulletIndexes = [2, 3, 4, 6, 7, 8]
              const numberedIndexes = [13, 14, 15, 16]
              const infoBoxIndexes = [9, 17]
              const isEmailLine = index === 18

              if (headingIndexes.includes(index)) {
                return (
                  <h3
                    key={index}
                    className="pt-4 text-xl font-bold text-white border-t border-white/10"
                  >
                    {paragraph}
                  </h3>
                )
              }

              if (bulletIndexes.includes(index)) {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-yellow-400/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                    <p>{paragraph}</p>
                  </div>
                )
              }

              if (numberedIndexes.includes(index)) {
                const number = index - 12
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black text-sm">
                      {number}
                    </span>
                    <p className="flex-1">{paragraph.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                )
              }

              if (infoBoxIndexes.includes(index)) {
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-white"
                  >
                    {paragraph}
                  </div>
                )
              }

              if (isEmailLine) {
                const email = 'balkans.dialogue@gorchakovfund.ru'
                const parts = paragraph.split(email)

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p>
                      {parts[0]}
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold text-yellow-400 transition hover:text-yellow-300 break-all"
                      >
                        {email}
                      </a>
                      {parts[1]}
                    </p>
                  </div>
                )
              }

              return <p key={index}>{paragraph}</p>
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
          </div>

          <CommentsSection postSlug="razvoj-saradnje-srbije-i-stavropolja" />
        </motion.div>
      </article>
    </main>
  )
}
