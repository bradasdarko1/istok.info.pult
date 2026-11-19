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
  title: 'PUTIN I TRAMP RAZGOVARALI U ŠENŽENU PRED TRILATERALNI SAMIT SA SI ĐINPINGOM',
  date: 'Objavljeno: 19. novembar 2026.',
  lead: 'Predsednik Rusije Vladimir Putin i predsednik SAD Donald Tramp razgovarali su 19. novembra u kineskom Šenženu, na marginama 33. samita Azijsko-pacifičke ekonomske saradnje (APEK). Susret je prethodio trilateralnom sastanku sa predsednikom Kine Si Đinpingom, koji je najavljen kao prvi susret lidera tri zemlje u ovom formatu.',
  paragraphs: [
    'Prema izveštaju agencije Interfaks, na ruskoj strani u razgovoru su učestvovali ministar spoljnih poslova Sergej Lavrov, ministar finansija Anton Siluanov, pomoćnik predsednika Jurij Ušakov i direktor Ruskog fonda direktnih investicija Kiril Dmitrijev. Američku delegaciju činili su državni sekretar Marko Rubio i ministar finansija Skot Besent.',
    'Deo sastanka otvoren za novinare trajao je oko jednog minuta. Uvodnu reč imao je samo Tramp, koji je rekao da se dvojica lidera poznaju godinama i da se nada produktivnom sastanku i dobrom rezultatu. Dodao je da je posle toga planiran i drugi susret. Putin pred početak razgovora nije davao izjave.',
    'Jurij Ušakov je izjavio da je razgovor trajao oko 35 do 40 minuta i da je bio „dobar“. Prema njegovim rečima, razgovaralo se o pripremi trilateralnog samita, o pojedinim pitanjima bilateralnih odnosa i o rešavanju ukrajinskog sukoba. Na pitanje da li je Ukrajina bila glavna tema, Ušakov je odgovorio: „Može se reći, da.“',
    '„Ovaj susret imao je pripremni karakter pred trilateralni samit“, rekao je Ušakov. Dodao je da, po njegovom mišljenju, nijedna strana nije dala posebno važne izjave, jer se priprema „najvažniji događaj“ u trilateralnom formatu. Lideri posle sastanka nisu davali zajedničke izjave za medije. Portparol Kremlja Dmitrij Peskov ocenio je da je susret „u celini prošao dobro“. Prema njegovim rečima, razgovor nije bio previše dug, ali su određena pitanja ipak otvorena.',
    'Ovo je prvi neposredni razgovor dvojice predsednika posle samita na Aljasci u avgustu 2025. godine. Putin i Tramp su se prethodne večeri, 18. novembra, na prijemu za šefove delegacija rukovali u prisustvu Si Đinpinga, ali je Peskov tada naveo da su se samo pozdravili i da razgovora nije bilo.',
    'Posle susreta sa Putinom, Tramp je imao bilateralni sastanak sa Si Đinpingom. Na njemu je rekao da i SAD i Kina žele da pomognu okončanju rata Rusije i Ukrajine i da očekuje da se ta tema otvori i na trilateralnom sastanku. Si i Putin imali su odvojene razgovore dan ranije, 18. novembra.',
    'Prema pisanju lista Vedomosti, trilateralni sastanak lidera Rusije, SAD i Kine zakazan je za isti dan u državnoj rezidenciji Ćilin Šanžuang u Šenženu. Tramp je kao moguće teme tog razgovora pominjao Ukrajinu, Iran i smanjenje nuklearnog naoružanja.',
  ],

  highlight1: 'Pomoćnik ruskog predsednika Jurij Ušakov izjavio je da je razgovor Putina i Trampa u Šenženu trajao 35 do 40 minuta i da je imao pripremni karakter pred trilateralni samit sa Si Đinpingom. Glavna tema, prema njegovim rečima, bila je Ukrajina.',
  highlight2: 'Trilateralni susret lidera Rusije, SAD i Kine najavljen je kao prvi u ovom formatu. Tramp je rekao da očekuje da se na njemu razgovara i o okončanju rata u Ukrajini.',
}

const ruText = {
  category: 'Новости',
  title: 'ПУТИН И ТРАМП ПРОВЕЛИ ПЕРЕГОВОРЫ В ШЭНЬЧЖЭНЕ ПЕРЕД ТРЕХСТОРОННИМ САММИТОМ С СИ ЦЗИНЬПИНОМ',
  date: 'Опубликовано: 19 ноября 2026 г.',
  lead: 'Президент России Владимир Путин и президент США Дональд Трамп 19 ноября провели переговоры в китайском Шэньчжэне на полях 33-го саммита Азиатско-Тихоокеанского экономического сотрудничества (АТЭС). Встреча предшествовала трехсторонним переговорам с председателем КНР Си Цзиньпином, которые анонсированы как первая встреча лидеров трех стран в таком формате.',
  paragraphs: [
    'По данным агентства «Интерфакс», с российской стороны во встрече участвовали министр иностранных дел Сергей Лавров, министр финансов Антон Силуанов, помощник президента Юрий Ушаков и глава Российского фонда прямых инвестиций Кирилл Дмитриев. Американскую делегацию представляли госсекретарь Марко Рубио и министр финансов Скотт Бессент.',
    'Открытая для журналистов часть встречи длилась около минуты. Со вступительным словом выступил только Трамп. Он сказал, что лидеры знают друг друга много лет, и выразил надежду на продуктивную встречу и хороший результат. Он добавил, что после этого запланирована вторая встреча. Путин перед началом беседы заявлений не делал.',
    'Юрий Ушаков сообщил, что встреча продолжалась около 35–40 минут и была «хорошей». По его словам, стороны обсудили подготовку к трехстороннему саммиту, некоторые вопросы двусторонних отношений и урегулирование украинского конфликта. На вопрос, была ли Украина основной темой, Ушаков ответил: «Можно сказать, да».',
    '«Эта встреча носила подготовительный характер перед трехсторонним саммитом», — сказал Ушаков. Он добавил, что, по его мнению, особо важных заявлений ни одна сторона не делала, поскольку идет подготовка к «самому важному мероприятию» в трехстороннем формате. Совместных заявлений для прессы после встречи лидеры не делали. Пресс-секретарь президента РФ Дмитрий Песков оценил встречу как «в целом хорошую». По его словам, беседа была не очень продолжительной, но определенные вопросы все же затронули.',
    'Это первая очная беседа двух президентов после саммита на Аляске в августе 2025 года. Накануне вечером, 18 ноября, Путин и Трамп обменялись рукопожатием на приеме для глав делегаций в присутствии Си Цзиньпина, однако, по словам Пескова, они лишь поприветствовали друг друга, и разговора не было.',
    'После встречи с Путиным Трамп провел двустороннюю встречу с Си Цзиньпином. Он заявил, что и США, и Китай хотят помочь завершению войны России и Украины, и выразил ожидание, что эта тема будет затронута на трехсторонней встрече. Си Цзиньпин и Путин провели отдельные переговоры днем ранее, 18 ноября.',
    'Как пишут «Ведомости», трехсторонняя встреча лидеров России, США и Китая была назначена на тот же день в государственной резиденции «Цилинь Шаньчжуан» в Шэньчжэне. Среди возможных тем этой встречи Трамп называл Украину, Иран и сокращение ядерных вооружений.',
  ],

  highlight1: 'Помощник президента России Юрий Ушаков заявил, что беседа Путина и Трампа в Шэньчжэне длилась 35–40 минут и носила подготовительный характер перед трехсторонним саммитом с Си Цзиньпином. Основной темой, по его словам, стала Украина.',
  highlight2: 'Трехсторонняя встреча лидеров России, США и Китая анонсирована как первая в таком формате. Трамп заявил, что ожидает обсуждения в том числе завершения войны на Украине.',
}

const imageAlt = {
  lat: 'AI ilustracija: pregovarački sto sa zastavama Rusije, SAD i Kine u Šenženu',
  cyr: 'AI илустрација: преговарачки сто са заставама Русије, САД и Кине у Шенжену',
  ru: 'ИИ-иллюстрация: стол переговоров с флагами России, США и Китая в Шэньчжэне',
}

export default function PutinITrampRazgovaraliUSenzenuPage() {
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

  const alt =
    language === 'ru' ? imageAlt.ru : script === 'cyr' ? imageAlt.cyr : imageAlt.lat

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
            src="/static/images/putin-i-tramp-razgovarali-u-senzenu.jpg"
            alt={alt}
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

          <CommentsSection postSlug="putin-i-tramp-razgovarali-u-senzenu" />
        </motion.div>
      </article>
    </main>
  )
}