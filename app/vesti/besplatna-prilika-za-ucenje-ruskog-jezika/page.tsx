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
  title: 'Besplatna prilika za učenje ruskog jezika: HSE Sankt Peterburg poziva na onlajn Razgovorni klub',
  date: 'Objavljeno: 17. jun 2026.',
  lead: 'Nacionalni istraživački univerzitet „Visoka škola ekonomije“ (HSE) iz Sankt Peterburga poziva sve zainteresovane na novo izdanje Razgovornog kluba, koji organizuje Centar za ruski jezik i kulturu.',
  paragraphs: [
    'Ovi onlajn susreti namenjeni su svima koji žele da naprave prve korake u učenju ruskog jezika ili da unaprede svoje govorne veštine kroz zanimljive teme i prijatnu međunarodnu atmosferu.',
    'Putovanje Zlatnim prstenom Rusije (A0)',
    'Datum: 19. jun',
    'Vreme: 13.00 (po beogradskom vremenu)',
    'Jezik: engleski uz prilagođeni ruski jezik',
    'Nivo: A0 – idealno za početnike',
    'Ovog puta učesnici će zajedno obići čuveni Zlatni prsten Rusije – jednu od najpoznatijih turističkih ruta koja povezuje drevne ruske gradove bogate istorijom, kulturom i jedinstvenom arhitekturom.',
    
    'Tokom časa učesnici će:',
    '- upoznati se sa mapom Zlatnog prstena i saznati zbog čega nosi upravo to ime;',
    '- otkriti drevne gradove, njihove tvrđave, manastire i prepoznatljivu drvenu arhitekturu;',
    '- naučiti kako da jednostavnim pridevima opisuju i upoređuju gradove na ruskom jeziku.',
    
    'Razgovorni klub predstavlja odličnu priliku za sve koji žele da uče ruski jezik kroz komunikaciju, upoznaju rusku kulturu i steknu nova međunarodna poznanstva.'
  ],
  
  highlight1: 'Počnite da govorite ruski kroz interaktivno putovanje Zlatnim prstenom Rusije – bez prethodnog znanja.',
  highlight2: 'Onlajn susret namenjen početnicima održaće se 19. juna u organizaciji Nacionalnog istraživačkog univerziteta „Visoka škola ekonomije“ iz Sankt Peterburga.',
}

const ruText = {
  category: 'Новости',
  title: 'НИУ ВШЭ приглашает на бесплатный разговорный клуб для начинающих изучать русский язык',
  date: 'Опубликовано: 17 июня 2026 г.',
  lead: 'Национальный исследовательский университет «Высшая школа экономики» в Санкт-Петербурге приглашает всех желающих принять участие в очередной встрече Разговорного клуба, организованного Центром русского языка и культуры.',
  paragraphs: [
    'Онлайн-занятия предназначены для тех, кто только начинает изучать русский язык или хочет развивать разговорные навыки в дружелюбной международной атмосфере.',
    'Путешествие по Золотому кольцу России (А0)',
    'Дата: 19 июня',
    'Время: 13:00 (по белградскому времени)',
    'Язык: английский с адаптированным русским языком',
    'Уровень: А0 — идеально для начинающих',
    'Во время занятия участники отправятся в виртуальное путешествие по знаменитому Золотому кольцу России — одному из самых известных туристических маршрутов страны, объединяющему древние города с богатой историей и уникальной архитектурой.',
    
    'Во время встречи участники:',
    '- познакомятся с картой Золотого кольца и узнают, почему маршрут получил именно такое название;',
    '- откроют для себя древние города, крепости, монастыри и традиционную деревянную архитектуру;',
    '- научатся описывать и сравнивать города, используя простые прилагательные на русском языке.',
    
    'Разговорный клуб станет отличной возможностью сделать первые шаги в изучении русского языка, познакомиться с культурой России и пообщаться с единомышленниками из разных стран.',
  ],
  
  highlight1: 'Сделайте первые шаги в изучении русского языка, отправившись в виртуальное путешествие по Золотому кольцу России.',
  highlight2: 'Онлайн-встреча для начинающих состоится 19 июня и познакомит участников с историей и культурой древнерусских городов.',
}

export default function BesplatnaPrilikaZaUcenjeRuskogJezikaPage() {
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
            src="/static/images/besplatna-prilika-za-ucenje-ruskog-jezika.png"
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

          <div className="space-y-5 text-[17px] leading-8 text-gray-300 md:text-lg">
  {content.paragraphs.map((paragraph, index) => {
    const isInfo =
      paragraph.startsWith('Datum:') ||
      paragraph.startsWith('Vreme:') ||
      paragraph.startsWith('Jezik:') ||
      paragraph.startsWith('Nivo:') ||
      paragraph.startsWith('Дата:') ||
      paragraph.startsWith('Время:') ||
      paragraph.startsWith('Язык:') ||
      paragraph.startsWith('Уровень:')

    const isTitle =
      paragraph.includes('Putovanje Zlatnim prstenom') ||
      paragraph.includes('Путешествие по Золотому кольцу')

    return (
      <p
        key={index}
        className={
          isTitle
            ? 'text-xl font-bold text-yellow-300'
            : isInfo
            ? 'font-medium text-white'
            : 'leading-8 text-gray-300'
        }
      >
        {paragraph}
      </p>
    )
  })}

  <div className="mt-8 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
    <p className="font-semibold text-white">
      {language === 'ru'
        ? 'Регистрация: '
        : script === 'cyr'
        ? 'Регистрација: '
        : 'Registracija: '}

      <a
        href="https://spb.hse.ru/en/humart/rflcenter/polls/1033256623.html"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300"
      >
        https://spb.hse.ru/en/humart/rflcenter/polls/1033256623.html
      </a>
    </p>
  </div>
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

          <CommentsSection postSlug="besplatna-prilika-za-ucenje-ruskog-jezika" />
        </motion.div>
      </article>
    </main>
  )
}