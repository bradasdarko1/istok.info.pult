
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
  title: 'RAZGOVORI U ISTOKU | EPIZODA 004 — MIĆA ŽIVOJINOVIĆ',
  date: 'Objavljeno: 3. novembar 2026.',
  lead: 'U četvrtoj epizodi emisije „Razgovori u Istoku“ gost je pukovnik prof. dr Mića Živojinović, doktor međunarodnog prava i dugogodišnji istraživač, čiji je mentor bila čuvena dr Smilja Avramov.',
  paragraphs: [
    'Kroz pravnu i arhivsku analizu, profesor Živojinović razmatra nedovoljno rasvetljene događaje iz Drugog svetskog rata, sa posebnim osvrtom na generala Dragoljuba Dražu Mihailovića.',
    'U razgovoru otvaramo pitanje pravnog položaja Kraljevine Jugoslavije 1941. godine i tvrdnju da nikada nije formalno potpisana njena kapitulacija. Šta o tome govore međunarodno pravo i istorijski dokumenti?',
    'Posebnu pažnju posvećujemo odnosima sa Sovjetskim Savezom: navodnoj prepisci Draže i Staljina, ulozi Mustafe Golubića i uticaju Dragutina Dimitrijevića Apisa.',
    'Jedna od tema jeste i sudbina Nikole Kalabića. Šta zvanični arhivski dokumenti govore o njegovoj pogibiji i kako se ti podaci uklapaju u poznate verzije priče o hapšenju generala Mihailovića?',
    'Razgovaramo i o ulozi britanskih službi, Čerčilovom telegramu i različitim tumačenjima okolnosti pod kojima je general Mihailović uhapšen.',
    'Na kraju, osvrćemo se na pozadinu suđenja 1946. godine i pitanje da li bi otvaranje ruskih arhiva moglo da pruži nove odgovore o mestu generalovog groba.',
    'Koji zaključci počivaju na dostupnim dokumentima, a koja pitanja i dalje ostaju otvorena? Pogledajte četvrtu epizodu i procenite argumente iznete u razgovoru.',
    'Pratite kanal Istok Info Pult, pretplatite se i uključite obaveštenja kako ne biste propustili naredne epizode. Svoje mišljenje i pitanja ostavite u komentarima.'
  ],
  highlight1: 'MIĆA ŽIVOJINOVIĆ O DRAŽI MIHAILOVIĆU, DOKUMENTIMA IZ ARHIVA I NERASVETLJENIM PITANJIMA DRUGOG SVETSKOG RATA.',
  highlight2: 'JUGOSLAVIJA 1941, DRAŽA I STALJIN, NIKOLA KALABIĆ, BRITANSKE SLUŽBE I SUĐENJE IZ 1946. GODINE.',
  videoTitle: 'Pogledajte četvrtu epizodu našeg podkasta',
  videoDescription: 'Mića Živojinović – Razgovori u Istoku | Epizoda 004',
  watchVideo: 'Pogledaj na YouTube-u',
}

// ==========================================
// RUSKI JEZIK
// ==========================================

const ruText = {
  category: 'Новости',
  title: 'РАЗГОВОРЫ В «ИСТОКЕ» | ЭПИЗОД 004 — МИЧА ЖИВОИНОВИЧ',
  date: 'Опубликовано: 3 ноября 2026 г.',
  lead: 'Гость четвёртого выпуска программы «Разговоры в Истоке» — полковник, профессор, доктор Мича Живоинович, специалист по международному праву и многолетний исследователь, научным наставником которого была известная профессор Смиля Аврамов.',
  paragraphs: [
    'Опираясь на правовой анализ и архивные материалы, профессор Живоинович рассматривает недостаточно изученные события Второй мировой войны, уделяя особое внимание генералу Драголюбу Драже Михайловичу.',
    'Мы обсуждаем правовое положение Королевства Югославия в 1941 году и тезис о том, что официальная капитуляция государства так и не была подписана. Что об этом говорят международное право и исторические документы?',
    'Отдельная тема — связи с Советским Союзом: предполагаемая переписка Дражи и Сталина, роль Мустафы Голубича и влияние Драгутина Димитриевича Аписа.',
    'Важное место занимает судьба Николы Калабича. Что официальные архивные документы говорят о его гибели и как эти сведения соотносятся с известными версиями ареста генерала Михайловича?',
    'Речь также идёт о роли британских спецслужб, телеграмме Черчилля и различных трактовках обстоятельств задержания генерала Михайловича.',
    'В заключение мы рассматриваем обстоятельства суда 1946 года и задаёмся вопросом, могут ли открытые российские архивы помочь установить место захоронения генерала.',
    'Какие выводы основаны на доступных документах, а какие вопросы всё ещё остаются открытыми? Смотрите четвёртый выпуск и оцените аргументы, представленные в беседе.',
    'Подписывайтесь на канал Исток Инфо Пулт и включайте уведомления, чтобы не пропустить новые выпуски. Делитесь своим мнением и вопросами в комментариях.'
  ],
  highlight1: 'МИЧА ЖИВОИНОВИЧ О ДРАЖЕ МИХАЙЛОВИЧЕ, АРХИВНЫХ ДОКУМЕНТАХ И НЕРАЗРЕШЁННЫХ ВОПРОСАХ ВТОРОЙ МИРОВОЙ ВОЙНЫ.',
  highlight2: 'ЮГОСЛАВИЯ В 1941 ГОДУ, ДРАЖА И СТАЛИН, НИКОЛА КАЛАБИЧ, БРИТАНСКИЕ СПЕЦСЛУЖБЫ И СУД 1946 ГОДА.',
  videoTitle: 'Смотрите четвёртый выпуск нашего подкаста',
  videoDescription: 'Мича Живоинович — Разговоры в Истоке | Эпизод 004',
  watchVideo: 'Смотреть на YouTube',
}

// ==========================================
// YOUTUBE VIDEO
// ==========================================

const YOUTUBE_VIDEO_ID = '' // TODO: upiši ID snimka epizode 004

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`

// ==========================================
// GLAVNA STRANICA
// ==========================================

export default function RazgovoriUIstoku004MicaZivojinovicPage() {
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
              label:
                'Выпуск 001 — Драгана Трифкович',
            },
            {
              href: '/vesti/razgovori-u-istoku-002',
              label:
                'Выпуск 002 — Карло Дулович и Милан Гламочанин',
            },
            { href: '/vesti/razgovori-u-istoku-gost-marija-jovovic', label: 'Выпуск 003 — Мария Йовович' },
          ],
        }
      : script === 'cyr'
        ? {
            heading:
              'Остале епизоде подкаста „Разговори у Истоку“',
            episodes: [
              {
                href: '/vesti/razgovori-u-istoku',
                label:
                  'Епизода 001 — Драгана Трифковић',
              },
              {
                href: '/vesti/razgovori-u-istoku-002',
                label:
                  'Епизода 002 — Карло Дуловић и Милан Гламочанин',
              },
              { href: '/vesti/razgovori-u-istoku-gost-marija-jovovic', label: 'Епизода 003 — Марија Јововић' },
            ],
          }
        : {
            heading:
              'Ostale epizode podkasta „Razgovori u Istoku“',
            episodes: [
              {
                href: '/vesti/razgovori-u-istoku',
                label:
                  'Epizoda 001 — Dragana Trifković',
              },
              {
                href: '/vesti/razgovori-u-istoku-002',
                label:
                  'Epizoda 002 — Karlo Dulović i Milan Glamočanin',
              },
              { href: '/vesti/razgovori-u-istoku-gost-marija-jovovic', label: 'Epizoda 003 — Marija Jovović' },
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
            src="/static/images/razgovori-u-istoku-004-mica-zivojinovic.jpg"
            alt={
              language === 'ru'
                ? 'Мича Живоинович — Разговоры в Истоке, выпуск 004'
                : script === 'cyr'
                  ? 'Мића Живојиновић — Разговори у Истоку, епизода 004'
                  : 'Mića Živojinović — Razgovori u Istoku, epizoda 004'
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
            {content.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
          </div>

          {/* ==================================
              YOUTUBE VIDEO
          ================================== */}

          {YOUTUBE_VIDEO_ID && <motion.section
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

          </motion.section>}

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
            postSlug="razgovori-u-istoku-004-mica-zivojinovic"
          />

        </motion.div>

      </article>
    </main>
  )
}
