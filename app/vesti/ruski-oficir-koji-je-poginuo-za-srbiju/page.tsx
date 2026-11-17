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
  title: 'RUSKI OFICIR KOJI JE POGINUO ZA SRBIJU — NIKOLAJ RAJEVSKI',
  date: 'Objavljeno: 17. novembar 2026.',
  lead: 'Godine 1876, kada je Srbija započela rat protiv Osmanskog carstva, hiljade ruskih dobrovoljaca krenule su da pomognu srpskom narodu u borbi za oslobođenje. Među njima se nalazio i pukovnik Nikolaj Nikolajevič Rajevski, ruski oficir plemićkog porekla, čije će ime zauvek ostati upisano u istoriju srpsko-ruskih odnosa.',
  paragraphs: [
    'Rajevski je poticao iz ugledne ruske vojne porodice. Njegov deda, general Nikolaj Rajevski, bio je jedan od istaknutih vojskovođa u ratu protiv Napoleona 1812. godine. Nastavljajući porodičnu vojničku tradiciju, Nikolaj je odlučio da svoje iskustvo stavi u službu srpske vojske.',
    'Tokom Prvog srpsko-turskog rata, ruski dobrovoljci, predvođeni generalom Mihailom Černjajevim, učestvovali su u teškim borbama na Moravskom frontu. Rajevski se posebno istakao u borbama kod Aleksinca, gde je srpska vojska pokušavala da zaustavi napredovanje osmanskih snaga.',
    'Dana 1. septembra 1876. godine, odnosno 20. avgusta po tadašnjem julijanskom kalendaru, pukovnik Rajevski poginuo je u bici kod Gornjeg Adrovca. Prema istorijskim svedočenjima, smrtno je pogođen dok je pokušavao da organizuje odbranu i zaustavi neprijateljski prodor.',
    'Njegovo telo preneto je u Rusiju, dok se prema predanju njegovo srce čuva u srpskoj zemlji, kod manastira Sveti Roman. Na mestu njegove pogibije 1903. godine podignuta je spomen-crkva Svete Trojice, poznata i kao Ruska crkva, koja i danas svedoči o njegovoj žrtvi.',
    'Posebno zanimljiva ostala je veza Nikolaja Rajevskog sa ruskom književnošću. Smatra se da je njegov život poslužio kao jedna od inspiracija Lavu Tolstoju za lik grofa Alekseja Vronskog u romanu Ana Karenjina. U završnici romana Vronski odlazi kao dobrovoljac u Srbiju, čime se književna priča simbolično prepliće sa stvarnim istorijskim događajima.',
    'Nikolaj Rajevski ostao je upamćen kao ruski oficir koji je život položio daleko od svoje otadžbine, boreći se za slobodu Srbije. Njegova sudbina predstavlja jedno od najupečatljivijih svedočanstava o istorijskim vezama srpskog i ruskog naroda.'
  ],
  
  highlight1: 'Godine 1876. hiljade ruskih dobrovoljaca došle su u Srbiju da pomognu u borbi protiv Osmanskog carstva. Među njima bio je pukovnik Nikolaj Rajevski, koji je 1. septembra poginuo kod Gornjeg Adrovca, pokušavajući da zaustavi neprijateljski napad.',
  highlight2: 'Na mestu pogibije Nikolaja Rajevskog 1903. godine podignuta je spomen-crkva Svete Trojice. Njegova sudbina povezuje se i sa likom grofa Vronskog iz Tolstojevog romana „Ana Karenjina“, čime je priča o ruskom dobrovoljcu postala deo istorijskog i književnog pamćenja dva naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'РУССКИЙ ОФИЦЕР, ПОГИБШИЙ ЗА СЕРБИЮ — НИКОЛАЙ РАЕВСКИЙ',
  date: 'Опубликовано: 17 ноября 2026 г.',
  lead: 'В 1876 году, когда Сербия начала войну против Османской империи, тысячи русских добровольцев отправились на помощь сербскому народу в его борьбе за освобождение. Среди них был полковник Николай Николаевич Раевский — русский офицер дворянского происхождения, имя которого навсегда вошло в историю сербско-русских отношений.',
  paragraphs: [
    'Раевский происходил из известной русской военной семьи. Его дед, генерал Николай Раевский, был одним из выдающихся военачальников Отечественной войны 1812 года. Продолжая семейную военную традицию, Николай решил применить свой опыт на службе сербской армии.',
    'Во время Первой сербско-турецкой войны русские добровольцы под командованием генерала Михаила Черняева участвовали в тяжёлых боях на Моравском фронте. Раевский особенно отличился в сражениях под Алексинцем, где сербские войска пытались остановить наступление османских сил.',
    '1 сентября 1876 года, или 20 августа по действовавшему тогда юлианскому календарю, полковник Раевский погиб в сражении у села Горни-Адровац. Согласно историческим свидетельствам, он был смертельно ранен, когда пытался организовать оборону и остановить продвижение противника.',
    'Его тело было перевезено в Россию, а сердце, согласно преданию, осталось в сербской земле, возле монастыря Святого Романа. В 1903 году на месте его гибели была возведена мемориальная церковь Святой Троицы, известная также как Русская церковь, которая и сегодня напоминает о его подвиге.',
    'Особый интерес представляет связь Николая Раевского с русской литературой. Считается, что его судьба стала одним из источников вдохновения Льва Толстого при создании образа графа Алексея Вронского в романе Анна Каренина. В заключительной части произведения Вронский отправляется добровольцем в Сербию, благодаря чему литературный сюжет символически переплетается с реальными историческими событиями.',
    'Николай Раевский остался в памяти как русский офицер, отдавший свою жизнь вдали от родины, сражаясь за свободу Сербии. Его судьба стала одним из наиболее ярких свидетельств исторических связей сербского и русского народов.'

  ],
  
  highlight1: 'В 1876 году тысячи русских добровольцев прибыли в Сербию, чтобы помочь в борьбе против Османской империи. Среди них был полковник Николай Раевский, погибший 1 сентября у села Горни-Адровац при попытке остановить наступление противника.',
  highlight2: 'В 1903 году на месте гибели Николая Раевского была построена мемориальная церковь Святой Троицы. Его судьбу также связывают с образом графа Вронского из романа Льва Толстого «Анна Каренина», благодаря чему история русского добровольца сохранилась и в исторической, и в литературной памяти двух народов.',
}

export default function RuskiOficirKojiJePoginuoZaSrbijuPage() {
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
            src="/static/images/ruski-oficir.jpg"
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

          <CommentsSection postSlug="ruski-oficir-koji-je-poginuo-za-srbiju" />
        </motion.div>
      </article>
    </main>
  )
}