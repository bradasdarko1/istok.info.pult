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
  title:
    'SRPSKI OFICIR KOJI JE POGINUO KAO HEROJ – IME ALEKSANDRA BIJELIĆA NE SME BITI ZABORAVLJENO',
  date: 'Objavljeno: 22. april 2026.',
  lead: 'U vremenu kada svet sve češće zaboravlja istinske vrednosti, postoje imena koja ostaju zapisana u časti, žrtvi i vojničkom zavetu. Jedno od tih imena je Aleksandar Bijelić – srpski oficir koji je život položio kao heroj.',
  paragraphs: [
    'Prema dostupnim informacijama, Aleksandar je bio poručnik ruske vojske, mladi oficir srpsko-ruskog porekla – sin srpskog oca i ruske majke. U sebi je nosio dva bratska naroda, dve tradicije i jedan isti osećaj časti.',
    'U vojnoj službi proveo je kratko vreme, ali dovoljno da pokaže ono što mnogi ne pokažu za čitav život – hrabrost, odanost i spremnost na žrtvu. Prema izveštajima, poginuo je 2022. godine tokom borbenih dejstava u Ukrajini, dok je pokušavao da spase ranjenog saborca.',
    'To nije bio kraj jednog života. To je bio trenutak kada je rođen herojski zavet.',
    'Aleksandar Bijelić ostaje simbol mladosti koja nije bežala od odgovornosti, već je stajala tamo gde je bilo najteže. Njegov primer govori više od hiljadu reči – čast nije stara vrednost, već večna.',
    'Za porodicu – nezalečiva rana.',
    'Za narod – ime za ponos.',
    'Za istoriju – čovek koji nije okrenuo leđa dužnosti.',
    '📌 Uskoro ekskluzivno za Istok Info Pult: Otac Aleksandra Bijelića prvi put će govoriti o detinjstvu, životnom putu i poslednjim danima svog sina.',
    '📌 Takođe, u pripremi su razgovori sa oficirima vazduhoplovstva Oružane snage Ruske Federacije, koji će govoriti o časti, službi i bratstvu srpskog i ruskog naroda.',
    'Heroji ne traže slavu. Narod je taj koji mora da ih pamti.',
  ],
  highlight1: 'ŽIVEO JE ČASNO, PAO JE SPASAVAJUĆI DRUGA',
  highlight2: 'SRPSKO I RUSKO SRCE U JEDNOM HEROJU',
}

const ruText = {
  category: 'Новости',
  title:
    'СЕРБСКИЙ ОФИЦЕР, ПОГИБШИЙ КАК ГЕРОЙ – ИМЯ АЛЕКСАНДРА БИЕЛИЧА НЕ ДОЛЖНО БЫТЬ ЗАБЫТО',
  date: 'Опубликовано: 22 апреля 2026 г.',
  lead: 'Во времена, когда мир всё чаще забывает истинные ценности, существуют имена, которые навсегда остаются символами чести, жертвы и воинского долга. Одно из таких имён — Александр Биелич, сербский офицер, отдавший свою жизнь как герой.',
  paragraphs: [
    'По имеющейся информации, Александр был лейтенантом российской армии, молодым офицером сербско-русского происхождения — сыном сербского отца и русской матери. В нём соединялись два братских народа, две традиции и одно общее чувство чести.',
    'Он прослужил в армии недолгое время, но успел показать то, что многие не проявляют за всю жизнь — мужество, верность и готовность к самопожертвованию. Согласно сообщениям, он погиб в 2022 году во время боевых действий на Украине, пытаясь спасти раненого товарища.',
    'Это не был конец одной жизни. Это был момент рождения героического завета.',
    'Александр Биелич остаётся символом молодости, которая не убегала от ответственности, а стояла там, где было труднее всего. Его пример говорит больше тысячи слов — честь не устаревшая ценность, а вечная.',
    'Для семьи — незаживающая рана.',
    'Для народа — имя для гордости.',
    'Для истории — человек, не отвернувшийся от долга.',
    '📌 Скоро эксклюзивно для Istok Info Pult: Отец Александра Биелича впервые расскажет о детстве, жизненном пути и последних днях своего сына.',
    '📌 Также готовятся интервью с офицерами авиации Вооружённые силы Российской Федерации, которые расскажут о чести, службе и братстве сербского и русского народов.',
    'Герои не ищут славы. Народ обязан помнить их.',
  ],
  highlight1: 'ОН ЖИЛ ЧЕСТНО И ПАЛ, СПАСАЯ ТОВАРИЩА',
  highlight2: 'СЕРБСКОЕ И РУССКОЕ СЕРДЦЕ В ОДНОМ ГЕРОЕ',
}

export default function AleksandarBijelicPage() {
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
            src="/static/images/aleksandar-bijelic.jpeg"
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
              const isPinned =
                paragraph.startsWith('📌') ||
                paragraph.startsWith('📍') ||
                paragraph.startsWith('📎')

              if (isPinned) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-4 text-white shadow-[0_0_20px_rgba(234,179,8,0.08)]"
                  >
                    <p className="text-base font-medium leading-8 md:text-lg">
                      {paragraph}
                    </p>
                  </div>
                )
              }

              return (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-300 md:text-lg"
                >
                  {paragraph}
                </p>
              )
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

          <CommentsSection postSlug="aleksandar-bijelic" />
        </motion.div>
      </article>
    </main>
  )
}
