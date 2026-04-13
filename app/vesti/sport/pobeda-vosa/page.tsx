'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'

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
  category: 'Sport',
  title: 'Vojvodina savladala Radnički i obezbedila 2.mesto u plej-ofu Super lige',
  date: 'Objavljeno: 9. april 2026.',
  lead: 'Fudbaleri FK Vojvodine slavili na Karađorđu rezultatom 3:2',
  paragraphs: [
    'Fudbaleri Vojvodine ostvarili su važnu pobedu protiv Radničkog iz Niša rezultatom 3:2 u uzbudljivoj utakmici punoj preokreta.',
    'Novosađani su prvi došli do prednosti u 21. minutu, kada je precizan bio Marko Veličković i doveo svoj tim u vođstvo. Iako je Radnički uspeo da se vrati u meč, Vojvodina je ponovo preuzela inicijativu u drugom poluvremenu.',
    'Novo vođstvo domaćinu doneo je Aleksa Vukanović pogotkom u 59. minutu, da bi samo četiri minuta kasnije, u 63. minutu, Vukan Savićević dodatno uvećao prednost Vojvodine.',
    'Do kraja utakmice Radnički je uspeo da ublaži rezultat, ali to nije bilo dovoljno da ugrozi pobedu Vojvodine, koja je na kraju zasluženo slavila.',
    'Ovom pobedom fudbaleri Vojvodine ostvarili su drugu poziciju u plej-ofu Super lige.'
    
  ],
  highlight1: 'VAŽNA POBEDA VOJVODINE',
  highlight2: 'VOJVODINA SLAVILA 3:2',
}

const ruText = {
  category: 'Спорт',
  title: '«Войводина» победила «Раднички» и обеспечила себе 2-е место в плей-офф Суперлиги.',
  date: 'Опубликовано: 9 апреля 2026 г.',
  lead: 'Футболисты ФК «Войводина» отпраздновали победу в Караджордже со счетом 3:2.',
  paragraphs: [
    'Игроки «Войводины» одержали важную победу над «Радницким» из Ниша со счетом 3:2 в захватывающем матче, полном неожиданных поворотов.',
    'Первыми из Нови-Сада вышли вперед на 21-й минуте, когда Марко Величкович точным ударом вывел свою команду вперед. Хотя «Раднички» и удалось вернуться в игру, «Войводина» вновь перехватила инициативу во втором тайме.',
    'Алекса Вуканович вывел хозяев вперед, забив гол на 59-й минуте, а всего четыре минуты спустя, на 63-й минуте, Вукан Савичевич еще больше увеличил преимущество «Войводины».',
    'К концу игры Раднички удалось смягчить счет, но этого оказалось недостаточно, чтобы угрожать победе Воеводины, которая в итоге заслуженно отпраздновала триумф.',
    'Благодаря этой победе игроки «Войводины» заняли второе место в плей-офф Суперлиги.'
  ],
  highlight1: 'ВАЖНАЯ ПОБЕДА ВОЕВОДИНЫ',
  highlight2: 'ВОЙВОДИНА ВЫИГРАЛА 3:2',
}

export default function PobedaVosaPage() {
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

          <p className="text-sm text-white/60 md:text-base">
            {content.date}
          </p>
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
            src="/static/images/vosa.jpg"
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
        </motion.div>

      </article>
    </main>
  )
}
