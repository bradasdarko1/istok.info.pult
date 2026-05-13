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
  category: 'Sport',
  title: 'FINALE KOJE PALI SRBIJU: ZVEZDA I VOJVODINA U BORBI ZA TROFEJ!',
  date: 'Objavljeno: 13. maj 2026.',
  lead: 'Večeras nas očekuje spektakl kakav srpski fudbal retko viđa. Crvena zvezda i Vojvodina izlaze na teren u finalu koje nosi težinu istorije, ali i ogroman ulog — trofej koji znači sve.',
  paragraphs: [
    'Zvezda, kao apsolutni favorit i klub naviknut na velike scene, ulazi u ovaj duel sa jasnim ciljem — da još jednom potvrdi dominaciju i podigne pehar. Sa druge strane, Vojvodina dolazi bez straha, motivisana da napravi iznenađenje i ispiše novu stranicu svoje istorije.',
    'Ovo nije samo utakmica — ovo je sudar dva mentaliteta. Iskusna i moćna Zvezda protiv gladne i borbene Vojvodine. Svaki duel, svaki start i svaka šansa nosiće težinu finala.',
    'Očekuje se puna tribina, atmosfera na ivici eksplozije i borba do poslednjeg zvižduka. U ovakvim mečevima favoriti ne znače mnogo — odlučuju srce, koncentracija i jedan trenutak magije.',
    'Večeras se ne igra samo za pobedu — večeras se igra za večnost.'
  ],
  highlight1: 'Večeras se igra utakmica sezone — sudar tradicije, ponosa i šampionskog mentaliteta.',
  highlight2: 'Jedan meč, jedan trofej, jedna istorija — ko će izaći kao pobednik?',
}

const ruText = {
  category: 'Спорт',
  title: 'ФИНАЛ, КОТОРЫЙ ЗАЖИГАЕТ СЕРБИЮ: «ЦРВЕНА ЗВЕЗДА» ПРОТИВ «ВОЙВОДИНЫ»',
  date: 'Опубликовано: 13 мая 2026 г.',
  lead: 'Сегодня вечером нас ждёт настоящий футбольный спектакль. «Црвена звезда» и «Войводина» выходят на поле в финале, который несёт в себе не только историю, но и огромную ставку — трофей, который значит всё.',
  paragraphs: [
    '«Црвена звезда», как главный фаворит и клуб, привыкший к большим матчам, выходит на игру с одной целью — подтвердить своё превосходство и завоевать трофей. «Войводина», в свою очередь, играет без страха, с огромной мотивацией сотворить сенсацию и вписать новую страницу в свою историю.',
    'Это не просто матч — это столкновение двух менталитетов. Опыт и сила против жажды борьбы и амбиций. Каждый момент, каждый контакт и каждая атака будут иметь значение.',
    'Ожидается заполненный стадион, атмосфера на грани взрыва и борьба до последнего свистка. В таких матчах фавориты не всегда решают — решают сердце, концентрация и один момент магии.',
    'Сегодня играют не просто за победу — сегодня играют за вечность.'
  ],
  highlight1: 'Сегодня — матч сезона: столкновение традиции, гордости и чемпионского духа.',
  highlight2: 'Один матч, один трофей, одна история — кто станет победителем?',
}

export default function FinaleKupaCrvenaZvezdaVojvodinaPage() {
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

          <p className="text-sm text-white/60 md:text-base">
            {content.date}
          </p>
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
            src="/static/images/finale-kupa.jpg"
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
            <CommentsSection postSlug="finale-kupa-crvena-zvezda-vojvodina" />
          </div>
        </motion.div>

      </article>
    </main>
  )
}
