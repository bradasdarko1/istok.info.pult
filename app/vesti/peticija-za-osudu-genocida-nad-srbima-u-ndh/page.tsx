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
  title: 'POKRENUTA PETICIJA ZA USVAJANJE DEKLARACIJE O OSUDI GENOCIDA NAD SRBIMA U NDH',
  date: 'Objavljeno: 17. novembar 2026.',
  lead: 'Pokret Srba Krajišnika pokrenuo je peticiju podrške inicijativi da Narodna skupština Republike Srbije usvoji deklaraciju o osudi genocida nad Srbima u Nezavisnoj Državi Hrvatskoj (NDH) u periodu od 1941. do 1945. godine.',
  paragraphs: [
    'Cilj inicijative je da se kroz zvaničan dokument najvišeg zakonodavnog tela Republike Srbije oda poštovanje žrtvama, sačuva sećanje na stradanje srpskog naroda i doprinese negovanju kulture istorijskog pamćenja.',
    'Građani koji žele da podrže inicijativu mogu potpisati peticiju u ISTOK KLUBU u Novom Sadu, na adresi Maksima Gorkog 2a.',
    'Potpisivanjem peticije građani pružaju podršku zahtevu da se pitanje osude genocida nad Srbima u NDH razmotri u Narodnoj skupštini Republike Srbije.',
    'Na obrascu peticije navedeno je da se prikupljeni potpisi mogu koristiti isključivo u svrhu podrške ovoj inicijativi.',
    'Istok Info Pult poziva zainteresovane građane da se upoznaju sa sadržajem peticije i, ukoliko žele da podrže inicijativu, svojim potpisom doprinesu njenom pokretanju pred nadležnim institucijama.',
    'Mesto potpisivanja: ISTOK KLUB, Maksima Gorkog 2a, Novi Sad.',
    'Inicijator peticije: Pokret Srba Krajišnika.'
  ],
  
  highlight1: 'Pokret Srba Krajišnika pokrenuo je peticiju kojom se traži da Narodna skupština Republike Srbije usvoji deklaraciju o osudi genocida nad Srbima u NDH od 1941. do 1945. godine.',
  highlight2: 'Građani koji žele da podrže inicijativu mogu potpisati peticiju u ISTOK KLUBU, na adresi Maksima Gorkog 2a u Novom Sadu.',
}

const ruText = {
  category: 'Новости',
  title: 'НАЧАТ СБОР ПОДПИСЕЙ ЗА ПРИНЯТИЕ ДЕКЛАРАЦИИ ОБ ОСУЖДЕНИИ ГЕНОЦИДА СЕРБОВ В НГХ',
  date: 'Опубликовано: 17 ноября 2026 г.',
  lead: 'Движение сербов Краины («Покрет Срба Крајишника») выступило с инициативой сбора подписей в поддержку принятия Народной скупщиной Республики Сербии декларации об осуждении геноцида сербов в Независимом государстве Хорватия (НГХ) в период с 1941 по 1945 год.',
  paragraphs: [
    'Цель инициативы — посредством официального документа высшего законодательного органа Республики Сербии почтить память жертв, сохранить историческую память о страданиях сербского народа и способствовать формированию культуры памяти.',
    'Граждане, желающие поддержать инициативу, могут подписать петицию в «ИСТОК КЛУБЕ» (ISTOK KLUB) в Нови-Саде по адресу: улица Максима Горького, 2а.',
    'Подписывая петицию, граждане выражают поддержку требованию рассмотреть вопрос об осуждении геноцида сербов в НГХ на уровне Народной скупщины Республики Сербии.',
    'В тексте петиции указано, что собранные подписи могут использоваться исключительно в целях поддержки данной инициативы.',
    '«Исток Инфо Пулт» приглашает заинтересованных граждан ознакомиться с содержанием петиции и, при желании поддержать инициативу, поставить свою подпись.',
    'Место подписания: ИСТОК КЛУБ (ISTOK KLUB), улица Максима Горького, 2а, Нови-Сад.',
    'Инициатор петиции: Движение сербов Краины («Покрет Срба Крајишника»).'

  ],
  
  highlight1: 'Движение сербов Краины начало сбор подписей в поддержку принятия Народной скупщиной Республики Сербии декларации об осуждении геноцида сербов в НГХ в 1941–1945 годах.',
  highlight2: 'Граждане могут поддержать инициативу, подписав петицию в «ИСТОК КЛУБЕ» по адресу: улица Максима Горького, 2а, Нови-Сад.',
}

export default function PeticijaZaOsuduGenocidaNadSrbimaUNdhPage() {
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
            src="/static/images/peticija-za-genocid.jpg"
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

          <CommentsSection postSlug="peticija-za-osudu-genocida-nad-srbima-u-ndh" />
        </motion.div>
      </article>
    </main>
  )
}