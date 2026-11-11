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
  title: '11. NOVEMBAR — DAN KADA JE UTIHNULO ORUŽJE, A SRBIJA OSTALA NA NOGAMA',
  date: 'Objavljeno: 11. novembar 2026.',
  lead: 'Na današnji dan, 11. novembra 1918. godine, u 11 časova, stupilo je na snagu primirje kojim su okončane borbe na Zapadnom frontu Prvog svetskog rata. Posle četiri godine nezapamćenog stradanja, Evropa je konačno dočekala tišinu. Za Srbiju, taj trenutak predstavljao je potvrdu slobode plaćene jednom od najviših cena u njenoj istoriji.',
  paragraphs: [
    'Od Cera i Kolubare, preko povlačenja kroz albanske planine i Krfa, do Kajmakčalana i proboja Solunskog fronta, srpski vojnik prošao je put koji je postao simbol izdržljivosti, hrabrosti i nepokolebljive vere u otadžbinu.',
    'U septembru 1918. godine, srpska vojska je zajedno sa saveznicima probila Solunski front i krenula u oslobađanje zemlje. Beograd je oslobođen 1. novembra, a Novi Sad 9. novembra 1918. godine.',
    'Srbija je iz Velikog rata izašla kao pobednica, ali sa strašnim ljudskim gubicima. Čitave porodice bile su ugašene, sela opustošena, a generacije zauvek obeležene ratom. Ipak, narod koji je podneo takvu žrtvu uspeo je da sačuva svoju državu i slobodu.',
    'Zato danas na grudima nosimo Natalijinu ramondu, cvet koji može da oživi i nakon što se osuši. Ona nas podseća na Srbiju koja je, uprkos stradanju, uspela ponovo da se uzdigne.',
    'Jedanaesti novembar nije samo datum završetka ratnih borbi. To je dan kada se sećamo onih koji nisu dočekali slobodu koju su izborili za nas.',
    'Neka je večna slava srpskim junacima, znanim i neznanim, koji su svoje živote položili za otadžbinu.',
    'Slava im i hvala!'
  ],
  
  highlight1: 'Srbija je iz Velikog rata izašla kao pobednica, ali sa strašnim ljudskim gubicima. Njena sloboda plaćena je žrtvom koju generacije ne smeju zaboraviti.',
  highlight2: 'Jedanaesti novembar nije samo datum završetka ratnih borbi. To je dan kada se sećamo onih koji nisu dočekali slobodu koju su izborili za nas.',
}

const ruText = {
  category: 'Новости',
  title: '11 НОЯБРЯ — ДЕНЬ, КОГДА ЗАМОЛЧАЛО ОРУЖИЕ, А СЕРБИЯ ВЫСТОЯЛА',
  date: 'Опубликовано: 11 ноября 2026 г.',
  lead: 'В этот день, 11 ноября 1918 года, в 11 часов вступило в силу перемирие, положившее конец боевым действиям на Западном фронте Первой мировой войны. После четырёх лет невиданных страданий Европа наконец дождалась тишины. Для Сербии этот момент стал подтверждением свободы, завоёванной ценой огромных жертв.',
  paragraphs: [
    'От Цера и Колубары, через отступление по албанским горам и остров Корфу, до Каймакчалана и прорыва Салоникского фронта сербский солдат прошёл путь, ставший символом стойкости, мужества и непоколебимой веры в Отечество.',
    'В сентябре 1918 года сербская армия вместе с союзниками прорвала Салоникский фронт и начала освобождение родной земли. Белград был освобождён 1 ноября, а Нови-Сад — 9 ноября 1918 года.',
    'Сербия вышла из Великой войны победительницей, но понесла страшные человеческие потери. Целые семьи исчезли, сёла были опустошены, а судьбы поколений навсегда отмечены войной. И всё же народ, перенёсший такие испытания, сумел сохранить своё государство и свободу.',
    'Поэтому сегодня символом памяти служит цветок рамонды Наталии, способный оживать даже после полного высыхания. Он напоминает нам о Сербии, которая, несмотря на все страдания, сумела вновь подняться.',
    'Одиннадцатое ноября — это не просто дата окончания боевых действий. Это день памяти о тех, кто не дожил до свободы, завоёванной для нас.',
    'Вечная слава сербским героям, известным и безымянным, отдавшим свои жизни за Отечество.',
    'Вечная им слава и благодарность!'

  ],
  
  highlight1: 'Сербия вышла из Великой войны победительницей, но понесла страшные человеческие потери. Её свобода была оплачена жертвой, которую поколения не вправе забывать.',
  highlight2: 'Одиннадцатое ноября — это не просто дата окончания боевых действий. Это день памяти о тех, кто не дожил до свободы, завоёванной для нас.',
}

export default function DanKadaJeUtihnuloOruzjeASrbijaOstalaNaNogamaPage() {
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
            src="/static/images/11-novembar.jpg"
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

          <CommentsSection postSlug="dan-kada-je-utihnulo-oruzje-a-srbija-ostala-na-nogama" />
        </motion.div>
      </article>
    </main>
  )
}