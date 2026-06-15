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
  title: 'Na današnji dan: Incident na Čukur česmi koji je ubrzao oslobođenje Srbije',
  date: 'Objavljeno: 15. jun 2026.',
  lead: 'Na današnji dan, 15. juna 1862. godine, dogodio se incident na Čukur česmi u Beogradu, jedan od najznačajnijih događaja u borbi Srbije za konačno oslobođenje od osmanske vlasti.',
  paragraphs: [
    'Povod za sukob bio je događaj između srpskog dečaka-šegrta Save Petkovića i turskih vojnika na Čukur česmi. Incident je ubrzo prerastao u oružane sukobe između Srba i Turaka širom grada. Napetosti su kulminirale turskim bombardovanjem Beograda, koje je izazvalo velika razaranja i stradanje civilnog stanovništva.',
    'Ovaj događaj imao je snažan odjek u Srbiji i Evropi, a posledice su doprinele daljem slabljenju turskog uticaja i učvrstile odlučnost srpskog naroda da nastavi borbu za potpunu slobodu i državnu samostalnost.'
  ],
  
  highlight1: 'Sukob kod Čukur česme 15. juna 1862. godine prerastao je u događaj koji je promenio tok srpske istorije.',
  highlight2: 'Tursko bombardovanje Beograda nakon incidenta dodatno je učvrstilo težnju srpskog naroda ka potpunoj slobodi i nezavisnosti.',
}

const ruText = {
  category: 'Новости',
  title: 'В этот день: Инцидент у Чукур-чешмы, ускоривший освобождение Сербии',
  date: 'Опубликовано: 15 июня 2026 г.',
  lead: '15 июня 1862 года в Белграде произошёл инцидент у Чукур-чешмы, который стал одним из важнейших событий в истории борьбы Сербии за окончательное освобождение от османского владычества.',
  paragraphs: [
    'Поводом для конфликта стало столкновение между сербским мальчиком-подмастерьем Савой Петковичем и турецкими солдатами у Чукур-чешмы. Вскоре инцидент перерос в вооружённые столкновения между сербами и турками в разных частях города. Напряжение достигло своего пика после бомбардировки Белграда турецкими войсками, что привело к значительным разрушениям и жертвам среди мирного населения.',
    'Эти события получили широкий резонанс как в Сербии, так и в Европе. Их последствия способствовали дальнейшему ослаблению османского влияния и укрепили решимость сербского народа продолжить борьбу за свободу, независимость и собственную государственность.'
  ],
  
  highlight1: 'События у Чукур-чешмы 15 июня 1862 года стали одним из ключевых моментов в борьбе Сербии за свободу.',
  highlight2: 'Последовавшая бомбардировка Белграда укрепила стремление сербского народа к полной независимости и освобождению от османского владычества.',
}

export default function IncidentNaCukurCesmiPage() {
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
            src="/static/images/incident-na-cukur-cesmi.jpeg"
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

          <CommentsSection postSlug="incident-na-cukur-cesmi" />
        </motion.div>
      </article>
    </main>
  )
}