
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

// ==========================================
// PRETVARANJE LATINICE U ĆIRILICU
// ==========================================

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
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ',
    D: 'Д', Đ: 'Ђ', E: 'Е', F: 'Ф',
    G: 'Г', H: 'Х', I: 'И', J: 'Ј',
    K: 'К', L: 'Л', M: 'М', N: 'Н',
    O: 'О', P: 'П', R: 'Р', S: 'С',
    Š: 'Ш', T: 'Т', U: 'У', V: 'В',
    Z: 'З', Ž: 'Ж',
    a: 'а', b: 'б', c: 'ц', č: 'ч',
    ć: 'ћ', d: 'д', đ: 'ђ', e: 'е',
    f: 'ф', g: 'г', h: 'х', i: 'и',
    j: 'ј', k: 'к', l: 'л', m: 'м',
    n: 'н', o: 'о', p: 'п', r: 'р',
    s: 'с', š: 'ш', t: 'т', u: 'у',
    v: 'в', z: 'з', ž: 'ж',
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
    'RAZGOVORI U ISTOKU 006 — MILE BOSNIĆ: GENOCID NAD SRBIMA U NDH I ISTORIJSKA ISTINA',

  date: 'Objavljeno: 16. novembar 2026.',

  lead:
    'U novoj epizodi emisije „Razgovori u Istoku“, gost je Mile Bosnić — politikolog, predsednik Pokreta Srba Krajišnika, nekadašnji ministar u Vladi Republike Srpske Krajine i svedok ključnih istorijskih događaja iz perioda raspada Jugoslavije.',

  paragraphs: [
    'Nakon 40 godina temeljnog istraživanja i pripreme kapitalnog dela u deset tomova, Mile Bosnić u ovoj emisiji ekskluzivno iznosi do sada nepoznata dokumenta, arhivske podatke i fotografije koji svedoče o razmerama stradanja i genocida nad srpskim narodom u Nezavisnoj Državi Hrvatskoj (NDH).',

    'U razgovoru se otvaraju pitanja istorijskog pamćenja, dostupnosti arhivske građe i značaja dokumentovanja zločina počinjenih nad srpskim narodom tokom Drugog svetskog rata.',

    'Posebna pažnja posvećena je povezivanju istorijskih događaja iz perioda NDH sa dešavanjima tokom raspada Jugoslavije devedesetih godina.',

    'U ovom razgovoru saznajte:',

    'Zašto se i nakon više decenija ćuti o mnogim dokumentima i svedočanstvima?',

    'Šta tajne i javne arhive govore o razmerama zločina u NDH?',

    'Kako su istorijski događaji iz Drugog svetskog rata povezani sa dešavanjima iz 1990-ih?',

    'Kako sačuvati istorijsko pamćenje i kulturu sećanja?',

    'Pogledajte novu epizodu emisije „Razgovori u Istoku“ i podelite svoje mišljenje u komentarima.',
  ],

  highlight1:
    'MILE BOSNIĆ O GENOCIDU NAD SRBIMA U NDH — DOKUMENTA, ARHIVE I SVEDOČANSTVA.',

  highlight2:
    '40 GODINA ISTRAŽIVANJA, DESET TOMOVA I PITANJA KOJA I DANAS TRAŽE ODGOVORE.',

  videoTitle:
    'Pogledajte sedmu epizodu našeg podkasta',

  videoDescription:
    'Mile Bosnić — Razgovori u Istoku | Epizoda 006',

  watchVideo: 'Pogledaj na YouTube-u',
}

// ==========================================
// RUSKI JEZIK
// ==========================================

const ruText = {
  category: 'Новости',

  title:
    'РАЗГОВОРЫ В «ИСТОКЕ» 006 — МИЛЕ БОСНИЧ: ГЕНОЦИД СЕРБОВ В НГХ И ИСТОРИЧЕСКАЯ ПРАВДА',

  date: 'Опубликовано: 16 ноября 2026 г.',

  lead:
    'В новом выпуске программы «Разговоры в Истоке» гостем стал Миле Боснич — политолог, председатель Движения сербов Краины, бывший министр в Правительстве Республики Сербская Краина и свидетель ключевых исторических событий периода распада Югославии.',

  paragraphs: [
    'После 40 лет тщательных исследований и подготовки фундаментального труда в десяти томах Миле Боснич в этом выпуске впервые представляет ранее неизвестные документы, архивные материалы и фотографии, свидетельствующие о масштабах страданий и геноцида сербского народа в Независимом государстве Хорватия (НГХ).',

    'В ходе беседы поднимаются вопросы исторической памяти, доступности архивных материалов и важности документирования преступлений, совершённых против сербского народа во время Второй мировой войны.',

    'Особое внимание уделяется связи исторических событий периода НГХ с событиями, происходившими во время распада Югославии в 1990-х годах.',

    'В этом выпуске вы узнаете:',

    'Почему даже спустя десятилетия многие документы и свидетельства остаются предметом замалчивания?',

    'Что секретные и открытые архивы говорят о масштабах преступлений в НГХ?',

    'Как исторические события Второй мировой войны связаны с событиями 1990-х годов?',

    'Как сохранить историческую память и культуру памяти о трагических событиях прошлого?',

    'Смотрите новый выпуск программы «Разговоры в Истоке» и делитесь своим мнением в комментариях.',
  ],

  highlight1:
    'МИЛЕ БОСНИЧ О ГЕНОЦИДЕ СЕРБОВ В НГХ — ДОКУМЕНТЫ, АРХИВЫ И СВИДЕТЕЛЬСТВА.',

  highlight2:
    '40 ЛЕТ ИССЛЕДОВАНИЙ, ДЕСЯТЬ ТОМОВ И ВОПРОСЫ, КОТОРЫЕ ДО СИХ ПОР ТРЕБУЮТ ОТВЕТОВ.',

  videoTitle:
    'Смотрите седьмой выпуск нашего подкаста',

  videoDescription:
    'Миле Боснич — Разговоры в Истоке | Эпизод 006',

  watchVideo: 'Смотреть на YouTube',
}

// ==========================================
// YOUTUBE VIDEO
// ==========================================

const YOUTUBE_VIDEO_ID = 'F2alFCjiJUY'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`

// ==========================================
// GLAVNA STRANICA
// ==========================================

export default function RazgovoriUIstoku007MileBosnicPage() {
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

  // ==========================================
  // POVEZANE EPIZODE
  // ==========================================

  const relatedEpisodes =
    language === 'ru'
      ? {
          heading:
            'Другие выпуски подкаста «Разговоры в Истоке»',

          episodes: [
            {
              href: '/vesti/razgovori-u-istoku',
              label: 'Выпуск 001 — Драгана Трифкович',
            },
            {
              href: '/vesti/razgovori-u-istoku-002',
              label: 'Выпуск 002 — Карло Дулович и Милан Гламочанин',
            },
            {
              href: '/vesti/razgovori-u-istoku-gost-marija-jovovic',
              label: 'Выпуск 003 — Мария Йовович',
            },
            {
              href: '/vesti/razgovori-u-istoku-004',
              label: 'Выпуск 004 — Мича Живоинович',
            },
            {
              href: '/vesti/razgovori-u-istoku-005-dane-cankovic',
              label: 'Выпуск 005 — Дане Чанкович',
            },
          ],
        }
      : script === 'cyr'
        ? {
            heading:
              'Остале епизоде подкаста „Разговори у Истоку“',

            episodes: [
              {
                href: '/vesti/razgovori-u-istoku',
                label: 'Епизода 001 — Драгана Трифковић',
              },
              {
                href: '/vesti/razgovori-u-istoku-002',
                label: 'Епизода 002 — Карло Дуловић и Милан Гламочанин',
              },
              {
                href: '/vesti/razgovori-u-istoku-gost-marija-jovovic',
                label: 'Епизода 003 — Марија Јововић',
              },
              {
                href: '/vesti/razgovori-u-istoku-004',
                label: 'Епизода 004 — Мића Живојиновић',
              },
              {
                href: '/vesti/razgovori-u-istoku-005-dane-cankovic',
                label: 'Епизода 005 — Дане Чанковић',
              },
            ],
          }
        : {
            heading:
              'Ostale epizode podkasta „Razgovori u Istoku“',

            episodes: [
              {
                href: '/vesti/razgovori-u-istoku',
                label: 'Epizoda 001 — Dragana Trifković',
              },
              {
                href: '/vesti/razgovori-u-istoku-002',
                label: 'Epizoda 002 — Karlo Dulović i Milan Glamočanin',
              },
              {
                href: '/vesti/razgovori-u-istoku-gost-marija-jovovic',
                label: 'Epizoda 003 — Marija Jovović',
              },
              {
                href: '/vesti/razgovori-u-istoku-004',
                label: 'Epizoda 004 — Mića Živojinović',
              },
              {
                href: '/vesti/razgovori-u-istoku-005-dane-cankovic',
                label: 'Epizoda 005 — Dane Čanković',
              },
            ],
          }

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
            text={
              language === 'ru'
                ? 'Читайте эту публикацию на сайте Исток Инфо Пулт'
                : script === 'cyr'
                  ? 'Погледај ову вест на сајту Исток Инфо Пулт'
                  : 'Pogledaj ovu vest na sajtu Istok Info Pult'
            }
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
            src="/static/images/mile-bosnic.jpg"
            alt={
              language === 'ru'
                ? 'Миле Боснич — Разговоры в Истоке, выпуск 007'
                : script === 'cyr'
                  ? 'Миле Боснић — Разговори у Истоку, епизода 007'
                  : 'Mile Bosnić — Razgovori u Istoku, epizoda 007'
            }
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* ==================================
            SADRŽAJ VESTI
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
            {content.paragraphs.map((paragraph, index) => {
              const isQuestion = index >= 4 && index <= 7
              const isHeading = index === 3

              return (
                <p
                  key={index}
                  className={
                    isQuestion
                      ? 'border-l-2 border-yellow-400/50 pl-4'
                      : isHeading
                        ? 'font-bold text-yellow-300'
                        : ''
                  }
                >
                  {isQuestion ? `• ${paragraph}` : paragraph}
                </p>
              )
            })}
          </div>

          {/* ==================================
              YOUTUBE VIDEO
          ================================== */}

          {YOUTUBE_VIDEO_ID && (
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

                  <span>{content.watchVideo}</span>
                </a>
              </div>

            </motion.section>
          )}

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
              POVEZANE EPIZODE
          ================================== */}

          <nav
            aria-label={relatedEpisodes.heading}
            className="mt-12"
          >
            <h2 className="mb-5 text-xl font-bold text-white md:text-2xl">
              {relatedEpisodes.heading}
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {relatedEpisodes.episodes.map((episode) => (
                <Link
                  key={episode.href}
                  href={episode.href}
                  className="rounded-2xl border border-yellow-400/30 bg-white/5 p-5 font-semibold text-yellow-300 transition hover:border-yellow-400/60 hover:bg-white/10"
                >
                  {episode.label} →
                </Link>
              ))}
            </div>
          </nav>

          {/* ==================================
              KOMENTARI
          ================================== */}

          <CommentsSection
            postSlug="razgovori-u-istoku-007-mile-bosnic"
          />

        </motion.div>

      </article>
    </main>
  )
}
