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
  title: 'RUSKA AMBASADA: KONKRETNI RAZGOVORI O GASU POSLE FORMIRANJA NOVE VLASTI',
  date: 'Objavljeno: 18. novembar 2026.',
  lead: 'Ambasada Rusije u Beogradu saopštila je da polazi od toga da će se konkretna pitanja saradnje dve zemlje, uključujući isporuke ruskog gasa, razmatrati „u praktičnom smislu“ posle formiranja državnih organa vlasti u Srbiji. Izjavu je ambasada dala moskovskom listu „Izvestija“, a prenosi je beogradski list „Danas“, šest nedelja pre isteka važećeg gasnog aranžmana.',
  paragraphs: [
    'Ambasador Aleksandar Bocan-Harčenko sastao se 12. novembra sa predstavnicima Studentske liste Dejanom Šoškićem i Miodragom Krmarom. Ambasada je tada na društvenoj mreži Iks saopštila da je otvoren i sadržajan razgovor bio posvećen perspektivama daljeg razvoja rusko-srpskih odnosa i jačanju veza između naroda dve zemlje, kao i da je potvrđen principijelni stav Rusije o Kosovu i Metohiji, zasnovan na poštovanju suvereniteta i teritorijalnog integriteta Srbije u skladu sa Rezolucijom 1244 Saveta bezbednosti UN.',
    'Stav ambasade poklapa se sa porukom portparolke Ministarstva spoljnih poslova Rusije Marije Zaharove. Ona je 5. novembra na brifingu izjavila da se temi gasnog ugovora treba vratiti posle formiranja državnih organa Srbije i kada oni upute odgovarajuće zvanične zahteve.',
    'Šef ruske diplomatije Sergej Lavrov rekao je 11. novembra, na početku sastanka sa predsednikom Nadzornog odbora Srbijagasa Aleksandrom Vulinom: „U potpunosti ostajemo privrženi svim dogovorima koje smo imali i koje i dalje imamo. Nadamo se da će i nova vlada obezbediti kontinuitet kada je reč o strateškom partnerstvu sa Ruskom Federacijom“, preneo je Interfaks. Lavrov je tada naveo i da su u toku pregovori o daljim isporukama gasa i o novom dugoročnom ugovoru.',
    'Vremena za dogovor nema mnogo. Važeći aranžman o isporukama ruskog gasa ističe 31. decembra 2026. godine. Poslednji trogodišnji ugovor istekao je u maju 2025, a od tada se snabdevanje produžava kratkoročnim sporazumima, uglavnom na po tri meseca. Poslednje produženje dogovoreno je 30. septembra i važi do kraja godine.',
    'Studentska lista, koja je na parlamentarnim izborima 25. oktobra osvojila 140 od 250 poslaničkih mandata, zalaže se za dugoročni ugovor. Dejan Radivojević, profesor Rudarsko-geološkog fakulteta u Beogradu i predstavnik liste, izjavio je 4. novembra da kratkoročno ugovaranje ne obezbeđuje dovoljnu predvidivost državi, privredi i energetskom sistemu. Radomir Saičić je krajem oktobra najavio da će delegacije liste u Moskvi razgovarati o zaključivanju dugoročnih sporazuma o gasu.',
    'Konstitutivna sednica novog, 15. saziva Narodne skupštine počela je 17. novembra. Prema pisanju „Izvestija“, koje prenosi „Danas“, Studentska lista sada ima rok od 90 dana za formiranje vlade, a nosilac liste i narodni poslanik Ilija Srdanović ne isključuje da nova vlada bude izabrana i pre kraja godine.',
    'Isti list navodi da bi za dugoročni ugovor trebalo rešiti pitanje tranzita ruskog gasa kroz Bugarsku posle 2027. godine, budući da se Evropska unija priprema za potpuno odustajanje od ruskih energenata, kao i pitanje Naftne industrije Srbije, koja je od januara 2025. pod američkim sankcijama. Važeći aranžman ističe 31. decembra, a o novom sporazumu, prema rečima ruskih diplomata, razgovaraće se kada Srbija dobije novu vladu.'
  ],

  highlight1: 'Ruska ambasada: o isporukama gasa konkretno će se razgovarati posle formiranja novih organa vlasti u Srbiji.',
  highlight2: 'Važeći gasni aranžman ističe 31. decembra, a Studentska lista traži dugoročni ugovor umesto tromesečnih produženja.',

  imageAlt: 'AI ilustracija: gasovod i industrijsko postrojenje sa zastavama Srbije i Rusije',
}

// Oznaka „AI“ ostaje latinicom i u ćiriličnoj verziji, zato se alt tekst ne izvodi automatski.
const srCyrillicImage = {
  imageAlt: 'AI илустрација: гасовод и индустријско постројење са заставама Србије и Русије',
}

const ruText = {
  category: 'Новости',
  title: 'ПОСОЛЬСТВО РОССИИ: КОНКРЕТНЫЕ ПЕРЕГОВОРЫ О ГАЗЕ — ПОСЛЕ ФОРМИРОВАНИЯ НОВОЙ ВЛАСТИ',
  date: 'Опубликовано: 18 ноября 2026 г.',
  lead: 'Посольство России в Белграде сообщило, что исходит из того, что конкретные вопросы сотрудничества двух стран, включая поставки российского газа, будут рассматриваться в практическом плане после формирования органов государственной власти в Сербии. Об этом в посольстве заявили «Известиям», передаёт белградская газета «Данас», — за шесть недель до истечения действующего газового соглашения.',
  paragraphs: [
    '12 ноября посол Александр Боцан-Харченко встретился с представителями «Студенческого списка» Деяном Шошкичем и Миодрагом Крмаром. Как сообщило тогда посольство в соцсети X, открытый и содержательный разговор был посвящён перспективам дальнейшего развития российско-сербских отношений и укреплению связей между народами двух стран; также была подтверждена принципиальная позиция России по Косову и Метохии, основанная на уважении суверенитета и территориальной целостности Сербии в соответствии с резолюцией 1244 Совета Безопасности ООН.',
    'Позиция посольства совпадает с заявлением официального представителя МИД России Марии Захаровой. 5 ноября на брифинге она сказала, что к теме газового контракта нужно будет вернуться после формирования органов государственной власти Сербии и направления ими соответствующих официальных запросов.',
    'Глава МИД России Сергей Лавров 11 ноября в начале встречи с председателем наблюдательного совета «Сербиягаза» Александром Вулиным заявил: «Мы полностью привержены всем договорённостям, которые у нас существовали и существуют. Надеемся, что и новое правительство будет обеспечивать преемственность в том, что касается стратегического партнёрства с Российской Федерацией», — передаёт «Интерфакс». По словам Лаврова, сейчас продолжаются переговоры о дальнейших поставках газа и о новом долгосрочном контракте.',
    'Времени на переговоры немного: действующее соглашение о поставках российского газа истекает 31 декабря 2026 года. Последний трёхлетний контракт истёк в мае 2025 года, после чего поставки продлевались краткосрочными договорённостями, как правило на три месяца. Последнее продление было согласовано 30 сентября и действует до конца года.',
    '«Студенческий список», получивший на парламентских выборах 25 октября 140 из 250 мандатов, выступает за долгосрочный контракт. Представитель списка, профессор Горно-геологического факультета в Белграде Деян Радивоевич 4 ноября заявил, что краткосрочные договорённости не обеспечивают достаточной предсказуемости для государства, экономики и энергосистемы. Ещё в конце октября Радомир Саичич заявил, что делегации списка проведут в Москве переговоры о заключении долгосрочных соглашений по газу.',
    'Учредительное заседание нового, 15-го созыва Народной скупщины открылось 17 ноября. Как пишут «Известия» (в изложении «Данаса»), у «Студенческого списка» теперь есть 90 дней на формирование правительства, а возглавлявший список депутат Илия Срданович не исключает, что кабинет будет сформирован ещё до конца года.',
    'По данным издания, для заключения долгосрочного контракта необходимо решить вопрос транзита российского газа через Болгарию после 2027 года, поскольку Евросоюз готовится к полному отказу от российских энергоносителей, а также вопрос «Нефтяной индустрии Сербии», которая с января 2025 года находится под американскими санкциями. Действующее соглашение истекает 31 декабря, а о новом, по словам российских дипломатов, будут говорить, когда в Сербии появится новое правительство.'
  ],

  highlight1: 'Посольство России: конкретные вопросы поставок газа будут рассматриваться после формирования новых органов власти Сербии.',
  highlight2: 'Действующее газовое соглашение истекает 31 декабря, а «Студенческий список» добивается долгосрочного контракта вместо трёхмесячных продлений.',

  imageAlt: 'ИИ-иллюстрация: газопровод и промышленный объект с флагами Сербии и России',
}

export default function RuskaAmbasadaOGasuINovojVlastiSrbijePage() {
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
            imageAlt: srCyrillicImage.imageAlt,
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

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/static/images/ruska-ambasada-o-gasu-i-novoj-vlasti-srbije.jpg"
              alt={content.imageAlt}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.figure>

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

          <CommentsSection postSlug="ruska-ambasada-o-gasu-i-novoj-vlasti-srbije" />
        </motion.div>
      </article>
    </main>
  )
}
