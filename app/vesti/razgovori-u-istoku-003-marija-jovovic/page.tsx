
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
    'RAZGOVORI U ISTOKU | EPIZODA 003 — MARIJA JOVOVIĆ',

  date: 'Objavljeno: 26. oktobar 2026.',

  lead:
    'U trećoj epizodi emisije „Razgovori u Istoku“, imali smo veliku čast da ugostimo Mariju Jovović, ćerku Blagoja Jovovića — čoveka koji je izvršio atentat na ustaškog poglavnika Antu Pavelića.',

  paragraphs: [
    'U ovom otvorenom i dubokom razgovoru, Marija otkriva malo poznate detalje o životu svog oca, porodičnim sećanjima, istorijskim okolnostima u emigraciji i istini koja je decenijama ostala daleko od očiju javnosti.',

    'Šta je zapravo značilo živeti sa takvim nasleđem? Kako iz prve ruke izgleda priča o jednom od najpoznatijih događaja u srpskoj posleratnoj istoriji? Kroz lična sećanja i porodična svedočanstva, Marija Jovović donosi drugačiji pogled na život Blagoja Jovovića, njegovu odluku i posledice koje su pratile njegovu porodicu.',

    'Posebno mesto u razgovoru zauzima život porodice Jovović u Argentini, daleko od otadžbine, kao i pitanje kako se čuva porodična istorija kada je ona istovremeno deo mnogo šire nacionalne istorije.',

    'U trećoj epizodi saznajte:',

    'Ko je zapravo bio Blagoje Jovović van istorijskih mitova i naslova?',

    'Kako je izgledao život porodice Jovović u Argentini i čuvanje porodične tajne?',

    'Kako je došlo do odluke o atentatu na Antu Pavelića i šta je usledilo nakon toga?',

    'Šta su značili povratak u otadžbinu i prenošenje porodičnog nasleđa novim generacijama?',

    'Ovo nije samo razgovor o jednom istorijskom događaju. Ovo je priča o porodici, sećanju, identitetu i teretu prezimena koje je ostavilo dubok trag u srpskoj istoriji.',

    'ISTOK KLUB – budite deo naše priče!'
  ],

  highlight1:
    'MARIJA JOVOVIĆ OTKRIVA PORODIČNA SEĆANJA I MALO POZNATE DETALJE IZ ŽIVOTA SVOG OCA BLAGOJA JOVOVIĆA.',

  highlight2:
    'ŽIVOT U ARGENTINI, ATENTAT NA ANTU PAVELIĆA I TERET PREZIMENA KOJE JE POSTALO DEO SRPSKE ISTORIJE.',

  videoTitle:
    'Pogledajte treću epizodu našeg podkasta',

  videoDescription:
    'Marija Jovović – Razgovori u Istoku | Epizoda 003',

  watchVideo:
    'Pogledaj na YouTube-u',
}

// ==========================================
// RUSKI JEZIK
// ==========================================

const ruText = {
  category: 'Новости',

  title:
    'РАЗГОВОРЫ В «ИСТОКЕ» | ЭПИЗОД 003 — МАРИЯ ЙОВОВИЧ',

  date: 'Опубликовано: 26 октября 2026 г.',

  lead:
    'В третьем выпуске программы «Разговоры в Истоке» мы имели большую честь принять Марию Йовович, дочь Благоя Йововича — человека, совершившего покушение на лидера усташского режима Анте Павелича.',

  paragraphs: [
    'В этом откровенном и глубоком разговоре Мария раскрывает малоизвестные подробности жизни своего отца, делится семейными воспоминаниями, рассказывает об исторических обстоятельствах жизни в эмиграции и о правде, которая десятилетиями оставалась практически неизвестной широкой общественности.',

    'Что на самом деле означало жить с таким наследием? Как выглядит история одного из самых известных событий сербской послевоенной истории глазами семьи непосредственного участника? Через личные воспоминания и семейные свидетельства Мария Йовович предлагает по-новому взглянуть на жизнь Благоя Йововича, его решение и последствия, с которыми столкнулась его семья.',

    'Особое место в беседе занимает жизнь семьи Йовович в Аргентине, вдали от родины, а также вопрос сохранения семейной памяти, когда личная история становится частью истории целого народа.',

    'В третьем выпуске вы узнаете:',

    'Кем на самом деле был Благой Йовович за пределами исторических мифов и газетных заголовков?',

    'Как жила семья Йовович в Аргентине и как сохранялась семейная тайна?',

    'Как было принято решение о покушении на Анте Павелича и что произошло после него?',

    'Что означали возвращение на родину и передача семейного наследия будущим поколениям?',

    'Это не просто разговор об одном историческом событии. Это история о семье, памяти, национальной идентичности и бремени фамилии, оставившей глубокий след в сербской истории.',

    'ИСТОК КЛУБ — станьте частью нашей истории!'
  ],

  highlight1:
    'МАРИЯ ЙОВОВИЧ ДЕЛИТСЯ СЕМЕЙНЫМИ ВОСПОМИНАНИЯМИ И МАЛОИЗВЕСТНЫМИ ПОДРОБНОСТЯМИ ЖИЗНИ СВОЕГО ОТЦА БЛАГОЯ ЙОВОВИЧА.',

  highlight2:
    'ЖИЗНЬ В АРГЕНТИНЕ, ПОКУШЕНИЕ НА АНТЕ ПАВЕЛИЧА И БРЕМЯ ФАМИЛИИ, СТАВШЕЙ ЧАСТЬЮ СЕРБСКОЙ ИСТОРИИ.',

  videoTitle:
    'Смотрите третий выпуск нашего подкаста',

  videoDescription:
    'Мария Йовович — Разговоры в Истоке | Эпизод 003',

  watchVideo:
    'Смотреть на YouTube',
}

// ==========================================
// YOUTUBE VIDEO
// ==========================================

const YOUTUBE_VIDEO_ID = 'IZ9_u2N6dek'

const YOUTUBE_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const YOUTUBE_EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`

// ==========================================
// GLAVNA STRANICA
// ==========================================

export default function RazgovoriUIstoku003Page() {
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
            src="/static/images/razgovori-u-istoku-003-marija-jovovic.jpg"
            alt={
              language === 'ru'
                ? 'Мария Йовович — Разговоры в Истоке, выпуск 003'
                : script === 'cyr'
                  ? 'Марија Јововић — Разговори у Истоку, епизода 003'
                  : 'Marija Jovović — Razgovori u Istoku, epizoda 003'
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
            postSlug="razgovori-u-istoku-003-marija-jovovic"
          />

        </motion.div>

      </article>
    </main>
  )
}
