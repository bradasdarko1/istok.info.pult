'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

// ==========================================
// PRETVARANJE LATINICE U ĆIRILICU
// ==========================================
function latinToCyrillic(text: string): string {
  const multiMap: Record<string, string> = {
    Dž: 'Џ', DŽ: 'Џ', dž: 'џ',
    Lj: 'Љ', LJ: 'Љ', lj: 'љ',
    Nj: 'Њ', NJ: 'Њ', nj: 'њ',
  }

  let result = text
  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ',
    E: 'Е', F: 'Ф', G: 'Г', H: 'Х', I: 'И', J: 'Ј',
    K: 'К', L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П',
    R: 'Р', S: 'С', Š: 'Ш', T: 'Т', U: 'У', V: 'В',
    Z: 'З', Ž: 'Ж', a: 'а', b: 'б', c: 'ц', č: 'ч',
    ć: 'ћ', d: 'д', đ: 'ђ', e: 'е', f: 'ф', g: 'г',
    h: 'х', i: 'и', j: 'ј', k: 'к', l: 'л', m: 'м',
    n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', š: 'ш',
    t: 'т', u: 'у', v: 'в', z: 'з', ž: 'ж',
  }

  return result.split('').map((char) => singleMap[char] ?? char).join('')
}

// ==========================================
// SRPSKI — LATINICA
// ==========================================
const srLatin = {
  category: 'Duhovni razgovori',
  title: 'DUHOVNI RAZGOVOR SA OCEM SIMEONOM RUKUMIJSKIM: REČI KOJE SVAKI PRAVOSLAVNI HRIŠĆANIN MORA DA ČUJE',
  date: 'Objavljeno: 13. novembar 2026.',
  lead: 'U prvoj epizodi novog serijala duhovnih razgovora, Nebojša Živojinović boravi u manastiru Rukumija, gde razgovara sa igumanom, arhimandritom ocem Simeonom.',
  paragraphs: [
    'Ovaj susret predstavlja početak niza razgovora posvećenih večnim životnim pitanjima, očuvanju pravoslavne vere i traženju pravilnog puta u vremenu velikih iskušenja za savremenog čoveka.',
    'Kroz ovaj smiren, iskren i dubok razgovor, otac Simeon deli dragocene pouke o suštini i lepoti pravoslavnog hrišćanstva, značaju posta i pravilnoj duhovnoj pripremi za Svetu tajnu pričešća.',
    'Govori i o svedočanstvu Blagodatnog ognja u Jerusalimu, duhovnoj snazi Časnog Krsta, kao i o tome kako sačuvati mir, porodicu i zadobiti Duha Svetoga u svakodnevnom životu — živeći po narodnoj mudrosti da se „bez Boga ni preko praga ne ide”.',
  ],
  highlight1: 'OTAC SIMEON RUKUMIJSKI O PRAVOSLAVNOJ VERI, POSTU I PRIPREMI ZA SVETO PRIČEŠĆE.',
  highlight2: 'BLAGODATNI OGANJ, ČASNI KRST, PORODICA I DUHOVNI MIR — TEME PRVE EPIZODE.',
  videoTitle: 'Pogledajte prvu epizodu serijala „Duhovni razgovori”',
  videoDescription: 'Otac Simeon Rukumijski — Duhovni razgovori | Epizoda 001',
  watchVideo: 'Pogledaj na YouTube-u',
  seriesHeading: 'O serijalu „Duhovni razgovori”',
  seriesDescription: 'Novi serijal Istok Info Pulta donosi razgovore sa sveštenim i monaškim licima o pravoslavnoj veri, duhovnom životu i pitanjima koja se tiču svakog čoveka.',
}

// ==========================================
// RUSKI JEZIK
// ==========================================
const ruText = {
  category: 'Духовные беседы',
  title: 'ДУХОВНАЯ БЕСЕДА С ОТЦОМ СИМЕОНОМ РУКУМИЙСКИМ: СЛОВА, КОТОРЫЕ ДОЛЖЕН УСЛЫШАТЬ КАЖДЫЙ ПРАВОСЛАВНЫЙ ХРИСТИАНИН',
  date: 'Опубликовано: 13 ноября 2026 г.',
  lead: 'В первом выпуске нового цикла духовных бесед Небойша Живоинович посещает монастырь Рукумия, где беседует с его настоятелем, архимандритом отцом Симеоном.',
  paragraphs: [
    'Эта встреча открывает серию бесед, посвящённых вечным жизненным вопросам, сохранению православной веры и поиску верного пути в эпоху серьёзных испытаний для современного человека.',
    'В ходе этой спокойной, искренней и глубокой беседы отец Симеон делится ценными наставлениями о сути и красоте православного христианства, значении поста и правильной духовной подготовке к Таинству Святого Причащения.',
    'Он также говорит о свидетельстве Благодатного огня в Иерусалиме, духовной силе Честного Креста и о том, как сохранить душевный мир, семью и стяжать Святого Духа в повседневной жизни, следуя народной мудрости: «Без Бога и порога не переступают».',
  ],
  highlight1: 'ОТЕЦ СИМЕОН РУКУМИЙСКИЙ О ПРАВОСЛАВНОЙ ВЕРЕ, ПОСТЕ И ПОДГОТОВКЕ К СВЯТОМУ ПРИЧАЩЕНИЮ.',
  highlight2: 'БЛАГОДАТНЫЙ ОГОНЬ, ЧЕСТНОЙ КРЕСТ, СЕМЬЯ И ДУШЕВНЫЙ МИР — ТЕМЫ ПЕРВОГО ВЫПУСКА.',
  videoTitle: 'Смотрите первый выпуск цикла «Духовные беседы»',
  videoDescription: 'Отец Симеон Рукумийский — Духовные беседы | Выпуск 001',
  watchVideo: 'Смотреть на YouTube',
  seriesHeading: 'О цикле «Духовные беседы»',
  seriesDescription: 'Новый цикл проекта «Исток Инфо Пулт» посвящён беседам со священнослужителями и монашествующими о православной вере, духовной жизни и вопросах, волнующих каждого человека.',
}

// ==========================================
// YOUTUBE I FOTOGRAFIJA
// ==========================================
const YOUTUBE_VIDEO_ID = '1jtLoQ7-Z5s'
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`
const IMAGE_URL = '/static/images/otac-simeon.jpg'
const POST_SLUG = 'duhovni-razgovori-sa-ocem-simeonom'

export default function DuhovniRazgovoriSaOcemSimeonomPage() {
  const { language, script } = useLanguage()

  const content = language === 'ru'
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
          videoTitle: latinToCyrillic(srLatin.videoTitle),
          videoDescription: latinToCyrillic(srLatin.videoDescription),
          watchVideo: latinToCyrillic(srLatin.watchVideo),
          seriesHeading: latinToCyrillic(srLatin.seriesHeading),
          seriesDescription: latinToCyrillic(srLatin.seriesDescription),
        }
      : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-4xl">
        {/* NASLOV VESTI */}
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
            text={language === 'ru'
              ? 'Читайте эту публикацию на сайте Исток Инфо Пулт'
              : script === 'cyr'
                ? 'Погледај ову вест на сајту Исток Инфо Пулт'
                : 'Pogledaj ovu vest na sajtu Istok Info Pult'}
          />
        </motion.div>

        {/* GLAVNA FOTOGRAFIJA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={IMAGE_URL}
            alt={language === 'ru'
              ? 'Отец Симеон Рукумийский — Духовные беседы, выпуск 001'
              : script === 'cyr'
                ? 'Отац Симеон Рукумијски — Духовни разговори, епизода 001'
                : 'Otac Simeon Rukumijski — Duhovni razgovori, epizoda 001'}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* SADRŽAJ VESTI */}
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

          {/* YOUTUBE VIDEO */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
            aria-label={content.videoTitle}
          >
            <div className="mb-7 text-center">
              <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-yellow-400" />
              <h2 className="text-2xl leading-tight font-extrabold text-white md:text-3xl">
                {content.videoTitle}
              </h2>
              <p className="mt-3 text-base text-gray-400 md:text-lg">
                {content.videoDescription}
              </p>
            </div>
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
            <div className="mt-7 flex justify-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 text-base font-extrabold text-black shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{content.watchVideo}</span>
              </a>
            </div>
          </motion.section>

          {/* ISTAKNUTI DEO VESTI */}
          <div className="mt-12 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold tracking-wide text-white uppercase md:text-2xl">
              {content.highlight1}
            </p>
            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />
            <p className="text-lg font-bold tracking-wide text-yellow-300 uppercase md:text-xl">
              {content.highlight2}
            </p>
          </div>

          {/* O SERIJALU — PRVA EPIZODA */}
          <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
              {content.seriesHeading}
            </h2>
            <p className="text-base leading-8 text-gray-300 md:text-lg">
              {content.seriesDescription}
            </p>
          </section>

          {/* KOMENTARI */}
          <CommentsSection postSlug={POST_SLUG} />
        </motion.div>
      </article>
    </main>
  )
}
