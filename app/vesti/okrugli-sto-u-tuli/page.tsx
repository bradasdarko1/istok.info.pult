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
  title: 'Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata',
  date: 'Objavljeno: 19. maj 2026.',
  lead: 'Tula, 15. maj 2026. godine – Na Tulskom državnom univerzitetu održan je međunarodni okrugli sto pod nazivom „Očuvanje istorijskog pamćenja i suprotstavljanje falsifikovanju istorije”.',
  paragraphs: [
    'Skup je otvorio Jevgenij Rjabinjin, kandidat pedagoških nauka i docent Marijupoljskog državnog univerziteta, izlaganjem o zloupotrebi kinematografa u falsifikovanju istorijskih događaja. Rjabinjin je detaljno analizirao američke filmove snimljene tokom 1990-ih i početkom 21. veka, u kojima su Srbi dosledno prikazivani kao negativci – krvnici, ratni zločinci i divljaci. Takav narativ, istakao je on, pripremao je teren za legitimizaciju NATO bombardovanja Savezne Republike Jugoslavije 1999. godine. Isti obrazac, upozorio je Rjabinjin, danas se primenjuje na Ruse u holivudskoj produkciji, gde se oblikuje javno mnjenje pre bilo kakvog stvarnog sukoba.',
    'Dejan Umetić, direktor Arhiva Srema iz Sremske Mitrovice, govorio je o kulturi pamćenja u geografskom regionu Srema – ali iz perspektive hrvatskog dela tog prostora. Umetić je nedvosmisleno pokazao kako država Hrvatska sistematski briše svaki trag srpskog prisustva na teritoriji zapadnog Srema, iako su Srbi na tom prostoru žieli vekovima. Srem je, podsetio je, najviše stradao tokom Drugog svetskog rata pod ustaškim režimom, ali se razaranje srpskog identiteta, istorije i kulture nastavlja i danas – kroz menjanje naziva ulica, rušenje spomenika, zabranu ćirilice i reviziju udžbenika.',
    'Milan Stojanović, sa TulGU-a, nadovezao se na Umetićevo izlaganje, predočivši dokumentarne dokaze o institucionalnom uništavanju arhiva i kulturnog nasleđa Srba u Hrvatskoj.Nakon raspada Jugoslavije, Hrvatska je sistematski uništavala srpsko nasleđe: uništeno je 2,8 miliona knjiga, proterano 400.000 Srba, a logor smrti Jasenovac se prikazuje kao „radni logor”. Velikani poput Nikole Tesle prisvajaju se kao hrvatski. Ovakva revizija istorije, upozorava autor, neizbežno vodi novim tragedijama.',
    'Posebnu pažnju privukao je Boris Murvanidze, kandidat istorijskih nauka i direktor Ivanovskog doma nacionalnosti. Murvanidze je prezentovao svoju tek izašlu knjigu „Lekcije istine”, u kojoj razotkriva sistematsku falsifikaciju ruske istorije na Zapadu. Od vremena Petra Velikog do savremenih događaja, zapadni narativi, prema Murvanidzeu, svesno izobličuju ulogu Rusije u svetu. Pozvavši se na Ukaz predsednika Rusije br. 809, istakao je da je istorijsko pamćenje i kontinuitet generacija jedna od 17 tradicionalnih vrednosti koje danas treba braniti – ne samo u školi i nauci, već i kroz knjige, filmove i digitalne platforme.',
    'Sergej Fedosejev, istoričar i predavač Društva „Znanje”, iznio je pregled antiruskih krovnih organizacija od 1914. do 2014. godine. Hronološki je pratio razvoj prometeizma – od „Japanskog memoranduma” Pilsudskog (1904) i Lige Obera (1924) do savremenih inicijativa poput Foruma slobodnih naroda Rusije (2022). Fedosejev je pokazao kontinuitet strategija usmerenih na rasparčavanje Rusije, koje danas dobijaju nove ruho kroz Inicijativu tri mora i Lublinski trougao.',
    'Nikolaj Bazajev iz Južne Osetije uporedio je falsifikovanje istorije u nacističkoj Nemačkoj i savremenoj Ukrajini, dok je Ostoja Vojinović s Uralskog federalnog univerziteta detaljno analizirao bombardovanje Radio-televizije Srbije 23. aprila 1999. godine, pozivajući se na izveštaje Haškog tribunala i Amnesti internešnala.',
    'Skup je zaključio Aleksej Savin sa TulGU-a, podsetivši da falsifikovanje istorije nije akademska igra – ono predstavlja direktno oružje u informacionim ratovima, sa ciljem da legitimiše vojne intervencije i destabilizuje celokupne regione.',
    'Okrugli sto u Tuli potvrdio je da je istina o prošlosti – uprkos svim napadima – i dalje najsnažniji temelj za mir i budućnost.'
  ],
  
  highlight1: 'Istorija kao oružje: učesnici upozoravaju da se kroz filmove, medije i obrazovanje sistematski oblikuje javno mnjenje pre političkih i vojnih sukoba.',
  highlight2: 'Od Balkana do Rusije – panel je ukazao na kontinuitet revizije istorije i pokušaje brisanja identiteta kroz institucije, kulturu i obrazovni sistem.',
}

const ruText = {
  category: 'Новости',
  title: 'КРУГЛЫЙ СТОЛ В ТУЛЕ: ИСТОРИЧЕСКАЯ ПАМЯТЬ ПОД УДАРОМ ФАЛЬСИФИКАЦИЙ',
  date: 'Опубликовано: 19 мая 2026 г.',
  lead: 'Тула, 15 мая 2026 г. – В Тульском государственном университете состоялся международный круглый стол на тему «Сохранение исторической памяти и противодействие фальсификации истории».',
  paragraphs: [
    'Открывая заседание, кандидат педагогических наук, доцент Мариупольского государственного университета Евгений Рябинин представил анализ роли кинематографа в формировании исторических нарративов. Он отметил, что в американских фильмах 1990-х и начала 2000-х годов сербы часто изображались в негативном свете, что, по его мнению, способствовало формированию общественного мнения и оправданию бомбардировки Югославии НАТО в 1999 году. По словам Рябинина, аналогичный подход сегодня применяется и к образу России.',
    'Директор Архива Срема из Сремской Митровицы Деян Уметич выступил с докладом о культуре памяти в регионе Срем, уделив особое внимание его западной части. Он подчеркнул, что посредством институциональных механизмов происходит постепенное стирание следов сербского исторического и культурного присутствия.',
    'Милан Стоянович из Тульского государственного университета представил документальные свидетельства разрушения сербского культурного наследия в Хорватии, включая уничтожение библиотек и изменение трактовки исторических событий.',
    'Особый интерес вызвало выступление Бориса Мурванидзе, директора Ивановского дома национальностей, который представил свою книгу «Уроки истины». В ней рассматривается процесс искажения российской истории в западных нарративах от эпохи Петра Великого до наших дней.',
    'Историк Сергей Федосеев из общества «Знание» представил обзор антироссийских инициатив и организаций за последнее столетие, подчеркнув преемственность геополитических стратегий.',
    'В заключительной части Николай Базаев из Южной Осетии провёл сравнительный анализ моделей фальсификации истории, а Остоя Войнович из Уральского федерального университета рассмотрел бомбардировку Радио-телевидения Сербии в 1999 году на основе международных отчётов.',
    'Итоги подвёл Алексей Савин, отметив, что фальсификация истории сегодня является важным инструментом информационных войн, направленным на формирование общественного мнения и оправдание политических решений.',
    'Круглый стол в Туле подтвердил, что сохранение исторической памяти остаётся ключевым фактором для понимания современности и обеспечения стабильного будущего.'
  ],
  
  highlight1: 'История как оружие: участники предупреждают, что посредством фильмов, СМИ и образования общественное мнение систематически формируется в преддверии политических и военных конфликтов.',
  highlight2: 'От Балкан до России участники дискуссии указали на преемственность в пересмотре истории и попытках стереть идентичность посредством институтов, культуры и системы образования.',
}

const galleryImages = [
  { src: '/static/images/okrugli-sto-3.jpeg', alt: 'slika 1' },
  { src: '/static/images/okrugli-sto-1.jpeg', alt: 'slika 2' },
  { src: '/static/images/okrugli-sto-2.jpeg', alt: 'slika 3' },
  { src: '/static/images/okrugli-sto-4.jpeg', alt: 'slika 4' },
  { src: '/static/images/okrugli-sto-5.jpeg', alt: 'slika 5' },
  
]

export default function OkrugliStoUTuliPage() {
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
            src="/static/images/okrugli-sto-3.jpeg"
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

          <CommentsSection postSlug="okrugli-sto-u-tuli" />
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