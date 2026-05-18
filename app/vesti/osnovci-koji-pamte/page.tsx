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
  title: 'Deca koja pamte: Osnovci iz Novog Sada u srcu Kosova i Metohije',
  date: 'Objavljeno: 18. maj 2026.',
  lead: 'Osnovci iz Novog Sada proveli su nezaboravne dane na Kosovu i Metohiji, gde su kroz druženje sa vršnjacima i obilazak svetinja upoznali istoriju, veru i identitet sopstvenog naroda – ne iz knjiga, već iz ličnog iskustva.',
  paragraphs: [
    'Učenici Osnovne škole „Duško Radović“ iz Novog Sada, zajedno sa svojim nastavnicima, boravili su u višednevnoj uzvratnoj poseti Kosovu i Metohiji, gde su ih srdačno dočekali vršnjaci iz Osnovne škole „Svetozar Marković“ iz Velike Hoče i Osnovne škole „Dositej Obradović“ iz Orahovca.',
    'Tokom boravka, deca su imala priliku da kroz druženje i zajedničke aktivnosti izgrade nova prijateljstva koja prevazilaze kilometre i granice. Ovi susreti pokazali su koliko su povezanost i razumevanje među mladima važni za očuvanje zajedničkog identiteta.',
    'Poseban deo posete bio je obilazak nekih od najznačajnijih srpskih svetinja i istorijskih mesta: Prizren, Visoki Dečani, Pećka patrijaršija, Gazimestan i Gračanica.',
    'Ova putovanja nisu bila samo ekskurzija, već snažna lekcija o korenima, istoriji i značaju očuvanja kulturnog i duhovnog nasleđa. Deca su imala priliku da Kosovo i Metohiju upoznaju neposredno – kroz sopstvene doživljaje, emocije i susrete.',
    'Ovakve inicijative pokazuju koliko je važno povezivati mlade iz različitih delova Srbije i omogućiti im da izgrade svest o zajedništvu kroz lično iskustvo.',
    'Veliko bravo za ovu decu – oni su primer kako se ljubav prema svom narodu i tradiciji uči i živi.',
    '(Za Kosovo i Metohiju)'
  ],
  
  highlight1: 'Susret koji briše daljine – prijateljstva između Novog Sada, Velike Hoče i Orahovca',
  highlight2: 'Lekcija života: Kosovo i Metohija viđeni očima dece',
}

const ruText = {
  category: 'Новости',
  title: 'Дети, которые помнят: школьники из Нови-Сада в сердце Косово и Метохии',
  date: 'Опубликовано: 18 мая 2026 г.',
  lead: 'Школьники из Нови-Сада провели незабываемые дни в Косово и Метохии, где через общение со сверстниками и посещение святынь познакомились с историей, верой и идентичностью своего народа — не по книгам, а своими глазами.',
  paragraphs: [
    'Ученики начальной школы «Душко Радович» из Нови-Сада вместе со своими учителями посетили Косово и Метохию с многодневным ответным визитом, где их тепло встретили сверстники из школ «Светозар Маркович» (Велика Хоча) и «Доситей Обрадович» (Ораховац).',
    'Во время пребывания дети имели возможность не только познакомиться, но и построить крепкие дружеские связи, которые преодолевают расстояния и границы. Эти встречи показали, насколько важны взаимопонимание и связь между молодыми поколениями.',
    'Особое место в программе заняло посещение важнейших сербских святынь и исторических мест: Призрен, Высоки Дечани, Печский, Газиместанский и Грачаницкий Патриархаты.',
    'Эта поездка стала не просто экскурсией, а настоящим жизненным уроком о корнях, истории и важности сохранения культурного и духовного наследия. Дети увидели Косово и Метохию своими глазами, пережили это через личный опыт и эмоции.',
    'Подобные инициативы подчеркивают, насколько важно объединять молодежь и давать им возможность формировать чувство единства через реальные встречи.',
    'Большое браво этим детям — они показывают, как любовь к своему народу и традициям можно не только изучать, но и жить этим.',
    '(За Косово и Метохию)'
  ],
  
  highlight1: 'Встреча, стирающая расстояния — дружба между Нови-Садом, Великой Хочей и Ораховцем',
  highlight2: 'Жизненный урок: Косово и Метохия глазами детей',
}

export default function OsnovciKojiPamtePage() {
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
            src="/static/images/deca-koja-pamte.jpg"
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

          <CommentsSection postSlug="osnovci-koji-pamte" />
        </motion.div>
      </article>
    </main>
  )
}