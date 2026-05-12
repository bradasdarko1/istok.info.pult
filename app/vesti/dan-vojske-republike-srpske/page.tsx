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
  title: 'SRPSKA OBELEŽAVA DAN VOJSKE REPUBLIKE SRPSKE – SEĆANJE NA 23.659 POGINULIH BORACA',
  date: 'Objavljeno: 12. maj 2026.',
  lead: 'Republika Srpska danas obeležava Dan Vojske Republike Srpske i Dan Trećeg pešadijskog (Republika Srpska) puka Oružanih snaga BiH, u znak sećanja na 12. maj 1992. godine, kada je formirana Vojska Republike Srpske.',
  paragraphs: [
    'Centralno obeležavanje održava se u kasarni „Kozara“ u Banjaluci, gde će nakon parastosa poginulim borcima i civilnim žrtvama Odbrambeno-otadžbinskog rata biti položeni venci i održana svečanost na stadionu kasarne.',
    'Obeležavanju prisustvuju najviši zvaničnici Republike Srpske, predstavnici institucija, vojske, boračkih organizacija i porodice stradalih.',
    'U Bijeljini će takođe biti obeležen Dan Vojske Republike Srpske i Dan Semberskih ratnih jedinica. Ulicama grada proći će svečani stroj pripadnika Trećeg pešadijskog puka sa zastavama 19 ratnih jedinica, nakon čega će kod centralnog spomenika biti služen parastos i položeni venci.',
    'Vojska Republike Srpske tokom rata brojala je više od 210.000 boraca. Prema podacima Republičkog centra za istraživanje rata, ratnih zločina i traženje nestalih lica, u Odbrambeno-otadžbinskom ratu poginulo je 23.659 boraca.',
    'Nakon reforme odbrane u Bosni i Hercegovini, Vojska Republike Srpske ušla je u sastav Oružanih snaga BiH, dok njeno vojno nasleđe i tradiciju danas čuva Treći pešadijski (Republika Srpska) puk.'
  ],
  
  highlight1: 'U Banjaluci i Bijeljini danas se obeležava 12. maj – dan kada je 1992. godine formirana Vojska Republike Srpske.',
  highlight2: 'Parastosi, polaganje venaca i svečani defile Trećeg pešadijskog puka posvećeni su očuvanju sećanja na borce i stradale u Odbrambeno-otadžbinskom ratu.',
}

const ruText = {
  category: 'Новости',
  title: 'РЕСПУБЛИКА СЕРБСКАЯ ОТМЕЧАЕТ ДЕНЬ АРМИИ — ПАМЯТЬ О 23 659 ПОГИБШИХ БОЙЦАХ',
  date: 'Опубликовано: 12 мая 2026 г.',
  lead: 'Республика Сербская сегодня отмечает День Армии Республики Сербской и День Третьего пехотного (Республика Сербская) полка Вооружённых сил Боснии и Герцеговины в память о 12 мая 1992 года — дне создания Армии Республики Сербской.',
  paragraphs: [
    'Центральные мероприятия проходят в казарме «Козара» в Баня-Луке, где после панихиды по погибшим бойцам и гражданским жертвам Отечественно-оборонительной войны состоится возложение венков и торжественная церемония на стадионе казармы.',
    'В мероприятиях принимают участие официальные представители Республики Сербской, армии, ветеранских организаций и семьи погибших.',
    'В Биелине также проходят памятные мероприятия, посвящённые Дню Армии Республики Сербской и Дню семберских воинских подразделений. По улицам города пройдёт колонна военнослужащих Третьего пехотного полка со знамёнами 19 военных подразделений, после чего у центрального мемориала состоятся панихида и возложение венков.',
    'Во время войны Армия Республики Сербской насчитывала более 210 тысяч бойцов. По данным Республиканского центра по исследованию войны, военных преступлений и поиску пропавших без вести, в Отечественно-оборонительной войне погибло 23 659 бойцов.',
    'После реформы системы обороны в Боснии и Герцеговине Армия Республики Сербской вошла в состав Вооружённых сил БиГ, а её военное наследие и традиции сегодня сохраняет Третий пехотный (Республика Сербская) полк.'
  ],
  
  highlight1: 'В Баня-Луке и Биелине сегодня проходят мероприятия по случаю 12 мая — дня основания Армии Республики Сербской в 1992 году.',
  highlight2: 'Панихиды, возложение венков и торжественное шествие Третьего пехотного полка посвящены памяти погибших бойцов и жертв Отечественно-оборонительной войны.',
}

export default function DanVojskeRepublikeSrpskePage() {
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
            src="/static/images/dan-vojske-rs.jpg"
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

          <CommentsSection postSlug="dan-vojske-republike-srpske" />
        </motion.div>
      </article>
    </main>
  )
}