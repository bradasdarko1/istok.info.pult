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
  title: 'Šetate pored njihovih zgrada svaki dan, a gotovo niko ne zna da su ih projektovali Rusi koji su izgubili svoju domovinu',
  date: 'Objavljeno: 30. jul 2026.',
  lead: 'Kada danas prošetate ulicama Novog Sada, verovatno ne razmišljate ko je projektovao zgrade pored kojih svakodnevno prolazite. Malo ko zna da su mnoge od njih delo ljudi koji su pre više od jednog veka bili primorani da napuste svoju domovinu.',
  paragraphs: [
    'Posle Oktobarske revolucije 1917. godine i pobede boljševika u Rusiji, stotine hiljada ljudi našlo se u izbeglištvu. Među njima bili su profesori, arhitekte, inženjeri, lekari, umetnici, naučnici i oficiri – ljudi koji su u Ruskom carstvu pripadali obrazovanoj eliti.',
    'Kraljevina Srba, Hrvata i Slovenaca otvorila im je vrata, a Novi Sad postao je jedan od gradova u kojem su mnogi od njih započeli novi život.',
    'Procenjuje se da je početkom dvadesetih godina prošlog veka u Novom Sadu i Sremskim Karlovcima živelo oko dve hiljade ruskih emigranata. Iako su u Srbiju stigli gotovo bez imovine, sa sobom su doneli ono što niko nije mogao da im oduzme – znanje, iskustvo i želju da ponovo stvaraju.',
    'Grad koji se ubrzano razvijao posle Prvog svetskog rata imao je veliki nedostatak stručnjaka. Upravo zato ruski arhitekti i inženjeri veoma brzo postali su deo gradske uprave, građevinskih službi i projektantskih biroa.',
    'Njihov rad ostavio je vidljiv trag u izgledu Novog Sada.',
    'Među najpoznatijima bili su Konstantin Petrovič Paris de la Valet i Jurij Nikolajevič Šreter, čiji su projekti obogatili grad novim arhitektonskim rešenjima i evropskim stilovima koji su tada predstavljali sam vrh graditeljstva.',
    'Ali njihov doprinos nije bio ograničen samo na arhitekturu.',
    'Ruski profesori predavali su u novosadskim školama i gimnazijama. Lekari su lečili građane i unapređivali zdravstveni sistem. Inženjeri su učestvovali u izgradnji puteva, javnih objekata i infrastrukture. Muzičari, slikari i baletski umetnici doneli su sa sobom bogatu kulturnu tradiciju koja je ostavila snažan uticaj na umetnički život grada.',
    'Mnogi Novosađani prvi put su se upravo zahvaljujući ruskim emigrantima upoznali sa vrhunskom klasičnom muzikom, baletom i ruskom umetničkom školom.',
    'Tadašnji građani Novog Sada nisu ostali ravnodušni prema njihovoj sudbini. Organizovana su dobrotvorna društva koja su ruskim porodicama pomagala da pronađu posao, stan i novi početak.',
    'To prijateljstvo nije nastalo iz političkih interesa, već iz osećaja zajedništva i razumevanja kroz koje su dva naroda prolazila vekovima.',
    'Danas, više od sto godina kasnije, mnoge zgrade koje su projektovali ruski arhitekti i dalje predstavljaju deo prepoznatljivog izgleda Novog Sada.',
    'Hiljade ljudi svakodnevno prolaze pored njih, ne znajući da su nastale zahvaljujući ljudima koji su izgubili svoju domovinu, ali nikada nisu izgubili znanje, dostojanstvo i želju da stvaraju.',
    'Možda upravo zato njihov najveći spomenik nije podignut od kamena.',
    'Njihov spomenik je sam Novi Sad.'
  ],
  
  highlight1: 'Posle Oktobarske revolucije hiljade ruskih emigranata pronašle su novi dom u Srbiji. Među njima bili su arhitekte, inženjeri, lekari i profesori koji su pomogli da se izgradi Novi Sad kakav danas poznajemo.',
  highlight2: 'Iako su izgubili svoju otadžbinu, ostavili su gradu nešto što ni vreme nije uspelo da izbriše – znanje, kulturu i građevine koje i danas svakodnevno prolazimo.',
}

const ruText = {
  category: 'Новости',
  title: 'Вы каждый день проходите мимо этих зданий, но почти никто не знает, что их спроектировали русские, потерявшие свою Родину',
  date: 'Опубликовано: 30 июль 2026 г.',
  lead: 'Когда сегодня вы гуляете по улицам Нового Сада, вы, вероятно, не задумываетесь, кто проектировал здания, мимо которых проходите каждый день. Немногие знают, что многие из них были созданы людьми, которые более века назад были вынуждены покинуть свою Родину.',
  paragraphs: [
    'После Октябрьской революции 1917 года и победы большевиков сотни тысяч русских оказались в эмиграции. Среди них были преподаватели, архитекторы, инженеры, врачи, художники, учёные и офицеры — представители образованной элиты Российской империи.',
    'Королевство сербов, хорватов и словенцев приняло их, а Новый Сад стал одним из городов, где многие начали новую жизнь.',
    'Считается, что в начале 1920-х годов в Новом Саде и Сремских Карловцах проживало около двух тысяч русских эмигрантов. Они приехали почти без имущества, но привезли с собой самое ценное — знания, опыт и желание снова созидать.',
    'После Первой мировой войны город стремительно развивался и испытывал острую нехватку квалифицированных специалистов. Именно поэтому русские архитекторы и инженеры быстро заняли важное место в городских строительных службах и проектных бюро.',
    'Их работа навсегда изменила архитектурный облик Нового Сада.',
    'Среди самых известных были Константин Петрович Парис де ла Валет и Юрий Николаевич Шретер, чьи проекты обогатили город новыми архитектурными решениями и европейскими стилями.',
    'Однако их вклад не ограничивался только строительством.',
    'Русские преподаватели работали в школах и гимназиях Нового Сада. Врачи лечили жителей и развивали систему здравоохранения. Инженеры участвовали в строительстве дорог, общественных зданий и городской инфраструктуры. Музыканты, художники и артисты балета привнесли богатые традиции русской культуры, оказав огромное влияние на культурную жизнь города.',
    'Именно благодаря русским эмигрантам многие жители Нового Сада впервые познакомились с классической музыкой, балетом и русской художественной школой.',
    'Жители города не остались равнодушными к их судьбе. Были созданы благотворительные общества, помогавшие русским семьям найти работу, жильё и начать новую жизнь.',
    'Эта дружба возникла не из политических интересов, а из взаимопонимания и духовной близости двух народов, связанных общей историей.',
    'Сегодня, спустя более ста лет, многие здания, созданные русскими архитекторами, по-прежнему являются неотъемлемой частью облика Нового Сада.',
    'Тысячи людей ежедневно проходят мимо них, не подозревая, что они появились благодаря людям, потерявшим свою Родину, но не потерявшим знания, достоинство и стремление созидать.',
    'Возможно, именно поэтому их главный памятник построен не из камня.',
    'Их памятник — это сам Новый Сад.'
  ],
  
  highlight1: 'После Октябрьской революции тысячи русских эмигрантов нашли новый дом в Сербии. Среди них были архитекторы, инженеры, врачи и преподаватели, которые помогли построить Новый Сад таким, каким мы знаем его сегодня.',
  highlight2: 'Потеряв свою Родину, они оставили городу то, чего не смогло стереть даже время — знания, культуру и здания, которыми мы восхищаемся и сегодня.',
}

export default function RusiKojiSuGradiliNoviSadPage() {
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
            src="/static/images/rusi-koji-su-gradili-novi-sad.jpg"
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

          <CommentsSection postSlug="rusi-koji-su-gradili-novi-sad" />
        </motion.div>
      </article>
    </main>
  )
}