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
  title: 'Nevesinjska puška 1875: Iskra slobode koja je pokrenula oslobođenje srpskog naroda',
  date: 'Objavljeno: 24. jun 2026.',
  lead: 'Na današnji dan, 9. jula 1875. godine, u Hercegovini je izbio Nevesinjski ustanak, poznat i kao „Nevesinjska puška“, jedan od najznačajnijih događaja u istoriji srpskog naroda u XIX veku. Ustanak je započeo kao odgovor na dugogodišnje nasilje, teške poreze i političku represiju koju je nad hrišćanskim stanovništvom sprovodila osmanska vlast.',
  paragraphs: [
    'Prvi ustanički pucnji odjeknuli su u okolini Nevesinja i ubrzo se pretvorili u široki narodni pokret koji je zahvatio gotovo celu Hercegovinu, a potom se proširio i na Bosnu. Borba hercegovačkih ustanika privukla je pažnju evropskih sila i otvorila takozvano Istočno pitanje – jedno od ključnih političkih pitanja tadašnje Evrope koje se odnosilo na budućnost osmanskih teritorija na Balkanu.',
    'Nevesinjski ustanak predstavljao je mnogo više od lokalne pobune. Njegov odjek doveo je do velikih promena u regionu, podstakao nacionalno buđenje balkanskih naroda i bio jedan od događaja koji su prethodili srpsko-turskim ratovima, rusko-turskom ratu i kasnijem međunarodnom priznanju nezavisnosti Srbije i Crne Gore na Berlinskom kongresu 1878. godine.',
    'Posebno mesto u istoriji ustanka zauzima budući kralj Srbije Petar I Karađorđević. Pod imenom Petar Mrkonjić pridružio se hercegovačkim ustanicima i rame uz rame učestvovao u borbama protiv osmanske vlasti. Njegovo učešće ostalo je simbol lične hrabrosti, patriotizma i spremnosti da deli sudbinu naroda za čiju će se slobodu kasnije zalagati kao vladar.',
    'Danas, više od jednog veka kasnije, Nevesinjski ustanak ostaje trajan simbol otpora, slobodarskog duha i težnje srpskog naroda ka oslobođenju i nacionalnom ujedinjenju. Sećanje na junake Nevesinjske puške čuva se kao podsetnik na vreme kada je iskra slobode iz Hercegovine pokrenula događaje koji su promenili istoriju Balkana.'
  ],
  
  highlight1: 'Na današnji dan 1875. godine odjeknuli su prvi pucnji Nevesinjskog ustanka, događaja koji je uzdrmao Osmansko carstvo i promenio tok istorije Balkana.',
  highlight2: 'Među ustanicima se borio i budući kralj Srbije Petar I Karađorđević, poznat pod imenom Petar Mrkonjić, čije će ime kasnije postati simbol slobode i državnog jedinstva.',
}

const ruText = {
  category: 'Новости',
  title: 'Невесинское восстание 1875 года: искра свободы, положившая начало освобождению сербского народа',
  date: 'Опубликовано: 24 июня 2026 г.',
  lead: 'В этот день, 9 июля 1875 года, в Герцеговине вспыхнуло Невесинское восстание, вошедшее в историю как «Невесинская пушка». Оно стало одним из важнейших событий в истории сербского народа XIX века и ознаменовало начало масштабной борьбы против османского господства на Балканах.',
  paragraphs: [
    'Причиной восстания стали многолетние притеснения, непосильные налоги и бесправное положение христианского населения под властью Османской империи. Первые выстрелы прозвучали в окрестностях Невесинья, после чего восстание быстро распространилось по всей Герцеговине, а затем охватило и Боснию.',
    'События в Герцеговине привлекли внимание европейских держав и поставили на повестку дня так называемый Восточный вопрос — одну из главных международных проблем того времени, связанную с будущим османских владений в Европе. Невесинское восстание стало важным фактором, который привёл к последующим сербско-турецким войнам, русско-турецкой войне 1877–1878 годов и коренным изменениям политической карты Балкан.',
    'Особое место в истории восстания занимает будущий король Сербии Пётр I Карагеоргиевич. Под именем Петар Мрконич он добровольно присоединился к герцеговинским повстанцам и принимал непосредственное участие в боях против османских войск. Его участие стало символом мужества, патриотизма и преданности идее национального освобождения.',
    'Спустя более века Невесинское восстание остаётся символом борьбы за свободу, национальное достоинство и право народов самостоятельно определять своё будущее. Память о героях Невесинской пушки продолжает жить как напоминание о том, что именно из Герцеговины начались события, изменившие судьбу Балкан и открывшие путь к освобождению сербского народа.'
  ],
  
  highlight1: 'В этот день в 1875 году прозвучали первые выстрелы Невесинского восстания — события, которое потрясло Османскую империю и изменило ход истории Балкан.',
  highlight2: 'Среди повстанцев сражался будущий король Сербии Пётр I Карагеоргиевич, известный под именем Петар Мрконич, ставший впоследствии символом свободы и национального единства.',
}

export default function NevesinjskaPuska1875Page() {
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
            src="/static/images/nevesinjska-bitka.jpeg"
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

          <CommentsSection postSlug="nevesinjska-puska-1875" />
        </motion.div>
      </article>
    </main>
  )
}