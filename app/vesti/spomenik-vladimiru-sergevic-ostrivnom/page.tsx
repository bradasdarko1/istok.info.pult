'use client'

import { useState } from 'react'
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
  title: 'Pokrenuta akcija za podizanje spomenika Vladimiru Ostrivnom na groblju Orlovača',
  date: 'Objavljeno: 1. jun 2026.',
  lead: 'Ruski državljanin Vladimir Sergejevič Ostrivnoj ubijen je u maju 2018. godine u Beogradu i sahranjen na groblju Orlovača.',
  paragraphs: [
    'Roditelji su mu se upokojili par godina pre toga, njegov brat, Aleksandar Ostrivnoj, tada nije bio u mogućnosti da snosi troškove ekshumacije i transporta. U međuvremenu, Aleksandar je poginuo 2023. godine tokom sukoba u Ukrajini.',
    'Tokom 2024. godine na Vladimirinom grobu služeno je opelo, a pokrenuta je inicijativa za podizanje skromnog spomenika. Nakon rešavanja svih administrativnih pitanja i pribavljanja potrebnih dozvola, stvoreni su uslovi da spomenik bude postavljen u skorijem periodu.',
    'Svi koji su u mogućnosti i žele da podrže realizaciju ovog projekta mogu to učiniti uplatom dobrovoljnog priloga na račun:',
    '115-0381638233383-22, Daniijela Ristić',
    'Organizatori se zahvaljuju svima koji svojim doprinosom pomažu da se dostojno sačuva sećanje na Vladimira Ostrivnog.'
  ],
  
  highlight1: 'Posle višegodišnjih administrativnih prepreka, obezbeđena je dozvola za postavljanje spomenika ruskom državljaninu Vladimiru Ostrivnom, koji je ubijen u Beogradu 2018. godine.',
  highlight2: 'Svi koji žele da podrže završetak ovog projekta mogu to učiniti dobrovoljnom novčanom donacijom.',
}

const ruText = {
  category: 'Новости',
  title: 'Начат сбор средств на установку памятника Владимиру Остривному на кладбище Орловача',
  date: 'Опубликовано: 1 июня 2026 г.',
  lead: 'Гражданин России Владимир Сергеевич Остривной был убит в мае 2018 года в Белграде и похоронен на кладбище Орловача.',
  paragraphs: [
    'Его родители скончались за несколько лет до этого, и его брат, Александр Островной, не смог тогда оплатить расходы на эксгумацию и транспортировку. Между тем, Александр погиб в 2023 году во время конфликта на Украине.',
    'В 2024 году на могиле Владимира была совершена панихида, после чего была инициирована установка скромного памятника. В настоящее время все административные вопросы урегулированы, необходимые разрешения получены, и памятник будет установлен в ближайшее время.',
    'Все, кто имеет возможность и желание поддержать это доброе дело, могут перечислить пожертвование на счет:',
    '115-0381638233383-22, Данијела Ристић',
    'Организаторы выражают благодарность всем, кто помогает сохранить память о Владимире Остривном и достойно увековечить его имя.'
  ],
  
  highlight1: 'После многолетних административных трудностей получено разрешение на установку памятника российскому гражданину Владимиру Остривному, погибшему в Белграде в 2018 году.',
  highlight2: 'Все желающие могут поддержать завершение проекта добровольным пожертвованием.',
}

const galleryImages = [
  { src: '/static/images/spomenik-vladimiru-1.jpg', alt: 'slika 1' },
  { src: '/static/images/spomenik-vladimiru-2.jpg', alt: 'slika 2' },
 
  
]

export default function SpomenikVladimiruSergevicOstrivnomPage() {
  const { language, script } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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
            src="/static/images/spomenik-vladimiru-1.jpg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
          </motion.div>
                  <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
            {language === 'ru'
              ? 'Галерея'
              : script === 'cyr'
                ? 'Галерија'
                : 'Galerija'}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
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

          <CommentsSection postSlug="spomenik-vladimiru-sergevic-ostrivnom" />
        </motion.div>
      </article>
            {selectedIndex !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
    
    {/* CLOSE */}
    <button
      onClick={() => setSelectedIndex(null)}
      className="absolute top-5 right-5 z-50 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20"
    >
      ✕
    </button>

    {/* LEFT */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        setSelectedIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
        )
      }}
      className="absolute left-5 z-50 text-4xl text-white hover:scale-110"
    >
      ‹
    </button>

    {/* IMAGE */}
    <img
      src={galleryImages[selectedIndex].src}
      alt="Galerija"
      className="max-h-[85vh] max-w-5xl rounded-3xl border border-white/10 object-contain shadow-2xl"
    />

    {/* RIGHT */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        setSelectedIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
        )
      }}
      className="absolute right-5 z-50 text-4xl text-white hover:scale-110"
    >
      ›
    </button>
  </div>
)}
    </main>
  )
}