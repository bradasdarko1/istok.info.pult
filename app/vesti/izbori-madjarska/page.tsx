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
  title: 'MAĐAR OSVOJIO MAĐARSKU',
  date: 'Objavljeno: 13. april 2026.',
  lead: 'SMENA ORBANA NAKON 16 GODINA NA VLASTI',
  paragraphs: [
    'Mađarska politička scena doživela je istorijski preokret nakon što je opoziciona opcija odnela pobedu na parlamentarnim izborima, čime je okončana višegodišnja vladavina premijera Viktora Orbana.',
    'Prema prvim preliminarnim rezultatima, opozicione snage uspele su da osvoje većinu glasova, što otvara put za formiranje nove vlade i značajne političke promene u zemlji.',
    'Ovaj ishod izbora dolazi nakon više od decenije dominacije Fidesa i predstavlja jedan od najznačajnijih političkih trenutaka u savremenoj istoriji Mađarske.',
    'Aktuelni premijer Viktor Orban priznao je poraz i čestitao pobednicima, naglasivši da će njegova politička opcija nastaviti da deluje u interesu države, ovog puta iz opozicionih redova.',
    'Analitičari ističu da bi ova promena vlasti mogla imati šire posledice, ne samo na unutrašnju politiku Mađarske, već i na odnose unutar Evropske unije.',
    'Građani su, prema ocenama posmatrača, svojim glasovima poslali jasnu poruku o potrebi za promenama, čime je otvoreno novo poglavlje u političkom životu zemlje.',

  ],
  highlight1: 'KRAJ JEDNE POLITIČKE ERE',
  highlight2: 'GRAĐANI IZABRALI PROMENE',
}

const ruText = {
  category: 'Новости',
  title: 'ВЕНГР ЗАВОЕВАЛ ВЕНГРИЮ',
  date: 'Опубликовано: 13. апреля 2026 г.',
  lead: 'СМЕНА ОРБАНА ПОСЛЕ 16 ЛЕТ У ВЛАСТИ',
  paragraphs: [
    'Политическая сцена Венгрии пережила исторический поворот после того, как оппозиционные силы одержали победу на парламентских выборах, положив конец многолетнему правлению премьер-министра Виктора Орбана.',
    'Согласно предварительным результатам, оппозиция получила большинство голосов, что открывает путь к формированию нового правительства и значительным политическим изменениям в стране.',
    'Этот исход выборов стал одним из самых важных событий в современной истории Венгрии после более чем десятилетнего доминирования партии Фидес.',
    'Действующий премьер-министр Виктор Орбан признал поражение и поздравил победителей, подчеркнув, что его политическая сила продолжит служить стране, но уже в роли оппозиции.',
    'Аналитики отмечают, что смена власти может повлиять не только на внутреннюю политику Венгрии, но и на её отношения с Европейским союзом.',
    'По мнению наблюдателей, граждане своим голосованием ясно выразили стремление к переменам, открыв новую страницу в политической жизни страны.'

  ],
  highlight1: 'КОНЕЦ ПОЛИТИЧЕСКОЙ ЭПОХИ',
  highlight2: 'ГРАЖДАНЕ ВЫБРАЛИ ПЕРЕМЕНЫ',
}

export default function IzboriMadjarskaPage() {
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
            src="/static/images/madjarska.jpg"
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
            <CommentsSection postSlug="izbori-madjarska" />
          </div>
        </motion.div>

      </article>
    </main>
  )
}
