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
  title: 'Premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“ u Ruskom domu',
  date: 'Objavljeno: 15. jun 2026.',
  lead: 'U ponedeljak, 15. juna, sa početkom u 19 časova, u Ruskom domu biće održana premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“.',
  paragraphs: [
    'Premijera se organizuje povodom obeležavanja 150 godina od izbijanja Prvog srpsko-turskog rata, jednog od najznačajnijih događaja u modernoj srpskoj istoriji. Kroz film govore ugledni srpski i ruski istoričari koji osvetljavaju političke, vojne i društvene okolnosti borbe Srbije za slobodu i državnu nezavisnost.',
    'Dokumentarac je sniman na autentičnim istorijskim lokacijama, a posebnu vrednost predstavljaju AI animacije kreirane na osnovu originalnih fotografija i ilustracija iz 1876. godine, koje gledaocima približavaju događaje i atmosferu tog vremena.',
    'Film je realizovan u produkciji Balkan Trip TV, Narodne diplomatije i Ruskog naučnog instituta.',
    'Ulaz na projekciju je slobodan.',
    'Dobro došli!'
  ],
  
  highlight1: 'Povodom 150 godina od izbijanja Prvog srpsko-turskog rata, u Ruskom domu biće održana premijera dokumentarnog filma „Rat za nezavisnost Srbije 1876“.',
  highlight2: 'Film donosi svedočenja srpskih i ruskih istoričara, sniman je na autentičnim lokacijama, dok su AI animacije nastale na osnovu originalnih fotografija i ilustracija iz 1876. godine.',
}

const ruText = {
  category: 'Новости',
  title: 'Премьера нового документального фильма «Война за независимость Сербии. 1876» в Русском доме',
  date: 'Опубликовано: 15 июня 2026 г.',
  lead: 'В понедельник, 15 июня, в 19:00 в Русском доме состоится премьера нового документального фильма «Война за независимость Сербии. 1876».',
  paragraphs: [
    'Показ приурочен к 150-летию начала Первой сербско-турецкой войны — одного из важнейших событий современной сербской истории. В фильме выступают известные сербские и российские историки, рассказывающие о политических, военных и общественных обстоятельствах борьбы Сербии за свободу и государственную независимость.',
    'Съёмки проходили на подлинных исторических местах. Особую ценность проекту придают AI-анимации, созданные на основе оригинальных фотографий и иллюстраций 1876 года, что позволяет зрителям по-новому взглянуть на события той эпохи.',
    'Фильм создан при участии Balkan Trip TV, Народной дипломатии и Русского научного института.',
    'Вход свободный.',
    'Добро пожаловать!'
  ],
  
  highlight1: 'К 150-летию начала Первой сербско-турецкой войны в Русском доме состоится премьера документального фильма «Война за независимость Сербии. 1876».',
  highlight2: 'Фильм включает комментарии сербских и российских историков, снят на подлинных исторических локациях, а AI-анимации созданы на основе оригинальных фотографий и иллюстраций 1876 года.',
}

export default function PremijeraFilmaRatZaNezavisnostSrbijePage() {
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
            src="/static/images/rat-za-nezavisnost-srbije.jpeg"
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

          <CommentsSection postSlug="premijera-filma-rat-za-nezavisnost-srbije" />
        </motion.div>
      </article>
    </main>
  )
}