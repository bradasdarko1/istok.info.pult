'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

const images = [
  '/static/images/pismo-srbiji.jpeg',
  '/static/images/pismo.jpeg',
]

const srLatin = {
  category: 'Vesti',
  title:
    'PISMO I PORUKA PJERA ANRIJA BINELA SRPSKOM NARODU: REČI PRIJATELJA KOJI JE STAO UZ SRBIJU',
  date: 'Objavljeno: 28. april 2026.',
  lead:
    'Pjer Anri Binel, francuski oficir koji je zbog istine i savesti stao uz srpski narod, ostavio je poruku koja i danas zvuči snažno, časno i potresno.',
  intro:
    'U nastavku prenosimo njegovo pismo i poruku srpskom narodu — svedočanstvo čoveka koji je cenu svoje odluke platio lično, ali nije pristao da ćuti pred nepravdom.',
  highlight1:
    '„Želeo sam da svima vama kažem da za vas, u sebi nosim prijateljstvo i ljubav.“',
  highlight2: '„Neka je slava i dug život srpskom narodu!“',
  letterTitle: 'Pismo Pjera Anrija Binela srpskom narodu',
  letterSubtitle:
    'Reči čoveka koji je u jednom od najtežih trenutaka pokazao da čast ne poznaje granice.',
  galleryTitle: 'Fotografije i dokument',
  commentsTitle: 'Komentari',
  paragraphs: [
    'Pre dvadeset sedam godina počela je NATO agresija protiv jednog ponosnog i slobodnog naroda, srpskog naroda. Saučesnici ove drame nalazili su se i u velikom delu javnog mnjenja zloupotrebljenog propagandom NATO-a i njegovih satelita.',
    'Budući da sam učestvovao u pokušaju da ovo zlo sprečim, sve te događaje koji će zapečatiti krivce za budućnost i istoriju, bio sam primoran da pratim iz mog francuskog zatvora. A kada je taj zločin bio najavljen, ja sam osetio stid pomešan sa ponosom i čašću.',
    'Najpre, stid jer sam video svoju zemlju kako dobrovoljno ulazi u izdajstvo. Bilo je to u stvari izdajstvo samoga sebe, jer razlozi za bombardovanje nisu postojali, jer učešće u takvom beščašću nije moglo da služi francuskom narodu, i, najzad, ono najgore, naši političari time su izdali tradicionalno prijateljstvo iskovano istorijskim nasleđem.',
    'Tako su „saveznici“ bombardujući Beograd, kao nekada, u Drugom svetskom ratu nacisti, sami sebe ocrnili u budućnosti.',
    'Ali, ja sam osetio i ponos. Još za vreme mog angažovanja u Bosni i Hercegovini, počeo sam da upoznajem srpski narod. Iako je stanje Srba u Bosni i Hercegovini bilo jako teško, Srbi su uvek držali reč kada bi nešto rekli, čak i prema tim okupacionim snagama. To nije bila saradnja, nego, prosto, poštovanje date reči onoga što je potpisano Dejtonskim diktatom. U ovo neslavno vreme NATO-a i njegovih saučesnika, jedino su Srbi pokazivali hrabrost i časnost.',
    'Služeći kaznu u pariskom zatvoru, sve vreme sam osećao prijateljstvo prema nepravedno bombardovanim Srbima. Bombardovani ste zato što ste hteli da branite svoje postojanje, svoju kulturu i svoju slobodu. Uglavnom, zato što ste branili svoja osnovna prava. Bio sam ponosan gledajući kako se vaši rodoljubi pod bombama okupljaju na mostovima, kao žive mete koje žele da spasu otadžbinu koju vole.',
    'U toku mog robijanja, dobio sam mnogo pozdrava od Srba iz Francuske, ali i iz Srbije. U mojoj radnoj sobi, ja čuvam jednu razglednicu na kojoj su srpski i francuski vojnici iz vremena ratova na Balkanu 1918. godine. Na njoj na srpskom jeziku piše: srpski i francuski oficiri u Prvom svetskom ratu, a na francuskom je dodato: „Hvala moj komandante Pjer Anri Binel! Srbija se moli za tebe ovog marta 1999.“ To je razglednica broj 188, frankofilsko izdanje 1999, sa potpisom prof. Branka Vasiljevića. Gde god sam se selio, nosio sam tu razglednicu sa sobom.',
    'Kada sam, najzad, tog 29. avgusta 1999. izašao iz zatvora, vi ste već bili odneli pobedu. Udarci vaših neprijatelja nisu vam slomili otpor, nisu se više čuli ni američka sekretarka, niti brbljivi Holbruk. Svi ti brbljivci ustupili su tada mesto jednom finskom pregovaraču. Naravno, mojoj dragoj Srbiji pričinjena je ogromna šteta, ali vi tada niste bili ustuknuli i čuvali ste još uvek vašeg predsednika.',
    'Kada su me 2003. pozvali moji prijatelji Mila Alečković i Iv Bataj, a zatim i izdavačka kuća „Gutenbergova Galaksija“ i njen direktor Mile Bavrlić, koji je prihvatio da na srpskom jeziku štampa moju knjigu „Zločini NATO“, najzad mi se pružila prilika da posetim zemlju koju sam toliko voleo i da sretnem heroje koji su izdržali pod ubilačkim bombama.',
    'Prešao sam Ibar u Kosovskoj Mitrovici pod pogledima Albanaca gotovo punim mržnje, ali i pod zaštitom Srba sa severne obale. Tada sam tek shvatio koliko je moj rodni kraj Arijež, u planinama južne Francuske, sličan toj južnoj srpskoj pokrajini. Sličan po planinama, sličan po narodu koji je isto tako naviknut na težak rad na planinskoj zemlji i na oštre zime. I narod iz mog rodnog kraja takođe je morao da se bori protiv osvajača koji su dolazili sa severa i za nas, poreklom sa Pirineja, visoki Monsegur isto je što i Kosovo Polje za srpski narod.',
    'Ali, politička zloupotreba se nastavila, kao i priznanje nezavisnosti srpskog Kosova i Metohije od strane vašingtonskih satelita.',
    'Francuska je, takođe, prolazila kroz mračne periode svoje istorije. I njoj je bio otet Alzas i Mozel od strane nemačkih hordi. Od 1940. do 1945. i ona je bila porobljena. Na kraju smo iz toga ipak izašli. Naravno, i danas se može reći da smo pred opasnošću. Ali, i Francuskoj, kao i Srbiji, ostaje nada. Iste one snage koje su dovele do sakaćenja Srbije i koje su dovele do sakaćenja Francuske, dovešće i do ustanka naša dva naroda.',
    'Zato je potrebno da srpska i francuska omladina odole lukavstvima i čarima potrošačkog društva. Narodi koji nemaju istoriju, nemaju budućnost. Nasuprot tome, oni koji znaju da sačuvaju svoju tradiciju, uzevši iz modernizma ono što je dobro, oni koji znaju da očuvaju svest o tome ko su, o tome kako su ih stvarali njihovi očevi, ti narodi imaju budućnost.',
    'Razvoj našeg čovečanstva pokazuje da su uzori koje šire naši neprijatelji u stvari krhki, jer počivaju na mlitavosti i lenjosti. U svetu koji nastaje, budućnost pripada onima koji su vični teškoćama i koji ne traže mnogo. Dužnost nas odraslih je da našoj deci pokažemo pravi put. Vođeni našim svetim očevima i našom ličnom snagom, na nama je, zato, da preuzmemo uzde sopstvene sudbine.',
    'Srbi su hrabri. To su pokazali tokom istorije, barem od vremena Kosovske bitke, naovamo. I, najzad, vi niste sami, čak i ako su vaša buduća braća po borbi trenutno još uvek osuđena na tišinu. Vera u Boga, vera u svoju zemlju i u svoju tradiciju je izvor vaše slave u budućnosti.',
    'Želeo sam da svima vama kažem da za vas, u sebi nosim prijateljstvo i ljubav.',
    'Neka je slava i dug život srpskom narodu!',
    'Vaš prijatelj i vaš brat: Pjer Anri Binel.',
  ],
}

const ruText = {
  category: 'Новости',
  title:
    'ПИСЬМО И ПОСЛАНИЕ ПЬЕРА АНРИ БИНЕЛЯ СЕРБСКОМУ НАРОДУ: СЛОВА ДРУГА, КОТОРЫЙ ВСТАЛ НА СТОРОНУ СЕРБИИ',
  date: 'Опубликовано: 28 апреля 2026 г.',
  lead:
    'Пьер Анри Бинель, французский офицер, который ради правды и совести встал на сторону сербского народа, оставил послание, которое и сегодня звучит сильно, честно и глубоко.',
  intro:
    'Ниже мы передаём его письмо и послание сербскому народу — свидетельство человека, который лично заплатил цену за своё решение, но не согласился молчать перед несправедливостью.',
  highlight1:
    '«Я хотел сказать всем вам, что ношу в себе дружбу и любовь к вам».',
  highlight2: '«Слава и долгая жизнь сербскому народу!»',
  letterTitle: 'Письмо Пьера Анри Бинеля сербскому народу',
  letterSubtitle:
    'Слова человека, который в один из самых тяжёлых моментов показал, что честь не знает границ.',
  galleryTitle: 'Фотографии и документ',
  commentsTitle: 'Комментарии',
  paragraphs: [
    'Двадцать семь лет назад началась агрессия НАТО против одного гордого и свободного народа — сербского народа.',
    'Поскольку я участвовал в попытке предотвратить это зло, все эти события я был вынужден наблюдать из французской тюрьмы. Когда это преступление было объявлено, я почувствовал стыд, смешанный с гордостью и честью.',
    'Прежде всего — стыд, потому что я видел, как моя страна добровольно вступает в предательство. Причин для бомбардировок не существовало, а участие в таком бесчестии не могло служить французскому народу.',
    'Так называемые «союзники», бомбя Белград, как когда-то нацисты во Второй мировой войне, сами опозорили себя перед будущим.',
    'Но я почувствовал и гордость. Ещё во время моей службы в Боснии и Герцеговине я начал узнавать сербский народ. Сербы всегда держали слово, даже в самые тяжёлые времена.',
    'Отбывая наказание в парижской тюрьме, всё это время я чувствовал дружбу к несправедливо бомбардируемым сербам. Вас бомбили потому, что вы хотели защищать своё существование, свою культуру и свою свободу.',
    'Во время моего заключения я получил много приветствий от сербов из Франции и Сербии. В моём кабинете я храню открытку с сербскими и французскими солдатами времён Первой мировой войны.',
    'Когда 29 августа 1999 года я вышел из тюрьмы, вы уже одержали победу. Удары ваших врагов не сломили ваше сопротивление.',
    'В 2003 году мне представилась возможность посетить страну, которую я так любил, и встретить героев, выдержавших под смертоносными бомбами.',
    'Я перешёл Ибар в Косовской Митровице и понял, насколько мой родной край во Франции похож на эту сербскую землю.',
    'Политическое злоупотребление продолжилось, как и признание независимости сербского Косова и Метохии со стороны вашингтонских сателлитов.',
    'Франция также проходила через мрачные периоды своей истории. Но и Франции, как и Сербии, остаётся надежда.',
    'Поэтому необходимо, чтобы сербская и французская молодёжь устояла перед соблазнами общества потребления. Народы, у которых нет истории, не имеют будущего.',
    'Будущее принадлежит тем, кто привык к трудностям и кто не требует многого. Долг взрослых — показать детям правильный путь.',
    'Сербы храбры. Они показывали это на протяжении истории. Вера в Бога, вера в свою страну и в свою традицию — источник вашей будущей славы.',
    'Я хотел сказать всем вам, что ношу в себе дружбу и любовь к вам.',
    'Слава и долгая жизнь сербскому народу!',
    'Ваш друг и ваш брат: Пьер Анри Бинель.',
  ],
}

export default function PismoPjerAnriBinelPage() {
  const { language, script } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            lead: latinToCyrillic(srLatin.lead),
            intro: latinToCyrillic(srLatin.intro),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
            letterTitle: latinToCyrillic(srLatin.letterTitle),
            letterSubtitle: latinToCyrillic(srLatin.letterSubtitle),
            galleryTitle: latinToCyrillic(srLatin.galleryTitle),
            commentsTitle: latinToCyrillic(srLatin.commentsTitle),
            paragraphs: srLatin.paragraphs.map(latinToCyrillic),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-5xl">
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

          <p className="mb-5 text-sm text-white/60 md:text-base">
            {content.date}
          </p>

          <ShareButtons
            title={content.title}
            text="Pogledaj ovu vest na sajtu Istok Info Pult"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
        >
          <button
            type="button"
            onClick={() => setSelected(0)}
            className="group block w-full text-left"
            aria-label="Otvori glavnu fotografiju"
          >
            <img
              src={images[0]}
              alt={content.title}
              className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6 shadow-[0_0_35px_rgba(250,204,21,0.08)] backdrop-blur-sm sm:p-8"
        >
          <p className="mb-4 text-lg font-semibold leading-8 text-yellow-200 md:text-xl">
            {content.lead}
          </p>

          <p className="text-base leading-8 text-gray-200 md:text-lg">
            {content.intro}
          </p>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.18 }}
  className="mb-8"
>
  <a
    href="https://tally.so/r/rjL71v"
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-900/40 to-yellow-700/30 px-5 py-4 shadow-[0_0_25px_rgba(250,204,21,0.15)] backdrop-blur-sm transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]"
  >
    <p className="text-base font-semibold text-white md:text-lg">
      📌{' '}
      {language === 'ru'
        ? 'Поддержи петицию за строительство памятника жертвам НАТО агрессии: '
        : script === 'cyr'
          ? 'Подржи петицију за изградњу споменика жртвама НАТО агресије: '
          : 'Podrži peticiju za izgradnju spomenika žrtvama NATO agresije: '}
      <span className="font-extrabold text-yellow-300 underline underline-offset-4 group-hover:text-yellow-200">
        {language === 'ru'
          ? 'ПОДПИШИ ЗДЕСЬ'
          : script === 'cyr'
            ? 'ПОТПИШИ ОВДЕ'
            : 'POTPIŠI OVDE'}
      </span>
    </p>
  </a>
</motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              {language === 'ru'
                ? 'Документ'
                : script === 'cyr'
                  ? 'Документ'
                  : 'Dokument'}
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-white md:text-4xl">
              {content.letterTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg">
              {content.letterSubtitle}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-black/40 p-5 sm:p-7 md:p-9">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-yellow-400" />

            <div className="space-y-6 text-base leading-8 text-gray-200 md:text-lg md:leading-9">
              {content.paragraphs.map((paragraph, index) => {
                const isFinal = index >= content.paragraphs.length - 3

                return (
                  <p
                    key={index}
                    className={
                      isFinal
                        ? 'text-xl font-bold leading-9 text-yellow-200 md:text-2xl md:leading-10'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                )
              })}
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
        </motion.div>

        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-10"
          >
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {content.galleryTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {images.slice(1).map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelected(i + 1)}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  aria-label={`Otvori fotografiju ${i + 2}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={img}
                      alt={`${content.title} ${i + 2}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            {content.commentsTitle}
          </h2>

          <CommentsSection postSlug="pismo-pjera-anrija-binela" />
        </motion.div>
      </article>

      {selected !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelected(null)}
            aria-label="Zatvori pregled slike"
          />

          <div className="relative z-10 w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {language === 'ru'
                ? 'Закрыть'
                : script === 'cyr'
                  ? 'Затвори'
                  : 'Zatvori'}
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={images[selected]}
                alt={`${content.title} ${selected + 1}`}
                className="mx-auto max-h-[82vh] w-auto max-w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setSelected((selected - 1 + images.length) % images.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Prethodna slika"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => setSelected((selected + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Sledeća slika"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white/70">
              {selected + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
