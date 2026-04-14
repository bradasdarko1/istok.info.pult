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
  title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
  date: 'Objavljeno: 14. april 2026.',
  lead: 'Organizacija Istok Info Pult nastavlja svoju građansku inicijativu i poziva sve Novosađane i ljude dobre volje da daju svoj potpis podrške za podizanje spomenika žrtvama NATO agresije.',
  paragraphs: [
    'Tokom narednih dana, naši volonteri biće prisutni na više lokacija širom Novog Sada:',

    'Četvrtak – Riblja pijaca',
    'Petak – Limanska pijaca',
    'Subota – Futoška pijaca',
    'Nedelja – Najlon pijaca',

    'Pozivamo sve građane da izdvoje nekoliko minuta i svojim potpisom daju doprinos očuvanju sećanja na nevine žrtve.',
    'Vaš glas je važan.',
    'Novosađani pamte.'
  ],
  highlight1: 'GLAS NARODA ZA SEĆANJE KOJE TRAJE',
  highlight2: 'ZAJEDNO ZA ISTINU I PRAVDU',
}

const ruText = {
  category: 'Новости',
  title: 'СБОР ПОДПИСЕЙ НА РЫНКАХ НОВИ-САДА',
  date: 'Опубликовано: 14 апреля 2026 г.',
  lead: 'Организация Istok Info Pult продолжает свою гражданскую инициативу и приглашает всех жителей Нови-Сада и людей доброй воли поддержать сбор подписей за установку памятника жертвам агрессии НАТО.',
  paragraphs: [
    'В ближайшие дни наши волонтеры будут находиться на следующих локациях:',

    'Четверг — Рыбный рынок',
    'Пятница — Лиманский рынок',
    'Суббота — Футошский рынок',
    'Воскресенье — Найлон рынок',

    'Приглашаем всех граждан уделить несколько минут и своим подписем внести вклад в сохранение памяти о невинных жертвах.',
    'Ваш голос важен.',
    'Жители Нови-Сада помнят.' 
  ],
  highlight1: 'ГОЛОС НАРОДА ВО ИМЯ ПАМЯТИ',
  highlight2: 'ВМЕСТЕ ЗА ПРАВДУ И СПРАВЕДЛИВОСТЬ',
}

export default function PeticijaSpomenikPage() {
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
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
            src="/static/images/pijaca.jpg"
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
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
            <CommentsSection postSlug="peticija-spomenik" />
          </div>
        </motion.div>
      </article>
    </main>
  )
}
