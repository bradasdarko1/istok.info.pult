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

const srLatin = {
  category: 'Konkursi',
  title: 'LETNJI INSTITUT OTVARA VRATA MLADIM NAUČNICIMA DO 35 GODINA',
  date: 'Objavljeno: 21. april 2026.',
  lead: 'Mladi naučnici, nastavnici i istraživači imaju priliku da ovog leta učestvuju u prestižnom programu dodatnog profesionalnog obrazovanja u Rusiji.',
  paragraphs: [
    'Program „Letnji institut za mlade nastavnike i istraživače“ namenjen je mladim nastavnicima i istraživačima stranih univerziteta do 35 godina, koji ranije nisu učestvovali u ovom projektu, niti studirali ili radili na teritoriji Rusije.',
    'Program će biti održan od 20. jula do 2. avgusta 2026. godine i predstavlja priliku da učesnici tokom dve nedelje pohađaju dodatno profesionalno obrazovanje, upoznaju vodeće ruske univerzitete i uspostave nove akademske kontakte.',
    'Organizatori pokrivaju sve troškove učešća, uključujući povratne putne karte, vize, smeštaj, ishranu i ekskurzije.',
    'Učesnicima su na raspolaganju različiti obrazovni programi na univerzitetima domaćinima širom Rusije.',
    'Pskovski državni univerzitet organizuje program „Ruski jezik kao jezik međuetničke komunikacije“.',
    'Ruski državni univerzitet društvenih nauka u Moskvi nudi program „Istorijski procesi na evroazijskom prostoru: metodologija i novi pristupi proučavanju“.',
    'Državni lingvistički univerzitet „Nikolaj Dobroljubov“ u Nižnjem Novgorodu realizuje program iz oblasti društvenih nauka.',
    'Sanktpeterburški državni elektrotehnički univerzitet „LETI“ nudi dva obrazovna smera: „Elektronika i automatizacija“ i „Nuklearne tehnologije“.',
    'Industrijski univerzitet u Tjumenju učesnicima nudi program „Održivi razvoj: tehnologije, ekologija, bezbednost“.',
    'Program je podeljen na obrazovni, kulturni i postprojektni blok. Obrazovni deo uključuje praktičnu nastavu, stažiranje na partnerskim univerzitetima i susrete sa stručnjacima. Kulturni blok obuhvata ekskurzije, radionice i diskusije, dok postprojektni deo omogućava pripremu zajedničkih naučnih radova, istraživanja i nastavnih materijala.',
    'Prijave su otvorene do 15. maja 2026. godine, dok će odabir učesnika biti završen do 30. maja 2026. godine.',
    'Za prijavu je potrebno registrovati se na sajtu projekta, popuniti prijavu sa pratećom dokumentacijom i dostaviti motivacioni video u kojem kandidat jasno objašnjava svoju motivaciju, ciljeve, mogući doprinos projektu i povezanost svoje profesionalne oblasti sa izabranom tematikom.',
    'Detaljan sadržaj svakog programa dostupan je klikom na logo univerziteta na zvaničnom sajtu projekta.',
  ],
  infoLabel: 'Korisni linkovi:',
  links: [
    {
      label: 'Sajt projekta',
      url: 'https://summerinstitute.ru/',
    },
    {
      label: 'English version',
      url: 'https://summerinstitute.ru/en/',
    },
    {
      label: 'Registracija',
      url: 'https://summerinstitute.ru/auth/sign-up/',
    },
  ],
  highlight1: 'SVI TROŠKOVI UČEŠĆA SU POKRIVENI',
  highlight2: 'PRIJAVE TRAJU DO 15. MAJA 2026.',
}

const ruText = {
  category: 'Соревнования',
  title: 'ЛЕТНИЙ ИНСТИТУТ ОТКРЫВАЕТ ДВЕРИ ДЛЯ МОЛОДЫХ УЧЕНЫХ ДО 35 ЛЕТ',
  date: 'Опубликовано: 21 апреля 2026 г.',
  lead: 'Молодые ученые, преподаватели и исследователи получают возможность этим летом принять участие в престижной программе дополнительного профессионального образования в России.',
  paragraphs: [
    'Программа «Летний институт для молодых преподавателей и исследователей» предназначена для молодых преподавателей и исследователей зарубежных университетов до 35 лет, которые ранее не участвовали в этом проекте, а также не обучались и не работали на территории России.',
    'Программа пройдет с 20 июля по 2 августа 2026 года и станет возможностью в течение двух недель пройти дополнительное профессиональное обучение, познакомиться с ведущими российскими университетами и наладить новые академические контакты.',
    'Организаторы покрывают все расходы участников, включая авиабилеты в обе стороны, визы, проживание, питание и экскурсии.',
    'Участникам предлагаются различные образовательные программы в университетах-партнерах по всей России.',
    'Псковский государственный университет проводит программу «Русский язык как язык межэтнической коммуникации».',
    'Российский государственный университет социальных наук в Москве предлагает программу «Исторические процессы на евразийском пространстве: методология и новые подходы к изучению».',
    'Государственный лингвистический университет имени Николая Добролюбова в Нижнем Новгороде реализует программу по социальным наукам.',
    'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» предлагает два образовательных направления: «Электроника и автоматизация» и «Ядерные технологии».',
    'Индустриальный университет Тюмени приглашает участников на программу «Устойчивое развитие: технологии, экология, безопасность».',
    'Программа включает образовательный, культурный и постпроектный блоки. Образовательная часть предусматривает практические занятия, стажировки в университетах-партнерах и встречи со специалистами. Культурный блок включает экскурсии, мастер-классы и дискуссии, а постпроектный блок направлен на подготовку совместных научных статей, исследований и учебно-методических материалов.',
    'Прием заявок открыт до 15 мая 2026 года, а отбор участников будет завершен до 30 мая 2026 года.',
    'Для участия необходимо зарегистрироваться на сайте проекта, заполнить заявку со всеми необходимыми документами и записать мотивационное видео, в котором кандидат ясно изложит свою мотивацию, цели, возможный вклад в проект и связь своей профессиональной области с выбранной тематикой.',
    'Подробное содержание каждой программы доступно при нажатии на логотип университета на официальном сайте проекта.',
  ],
  infoLabel: 'Полезные ссылки:',
  links: [
    {
      label: 'Сайт проекта',
      url: 'https://summerinstitute.ru/',
    },
    {
      label: 'Английская версия',
      url: 'https://summerinstitute.ru/en/',
    },
    {
      label: 'Регистрация',
      url: 'https://summerinstitute.ru/auth/sign-up/',
    },
  ],
  highlight1: 'ВСЕ РАСХОДЫ НА УЧАСТИЕ ПОКРЫВАЮТСЯ',
  highlight2: 'ПОДАЧА ЗАЯВОК ОТКРЫТА ДО 15 МАЯ 2026 ГОДА',
}

export default function LetnjiInstitutPage() {
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
            paragraphs: srLatin.paragraphs.map(latinToCyrillic),
            infoLabel: latinToCyrillic(srLatin.infoLabel),
            links: srLatin.links.map((link) => ({
              label: latinToCyrillic(link.label),
              url: link.url,
            })),
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
          <img
            src="/static/images/letnji-institut.jpeg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
              <p className="mb-4 text-base font-semibold text-white md:text-lg">
                {content.infoLabel}
              </p>

              <div className="space-y-3">
                {content.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block break-all text-lg font-bold text-yellow-400 underline underline-offset-4 transition hover:text-yellow-300 md:text-xl"
                  >
                    {link.label}: {link.url}
                  </a>
                ))}
              </div>
            </div>
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

          <CommentsSection postSlug="letnji-institut-mladi-naucnici" />
        </motion.div>
      </article>
    </main>
  )
}
