
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
  "category": "Vesti",
  "title": "RAZGOVORI U ISTOKU 006 — MILE BOSNIĆ: RAZMERE GENOCIDA NAD SRBIMA U NDH I KULTURA SEĆANJA (DRUGI DEO)",
  "date": "Objavljeno: 25. novembar 2026.",
  "lead": "Objavljen je drugi deo razgovora sa Miletom Bosnićem, politikologom, predsednikom Pokreta Srba Krajišnika i nekadašnjim ministrom u Vladi Republike Srpske Krajine, u okviru serijala „Razgovori u Istoku“.",
  "paragraphs": [
    "U nastavku razgovora otvaramo ključna pitanja o razmerama genocida nad srpskim narodom u Nezavisnoj Državi Hrvatskoj (NDH), načinu na koji je sprovođen, utvrđivanju broja žrtava i značaju očuvanja istorijske istine.",
    "Posebna pažnja posvećena je stradanju srpskog naroda širom NDH i pitanju zašto je važno da se celokupna tragedija ne posmatra isključivo kroz stradanje u Jasenovcu.",
    "Mile Bosnić iznosi svoje stavove o radu posleratnih komisija, problemima u evidentiranju žrtava, kao i uticaju politike „bratstva i jedinstva“ na rasvetljavanje stvarnih razmera počinjenih zločina.",
    "U ovom razgovoru saznajte:",
    "Kolike su bile stvarne razmere stradanja Srba u NDH?",
    "Zašto je pogrešno svoditi celokupan genocid isključivo na Jasenovac?",
    "Sa kojim problemima se istraživači suočavaju prilikom utvrđivanja broja i identiteta žrtava?",
    "Kako je politika „bratstva i jedinstva“ uticala na istraživanje i predstavljanje razmera stradanja?",
    "Kako danas sačuvati istorijsku istinu i kulturu sećanja za buduće generacije?",
    "Pogledajte drugi deo razgovora sa Miletom Bosnićem i podelite svoje mišljenje u komentarima. Podržite rad Istok Info Pulta deljenjem emisije i pretplatom na naš YouTube kanal."
  ],
  "highlight1": "GENOCID NAD SRBIMA U NDH — STRADANJE KOJE SE NE MOŽE SVESTI ISKLJUČIVO NA JASENOVAC.",
  "highlight2": "ISTORIJSKA ISTINA, UTVRĐIVANJE BROJA ŽRTAVA I OČUVANJE KULTURE SEĆANJA ZA BUDUĆE GENERACIJE.",
  "videoTitle": "Pogledajte drugi deo epizode 006",
  "videoDescription": "Mile Bosnić — Razgovori u Istoku | Epizoda 006 — drugi deo",
  "watchVideo": "Pogledaj na YouTube-u"
}

// ==========================================
// RUSKI JEZIK
// ==========================================

const ruText = {
  "category": "Новости",
  "title": "РАЗГОВОРЫ В «ИСТОКЕ» 006 — МИЛЕ БОСНИЧ: МАСШТАБЫ ГЕНОЦИДА СЕРБОВ В НГХ И КУЛЬТУРА ПАМЯТИ (ВТОРАЯ ЧАСТЬ)",
  "date": "Опубликовано: 25 ноября 2026 г.",
  "lead": "Вышла вторая часть беседы с Миле Босничем, политологом, председателем Движения сербов Краины и бывшим министром в Правительстве Республики Сербская Краина, в рамках серии передач «Разговоры в Истоке».",
  "paragraphs": [
    "В продолжение беседы мы поднимаем ключевые вопросы о масштабах геноцида сербского народа в Независимом государстве Хорватия (НГХ), механизмах его осуществления, установлении числа жертв и значении сохранения исторической правды.",
    "Особое внимание уделяется трагедии сербского народа на всей территории НГХ и вопросу о том, почему важно не сводить масштабы этой трагедии исключительно к преступлениям в Ясеноваце.",
    "Миле Боснич делится своим взглядом на деятельность послевоенных комиссий, проблемы учёта жертв, а также влияние политики «братства и единства» на установление действительных масштабов совершённых преступлений.",
    "В этом выпуске вы узнаете:",
    "Каковы были реальные масштабы гибели сербского населения в НГХ?",
    "Почему ошибочно сводить весь геноцид исключительно к Ясеновацу?",
    "С какими проблемами сталкиваются исследователи при установлении числа и имён жертв?",
    "Как политика «братства и единства» повлияла на изучение и освещение масштабов трагедии?",
    "Как сегодня сохранить историческую правду и культуру памяти для будущих поколений?",
    "Смотрите вторую часть беседы с Миле Босничем и делитесь своим мнением в комментариях. Поддержите работу «Исток Инфо Пулт», поделившись выпуском и подписавшись на наш YouTube-канал."
  ],
  "highlight1": "ГЕНОЦИД СЕРБОВ В НГХ — ТРАГЕДИЯ, КОТОРУЮ НЕЛЬЗЯ СВОДИТЬ ИСКЛЮЧИТЕЛЬНО К ЯСЕНОВАЦУ.",
  "highlight2": "ИСТОРИЧЕСКАЯ ПРАВДА, УСТАНОВЛЕНИЕ ЧИСЛА ЖЕРТВ И СОХРАНЕНИЕ КУЛЬТУРЫ ПАМЯТИ ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ.",
  "videoTitle": "Смотрите вторую часть выпуска 006",
  "videoDescription": "Миле Боснич — Разговоры в Истоке | Выпуск 006 — вторая часть",
  "watchVideo": "Смотреть на YouTube"
}

// ==========================================
// YOUTUBE VIDEO
// ==========================================

const YOUTUBE_VIDEO_ID = 'D_FGX9S51II'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`

// ==========================================
// GLAVNA STRANICA
// ==========================================

export default function RazgovoriUIstoku006MileBosnicDrugiDeoPage() {
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
            { href: '/vesti/razgovori-u-istoku-006-mile-bosnic', label: "Выпуск 006 — Миле Боснич (первая часть)" },
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
              { href: '/vesti/razgovori-u-istoku-006-mile-bosnic', label: "Епизода 006 — Миле Боснић (први део)" },
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
              { href: '/vesti/razgovori-u-istoku-006-mile-bosnic', label: "Epizoda 006 — Mile Bosnić (prvi deo)" },
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
            src="/static/images/mile-bosnic-drugi-deo.jpg"
            alt={
              language === 'ru'
                ? 'Миле Боснич — Разговоры в Истоке, выпуск 006, вторая часть'
                : script === 'cyr'
                  ? 'Миле Боснић — Разговори у Истоку, епизода 006, други део'
                  : 'Mile Bosnić — Razgovori u Istoku, epizoda 006, drugi deo'
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
              const isQuestion = index >= 4 && index <= 8
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
            postSlug="razgovori-u-istoku-006-mile-bosnic-drugi-deo"
          />

        </motion.div>

      </article>
    </main>
  )
}
