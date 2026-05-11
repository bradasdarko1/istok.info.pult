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
  title: 'PARADA POBEDE U MOSKVI ZAVRŠENA VAZDUŠNIM SPEKTAKLOM',
  date: 'Objavljeno: 11. maj 2026.',
  lead: 'Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom koji je održan iznad ruske prestonice. Završnica svečanosti privukla je veliku pažnju građana i gledalaca širom sveta, uz prikaz preciznosti i moći ruske vojne avijacije.',
  paragraphs: [
    'Posebnu pažnju izazvao je manevar „Kubanski dijamant“, tokom kog su akrobatski timovi „Ruski vitezovi“ i „Striži“ izveli zajednički prelet na lovcima Su-30 i MiG-29, leteći na minimalnom rastojanju jedni od drugih.',
    'Finale parade obeležio je prelet šest jurišnih aviona Su-25 koji su nebo iznad Moskve obojili u boje ruske zastave, ostavljajući snažan utisak na prisutne i simbolično zatvarajući ovogodišnju Paradu pobede.'
  ],
  
  highlight1: 'Zajednički prelet akrobatskih timova „Ruski vitezovi“ i „Striži“ na lovcima Su-30 i MiG-29 izveden je na minimalnom rastojanju.',
  highlight2: 'Finale parade obeležio je prelet šest jurišnih aviona Su-25 koji su nebo iznad prestonice obojili u boje ruske zastave.',
}

const ruText = {
  category: 'Новости',
  title: 'ПАРАДА ПОБЕДЫ В МОСКВЕ ЗАВЕРШЕНА ВОЗДУШНЫМ СПЕКТАКЛЕМ',
  date: 'Опубликовано: 11 мая 2026 г.',
  lead: 'Парад Победы в Москве завершился впечатляющим воздушным спектаклем над российской столицей. Финальная часть торжеств привлекла большое внимание жителей города и зрителей по всему миру, продемонстрировав точность и мощь российской военной авиации.',
  paragraphs: [
    'Особое внимание вызвал манёвр «Кубанский бриллиант», в ходе которого авиационные группы «Русские витязи» и «Стрижи» выполнили совместный пролёт на истребителях Су-30 и МиГ-29, пролетая на минимальном расстоянии друг от друга.',
    'Финалом парада стал пролёт шести штурмовиков Су-25, которые окрасили небо над Москвой в цвета российского флага, эффектно завершив празднование Дня Победы.'
  ],
  
  highlight1: 'Совместный пролёт авиационных групп „Русские витязи“ и „Стрижи“ на истребителях Су-30 и МиГ-29 выполнен на минимальной дистанции.',
  highlight2: 'Финал парада обележио је пролет шести јуришних авиона Су-25, који су небо изнад престонице обојили у боје руске заставе.',
}

export default function ParadaPobedeUMoskviPage() {
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
            src="/static/images/parada-pobede-u-moskvi.jpg"
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

          <CommentsSection postSlug="parada-pobede-u-moskvi" />
        </motion.div>
      </article>
    </main>
  )
}