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
  title: 'Otkazan humanitarni događaj u Kuli za Kosovo i Metohiju',
  date: 'Objavljeno: 26. avgust 2026.',
  lead: 'Policija odobrila - Opština zabranila! U Kuli 25. avgusta opštinska vlast je otkazala humanitarni kulturno – umetnički događaj za prikupljanje pomoći za srpsku decu na Kosovu i Metohiji, koji je organizovala organizacija Istok Info Pult iz Novog Sada.',
  paragraphs: [
    'Ovaj humanitarni događaj je uredno prijavljen u policijskoj stanici 06. avgusta, bez ikakvih problema, uz policijsko odobrenje, je trebalo da se održi 29.08. u okviru kompleksa bazena u Kuli. U organizaciju ovog događaja je bilo uključeno mnogo Udruženja iz Srbije, Crne Gore i Republike Srpske. Ovaj događaj nije imao nikakvu političku konotaciju. Na samom događaju je trebalo da se obavi i promocija knjige Marije Jovović, kao i da se održe nastupi dece kulturno umetničkih društava „Radinac“ i ansambla „Venac“ (KiM, Gračanica), guslasrski i poetski nastupi.',
    'Ovaj skandalozni potez opštinske vlasti, koja je svega četiri dana pred skup otkazala naš događaj, uručujući dokument Sportskog centra u Kuli (kojim Opština zabranjuje organizaciju ovog i sličnih događaja), se u najmanju ruku može okarakterisati kao ANTILjUDSKI.',
    'Sramotno je, i u isto vreme poražavajuće da se izvršioci ovog antuhumanog čina (opštinska vlast), vešto skrivaju iza, kako sami kažu, „naređenja od viših državnih instanci“, pa nam je ostalo nejasno ko iza ove odluke, odluke da se spreči HUMANITARNI DOGAGAĐAJ ZA KOSOVO I METOHIJU U SRBIJI, stoji.',
    'Ovim putem želimo i da se zahvalimo ljudima koji su učestvovali u organizaciji ovog događaja, i da poručimo svima da nastavljamo sa našim radom dalje, „ćeraćemo se još“. Samo sloga Srbina spasava!'
  ],
  
  highlight1: 'POLICIJA ODOBRILA — OPŠTINA ZABRANILA!',
  highlight2: 'Događaj bez političke konotacije, sa nastupima dece, umetnika i kulturno-umetničkih društava, uredno je prijavljen policiji još 6. avgusta. Ipak, pred samo održavanje stigla je zabrana.',
}

const ruText = {
  category: 'Новости',
  title: 'В Куле отменено гуманитарное мероприятие в поддержку Косово и Метохии',
  date: 'Опубликовано: 26 августа 2026 г.',
  lead: '25 августа муниципальные власти Кулы отменили гуманитарное культурно-художественное мероприятие по сбору помощи для сербских детей в Косово и Метохии, организованное организацией «Исток Инфо Пулт» из Нови-Сада.',
  paragraphs: [
    'Это гуманитарное мероприятие было надлежащим образом заявлено в полицейском участке ещё 6 августа. Никаких проблем с заявкой не возникло, мероприятие получило разрешение полиции и должно было состояться 29 августа на территории комплекса бассейнов в Куле.',
    'В организации мероприятия принимали участие многочисленные объединения из Сербии, Черногории и Республики Сербской. Мероприятие не имело никакой политической направленности.',
    'В рамках программы также должна была состояться презентация книги Марии Йовович, выступления детей из культурно-художественного общества «Радинац» и ансамбля «Венац» из Грачаницы, Косово и Метохия, а также выступления гусляров и поэтическая программа.',
    'Этот скандальный шаг муниципальных властей, которые всего за четыре дня до мероприятия отменили его проведение, вручив нам документ Спортивного центра Кулы, согласно которому муниципалитет запрещает проведение этого и подобных мероприятий, можно охарактеризовать, по меньшей мере, как АНТИГУМАННЫЙ.',
    'Позорно и одновременно крайне удручающе, что исполнители этого антигуманного решения — муниципальные власти — умело скрываются за, как они сами утверждают, «распоряжением вышестоящих государственных инстанций».',
    'Таким образом, для нас осталось неясным, кто именно стоит за этим решением — решением воспрепятствовать проведению ГУМАНИТАРНОГО МЕРОПРИЯТИЯ В ПОДДЕРЖКУ КОСОВО И МЕТОХИИ В СЕРБИИ.',
    'Мы хотим поблагодарить всех людей, которые принимали участие в организации этого мероприятия, и передать всем, что продолжаем нашу работу дальше.',
    'мы ещё продолжим нашу борьбу.',
    'Только единство спасёт сербов!'
  ],
  
  highlight1: 'ПОЛИЦИЯ РАЗРЕШИЛА — МУНИЦИПАЛЬНЫЕ ВЛАСТИ ЗАПРЕТИЛИ!',
  highlight2: 'Мероприятие без какой-либо политической направленности, с участием детей, артистов и культурно-художественных коллективов, было официально заявлено в полиции ещё 6 августа. Однако непосредственно перед его проведением последовал запрет.',
}

export default function OtkazanHumanitarniDogadjajUKuliPage() {
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
            src="/static/images/saopstenje.jpg"
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

          <CommentsSection postSlug="otkazan-humanitarni-dogadjaj-u-kuli" />
        </motion.div>
      </article>
    </main>
  )
}