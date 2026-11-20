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
  title: 'ZAHAROVA: SRBIJA NE ŽELI DA IZDA ZEMLJU KOJA SE UVEK ZALAGALA ZA NJENE INTERESE',
  date: 'Objavljeno: 20. novembar 2026.',
  imageAlt:
    'AI ilustracija: zastave Srbije i Rusije ispred visoke zgrade u Moskvi u sumrak, sa krugom zvezda EU na nebu',
  lead: 'Portparolka Ministarstva spoljnih poslova Rusije Marija Zaharova izjavila je 20. novembra na brifingu u Moskvi da Evropska unija pokušava da „zabije klin“ između Rusije i Srbije, kako bi Beograd primorala da se pridržava „destruktivne antiruske politike“ Brisela. Prema njenim rečima, Srbija se ne pridružuje sankcijama Rusiji jer ne želi da izda zemlju koja se uvek zalagala za srpske interese.',
  paragraphs: [
    'Zaharova je, kako prenosi TASS, ocenila da izbalansirana politika Srbije „izaziva alergiju i bes Brisela“, jer je u suprotnosti sa nastojanjem EU da i silom proširi krug zemalja koje vode politiku usmerenu na nanošenje strateškog poraza Rusiji.',
    '„Beograd je godinama bukvalno primoravan da prekine veze, istorijske veze, sa našom zemljom. Pokušavaju da nas razdvoje i da Srbe potčine interesima Evropske unije i NATO-a“, rekla je Zaharova.',
    'Ona je navela da se u tu svrhu koristi proces proširenja EU, koji se, kako tvrdi, gotovo u potpunosti pretvorio iz ekonomske integracije u geopolitičko sredstvo i „dodatak NATO-a“. Od država kandidata se, prema njenim rečima, traže odluke koje štete njihovim nacionalnim interesima, među njima i pridruživanje antiruskim sankcijama, koje „prvenstveno utiču na one koji ih uvode“.',
    '„Srbija se ne pridružuje antiruskim sankcijama, kako je deklarisano na različitim nivoima, ne samo zato što ne želi da izda zemlju koja se uvek zalagala za srpske interese, već i zato što razume da bi time učestvovala u potpuno nezakonitoj akciji, u suštini zločinu“, rekla je Zaharova, prenose Tanjug i B92 pozivajući se na TASS.',
    'Rusko ministarstvo spoljnih poslova objavilo je deo izjave i na mreži Iks, gde se navodi da „nespremnost Srbije da sledi put EU izaziva nezadovoljstvo u Briselu i ponekad čak i agresiju“, preneli su N1, Danas i RTS.',
    'Zaharova je dodala da Moskva očekuje da Beograd i posle formiranja nove vlade nastavi kurs usmeren na jačanje odnosa sa Rusijom. Izjava je data istog dana kada je Narodna skupština na konstitutivnoj sednici novog saziva izabrala predsednika i potpredsednike.',
    'Srbija od početka rata u Ukrajini, u februaru 2022. godine, nije uvela sankcije Rusiji, uprkos zahtevima EU da uskladi spoljnu politiku sa Briselom. Ocene o pritiscima Brisela iznose se kao stav ruske strane, a reakcija Beograda ili Brisela nije zabeležena u izvorima dostupnim do objavljivanja ovog teksta.',
  ],

  highlight1: '„Srbija ne želi da izda zemlju koja se uvek zalagala za srpske interese“ — Marija Zaharova',
  highlight2: 'Srbija od februara 2022. nije uvela sankcije Rusiji, uprkos zahtevima Brisela da uskladi spoljnu politiku sa EU.',
}

const imageAltCyr =
  'AI илустрација: заставе Србије и Русије испред високе зграде у Москви у сумрак, са кругом звезда ЕУ на небу'

const ruText = {
  category: 'Новости',
  title: 'ЗАХАРОВА: СЕРБИЯ НЕ ХОЧЕТ ПРЕДАВАТЬ СТРАНУ, КОТОРАЯ ВСЕГДА ОТСТАИВАЛА ЕЁ ИНТЕРЕСЫ',
  date: 'Опубликовано: 20 ноября 2026 г.',
  imageAlt:
    'ИИ-иллюстрация: флаги Сербии и России на фоне высотного здания в Москве в сумерках, в небе круг звёзд ЕС',
  lead: 'Официальный представитель МИД России Мария Захарова 20 ноября на брифинге в Москве заявила, что Европейский союз пытается вбить клин между Россией и Сербией, чтобы заставить Белград следовать деструктивной антироссийской политике Брюсселя. По её словам, Сербия не присоединяется к санкциям против России, потому что не хочет предавать страну, которая всегда отстаивала сербские интересы.',
  paragraphs: [
    'Как передаёт ТАСС, Захарова отметила, что сбалансированная политика Сербии вызывает аллергию и гнев Брюсселя, поскольку противоречит стремлению ЕС, в том числе силой, расширить круг стран, проводящих курс на нанесение России стратегического поражения.',
    'По словам Захаровой, Белград годами буквально принуждают разорвать исторические связи с Россией, а Брюссель пытается разъединить две страны и подчинить сербов интересам Евросоюза и НАТО.',
    'Она заявила, что для этого используется процесс расширения ЕС, который, по её оценке, почти полностью превратился из экономической интеграции в геополитический инструмент и придаток НАТО. По словам дипломата, от стран-кандидатов требуют решений, наносящих ущерб их национальным интересам, в том числе присоединения к антироссийским санкциям, которые прежде всего бьют по тем, кто их вводит.',
    'Захарова подчеркнула, что Сербия не присоединяется к антироссийским санкциям не только потому, что не хочет предавать страну, всегда отстаивавшую сербские интересы, но и потому, что понимает: тем самым она участвовала бы в совершенно незаконной акции, по сути — преступлении. Об этом сообщают Танюг и B92 со ссылкой на ТАСС.',
    'МИД России опубликовал часть заявления также в соцсети X, где отмечается, что нежелание Сербии следовать курсу ЕС вызывает недовольство в Брюсселе, а порой даже агрессию, сообщили N1, Danas и РТС.',
    'Захарова добавила, что Москва ожидает от Белграда продолжения курса на укрепление отношений с Россией и после формирования нового правительства. Заявление прозвучало в тот же день, когда Народная скупщина на учредительном заседании нового созыва избрала председателя и его заместителей.',
    'С начала войны на Украине в феврале 2022 года Сербия не ввела санкции против России, несмотря на требования ЕС согласовать внешнюю политику с Брюсселем. Оценки давления Брюсселя представляют собой позицию российской стороны; реакции Белграда или Брюсселя в доступных на момент публикации источниках не зафиксировано.',
  ],

  highlight1: 'По словам Марии Захаровой, Сербия не хочет предавать страну, которая всегда отстаивала сербские интересы.',
  highlight2: 'С февраля 2022 года Сербия не ввела санкции против России, несмотря на требования Брюсселя согласовать внешнюю политику с ЕС.',
}

export default function ZaharovaSrbijaNeUvodiSankcijeRusijiPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            imageAlt: imageAltCyr,
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
            src="/static/images/zaharova-srbija-ne-uvodi-sankcije-rusiji.jpg"
            alt={content.imageAlt}
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

          <CommentsSection postSlug="zaharova-srbija-ne-uvodi-sankcije-rusiji" />
        </motion.div>
      </article>
    </main>
  )
}
