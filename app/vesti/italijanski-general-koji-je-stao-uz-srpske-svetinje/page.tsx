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
  title: 'ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA',
  date: 'Objavljeno: 21. maj 2026.',
  lead: 'Postoje ljudi koje istorija ne pamti samo po činu i uniformi, već po trenutku kada su, u vremenu straha i nasilja, izabrali čast, hrabrost i čovečnost.',
  paragraphs: [
    'Jedan od njih je i italijanski general Rafaele Iubini, pripadnik i komandant elitnih specijalnih jedinica italijanske vojske „Col Moschin“ i „Folgore“.',
    'Tokom martovskog pogroma 2004. godine na Kosovu i Metohiji, kada su srpske svetinje gorele, a narod bio izložen napadima i progonu, general Iubini i italijanski vojnici KFOR-a stali su u odbranu pravoslavnih manastira i nevinog stanovništva.',
    'U tim danima, kada su mnogi okretali glavu, italijanski padobranci su svojim telima štitili Pećku patrijaršiju, crkve i svetinje Metohije. Zahvaljujući njihovoj odlučnosti, sprečeno je uništenje dela najvećeg duhovnog i kulturnog blaga srpskog naroda.',
    'To nije bila samo vojnička dužnost.',
    'To je bio čin časti.',
    'Srpski narod pamti prijatelje koji su u najtežim trenucima pokazali hrabrost i ljudskost. Ime generala Rafaele Iubinija ostaje zapisano sa poštovanjem među onima koji su branili mir, svetinje i pravo jednog naroda da opstane.',
    'Hvala generalu Iubiniju i italijanskim padobrancima što su u vremenu mraka stali na stranu časti, čovečnosti i civilizacije.'
  ],
  
  highlight1: 'ITALIJANSKI PADOBRANCI SVOJIM TELIMA BRANILI PEĆKU PATRIJARŠIJU I SRPSKE SVETINJE',
  highlight2: 'U VREMENU NASILJA, GENERAL IUBINI IZABRAO JE ČAST — I STAO UZ SRPSKI NAROD',
}

const ruText = {
  category: 'Новости',
  title: 'ИТАЛЬЯНСКИЙ ГЕНЕРАЛ, КОТОРЫЙ ВСТАЛ НА ЗАЩИТУ СЕРБСКИХ СВЯТЫНЬ — ЧЕСТЬ ВО ВРЕМЯ ПОГРОМА',
  date: 'Опубликовано: 21 мая 2026 г.',
  lead: 'Есть люди, которых история помнит не только по званию и форме, но по моменту, когда в эпоху страха и насилия они выбирают честь, мужество и человечность.',
  paragraphs: [
    'Одним из них является итальянский генерал Раффаэле Иубини — командир элитных подразделений итальянской армии «Col Moschin» и «Folgore».',
    'Во время мартовского погрома 2004 года в Косово и Метохии, когда сербские святыни горели, а народ подвергался нападениям и изгнанию, генерал Иубини и итальянские военнослужащие KFOR встали на защиту православных монастырей и мирного населения.',
    'В те дни, когда многие отворачивались, итальянские десантники своими телами защищали Печскую Патриархию, церкви и святыни Метохии. Благодаря их решимости удалось предотвратить уничтожение части величайшего духовного и культурного наследия сербского народа.',
    'Это была не просто военная обязанность.',
    'Это был акт чести.',
    'Сербский народ помнит друзей, которые в самые трудные моменты проявили мужество и человечность. Имя генерала Иубини остается записанным с уважением среди тех, кто защищал мир, святыни и право народа на существование.',
    'Спасибо генералу Иубини и итальянским десантникам за то, что в темные времена они встали на сторону чести, человечности и цивилизации.'
  ],
  
  highlight1: 'ИТАЛЬЯНСКИЕ ДЕСАНТНИКИ СВОИМИ ТЕЛАМИ ЗАЩИЩАЛИ ПЕЧСКУЮ ПАТРИАРХИЮ И СЕРБСКИЕ СВЯТЫНИ',
  highlight2: 'В ЭПОХУ НАСИЛИЯ ГЕНЕРАЛ ИУБИНИ ВЫБРАЛ ЧЕСТЬ — И ВСТАЛ НА СТОРОНУ СЕРБСКОГО НАРОДА',
}

export default function ItalijanskiGeneralKojiJeStaoUzSrpskeSvetinjePage() {
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
            src="/static/images/italijanski-general.jpg"
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

          <CommentsSection postSlug="italijanski-general-koji-je-stao-uz-srpske-svetinje" />
        </motion.div>
      </article>
    </main>
  )
}