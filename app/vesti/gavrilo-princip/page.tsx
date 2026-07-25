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
  title: 'GAVRILO PRINCIP — METAK KOJI JE PROMENIO TOK ISTORIJE',
  date: 'Objavljeno: 25. jul 2026.',
  lead: '"Naše će sjene lutati po Beču, hodati po dvoru, plašiti gospodu."',
  paragraphs: [
    'Na današnji dan, 25. jula 1894. godine, u Obljaju kod Bosanskog Grahova rođen je Gavrilo Princip – mladić čije će ime zauvek ostati upisano među najznačajnije i najkontroverznije ličnosti srpske i evropske istorije.',
    'Njegov atentat na austrougarskog prestolonaslednika Franca Ferdinanda na Vidovdan 1914. godine predstavlja jedan od najznačajnijih događaja XX veka. Za jedne bio je atentator, za druge borac za slobodu, ali je nesporno da je njegov čin promenio tok svetske istorije.',
    'Princip nije delovao u vremenu mira. Bosna i Hercegovina nalazila se pod austrougarskom upravom, dok je među velikim delom srpskog naroda rasla težnja ka slobodi, nacionalnom ujedinjenju i oslobođenju od strane vlasti. Njegov pucanj mnogi su doživeli kao simbol otpora jedne male nacije prema velikoj imperiji.',
    'Samo mesec dana nakon Sarajevskog atentata Austrougarska je objavila rat Srbiji. Usledile su prve velike bitke Velikog rata i nezapamćena stradanja srpskog naroda u Mačvi, Pocerju, zapadnoj Srbiji, Sremu i istočnoj Bosni. Na Ceru, Drini i Kolubari hiljade srpskih vojnika položile su svoje živote braneći slobodu svoje otadžbine.',
    'Za mnoge istoričare upravo je tada započela epopeja srpske vojske koja će, uprkos ogromnim gubicima, ostati upamćena po jednoj od najslavnijih odbrana svoje države u modernoj istoriji.',
    'Posebnu simboliku nosi činjenica da je atentat izvršen na Vidovdan, datum duboko ukorenjen u srpskom istorijskom i nacionalnom pamćenju. Zbog toga se Principov pucanj često posmatra kao istorijska prekretnica koja je, zajedno sa herojstvom srpske vojske, zauvek obeležila početak jednog od najtežih, ali i najslavnijih perioda srpske istorije.',
    'Više od jednog veka kasnije, Gavrilo Princip ostaje ličnost o kojoj se vode rasprave širom sveta. Ipak, bez obzira na različita istorijska tumačenja, njegovo ime ostaje neraskidivo povezano sa borbom za slobodu i događajem koji je promenio tok svetske istorije.'
  ],
  
  highlight1: 'Na Vidovdan 1914. godine odjeknuo je pucanj koji je zauvek promenio sudbinu Evrope.',
  highlight2: 'Rođen 25. jula 1894. godine u Obljaju, Gavrilo Princip ostao je simbol borbe za slobodu i jedna od najznačajnijih ličnosti srpske istorije.',
}

const ruText = {
  category: 'Новости',
  title: 'ГАВРИЛО ПРИНЦИП — ВЫСТРЕЛ, ИЗМЕНИВШИЙ ХОД ИСТОРИИ',
  date: 'Опубликовано: 25 июль 2026 г.',
  lead: '«Наши тени будут бродить по Вене, ходить по дворцу и пугать господ.»',
  paragraphs: [
    '25 июля 1894 года в селе Обляй близ Босанско-Грахово родился Гаврило Принцип — человек, чьё имя навсегда вошло в историю Сербии и Европы.',
    'Его покушение на наследника австро-венгерского престола Франца Фердинанда в Видовдан 1914 года стало одним из важнейших событий XX века. Для одних он был террористом, для других — борцом за свободу, однако бесспорно одно: его поступок изменил ход мировой истории.',
    'Принцип действовал не в мирное время. Босния и Герцеговина находилась под властью Австро-Венгрии, а среди значительной части сербского народа росло стремление к свободе, национальному объединению и освобождению. Для многих его выстрел стал символом сопротивления небольшой нации могущественной империи.',
    'Всего через месяц после Сараевского покушения Австро-Венгрия объявила войну Сербии. Начались первые крупные сражения Первой мировой войны и трагические страдания сербского народа в Мачве, Поцерине, западной Сербии, Среме и восточной Боснии. На Цере, Дрине и Колубаре тысячи сербских солдат отдали свои жизни, защищая свободу своей Родины.',
    'Именно тогда началась легендарная эпопея сербской армии, которая, несмотря на огромные потери, вошла в историю как пример мужества, стойкости и самоотверженности.',
    'Особое значение имеет и то, что покушение произошло в Видовдан — день, занимающий особое место в исторической памяти сербского народа. Поэтому выстрел Гаврило Принципа часто рассматривается как исторический рубеж, ознаменовавший начало одного из самых тяжёлых и одновременно самых героических периодов сербской истории.',
    'Спустя более века личность Гаврило Принципа продолжает вызывать споры во всём мире. Однако независимо от различных исторических оценок, его имя навсегда связано с борьбой за свободу и событием, изменившим ход мировой истории.'
  ],
  
  highlight1: 'В Видовдан 1914 года прозвучал выстрел, навсегда изменивший судьбу Европы.',
  highlight2: 'Родившийся 25 июля 1894 года в Обляе, Гаврило Принцип стал символом борьбы за свободу и одной из самых известных фигур сербской истории.',
}

export default function GavriloPrincipPage() {
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
            src="/static/images/gavrilo-princip.jpg"
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

          <CommentsSection postSlug="gavrilo-princip" />
        </motion.div>
      </article>
    </main>
  )
}