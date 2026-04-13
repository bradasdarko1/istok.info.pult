'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'

function latinToCyrillic(text: string) {
  const multiMap: Record<string, string> = {
    'Dž': 'Џ',
    'DŽ': 'Џ',
    'dž': 'џ',
    'Lj': 'Љ',
    'LJ': 'Љ',
    'lj': 'љ',
    'Nj': 'Њ',
    'NJ': 'Њ',
    'nj': 'њ',
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
  '/static/images/pod-2.JPG',
  '/static/images/pod-3.JPG',
  '/static/images/pod-1.JPG',
  '/static/images/pod-4.JPG',
  '/static/images/pod-5.JPG',
  '/static/images/pod-6.JPG',
  '/static/images/pod-7.JPG',
  '/static/images/pod-8.JPG',
]

const srLatin = {
  category: 'Kultura',
  title: 'Obeležen Dan podmorničara u prostorijama ISTOK INFO PULTA',
  date: 'Objavljeno: 9. april 2026.',
  lead:
    'U prostorijama ISTOK INFO PULTA obeležen je Dan podmorničara, u prisustvu gostiju, prijatelja i poštovalaca ove značajne tradicije.',
  paragraphs: [
    'Događaj je protekao u svečanoj i dostojanstvenoj atmosferi, uz prisustvo brojnih gostiju i prijatelja koji su svojim dolaskom dali poseban značaj ovom okupljanju.',

    'Program je bio posvećen sećanju, poštovanju tradicije i negovanju istorijske svesti, a okupljeni su imali priliku da kroz razgovor, zajedničko druženje i prigodan sadržaj podele uspomene i razmišljanja o značaju ovog datuma.',

    'Poseban pečat događaju dao je poetski nastup Srpsko-ruskog udruženja građana „Svet bez granica“ iz Sombora, koji je svojim izvođenjem dodatno obogatio program i uneo emotivnu dimenziju čitavom obeležavanju.',

    'Kultura sećanja, zajedništvo i poštovanje prema ljudima i događajima koji su obeležili istoriju još jednom su se pokazali kao važan deo rada i misije ISTOK INFO PULTA.',

    'Ovakvi susreti potvrđuju značaj očuvanja istorijskog pamćenja i jačanja prijateljskih i kulturnih veza kroz događaje koji spajaju ljude, tradiciju i savremeni trenutak.',
  ],
  highlight1: 'SEĆANJE, TRADICIJA I ZAJEDNIŠTVO',
  highlight2: 'DAN PODMORNIČARA U ISTOK INFO PULTU',
}

const ruText = {
  category: 'Культура',
  title: 'В помещениях ISTOK INFO PULTA отметили День подводника',
  date: 'Опубликовано: 9 апреля 2026 г.',
  lead:
    'В помещениях ISTOK INFO PULTA был отмечен День подводника в присутствии гостей, друзей и всех, кто уважает эту значимую традицию.',
  paragraphs: [
    'Мероприятие прошло в торжественной и достойной атмосфере, при участии многочисленных гостей и друзей, которые своим присутствием придали этой встрече особое значение.',

    'Программа была посвящена памяти, уважению к традиции и сохранению исторического сознания, а собравшиеся получили возможность через беседу, совместное общение и тематическое содержание поделиться воспоминаниями и размышлениями о значении этой даты.',

    'Особый отпечаток мероприятию придало поэтическое выступление Сербско-русского объединения граждан «Мир без границ» из Сомбора, которое своим исполнением дополнительно обогатило программу и внесло эмоциональное измерение во всё мероприятие.',

    'Культура памяти, единство и уважение к людям и событиям, оставившим след в истории, ещё раз показали себя как важная часть работы и миссии ISTOK INFO PULTA.',

    'Такие встречи подтверждают важность сохранения исторической памяти и укрепления дружеских и культурных связей через события, которые объединяют людей, традицию и современность.',
  ],
  highlight1: 'ПАМЯТЬ, ТРАДИЦИЯ И ЕДИНСТВО',
  highlight2: 'ДЕНЬ ПОДВОДНИКА В ISTOK INFO PULT',
}

export default function NovaVestPage() {
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
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
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
          <button
            type="button"
            onClick={() => setSelected(0)}
            className="group block w-full text-left"
            aria-label="Otvori glavnu fotografiju"
          >
            <img
              src={images[0]}
              alt={content.title}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
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
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-10"
        >
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {language === 'ru'
                ? 'Фотографии с мероприятия'
                : script === 'cyr'
                  ? 'Фотографије са догађаја'
                  : 'Fotografije sa događaja'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.slice(1).map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setSelected(i + 1)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label={`Otvori fotografiju ${i + 2}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${content.title} ${i + 2}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </article>

      {selected !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelected(null)}
            aria-label="Zatvori pregled slike"
          />

          <div className="relative z-10 w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {language === 'ru' ? 'Закрыть' : script === 'cyr' ? 'Затвори' : 'Zatvori'}
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={images[selected]}
                alt={`${content.title} ${selected + 1}`}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setSelected((selected - 1 + images.length) % images.length)}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Prethodna slika"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => setSelected((selected + 1) % images.length)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Sledeća slika"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white/70">
              {selected + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
