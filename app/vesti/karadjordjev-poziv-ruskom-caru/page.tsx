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
  title: 'KARAĐORĐEV POZIV RUSKOM CARU — SRBIJA U POTRAZI ZA SAVEZNIKOM',
  date: 'Objavljeno: 12. novembar 2026.',
  lead: 'Kada je 1804. godine počeo Prvi srpski ustanak, Karađorđe Petrović znao je da se sloboda ne može izboriti samo oružjem. Srbiji je bio potreban snažan saveznik, a pogled ustanika bio je usmeren ka Rusiji, velikoj pravoslavnoj carevini.',
  paragraphs: [
    'Već iste godine u Sankt Peterburg upućena je srpska diplomatska misija koju su činili prota Mateja Nenadović, Petar Novaković Čardaklija i Jovan Protić. Njihov cilj bio je da od ruskog cara Aleksandra I zatraže političku zaštitu, oružje i pomoć ustanicima.',
    'Rusija je u početku bila oprezna, ali se situacija promenila 1806. godine, izbijanjem rusko-turskog rata. Godine 1807. u Srbiju dolazi ruski diplomatski predstavnik Konstantin Rodofinikin, koji je učestvovao i u pokušajima uređenja ustaničke vlasti.',
    'Saradnja dve strane nije ostala samo na diplomatiji. Srpski i ruski vojnici zajedno su ratovali protiv Osmanlija, a jedna od najznačajnijih zajedničkih pobeda ostvarena je u bici kod Varvarina 1810. godine.',
    'Ipak, savezništvo je doživelo veliko iskušenje 1812. godine. Suočena sa Napoleonovom pretnjom, Rusija je zaključila Bukureški mir sa Osmanskim carstvom. Iako su sporazumom predviđena određena prava za Srbe, ustanici su ostali bez neposredne ruske vojne podrške.',
    'Godine 1813. Osmanlije su ugušile Prvi srpski ustanak, a Karađorđe je napustio Srbiju.',
    'Uprkos tome, veze uspostavljene sa Rusijom imale su veliki istorijski značaj. Srpsko pitanje postalo je deo evropske diplomatije, a iskustva iz ovog perioda postavila su temelje buduće borbe za autonomiju i obnovu srpske državnosti.'
  ],
  
  highlight1: 'Godine 1804. Karađorđe je poslao prve srpske izaslanike u Rusiju, tražeći podršku cara Aleksandra I. Bio je to jedan od prvih velikih koraka obnovljene srpske diplomatije.',
  highlight2: 'Srpski i ruski vojnici zajedno su se borili protiv Osmanlija, ali je Bukureški mir 1812. pokazao da se politički interesi saveznika ne moraju uvek poklapati.',
}

const ruText = {
  category: 'Новости',
  title: 'ОБРАЩЕНИЕ КАРАГЕОРГИЯ К РУССКОМУ ИМПЕРАТОРУ — СЕРБИЯ В ПОИСКАХ СОЮЗНИКА',
  date: 'Опубликовано: 12 ноября 2026 г.',
  lead: 'Когда в 1804 году началось Первое сербское восстание, Карагеоргий Петрович понимал, что свободу невозможно завоевать только оружием. Сербии требовался сильный союзник, и взоры повстанцев были обращены к России — великой православной империи.',
  paragraphs: [
    'В том же году в Санкт-Петербург была направлена сербская дипломатическая миссия, в состав которой вошли протоиерей Матей Ненадович, Пётр Новакович-Чардаклия и Йован Протич. Их целью было обратиться к императору Александру I с просьбой о политическом покровительстве, вооружении и помощи повстанцам.',
    'Первоначально Россия действовала осторожно, однако ситуация изменилась в 1806 году с началом русско-турецкой войны. В 1807 году в Сербию прибыл российский дипломатический представитель Константин Родофиникин, участвовавший также в попытках организации власти восставшей Сербии.',
    'Сотрудничество не ограничивалось дипломатией. Сербские и русские солдаты вместе сражались против османских войск, а одной из важнейших совместных побед стало сражение при Варварине в 1810 году.',
    'Однако в 1812 году союз столкнулся с серьёзным испытанием. Перед угрозой наполеоновского вторжения Россия заключила Бухарестский мир с Османской империей. Хотя договор предусматривал определённые права для сербов, повстанцы лишились непосредственной российской военной поддержки.',
    'В 1813 году османские войска подавили Первое сербское восстание, а Карагеоргий покинул Сербию.',
    'Несмотря на это, установленные связи с Россией имели огромное историческое значение. Сербский вопрос стал частью европейской дипломатии, а опыт этого периода заложил основы дальнейшей борьбы за автономию и восстановление сербской государственности.'

  ],
  
  highlight1: 'В 1804 году Карагеоргий направил первых сербских посланников в Россию, рассчитывая на поддержку императора Александра I. Это стало одним из первых важных шагов возрождавшейся сербской дипломатии.',
  highlight2: 'Сербские и русские солдаты вместе сражались против османских войск, однако Бухарестский мир 1812 года показал, что политические интересы союзников не всегда совпадают.',
}

export default function KaradjordjevPozivRuskomCaruPage() {
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
            src="/static/images/karadjordjev-poziv-ruskom-caru.jpg"
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

          <CommentsSection postSlug="karadjordjev-poziv-ruskom-caru" />
        </motion.div>
      </article>
    </main>
  )
}