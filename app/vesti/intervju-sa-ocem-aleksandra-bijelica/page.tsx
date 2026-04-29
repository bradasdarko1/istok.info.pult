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

const images = [
  '/static/images/otac-aleksandra-bijelica.jpeg',
]

const srLatin = {
  category: 'Intervju',
  title:
    '„HVALA TI, SINE“ — OTAC HEROJA ALEKSANDRA BIJELIĆA: „ČETVRTA JE GODINA, A KAO DA JE JUČE BILO“',
  date: 'Objavljeno: 29. april 2026.',
  lead:
    'U potresnom razgovoru za Istok Info Pult, otac Aleksandra Bijelića govori o sinu kakav je bio van uniforme, o njegovom detinjstvu, hrabrosti, vojničkoj časti, bolu koji ne prolazi i rečenici koju bi mu danas rekao.',
  intro:
    'Ovo nije samo priča o oficiru. Ovo je priča o sinu, porodici, vaspitanju, ljubavi prema Srbiji i Rusiji, i o ocu koji čuva uspomenu na svoje dete kao svetinju.',
  highlight1: '„On nije pobegao. Bio je na prvoj liniji.“',
  highlight2: '„Hvala ti, sine. Hvala ti za sve.“',
  interviewTitle: 'Razgovor sa ocem Aleksandra Bijelića',
  interviewSubtitle:
    'Svedočanstvo o životu, karakteru i žrtvi mladog oficira čije ime porodica i prijatelji ne daju zaboravu.',
  galleryTitle: 'Fotografije',
  commentsTitle: 'Komentari',
  questions: [
    {
      q: 'Kakav je Aleksandar bio kao sin, van uniforme i vojske?',
      a: 'Moj sin se rodio u Srbiji, 12. avgusta 1995. godine. Nismo planirali da dolazimo u Rusiju, međutim počelo je bombardovanje i ostali smo ovde. Završio je kadetsku osnovnu školu. Kao sin bio je miran, pošten, vaspitan i odgovoran. Nije bio čovek koji traži lakši put.',
    },
    {
      q: 'Koje osobine su ga najviše krasile još od detinjstva?',
      a: 'Sve svoje osobine povukao je od mene i od njegove majke. Ja sam bio fin i pošten, isti takav je i on bio. Voleo je sve sam da ostvari, nije očekivao ničiju pomoć. Završio je vojnu školu, nije se borio da dobije bliže gradove, već je ostao poslednji i otišao na granicu Rusije i Kine. Jako je voleo sport. Voleo je i Srbiju i Rusiju.',
    },
    {
      q: 'Šta je najviše voleo u životu, osim službe i otadžbine?',
      a: 'Voleo je sport. Bio je kapiten košarkaške ekipe u osnovnoj školi. Kada je upisao srednju školu, nije video ništa drugo osim toga da bude vojnik. To je bio njegov izbor.',
    },
    {
      q: 'Šta ga je motivisalo da postane oficir?',
      a: 'Video je šta se dešava sa Kosovom, video je šta se tada dešavalo u Rusiji. Sam je rešio da postane oficir. Moje mišljenje je da bi, da se ovo nije desilo, daleko dogurao. Nakon godinu dana kao oficir odmah je dobio pušku i pištolj. Bila je svetla budućnost ispred njega.',
    },
    {
      q: 'Kako ste vi doživljavali njegov vojni put?',
      a: 'Kada je ovde služio vojsku, bilo je strašno. Ovde gde živimo nalazi se aerodrom i odatle avioni idu za Siriju. Kao otac, sa jedne strane sam bio ponosan na njega, a sa druge sam se molio da ne izbije rat. I eto, došao je rat tu, ispred vrata.',
    },
    {
      q: 'Da li je bio svestan rizika koji nosi njegova služba?',
      a: 'On je znao. Kada je počeo rat, znao je gde ide jer je bio oficir. Nama nije hteo da kaže. Rekao je samo: „Mama, tata, idem na vežbu.“ Jedino što mi je rekao bilo je: „Tata, 12 dana i 12 noći idemo vozom, slabo sam spavao, nema kuvano i ne uspem uvek da se okupam.“ U svakom razgovoru bio je hrabar, da mi ne vidimo da se boji. Pitao je nas imamo li para, kako smo. Za nas se bojao. Taj strah nam nije pokazivao. Uvek je bio nasmejan, uvek se držao. Jednom sam ga pitao: „Sine, možeš li pobeći odatle?“ A on mi je rekao: „Tata, šta si mi to rekao? To si mi sada rekao i nikad više.“ Jer on je oficir. On nije mogao da ostavi svoje ljude.',
    },
    {
      q: 'Šta vam najviše znači kada ljudi kažu da je Aleksandar heroj?',
      a: 'To znači da smo ga ja i žena dobro vaspitali. Bio je pošten čovek. Meni je teško, plačem dan i noć, i moji drugovi isto. Pravilno sam vaspitao sina. Teško je. Ko kaže da vreme leči sve — taj laže. Četvrta je godina, a kao da je juče bilo. Kad umrem, tad ću zaboraviti.',
    },
    {
      q: 'Kako se nosite sa bolom zbog gubitka sina heroja?',
      a: 'Mene ovde spasava to što imam drugove, Evgenija i Viktora. Toliko rade za mog sina, da pokažu svima da je Aleksandar heroj. Vode me po školama, gde se prikazuju filmovi o Aleksandru.',
    },
    {
      q: 'Kako porodica danas čuva uspomenu na njega?',
      a: 'Kod njegove škole napravili smo muzej, klupu heroja, i tamo je nacrtana njegova slika i cela njegova biografija. Bili smo u Moskvi, u Dumi, pozvali su nas kao porodicu heroja. Dobili smo priznanja, medalje, napisana je pesma o Aleksandru. Radimo na tome da se ime mog sina nikada ne zaboravi. Dokle god to radimo, on je tu. On je sa nama živ.',
    },
    {
      q: 'Koji je vaš savet za mlade?',
      a: 'Da više vole roditelje, da slušaju u školi, da budu dobri đaci, da ne puše, ne piju i ne drogiraju se. Moramo imati poštovanje. Treba voleti svoju državu i treba da se držimo zajedno.',
    },
    {
      q: 'Kako narod treba da čuva sećanje na pale heroje?',
      a: 'U Rusiji decu već u vrtiću vode po muzejima i upoznaju ih sa pričama o junacima. Obilaze vojne spomenike, razgovaraju sa oficirima, uče o istoriji, zastavi, himni i poštovanju prema onima koji su dali život. Kod njih je u krvi da poštuju junake i da poznaju istoriju. Svaki dan u školama počinje ruskom himnom i podizanjem zastave.',
    },
  ],
  finalQuestion:
    'Kada biste danas mogli Aleksandru da kažete jednu rečenicu, šta biste mu rekli?',
  finalAnswer:
    'Hvala ti, sine. Hvala ti za sve. Ponosim se tobom, iskreno. Hvala ti što sam te imao i hvala ti što si tako postupio. On nije pobegao. Bio je na prvoj liniji. Nisam znao da je toliko hrabar. Ponosan sam na njega što je takav bio.',
}

const ruText = {
  category: 'Интервью',
  title:
    '«СПАСИБО ТЕБЕ, СЫН»: ОТЕЦ ГЕРОЯ АЛЕКСАНДРА БИЕЛИЧА — «ПРОШЁЛ ЧЕТВЁРТЫЙ ГОД, А БУДТО ЭТО БЫЛО ВЧЕРА»',
  date: 'Опубликовано: 29 апреля 2026 г.',
  lead:
    'В трогательном разговоре для Istok Info Pult отец Александра Биелича говорит о сыне вне формы, о его детстве, мужестве, офицерской чести, боли, которая не проходит, и словах, которые он сказал бы ему сегодня.',
  intro:
    'Это не только история об офицере. Это история о сыне, семье, воспитании, любви к Сербии и России, и об отце, который хранит память о своём ребёнке как святыню.',
  highlight1: '«Он не убежал. Он был на первой линии».',
  highlight2: '«Спасибо тебе, сын. Спасибо за всё».',
  interviewTitle: 'Разговор с отцом Александра Биелича',
  interviewSubtitle:
    'Свидетельство о жизни, характере и жертве молодого офицера, имя которого семья и друзья не дают забыть.',
  galleryTitle: 'Фотографии',
  commentsTitle: 'Комментарии',
  questions: [
    {
      q: 'Каким Александр был как сын, вне формы и армии?',
      a: 'Мой сын родился в Сербии 12 августа 1995 года. Мы не планировали приезжать в Россию, но начались бомбардировки, и мы остались здесь. Он окончил кадетскую школу. Как сын он был спокойным, честным, воспитанным и ответственным. Он не был человеком, который ищет лёгкий путь.',
    },
    {
      q: 'Какие качества отличали его с детства?',
      a: 'Свои качества он взял от меня и от матери. Он был добрым, честным и самостоятельным. Любил всего добиваться сам и не ждал ничьей помощи. После военной школы он не добивался назначения ближе к большим городам, а уехал на границу России и Китая. Он очень любил спорт. Любил Сербию и Россию.',
    },
    {
      q: 'Что он больше всего любил в жизни, кроме службы и Отечества?',
      a: 'Он любил спорт. В школе был капитаном баскетбольной команды. Когда поступил в среднюю школу, он уже не видел для себя ничего другого, кроме военной службы. Это был его выбор.',
    },
    {
      q: 'Что побудило его стать офицером?',
      a: 'Он видел, что происходит с Косово, видел, что происходило тогда в России. Он сам решил стать офицером. Я думаю, если бы не случилось то, что случилось, он бы далеко пошёл. Уже через год службы офицером он получил автомат и пистолет. У него было светлое будущее.',
    },
    {
      q: 'Как вы воспринимали его военный путь?',
      a: 'Когда он служил здесь, было страшно. Там, где мы живём, есть аэродром, откуда самолёты летят в Сирию. Как отец, с одной стороны, я гордился им, а с другой — молился, чтобы не началась война. И вот война пришла прямо к порогу.',
    },
    {
      q: 'Осознавал ли он риск своей службы?',
      a: 'Он знал. Когда началась война, он понимал, куда идёт, потому что был офицером. Нам он не хотел говорить. Сказал только: «Мама, папа, я еду на учения». В разговорах он держался храбро, чтобы мы не увидели его страх. Он спрашивал, есть ли у нас деньги, как мы. Он боялся за нас. Однажды я спросил его: «Сын, можешь ли ты уйти оттуда?» А он ответил: «Папа, что ты сказал? Ты сказал это сейчас и больше никогда так не говори». Он был офицером. Он не мог оставить своих людей.',
    },
    {
      q: 'Что для вас значит, когда люди говорят, что Александр — герой?',
      a: 'Это значит, что мы с женой правильно его воспитали. Он был честным человеком. Мне тяжело, я плачу и днём и ночью, мои друзья тоже плачут со мной. Кто говорит, что время лечит всё, тот лжёт. Идёт четвёртый год, а будто это было вчера. Когда умру, тогда забуду.',
    },
    {
      q: 'Как вы справляетесь с болью после потери сына-героя?',
      a: 'Меня здесь спасает то, что у меня есть друзья — Евгений и Виктор. Они столько делают для моего сына, чтобы всем показать, что Александр — герой. Они водят меня по школам, где показывают фильмы об Александре.',
    },
    {
      q: 'Как семья сегодня хранит память о нём?',
      a: 'У его школы мы сделали музей, скамью героя, там нарисован его портрет и написана вся его биография. Мы были в Москве, в Думе, нас пригласили как семью героя. Мы получили признания, медали, о нём написали песню. Мы делаем всё, чтобы имя моего сына никогда не забыли. Пока мы это делаем, он здесь. Он жив с нами.',
    },
    {
      q: 'Ваш совет молодым?',
      a: 'Больше любить родителей, слушать учителей в школе, быть хорошими учениками, не курить, не пить и не употреблять наркотики. Нужно иметь уважение. Нужно любить свою страну и держаться вместе.',
    },
    {
      q: 'Как народ должен хранить память о павших героях?',
      a: 'В России детей уже в детском саду водят по музеям и знакомят с историями героев. Они посещают военные памятники, разговаривают с офицерами, изучают историю, флаг, гимн и уважение к тем, кто отдал жизнь. У них в крови уважать героев и знать историю. Каждый день в школах начинается с гимна и поднятия флага.',
    },
  ],
  finalQuestion:
    'Если бы вы сегодня могли сказать Александру одну фразу, что бы вы сказали?',
  finalAnswer:
    'Спасибо тебе, сын. Спасибо за всё. Я горжусь тобой, искренне. Спасибо, что ты был у меня, и спасибо за то, как ты поступил. Он не убежал. Он был на первой линии. Я не знал, что он настолько храбрый. Я горжусь тем, каким он был.',
}

export default function IntervjuSaOcemAleksandraBijelicaPage() {
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
            interviewTitle: latinToCyrillic(srLatin.interviewTitle),
            interviewSubtitle: latinToCyrillic(srLatin.interviewSubtitle),
            galleryTitle: latinToCyrillic(srLatin.galleryTitle),
            commentsTitle: latinToCyrillic(srLatin.commentsTitle),
            finalQuestion: latinToCyrillic(srLatin.finalQuestion),
            finalAnswer: latinToCyrillic(srLatin.finalAnswer),
            questions: srLatin.questions.map((item) => ({
              q: latinToCyrillic(item.q),
              a: latinToCyrillic(item.a),
            })),
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mb-10 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_25px_rgba(255,255,255,0.04)]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              {language === 'ru'
                ? 'Слова отца'
                : script === 'cyr'
                  ? 'Речи оца'
                  : 'Reči oca'}
            </p>
            <p className="text-xl font-extrabold leading-8 text-white md:text-2xl">
              {content.highlight1}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 shadow-[0_0_25px_rgba(250,204,21,0.08)]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              {language === 'ru'
                ? 'Фраза, которая остаётся'
                : script === 'cyr'
                  ? 'Реченица која остаје'
                  : 'Rečenica koja ostaje'}
            </p>
            <p className="text-xl font-extrabold leading-8 text-yellow-200 md:text-2xl">
              {content.highlight2}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Q / A
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-white md:text-4xl">
              {content.interviewTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg">
              {content.interviewSubtitle}
            </p>
          </div>

          <div className="space-y-6">
            {content.questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-[0_0_22px_rgba(255,255,255,0.03)] sm:p-7"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-400/10 text-sm font-black text-yellow-300">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-extrabold leading-8 text-yellow-300 md:text-2xl">
                    {item.q}
                  </h3>
                </div>

                <p className="text-base leading-8 text-gray-200 md:text-lg md:leading-9">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-yellow-400/20 via-yellow-900/20 to-black p-6 shadow-[0_0_45px_rgba(250,204,21,0.12)] sm:p-8 md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
              {language === 'ru'
                ? 'Последний вопрос'
                : script === 'cyr'
                  ? 'Последње питање'
                  : 'Poslednje pitanje'}
            </p>

            <h2 className="mb-6 text-2xl font-extrabold leading-tight text-white md:text-4xl">
              {content.finalQuestion}
            </h2>

            <p className="text-2xl font-black leading-relaxed text-yellow-100 md:text-4xl md:leading-tight">
              “{content.finalAnswer}”
            </p>
          </div>
        </motion.div>

        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            {content.commentsTitle}
          </h2>

          <CommentsSection postSlug="intervju-sa-ocem-aleksandra-bijelica" />
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