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

const applicationUrl = 'https://premiyaevrazia.su/'

const srLatin = {
  category: 'Vesti',
  title: 'Nagrada Evroazije 2026: Otvorene prijave za najbolje projekte iz celog sveta',
  date: 'Objavljeno: 5. maj 2026.',
  lead: 'Prijave za Međunarodnu nagradu Evroazije za 2026. godinu su zvanično otvorene. Autori projekata, kompanije, mediji, obrazovne organizacije i individualni preduzetnici iz različitih zemalja, starosti od 14 do 60 godina, imaju priliku da učestvuju.',
  paragraphs: [
    'Svaki učesnik može podneti najviše tri prijave — po jednu u različitim kategorijama: Svetski jezik, Kulturni kod, Mostovi prijateljstva, Lider Evroazije, Sećanje generacija, Glas Evroazije, Svetli početak, Umetnost podučavanja, Inspirisano srcem i Posebna kategorija.',
    'Ovogodišnji nagradni fond iznosi 17 miliona rubalja. Pored finansijskih nagrada, pobednici će dobiti priliku za saradnju sa vodećim stručnjacima u svojoj oblasti, učešće u obrazovnim programima, kao i uključivanje u velike međunarodne projekte koje organizuje ANO Evroazija i njeni partneri.',
    'Nakon selekcionog procesa, 100 finalista će predstaviti svoje projekte pred uglednim žirijem u Moskvi u oktobru 2026. godine.',
    'Rok za prijavu je 30. avgust 2026. godine. Za učešće je potrebno da se registrujete na zvaničnom sajtu, odaberete kategoriju i popunite prijavni formular.',
    'Organizator nagrade je ANO Evroazija, uz podršku Rossotrudničestvo.',
  ],
  applicationText: 'Prijavite svoj projekat',
  applicationNote: 'Zvanična stranica za prijavu na Međunarodnu nagradu Evroazije 2026.',
  highlight1: 'Prijave za međunarodnu nagradu Evroazije su otvorene — prilika za mlade i profesionalce da predstave svoje projekte na globalnoj sceni.',
  highlight2: 'Ukupan nagradni fond iznosi 17 miliona rubalja, a finalisti će svoje projekte predstaviti u Moskvi u oktobru 2026. godine.',
}

const ruText = {
  category: 'Новости',
  title: 'Премия «Евразия 2026»: открыт приём заявок на лучшие проекты со всего мира',
  date: 'Опубликовано: 5 мая 2026 г.',
  lead: 'Приём заявок на Международную премию «Евразия» 2026 года официально открыт. Авторы проектов, компании, СМИ, образовательные организации и индивидуальные предприниматели из разных стран в возрасте от 14 до 60 лет могут принять участие.',
  paragraphs: [
    'Каждый участник может подать до трёх заявок — по одной в различных категориях: «Мировой язык», «Культурный код», «Мосты дружбы», «Лидер Евразии», «Память поколений», «Голос Евразии», «Светлое начало», «Искусство обучения», «Вдохновлённые сердцем» и специальная категория.',
    'Призовой фонд этого года составляет 17 миллионов рублей. Помимо денежных наград, победители получат возможность сотрудничества с ведущими экспертами, участие в образовательных программах, а также включение в крупные международные проекты, организуемые АНО «Евразия» и её партнёрами.',
    'По итогам отбора 100 финалистов представят свои проекты перед авторитетным жюри в Москве в октябре 2026 года.',
    'Крайний срок подачи заявок — 30 августа 2026 года. Для участия необходимо зарегистрироваться на официальном сайте, выбрать категорию и заполнить анкету проекта.',
    'Организатор премии — АНО «Евразия» при поддержке Rossotrudničestvo.',
  ],
  applicationText: 'Подать заявку',
  applicationNote: 'Официальная страница подачи заявки на Международную премию «Евразия 2026».',
  highlight1: 'Открыт приём заявок на международную премию «Евразия» — шанс для молодых и профессионалов представить свои проекты на мировой арене.',
  highlight2: 'Общий призовой фонд составляет 17 миллионов рублей, а финалисты представят свои проекты в Москве в октябре 2026 года.',
}

export default function NagradaEvrovizije2026Page() {
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
            applicationText: latinToCyrillic(srLatin.applicationText),
            applicationNote: latinToCyrillic(srLatin.applicationNote),
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
            src="/static/images/nagrada-evroazije.png"
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
          <p className="mb-6 text-lg leading-8 font-medium text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="mb-4 text-base font-semibold text-gray-200 md:text-lg">
              {content.applicationNote}
            </p>

            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold tracking-wide text-black uppercase transition hover:bg-yellow-300 md:text-base"
            >
              {content.applicationText}
            </a>
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

          <CommentsSection postSlug="nagrada-evroazije-2026" />
        </motion.div>
      </article>
    </main>
  )
}