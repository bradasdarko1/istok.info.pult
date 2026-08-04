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
  title: 'DA LI BI PRVI SRPSKI USTANAK OPSTAO BEZ RUSIJE? ŠEST GODINA ZAJEDNIČKE BORBE KOJE SU PROMENILE SRPSKU ISTORIJU',
  date: 'Objavljeno: 04. avgust 2026.',
  lead: 'Kada se govori o Prvom srpskom ustanku, najčešće se pominju Karađorđe Petrović, bitke na Ivankovcu, Mišaru i Deligradu, kao i hrabrost srpskih ustanika koji su se suprotstavili daleko jačem Osmanskom carstvu. Međutim, iza mnogih srpskih pobeda nalazila se i jedna velika evropska sila – Rusko carstvo.',
  paragraphs: [
    'Početkom XIX veka Srbija nije imala organizovanu vojsku, razvijenu privredu niti međunarodne saveznike. Ustanici su se borili uglavnom sopstvenim snagama, sa ograničenim naoružanjem i gotovo bez spoljne pomoći. Upravo zato međunarodne okolnosti postale su jedan od ključnih faktora opstanka ustanka.',
    'Godine 1806. Rusko carstvo objavilo je rat Osmanskom carstvu. Iako je sukob prvenstveno vođen zbog interesa dve velike sile na Crnom moru i Balkanu, on je otvorio potpuno novu mogućnost za srpske ustanike. Osmansko carstvo odjednom je moralo da vodi rat na više frontova, što je značajno umanjilo njegovu sposobnost da svim snagama slomi ustanak u Srbiji.',
    'Rusija nije ostala samo politički saveznik. Tokom narednih godina u Srbiju stižu ruski vojni savetnici, oficiri, artiljerija, oružje, municija i novčana pomoć. Uspostavljena je stalna diplomatska veza između Karađorđa i ruskog dvora, a važnu ulogu imao je ruski diplomata Konstantin Rodofinikin, koji je boravio među srpskim vođama i predstavljao vezu sa Sankt Peterburgom.',
    'Poseban značaj imala je saradnja srpske i ruske vojske na istočnoj granici Srbije. Tokom 1807. godine ruske jedinice zajedno sa srpskim ustanicima učestvuju u operacijama protiv Osmanlija, čime po prvi put Srbi i Rusi zajednički ratuju kao saveznici na srpskom tlu. Ova saradnja nastavila se i narednih godina.',
    'Jedna od najznačajnijih zajedničkih pobeda ostvarena je 1810. godine u bici kod Varvarina. Srpske snage predvodio je Karađorđe, dok je ruskim odredima komandovao grof Josif O',
    'Rurke, ruski general irskog porekla. Zajedničkim snagama uspeli su da odbiju višestruko brojniju osmansku vojsku. Ova pobeda omogućila je da Moravska dolina ostane pod srpskom kontrolom i pokazala koliko je saradnja dve vojske postala važna.',
    'Iste godine vođene su uspešne zajedničke operacije kod Loznice, gde su ruske jedinice i srpski ustanici zaustavili osmansku ofanzivu iz Bosne. Istovremeno, na istoku Srbije izvođene su operacije kod Štubika i Malajnice, koje su dodatno oslabile osmanski pritisak.',
    'Pomoć Rusije nije se ogledala samo na bojnom polju. Ruski dvor pružao je i diplomatsku zaštitu srpskom pokretu, pokušavajući da srpsko pitanje uključi u međunarodne pregovore sa Osmanskim carstvom. To je bio prvi put da se pitanje autonomije Srbije ozbiljnije razmatralo u evropskoj diplomatiji.',
    'Međutim, istorija je donela novi preokret. Godine 1812. Napoleon Bonaparta pokreće najveću vojnu invaziju do tada i sa više od pola miliona vojnika napada Rusko carstvo. Pred egzistencijalnom opasnošću, ruski car Aleksandar I bio je primoran da što pre okonča rat sa Osmanlijama.',
    'Rezultat je bio Bukureštanski mir iz maja 1812. godine. Iako je ovim sporazumom Srbija prvi put pomenuta u jednom međunarodnom ugovoru, Rusija je morala da povuče gotovo sve svoje vojne snage sa Balkana kako bi ih prebacila u odbranu sopstvene države od Napoleonove Velike armije.',
    'Srpski ustanici ostali su bez najvažnijeg spoljnog saveznika upravo u trenutku kada se Osmansko carstvo pripremalo za odlučujući udar.',
    'Već naredne godine usledila je velika osmanska ofanziva. Bez ruske vojne pomoći i suočeni sa znatno brojnijim neprijateljem, ustanici nisu uspeli da odbrane sve položaje. U jesen 1813. godine Prvi srpski ustanak bio je slomljen, a Karađorđe zajedno sa velikim brojem ustanika prešao je u Austriju.',
    'Ipak, borba nije bila uzaludna.',
    'Iskustvo stečeno tokom gotovo jedne decenije ratovanja, izgrađene državne ustanove, razvijena svest o sopstvenoj državnosti i međunarodno priznanje srpskog pitanja postavili su temelje za Drugi srpski ustanak 1815. godine i kasnije stvaranje moderne srpske države.',
    'Istoričari se danas razlikuju u procenama koliko je ruska pomoć bila presudna. Ono oko čega postoji široka saglasnost jeste da je ruska vojna, diplomatska i finansijska podrška od 1806. do 1812. godine značajno produžila sposobnost Srbije da vodi borbu protiv Osmanskog carstva. Bez tog savezništva tok Prvog srpskog ustanka gotovo sigurno bi izgledao drugačije.',
    'Zato se istorija odnosa Srbije i Rusije ne može posmatrati samo kroz diplomatske susrete ili političke izjave. Ona je ispisivana i na bojnim poljima kod Varvarina, Loznice, Štubika i Malajnice, gde su srpski ustanici i ruski vojnici zajedno branili isti cilj – slobodu od osmanske vlasti.',
    'Više od dva veka kasnije, to savezništvo ostaje jedan od najznačajnijih primera saradnje dva naroda u njihovoj zajedničkoj istoriji.'
  ],
  
  highlight1: 'Kada je 1806. godine Rusko carstvo objavilo rat Osmanskom carstvu, srpski ustanici više nisu bili sami. Od tog trenutka, borba za slobodu Srbije postala je deo mnogo šireg sukoba koji će obeležiti istoriju Balkana i Evrope',
  highlight2: 'Ruski oficiri, topovi, vojni savetnici, diplomatska podrška i novčana pomoć omogućili su Prvom srpskom ustanku da traje gotovo devet godina. Ipak, Napoleonov pohod na Rusiju 1812. godine promenio je sudbinu Srbije',
}

const ruText = {
  category: 'Новости',
  title: 'СМОГЛО БЫ ПЕРВОЕ СЕРБСКОЕ ВОССТАНИЕ ВЫСТОЯТЬ БЕЗ РОССИИ? ШЕСТЬ ЛЕТ СОВМЕСТНОЙ БОРЬБЫ, ИЗМЕНИВШЕЙ ИСТОРИЮ СЕРБИИ',
  date: 'Опубликовано: 04 август 2026 г.',
  lead: 'Когда речь заходит о Первом сербском восстании, чаще всего вспоминают Карагеоргия Петровича, сражения при Иванковце, Мишаре и Делиграде, а также мужество сербских повстанцев, сумевших бросить вызов значительно более сильной Османской империи. Однако за многими победами сербского оружия стояла и одна из крупнейших держав Европы — Российская империя.',
  paragraphs: [
    'В начале XIX века Сербия не располагала регулярной армией, развитой экономикой или надежными международными союзниками. Повстанцы сражались в основном собственными силами, имея ограниченное количество оружия и почти не получая помощи извне. Именно поэтому международная обстановка стала одним из важнейших факторов, позволивших восстанию выстоять.',
    'В 1806 году Российская империя объявила войну Османской империи. Хотя этот конфликт был вызван прежде всего противостоянием двух великих держав за влияние на Черном море и Балканах, для сербских повстанцев он открыл совершенно новые возможности. Османская империя оказалась вынуждена вести войну сразу на нескольких фронтах, что значительно ослабило ее способность сосредоточить все силы против Сербии.',
    'Россия не ограничилась лишь политической поддержкой. В последующие годы в Сербию начали прибывать русские военные советники, офицеры, артиллерия, оружие, боеприпасы и денежная помощь. Между Карагеоргием и российским императорским двором была установлена постоянная дипломатическая связь. Важную роль сыграл российский дипломат Константин Родофиникин, находившийся среди сербских руководителей и представлявший интересы Санкт-Петербурга.',
    'Особое значение имело сотрудничество русской и сербской армий на восточной границе Сербии. В 1807 году русские войска вместе с сербскими повстанцами приняли участие в совместных операциях против Османской империи. Именно тогда русские и сербы впервые сражались плечом к плечу на сербской земле как союзники. Это сотрудничество продолжалось и в последующие годы.',
    'Одной из самых значительных совместных побед стала битва при Варварине в 1810 году. Сербскими силами командовал Карагеоргий, а русским отрядом — генерал граф Иосиф О',
    'Рурк, русский военачальник ирландского происхождения. Совместными усилиями союзники сумели остановить значительно превосходящие силы османской армии. Эта победа позволила сохранить под контролем долину Моравы и наглядно показала, насколько важным стало военное сотрудничество двух народов.',
    'В том же году успешные совместные действия были проведены под Лозницей, где русские подразделения и сербские повстанцы остановили наступление османских войск из Боснии. Одновременно на востоке Сербии велись операции в районах Штубика и Малайницы, что также значительно ослабило давление Османской империи.',
    'Поддержка России проявлялась не только на поле боя. Российский императорский двор оказывал сербскому восстанию дипломатическую защиту, стремясь включить сербский вопрос в международные переговоры с Османской империей. Это был первый случай, когда вопрос сербской автономии стал предметом серьезного обсуждения в европейской дипломатии.',
    'Однако вскоре история сделала новый поворот.',
    'В 1812 году Наполеон Бонапарт начал крупнейшее военное вторжение своего времени, вторгнувшись в пределы Российской империи с армией численностью более полумиллиона человек. Перед лицом смертельной угрозы император Александр I был вынужден как можно скорее завершить войну с Османской империей.',
    'Итогом стал Бухарестский мирный договор, подписанный в мае 1812 года. Несмотря на то что именно в этом международном соглашении впервые были закреплены положения, касавшиеся Сербии, Россия была вынуждена вывести почти все свои войска с Балкан и перебросить их на защиту собственной страны от армии Наполеона.',
    'Сербские повстанцы остались без своего главного союзника именно в тот момент, когда Османская империя готовилась нанести решающий удар.',
    'Уже в следующем году началось крупное османское наступление. Лишившись российской военной поддержки и столкнувшись с многократно превосходящими силами противника, повстанцы не смогли удержать свои позиции. Осенью 1813 года Первое сербское восстание было подавлено, а Карагеоргий вместе со многими своими соратниками был вынужден перейти на территорию Австрийской империи.',
    'Тем не менее эта борьба не оказалась напрасной.',
    'Почти десятилетний опыт войны, созданные государственные учреждения, укрепившееся национальное самосознание и международное признание сербского вопроса стали прочной основой для Второго сербского восстания 1815 года и последующего формирования современного сербского государства.',
    'Сегодня историки по-разному оценивают степень влияния российской помощи на исход восстания. Однако существует широкое согласие в том, что военная, дипломатическая и финансовая поддержка России в период с 1806 по 1812 год существенно увеличила возможности Сербии продолжать борьбу против Османской империи. Без этого союза ход Первого сербского восстания почти наверняка оказался бы иным.',
    'Именно поэтому история отношений Сербии и России — это не только дипломатические переговоры и политические решения. Она была написана и на полях сражений под Варвариным, Лозницей, Штубиком и Малайницей, где русские солдаты и сербские повстанцы вместе сражались за одну цель — освобождение от османского владычества.',
    'Спустя более двух столетий это союзничество остается одним из самых значимых примеров сотрудничества сербского и русского народов в их общей истории.'
  ],
  
  highlight1: 'Когда в 1806 году Российская империя объявила войну Османской империи, сербские повстанцы перестали быть одиноки. С этого момента борьба за свободу Сербии стала частью гораздо более масштабного конфликта, который изменил историю Балкан и всей Европы.',
  highlight2: 'Русские офицеры, артиллерия, военные советники, дипломатическая поддержка и финансовая помощь позволили Первому сербскому восстанию продолжаться почти девять лет. Однако поход Наполеона на Россию в 1812 году изменил судьбу Сербии.',
}

export default function SestGodinaZajednickeBorbePage() {
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
            src="/static/images/bratski-narod.jpg"
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

          <CommentsSection postSlug="sest-godina-zajednicke-borbe" />
        </motion.div>
      </article>
    </main>
  )
}