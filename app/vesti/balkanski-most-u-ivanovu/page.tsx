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
  title: 'SRPSKI ISTORIČAR ODUŠEVIO RUSIJU: MILAN STOJANOVIĆ U IVANOVU PREDSTAVIO KNJIGU KOJA SPAJA BALKAN I RUSIJU',
  date: 'Objavljeno: 27. april 2026.',
  lead: 'Na VI forumu-festivalu „Balkanski most“ u Ivanovu, srpski istoričar Milan Stojanović predstavio je knjigu „Balkan: istorija i perspektive“, ostavivši snažan utisak na akademsku javnost i potvrdivši rastući značaj srpsko-ruskih kulturnih veza.',
  paragraphs: [
    'Na VI forumu-festivalu „Balkanski most“, koji je održan u Ivanovu od 22. do 25. aprila, zapaženo mesto zauzela je prezentacija knjige „Balkan: istorija i perspektive“. Njen autor je Milan Stojanović, sa Katedre za istoriju države i prava Tulski državni univerzitet, a ujedno i šef Predstavništva Rusko-balkanskog centra za poslovnu saradnju i kulturu u Tulskoj oblasti. Susret sa studentima i gostima foruma održan je 24. aprila u Ivanovski državni energetski univerzitet i izazvao je veliko interesovanje.',
    'Milan Stojanović nije samo predstavio svoje delo, već je detaljno govorio i o tome kako Tulska oblast danas gradi humanitarne, obrazovne i kulturne veze sa balkanskim zemljama.',
    '„Naš zadatak je da pokažemo da i regioni, daleki od prestoničke agende, mogu biti ravnopravni učesnici rusko-srpskog dijaloga. Tula ima i istorijske dodirne tačke sa Balkanom i savremene projekte koje realizujemo zajedno sa univerzitetima i društvenim organizacijama“, istakao je on tokom izlaganja.',
    'Nakon prezentacije, autor je odgovarao na pitanja slušalaca. Studente i profesore zanimalo je kako se razvijala državnost balkanskih naroda, koje pravne tradicije je preuzimala Rusija i zašto je baš sada važno izučavati zajedničku istoriju slovenskih zemalja.',
    'Stojanović je naglasio da njegova knjiga nije samo naučni pregled, već i poziv na praktičnu saradnju – od studentskih razmena do zajedničkih istraživačkih grantova.',
    'Forum-festival „Balkanski most“ u celini je potvrdio trend izvoza obrazovanja i regionalne diplomatije. Dva ivanovska univerziteta razvijaju razmenu studenata sa Republika Srpska, dok su predstavljeni i brojni projekti saradnje sa Balkanom.',
    'Kulturni program upotpunili su izložba „Kao kod kuće. Putovanje po Srbiji“, koncert narodne diplomate Olge Masaljske i susreti ratnog izveštača Romana Saponjkova sa mladima.',
    'Ali upravo je knjiška novina iz Tule dala intelektualni ton čitavom festivalu. Kako je primetio moderator foruma Jevgenij Osenkov, „ovakva dela pretvaraju interesovanje za Balkan u duboko znanje, a znanje – u čvrst most među našim narodima“.'
  ],
  highlight1: 'U prepunoj sali Ivanovskog državnog energetskog univerziteta, Milan Stojanović predstavio je delo „Balkan: istorija i perspektive“ i izazvao veliko interesovanje studenata i profesora.',
  highlight2: 'Forum „Balkanski most“ dobio je snažan intelektualni pečat – knjiga srpskog istoričara istaknuta je kao simbol novog povezivanja slovenskih naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'СЕРБСКИЙ ИСТОРИК ПОКОРИЛ РОССИЮ: МИЛАН СТОЯНОВИЧ В ИВАНОВО ПРЕДСТАВИЛ КНИГУ, СОЕДИНЯЮЩУЮ БАЛКАНЫ И РОССИЮ',
  date: 'Опубликовано: 27. апреля 2026 г.',
  lead: 'На VI форуме-фестивале «Балканский мост» в Иваново сербский историк Милан Стоянович представил книгу «Балкан: история и перспективы», произведя сильное впечатление на академическую общественность и подтвердив растущее значение сербско-российских культурных связей.',
  paragraphs: [
    'На VI форуме-фестивале «Балканский мост», который проходил в Иваново с 22 по 25 апреля, заметное место заняла презентация книги «Балкан: история и перспективы». Ее автор — Милан Стоянович, сотрудник кафедры истории государства и права Тульский государственный университет, а также руководитель Представительства Русско-балканского центра делового сотрудничества и культуры в Тульской области. Встреча со студентами и гостями форума состоялась 24 апреля в Ивановский государственный энергетический университет и вызвала большой интерес.',
    'Милан Стоянович не только представил свою книгу, но и подробно рассказал о том, как Тульская область сегодня выстраивает гуманитарные, образовательные и культурные связи с балканскими странами.',
    '«Наша задача — показать, что и регионы, далекие от столичной повестки, могут быть равноправными участниками российско-сербского диалога. Тула имеет как исторические точки соприкосновения с Балканами, так и современные проекты, которые мы реализуем совместно с университетами и общественными организациями», — отметил он.',
    'После презентации автор ответил на вопросы слушателей. Студентов и преподавателей интересовало, как развивалась государственность балканских народов, какие правовые традиции перенимала Россия и почему именно сейчас важно изучать общую историю славянских стран.',
    'Стоянович подчеркнул, что его книга — это не только научный обзор, но и приглашение к практическому сотрудничеству: от студенческих обменов до совместных исследовательских грантов.',
    'Форум-фестиваль «Балканский мост» в целом подтвердил тенденцию экспорта образования и региональной дипломатии. Два ивановских университета развивают студенческий обмен с Республика Сербская, а также были представлены новые проекты сотрудничества с Балканами.',
    'Культурную программу дополнили выставка «Как дома. Путешествие по Сербии», концерт народного дипломата Ольги Масальской и встречи военного корреспондента Романа Сапонькова с молодежью.',
    'Именно книга из Тулы задала интеллектуальный тон всему фестивалю. Как отметил модератор форума Евгений Осенков, «такие труды превращают интерес к Балканам в глубокое знание, а знание — в прочный мост между нашими народами».'
  ],
  highlight1: 'В переполненном зале Ивановского государственного энергетического университета Милан Стоянович представил книгу «Балкан: история и перспективы», вызвав большой интерес студентов и преподавателей.',
  highlight2: 'Форум «Балканский мост» получил мощный интеллектуальный акцент — книга сербского историка стала символом нового сближения славянских народов.',
}

export default function BalkanskiMostUIvanovuPage() {
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
    '/static/images/ivanovo-3.jpeg',
    '/static/images/ivanovo-1.jpeg',
    '/static/images/ivanovo-2.jpeg',
    '/static/images/ivanovo-4.jpeg'
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
          src="/static/images/ivanovo-4.jpeg"
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
