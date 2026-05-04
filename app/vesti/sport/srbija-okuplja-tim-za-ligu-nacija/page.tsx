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
  category: 'Sport',
  title: 'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA U SASTAVU',
  date: 'Objavljeno: 4. maj 2026.',
  lead: 'Trojica odbojkaša koji su nastupali u ruskom prvenstvu našli su se na spisku reprezentacije Srbije za pripreme pred Ligu nacija.',
  paragraphs: [
    'Selektor Srbije Đorđe Krecu pozvao je ukupno 19 igrača koji će od 4. maja započeti pripreme za jedno od najvažnijih takmičenja u sezoni.',
    'Među pozvanima su tehničar Nikola Jovović (Nova), kao i spoljni udarači Pavle Perić (Nova) i Žarko Ubiparip (Orenburg), koji su tokom sezone 2025/26 nastupali u Rusiji.',
    'Zanimljivo je da će Perića u klubu Nova naredne sezone zameniti još jedan srpski odbojkaš – korektor Veljko Mašulović.',
    'Na spisku za Ligu nacija ne nalaze se Petar Krsmanović (Dinamo Ural) i Marko Ivović, ali su obojica u širem planu nacionalnog tima i mogli bi da budu važni aduti Srbije na predstojećem Evropskom prvenstvu.',
    'Srbija će takmičenje u Ligi nacija započeti u Brazilu, gde će snage odmeriti sa Argentinom, Belgijom, Brazilom i Bugarskom.'
  ],
  highlight1: 'Trojica srpskih odbojkaša koji su igrali u Rusiji dobili su poziv selektora Đorđa Krecuа za pripreme koje počinju 4. maja.',
  highlight2: 'Srbija nastup u Ligi nacija počinje u Brazilu protiv Argentine, Belgije, Brazila i Bugarske.',
}

const ruText = {
  category: 'Спорт',
  title: 'СЕРБИЯ СОБИРАЕТ СОСТАВ НА ЛИГУ НАЦИЙ: ТРИ ИГРОКА ИЗ РОССИЙСКОГО ЧЕМПИОНАТА В СПИСКЕ',
  date: 'Опубликовано: 4 мая 2026 г.',
  lead: 'Три волейболиста, выступавшие в российском чемпионате, включены в расширенный состав сборной Сербии для подготовки к Лиге наций.',
  paragraphs: [
    'Главный тренер сборной Сербии Георге Крецу вызвал 19 игроков, которые начнут подготовку 4 мая',
    'Среди них — связующий Никола Йовович (Нова), а также доигровщики Павле Перич (Нова) и Жарко Убрипарип (Оренбург), выступавшие в России в сезоне 2025/26.',
    'Интересно, что Перича в клубе «Нова» в следующем сезоне заменит еще один сербский игрок — диагональный Велько Машулович.',
    'В список на Лигу наций не вошли Петар Крсманович (Динамо Урал) и Марко Ивович, однако оба находятся в расширенной обойме сборной и могут усилить команду на чемпионате Европы.',
    'Сербия начнет турнир в Бразилии матчами против Аргентины, Бельгии, Бразилии и Болгарии.'
  ],
  highlight1: 'Три сербских волейболиста, выступавших в России, получили вызов от главного тренера Георге Крецу на сборы, которые стартуют 4 мая.',
  highlight2: 'Сербия начнет выступление в Лиге наций в Бразилии матчами против Аргентины, Бельгии, Бразилии и Болгарии.',
}

export default function SrbijaOkupljaTimZaLiguNacijaPage() {
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

          <p className="text-sm text-white/60 md:text-base">
            {content.date}
          </p>
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
            src="/static/images/liga-nacije.jpg"
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
            <CommentsSection postSlug="srbija-okuplja-tim-za-ligu-nacija" />
          </div>
        </motion.div>

      </article>
    </main>
  )
}
