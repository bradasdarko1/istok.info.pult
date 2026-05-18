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
  title: '38 DANA PAKLA: DVOJICA SRPSKIH VOJNIKA PREŽIVELA NELJUDSKU TORTURU OD KOŠARA DO TAJNIH ZATVORA U NEMAČKOJ',
  date: 'Objavljeno: 18. maj 2026.',
  lead: 'Na slici se nalaze srpski vojnici Šefko Tairović iz Niša i Boban Milenković iz Vranja, koji su tokom NATO agresije 1999. godine prošli kroz 38 dana nezapamćene torture u logorima na Kosmetu, Albaniji i tajnim zatvorima u Nemačkoj – ali nisu slomljeni.',
  paragraphs: [
    'Na slici se nalaze srpski vojnici Šefko Tairović iz Niša i Boban Milenković iz Vranja. Oni su zarobljeni 13. aprila 1999. godine tokom redovne patrole kod Junika, kada su se vraćali na karaulu Košare.',
    'Pripadnici albanskih terorističkih formacija su ih razoružali, vezali i prekrili im oči, nakon čega su ih kamionom odveli u jedan od logora. Tamo su tokom sedam dana bili izloženi svakodnevnom mučenju – prebijani, udarani kundacima automatskih pušaka i držani bez hrane, uz minimalne količine vode.',
    'Nakon toga su prebačeni na tajnu lokaciju u Albaniji, gde su bili zatvoreni u podrumu. Mučenje je nastavljeno, uz konstantne pritiske da priznaju kako su „teroristi koji su ubijali nevine Albance“. Tek tada su prvi put, posle sedam dana, dobili hranu.',
    'Posle više od dve nedelje torture u logorima na Kosmetu i u Albaniji, početkom maja su helikopterom prebačeni u jedan od zatvora u Nemačkoj, u Manhajmu, za koji se veruje da je bio pod kontrolom stranih službi.',
    'Tokom narednih deset dana, uz pomoć prevodioca, konstantno su ispitivani o srpskoj vojsci – njenom brojnom stanju, rasporedu i vojnoj tehnici. Sve vreme su bili sa povezom preko očiju.',
    'Od njih je zahtevano da potpišu izjave u kojima priznaju navodne ratne zločine, uz obećanje da će biti pušteni. I pored ukupno 38 dana torture, ni Tairović ni Milenković nisu pristali da potpišu niti da iznesu bilo kakve informacije.',
    'Na kraju su oslobođeni 21. maja 1999. godine, posredstvom Crvenog krsta, i vraćeni u Saveznu Republiku Jugoslaviju, sa teškim fizičkim i psihičkim posledicama.'
  ],
  
  highlight1: 'Zarobljeni 13. aprila 1999. kod Junika tokom redovne patrole, Tairović i Milenković bili su razoružani, vezani i odvedeni u logore gde su sedam dana svakodnevno mučeni bez hrane, uz batine i udarce u glavu kundacima pušaka.',
  highlight2: 'Uprkos 38 dana torture – od Kosmeta, preko Albanije, do tajnog zatvora u Manhajmu – odbili su da priznaju lažne optužbe i potpišu izjave, ostajući verni zakletvi i državi do kraja.',
}

const ruText = {
  category: 'Новости',
  title: '38 ДНЕЙ АДА: ДВА СЕРБСКИХ СОЛДАТА ВЫЖИЛИ ПОСЛЕ ЖЕСТОКИХ ПЫТОК ОТ КОШАР ДО ТАЙНЫХ ТЮРЕМ В ГЕРМАНИИ',
  date: 'Опубликовано: 18 мая 2026 г.',
  lead: 'На фотографии изображены сербские солдаты Шефко Таирович из Ниша и Бобан Миленкович из Враня, которые во время агрессии НАТО в 1999 году пережили 38 дней жестоких пыток в лагерях на Косово и Метохии, в Албании и в тайных тюрьмах Германии — но не были сломлены.',
  paragraphs: [
    'На фотографии изображены сербские солдаты Шефко Таирович из Ниша и Бобан Миленкович из Враня. Они были захвачены 13 апреля 1999 года во время регулярного патрулирования у Юника, когда возвращались на заставу Кошаре.',
    'Боевики албанских террористических формирований разоружили их, связали и закрыли им глаза, после чего на грузовике доставили в один из лагерей. Там в течение семи дней они подвергались постоянным пыткам — их избивали, наносили удары прикладами автоматов и держали без пищи, давая лишь минимальное количество воды.',
    'После этого их перевезли в тайное место в Албании, где они содержались в подвале. Пытки продолжились, сопровождаясь постоянным давлением с требованием признать, что они являются «террористами, убивавшими мирных албанцев». Лишь тогда, спустя семь дней, они впервые получили пищу.',
    'После более чем двух недель пыток в лагерях на Косово и Метохии и в Албании, в начале мая их вертолетом доставили в один из тюремных объектов в Германии, в Мангейме, который, по имеющимся данным, находился под контролем иностранных служб.',
    'В течение следующих десяти дней, с участием переводчика, их постоянно допрашивали о сербской армии — ее численности, расположении и военной технике. Все это время они находились с повязками на глазах.',
    'От них требовали подписать заявления с признанием так называемых «военных преступлений» в обмен на освобождение. Несмотря на 38 дней пыток, ни Таирович, ни Миленкович не согласились ни на какие признания и не предоставили никакой информации.',
    'В конечном итоге они были освобождены 21 мая 1999 года при посредничестве Красного Креста и возвращены в Союзную Республику Югославию с тяжелыми физическими и психологическими последствиями.'
  ],
  
  highlight1: 'Захваченные 13 апреля 1999 года у Юника во время патрулирования, они были разоружены, связаны и отправлены в лагеря, где в течение семи дней подвергались ежедневным избиениям и пыткам без пищи.',
  highlight2: 'Несмотря на 38 дней пыток — от Косово и Метохии, через Албанию до тайной тюрьмы в Мангейме — они отказались подписывать ложные признания и остались верны присяге до конца.',
}

export default function Pakla38DanaZaSrpskeVojnikePage() {
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
            src="/static/images/dvojica-srpskih-vojnika.jpg"
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

          <CommentsSection postSlug="pakla-38-dana-za-srpske-vojnike" />
        </motion.div>
      </article>
    </main>
  )
}