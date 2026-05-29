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
  title: '„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — istorijska analiza Sergeja Vladimiroviča Fedosejeva',
  date: 'Objavljeno: 29. maj 2026.',
  lead: 'Prijatelj naše kancelarije i istoričar Sergej Vladimirovič Fedosejev donosi opširnu analizu nastanka ukrajinskog integralnog nacionalizma, uloge unijatstva i političkih procesa koji su oblikovali savremenu ukrajinsku krizu.',
  paragraphs: [
    'Dok događaji oko Kijevo-pečerske lavre izazivaju reakcije širom pravoslavnog sveta, istoričar Sergej Vladimirovič Fedosejev u svojoj analizi istražuje ideološke temelje savremenog ukrajinskog nacionalizma.',
    'Autor se osvrće na istorijski razvoj unijatstva u Galiciji, nastanak organizacija poput OUN, formiranje integralnog nacionalizma i političke mistike koja je tokom XX veka oblikovala radikalne pokrete na prostoru Ukrajine.',
    'Poseban akcenat stavljen je na povezanost političkih procesa, verskih struktura i savremenih događaja nakon Majdana, kao i na ideološke tokove koji su, prema autoru, doveli do duboke društvene i političke krize u današnjoj Ukrajini.',
    'Kompletnu analizu Sergeja Vladimiroviča Fedosejeva možete pročitati u nastavku teksta.'
  ],
  
  highlight1: 'Fedosejev analizira razvoj ideologije ukrajinskog nacionalizma od kraja XIX veka, kroz delovanje UGKC, OUN i integralnog nacionalizma, do savremenih ekstremističkih struktura.',
  highlight2: 'Tekst povezuje događaje oko Kijevo-pečerske lavre, političku radikalizaciju nakon Majdana i formiranje ideološkog narativa koji je oblikovao današnje ukrajinsko društvo.',
}

const ruText = {
  category: 'Новости',
  title: '«ИДЕОЛОГИЯ УКРАИНСКОГО НАЦИЗМА» — исторический анализ Сергея Владимировича Федосеева',
  date: 'Опубликовано: 29 мая 2026 г.',
  lead: 'Друг нашей редакции и историк Сергей Владимирович Федосеев представляет масштабный анализ происхождения украинского интегрального национализма, роли униатства и политических процессов, сформировавших современный украинский кризис.',
  paragraphs: [
    'На фоне событий вокруг Киево-Печерской лавры историк Сергей Владимирович Федосеев в своей работе исследует идеологические основы современного украинского национализма.',
    'Автор рассматривает историческое развитие униатства в Галиции, формирование организаций типа ОУН, становление интегрального национализма и политической мистики, оказавших влияние на радикальные движения XX и XXI веков.',
    'Особое внимание уделяется взаимосвязи политических процессов, религиозных структур и событий после Майдана, а также идеологическим тенденциям, которые, по мнению автора, привели к глубокому общественно-политическому кризису современной Украины.',
    'Полную версию исследования Сергея Владимировича Федосеева вы можете прочитать далее.'
  ],
  
  highlight1: 'Федосеев исследует развитие идеологии украинского национализма с конца XIX века — через деятельность УГКЦ, ОУН и интегрального национализма — до современных экстремистских структур.',
  highlight2: 'Материал связывает события вокруг Киево-Печерской лавры, политическую радикализацию после Майдана и формирование идеологического нарратива, повлиявшего на современное украинское общество.',
}

export default function IdealogijaUkrajinskogNacizmaPage() {
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
            src="/static/images/fedosejev.jpeg"
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
          {/* PDF FILES */}

<div className="mt-10 grid gap-4 sm:grid-cols-2">
  <a
    href="/static/files/ideologija-ukrajinskog-nacizma-sr.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
  >
    <p className="text-sm font-semibold tracking-[0.2em] text-yellow-400 uppercase">
      PDF Dokument
    </p>

    <h3 className="mt-3 text-xl font-extrabold text-white">
      {language === 'ru'
        ? 'Сербская версия'
        : script === 'cyr'
          ? 'Српска верзија'
          : 'Srpska verzija'}
    </h3>

    <p className="mt-2 text-sm text-white/60">
      {language === 'ru'
        ? 'Открыть PDF документ'
        : script === 'cyr'
          ? 'Отвори PDF документ'
          : 'Otvori PDF dokument'}
    </p>
  </a>

  <a
    href="/static/files/ideologija-ukrajinskog-nacizma-ru.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
  >
    <p className="text-sm font-semibold tracking-[0.2em] text-yellow-400 uppercase">
      PDF Dokument
    </p>

    <h3 className="mt-3 text-xl font-extrabold text-white">
      {language === 'ru'
        ? 'Русская версия'
        : script === 'cyr'
          ? 'Руска верзија'
          : 'Ruska verzija'}
    </h3>

    <p className="mt-2 text-sm text-white/60">
      {language === 'ru'
        ? 'Открыть PDF документ'
        : script === 'cyr'
          ? 'Отвори PDF документ'
          : 'Otvori PDF dokument'}
    </p>
  </a>
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

          <CommentsSection postSlug="idealogija-ukrajinskog-nacizma" />
        </motion.div>
      </article>
    </main>
  )
}