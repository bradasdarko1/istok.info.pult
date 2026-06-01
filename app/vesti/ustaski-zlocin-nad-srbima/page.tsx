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
  title: 'Navršile se 83 godine od ustaškog zločina nad Srbima u Srebrenici, Zalažju i Vitlovcima',
  date: 'Objavljeno: 1. jun 2026.',
  lead: 'Kod Spomen-kosturnice u Srebrenici danas će biti služen parastos i obeležene 83 godine od jednog od najtragičnijih zločina počinjenih nad srpskim stanovništvom u ovom kraju tokom Drugog svetskog rata. U znak sećanja na nevino stradale, predstavnici institucija, boračkih organizacija, porodice žrtava i građani položiće vence i odati poštu ubijenima.',
  paragraphs: [
    'Prema zvaničnim podacima, u Srebrenici i Zalažju u junu 1943. godine ubijeno je 229 Srba, među kojima je bilo čak 80 dece. Nezvanični podaci govore da je tokom dva dana krvavog pohoda u Srebrenici i okolnim selima, uključujući Vitlovce, stradalo više od 250 srpskih civila.',
    'Ovaj zločin ostao je jedno od najtežih stradanja srpskog naroda na području srednjeg Podrinja tokom Drugog svetskog rata. Brojne porodice su tada ostale bez svojih najbližih, a čitava sela pretrpela su ogromne gubitke.',
    'Obeležavanje godišnjice predstavlja priliku da se sačuva sećanje na nevine žrtve i da se budućim generacijama prenese istina o stradanju srpskog stanovništva u ovom delu Bosne i Hercegovine tokom ratnih godina.'
  ],
  
  highlight1: 'Parastosom kod Spomen-kosturnice obeležava se sećanje na više od 250 srpskih civila ubijenih u junu 1943. godine.',
  highlight2: 'Među stradalima bilo je i 80 dece, a zločin nad stanovništvom Srebrenice i okolnih sela ostavio je dubok trag u kolektivnom sećanju srpskog naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'Исполняется 83 года со дня усташского преступления против сербов в Сребренице, Залажье и Витловцах',
  date: 'Опубликовано: 1 июня 2026 г.',
  lead: 'Сегодня у мемориальной костницы в Сребренице состоится панихида и мероприятия, посвященные 83-й годовщине одного из самых трагических преступлений против сербского населения этого края в годы Второй мировой войны. Представители учреждений, ветеранских организаций, семьи погибших и жители региона возложат венки и почтят память невинно погибших.',
  paragraphs: [
    'Согласно официальным данным, в Сребренице и Залажье в июне 1943 года были убиты 229 сербов, среди которых было 80 детей. По неофициальным данным, за два дня карательной акции в Сребренице и близлежащих селах, включая Витловцы, погибло более 250 сербских мирных жителей.',
    'Эта трагедия считается одной из самых тяжелых страниц страданий сербского народа в Среднем Подринье во время Второй мировой войны. Многие семьи потеряли своих близких, а некоторые населенные пункты понесли огромные человеческие потери.',
    'Памятные мероприятия направлены на сохранение памяти о невинных жертвах и передачу исторической правды будущим поколениям о страданиях сербского населения в этом регионе в годы войны.'
  ],
  
  highlight1: 'У мемориальной костнице в Сребренице пройдет панихида в память о более чем 250 сербских мирных жителях, погибших в июне 1943 года.',
  highlight2: 'Среди жертв было 80 детей; трагедия оставила глубокий след в исторической памяти сербского народа.',
}

export default function UstaskiZlocinNadSrbimaPage() {
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
            src="/static/images/srebrenica.jpg"
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

          <CommentsSection postSlug="ustaski-zlocin-nad-srbima" />
        </motion.div>
      </article>
    </main>
  )
}