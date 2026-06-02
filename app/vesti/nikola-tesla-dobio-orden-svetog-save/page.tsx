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
  title: 'Na današnji dan: Nikola Tesla stigao u Beograd i dobio Orden Svetog Save',
  date: 'Objavljeno: 2. jun 2026.',
  lead: 'Veliki srpski i svetski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine, što predstavlja jedan od najznačajnijih događaja u istoriji srpske nauke i kulture. Tokom svoje jedine posete srpskoj prestonici, Tesla je dočekan sa velikim poštovanjem od strane državnih zvaničnika, naučne zajednice i brojnih građana.',
  paragraphs: [
    'Prilikom boravka u Beogradu, Tesla je primio Orden Svetog Save drugog stepena, jedno od najznačajnijih priznanja tadašnje Kraljevine Srbije. Odlikovanje mu je uručeno kao znak zahvalnosti za njegov doprinos nauci, tehničkom napretku i ugledu srpskog naroda u svetu.',
    'Tokom posete razgovarao je sa predstavnicima državnog vrha, univerzitetskim profesorima i studentima, ističući značaj obrazovanja, naučnog rada i očuvanja nacionalnog identiteta. Posebno je naglašavao da se ponosi svojim srpskim poreklom, iako je najveći deo života proveo u inostranstvu.',
    'Teslina poseta Beogradu ostala je trajno upisana u kolektivno sećanje srpskog naroda kao simbol povezanosti naučnog genija sa svojom otadžbinom. Njegovo delo i danas predstavlja inspiraciju naučnicima, istraživačima i mladim generacijama širom sveta.'
  ],
  
  highlight1: 'Veliki srpski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine.',
  highlight2: 'Tom prilikom odlikovan je Ordenom Svetog Save drugog stepena za izuzetne zasluge.',
}

const ruText = {
  category: 'Новости',
  title: 'В этот день: Никола Тесла прибыл в Белград и был награждён Орденом Святого Саввы',
  date: 'Опубликовано: 2 июня 2026 г.',
  lead: '2 июня 1892 года великий сербский и мировой учёный Nikola Tesla прибыл в Белград. Этот визит стал одним из самых значимых событий в истории сербской науки и культуры. Во время своего единственного посещения сербской столицы Тесла был тепло встречен государственными деятелями, представителями научного сообщества и многочисленными гражданами.',
  paragraphs: [
    'В ходе пребывания в Белграде учёный был награждён Орденом Святого Саввы II степени — одной из высших наград тогдашнего Королевства Сербия. Эта награда стала признанием его выдающегося вклада в развитие науки, технического прогресса и укрепление авторитета сербского народа в мире.',
    'Во время встреч с представителями власти, преподавателями и студентами Тесла подчёркивал важность образования, научной деятельности и сохранения национальной идентичности. Несмотря на то что большую часть жизни он провёл за границей, учёный всегда с гордостью говорил о своём сербском происхождении.',
    'Визит Николы Теслы в Белград навсегда вошёл в историю как символ связи великого учёного со своей родиной. Его научное наследие и сегодня вдохновляет исследователей, инженеров и молодёжь во всём мире.'
  ],
  
  highlight1: '2 июня 1892 года великий сербский учёный Никола Тесла прибыл в Белград.',
  highlight2: 'Во время визита он был награждён Орденом Святого Саввы II степени за выдающиеся заслуги.',
}

export default function NikolaTeslaDobioOrdenSvetogSavePage() {
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
            src="/static/images/nikola-tesla.jpeg"
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

          <CommentsSection postSlug="nikola-tesla-dobio-orden-svetog-save" />
        </motion.div>
      </article>
    </main>
  )
}