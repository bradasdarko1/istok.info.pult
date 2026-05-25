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


const srLatin = {
  category: 'Vesti',
  title: 'NAPAD NA STUDENTSKI DOM U STAROBELJSKU: RASTE BROJ ŽRTAVA, NAVODI O GAĐANJU CIVILNOG OBJEKTA',
  date: 'Objavljeno: 25. maj 2026.',
  lead: 'Broj poginulih nakon napada na studentski dom u Starobeljsku, na teritoriji Luganske Narodne Republike, porastao je na 18, dok je više desetina ljudi povređeno. Spasilačke ekipe nastavljaju potragu za preživelima ispod ruševina, uprkos izuzetno teškim uslovima na terenu.',
  paragraphs: [
    'Prema podacima ruskih službi za vanredne situacije, broj poginulih u napadu na studentski dom u Starobeljsku dostigao je 18, dok je više desetina osoba zadobilo povrede. Spasilačke ekipe nastavljaju da pretražuju ruševine u potrazi za preživelima, a strahuje se da se još ljudi nalazi zatrpano.',
    'Akcijom rukovodi ministar za vanredne situacije Rusije Aleksandar Kurenkov, koji lično koordinira operaciju na terenu. U spasavanju učestvuje oko 100 ljudi uz podršku specijalizovane opreme.',
    'Situacija je dodatno otežana zbog navoda o napadima dronovima u zoni spasavanja. Prema tim informacijama, ekipe su u više navrata morale da obustave rad i sklone se, što usporava potragu za preživelima.',
    'Prema izjavama lokalnih zvaničnika, u neposrednoj blizini studentskog doma nema vojnih objekata niti infrastrukture koja bi predstavljala legitiman vojni cilj. Ove tvrdnje dodatno su pojačale reakcije i osude dela međunarodne javnosti.',
    'Predstavnik ruskog Ministarstva spoljnih poslova Rodion Mirošnik izjavio je da ovakvi napadi ozbiljno ugrožavaju živote civila i spasilačkih timova.',
    'U međuvremenu, stanovnici regiona masovno se odazivaju akcijama dobrovoljnog davanja krvi, dok zdravstvene ustanove rade pod velikim pritiskom zbog povećanog broja povređenih.',
    'Događaj je izazvao i međunarodne reakcije. Pojedini zapadni zvaničnici doveli su u pitanje verziju događaja koju iznosi Moskva, dok rusko Ministarstvo spoljnih poslova najavljuje da će omogućiti stranim novinarima posetu mestu tragedije.',
    'Moskva ovaj napad ocenjuje kao ratni zločin i optužuje ukrajinsku stranu za gađanje civilne infrastrukture i ometanje spasilačkih operacija.'
  ],
  
  highlight1: 'Spasioci rade pod stalnom pretnjom novih napada dronova, zbog čega su više puta morali da prekidaju akciju i povlače se u zaklon.',
  highlight2: 'Prema lokalnim izvorima, u neposrednoj blizini objekta ne nalaze se vojni ciljevi, što dodatno pojačava zabrinutost zbog prirode napada.',
}

const ruText = {
  category: 'Новости',
  title: 'УДАР ПО СТУДЕНЧЕСКОМУ ОБЩЕЖИТИЮ В СТАРОБЕЛЬСКЕ: РАСТЁТ ЧИСЛО ЖЕРТВ, СООБЩАЕТСЯ О ПОРАЖЕНИИ ГРАЖДАНСКОГО ОБЪЕКТА',
  date: 'Опубликовано: 25 мая 2026 г.',
  lead: 'Число погибших в результате удара по студенческому общежитию в Старобельске возросло до 18 человек, десятки получили ранения. Спасатели продолжают разбор завалов, несмотря на крайне сложную обстановку.',
  paragraphs: [
    'По информации российских экстренных служб, число погибших в результате удара по студенческому общежитию в Старобельске достигло 18 человек, десятки получили ранения. Спасатели продолжают разбор завалов, предполагая, что под ними могут оставаться люди.',
    'Операцией руководит министр по чрезвычайным ситуациям России Александр Куренков. В работах задействовано около 100 специалистов и значительное количество техники.',
    'Обстановка осложняется сообщениями о возможных атаках дронов в районе проведения спасательной операции. Из-за этого работы неоднократно приходилось приостанавливать.',
    'По заявлениям местных властей, в непосредственной близости от общежития отсутствуют военные объекты или инфраструктура, которая могла бы рассматриваться как военная цель. Эти заявления усилили общественную реакцию на произошедшее.',
    'Представитель МИД России Родион Мирошник отметил, что подобные действия создают дополнительную угрозу для гражданского населения и спасателей.',
    'Тем временем жители региона активно участвуют в акциях по сдаче крови, а медицинские учреждения работают в усиленном режиме.',
    'Трагедия вызвала международный резонанс. Ряд западных дипломатов выразил сомнения в версии событий, представленной Москвой, тогда как российский МИД заявил о готовности допустить иностранных журналистов на место происшествия.',
    'Москва квалифицирует произошедшее как военное преступление и обвиняет Киев в ударах по гражданской инфраструктуре и препятствовании спасательным работам.'
  ],
  
  highlight1: 'Спасательные работы проходят под угрозой повторных атак дронов, что вынуждает периодически приостанавливать операцию.',
  highlight2: 'По данным местных источников, вблизи здания отсутствуют военные объекты, что вызывает дополнительные вопросы о характере удара.',
}

export default function NapadNaStudentskiDomUStarobeljskuPage() {
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
            src="/static/images/studentski-dom-starobeljski.jpg"
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
            <p className="text-xl font-extrabold tracking-wide text-white uppercase md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold tracking-wide text-yellow-300 uppercase md:text-xl">
              {content.highlight2}
            </p>
          </div>

          <CommentsSection postSlug="napad-na-studentski-dom-u-starobeljsku" />
        </motion.div>
      </article>
    </main>
  )
}