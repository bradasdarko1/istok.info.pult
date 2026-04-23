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
  title: 'LETNJI UNIVERZITET U RUSIJI OTVARA VRATA STRANIM STUDENTIMA',
  date: 'Objavljeno: 23. april 2026.',
  lead: 'Studenti završnih godina osnovnih i specijalističkih studija imaju priliku da ovog leta učestvuju u međunarodnom programu „Letnji univerzitet“ i upoznaju rusko visoko obrazovanje, kulturu i akademski život iz prve ruke.',
  paragraphs: [
    'Projekat „Letnji univerzitet“ otvoren je za sve koji žele da se upoznaju sa ruskim visokim obrazovanjem, tradicijama i kulturom zemlje, steknu nova prijateljstva i postanu deo međunarodnog studentskog okruženja jednog od vodećih univerziteta.',
    'Program će biti održan od 6. do 19. jula 2026. godine.',
    'U projektu mogu učestvovati studenti završnih godina osnovnih studija, odnosno treće i četvrte godine, kao i studenti završnih godina specijalističkih studija, odnosno četvrte i pete godine, koji studiraju na stranim univerzitetima van Rusije.',
    'Organizatori pokrivaju sve troškove učešća, uključujući povratne putne karte, smeštaj, ishranu i ekskurzije.',
    'Učesnicima su na raspolaganju obrazovni programi na tri velika univerziteta domaćina.',
    'Kazanjski federalni univerzitet nudi sedam obrazovnih programa, uključujući i programe na engleskom jeziku.',
    'Uralski federalni univerzitet iz Jekaterinburga organizuje osam programa na ruskom i engleskom jeziku.',
    'Sibirski federalni univerzitet iz Krasnojarska nudi osam programa u okviru sedam različitih oblasti.',
    'Program je podeljen na obrazovni blok, projektni blok i kulturno-društveni blok.',
    'Obrazovni blok podrazumeva sticanje novih znanja i rad u međunarodnom akademskom okruženju.',
    'Projektni blok obuhvata posete vodećim kompanijama, upoznavanje sa njihovom infrastrukturom i inovativnim tehnologijama, rešavanje studija slučaja i razvoj biznis-projekata.',
    'Kulturno-društveni blok uključuje radionice, umrežavanje, zabavni program, ekskurzije i sportske aktivnosti.',
    'Prijave su otvorene do 8. maja 2026. godine, dok će odabir učesnika biti završen do 29. maja 2026. godine.',
    'Svi kandidati biće obavešteni o rezultatima konkursnog izbora.',
    'Za prijavu je potrebno registrovati se na sajtu projekta, popuniti prijavu sa svim potrebnim dokumentima i dostaviti motivacioni video.',
    'U motivacionom videu kandidat treba jasno da objasni zašto želi da učestvuje u programu, pokaže spremnost za učenje i aktivno učešće, eventualno iskustvo međukulturne komunikacije, kao i povezanost projekta sa svojim akademskim i karijernim ciljevima.',
    'Preporuka organizatora je da kandidati izbegavaju opšte formulacije i umesto toga navedu konkretne primere koji potvrđuju njihovu motivaciju i spremnost za učešće.',
  ],
  infoLabel: 'Korisni linkovi:',
  links: [
    {
      label: 'Sajt projekta',
      url: 'https://summeruniversity.ru/',
    },
    {
      label: 'Registracija',
      url: 'https://summeruniversity.ru/lk/auth',
    },
    {
      label: 'Programi univerziteta',
      url: 'https://summeruniversity.ru/program/kfu/',
    },
  ],
  highlight1: 'STUDIRAJ, PUTUJ I UPOZNAJ RUSIJU UZ POTPUNO POKRIVENE TROŠKOVE',
  highlight2: 'PRIJAVE TRAJU DO 8. MAJA 2026. GODINE',
}

const ruText = {
  category: 'Конкурсы',
  title: 'ЛЕТНИЙ УНИВЕРСИТЕТ В РОССИИ ОТКРЫВАЕТ ДВЕРИ ИНОСТРАННЫМ СТУДЕНТАМ',
  date: 'Опубликовано: 23 апреля 2026 г.',
  lead: 'Студенты выпускных курсов бакалавриата и специалитета получают возможность этим летом принять участие в международной программе «Летний университет» и познакомиться с российским высшим образованием, культурой и академической жизнью изнутри.',
  paragraphs: [
    'Проект «Летний университет» открыт для всех, кто хочет познакомиться с российским высшим образованием, традициями и культурой страны, найти новых друзей и стать частью международной студенческой среды одного из ведущих университетов.',
    'Программа пройдет с 6 по 19 июля 2026 года.',
    'В проекте могут участвовать студенты выпускных курсов бакалавриата, а именно 3–4 курсов, а также студенты выпускных курсов специалитета, а именно 4–5 курсов, обучающиеся в зарубежных университетах за пределами России.',
    'Организаторы покрывают все расходы на участие, включая проезд туда и обратно, проживание, питание и экскурсии.',
    'Участникам предлагаются образовательные программы в трех крупных университетах-организаторах.',
    'Казанский федеральный университет предлагает семь образовательных программ, включая программы на английском языке.',
    'Уральский федеральный университет в Екатеринбурге организует восемь программ на русском и английском языках.',
    'Сибирский федеральный университет в Красноярске предлагает восемь программ по семи различным направлениям.',
    'Программа состоит из образовательного блока, проектного блока и культурно-общественного блока.',
    'Образовательный блок предусматривает получение новых знаний и работу в международной академической среде.',
    'Проектный блок включает посещение ведущих компаний, знакомство с их инфраструктурой и инновационными технологиями, решение кейсов и разработку бизнес-проектов.',
    'Культурно-общественный блок включает мастер-классы, нетворкинг, развлекательную программу, экскурсии и спортивные активности.',
    'Прием заявок открыт до 8 мая 2026 года, а отбор участников будет завершен до 29 мая 2026 года.',
    'Все кандидаты будут уведомлены о результатах конкурсного отбора.',
    'Для подачи заявки необходимо зарегистрироваться на сайте проекта, заполнить заявку со всеми необходимыми документами и предоставить мотивационное видео.',
    'В мотивационном видео кандидат должен ясно объяснить, почему он хочет участвовать в программе, показать готовность к обучению и активному участию, при наличии — опыт межкультурной коммуникации, а также связь проекта со своими академическими и карьерными целями.',
    'Организаторы рекомендуют избегать общих формулировок и вместо этого приводить конкретные примеры, подтверждающие мотивацию и готовность к участию.',
  ],
  infoLabel: 'Полезные ссылки:',
  links: [
    {
      label: 'Сайт проекта',
      url: 'https://summeruniversity.ru/',
    },
    {
      label: 'Регистрация',
      url: 'https://summeruniversity.ru/lk/auth',
    },
    {
      label: 'Программы университетов',
      url: 'https://summeruniversity.ru/program/kfu/',
    },
  ],
  highlight1: 'УЧИСЬ, ПУТЕШЕСТВУЙ И ОТКРЫВАЙ РОССИЮ С ПОЛНЫМ ПОКРЫТИЕМ РАСХОДОВ',
  highlight2: 'ПРИЕМ ЗАЯВОК ОТКРЫТ ДО 8 МАЯ 2026 ГОДА',
}

export default function LetnjiUniverzitetPage() {
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
            src="/static/images/letnji-univerzitet.jpeg"
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

          <CommentsSection postSlug="letnji-univerzitet" />
        </motion.div>
      </article>
    </main>
  )
}
