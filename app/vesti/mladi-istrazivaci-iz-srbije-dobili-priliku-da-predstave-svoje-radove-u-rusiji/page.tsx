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
  title: 'Mladi istraživači iz Srbije dobili priliku da predstave svoje radove u Rusiji – otvoren međunarodni naučni konkurs',
  date: 'Objavljeno: 04. novembar 2026.',
  lead: 'Pred mladim politikolozima, studentima i istraživačima iz Srbije otvorena je nova prilika za međunarodnu akademsku afirmaciju. Centar za geostrateške studije uputio je poziv za učešće na devetom međunarodnom konkursu „Najbolji članak mladog politikologa – 2026“, koji organizuju ruski naučni časopis Russian Political Science (Русская политология) i organizacija Laboratorija humanitarnih projekata.',
  paragraphs: [
    'Poziv je uputila Dragana Trifković, direktorka Centra za geostrateške studije i članica žirija ovog međunarodnog konkursa, sa ciljem da podstakne mlade stručnjake iz Srbije da predstave svoja istraživanja, razmene znanja i uspostave saradnju sa kolegama iz drugih zemalja.',
    'Pravo učešća imaju mladi istraživači do 35 godina starosti, uključujući i one koji imaju 35 godina, a radovi se mogu dostaviti na ruskom ili engleskom jeziku.',
    'Konkurs obuhvata pet značajnih istraživačkih oblasti: multipolarnost i novi svetski poredak, naučnu diplomatiju i međunarodnu saradnju, veštačku inteligenciju i digitalne tehnologije, javne politike i društveno upravljanje, kao i istoriju političke misli i savremene ideologije.',
    'Posebnu vrednost predstavlja mogućnost da najuspešniji učesnici objave svoje radove u naučnom časopisu Russian Political Science, koji se nalazi na ruskoj listi VAK, kao i da postanu članovi Ekspertskog saveta mladih politikologa časopisa.',
    'Radovi se primaju od 10. novembra do 10. decembra 2026. godine, dok će rezultati biti objavljeni najkasnije do 31. decembra.',
    'U vremenu velikih međunarodnih promena, ovakvi naučni programi otvaraju prostor mladim ljudima da učestvuju u akademskim raspravama o savremenom svetu, predstave sopstvena istraživanja i uspostave dugoročne profesionalne kontakte.',
    'Istok Info Pult podržava informisanje mladih o obrazovnim, naučnim i kulturnim mogućnostima koje doprinose povezivanju Srbije sa međunarodnom akademskom zajednicom.',
    'Pozivamo zainteresovane studente, politikologe i mlade istraživače da se upoznaju sa uslovima konkursa i iskoriste priliku da svoj naučni rad predstave međunarodnoj publici.',
    'Detaljne informacije, tehnički uslovi i uputstva za prijavu dostupni su na sajtu Centra za geostrateške studije:',
    'https://geostrategy.rs/poziv-mladim-politikolozima/',
    'Zvanična stranica konkursa:',
    'https://rupolitology.ru/konkurs',
    'Izvor: Centar za geostrateške studije, 1. novembar 2026.'
  ],
  
  highlight1: 'MLADI POLITIKOLOZI I ISTRAŽIVAČI IZ SRBIJE IMAJU PRILIKU DA PREDSTAVE SVOJE NAUČNE RADOVE NA MEĐUNARODNOM KONKURSU U RUSIJI.',
  highlight2: 'PRIJAVE OD 10. NOVEMBRA DO 10. DECEMBRA 2026. – PRILIKA ZA OBJAVLJIVANJE NAUČNIH RADOVA I MEĐUNARODNU AKADEMSKU SARADNJU.',
}

const ruText = {
  category: 'Новости',
  title: 'Молодые исследователи из Сербии получили возможность представить свои научные работы в России — открыт международный конкурс',
  date: 'Опубликовано: 04 ноября 2026 г.',
  lead: 'Перед молодыми политологами, студентами и исследователями из Сербии открывается новая возможность для международного академического признания. Центр геостратегических исследований пригласил молодых специалистов принять участие в девятом международном конкурсе «Лучшая статья молодого политолога — 2026», организованном российским научным журналом «Русская политология» (Russian Political Science) и организацией «Лаборатория гуманитарных проектов».',
  paragraphs: [
    'С приглашением выступила Драгана Трифкович, директор Центра геостратегических исследований и член жюри конкурса. Инициатива направлена на поддержку молодых учёных из Сербии, развитие международного научного диалога и установление профессиональных связей с исследователями из разных стран.',
    'К участию приглашаются молодые исследователи в возрасте до 35 лет включительно. Научные статьи могут быть представлены на русском или английском языке.',
    'Конкурс охватывает пять основных научных направлений: многополярность и новый мировой порядок, научную дипломатию и международное сотрудничество, искусственный интеллект и цифровые технологии, государственную политику и общественное управление, а также историю политической мысли и современные идеологии.',
    'Особое значение имеет возможность публикации лучших исследований в научном журнале «Русская политология», включённом в российский перечень ВАК. Победители также могут получить возможность войти в Экспертный совет молодых политологов журнала.',
    'Приём научных работ продлится с 10 ноября по 10 декабря 2026 года. Итоги конкурса будут объявлены не позднее 31 декабря.',
    'В условиях масштабных международных изменений подобные научные инициативы создают дополнительные возможности для молодых специалистов, способствуют обмену знаниями и развитию долгосрочных академических контактов.',
    '«Исток Инфо Пулт» поддерживает распространение информации об образовательных, научных и культурных возможностях, способствующих взаимодействию Сербии с международным академическим сообществом.',
    'Приглашаем заинтересованных студентов, политологов и молодых исследователей ознакомиться с условиями конкурса и воспользоваться возможностью представить свои научные работы международной аудитории.',
    'Подробная информация и условия участия опубликованы на сайте Центра геостратегических исследований:',
    'https://geostrategy.rs/poziv-mladim-politikolozima/',
    'Официальная страница конкурса:',
    'https://rupolitology.ru/konkurs',
    'Источник: Центр геостратегических исследований, 1 ноября 2026 года.'

  ],
  
  highlight1: 'МОЛОДЫЕ ПОЛИТОЛОГИ И ИССЛЕДОВАТЕЛИ ИЗ СЕРБИИ ПОЛУЧИЛИ ВОЗМОЖНОСТЬ ПРЕДСТАВИТЬ СВОИ НАУЧНЫЕ РАБОТЫ НА МЕЖДУНАРОДНОМ КОНКУРСЕ В РОССИИ.',
  highlight2: 'ПРИЁМ РАБОТ С 10 НОЯБРЯ ПО 10 ДЕКАБРЯ 2026 ГОДА — ВОЗМОЖНОСТЬ НАУЧНОЙ ПУБЛИКАЦИИ И МЕЖДУНАРОДНОГО АКАДЕМИЧЕСКОГО СОТРУДНИЧЕСТВА.',
}

export default function MladiIstrazivaciIzSrbijeDobiliPrilikuDaPredstaveSvojeRadoveURusijiPage() {
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
            paragraphs: srLatin.paragraphs.map((paragraph) =>
              paragraph.startsWith('https://')
                ? paragraph
                : latinToCyrillic(paragraph)
            ),
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
            src="/static/images/mladi-istrazivaci.jpg"
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
              <p key={index}>
                {paragraph.startsWith('https://') ? (
                  <a
                    href={paragraph}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-semibold text-yellow-400 underline decoration-yellow-400/50 underline-offset-4 transition-colors hover:text-yellow-300 hover:decoration-yellow-300"
                  >
                    {paragraph}
                  </a>
                ) : (
                  paragraph
                )}
              </p>
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

          <CommentsSection postSlug="mladi-istrazivaci-iz-srbije-dobili-priliku-da-predstave-svoje-radove-u-rusiji" />
        </motion.div>
      </article>
    </main>
  )
}