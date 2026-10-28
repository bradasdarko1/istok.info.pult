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
  title: 'NOVAK ĐOKOVIĆ NAKON IZBORA U SRBIJI: „STUDENTI SU PROBUDILI NADU U LJUDIMA“',
  date: 'Objavljeno: 28. oktobar 2026.',
  lead: 'Najbolji srpski teniser Novak Đoković oglasio se povodom parlamentarnih izbora održanih 25. oktobra 2026. godine, na kojima je pobedu odnela Studentska lista.',
  paragraphs: [
    'Govoreći na konferenciji za medije u Bazelu, Đoković je izrazio zadovoljstvo rezultatima izbora i uputio snažne reči podrške studentima, ističući njihovu istrajnost, hrabrost i odlučnost tokom prethodne dve godine.',
    '„Veoma sam zadovoljan, veoma sam srećan“, poručio je Đoković, naglašavajući da gaji veliko poštovanje prema mladim ljudima koji su, uprkos brojnim izazovima i pritiscima, ostali dosledni svojim ciljevima.',
    '„Uspeli su da razbiju kult jedne ličnosti i da kolektivizuju čitav proces, da probude nadu u ljudima“, istakao je srpski teniser.',
    'Đoković je posebno ukazao na značaj velikog interesovanja građana za izbore, navodeći da dugo nije video toliko energije, zajedništva i želje za promenama u Srbiji.',
    'Njegova podrška studentima nije nova, budući da je i tokom prethodnog perioda javno govorio o njihovoj borbi i značaju građanskog angažovanja.',
    'Na kraju obraćanja, Đoković je čestitao studentima na izbornoj pobedi i izrazio nadu da Srbiju očekuje period napretka, stabilnosti i prosperitetnije budućnosti za sve njene građane.'
  ],
  
  highlight1: 'Novak Đoković izrazio je zadovoljstvo pobedom Studentske liste na parlamentarnim izborima u Srbiji, ističući istrajnost, hrabrost i odlučnost mladih tokom prethodne dve godine.',
  highlight2: '„Uspeli su da razbiju kult jedne ličnosti i da kolektivizuju čitav proces, da probude nadu u ljudima“, poručio je Đoković, čestitajući studentima na izbornoj pobedi.',
}

const ruText = {
  category: 'Новости',
  title: 'НОВАК ДЖОКОВИЧ ПОСЛЕ ВЫБОРОВ В СЕРБИИ: «СТУДЕНТЫ ПРОБУДИЛИ В ЛЮДЯХ НАДЕЖДУ»',
  date: 'Опубликовано: 28 октябрь 2026 г.',
  lead: 'Знаменитый сербский теннисист Новак Джокович прокомментировал парламентские выборы, состоявшиеся 25 октября 2026 года в Сербии, на которых победу одержал студенческий список.',
  paragraphs: [
    'Выступая на пресс-конференции в Базеле, Джокович выразил удовлетворение результатами выборов и открыто поддержал студентов, отметив их стойкость, смелость и решимость на протяжении последних двух лет.',
    '«Я очень доволен, я очень счастлив», — заявил Джокович, подчеркнув своё глубокое уважение к молодым людям, которые, несмотря на многочисленные трудности и давление, остались верны своим целям.',
    '«Им удалось разрушить культ одной личности и сделать весь процесс коллективным, пробудить в людях надежду», — отметил сербский теннисист.',
    'Джокович также обратил внимание на высокий интерес граждан к выборам, подчеркнув, что давно не видел в Сербии такого количества энергии, единства и стремления к переменам.',
    'Поддержка студентов со стороны Джоковича не стала неожиданностью, поскольку и ранее он публично высказывался об их борьбе и значении гражданской активности.',
    'В завершение своего выступления Джокович поздравил студентов с победой на выборах и выразил надежду на то, что Сербию ожидает период развития, стабильности и более благополучного будущего для всех её граждан.'

  ],
  
  highlight1: 'Новак Джокович выразил удовлетворение победой студенческого списка на парламентских выборах в Сербии, отметив стойкость, смелость и решимость молодых людей на протяжении последних двух лет.',
  highlight2: '«Им удалось разрушить культ одной личности и сделать весь процесс коллективным, пробудить в людях надежду», — заявил Джокович, поздравив студентов с победой на выборах.',
}

export default function NovakDjokovicOIzborimaUSrbijiPage() {
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
            src="/static/images/novak-djokovic.jpg"
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

          <CommentsSection postSlug="novak-djokovic-o-izborima-u-srbiji" />
        </motion.div>
      </article>
    </main>
  )
}