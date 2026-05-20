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
  title: 'BOGORODIČIN POJAS KRENUO KA SRBIJI — VERNICI SA NESTRPLJENJEM OČEKUJU SVETINJU',
  date: 'Objavljeno: 20. maj 2026.',
  lead: 'Velika pravoslavna svetinja — Bogorodičin pojas — zvanično je krenula ka Srbiji, gde se očekuje dolazak koji će okupiti hiljade vernika iz celog regiona. Ovaj događaj već se smatra jednim od najznačajnijih duhovnih trenutaka u tekućoj godini.',
  paragraphs: [
    'Prema dostupnim informacijama, pojas Presvete Bogorodice, koji se vekovima čuva u manastiru Vatoped na Svetoj Gori, krenuo je na put ka Srbiji uz posebne mere bezbednosti i pratnju sveštenstva.',
    'Ova svetinja zauzima posebno mesto u pravoslavlju i vezuje se za brojna svedočanstva o čudima, isceljenjima i duhovnoj utehi. Vernici širom sveta vekovima joj prilaze sa dubokom verom, a njen dolazak u Srbiju izazvao je ogromno interesovanje javnosti.'
  ],
  
  highlight1: 'Bogorodičin pojas krenuo ka Srbiji — očekuje se dolazak hiljada vernika',
  highlight2: 'Jedna od najvećih pravoslavnih svetinja stiže u Srbiju uz posebne mere bezbednosti',
}

const ruText = {
  category: 'Новости',
  title: 'ПОЯС ПРЕСВЯТОЙ БОГОРОДИЦЫ НАПРАВИЛСЯ В СЕРБИЮ — ВЕРУЮЩИЕ С НЕТЕРПЕНИЕМ ОЖИДАЮТ СВЯТЫНЮ',
  date: 'Опубликовано: 20 мая 2026 г.',
  lead: 'Великая православная святыня — Пояс Пресвятой Богородицы — официально направилась в Сербию, где ожидается событие, которое соберёт тысячи верующих со всего региона. Это уже считается одним из важнейших духовных событий текущего года.',
  paragraphs: [
    'Согласно имеющейся информации, Пояс Пресвятой Богородицы, который веками хранится в монастыре Ватопед на Святой Горе Афон, отправился в путь в Сербию при усиленных мерах безопасности и в сопровождении духовенства.',
    'Эта святыня занимает особое место в православии и связана с многочисленными свидетельствами о чудесах, исцелениях и духовной помощи. Верующие со всего мира веками приходят к ней с глубокой верой, а её прибытие в Сербию вызвало огромный интерес общественности.'
  ],
  
  highlight1: 'Пояс Пресвятой Богородицы направился в Сербию — ожидается прибытие тысяч верующих',
  highlight2: 'Одна из величайших православных святынь прибывает в Сербию при усиленных мерах безопасности',
}

export default function BogorodicinPojasKrenuoKaSrbijiPage() {
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
            src="/static/images/bogorodicin-pojas.jpeg"
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

          <CommentsSection postSlug="bogorodicin-pojas-krenuo-ka-srbiji" />
        </motion.div>
      </article>
    </main>
  )
}