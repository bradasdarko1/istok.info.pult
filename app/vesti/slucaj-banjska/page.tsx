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
  title: 'DOŽIVOTNE KAZNE ZA BLAGOJA SPASOJEVIĆA I VLADIMIRA TOLIĆA POTRESLE NAROD: VREME JE ZA JEDINSTVO I PODRŠKU',
  date: 'Objavljeno: 25. april 2026.',
  lead: 'Vest o izricanju doživotnih kazni Blagoju Spasojeviću i Vladimiru Toliću, dok je Dušan Maksimović osuđen na 30 godina zatvora, duboko je potresla javnost i unela tugu među naš narod. U trenucima kada porodice prolaze kroz najteže dane, potrebno je pokazati dostojanstvo, sabornost i snagu zajedništva.',
  paragraphs: [
    'Juče izrečene presude Blagoju Spasojeviću i Vladimiru Toliću na doživotnu robiju, kao i kazna od 30 godina zatvora Dušanu Maksimoviću, snažno su odjeknule među Srbima gde god da žive. Mnogi ovu vest doživljavaju sa bolom, tugom i osećajem velike nepravde, dok porodice osuđenih prolaze kroz dane koje je teško opisati rečima.',
    'U ovakvim trenucima važno je sačuvati mir, dostojanstvo i veru. Naš narod je kroz istoriju prolazio kroz mnoga iskušenja, ali je opstajao onda kada je bio složan i kada je znao da pruži podršku jedni drugima.',
    'Danas je potrebnije nego ikada da budemo uz svoju braću, da pokažemo solidarnost i da ne dozvolimo da nas podele tuga, strah ili nemoć. Kada smo jedinstveni, jači smo od svakog izazova.',
    'Neka ove teške vesti budu podsetnik da se narod čuva slogom, međusobnim poštovanjem i verom da pravda i istina imaju svoju snagu.'
  ],
  highlight1: 'Danas više nego ikada moramo biti uz svoju braću i njihove porodice.',
  highlight2: 'Jedinstvo naroda je odgovor na svaku nepravdu i iskušenje.',
}

const ruText = {
  category: 'Новости',
  title: 'ПОЖИЗНЕННЫЕ ПРИГОВОРЫ ДЛЯ БЛАГОЕ СПАСОЕВИЧА И ВЛАДИМИРА ТОЛИЧА ПОТРЯСЛИ НАРОД: ВРЕМЯ ЕДИНСТВА И ПОДДЕРЖКИ',
  date: 'Опубликовано: 25. апреля 2026 г.',
  lead: 'Новость о вынесении пожизненных приговоров Благою Спасоевичу и Владимиру Толичу, а также о 30-летнем сроке для Душана Максимовича, глубоко потрясла общественность и принесла боль нашему народу. В моменты, когда семьи переживают самые тяжёлые дни, необходимо проявить достоинство, сплочённость и силу единства.',
  paragraphs: [
    'Вынесенные вчера приговоры Благою Спасоевичу и Владимиру Толичу к пожизненному заключению, а также 30-летний срок Душану Максимовичу вызвали сильный отклик среди сербов, где бы они ни жили. Многие восприняли эту новость с болью, скорбью и чувством глубокой несправедливости, тогда как семьи осуждённых переживают крайне тяжёлые дни.',
    'В такие моменты важно сохранить мир, достоинство и веру. Наш народ на протяжении истории проходил через многочисленные испытания, но выстоял тогда, когда был един и умел поддерживать друг друга.',
    'Сегодня как никогда необходимо быть рядом со своими братьями, проявить солидарность и не позволить разделить нас страхом, болью или бессилием. Когда мы едины — мы сильнее любого вызова.',
    'Пусть эта тяжёлая новость станет напоминанием о том, что народ сохраняется через согласие, взаимное уважение и веру в силу правды и справедливости.'
  ],
  highlight1: 'Сегодня как никогда важно быть рядом с нашими братьями и их семьями.',
  highlight2: 'Единство народа — ответ на любую несправедливость и испытание.',
}

export default function SlucajBanjskaPage() {
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
            src="/static/images/banjska.jpg"
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
