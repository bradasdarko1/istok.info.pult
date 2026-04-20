'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

function latinToCyrillic(text: string) {
  const map: Record<string, string> = {
    A:'А',B:'Б',C:'Ц',Č:'Ч',Ć:'Ћ',D:'Д',Đ:'Ђ',E:'Е',F:'Ф',G:'Г',H:'Х',
    I:'И',J:'Ј',K:'К',L:'Л',M:'М',N:'Н',O:'О',P:'П',R:'Р',S:'С',Š:'Ш',
    T:'Т',U:'У',V:'В',Z:'З',Ž:'Ж',
    a:'а',b:'б',c:'ц',č:'ч',ć:'ћ',d:'д',đ:'ђ',e:'е',f:'ф',g:'г',h:'х',
    i:'и',j:'ј',k:'к',l:'л',m:'м',n:'н',o:'о',p:'п',r:'р',s:'с',š:'ш',
    t:'т',u:'у',v:'в',z:'з',ž:'ж'
  }
  return text.split('').map(c => map[c] || c).join('')
}

const srLatin = {
  category: 'Vesti',
  title: 'BALKANSKI MOST SEĆANJA U RUSIJI',
  date: 'Objavljeno: 16. april 2026.',
  lead: 'PREMIJERA FILMA „USTAŠKI ALKAZAR“ I ANALIZA ZAJEDNIČKIH STRADANJA SLOVENA',
  paragraphs: [
    'Balkanski most sećanja: na Tulskom državnom univerzitetu premijerno u Rusiji prikazan „Ustaški Alkazar“ i razmatrani zajednički koreni genocida nad Slovenima',
    '16. aprila 2026. godine, uoči Dana jedinstvenih akcija (19. april), na Tulskom državnom univerzitetu održan je okrugli sto „Bez zastarevanja“. Dok su istražitelji i tužioci govorili o zločinima nacista na tulskom tlu, glavnu nit susreta dotakli su međunarodni eksperti. Zahvaljujući video-mostu sa Balkanom i dubokoj geopolitičkoj analizi predavača Društva „Znanje“, studenti su uvideli: tragedija sovjetskih sela i tragedija srpskih gudura karike su istog lanca, iskovanog od ideologa rasne nadmoći još početkom XX veka.',
    'Nikola Ožegović: „Istina o Jasenovcu mora da odjekuje jednako glasno kao istina o Hatinju“.',
    'Ključni događaj okruglog stola bilo je daljinsko uključenje gosta sa Univerziteta u Banja Luci (Republika Srpska). Docent Filozofskog fakulteta, doktor istorijskih nauka Nikola Ožegović obratio se studentima iz Tule pozdravnom rečju, naglasivši da srpski i ruski narod ne povezuje samo zajednička vera i pismo, već i zajednička tragična sudbina u vihoru Drugog svetskog rata.',
    'Centralni trenutak izlaganja gospodina Ožegovića bila je projekcija njegovog autorskog dokumentarnog filma „Ustaški Alkazar“. Bila je to premijera filma u Rusiji. Tokom 32 minuta u sali je vladala potpuna tišina. Film, zasnovan na arhivskim snimcima i svedočenjima preživelih zatočenika, govori o sistemu koncentracionih logora koje su stvorile hrvatske fašističke ustaše. Poseban akcenat u filmu stavljen je na logor smrti Jasenovac, koji istoričari često nazivaju „balkanskim Aušvicom“. Metode uništavanja ljudi prikazane u ostvarenju – od specijalnih noževa „srboseka“ do masovnih peći – izazvale su kod gledalaca duboko emotivno potresenje.',
    'Nakon projekcije, Nikola Ožegović odgovarao je na pitanja mladih. Istakao je da se na Zapadu danas pokušavaju prećutati ili relativizovati zločini ustaškog režima, te da je upravo zato naučni i prosvetiteljski rad u Rusiji i Republici Srpskoj toliko važan.',
    'Sergej Fedosejev: od geopolitičkih koncepcija do projekata „AntiRusija“ i „AntiSrbija“.',
    'Logičan nastavak balkanske teme bilo je izlaganje predavača Ruskog društva „Znanje“ Sergeja Fedosejeva. Ekspert je publiku uveo u geopolitičke koncepcije s početka XX veka, očigledno pokazavši kako su radovi evropskih teoretičara rasizma postavili temelje nacističke doktrine.',
    '„Ono što vidimo na primeru uništavanja civilnog stanovništva u Tulskoj oblasti 1941. godine, i ono što smo upravo videli u filmu o ustaškom Alkazaru – to nije slučajna okrutnost rata. To je sprovođenje konkretnih planova: ’AntiRusija‘ na Istoku i ’AntiSrbija‘ na Balkanu. Cilj je bio jedinstven – krčenje životnog prostora za ’višu rasu‘ i likvidacija slovenske državnosti“, naglasio je Sergej Fedosejev.',
    'Predavač se detaljno osvrnuo na to kako je projekat „AntiRusija“ podrazumevao komadanje SSSR-a i germanizaciju zauzetih zemalja, dok se njemu ogledalni projekat „AntiSrbija“ sprovodio stvaranjem marionetske hrvatske države i fizičkim istrebljenjem Srba, Jevreja i Roma.',
    'Regionalna hronika stradanja',
    'Uprkos snažnom međunarodnom akcentu, razgovor o zavičaju ostao je podjednako važan deo programa. Okrugli sto su otvorili Nikita Vasiljevič Nikitenko, direktor Koordinacionog centra Tulskog državnog univerziteta, i predstavnici organa za sprovođenje zakona — Jekaterina Nikolajevna Smirnova (Istražno odeljenje Istražnog komiteta Rusije za Tulsku oblast) i Jelisjej Stanislavovič Kaliničev (Tužilaštvo Tulske oblasti) — koji su podsetili okupljene na činjenice o genocidu u regionu. Studenti su čuli konkretne brojke: koliko je sela spaljeno, imena streljanih ilegalaca i sudbine Tuljaka odvedenih na prinudni rad u Nemačku. Te brojke su za mlade postale još jedna potvrda da za ovakve zločine zastarevanje ne postoji – ni u pravnom, ni u moralnom smislu.',
    'Sumirajući rezultate okruglog stola, učesnici su izrazili uverenje da ovakav format – spajanje regionalne istorije sa širim međunarodnim kontekstom – omogućava mladima da bolje razumeju uzroke i posledice globalne katastrofe XX veka.'
  ],
  highlight1: 'ZAJEDNIČKO STRADANJE SLOVENA',
  highlight2: 'ISTINA KOJA NE SME BITI ZABORAVLJENA',
}

const ruText = {
  category: 'Новости',
  title: 'БАЛКАНСКИЙ МОСТ ПАМЯТИ',
  date: 'Опубликовано: 16 апреля 2026 г.',
  lead: 'ПРЕМЬЕРА ФИЛЬМА «УСТАШСКИЙ АЛКАЗАР» В РОССИИ',
  paragraphs: [
    'Балканский мост памяти: в Тульском государственном университете впервые в России показан фильм «Усташский Алказар», а также рассмотрены общие корни геноцида славянских народов',
    '16. апреля 2026 года, накануне Дня единых действий (19 апреля), в Тульском государственном университете состоялся круглый стол «Без срока давности». Пока следователи и прокуроры рассказывали о преступлениях нацистов на тульской земле, главную нить встречи затронули международные эксперты. Благодаря видеомосту с Балканами и глубокой геополитической аналитике лектора Общества «Знание», студенты увидели: трагедия советских деревень и трагедия сербских ущелий — звенья одной цепи, выкованной идеологами расового превосходства ещё в начале XX века.',
    'Никола Ожегович: «Правда о Ясеноваце должна звучать так же громко, как правда о Хатыни»',
    'Ключевым событием круглого стола стало дистанционное включение гостя из Университета в Баня-Луке (Республика Сербская). Доцент философского факультета, доктор исторических наук Никола Ожегович обратился к студентам Тулы с приветственным словом, подчеркнув, что сербский и русский народы объединяет не только общая вера и письменность, но и общая трагическая судьба в вихре Второй мировой войны.',
    'Центральным моментом выступления господина Ожеговича стал показ его авторского документального фильма «Усташский Алказар». Это была премьера фильма в России. В течение 32 минут в зале царила полная тишина. Фильм, основанный на архивных кадрах и свидетельствах выживших узников, рассказывает о системе концентрационных лагерей, созданных хорватскими фашистскими усташами. Особый акцент в фильме сделан на лагере смерти Ясеновац, который историки часто называют «балканским Освенцимом». Методы уничтожения людей, показанные в картине — от специальных ножей «сербосеков» до массовых печей — вызвали у зрителей глубокое эмоциональное потрясение.',
    'После показа Никола Ожегович отвечал на вопросы молодёжи. Он отметил, что на Западе сегодня пытаются замолчать или оправдать преступления усташского режима, и именно поэтому научная и просветительская работа в России и Республике Сербской имеет столь большое значение.',
    'Сергей Федосеев: от геополитических концепций к проектам «АнтиРоссия» и «АнтиСербия»',
    'Логическим продолжением балканской темы стало выступление лектора Российского общества «Знание» Сергея Федосеева. Эксперт познакомил аудиторию с геополитическими концепциями начала XX века, наглядно показав, как труды европейских теоретиков расизма заложили основы нацистской доктрины.',
    '«То, что мы видим на примере уничтожения мирного населения в Тульской области в 1941 году, и то, что мы только что увидели в фильме об усташском Алказаре — это не случайная жестокость войны. Это реализация конкретных планов: “АнтиРоссия” на Востоке и “АнтиСербия” на Балканах. Цель была единой — расчистка жизненного пространства для “высшей расы” и ликвидация славянской государственности», — подчеркнул Сергей Федосеев.',
    'Лектор подробно остановился на том, как проект «АнтиРоссия» предполагал расчленение СССР и германизацию захваченных земель, тогда как зеркальный проект «АнтиСербия» осуществлялся через создание марионеточного хорватского государства и физическое уничтожение сербов, евреев и цыган.',
    'Региональная хроника страданий',
    'Несмотря на сильный международный акцент, разговор о родном крае остался не менее важной частью программы. Круглый стол открыли Никита Васильевич Никитенко, директор Координационного центра Тульского государственного университета, а также представители правоохранительных органов — Екатерина Николаевна Смирнова (Следственное управление Следственного комитета России по Тульской области) и Елисей Станиславович Калиничев (Прокуратура Тульской области), которые напомнили присутствующим факты геноцида в регионе.',
    'Студенты услышали конкретные цифры: сколько деревень было сожжено, имена расстрелянных подпольщиков и судьбы туляков, угнанных на принудительные работы в Германию. Эти цифры стали для молодёжи ещё одним подтверждением того, что для подобных преступлений срока давности не существует — ни в юридическом, ни в моральном смысле.',
    'Подводя итоги круглого стола, участники выразили уверенность, что такой формат — соединение региональной истории с более широким международным контекстом — помогает молодым людям лучше понимать причины и последствия глобальной катастрофы XX века.'
  ],
  highlight1: 'ОБЩАЯ ТРАГЕДИЯ НАРОДОВ',
  highlight2: 'ПАМЯТЬ, КОТОРАЯ ЖИВЁТ',
}

export default function BalkanMostPage() {
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

  const galleryImages = [
    '/static/images/balkanski-most-2.jpeg',
    '/static/images/balkanski-most-3.jpeg',
    '/static/images/balkanski-most-4.jpeg',
    '/static/images/balkasnki-most-5.jpeg'
  ]

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <article className="mx-auto max-w-4xl">

        <div className="mb-8">
          <p className="text-yellow-400 uppercase">{content.category}</p>
          <h1 className="text-4xl font-extrabold mt-2">{content.title}</h1>
          <p className="text-white/60 mt-2">{content.date}</p>

          <ShareButtons title={content.title} text="Pogledaj ovu vest" />
        </div>

        <img
          src="/static/images/balkanski-most-1.jpeg"
          className="rounded-2xl mb-8"
        />

        <div className="bg-white/5 p-6 rounded-2xl">
          <p className="text-xl mb-6">{content.lead}</p>

          {content.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-gray-300">{p}</p>
          ))}

          <div className="mt-10 text-center border border-yellow-400/30 p-6 rounded-xl">
            <p className="text-2xl font-bold">{content.highlight1}</p>
            <p className="text-yellow-300 mt-2">{content.highlight2}</p>
          </div>
        </div>

        {/* GALERIJA */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galerija</h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-48 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <CommentsSection postSlug="balkanski-most" />

      </article>
    </main>
  )
}
