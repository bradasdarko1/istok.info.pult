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
  title: 'ISTORIJA UZ KAFU — SVA TRI IZDANJA KNJIGE O BLAGOJU JOVOVIĆU DOSTUPNA U ISTOK KLUBU',
  date: 'Objavljeno: 17. novembar 2026.',
  lead: 'U samom srcu Novog Sada, u Istok Klubu, na adresi Maksima Gorkog 2a, posetioci od sada imaju posebnu priliku da uz omiljenu kafu pročitaju sva tri izdanja knjige o Blagoju Jovoviću.',
  paragraphs: [
    'Blagoje Jovović ostao je upamćen kao čovek koji je 1957. godine u Argentini izvršio atentat na Antu Pavelića, poglavnika Nezavisne Države Hrvatske, odgovornog za masovne zločine nad Srbima, Jevrejima i Romima tokom Drugog svetskog rata.',
    'Priča o njegovom životu, istorijskim okolnostima i događajima koji su obeležili njegov put predstavlja važan deo upoznavanja sa jednom od najupečatljivijih ličnosti srpske emigrantske istorije.',
    'U Istok Klubu verujemo da kafa može biti mnogo više od svakodnevne navike — ona može biti povod za razgovor, upoznavanje istorije i očuvanje kulture sećanja.',
    'Zato smo svim našim gostima omogućili da u prijatnoj atmosferi kluba, potpuno besplatno, uz kafu prelistaju i pročitaju sva tri izdanja knjige o Blagoju Jovoviću.',
    'Posetite nas u Istok Klubu, u ulici Maksima Gorkog 2a u Novom Sadu, i odvojite trenutak za istoriju koja zaslužuje da bude pročitana i zapamćena.'
  ],
  
  highlight1: 'U Istok Klubu u Novom Sadu, na adresi Maksima Gorkog 2a, posetioci mogu uz kafu besplatno da pročitaju sva tri izdanja knjige o Blagoju Jovoviću.',
  highlight2: 'Kafa, istorija i kultura sećanja na jednom mestu. Upoznajte životnu priču Blagoja Jovovića u prijatnoj atmosferi Istok Kluba.',
}

const ruText = {
  category: 'Новости',
  title: 'ИСТОРИЯ ЗА ЧАШКОЙ КОФЕ — ВСЕ ТРИ ИЗДАНИЯ КНИГИ О БЛАГОЕ ЙОВОВИЧЕ ДОСТУПНЫ В «ИСТОК КЛУБЕ»',
  date: 'Опубликовано: 17 ноября 2026 г.',
  lead: 'В самом сердце Нови-Сада, в «Исток Клубе», по адресу Максима Горького, 2а, у посетителей появилась особая возможность прочитать за чашкой любимого кофе все три издания книги о Благое Йововиче.',
  paragraphs: [
    'Благое Йовович вошёл в историю как человек, совершивший в 1957 году в Аргентине покушение на Анте Павелича — главу Независимого государства Хорватия, ответственного за массовые преступления против сербов, евреев и цыган во время Второй мировой войны.',
    'История его жизни, исторических обстоятельств и событий, определивших его судьбу, позволяет ближе познакомиться с одной из наиболее примечательных личностей в истории сербской эмиграции.',
    'В «Исток Клубе» мы верим, что кофе может быть гораздо большим, чем просто повседневная привычка. Это повод для беседы, знакомства с историей и сохранения исторической памяти.',
    'Именно поэтому мы предоставили всем нашим гостям возможность совершенно бесплатно, за чашкой кофе, полистать и прочитать все три издания книги о Благое Йововиче в уютной атмосфере клуба.',
    'Приходите в «Исток Клуб» по адресу Максима Горького, 2а, Нови-Сад, и уделите немного времени истории, которую стоит прочитать и сохранить в памяти.'

  ],
  
  highlight1: 'В «Исток Клубе» в Нови-Саде, по адресу Максима Горького, 2а, посетители могут бесплатно прочитать за чашкой кофе все три издания книги о Благое Йововиче.',
  highlight2: 'Кофе, история и историческая память в одном месте. Познакомьтесь с историей жизни Благое Йововича в уютной атмосфере «Исток Клуба».',
}

export default function IstorijaUzKafuKnjigeBlagojaJovovicaPage() {
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
            src="/static/images/knjige-blagoja-jovovica.jpg"
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

          <CommentsSection postSlug="istorija-uz-kafu-knjige-blagoja-jovovica" />
        </motion.div>
      </article>
    </main>
  )
}