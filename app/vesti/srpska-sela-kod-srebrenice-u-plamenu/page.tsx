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
  title: 'SRPSKA SELA KOD SREBRENICE U PLAMENU: 34 GODINE OD „MAJSKIH LOMAČA“',
  date: 'Objavljeno: 12. maj 2026.',
  lead: 'Na praznik Svetog Vasilija Ostroškog, 12. maja 1992. godine, muslimanske snage izvršile su napad na srpska sela Međe, Osredak, Viogor i Orahovicu u okolini Srebrenice. Tokom napada stradali su brojni srpski civili, dok su čitava sela opustošena i spaljena.',
  paragraphs: [
    'Ovaj zločin usledio je samo nekoliko dana nakon napada na srpska sela Gnionu, Blječevu i Zeleni Jadar, čime je nastavljen talas stradanja srpskog naroda u srednjem Podrinju tokom proleća 1992. godine.',
    'Prema svedočenjima preživelih i dostupnim podacima, u napadima je uništeno više od 200 srpskih kuća, dok su mnogi meštani, uglavnom stariji ljudi koji nisu uspeli da napuste svoje domove, ubijeni na svirep način. Zbog razmera stradanja i paljenja sela, ovaj zločin ostao je upamćen pod nazivom „Majske lomače“.',
    'Deo zarobljenih Srba odveden je u Potočare, gde je formiran logor poznat kao „Pilićarnik“. Prema svedočenjima preživelih, zatočenici su bili izloženi teškom fizičkom i psihičkom zlostavljanju.',
    'Među najpotresnijim svedočenjima pominje se i ubistvo nepokretne starice Stoje Vasić (84), koja je, prema navodima svedoka, živa spaljena u svojoj kući.'
  ],
  
  highlight1: 'Na dan Svetog Vasilija Ostroškog, 12. maja 1992. godine, srpska sela Međe, Osredak, Viogor i Orahovica kod Srebrenice pretrpela su jedan od najtežih napada nad srpskim stanovništvom u Podrinju.',
  highlight2: 'U napadu su spaljene stotine domova, ubijeni brojni civili, a preživeli Srbi odvođeni su u logor u Potočarima, gde su bili izloženi teškim mučenjima i zlostavljanju.',
}

const ruText = {
  category: 'Новости',
  title: 'СЕРБСКИЕ СЁЛА У СРЕБРЕНИЦЫ В ОГНЕ: 34 ГОДА СО ДНЯ «МАЙСКИХ КОСТРОВ»',
  date: 'Опубликовано: 12 мая 2026 г.',
  lead: '12 мая 1992 года, в праздник Святого Василия Острожского, мусульманские силы совершили нападение на сербские сёла Медже, Осредак, Виогор и Ораховицу в районе Сребреницы. В ходе нападения погибли многочисленные сербские мирные жители, а сами сёла были разграблены и сожжены.',
  paragraphs: [
    'Это преступление произошло всего через несколько дней после нападения на сербские сёла Гниона, Блечева и Зелени Ядар, что стало продолжением трагических событий для сербского народа в Среднем Подринье весной 1992 года.',
    'Согласно свидетельствам выживших и имеющимся данным, было уничтожено более 200 сербских домов, а многие жители, главным образом пожилые люди, не сумевшие покинуть свои дома, были убиты с особой жестокостью. Из-за масштабов разрушений и поджогов этот трагический эпизод остался в памяти под названием «Майские костры».',
    'Часть захваченных сербов была отправлена в Поточары, где был организован лагерь, известный как «Пиличарник». По свидетельствам выживших, заключённые подвергались тяжёлым физическим и психологическим издевательствам.',
    'Среди самых трагических свидетельств упоминается убийство неподвижной пожилой женщины Стои Васич (84), которая, по словам очевидцев, была заживо сожжена в своём доме.'
  ],
  
  highlight1: '12 мая 1992 года, в день Святого Василия Острожского, сербские сёла Медже, Осредак, Виогор и Ораховица возле Сребреницы подверглись одному из самых тяжёлых нападений на сербское население Подринья.',
  highlight2: 'Во время нападения были сожжены сотни домов, убиты многочисленные мирные жители, а выжившие сербы были отправлены в лагерь в Поточарах, где подвергались жестоким пыткам и издевательствам.',
}

export default function SrpskaSelaKodSrebreniceUPlamenuPage() {
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
            src="/static/images/srpska-sela-kod-srebrenice.jpg"
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

          <CommentsSection postSlug="srpska-sela-kod-srebrenice-u-plamenu" />
        </motion.div>
      </article>
    </main>
  )
}