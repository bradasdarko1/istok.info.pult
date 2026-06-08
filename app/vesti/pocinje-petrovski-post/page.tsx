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
  title: 'Počinje Petrovski (Apostolski) post',
  date: 'Objavljeno: 8. jun 2026.',
  lead: 'Od prvog ponedeljka nakon Duhova, odnosno posle Nedelje svih svetih, počinje Petrovski ili Apostolski post.',
  paragraphs: [
    'Ove godine Apostolski post počinje 8. juna i traje do 12. jula, kada Srpska pravoslavna crkva proslavlja praznik svetih apostola Petra i Pavla. Post traje ukupno 34 dana, a njegova dužina zavisi od datuma Vaskrsa, zbog čega može trajati najkraće osam, a najduže 42 dana.',
    'Početak Apostolskog posta vezan je za praznik Pedesetnice, koji se obeležava pedeset dana nakon Vaskrsa. Kako se datum Vaskrsa menja iz godine u godinu, menja se i početak ovog posta. Apostolski post uvek počinje sedam dana nakon Pedesetnice, odnosno 57 dana posle Vaskrsa.',
    'Ovaj post ustanovljen je u čast svetih apostola Petra i Pavla, koji su svojim životom, verom i propovedanjem ostavili neizbrisiv trag u istoriji hrišćanstva.',
    'Svim vernicima želimo srećan i Bogom blagosloven početak Apostolskog posta, da ga provedu u miru, duhovnoj radosti, molitvi i dobrim delima.',
    'Na zdravlje i spasenje!'
  ],
  
  highlight1: 'Apostolski post počinje 8. juna i traje do 12. jula, ukupno 34 dana.',
  highlight2: 'Vernici ulaze u period posta, molitve i duhovne pripreme u čast svetih apostola Petra i Pavla.',
}

const ruText = {
  category: 'Новости',
  title: 'Начинается Петров пост (Апостольский пост)',
  date: 'Опубликовано: 8 июня 2026 г.',
  lead: 'С первого понедельника после праздника Святой Троицы, то есть после Недели всех святых, начинается Петров, или Апостольский пост.',
  paragraphs: [
    'В этом году Апостольский пост начинается 8 июня и продолжается до 12 июля — дня памяти святых первоверховных апостолов Петра и Павла. Общая продолжительность поста составляет 34 дня. Его длительность зависит от даты Пасхи и может составлять от 8 до 42 дней.',
    'Начало Апостольского поста связано с праздником Пятидесятницы, который отмечается на пятидесятый день после Пасхи. Поскольку дата Пасхи ежегодно меняется, меняется и дата начала поста. Апостольский пост всегда начинается через семь дней после Пятидесятницы, то есть на 57-й день после Пасхи.',
    'Этот пост установлен в честь святых апостолов Петра и Павла, чья вера, проповедь и служение оставили глубокий след в истории христианства.',
    'Желаем всем верующим благословенного начала Апостольского поста, чтобы они провели его в мире, духовной радости, молитве и добрых делах.',
    'Во здравие и спасение!'
  ],
  
  highlight1: 'Апостольский пост начинается 8 июня и продлится до 12 июля — всего 34 дня.',
  highlight2: 'Верующие вступают в период поста, молитвы и духовного укрепления в честь святых апостолов Петра и Павла.',
}

export default function PocinjePetrovskiPostPage() {
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
            src="/static/images/petrovski-post-1.jpeg"
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

          <CommentsSection postSlug="pocinje-petrovski-post" />
        </motion.div>
      </article>
    </main>
  )
}