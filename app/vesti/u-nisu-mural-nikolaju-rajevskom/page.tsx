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
  title: 'U Nišu otkriven mural ruskom heroju Nikolaju Rajevskom',
  date: 'Objavljeno: 20. maj 2026.',
  lead: 'U Nišu je danas svečano otkriven mural posvećen heroju Srpsko-turskog rata, ruskom pukovniku Nikolaju Nikolajeviču Rajevskom. Ovaj događaj deo je priprema za obeležavanje 150-godišnjice početka rata, koju će Srbija i Rusija zajednički obeležiti ove jeseni.',
  paragraphs: [
    'Mural, čiji je autor srpski umetnik Sava Mišić, nalazi se u ulici koja nosi ime ovog ruskog dobrovoljca. Otkrivanje su organizovali Ruski dom u Beogradu i Društvo srpsko-ruskog prijateljstva „Bratstvo“ iz Niša.',
    'Svečanosti su prisustvovali brojni zvaničnici i gosti, među kojima direktor Ruskog doma u Beogradu Jevgenij Baranov, direktor Rusko-srpskog humanitarnog centra u Nišu Jevgenij Filatov, kao i predstavnici lokalne samouprave i obrazovnih institucija.',
    'Pukovnik Rajevski poticao je iz ugledne vojne porodice – bio je unuk generala Nikolaja Rajevskog, heroja Otadžbinskog rata 1812. godine, kao i potomak velikog ruskog naučnika Mihaila Lomonosova.',
    'Tokom Srpsko-turskog rata 1876. godine komandovao je desnim krilom srpske vojske, u čijem sastavu je bio veliki broj ruskih dobrovoljaca. Već u avgustu iste godine poginuo je u borbi kod sela Gornji Adrovac, ostavivši dubok trag u istoriji srpsko-ruskih odnosa.',
    'Na Balkanu je u tom periodu ratovalo između četiri i pet hiljada ruskih dobrovoljaca, od kojih je više od polovine izgubilo život. Pogibija Rajevskog ostala je jedan od najsnažnijih simbola tog vremena.',
    'Na mestu njegove pogibije početkom 20. veka podignut je Hram Svete Trojice, zadužbina njegove majke. Prema mišljenju brojnih istoričara i književnih stručnjaka, Rajevski je poslužio kao inspiracija za lik grofa Vronskog u romanu „Ana Karenjina“.',
    'Detaljnije informacije o pukovniku Rajevskom dostupne su na sajtu Ruskog naučnog instituta u Beogradu.'
  ],
  
  highlight1: 'Mural u čast ruskog pukovnika otkriven je povodom 150 godina od početka Srpsko-turskog rata.',
  highlight2: 'Rajevski, koji je poginuo kod Gornjeg Adrovca 1876. godine, ostao je simbol rusko-srpskog bratstva.',
}

const ruText = {
  category: 'Новости',
  title: 'В Нише открыт мурал в честь русского героя Николая Раевского',
  date: 'Опубликовано: 20 мая 2026 г.',
  lead: 'В городе Ниш состоялось торжественное открытие мурала, посвящённого герою Сербско-турецкой войны — русскому полковнику Николаю Николаевичу Раевскому. Это событие стало частью подготовки к празднованию 150-летия начала войны, которое Сербия и Россия отметят этой осенью.',
  paragraphs: [
    'Автором мурала является сербский художник Сава Мишич. Он расположен на улице, носящей имя русского добровольца. Организаторами выступили Русский дом в Белграде и Общество сербско-русской дружбы «Братство» из Ниша.',
    'На церемонии присутствовали представители официальных и общественных структур, в том числе директор Русского дома в Белграде Евгений Баранов, директор Российско-сербского гуманитарного центра в Нише Евгений Филатов, а также представители местной власти и образовательных учреждений.',
    'Полковник Раевский происходил из известной военной династии — он был внуком героя Отечественной войны 1812 года генерала Николая Раевского и потомком великого русского учёного Михаила Ломоносова.',
    'Во время Сербско-турецкой войны 1876 года он командовал правым крылом сербской армии, значительную часть которой составляли русские добровольцы. Уже в августе того же года он героически погиб в бою у села Горний Адровац.',
    'Всего на Балканы прибыло от четырёх до пяти тысяч русских добровольцев, более половины из которых погибли. Гибель Раевского стала одним из самых символичных событий той войны.',
    'На месте его гибели в начале XX века был построен храм Святой Троицы на средства его матери. По мнению ряда исследователей, Раевский послужил прототипом графа Вронского в романе Льва Толстого «Анна Каренина».',
    'Подробнее о полковнике Раевском можно узнать на сайте Русского научного института в Белграде.'
  ],
  
  highlight1: 'Мурал посвящён 150-летию начала Сербско-турецкой войны.',
  highlight2: 'Раевский, погибший в 1876 году, стал символом братства сербского и русского народов.',
}

export default function UNisuMuralNikolajuRajevskomPage() {
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
            src="/static/images/nikolaj-rajevski-mural.jpeg"
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

          <CommentsSection postSlug="u-nisu-mural-nikolaju-rajevskom" />
        </motion.div>
      </article>
    </main>
  )
}