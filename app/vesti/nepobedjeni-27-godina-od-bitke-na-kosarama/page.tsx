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
  title: 'Nepobeđeni: 27 godina od završetka Bitke na Košarama',
  date: 'Objavljeno: 10. jun 2026.',
  lead: 'Pre 27 godina, 10. juna 1999. godine, završena je Bitka na Košarama, jedna od najznačajnijih i najtežih bitaka tokom sukoba na Kosovu i Metohiji. Tokom 67 dana neprekidnih borbi, pripadnici Vojske Jugoslavije branili su državnu granicu od napada višestruko brojnijih protivničkih snaga.',
  paragraphs: [
    'Prvi udar napada pretrpela je mala grupa graničara koja je, uprkos brojčanoj i tehničkoj nadmoći protivnika, uspela da zadrži svoje položaje i spreči prodor prema unutrašnjosti Kosova i Metohije. U izuzetno teškim uslovima, vojnici su pokazali visok stepen discipline, hrabrosti i istrajnosti.',
    'Bitka je trajala od 9. aprila do 10. juna 1999. godine. Tokom tog perioda vođene su intenzivne borbe u kojima je odbrana granice ostala neprobijena. Povlačenje jedinica sa položaja na Košarama usledilo je nakon potpisivanja Vojno-tehničkog sporazuma u Kumanovu 9. juna 1999. godine i stupanja na snagu prekida vatre.',
    'Dana 10. juna, pripadnici Prištinskog korpusa Vojske Jugoslavije napustili su svoje položaje u skladu sa postignutim sporazumom. Sećanje na Košare i danas zauzima posebno mesto u kolektivnom pamćenju Srbije kao simbol požrtvovanosti, istrajnosti i odbrane zemlje.'
  ],
  
  highlight1: 'Bitka na Košarama okončana je 10. juna 1999. godine nakon 67 dana neprekidnih borbi, tokom kojih pripadnici Vojske Jugoslavije nisu dozvolili proboj preko državne granice.',
  highlight2: 'Položaji na Košarama napušteni su tek nakon stupanja na snagu Vojno-tehničkog sporazuma iz Kumanova, a ne usled pritiska protivničkih snaga.',
}

const ruText = {
  category: 'Новости',
  title: 'Непобежденные: 27 лет со дня завершения битвы на Кошарах',
  date: 'Опубликовано: 10 июня 2026 г.',
  lead: '27 лет назад, 10 июня 1999 года, завершилась битва на Кошарах — одно из самых значимых и тяжёлых сражений периода конфликта в Косово и Метохии. В течение 67 дней непрерывных боёв военнослужащие Армии Югославии обороняли государственную границу от атак многократно превосходящих сил противника.',
  paragraphs: [
    'Первый удар приняли на себя пограничники, которые, несмотря на численное и техническое превосходство противостоящих сил, сумели удержать свои позиции и не допустить продвижения вглубь Косово и Метохии. В крайне сложных условиях солдаты проявили высокий уровень дисциплины, мужества и стойкости.',
    'Битва продолжалась с 9 апреля по 10 июня 1999 года. На протяжении всего этого времени велись интенсивные боевые действия, однако оборона границы не была прорвана. Отвод подразделений с позиций на Кошарах произошёл после подписания Военно-технического соглашения в Куманово 9 июня 1999 года и вступления в силу режима прекращения огня.',
    '10 июня военнослужащие Приштинского корпуса Армии Югославии покинули свои позиции в соответствии с достигнутыми договорённостями. Память о Кошарах и сегодня занимает особое место в исторической памяти Сербии как символ самоотверженности, стойкости и защиты своей страны.'
  ],
  
  highlight1: 'Битва на Кошарах завершилась 10 июня 1999 года после 67 дней непрерывных боёв, в ходе которых военнослужащие Армии Югославии не допустили прорыва через государственную границу.',
  highlight2: 'Позиции на Кошарах были оставлены только после вступления в силу Военно-технического соглашения в Куманово, а не под давлением противостоящих сил.',
}

export default function Nepobedjeni27GodinaOdBitkeNaKosaramaPage() {
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
            src="/static/images/kosaree.jpeg"
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

          <CommentsSection postSlug="nepobedjeni-27-godina-od-bitke-na-kosarama" />
        </motion.div>
      </article>
    </main>
  )
}