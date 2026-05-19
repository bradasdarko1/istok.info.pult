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
  title: 'SEĆANJE NA VOJVODU RADOMIRA PUTNIKA — STRATEGA KOJI JE OBELEŽIO ISTORIJU SRBIJE',
  date: 'Objavljeno: 19. maj 2026.',
  lead: '„Otadžbina se brani znanjem, čašću i slogom.“ Ovim rečima najpreciznije se opisuje nasleđe vojvode Radomir Putnik, jednog od najvećih vojnih umova koje je Srbija imala. Kao načelnik Vrhovne komande, predvodio je srpsku vojsku kroz najteže trenutke Balkanskih ratova i Prvog svetskog rata, ostavljajući dubok trag u borbi za slobodu.',
  paragraphs: [
    'Kao načelnik Vrhovne komande, Putnik je vodio srpsku vojsku tokom Balkanskih ratova i Prvog svetskog rata, u vremenu kada je opstanak države bio doveden u pitanje. Uprkos brojnim izazovima, pokazao je izuzetnu sposobnost strateškog razmišljanja, hladnokrvnost i odlučnost u donošenju ključnih odluka.',
    'Pod njegovim rukovodstvom srpska vojska izvojevala je velike pobede na Ceru i Kolubari — bitkama koje su ostale simbol otpora, hrabrosti i vere u slobodu. U tim trenucima, Srbija je pokazala da snaga naroda ne leži samo u brojnosti, već u jedinstvu, disciplini i spremnosti na žrtvu.',
    'Iako narušenog zdravlja, vojvoda Putnik nije napuštao svoju dužnost. Ostao je uz vojsku i narod do kraja, deleći sudbinu zemlje kojoj je posvetio čitav život. Njegova posvećenost i lični primer ostaju trajna inspiracija generacijama koje dolaze.',
    'Danas, sa poštovanjem i zahvalnošću, sećamo se vojvode Radomira Putnika — čoveka koji je simbolizovao čast, odgovornost i nepokolebljivu veru u slobodu.',
    'Večna slava i hvala vojvodi Radomiru Putniku.'
  ],
  
  highlight1: 'Pod njegovim rukovodstvom izvojevane su istorijske pobede na Ceru i Kolubari, gde je srpska vojska pokazala izuzetnu hrabrost, disciplinu i snagu uprkos nadmoćnijem neprijatelju.',
  highlight2: 'Iako narušenog zdravlja, vojvoda Putnik ostao je veran svojoj vojsci i narodu do samog kraja — simbol časti, odgovornosti i bezuslovne odanosti otadžbini.',
}

const ruText = {
  category: 'Новости',
  title: 'ПАМЯТЬ О ВОЕВОДЕ РАДОМИРЕ ПУТНИКЕ — СТРАТЕГЕ, ОСТАВИВШЕМ СЛЕД В ИСТОРИИ СЕРБИИ',
  date: 'Опубликовано: 19 мая 2026 г.',
  lead: '«Родину защищают знанием, честью и единством». Эти слова точно отражают наследие воеводы Radomir Putnik — одного из величайших военачальников в истории Сербии. В должности начальника Верховного командования он вел сербскую армию через самые тяжелые испытания Балканских войн и Первой мировой войны.',
  paragraphs: [
    'В должности начальника Верховного командования Путник руководил сербской армией в годы Балканских войн и Первой мировой войны — в период, когда само существование государства оказалось под угрозой. Несмотря на сложнейшие условия, он проявил выдающиеся стратегические способности, хладнокровие и решительность.',
    'Под его командованием сербская армия одержала важнейшие победы при Цере и Колубаре — сражениях, ставших символом мужества, стойкости и веры в победу. Эти победы показали, что сила народа заключается не только в численности, но и в единстве, дисциплине и готовности к самопожертвованию.',
    'Несмотря на ухудшение здоровья, воевода Путник до конца оставался со своей армией и народом, разделяя судьбу своей страны. Его преданность делу и личный пример навсегда останутся источником вдохновения.',
    'Сегодня мы с глубоким уважением вспоминаем воеводу Радомира Путника — человека, олицетворяющего честь, долг и непоколебимую веру в свободу.',
    'Вечная слава и благодарность воеводе Радомиру Путнику.'
  ],
  
  highlight1: 'Под его руководством были одержаны ключевые победы при Цере и Колубаре, где сербская армия проявила мужество и стойкость перед значительно превосходящими силами противника.',
  highlight2: 'Несмотря на ухудшение здоровья, Путник оставался рядом со своей армией и народом до конца, став символом чести, дисциплины и самоотверженного служения Родине.',
}

export default function SecanjeNaVojvoduPutnikaPage() {
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
            src="/static/images/radomir-putnik.jpg"
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

          <CommentsSection postSlug="secanje-na-vojvodu-putnika" />
        </motion.div>
      </article>
    </main>
  )
}