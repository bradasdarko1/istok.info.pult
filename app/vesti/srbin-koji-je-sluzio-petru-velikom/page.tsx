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
  title: 'SRBIN KOJI JE SLUŽIO PETRU VELIKOM — SAVA VLADISLAVIĆ I TAJNE RUSKE DIPLOMATIJE',
  date: 'Objavljeno: 08. novembar 2026.',
  lead: 'Istorija pamti careve, vojskovođe i velike bitke, ali često zaboravlja ljude koji su iz senke menjali sudbinu čitavih država. Jedan od njih bio je Sava Vladislavić Raguzinski, Srbin iz Hercegovine koji je postao jedan od najpoverljivijih saradnika ruskog cara Petra Velikog i diplomata čiji je rad ostavio trag na granicama dva velika carstva.',
  paragraphs: [
    'Rođen u drugoj polovini XVII veka, u srpskoj porodici poreklom iz Hercegovine, Sava Vladislavić je još kao mlad pokazivao izuzetne trgovačke i diplomatske sposobnosti. Put ga je preko Dubrovnika i Venecije odveo u Carigrad, gde je, zahvaljujući svojim vezama i poznavanju političkih prilika, počeo da prikuplja dragocene informacije o Osmanskom carstvu.',
    'Upravo su te informacije privukle pažnju ruskog dvora. Početkom XVIII veka Vladislavić je stupio u službu Petra Velikog, cara koji je nastojao da Rusiju pretvori u jednu od vodećih evropskih sila.',
    'Srbin je ubrzo postao mnogo više od običnog carskog službenika. Bio je trgovac, diplomata, savetnik i čovek od poverenja, uključen u osetljive političke pregovore i prikupljanje obaveštajnih podataka.',
    'Posebno značajnu ulogu imao je u oblikovanju ruske politike prema Osmanskom carstvu i pravoslavnim narodima Balkana. Vladislavić nije zaboravio svoje poreklo, već je nastojao da položaj srpskog naroda približi ruskom državnom vrhu.',
    'Međutim, najveći diplomatski uspeh tek je bio pred njim.',
    'Nakon smrti Petra Velikog, carica Katarina I poverila mu je 1725. godine izuzetno odgovornu misiju — pregovore sa Kineskim carstvom. Posle dugih i složenih razgovora, 1727. godine zaključen je Kjahtinski sporazum, kojim su uređeni važni delovi rusko-kineske granice i stvoreni uslovi za razvoj trgovine između dve imperije.',
    'Tako je jedan Srbin iz Hercegovine učestvovao u oblikovanju političke karte Azije.',
    'U blizini granice osnovano je naselje Trojickosavsk, nazvano u čast Svetog Save, što je predstavljalo još jedan simboličan trag srpskog nasleđa daleko od otadžbine.',
    'Sava Vladislavić preminuo je 1738. godine, a sahranjen je u Aleksandro-nevskoj lavri u Sankt Peterburgu.',
    'Njegova biografija svedoči da srpsko-ruske veze nisu gradili samo vladari i crkveni velikodostojnici, već i pojedinci koji su svojim znanjem, odanošću i diplomatskim sposobnostima uticali na tok svetske istorije.',
    'Od hercegovačkih brda do carskih odaja Sankt Peterburga i dalekih granica Kine — Sava Vladislavić ostao je jedan od najneobičnijih Srba u istoriji ruske diplomatije.'
  ],
  
  highlight1: 'Od Hercegovine do dvora Petra Velikog — Sava Vladislavić bio je Srbin koji je postao jedan od najuticajnijih diplomata Ruske imperije.',
  highlight2: 'Godine 1727. Sava Vladislavić učestvovao je u zaključenju istorijskog sporazuma sa Kinom, ostavljajući srpski trag na granici dva velika carstva.',
}

const ruText = {
  category: 'Новости',
  title: 'СЕРБ НА СЛУЖБЕ ПЕТРА ВЕЛИКОГО — САВВА ВЛАДИСЛАВИЧ И ТАЙНЫ РУССКОЙ ДИПЛОМАТИИ',
  date: 'Опубликовано: 08 ноября 2026 г.',
  lead: 'История помнит императоров, полководцев и великие сражения, но нередко забывает людей, которые, оставаясь в тени, меняли судьбы целых государств. Одним из них был Савва Владиславич-Рагузинский — серб из Герцеговины, ставший одним из доверенных соратников Петра Великого и дипломатом, деятельность которого оставила след на границах двух великих империй.',
  paragraphs: [
    'Родившийся во второй половине XVII века в сербской семье, происходившей из Герцеговины, Савва Владиславич с юных лет проявлял выдающиеся торговые и дипломатические способности. Через Дубровник и Венецию его путь привёл в Константинополь, где благодаря своим связям и знанию политической обстановки он начал собирать ценную информацию об Османской империи.',
    'Именно эти сведения привлекли внимание русского двора. В начале XVIII века Владиславич поступил на службу к Петру Великому, стремившемуся превратить Россию в одну из ведущих европейских держав.',
    'Вскоре серб стал гораздо большим, чем обычный императорский служащий. Он был торговцем, дипломатом, советником и доверенным лицом государя, участвовавшим в сложных политических переговорах и сборе разведывательных сведений.',
    'Особенно значительную роль он сыграл в формировании российской политики в отношении Османской империи и православных народов Балкан. Владиславич не забывал о своём происхождении и стремился привлечь внимание российского руководства к положению сербского народа.',
    'Однако главный дипломатический успех был ещё впереди.',
    'После смерти Петра Великого императрица Екатерина I в 1725 году поручила ему чрезвычайно ответственную миссию — переговоры с Китайской империей. После длительных и сложных переговоров в 1727 году был заключён Кяхтинский договор, урегулировавший важные участки российско-китайской границы и создавший условия для развития торговли между двумя империями.',
    'Так серб из Герцеговины принял участие в формировании политической карты Азии.',
    'Вблизи границы было основано поселение Троицкосавск, названное в честь святого Саввы Сербского. Это стало ещё одним символическим следом сербского наследия вдали от родины.',
    'Савва Владиславич скончался в 1738 году и был похоронен в Александро-Невской лавре в Санкт-Петербурге.',
    'Его биография свидетельствует о том, что сербско-русские связи создавались не только правителями и церковными деятелями, но и людьми, которые своими знаниями, преданностью и дипломатическими способностями влияли на ход мировой истории.',
    'От гор Герцеговины до императорских дворцов Санкт-Петербурга и далёких границ Китая — Савва Владиславич остался одним из самых выдающихся сербов в истории российской дипломатии.'

  ],
  
  highlight1: 'От Герцеговины до двора Петра Великого — Савва Владиславич стал одним из самых влиятельных дипломатов Российской империи.',
  highlight2: 'В 1727 году Савва Владиславич участвовал в заключении исторического договора с Китаем, оставив сербский след на границе двух великих империй.',
}

export default function SrbinKojiJeSluzioPetruVelikomPage() {
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
            src="/static/images/srbin-koji-je-sluzio-petru-velikom.jpg"
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

          <CommentsSection postSlug="srbin-koji-je-sluzio-petru-velikom" />
        </motion.div>
      </article>
    </main>
  )
}