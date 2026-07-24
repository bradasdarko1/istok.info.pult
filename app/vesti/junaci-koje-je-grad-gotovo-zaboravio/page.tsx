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
  title: 'Ruski trag u Novom Sadu: Junaci koje je grad gotovo zaboravio',
  date: 'Objavljeno: 24. jul 2026.',
  lead: 'Novi Sad se često opisuje kao grad različitih naroda, kultura i tradicija. Međutim, jedna priča gotovo da je ostala zaboravljena – priča o Rusima koji su tokom više od dva veka ostavili dubok trag u istoriji grada.',
  paragraphs: [
    'Njihov doprinos nije bio vezan samo za jedan istorijski period. Dolazili su kao vojni stručnjaci, profesori, lekari, inženjeri, umetnici i sveštenici. Posle Oktobarske revolucije hiljade ruskih emigranata pronašle su utočište upravo u Srbiji, a mnogi su svoj novi dom pronašli u Novom Sadu. Učili su nove generacije, gradili ustanove, razvijali kulturu i nauku i postali deo identiteta grada.',
    'Tokom Drugog svetskog rata, sovjetski vojnici učestvovali su u oslobođenju Novog Sada. Neki od njih nisu dočekali kraj rata. Ostali su zauvek na obali Dunava, daleko od svojih porodica i rodne zemlje.',
    'Zbog toga portal Istok Info pokreće serijal tekstova o Rusima koji su ostavili trag u Novom Sadu. Cilj serijala nije samo podsećanje na istorijske činjenice, već i očuvanje sećanja na ljude čija su dela oblikovala grad kakav danas poznajemo.',
    'Prva priča vodi nas na Liman, na prostor nekadašnje kasarne "Aleksandar Berić", poznatije kao "Mornarica", gde se već više od osam decenija nalazi vojničko groblje šestorice pripadnika sovjetske rečne flotile. Oni su poginuli 1944. i 1945. godine u borbama za oslobođenje Novog Sada i tokom razminiranja Dunava.',
    'Njihova imena danas poznaje mali broj Novosađana, iako su svoje živote položili za slobodu ovog grada.',
    'U narednim tekstovima istražićemo njihove sudbine, pokušati da pronađemo njihove porodice i predstaviti druge ruske pojedince koji su ostavili neizbrisiv trag u istoriji Novog Sada.',
    
    'Sledeća priča: "Šestorica mornara koji su ostali da zauvek čuvaju Novi Sad".'
  ],
  
  highlight1: 'Više od dva veka ruski oficiri, inženjeri, naučnici, lekari, umetnici i dobrovoljci ostavljali su trag u Novom Sadu. Neki su gradili njegove institucije, neki su ga branili u ratu, a neki su u njemu pronašli poslednje počivalište',
  highlight2: 'Portal Istok Info pokreće serijal priča o Rusima koji su svojim radom, znanjem i žrtvom postali deo istorije Novog Sada – od carske Rusije i belih emigranata do mornara Crvene armije koji su dali život za oslobođenje grada',
}

const ruText = {
  category: 'Новости',
  title: 'Русский след в Нови-Саде: Герои, которых город почти забыл',
  date: 'Опубликовано: 24 июль 2026 г.',
  lead: 'Нови-Сад часто называют городом, в котором на протяжении веков мирно сосуществовали разные народы, культуры и традиции. Однако одна страница его истории сегодня почти забыта — история русских людей, которые более двухсот лет оставляли заметный след в жизни этого города.',
  paragraphs: [
    'Их вклад невозможно связать лишь с одной исторической эпохой. В разные годы сюда приезжали русские военные специалисты, инженеры, преподаватели, врачи, архитекторы, ученые, священнослужители и деятели искусства. После Октябрьской революции тысячи русских эмигрантов нашли убежище в Сербии, а многие из них поселились именно в Нови-Саде. Они преподавали в школах и гимназиях, работали в учреждениях культуры, участвовали в развитии науки, медицины и образования, став частью истории города.',
    'Во время Второй мировой войны советские солдаты приняли участие в освобождении Нови-Сада от немецкой оккупации. Для многих из них этот путь закончился на берегах Дуная. Они так и не вернулись домой, навсегда оставшись в сербской земле.',
    'Именно поэтому портал «Исток Инфо» начинает цикл публикаций, посвященных русским людям, которые своим трудом, знаниями и подвигами оставили глубокий след в истории Нови-Сада.',
    'Цель этого проекта — не только напомнить о малоизвестных страницах общей истории, но и сохранить память о людях, благодаря которым Нови-Сад стал таким, каким мы знаем его сегодня.',
    'Первый материал этого цикла посвящен месту, которое известно далеко не каждому жителю города.',
    'На территории бывшей казармы «Александар Берич», более известной как «Морнарица», уже более восьмидесяти лет находится воинское кладбище шести моряков Советской речной флотилии. Они погибли в 1944–1945 годах во время освобождения Нови-Сада и при разминировании Дуная.',
    'Сегодня их имена известны лишь немногим, хотя именно эти люди отдали свои жизни за освобождение города.',
    'В следующих публикациях мы расскажем об их судьбах, постараемся найти сведения об их семьях и познакомим читателей с другими русскими людьми, которые в разные эпохи внесли значительный вклад в развитие Нови-Сада.',
    'Память о них — это не только часть истории России и Сербии. Это часть истории самого Нови-Сада.',

    '«Шесть моряков, которые навсегда остались охранять Нови-Сад»'
  ],
  
  highlight1: 'На протяжении более двух столетий русские офицеры, инженеры, ученые, врачи, художники и добровольцы оставляли свой след в истории Нови-Сада. Одни строили его учреждения, другие защищали город в годы войн, а некоторые нашли здесь свое последнее пристанище',
  highlight2: 'Портал «Исток Инфо» начинает цикл публикаций о русских людях, которые своим трудом, знаниями и самопожертвованием стали неотъемлемой частью истории Нови-Сада — от Российской империи и белой эмиграции до моряков Красной армии, погибших при освобождении города',
}

export default function JunaciKojeJeGradGotovoZaboravioPage() {
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
            src="/static/images/ruski-trag-u-novom-sadu.jpg"
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

          <CommentsSection postSlug="junaci-koje-je-grad-gotovo-zaboravio" />
        </motion.div>
      </article>
    </main>
  )
}