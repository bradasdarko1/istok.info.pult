'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

const POST_SLUG = 'dragana-trifkovic-rusofobija-pod-maskom-patriotizma'
const IMAGE_SRC = '/static/images/dragana-trifkovic-rusofobija-pod-maskom-patriotizma.jpg'

function latinToCyrillic(text: string): string {
  const multiMap: Record<string, string> = {
    DŽ: 'Џ', Dž: 'Џ', dž: 'џ',
    LJ: 'Љ', Lj: 'Љ', lj: 'љ',
    NJ: 'Њ', Nj: 'Њ', nj: 'њ',
  }
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

  return text
    .replace(/DŽ|Dž|dž|LJ|Lj|lj|NJ|Nj|nj/g, (match) => multiMap[match] ?? match)
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

type Section = {
  heading: string
  paragraphs: string[]
}

type ArticleContent = {
  category: string
  title: string
  date: string
  lead: string
  intro: string[]
  sections: Section[]
  highlight1: string
  highlight2: string
  source: string
  shareText: string
}

const srLatin: ArticleContent = {
  category: 'Društvo',
  title: 'DRAGANA TRIFKOVIĆ: RUSOFOBIJA POD MASKOM PATRIOTIZMA — KO POKUŠAVA DA OKRENE SRBE PROTIV RUSIJE?',
  date: 'Objavljeno: 19. novembar 2026.',
  lead: 'Nakon što je Istok Info Pult otvorio javnu debatu o odnosu prema Ruskoj Federaciji i ruskim državljanima u Srbiji, oglasila se Dragana Trifković, generalna direktorka Centra za geostrateške studije. U svojoj autorskoj analizi ona otvara niz ozbiljnih pitanja: ko finansira istraživanja ruskog uticaja, kako se oblikuje javno mnjenje u Srbiji i može li se antiruski narativ predstaviti kao borba za srpske nacionalne interese?',
  intro: [],
  sections: [
    {
      heading: 'KADA KRITIKA RUSIJE POSTANE GEOPOLITIČKO PITANJE',
      paragraphs: [
        'Da li se u Srbiji vodi samo legitimna politička rasprava o odnosima sa Rusijom ili se iza pojedinih medijskih poruka krije mnogo šira borba za oblikovanje javnog mnjenja?',
        'To je jedno od ključnih pitanja koje Dragana Trifković postavlja u svojoj analizi dostavljenoj redakciji Istok Info Pulta, kao odgovor na javnu debatu koju smo nedavno pokrenuli pod naslovom „Kome i zašto smetaju Ruska Federacija i ruski državljani u Srbiji?“.',
        'Prema njenom tumačenju, savremena rusofobija u Srbiji ne mora se ispoljavati kroz otvoreno neprijateljstvo prema ruskom narodu. Ona se, kako upozorava, može pojaviti i kroz političke komentare, medijske interpretacije i poruke kojima se Rusija predstavlja kao nepouzdan saveznik, prepreka srpskoj nezavisnosti ili država čiji su interesi nužno suprotstavljeni interesima Srbije.',
        'Posebno upozorava na mogućnost da se takve poruke plasiraju upravo kroz retoriku patriotizma i zaštite nacionalnih interesa.',
      ],
    },
    {
      heading: 'KO FINANSIRA ISTRAŽIVANJA RUSKOG UTICAJA U SRBIJI?',
      paragraphs: [
        'Jedan od najvažnijih delova analize odnosi se na međunarodno finansiranje organizacija i istraživačkih projekata koji se bave prisustvom Rusije na Balkanu.',
        'Trifković podseća da smanjenje ruskog uticaja na Zapadnom Balkanu predstavlja cilj određenih zapadnih politika, dok Evropska unija od Srbije zahteva usklađivanje spoljne politike, uključujući i odnos prema sankcijama Rusiji.',
        'Kao konkretan primer navodi projekat Beogradskog centra za bezbednosnu politiku „Rusi u Srbiji: pretnja ili prilika“, za koji u svojoj analizi navodi da ga je Vlada Kanade finansirala iznosom od 22.263 dolara.',
        'Pominje i istraživanje MEDIWEB, koje je u februaru 2026. objavio Institute for Strategic Dialogue, uz finansijsku podršku nemačkog Ministarstva spoljnih poslova. Prema njenom prikazu, istraživanje se bavi informacionim kampanjama na Zapadnom Balkanu, uključujući proruske narative i njihovo širenje kroz domaći medijski i politički prostor.',
        'U analizi se pominju i organizacije CRTA i Istinomer, kao i Radio Slobodna Evropa, u kontekstu njihovog bavljenja ruskim uticajem i spoljnopolitičkom orijentacijom Srbije.',
        'Međutim, samo postojanje stranog finansiranja nije dokaz manipulacije niti nezakonitog delovanja. Zbog toga je suštinsko pitanje koje otvara Trifković sledeće: koliko su istraživanja transparentna, koje metodologije koriste i da li se isti kriterijumi primenjuju na ruski i zapadni uticaj?',
        'Drugim rečima, nije dovoljno pitati ko finansira određeno istraživanje. Važno je ispitati i šta se istražuje, kako se izvode zaključci i kakav uticaj ti zaključci imaju na javnost.',
      ],
    },
    {
      heading: 'RUSOFOBIJA POD MASKOM SRPSKOG PATRIOTIZMA?',
      paragraphs: [
        'Posebno oštar deo analize odnosi se na političke komentatore koji kritiku Rusije povezuju sa srpskim patriotizmom.',
        'Trifković upozorava da se udaljavanje Srbije od Moskve u pojedinim interpretacijama predstavlja kao neophodan uslov srpske nezavisnosti, dok se nepoverenje prema Rusiji prikazuje kao dokaz političke zrelosti i nacionalne samosvesti.',
        'Kao primer navodi Jutjub kanal „Srbija Global“, koji vodi Aleksandar Šargić.',
        'Ona ukazuje na naslove poput „Kako je Rusija izdala Srbiju“, „NIS Rusima, a Kosovu nezavisnost“ i „Vučićeva 4 stuba se slomila: Kina izdala Rusiju“, smatrajući da ovakve formulacije zahtevaju ozbiljnu proveru činjenica i konteksta.',
        'Njena kritika odnosi se na način na koji se složeni međunarodni odnosi mogu svesti na pojednostavljene tvrdnje o izdaji, skrivenim namerama i geopolitičkoj opasnosti.',
        'Ipak, važno je naglasiti da postojanje kritičkih medijskih sadržaja samo po sebi ne dokazuje koordinisanu kampanju niti povezanost njihovih autora sa stranim političkim centrima.',
        'Upravo zato je argumentovana rasprava važnija od međusobnih optužbi.',
      ],
    },
    {
      heading: 'GDE PRESTAJE POLITIČKA KRITIKA, A POČINJE RUSOFOBIJA?',
      paragraphs: [
        'U svojoj analizi Trifković pravi značajnu razliku između opravdane kritike državne politike i neprijateljskog odnosa prema čitavom narodu.',
        'Kritikovati poteze ruske vlasti, preispitivati ruske interese ili govoriti o neslaganjima između Beograda i Moskve legitimno je pravo svakog građanina, novinara ili istraživača.',
        'Problem, prema njenom mišljenju, nastaje onda kada se političke razlike pretvaraju u neosnovane optužbe, selektivno prikazivanje činjenica i negativne stereotipe o Rusima.',
        'To pitanje posebno je važno za našu prvobitnu debatu, koja se ne odnosi isključivo na državne odnose, već i na položaj ruskih državljana koji žive, rade i stvaraju porodice u Srbiji.',
        'Jer politička kritika jedne države ne bi smela da preraste u neprijateljstvo prema njenim građanima.',
      ],
    },
    {
      heading: 'DA LI SE PREKO JAVNOG MNJENJA MENJA SPOLJNA POLITIKA SRBIJE?',
      paragraphs: [
        'Trifković smatra da se posledice medijskih narativa ne završavaju na televizijskim ekranima, internet portalima i društvenim mrežama.',
        'Prema njenoj oceni, promena odnosa srpske javnosti prema Rusiji mogla bi da olakša prihvatanje sankcija, smanjenje energetske saradnje i približavanje Srbije zapadnoj politici prema Moskvi.',
        'To je njen zaključak o mogućim političkim posledicama promena javnog mnjenja, a ne dokaz da svi kritičari ruske politike deluju sa takvim ciljem.',
        'Ipak, otvara se pitanje koje zaslužuje ozbiljnu javnu raspravu: u kojoj meri strani geopolitički interesi utiču na teme, prioritete i argumente koji dominiraju srpskim medijskim prostorom?',
      ],
    },
    {
      heading: 'SRBIJA MORA SAMA DA ODLUČUJE O SVOJOJ BUDUĆNOSTI',
      paragraphs: [
        'U završnom delu analize Dragana Trifković insistira na transparentnosti finansiranja, proveravanju spornih informacija i snažnijoj neposrednoj saradnji srpskih i ruskih medija, naučnih ustanova i kulturnih organizacija.',
        'Njen osnovni stav jeste da Srbija ne treba da dokazuje nezavisnost odricanjem od odnosa sa Rusijom, niti da međunarodne prioritete drugih država automatski prihvata kao sopstvene.',
        'Istovremeno, upravo suverenost podrazumeva i pravo Srbije da svaki međunarodni odnos procenjuje samostalno, na osnovu svojih interesa, činjenica i otvorene javne debate.',
        'Istok Info Pult nastavlja razgovor koji je započeo 11. novembra.',
        'Analiza Dragane Trifković donosi jedno viđenje uzroka i mogućih posledica antiruskih narativa u Srbiji. Njeni navodi i zaključci predstavljaju osnov za dalju diskusiju, proveru i razmenu argumenata.',
        'Pozivamo stručnjake, novinare, predstavnike organizacija, građane Srbije i ruske državljane koji žive u našoj zemlji da se uključe.',
        'Jer na pitanje kome i zašto smetaju Rusija i Rusi u Srbiji ne može se odgovoriti etiketama, već činjenicama. A pitanje ko oblikuje javno mnjenje Srbije istovremeno je i pitanje koliko je Srbija slobodna da sama odlučuje o svojoj budućnosti.',
      ],
    },
  ],
  highlight1: 'Dragana Trifković upozorava da se antiruski narativi u Srbiji mogu predstavljati kao borba za patriotizam i nacionalnu nezavisnost. Posebno otvara pitanje stranog finansiranja istraživanja ruskog uticaja i oblikovanja javnog mnjenja.',
  highlight2: 'Ko finansira istraživanja o Rusiji, ko oblikuje medijske poruke i gde prestaje politička kritika, a počinje rusofobija? Analiza Dragane Trifković donosi nove argumente u debati koju je pokrenuo Istok Info Pult.',
  source: 'Izvor: Autorska analiza Dragane Trifković, generalne direktorke Centra za geostrateške studije, dostavljena redakciji Istok Info Pulta.',
  shareText: 'Pročitaj novu analizu Dragane Trifković na sajtu Istok Info Pult.',
}

const ruText: ArticleContent = {
  category: 'Общество',
  title: 'ДРАГАНА ТРИФКОВИЧ: РУСОФОБИЯ ПОД МАСКОЙ ПАТРИОТИЗМА — КТО ПЫТАЕТСЯ НАСТРОИТЬ СЕРБОВ ПРОТИВ РОССИИ?',
  date: 'Опубликовано: 19 ноября 2026 г.',
  lead: 'После того как «Исток Инфо Пулт» открыл общественную дискуссию об отношении к Российской Федерации и российским гражданам в Сербии, свою авторскую позицию представила Драгана Трифкович, генеральный директор Центра геостратегических исследований. В своём анализе она поднимает принципиальные вопросы: кто финансирует исследования российского влияния, как формируется общественное мнение в Сербии и может ли антироссийская риторика преподноситься как защита сербских национальных интересов?',
  intro: [],
  sections: [
    {
      heading: 'КОГДА КРИТИКА РОССИИ СТАНОВИТСЯ ГЕОПОЛИТИЧЕСКИМ ВОПРОСОМ',
      paragraphs: [
        'Ведётся ли в Сербии исключительно законная политическая дискуссия об отношениях с Россией или за отдельными информационными сообщениями скрывается более масштабная борьба за общественное мнение?',
        'Именно этот вопрос занимает центральное место в анализе Драганы Трифкович, направленном в редакцию «Исток Инфо Пулт» в ответ на нашу недавнюю публикацию «Кому и почему мешают Российская Федерация и российские граждане в Сербии?».',
        'По мнению Трифкович, современная русофобия в Сербии необязательно выражается в открытой враждебности к русскому народу.',
        'Она может проявляться через политические комментарии, информационные интерпретации и заявления, представляющие Россию ненадёжным партнёром, препятствием для независимости Сербии или государством, интересы которого якобы неизбежно противоречат сербским национальным интересам.',
        'Особую опасность, по её оценке, представляет использование патриотической риторики для распространения подобных взглядов.',
      ],
    },
    {
      heading: 'КТО ФИНАНСИРУЕТ ИССЛЕДОВАНИЯ РОССИЙСКОГО ВЛИЯНИЯ В СЕРБИИ?',
      paragraphs: [
        'Один из центральных разделов анализа посвящён международному финансированию организаций и исследовательских проектов, изучающих присутствие России на Балканах.',
        'Трифкович напоминает, что ограничение российского влияния на Западных Балканах входит в число целей определённых направлений западной политики, а Европейский союз требует от Сербии согласования внешнеполитического курса, в том числе по вопросу санкций против России.',
        'В качестве примера она приводит проект Белградского центра политики безопасности «Русские в Сербии: угроза или возможность?». По приведённым в её анализе данным, правительство Канады выделило на финансирование этого проекта 22 263 доллара.',
        'Другим примером стало исследование MEDIWEB, опубликованное в феврале 2026 года Институтом стратегического диалога (Institute for Strategic Dialogue) при финансовой поддержке Министерства иностранных дел Германии.',
        'Как отмечает Трифкович, исследование посвящено информационным кампаниям на Западных Балканах, включая пророссийские нарративы и роль местных политических и медийных структур в их распространении.',
        'В её материале также упоминаются организация CRTA, связанный с ней проект Istinomer и «Радио Свободная Европа» в контексте их внимания к российскому влиянию и внешнеполитической ориентации Сербии.',
        'При этом само по себе иностранное финансирование не является доказательством манипуляции или противоправной деятельности.',
        'Поэтому ключевой вопрос заключается в прозрачности таких исследований, их методологии и объективности применяемых критериев.',
        'Иными словами, необходимо выяснять не только то, кто оплачивает исследования, но и каким образом формируются их выводы и насколько последовательно оценивается влияние различных международных игроков.',
      ],
    },
    {
      heading: 'РУСОФОБИЯ ПОД МАСКОЙ СЕРБСКОГО ПАТРИОТИЗМА?',
      paragraphs: [
        'Один из наиболее острых аспектов анализа касается политических комментаторов, связывающих критику России с защитой сербских национальных интересов.',
        'Трифкович обращает внимание на то, что дистанцирование Белграда от Москвы иногда преподносится как необходимое условие независимости Сербии, а недоверие к России — как свидетельство политической зрелости и национального самосознания.',
        'В качестве характерного примера она упоминает YouTube-канал «Srbija Global», который ведёт Александр Шаргич.',
        'Она ссылается на заголовки, посвящённые предполагаемому предательству Сербии Россией, ситуации вокруг нефтяной компании NIS и российско-китайским отношениям.',
        'По мнению Трифкович, подобные формулировки требуют тщательной проверки фактов и контекста, поскольку сложные международные отношения нельзя сводить исключительно к обвинениям в предательстве и скрытых намерениях.',
        'Вместе с тем наличие критических публикаций само по себе не свидетельствует о существовании координированной иностранной кампании или зависимости их авторов от зарубежных политических центров.',
        'Именно поэтому открытая и аргументированная дискуссия имеет принципиальное значение.',
      ],
    },
    {
      heading: 'ГДЕ ЗАКАНЧИВАЕТСЯ ПОЛИТИЧЕСКАЯ КРИТИКА И НАЧИНАЕТСЯ РУСОФОБИЯ?',
      paragraphs: [
        'Важнейший тезис Драганы Трифкович заключается в необходимости разграничивать критику государственной политики и негативное отношение к целому народу.',
        'Критиковать решения российских властей, анализировать интересы Москвы и обсуждать противоречия между Сербией и Россией — законное право граждан, журналистов и исследователей.',
        'Однако, по мнению Трифкович, проблема возникает тогда, когда политические разногласия подменяются необоснованными обвинениями, выборочным использованием фактов и отрицательными стереотипами о русских.',
        'Этот вопрос имеет особое значение для дискуссии, начатой «Исток Инфо Пулт».',
        'Ведь речь идёт не только о межгосударственных отношениях, но и о российских гражданах, которые живут, работают и создают семьи в Сербии.',
        'Политическая критика государства не должна превращаться во враждебность к его гражданам.',
      ],
    },
    {
      heading: 'МОЖНО ЛИ ЧЕРЕЗ ОБЩЕСТВЕННОЕ МНЕНИЕ ИЗМЕНИТЬ ВНЕШНЮЮ ПОЛИТИКУ СЕРБИИ?',
      paragraphs: [
        'Трифкович считает, что влияние информационных нарративов выходит далеко за пределы телевидения, новостных порталов и социальных сетей.',
        'По её оценке, изменение отношения сербского общества к России могло бы облегчить принятие санкций, сокращение энергетического сотрудничества и постепенное сближение Белграда с западной политикой в отношении Москвы.',
        'Это оценка возможных политических последствий, а не доказательство того, что все критики России сознательно преследуют подобные цели.',
        'Тем не менее возникает серьёзный вопрос: насколько внешние геополитические интересы влияют на информационную повестку Сербии и на аргументы, формирующие общественное мнение?',
      ],
    },
    {
      heading: 'СЕРБИЯ ДОЛЖНА САМА ОПРЕДЕЛЯТЬ СВОЁ БУДУЩЕЕ',
      paragraphs: [
        'В заключительной части анализа Драгана Трифкович подчёркивает необходимость прозрачности финансирования, проверки спорных утверждений и развития прямого сотрудничества между сербскими и российскими средствами массовой информации, научными учреждениями и культурными организациями.',
        'Её принципиальная позиция заключается в том, что Сербия не должна доказывать свою независимость отказом от отношений с Россией или автоматически принимать геополитические приоритеты других государств в качестве собственных.',
        'При этом настоящий суверенитет предполагает право Сербии самостоятельно оценивать каждое международное партнёрство, исходя из собственных интересов, достоверных фактов и свободной общественной дискуссии.',
        '«Исток Инфо Пулт» продолжает обсуждение, начатое 11 ноября.',
        'Анализ Драганы Трифкович представляет одну из точек зрения на причины и возможные последствия антироссийских нарративов в Сербии. Приведённые ею сведения и выводы открывают пространство для дальнейшего исследования, проверки фактов и обмена аргументами.',
        'Мы приглашаем к участию экспертов, журналистов, представителей общественных организаций, граждан Сербии и россиян, проживающих в нашей стране.',
        'Ведь ответ на вопрос, кому и почему мешают Россия и русские в Сербии, следует искать не в политических ярлыках, а в фактах. А вопрос о том, кто формирует общественное мнение Сербии, неразрывно связан с тем, насколько свободно страна может определять своё собственное будущее.',
      ],
    },
  ],
  highlight1: 'Драгана Трифкович предупреждает, что антироссийские нарративы в Сербии могут преподноситься как защита патриотизма и национальной независимости. Особое внимание она уделяет иностранному финансированию исследований российского влияния и формированию общественного мнения.',
  highlight2: 'Кто финансирует исследования о России, кто формирует информационную повестку и где заканчивается политическая критика и начинается русофобия? Анализ Драганы Трифкович добавляет новые аргументы к дискуссии, начатой «Исток Инфо Пулт».',
  source: 'Источник: авторский аналитический материал Драганы Трифкович, генерального директора Центра геостратегических исследований, предоставленный редакции «Исток Инфо Пулт».',
  shareText: 'Читайте анализ Драганы Трифкович на сайте «Исток Инфо Пулт».',
}

function toCyrillicArticle(article: ArticleContent): ArticleContent {
  return {
    category: latinToCyrillic(article.category),
    title: latinToCyrillic(article.title),
    date: latinToCyrillic(article.date),
    lead: latinToCyrillic(article.lead),
    intro: article.intro.map(latinToCyrillic),
    sections: article.sections.map((section) => ({
      heading: latinToCyrillic(section.heading),
      paragraphs: section.paragraphs.map(latinToCyrillic),
    })),
    highlight1: latinToCyrillic(article.highlight1),
    highlight2: latinToCyrillic(article.highlight2),
    source: latinToCyrillic(article.source),
    shareText: latinToCyrillic(article.shareText),
  }
}

const srCyrillic = toCyrillicArticle(srLatin)

export default function DraganaTrifkovicRusofobijaPodMaskomPatriotizmaPage() {
  const { language, script } = useLanguage()
  const content = language === 'ru' ? ruText : script === 'cyr' ? srCyrillic : srLatin

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

          <ShareButtons title={content.title} text={content.shareText} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-8 overflow-hidden rounded-3xl border border-white/10"
        >
          <img src={IMAGE_SRC} alt={content.title} className="h-auto w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <p className="mb-8 text-lg leading-8 font-medium text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-8 text-base leading-8 text-gray-300 md:text-lg">
            {content.sections.map((section, sectionIndex) => (
              <section key={sectionIndex} className="space-y-5">
                <h2 className="text-xl leading-snug font-extrabold text-yellow-400 md:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
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

          <p className="mt-8 text-sm leading-6 italic text-white/50">{content.source}</p>

          <CommentsSection postSlug={POST_SLUG} />
        </motion.div>
      </article>
    </main>
  )
}
