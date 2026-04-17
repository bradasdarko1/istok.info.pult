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
    'Na Tulskom državnom univerzitetu održan je okrugli sto pod nazivom „Bez zastarevanja“, u okviru kojeg su analizirani zločini nad civilnim stanovništvom tokom Drugog svetskog rata.',
    'Poseban akcenat stavljen je na paralelu između stradanja sovjetskih i srpskih naroda, koji su, prema oceni stručnjaka, deo istog istorijskog i ideološkog obrasca.',
    'Centralni događaj bio je prikaz dokumentarnog filma „Ustaški Alkazar“, autora Nikole Ožegovića, što je ujedno bila i njegova premijera u Rusiji.',
    'Film donosi potresna svedočenja o sistemu logora, sa posebnim osvrtom na Jasenovac, koji se često naziva „balkanskim Aušvicom“.',
    'Nakon projekcije, održana je diskusija sa studentima, gde je istaknuta važnost očuvanja istorijske istine.',
    'Ekspert Sergej Fedosejev dodatno je analizirao geopolitičke koncepte koji su doveli do projekata „AntiRusija“ i „AntiSrbija“.',
    'Zaključak skupa bio je jasan – ovakvi zločini nemaju rok zastarevanja i moraju ostati deo kolektivnog pamćenja.'
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
    'В Тульском государственном университете прошёл круглый стол «Без срока давности», посвящённый преступлениям против мирного населения.',
    'Особое внимание было уделено параллелям между страданиями советского и сербского народов.',
    'Центральным событием стала премьера документального фильма «Усташский Алказар» Николы Ожеговича.',
    'Фильм раскрывает трагедию лагерей, включая Ясеновац, известный как «балканский Освенцим».',
    'После показа состоялась дискуссия со студентами.',
    'Эксперт Сергей Федосеев представил геополитический анализ проектов «АнтиРоссия» и «АнтиСербия».',
    'Участники подчеркнули, что такие преступления не имеют срока давности.'
  ],
  highlight1: 'ОБЩАЯ ТРАГЕДИЯ НАРОДОВ',
  highlight2: 'ПАМЯТЬ, КОТОРАЯ ЖИВЁТ',
}

export default function BalkanskiMostPage() {
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
    '/static/images/balkanski-most-4.jpeg'
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
