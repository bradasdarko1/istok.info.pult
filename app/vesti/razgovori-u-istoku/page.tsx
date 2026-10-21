
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

// ==========================================
// SRPSKI - LATINICA
// ==========================================

const srLatin = {
  category: 'Vesti',

  title:
    'DRAGANA TRIFKOVIĆ PRVA GOŠĆA PODKASTA "Razgovori u istoku" – ČAST I ZADOVOLJSTVO NA POČETKU JEDNE NOVE PRIČE',

  date: 'Objavljeno: 21. oktobar 2026.',

  lead:
    'Istok klub u Novom Sadu imao je posebnu čast i zadovoljstvo da ugosti Draganu Trifković, koja je svojim prisustvom i učešćem u prvoj epizodi našeg podkasta uveličala početak jednog novog poglavlja u radu Istok Info Pulta.',

  paragraphs: [
    'U prijatnoj atmosferi našeg kluba razgovarali smo o aktuelnim geopolitičkim procesima, međunarodnim odnosima i izazovima savremenog sveta, otvarajući pitanja koja zaslužuju ozbiljan dijalog i razmenu mišljenja.',

    'Tokom susreta predstavljen je i ruski federalni časopis „Persona Strani“, čime je dodatno istaknut značaj kulturne, informativne i medijske saradnje, kao i povezivanja ljudi i ideja.',

    'Posebno nam je zadovoljstvo što je upravo Dragana Trifković bila prva gošća našeg podkasta. Zahvaljujemo joj na izdvojenom vremenu, ukazanom poverenju i sadržajnom razgovoru kojim smo simbolično označili početak projekta koji će, verujemo, okupiti brojne zanimljive sagovornike.',

    'Istok klub, na adresi Maksima Gorkog 2A u Novom Sadu, zamišljen je kao mesto susreta, kulture, otvorenog dijaloga i novih inicijativa.',

    'Ovo je tek početak. Pred nama su novi razgovori, nove teme i novi susreti.',

    'Istok klub - budite deo naše priče',
  ],

  highlight1:
    'Velika čast za Istok klub – Dragana Trifković prva gošća podkasta „Razgovori u Istoku“.',

  highlight2:
    'Prva epizoda donela je razgovor o geopolitici, međunarodnim odnosima i značaju povezivanja ljudi, kultura i ideja.',

  videoTitle:
    'Pogledajte prvu epizodu našeg podkasta',

  videoDescription:
    'Dragana Trifković – Razgovori u Istoku',

  watchVideo:
    'Pogledaj na YouTube-u',
}

// ==========================================
// RUSKI JEZIK
// ==========================================

const ruText = {
  category: 'Новости',

  title:
    'ДРАГАНА ТРИФКОВИЧ — ПЕРВАЯ ГОСТЬЯ ПОДКАСТА «РАЗГОВОРЫ НА ВОСТОКЕ»: БОЛЬШАЯ ЧЕСТЬ И РАДОСТЬ В НАЧАЛЕ НОВОЙ ИСТОРИИ',

  date: 'Опубликовано: 21 октября 2026 г.',

  lead:
    'Клуб «Исток» в Нови-Саде имел особую честь и удовольствие принимать Драгану Трифкович, которая своим присутствием и участием в первом выпуске нашего подкаста ознаменовала начало новой главы в деятельности информационного портала «Исток Инфо Пулт».',

  paragraphs: [
    'В уютной атмосфере нашего клуба мы обсудили актуальные геополитические процессы, международные отношения и вызовы современного мира, затронув вопросы, заслуживающие серьёзного диалога и обмена мнениями.',

    'В ходе встречи также был представлен российский федеральный журнал «Персона Страны», что дополнительно подчеркнуло важность культурного, информационного и медийного сотрудничества, а также объединения людей и идей.',

    'Для нас особенно приятно, что именно Драгана Трифкович стала первой гостьей нашего подкаста. Мы искренне благодарим её за уделённое время, оказанное доверие и содержательную беседу, которая символически положила начало проекту, способному, как мы надеемся, объединить множество интересных собеседников.',

    'Клуб «Исток», расположенный по адресу: Нови-Сад, улица Максима Горького, 2А, задуман как место встреч, культуры, открытого диалога и новых инициатив.',

    'Это только начало. Впереди нас ждут новые беседы, новые темы и новые встречи.',

    'Клуб «Исток» — станьте частью нашей истории!',
  ],

  highlight1:
    'Большая честь для клуба «Исток» — Драгана Трифкович стала первой гостьей подкаста «Разговоры на Востоке».',

  highlight2:
    'Первый выпуск был посвящён геополитике, международным отношениям и важности объединения людей, культур и идей.',

  videoTitle:
    'Смотрите первый выпуск нашего подкаста',

  videoDescription:
    'Драгана Трифкович — Разговоры на Востоке',

  watchVideo:
    'Смотреть на YouTube',
}

// ==========================================
// YOUTUBE VIDEO
// ==========================================

const YOUTUBE_VIDEO_ID = 'K8jg2YxStMg'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_EMBED_URL =
  `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`

// ==========================================
// GLAVNA STRANICA
// ==========================================

export default function RazgovoriUIstokuPage() {
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

            paragraphs:
              srLatin.paragraphs.map(latinToCyrillic),

            highlight1:
              latinToCyrillic(srLatin.highlight1),

            highlight2:
              latinToCyrillic(srLatin.highlight2),

            videoTitle:
              latinToCyrillic(srLatin.videoTitle),

            videoDescription:
              latinToCyrillic(srLatin.videoDescription),

            watchVideo:
              latinToCyrillic(srLatin.watchVideo),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-4xl">

        {/* ==================================
            NASLOV VESTI
        ================================== */}

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

        {/* ==================================
            GLAVNA FOTOGRAFIJA
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.12,
          }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src="/static/images/dragana-trifkovic.jpeg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* ==================================
            SADRZAJ VESTI
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.24,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >

          {/* UVODNI TEKST */}

          <p className="mb-6 text-lg leading-8 font-medium text-gray-200 md:text-xl">
            {content.lead}
          </p>

          {/* PASUSI */}

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
          </div>

          {/* ==================================
              PODKAST YOUTUBE VIDEO
          ================================== */}

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
            aria-label={content.videoTitle}
          >

            {/* NASLOV VIDEA */}

            <div className="mb-7 text-center">
              <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-yellow-400" />

              <h2 className="text-2xl leading-tight font-extrabold text-white md:text-3xl">
                {content.videoTitle}
              </h2>

              <p className="mt-3 text-base text-gray-400 md:text-lg">
                {content.videoDescription}
              </p>
            </div>

            {/* YOUTUBE PLAYER */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_30px_rgba(255,255,255,0.06)]">

              <div className="relative aspect-video w-full">
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title={content.videoTitle}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

            </div>

            {/* DUGME ZA YOUTUBE */}

            <div className="mt-7 flex justify-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 text-base font-extrabold text-black shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                <span>
                  {content.watchVideo}
                </span>
              </a>
            </div>

          </motion.section>

          {/* ==================================
              ISTAKNUTI DEO VESTI
          ================================== */}

          <div className="mt-12 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">

            <p className="text-xl font-extrabold tracking-wide text-white uppercase md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold tracking-wide text-yellow-300 uppercase md:text-xl">
              {content.highlight2}
            </p>

          </div>

          {/* ==================================
              KOMENTARI
          ================================== */}

          <CommentsSection
            postSlug="razgovori-u-istoku"
          />

        </motion.div>

      </article>
    </main>
  )
}
