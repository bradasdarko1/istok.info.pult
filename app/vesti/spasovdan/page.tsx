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
  title: 'SPASOVDAN – PRAZNIK HRISTOVOG VAZNESENJA KOJI SPAJA VERU, ISTORIJU I TRADICIJU',
  date: 'Objavljeno: 21. maj 2026.',
  lead: 'Srpska pravoslavna crkva i vernici danas obeležavaju Spasovdan, praznik Hristovog vaznesenja, jedan od najvažnijih datuma u hrišćanskom kalendaru. Ovaj veliki praznik slavi se četrdeset dana nakon Vaskrsa i podseća na trenutak kada se Isus Hristos uzneo na nebo, završivši svoje zemaljsko poslanje.',
  paragraphs: [
    'Spasovdan je pokretni praznik koji se uvek obeležava u četvrtak, šeste nedelje nakon Vaskrsa, odnosno četrdeset dana posle njegovog praznovanja. Ujedno dolazi deset dana pre Duhova i zauzima posebno mesto među praznicima posvećenim Hristu.',
    'Praznik simbolizuje dan kada se Isus Hristos poslednji put javio svojim učenicima. Tom prilikom im je poverio zadatak da šire njegovu veru i propovedaju Jevanđelje po celom svetu. Nakon toga, na Maslinskoj gori, pred njihovim očima, uzneo se na nebo, čime je okončano njegovo delo spasenja.',
    'Učenici su potom nastavili njegovu misiju, šireći hrišćansko učenje i veru među narodima, što predstavlja temelj današnje crkve i verovanja.',
    'Spasovdan ima i značajnu istorijsku dimenziju za srpski narod. Na ovaj praznik 1349. godine usvojen je Dušanov zakonik, jedan od najvažnijih pravnih dokumenata srednjovekovne Srbije, koji je dopunjen pet godina kasnije, takođe na isti dan.'
  ],
  
  highlight1: 'Spasovdan podseća na trenutak kada je Hristos poverio učenicima misiju širenja vere širom sveta.',
  highlight2: 'Na isti praznik usvojen je Dušanov zakonik – temelj pravnog poretka srednjovekovne Srbije.',
}

const ruText = {
  category: 'Новости',
  title: 'СПАСОВДАН — ПРАЗДНИК ВОЗНЕСЕНИЯ ХРИСТОВА, ОБЪЕДИНЯЮЩИЙ ВЕРУ, ИСТОРИЮ И ТРАДИЦИИ',
  date: 'Опубликовано: 21 мая 2026 г.',
  lead: 'Сербская православная церковь и верующие сегодня отмечают Спасовдан — праздник Вознесения Христова, один из важнейших дней в христианском календаре. Он празднуется через сорок дней после Пасхи и напоминает о моменте, когда Иисус Христос вознесся на небо, завершив свою земную миссию.',
  paragraphs: [
    'Спасовдан является переходящим праздником и всегда отмечается в четверг, на шестой неделе после Пасхи, то есть через сорок дней после её празднования. Он также приходится на десять дней до Пятидесятницы и занимает особое место среди праздников, посвященных Христу.',
    'Этот день символизирует момент, когда Иисус Христос в последний раз явился своим ученикам. Тогда он поручил им идти по миру и проповедовать Евангелие. После этого, на Масличной горе, на глазах у всех, он вознесся на небо, завершив своё дело спасения.',
    'Ученики продолжили его миссию, распространяя христианскую веру среди народов, что стало основой современной церкви.',
    'Праздник имеет и важное историческое значение для сербского народа. Именно в этот день в 1349 году был принят Законник царя Душана — один из важнейших правовых документов средневековой Сербии, который был дополнен спустя пять лет, также на Спасовдан.'
  ],
  
  highlight1: 'Спасовдан напоминает о моменте, когда Христос поручил ученикам нести веру по всему миру.',
  highlight2: 'Именно в этот праздник был принят Законник Душана — основа правового порядка средневековой Сербии.',
}

export default function SpasovdanPage() {
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
            src="/static/images/spasovdan.jpg"
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

          <CommentsSection postSlug="spasovdan" />
        </motion.div>
      </article>
    </main>
  )
}