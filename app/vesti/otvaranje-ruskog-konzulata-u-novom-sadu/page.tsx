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
    'NOVI SAD DOBIO POČASNI KONZULAT RUSIJE: SVEČANO OTVARANJE UZ PRISUSTVO CRKVENIH VELIKODOSTOJNIKA',
  date: 'Objavljeno: 23. april 2026.',
  lead:
'Novi Sad je danas postao bogatiji za još jednu važnu diplomatsku instituciju – svečano je otvoren Počasni konzulat Ruske Federacije za teritoriju AP Vojvodine, uz prisustvo crkvenih velikodostojnika, diplomatskih zvaničnika i brojnih zvanica iz javnog života.',

paragraphs: [
  'Otvaranjem ovog konzulata grad Novi Sad dobio je novu značajnu diplomatsku instituciju. Ceremonija je održana u prostorijama konzulata u ulici Branka Bajića broj 2.',

  'Posebnu pažnju privuklo je prisustvo crkvenih velikodostojnika – patrijarha srpskog Porfirija Perića, mitropolita bačkog dr Irineja Bulovića i mitropolita sremskog Vasilija Vadića, koji su svojim dolaskom dali dodatnu simboliku ovom događaju. U svečanoj atmosferi istaknuti su značaj saradnje Srbije i Rusije, tradicionalne veze dva naroda, kao i važnost Novog Sada kao centra AP Vojvodine i mesta susreta kultura.',

  'Na otvaranju su se, prema ranijim najavama, obratili zamenik ministra spoljnih poslova Ruske Federacije Aleksandar Gruško, kao i počasni konzul Rusije u AP Vojvodini dr Dušan Bajatović, koji je na tu funkciju imenovan prošle godine. Konzularni okrug obuhvata teritoriju cele AP Vojvodine.',

  'Otvaranje konzulata ocenjuje se kao događaj od velikog međunarodnog i regionalnog značaja, koji bi mogao doprineti jačanju ekonomskih, kulturnih i institucionalnih odnosa između Srbije i Rusije u godinama koje dolaze.',
],
  highlight1: 'ISTORIJSKI DAN ZA NOVI SAD I VOJVODINU',
  highlight2: 'DIPLOMATIJA, TRADICIJA I PRIJATELJSTVO NA JEDNOM MESTU',
}

const ruText = {
  category: 'Новости',
  title:
    'НОВИ-САД ПОЛУЧИЛ ПОЧЁТНОЕ КОНСУЛЬСТВО РОССИИ: ТОРЖЕСТВЕННОЕ ОТКРЫТИЕ ПРИ УЧАСТИИ ДУХОВЕНСТВА',
  date: 'Опубликовано: 23 апреля 2026 г.',
  lead:
'Сегодня Нови-Сад стал богаче ещё одним важным дипломатическим учреждением — торжественно открылось Почётное консульство Российской Федерации на территории АП Воеводина при участии церковных иерархов, дипломатических представителей и многочисленных гостей общественной жизни.',

paragraphs: [
  'С открытием этого консульства город Нови-Сад получил новое значимое дипломатическое представительство. Церемония состоялась в помещениях консульства на улице Бранка Баича, дом 2.',

  'Особое внимание привлекло присутствие церковных иерархов — Патриарха Сербского Порфирия Перича, митрополита Бачского д-ра Иринея Буловича и митрополита Сремского Василия Вадича, которые своим прибытием придали событию дополнительный символический смысл. В торжественной атмосфере были подчеркнуты значение сотрудничества Сербии и России, традиционные связи двух народов, а также важность Нови-Сада как центра АП Воеводина и места встречи культур.',

  'На открытии, согласно ранее опубликованным объявлениям, выступили заместитель министра иностранных дел Российской Федерации Александр Грушко, а также почётный консул России в АП Воеводина д-р Душан Баятович, назначенный на эту должность в прошлом году. Консульский округ охватывает территорию всей АП Воеводины.',

  'Открытие консульства оценивается как событие большого международного и регионального значения, которое может способствовать укреплению экономических, культурных и институциональных связей между Сербией и Россией в ближайшие годы.',
],
  highlight1: 'ИСТОРИЧЕСКИЙ ДЕНЬ ДЛЯ НОВИ-САДА И ВОЕВОДИНЫ',
  highlight2: 'ДИПЛОМАТИЯ, ТРАДИЦИИ И ДРУЖБА В ОДНОМ МЕСТЕ',
}

export default function Page() {
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
            src="/static/images/otvaranje-ruskog-konzulata.jpeg"
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
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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

          <CommentsSection postSlug="otvaranje-ruskog-konzulata" />
        </motion.div>
      </article>
    </main>
  )
}
