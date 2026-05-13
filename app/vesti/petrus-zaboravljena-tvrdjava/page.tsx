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
  title: 'PETRUS – ZABORAVLJENA TVRĐAVA KOJA I DALJE ČUVA DUH SRPSKE ISTORIJE',
  date: 'Objavljeno: 13. maj 2026.',
  lead: 'Nedaleko od Paraćina, na kamenitoj zaravni brda Čokoće, nalaze se ostaci tvrđave Petrus – tihog, ali snažnog svedoka srpske prošlosti. Iako danas deluje skromno i zaboravljeno, ovo mesto nosi značaj koji prevazilazi njegove zidine.',
  paragraphs: [
    'Petruška oblast nije bila samo vojno utvrđenje. Zahvaljujući manastirima, isposnicama i bogatom duhovnom životu u klisuri reke Crnice, ovaj kraj je s razlogom nazvan „Mala Sveta gora“. Upravo tu se prepliću vera, kultura i istorija jednog naroda.',
    'Tvrđava Petrus se dovodi u vezu sa vremenom župana Vukoslava i vojvode Crepa, kao i sa odbranom srpske države u burnim vekovima. Sa njenih zidina nadgledani su važni putevi, dok narodna predanja govore o signalnim vatrama, domišljatosti branilaca i viteškom duhu koji je ostao urezan u kamenu.',
    'Danas, međutim, Petrus deluje kao da je gurnut u stranu – prepušten vremenu i zaboravu. Kao da smo izgubili svest da ovakva mesta nisu samo ruševine, već temelji našeg identiteta.',
    'Petrus nije samo stari grad.',
    'Petrus je podsetnik – ko smo bili i šta ne smemo dozvoliti da izgubimo.'
  ],
  
  highlight1: 'Nije ruševina – već svedočanstvo jednog vremena',
  highlight2: 'Mesto gde kamen pamti više nego što mi danas želimo da čujemo',
}

const ruText = {
  category: 'Новости',
  title: 'ПЕТРУС — ЗАБЫТАЯ КРЕПОСТЬ, КОТОРАЯ ВСЁ ЕЩЁ ХРАНИТ ДУХ СЕРБСКОЙ ИСТОРИИ',
  date: 'Опубликовано: 13 мая 2026 г.',
  lead: 'Недалеко от Парачина, на каменистом плато холма Чокоче, находятся остатки крепости Петрус — тихого, но мощного свидетеля сербской истории. Сегодня она выглядит заброшенной, однако её значение выходит далеко за пределы сохранившихся стен.',
  paragraphs: [
    'Петрушская область была не только военным укреплением. Благодаря монастырям, скитам и богатой духовной жизни в ущелье реки Црница, этот край получил название «Малая Святая гора». Здесь переплетаются вера, культура и история народа.',
    'Крепость Петрус связана с эпохой жупана Вукослава и воеводы Црепа, а также с обороной сербского государства в трудные времена. С её стен контролировались важные пути, а народные предания рассказывают о сигнальных огнях, находчивости защитников и рыцарском духе, навсегда оставшемся в камне.',
    'Сегодня Петрус словно забыт — оставлен на произвол времени. Как будто мы забыли, что такие места — это не просто руины, а основа нашей исторической памяти.',
    'Петрус — это не просто древний город.',
    'Петрус — это напоминание о том, кто мы есть и что обязаны сохранить.'
  ],
  
  highlight1: 'Это не руины — это свидетельство эпохи',
  highlight2: 'Место, где камень помнит больше, чем мы готовы услышать',
}

export default function PetrusZaboravljenaTvrdjavaPage() {
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
            src="/static/images/petrus-tvrdjava.jpg"
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

          <CommentsSection postSlug="petrus-zaboravljena-tvrdjava" />
        </motion.div>
      </article>
    </main>
  )
}