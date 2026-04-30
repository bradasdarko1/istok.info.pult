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
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ',
    E: 'Е', F: 'Ф', G: 'Г', H: 'Х', I: 'И', J: 'Ј', K: 'К',
    L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П', R: 'Р', S: 'С',
    Š: 'Ш', T: 'Т', U: 'У', V: 'В', Z: 'З', Ž: 'Ж',
    a: 'а', b: 'б', c: 'ц', č: 'ч', ć: 'ћ', d: 'д', đ: 'ђ',
    e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј', k: 'к',
    l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с',
    š: 'ш', t: 'т', u: 'у', v: 'в', z: 'з', ž: 'ж',
  }

  return result.split('').map((char) => singleMap[char] ?? char).join('')
}

const images = [
  '/static/images/murino-1.jpeg',
  '/static/images/murino-2.jpeg',
]

const srLatin = {
  category: 'Vesti',
  title: 'MURINO – 27 GODINA OD ZLOČINA KOJI NE SME DA SE ZABORAVI',
  date: 'Objavljeno: 30. april 2026.',
  lead:
    'Danas se navršava 27 godina od bombardovanja mosta u Murino, jednog od najtragičnijih događaja tokom NATO agresija na Saveznu Republiku Jugoslaviju.',
  highlight1: 'Murino je postalo simbol stradanja nevinih – mesto gde su u jednom danu ugašeni dečji životi i zauvek promenjene sudbine porodica.',
  highlight2: 'Tragedija nije završena 1999. godine – borba za pravdu trajala je decenijama, a sećanje na žrtve ostaje moralna obaveza društva.',
  paragraphs: [
    'Tog 30. aprila 1999. godine, u mirnom popodnevu, život je izgubilo šest civila, među njima troje dece. Poginuli su Miroslav Knežević (14), Olivera Maksimović (13), Julija Brudar (11), kao i Vukić Vuletić, Milka Kočanović i Manojlo Komatina. Osam osoba je povređeno.',
    'Prema svedočenjima meštana, u Murinu nije bilo vojnih ciljeva – ni kasarni, ni jedinica, niti objekata koji bi mogli opravdati napad. Ipak, projektili su pogodili most i civilne objekte, ostavljajući za sobom tragediju koja je zauvek promenila ovo malo mesto.',
    'Murino je postalo simbol stradanja nevinih i jedna od najbolnijih tačaka sećanja na 1999. godinu. Prazne školske klupe, prekinuta detinjstva i porodice koje i danas nose teret gubitka svedoče o pravoj ceni rata.',
    'Za porodice žrtava, tragedija nije završena tog dana. Uslijedila je dugogodišnja borba za pravdu i priznanje. Tužbe su odbijane, a tek posle više od dve decenije država je priznala status civilnih žrtava rata i isplatila jednokratne naknade – korak koji nije mogao da izbriše godine ćutanja.',
    'Posebnu težinu ovom sećanju daje činjenica da je Crna Gora 2017. godine postala članica NATO. Za porodice stradalih, ta odluka ostala je duboko bolna i sporna.',
    'Danas, centar Murina nosi naziv „Trg NATO žrtava“ – kao trajni podsetnik. Ne samo na stradanje, već i na obavezu da se istina ne zaboravi.',
    'Murino nije samo mesto tragedije. To je opomena.',
    'Jer narod koji zaboravi svoju nevinu decu – zaboravio je i sebe.'
  ],
}

const ruText = {
  category: 'Новости',
  title: 'МУРИНО – 27 ЛЕТ СО ДНЯ ТРАГЕДИИ, КОТОРУЮ НЕЛЬЗЯ ЗАБЫТЬ',
  date: 'Опубликовано: 30. апреля 2026 г.',
  lead:
    'Сегодня исполняется 27 лет со дня бомбардировки моста в Мурино — одного из самых трагических событий во время НАТО агрессия против Союзной Республики Югославии.',
  highlight1: 'Мурино стало символом страдания невинных — местом, где в один день оборвались детские жизни и навсегда изменились судьбы семей.',
  highlight2: 'Трагедия не закончилась в 1999 году — борьба за справедливость длилась десятилетиями, а память о жертвах остаётся моральным долгом общества.',
  paragraphs: [
    '30 апреля 1999 года, в мирный весенний день, погибли шесть мирных жителей, среди них трое детей. Жертвами стали Мирослав Кнежевич (14), Оливера Максимович (13), Юлия Брудар (11), а также Вукич Вулетич, Милка Кочанович и Манойло Коматина. Восемь человек получили ранения.',
    'По свидетельствам местных жителей, в Мурино не было военных объектов — ни казарм, ни подразделений, ни целей, которые могли бы оправдать удар. Тем не менее, ракеты поразили мост и гражданские объекты, оставив после себя трагедию, навсегда изменившую это место.',
    'Мурино стало символом страдания невинных и одной из самых болезненных точек памяти о 1999 году. Пустые школьные парты, оборванные детские жизни и семьи, которые до сих пор несут тяжесть утраты, свидетельствуют о настоящей цене войны.',
    'Для семей погибших трагедия не закончилась в тот день. Последовала многолетняя борьба за признание и справедливость. Иски отклонялись, и лишь спустя более двух десятилетий государство признало статус семей гражданских жертв войны и выплатило компенсации — шаг, который не смог стереть годы молчания.',
    'Особую значимость этому событию придает тот факт, что Черногория в 2017 году стала членом НАТО. Для семей погибших это решение осталось болезненным и спорным.',
    'Сегодня центр Мурино носит название «Площадь жертв НАТО» — как вечное напоминание. Не только о трагедии, но и о необходимости сохранять память.',
    'Мурино — это не просто место трагедии. Это предупреждение.',
    'Народ, который забывает своих невинных детей, — забывает и самого себя.'
  ],
}

export default function MurinoPage() {
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

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
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
          <p className="mb-8 text-lg font-medium leading-8 text-gray-200 md:text-xl">
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

        <div className="mt-12">
          <CommentsSection postSlug="murino" />
        </div>
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
