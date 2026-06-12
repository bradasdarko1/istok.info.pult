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
  title: 'Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO',
  date: 'Objavljeno: 12. jun 2026.',
  lead: 'U subotu, 13. juna, biće održana biciklistička manifestacija „Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO“, koja će okupiti ljubitelje biciklizma, istorije i sećanja na događaje koji su obeležili odbranu zemlje.',
  paragraphs: [
    'Okupljanje učesnika i start vožnje planirani su u 10 časova ispred kasarne u Jakovu, odakle će kolona krenuti trasom koja prolazi kroz Jakovo, Bečmen i Petrovčić, sa okretom na predviđenoj tački i povratkom ka mestu polaska.',
    'Cilj manifestacije jeste očuvanje kulture sećanja na pripadnike protivvazduhoplovne odbrane, kao i promocija sporta, rekreacije i zajedništva među građanima.',
    'Organizaciju događaja podržavaju TO GO Surčin, USG Cycling Kampanja (Društvo ljubitelja biciklizma), Radio klub „Banjica“ YU1BBV i udruženje „Slobodno nebo Srbije“.',
    'Organizatori pozivaju sve zainteresovane građane i bicikliste da svojim prisustvom podrže manifestaciju i provedu dan u sportskom duhu, uz podsećanje na značajne istorijske događaje i mesta vezana za 3. raketni divizion PVO.'
  ],
  
  highlight1: '„Stazama heroja, na dva točka kroz istoriju.“',
  highlight2: '„Biciklima kroz mesta koja čuvaju sećanje na podvig 3. raketnog diviziona PVO.“',
}

const ruText = {
  category: 'Новости',
  title: 'Гонка свободы – велопробег по боевым маршрутам 3-го ракетного дивизиона ПВО',
  date: 'Опубликовано: 12 июня 2026 г.',
  lead: 'В субботу, 13 июня, состоится велосипедное мероприятие «Гонка свободы – велопробег по боевым маршрутам 3-го ракетного дивизиона ПВО», которое объединит любителей спорта, истории и сохранения памяти о событиях, связанных с защитой страны.',
  paragraphs: [
    'Сбор участников и старт велопробега запланированы на 10:00 у казармы в Якове. Маршрут пройдет через Яково, Бечмен и Петровчич, после чего участники совершат разворот в предусмотренной точке и вернутся к месту старта.',
    'Основная цель мероприятия — сохранение памяти о военнослужащих подразделений противовоздушной обороны, а также популяризация спорта, активного образа жизни и гражданского единства.',
    'Организаторами и партнерами мероприятия выступают ТО ГО Сурчин, USG Cycling Kampanja (Общество любителей велосипедного спорта), Радиоклуб «Баница» YU1BBV и объединение «Свободное небо Сербии».',
    'Организаторы приглашают всех желающих присоединиться к велопробегу и провести день в спортивной атмосфере, отдавая дань уважения важным историческим событиям и местам, связанным с 3-м ракетным дивизионом ПВО.'
  ],
  
  highlight1: '«По дорогам героев — на велосипедах через историю.»',
  highlight2: '«Маршрут памяти по местам, связанным с подвигом 3-го ракетного дивизиона ПВО.»',
}

export default function TrkaSlobodeVoznjaRatnimStazamaPage() {
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
            src="/static/images/trka-slobode.jpeg"
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

          <CommentsSection postSlug="trka-slobode-voznja-ratnim-stazama" />
        </motion.div>
      </article>
    </main>
  )
}