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
  title: 'TRIBINA U NOVOM SADU: MAĐARSKI IZBORI I BUDUĆNOST DESNICE',
  date: 'Objavljeno: 24. april 2026.',
  lead: 'U subotu 25. aprila sa početkom u 19 časova, u Istok Info Pultu u Novom Sadu biće održana tribina posvećena političkim kretanjima u Mađarskoj, izborima i budućnosti desnice u Evropi. Gost predavač je dr Dušan Dostanić, saradnik Instituta za političke studije.',
  paragraphs: [
    'U organizaciji Istok Info Pulta, u subotu 25. aprila sa početkom u 19 časova biće održana tribina pod nazivom „Mađarski izbori i budućnost desnice“ u prostorijama na adresi Maksima Gorkog 2a u Novom Sadu.',
    'Gost predavač biće dr Dušan Dostanić, saradnik Instituta za političke studije, koji će govoriti o savremenim političkim procesima u Mađarskoj, rezultatima izbora, položaju konzervativnih i desnih opcija, kao i širim posledicama po političku scenu Evrope.',
    'Tema tribine posebno dobija na značaju u trenutku velikih promena širom kontinenta, uz sve izraženije debate o identitetu, suverenitetu, migracijama i budućnosti evropskih država.',
    'Organizatori pozivaju sve zainteresovane građane, studente, istraživače i ljubitelje politike da prisustvuju događaju i učestvuju u razgovoru.',
    'Ulaz je slobodan. Dobrodošli!'
  ],
  highlight1: 'EVROPA POSLE IZBORA',
  highlight2: 'GOVORI DR DUŠAN DOSTANIĆ',
}

const ruText = {
  category: 'Новости',
  title: 'В НОВОМ САДУ СОСТОИТСЯ ТРИБУНА: ВЫБОРЫ В ВЕНГРИИ И БУДУЩЕЕ ПРАВЫХ СИЛ',
  date: 'Опубликовано: 24. апреля 2026 г.',
  lead: 'В субботу, 25 апреля, в 19:00 в Исток Инфо Пулт в Нови-Саде состоится трибуна, посвящённая политическим процессам в Венгрии, выборам и будущему правых сил в Европе. Гостем мероприятия станет доктор Душан Достанић, сотрудник Института политических исследований.',
  paragraphs: [
    'По инициативе Исток Инфо Пулт в субботу, 25 апреля, в 19:00 состоится трибуна под названием «Выборы в Венгрии и будущее правых сил» по адресу Максима Горького 2а, Нови-Сад.',
    'Гостем мероприятия станет доктор Душан Достанић, сотрудник Института политических исследований. Он расскажет о современных политических процессах в Венгрии, итогах выборов, положении консервативных и правых сил, а также о более широких последствиях для политической сцены Европы.',
    'Тема особенно актуальна в период серьёзных перемен на континенте, когда всё чаще обсуждаются вопросы идентичности, суверенитета, миграции и будущего европейских государств.',
    'Организаторы приглашают всех заинтересованных граждан, студентов, исследователей и любителей политики принять участие в мероприятии и дискуссии.',
    'Вход свободный. Добро пожаловать!'
  ],
  highlight1: 'ЕВРОПА ПОСЛЕ ВЫБОРОВ',
  highlight2: 'ВЫСТУПАЕТ ДР ДУШАН ДОСТАНИЧ',
}

export default function MadjarskiIzboriIBuducnostDesnicePage() {
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
            src="/static/images/dusan-dostanic.jpeg"
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
            <CommentsSection postSlug="izbori-madjarska" />
          </div>
        </motion.div>

      </article>
    </main>
  )
}
