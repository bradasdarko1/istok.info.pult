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
  title: 'PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA',
  date: 'Objavljeno: 27. maj 2026.',
  lead: 'Na današnji dan, 27. maja 1999. godine, započela je jedna od najtežih i najslavnijih bitaka u novijoj istoriji Srbije — Bitka na Paštriku. Na surovim vrhovima ove planine vodile su se žestoke borbe protiv višestruko brojnijeg neprijatelja koji je pokušao kopneni prodor preko državne granice tokom NATO agresije na Saveznu Republiku Jugoslaviju.',
  paragraphs: [
    'U tim presudnim trenucima, mladi vojnici, graničari i rezervisti legendarne 549. motorizovane brigade postali su živi bedem otadžbine. Danima su odolevali neprekidnim napadima, artiljerijskoj vatri i razornim udarima iz vazduha. Na njihove položaje bacane su „tepih-bombe“ iz strateških bombardera B-52, koje su menjale reljef planine i pretvarale vrhove Paštrika u ognjenu pustoš.',
    'Uprkos paklu koji ih je okruživao, granica nije probijena. Hrabrost srpskih vojnika ostala je simbol otpora, požrtvovanja i nepokolebljive volje da se brani sloboda svoje zemlje.',
    'Mnogi od tih mladih heroja zauvek su ostali na padinama Paštrika, ostavljajući svoje živote kao zalog slobode budućim generacijama. Danas se sa dubokim poštovanjem sećamo svih koji su pali u odbrani otadžbine i podsećamo da su Paštrik i Košare večni simboli srpskog zaveta, časti i besmrtnog herojstva koje nikada ne sme pasti u zaborav.',
    'Slava i hvala junacima Paštrika.'
  ],
  
  highlight1: 'Pod udarima „tepih-bombi“ i NATO avijacije, srpski vojnici odbranili su granicu i sprečili kopneni prodor na Paštriku.',
  highlight2: 'Paštrik i Košare ostaju večni simbol srpske žrtve, hrabrosti i otpora tokom NATO agresije 1999. godine.',
}

const ruText = {
  category: 'Новости',
  title: 'ПАШТРИК — ДЕНЬ, КОГДА СЕРБИЯ ВЫСТОЯЛА ПОД ДОЖДЁМ ОГНЯ И СТАЛИ',
  date: 'Опубликовано: 27 мая 2026 г.',
  lead: '27 мая 1999 года началась одна из самых тяжёлых и героических битв в новейшей истории Сербии — битва на Паштрике. На суровых вершинах этой горы развернулись ожесточённые бои против значительно превосходящих сил противника, пытавшегося прорвать государственную границу во время агрессии НАТО против Союзной Республики Югославии.',
  paragraphs: [
    'В те решающие дни молодые солдаты, пограничники и резервисты легендарной 549-й моторизованной бригады стали живым щитом своей Родины. Они днями выдерживали непрерывные атаки, артиллерийский огонь и разрушительные авиаудары. На их позиции сбрасывались «ковровые бомбы» стратегических бомбардировщиков B-52, которые буквально меняли рельеф горы и превращали вершины Паштрика в огненное поле.',
    'Несмотря на настоящий ад вокруг, граница не была прорвана. Мужество сербских воинов стало символом сопротивления, самопожертвования и непоколебимой воли защищать свободу своей страны.',
    'Многие из этих молодых героев навсегда остались на склонах Паштрика, отдав свои жизни ради свободы будущих поколений. Сегодня мы с глубоким уважением вспоминаем всех павших защитников Отечества и напоминаем, что Паштрик и Кошаре навсегда останутся символами сербского завета, чести и бессмертного героизма, которые никогда не должны быть забыты.',
    'Слава и вечная благодарность героям Паштрика.'
  ],
  
  highlight1: 'Под ударами «ковровых бомб» и авиации НАТО сербские солдаты удержали границу и сорвали попытку наземного прорыва на Паштрике.',
  highlight2: 'Паштрик и Кошаре навсегда останутся символами сербской жертвы, мужества и сопротивления во время агрессии НАТО 1999 года.',
}

export default function BitkaNaPastrikuPage() {
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
            src="/static/images/bitka-pastrik.jpg"
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

          <CommentsSection postSlug="bitka-na-pastriku" />
        </motion.div>
      </article>
    </main>
  )
}