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
  title: 'RUSKI MONAH KOJI JE PROMENIO SRPSKU ISTORIJU — KAKO JE POČELA VEZA DVA NARODA',
  date: 'Objavljeno: 07. novembar 2026.',
  lead: 'Pre više od osam vekova, jedan susret na dvoru Stefana Nemanje postao je deo istorije koja će zauvek promeniti Srbiju. Mladi Rastko Nemanjić upoznao je svetogorskog monaha, prema predanju ruskog porekla, ne sluteći da će upravo taj razgovor uticati na njegovu odluku da napusti vladarski život.',
  paragraphs: [
    'Krajem XII veka Rastko je, umesto života na dvoru, izabrao monaški put. Prema srednjovekovnim žitijima, uz pomoć svetogorskog monaha napustio je Srbiju i otišao na Svetu Goru, gde se zamonašio u ruskom manastiru Svetog Pantelejmona i dobio ime Sava.',
    'Bio je to početak puta čoveka koji će postati jedna od najznačajnijih ličnosti srpske istorije.',
    'Sava je kasnije prešao u manastir Vatoped, a 1198. godine zajedno sa svojim ocem, Stefanom Nemanjom, koji se zamonašio pod imenom Simeon, učestvovao je u obnovi Hilandara. Taj manastir postao je jedan od najvažnijih duhovnih i kulturnih centara srpskog naroda.',
    'Godine 1219. Sava je izborio samostalnost Srpske pravoslavne crkve i postao njen prvi arhiepiskop, postavljajući temelje njenog daljeg razvoja.',
    'Iako identitet monaha koji je uticao na Rastka nije pouzdano utvrđen, njegovo zamonašenje u ruskoj svetogorskoj porodici svedoči o ranim duhovnim dodirima srpskog i ruskog naroda.',
    'Mnogo pre diplomatskih savezništava, ratova i velikih političkih događaja, Srbe i Ruse povezivala je pravoslavna vera.',
    'Priča o mladom Rastku podseća nas da se istorija ponekad ne menja na bojnom polju, već jednim razgovorom koji odredi sudbinu čoveka — a kroz njega i čitavog naroda.',
    'Istok Info Pult | Srbija i Rusija — vekovi zajedničke istorije, epizoda 001'
  ],
  
  highlight1: 'Pre više od osam vekova, susret mladog Rastka Nemanjića sa svetogorskim monahom postao je početak njegovog puta ka monaštvu i stvaranju samostalne Srpske pravoslavne crkve.',
  highlight2: 'Mnogo pre političkih savezništava, Srbe i Ruse povezivala je pravoslavna vera. Sveti Sava zamonašio se u ruskom manastiru na Svetoj Gori, ostavljajući važan trag u istoriji duhovnih veza dva naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'РУССКИЙ МОНАХ, ИЗМЕНИВШИЙ СЕРБСКУЮ ИСТОРИЮ, — КАК НАЧИНАЛИСЬ СВЯЗИ ДВУХ НАРОДОВ',
  date: 'Опубликовано: 07 ноября 2026 г.',
  lead: 'Более восьми веков назад одна встреча при дворе Стефана Немани стала частью истории, навсегда изменившей Сербию. Юный Растко Неманич познакомился с афонским монахом, по преданию русского происхождения, ещё не подозревая, что этот разговор повлияет на его решение отказаться от княжеской жизни.',
  paragraphs: [
    'В конце XII века Растко вместо жизни при дворе избрал монашеский путь. Согласно средневековым житиям, с помощью афонского монаха он покинул Сербию и отправился на Святую Гору, где принял монашеский постриг в русском монастыре Святого Пантелеимона и получил имя Савва.',
    'Так начался путь человека, которому предстояло стать одной из важнейших личностей сербской истории.',
    'Позднее Савва перешёл в монастырь Ватопед, а в 1198 году вместе со своим отцом Стефаном Неманей, принявшим монашество под именем Симеон, участвовал в восстановлении Хиландара. Этот монастырь стал одним из важнейших духовных и культурных центров сербского народа.',
    'В 1219 году Савва добился самостоятельности Сербской православной церкви и стал её первым архиепископом, заложив основы её дальнейшего развития.',
    'Хотя личность монаха, повлиявшего на Растко, достоверно не установлена, его постриг в русской афонской обители свидетельствует о ранних духовных контактах сербского и русского народов.',
    'Задолго до дипломатических союзов, войн и крупных политических событий сербов и русских объединяла православная вера.',
    'История юного Растко напоминает нам, что ход истории порой меняется не на поле боя, а благодаря одному разговору, определяющему судьбу человека — а через него и целого народа.',
    'Исток Инфо Пулт | Сербия и Россия — века общей истории, эпизод 001'

  ],
  
  highlight1: 'Более восьми веков назад встреча юного Растко Неманича с афонским монахом стала началом его пути к монашеству и созданию самостоятельной Сербской православной церкви.',
  highlight2: 'Задолго до политических союзов сербов и русских объединяла православная вера. Святой Савва принял монашество в русском монастыре на Афоне, оставив важный след в истории духовных связей двух народов.',
}

export default function RuskiMonahKojiJePromenioSrpskuIstorijuPage() {
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
            src="/static/images/ruski-monah-koji-je-promenio-srpsku-istoriju.jpg"
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

          <CommentsSection postSlug="ruski-monah-koji-je-promenio-srpsku-istoriju" />
        </motion.div>
      </article>
    </main>
  )
}