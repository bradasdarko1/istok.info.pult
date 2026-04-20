'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const images = [
  '/static/images/pijaca-2.jpeg',
  '/static/images/pijaca-1.jpeg',
  '/static/images/pijaca-3.jpeg',
  '/static/images/pijaca-4.jpeg',
  '/static/images/pijaca-5.jpeg',
  '/static/images/pijaca-6.jpeg',
  '/static/images/pijaca-7.jpeg',
  '/static/images/pijaca-8.jpeg',
]

const srLatin = {
  category: 'Vesti',
  title: 'NOVI SAD USTAO ZA PAMĆENJE: HILJADE GRAĐANA PODRŽALE INICIJATIVU',
  date: 'Objavljeno: 20. april 2026.',
  lead: 'Tokom prethodna četiri dana, Udruženje građana Lokalitet, Istok Info Pult i Novosađani 1989 uspešno su sproveli veliku akciju razgovora sa građanima i prikupljanja podrške na pijacama širom Novog Sada.',
  paragraphs: [
    'Na više lokacija širom grada, veliki broj građana pokazao je interesovanje, podršku i spremnost da stane iza inicijative koja čuva istorijsko sećanje i dostojanstvo našeg naroda.',
    'Brojni Novosađani prilazili su štandovima, raspitivali se o narednim koracima i jasno poručili da Novi Sad ne zaboravlja.',
    'Već naredna velika akcija zakazana je za sredu na stadionu Karađorđe, gde će biti pokriveni svi ulazi.',
  ],
  highlight1: 'NOVI SAD NE ZABORAVLJA',
  highlight2: 'SLEDEĆA STANICA – KARAĐORĐE',
}

const ruText = {
  category: 'Новости',
  title: 'НОВИ-САД ПОДНЯЛСЯ РАДИ ПАМЯТИ',
  date: 'Опубликовано: 20 апреля 2026 г.',
  lead: 'В течение последних четырёх дней объединение граждан успешно провело масштабную акцию на рынках Нови-Сада.',
  paragraphs: [
    'Во многих частях города жители проявили поддержку инициативе.',
    'Многие граждане подходили к пунктам и заявляли, что Нови-Сад не забывает.',
    'Следующая крупная акция состоится в среду на стадионе Караджордже.',
  ],
  highlight1: 'НОВИ-САД НЕ ЗАБЫВАЕТ',
  highlight2: 'СЛЕДУЮЩИЙ ШАГ — КАРАДЖОРДЖЕ',
}

export default function NoviSadUstaoPage() {
  const { language, script } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)

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
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <article className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
            {content.title}
          </h1>

          <p className="text-sm text-white/60">{content.date}</p>

          <ShareButtons
            title={content.title}
            text="Pogledaj ovu vest na sajtu Istok Info Pult"
          />
        </motion.div>

        {/* glavna slika */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
          <button onClick={() => setSelected(0)} className="w-full">
            <div className="flex min-h-[320px] items-center justify-center bg-black">
              <img
                src={images[0]}
                alt={content.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </button>
        </div>

        {/* tekst */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <p className="mb-6 text-lg leading-8 text-gray-200">{content.lead}</p>

          <div className="space-y-6 text-gray-300">
            {content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-bold">{content.highlight1}</p>
            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />
            <p className="text-yellow-300">{content.highlight2}</p>
          </div>
        </div>

        {/* galerija */}
        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            {language === 'ru'
              ? 'Фотографии с мероприятия'
              : script === 'cyr'
                ? 'Фотографије са догађаја'
                : 'Fotografije sa događaja'}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.slice(1).map((img, i) => (
              <button
                key={img}
                onClick={() => setSelected(i + 1)}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                <div className="flex h-[280px] items-center justify-center bg-black">
                  <img
                    src={img}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* komentari */}
        <div className="mt-12">
          <CommentsSection postSlug="novi-sad-ustao" />
        </div>
      </article>

      {/* modal galerija */}
      {selected !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 p-4">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2"
          >
            X
          </button>

          <div className="flex h-full items-center justify-center">
            <img
              src={images[selected]}
              alt=""
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>

          <button
            onClick={() =>
              setSelected((selected - 1 + images.length) % images.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl"
          >
            ‹
          </button>

          <button
            onClick={() => setSelected((selected + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
