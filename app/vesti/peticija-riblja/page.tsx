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
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  category: 'Vesti',
  title: 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',
  date: 'Objavljeno: 15. april 2026.',
  lead: 'Organizacija Istok Info Pult nastavlja svoju građansku inicijativu i poziva sve Novosađane i ljude dobre volje da daju svoj potpis podrške za podizanje spomenika žrtvama NATO agresije.',
  paragraphs: [
    'Potpisivanje će biti organizovano u četvrtak, 16. aprila, sa početkom od 9 časova, na Ribljoj pijaci u Novom Sadu.',
    'Pozivamo sve ljude dobre volje, prijatelje i sugrađane da izdvoje nekoliko minuta svog vremena i daju svoj doprinos očuvanju sećanja na nevine žrtve.',
    'Ova inicijativa ima za cilj da trajno obeleži stradanje i da budućim generacijama ostavi jasan znak istine, dostojanstva i istorijskog pamćenja.',
    'Vaš potpis je važan. Vaše prisustvo znači.',
    'Novosađani pamte.',
  ],
  highlight1: 'ZAJEDNO ČUVAMO SEĆANJE',
  highlight2: 'GLAS ZA ISTINU I DOSTOJANSTVO',
}

const ruText = {
  category: 'Новости',
  title: 'СБОР ПОДПИСЕЙ НА РЫБНОМ РЫНКЕ В НОВИ-САДЕ – 16 АПРЕЛЯ С 9:00',
  date: 'Опубликовано: 15 апреля 2026 г.',
  lead: 'Организация Istok Info Pult продолжает свою гражданскую инициативу и приглашает всех жителей Нови-Сада принять участие в сборе подписей за установку памятника жертвам агрессии НАТО.',
  paragraphs: [
    'Сбор подписей состоится в четверг, 16 апреля, с 9:00, на Рыбном рынке в Нови-Саде.',
    'Приглашаем всех людей доброй воли, друзей и граждан выделить несколько минут и внести свой вклад в сохранение памяти о невинных жертвах.',
    'Цель инициативы — сохранить память о страданиях и оставить будущим поколениям ясный знак истины, достоинства и исторической памяти.',
    'Ваш голос важен. Ваше присутствие имеет значение.',
    'Жители Нови-Сада помнят.',
  ],
  highlight1: 'ВМЕСТЕ СОХРАНЯЕМ ПАМЯТЬ',
  highlight2: 'ГОЛОС ЗА ПРАВДУ И ДОСТОИНСТВО',
}

export default function PeticijaRibljaPage() {
  const { language, script } = useLanguage() as {
    language: 'sr' | 'ru'
    script: 'lat' | 'cyr'
  }

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
            src="/static/images/riblja-share.jpg"
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
          </div>

          <div className="mt-8">
            <CommentsSection postSlug="peticija-riblja" />
          </div>
        </motion.div>
      </article>
    </main>
  )
}
