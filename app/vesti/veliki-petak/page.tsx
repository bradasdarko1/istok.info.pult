'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

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
  title: 'Veliki petak – dan stradanja, tišine i molitve',
  date: 'Objavljeno: 10. april 2026.',
  lead: 'Danas pravoslavni vernici obeležavaju Veliki petak, najtužniji dan u hrišćanskom kalendaru, posvećen sećanju na stradanje i raspeće Isusa Hrista.',
  paragraphs: [
    'Veliki petak predstavlja dan duboke tišine, posta i molitve. Prema hrišćanskom predanju, na ovaj dan Isus Hrist je osuđen, razapet na krstu i položen u grob, podnevši žrtvu za spasenje čovečanstva. Zbog toga se ovaj dan obeležava bez radosti i slavlja, u duhu smirenosti i poštovanja.',
    'U pravoslavnim hramovima širom zemlje služe se posebna bogosluženja, tokom kojih vernici celivaju plaštanicu – simbol Hristovog polaganja u grob. U mnogim domovima danas se strogo posti, a tradicionalno se ne obavljaju teški poslovi, već se dan provodi u miru i razmišljanju.',
    'Veliki petak je i podsetnik na značaj vere, žrtve i nade, kao i uvod u najveći hrišćanski praznik – Vaskrs, koji donosi poruku pobede života nad smrću.'
  ],
  highlight1: 'DAN KADA JE ŽRTVA PROMENILA SVET',
  highlight2: 'TIŠINA KOJA VODI KA VASKRSU',
}

const ruText = {
  category: 'Новости',
  title: 'Великая пятница – день страдания, тишины и молитвы',
  date: 'Опубликовано: 10. апреля 2026 г.',
  lead: 'Сегодня православные верующие отмечают Великую пятницу — самый скорбный день в христианском календаре, посвящённый воспоминанию страданий и распятия Иисуса Христа.',
  paragraphs: [
    'Великая пятница является днём глубокой тишины, поста и молитвы. Согласно христианскому преданию, в этот день Иисус Христос был осуждён, распят на кресте и положен во гроб, приняв жертву ради спасения человечества. Именно поэтому этот день проходит без радости и празднования, в духе смирения и уважения.',
    'В православных храмах проходят особые богослужения, во время которых верующие прикладываются к Плащанице — символу положения Христа во гроб. Во многих семьях соблюдается строгий пост, а также существует традиция воздерживаться от тяжёлой работы, проводя день в покое и размышлении.',
    'Великая пятница также напоминает о значении веры, жертвы и надежды, являясь преддверием главного христианского праздника — Пасхи, которая несёт весть о победе жизни над смертью.'

  ],
  highlight1: 'ДЕНЬ, КОГДА ЖЕРТВА ИЗМЕНИЛА МИР',
  highlight2: 'ТИШИНА, ВЕДУЩАЯ К ВОСКРЕСЕНИЮ',
}

export default function VelikiPetakPage() {
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src="/static/images/petak.jpg"
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
