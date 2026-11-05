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
  title: 'Novi Sad bogatiji za novo mesto susreta – otvoren „Istok klub“',
  date: 'Objavljeno: 05. novembar 2026.',
  lead: 'U srcu Novog Sada, na adresi Maksima Gorkog 2a, otvoren je „Istok klub“ – novi ugostiteljski prostor koji svojim ambijentom i idejom nastoji da postane mesto susreta, prijatnih razgovora i kvalitetno provedenog vremena.',
  paragraphs: [
    'Novi Sad je dobio još jedno mesto na kojem će ljubitelji dobre kafe, opuštene atmosfere i druženja moći da pronađu svoj kutak. „Istok klub“ otvorio je svoja vrata posetiocima sa željom da ponudi nešto više od uobičajenog odlaska u kafić – prostor u kojem se ljudi okupljaju, razmenjuju ideje, stvaraju poznanstva i uživaju u trenucima predaha od svakodnevnih obaveza.',
    'Topao ambijent, pažljivo osmišljen prostor i prijatna atmosfera predstavljaju osnovu ideje na kojoj počiva ovaj novi novosadski lokal.',
    'Mesto gde razgovori imaju posebnu vrednost',
    'U vremenu u kojem svakodnevica postaje sve brža, a neposredni susreti sve ređi, „Istok klub“ želi da podseti na značaj jednostavnih trenutaka – jutarnje kafe, razgovora sa prijateljima i susreta koji se ne završavaju pogledom na sat.',
    'Zamišljen kao prostor otvoren za sve generacije, klub nastoji da neguje atmosferu gostoprimstva, međusobnog poštovanja i zajedništva.',
    'Bilo da je reč o prvoj jutarnjoj kafi, kratkom predahu tokom radnog dana ili večernjem druženju, vrata „Istok kluba“ otvorena su svima koji žele da svoje vreme provedu u prijatnom okruženju.',
    'Nova adresa za druženje u Novom Sadu',
    '„Istok klub“ nalazi se u Ulici Maksima Gorkog 2a, na lokaciji lako dostupnoj stanovnicima i posetiocima Novog Sada.',
    'Radno vreme kluba je od ponedeljka do petka od 7 do 23 časa, dok je subotom otvoren od 8 časova do ponoći. Nedelja je neradni dan.',
    'Otvaranjem ovog prostora Novi Sad dobija još jednu adresu za susrete, razgovore i stvaranje novih uspomena.',
    '„Istok klub“ – vaše mesto za dobru kafu, razgovor i predah.'
  ],
  
  highlight1: 'Novi Sad je bogatiji za novo mesto okupljanja. Na adresi Maksima Gorkog 2a otvoren je „Istok klub“, prostor namenjen ljubiteljima dobre kafe, prijatne atmosfere i iskrenih razgovora.',
  highlight2: 'Više od običnog kafića – „Istok klub“ želi da postane mesto susreta, druženja i zajedništva, gde svaki razgovor ima svoju vrednost, a svaki gost priliku da pronađe trenutak predaha.',
}

const ruText = {
  category: 'Новости',
  title: 'В Нови-Саде открылось новое место для встреч — «Исток клуб»',
  date: 'Опубликовано: 05 ноября 2026 г.',
  lead: 'В самом сердце Нови-Сада, по адресу Максима Горког, 2а, открылось новое заведение — «Исток клуб». Это уютное пространство, созданное для встреч, приятного общения и отдыха в тёплой атмосфере.',
  paragraphs: [
    'В Нови-Саде появилось ещё одно место, где любители хорошего кофе, спокойной обстановки и дружеских встреч смогут найти свой уголок. «Исток клуб» открыл свои двери для посетителей с желанием предложить нечто большее, чем обычное посещение кафе, — пространство, в котором люди встречаются, обмениваются идеями, заводят новые знакомства и наслаждаются моментами отдыха от повседневных забот.',
    'Тёплый интерьер, продуманное пространство и приятная атмосфера лежат в основе концепции этого нового заведения.',
    'Место, где разговоры приобретают особую ценность',
    'В мире, где ритм жизни становится всё быстрее, а живое общение всё реже, «Исток клуб» стремится напомнить о важности простых моментов — утренней чашки кофе, беседы с друзьями и встреч, во время которых не хочется смотреть на часы.',
    'Задуманный как пространство для людей разных поколений, клуб стремится поддерживать атмосферу гостеприимства, взаимного уважения и единства.',
    'Будь то первая чашка утреннего кофе, небольшой перерыв в течение рабочего дня или вечерняя встреча с друзьями, двери «Исток клуба» открыты для всех, кто ценит приятную обстановку и хорошую компанию.',
    'Новый адрес для встреч в Нови-Саде',
    '«Исток клуб» расположен по адресу: улица Максима Горког, 2а, в удобной для жителей и гостей Нови-Сада части города.',
    'Часы работы клуба: с понедельника по пятницу — с 7:00 до 23:00, в субботу — с 8:00 до 24:00. Воскресенье — выходной день.',
    'С открытием этого пространства у Нови-Сада появилось ещё одно место для встреч, интересных бесед и новых воспоминаний.',
    '«Исток клуб» — ваше место для хорошего кофе, общения и отдыха.'

  ],
  
  highlight1: 'В Нови-Саде открылось новое место для встреч. По адресу Максима Горког, 2а, начал работу «Исток клуб» — уютное пространство для любителей хорошего кофе, приятной атмосферы и искреннего общения.',
  highlight2: 'Больше, чем просто кафе, — «Исток клуб» стремится стать местом встреч, дружеского общения и единства, где ценится каждый разговор, а каждый гость может найти время для отдыха.',
}

export default function IstokKlubStigaoUNoviSadPage() {
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
            src="/static/images/istok-klub-stigao-u-novi-sad.jpg"
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

          <CommentsSection postSlug="istok-klub-stigao-u-novi-sad" />
        </motion.div>
      </article>
    </main>
  )
}