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
  title: 'MIĆA ŽIVOJINOVIĆ U „RAZGOVORIMA U ISTOKU“ – TAJNE O DRAŽI MIHAILOVIĆU KOJE JAVNOST DO SADA NIJE ČULA',
  date: 'Objavljeno: 29. oktobar 2026.',
  lead: 'Istorija ne otkriva uvek sve svoje tajne. Neke priče ostaju skrivene decenijama, a pojedina svedočenja nikada ne pronađu put do šire javnosti.',
  paragraphs: [
    'U narednoj epizodi podkasta „Razgovori u Istoku“, naš gost biće Mića Živojinović, sa kojim otvaramo jednu od najkontroverznijih i najintrigantnijih tema srpske istorije – život, delovanje i sudbinu generala Dragoljuba Draže Mihailovića.',
    'Šta se zaista događalo iza kulisa istorijskih događaja? Koje su činjenice ostale nepoznate javnosti? I koliko toga o Draži Mihailoviću još uvek ne znamo?',
    'U razgovoru koji sledi, naš gost najavljuje dosad javno neizneta saznanja, malo poznate detalje i priče koje bi mogle otvoriti potpuno nova pitanja o događajima iz prošlosti.',
    'Neke istorijske priče nikada nisu ispričane. Možda je došlo vreme da se čuju.',
    'Pratite „Razgovore u Istoku“ i ne propustite epizodu koja obećava da će podstaći brojna pitanja i otvoriti prostor za drugačije sagledavanje istorije.'
  ],
  
  highlight1: 'TAJNE O DRAŽI MIHAILOVIĆU KOJE JAVNOST DO SADA NIJE ČULA',
  highlight2: 'ISTORIJA IMA SVOJE TAJNE. VREME JE DA SE OTVORE.',
}

const ruText = {
  category: 'Новости',
  title: 'МИЧА ЖИВОИНОВИЧ В «РАЗГОВОРАХ НА ВОСТОКЕ» — ТАЙНЫ О ДРАЖЕ МИХАЙЛОВИЧЕ, О КОТОРЫХ ОБЩЕСТВЕННОСТЬ ДО СИХ ПОР НЕ СЛЫШАЛА',
  date: 'Опубликовано: 29 октябрь 2026 г.',
  lead: 'История не всегда раскрывает все свои тайны. Некоторые события остаются скрытыми десятилетиями, а отдельные свидетельства так и не становятся достоянием широкой общественности.',
  paragraphs: [
    'В следующем выпуске подкаста «Разговоры на Востоке» нашим гостем станет Мича Живоинович, с которым мы затронем одну из самых противоречивых и интригующих тем сербской истории — жизнь, деятельность и судьбу генерала Драголюба Дражи Михайловича.',
    'Что на самом деле происходило за кулисами исторических событий? Какие факты остались неизвестными широкой общественности? И как много мы до сих пор не знаем о Драже Михайловиче?',
    'В предстоящем разговоре наш гость обещает поделиться ранее не обнародованными сведениями, малоизвестными подробностями и историями, которые могут поставить совершенно новые вопросы о событиях прошлого.',
    'Некоторые исторические истории так и не были рассказаны. Возможно, пришло время их услышать.',
    'Следите за подкастом «Разговоры на Востоке» и не пропустите выпуск, который обещает вызвать множество вопросов и открыть пространство для нового взгляда на историю.'

  ],
  
  highlight1: 'ТАЙНЫ О ДРАЖЕ МИХАЙЛОВИЧЕ, О КОТОРЫХ ОБЩЕСТВЕННОСТЬ ДО СИХ ПОР НЕ СЛЫШАЛА',
  highlight2: 'У ИСТОРИИ ЕСТЬ СВОИ ТАЙНЫ. ПРИШЛО ВРЕМЯ ИХ РАСКРЫТЬ.',
}

export default function MicaZivojinovicODraziMihajlovicuPage() {
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
            src="/static/images/mica-zivojinovic-o-drazi-mihajlovicu.jpg"
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

          <CommentsSection postSlug="mica-zivojinovic-o-drazi-mihajlovicu" />
        </motion.div>
      </article>
    </main>
  )
}