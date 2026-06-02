'use client'

import { useState } from 'react'
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
  title: 'Dr Aleksa Filipović održao predavanje u Tuli: Spoljna politika Srbije između četiri stuba',
  date: 'Objavljeno: 2. jun 2026.',
  lead: 'Tula, 29. maja. U petom korpusu Tulskog državnog univerziteta (TulGU) gostovao je dr Aleksa Filipovič, doktor političkih nauka i naučni saradnik Instituta za evropske studije u Beogradu. Održao je predavanje studentima na temu „Spoljna politika Srbije u uslovima multipolarnog sveta: balansiranje između EU, SAD, Rusije i Kine na pozadini evropskih i bliskoistočnih kriza“.',
  paragraphs: [
    'Filipović je predstavio „četiri stuba“ spoljnopolitičkog kursa Beograda, iako zvanična doktrina ne postoji. Prema njegovim rečima, Srbija je kandidat za članstvo u EU (strateški cilj), tesan partner NATO-a (u okviru IPAP sporazuma i sporazuma o slobodnom tranzitu), istovremeno ne uvodi sankcije Rusiji i održava direktne letove ka Ruskoj Federaciji. Posebno je istaknuto „gvozdeno prijateljstvo“ sa Kinom, dok su odnosi sa SAD složeni – zbog 35 odsto carina i sankcija Naftnoj industriji Srbije.',
    'Studenti su sa velikom pažnjom pratili izlaganje o ekonomskim pokazateljima. Lektor je izneo podatke Narodne banke Srbije o prilivu direktnih stranih investicija od 2010. do 2025. godine, kao i statističke podatke Republičkog zavoda za statistiku o udelu u ukupnom izvozu i uvozu u periodu januar 2019 – januar 2026. Naglašeno je da Srbija istovremeno ima sporazume o slobodnoj trgovini sa EU, Kinom, Rusijom i Evroazijskom ekonomskom unijom, ali da EU i dalje ostaje najvažniji partner.',
    'Posebno interesovanje izazvao je deo o vojnom neutralitetu. Filipović je objasnio da Srbija ima status posmatrača u ODKB, ali da je značajno više zajedničkih vežbi sprovela sa NATO nego sa Rusijom i Kinom. Do 2020-ih glavni dobavljač vojne opreme bila je Rusija, nakon toga to postaju Kina, Francuska, Nemačka i Izrael. Srbija je prva evropska zemlja koja nabavlja visokotehnološku kinesku vojnu tehniku, što izaziva kritike Brisela i Vašingtona.',
    'Kao najozbiljnije regionalne bezbednosne pretnje, predavač je naveo separatističke snage na Kosovu i Metohiji, faktički vojni savez Zagreba, Tirane i privremenih prištinskih institucija protiv Srbije, bugarske inicijative prema Severnoj Makedoniji, turske težnje na Balkanu usmerene protiv srpskih interesa, kao i nestabilnost u Bosni i Hercegovini usmerenu protiv Republike Srpske.',
    'Nakon predavanja usledila je živa diskusija. Studenti su pitali o izgledima za članstvo Srbije u EU – Filipović je odgovorio da se punopravno članstvo ne očekuje u narednoj deceniji, uglavnom iz finansijskih razloga. Takođe je ocenio da će vojno-tehnička saradnja sa NATO biti nastavljena, da će se odnosi sa Kinom i Izraelom razvijati, a da sa Rusijom neće biti promena do normalizacije odnosa Moskve i Zapada. Na kraju je istakao da je Rusiji potrebno da razradi i objavi zvaničnu balkansku strategiju u okviru svoje spoljne politike.',
    'Ocenjujući reakciju publike, gost iz Beograda izrazio je zadovoljstvo dubokim i argumentovanim pitanjima studenata TulGU, što svedoči o ozbiljnom interesovanju za spoljnu politiku Srbije i složeno geopolitičko pozicioniranje naše zemlje.'
  ],
  
  highlight1: 'Dr Aleksa Filipović održao predavanje u Tuli o spoljnopolitičkom balansiranju Srbije između Evropske unije, Sjedinjenih Američkih Država, Rusije i Kine u uslovima savremenog multipolarnog sveta.',
  highlight2: 'Studenti Tulskog državnog univerziteta pokazali su veliko interesovanje za teme vojne neutralnosti, ekonomskih partnerstava i geopolitičkog položaja Srbije na Balkanu i u Evropi.',
}

const ruText = {
  category: 'Новости',
  title: 'Доктор Алекса Филипович выступил с лекцией в Туле: внешняя политика Сербии между четырьмя опорами',
  date: 'Опубликовано: 2 июня 2026 г.',
  lead: 'Тула, 29 мая. В пятом корпусе Тульского государственного университета (ТулГУ) состоялась встреча с доктором политических наук Алексой Филиповичем, научным сотрудником Института европейских исследований в Белграде. Он прочитал студентам лекцию на тему: «Внешняя политика Сербии в условиях многополярного мира: балансирование между ЕС, США, Россией и Китаем на фоне европейских и ближневосточных кризисов».',
  paragraphs: [
    'Филипович представил концепцию «четырёх опор» внешнеполитического курса Белграда, хотя официально такая доктрина не закреплена. По его словам, Сербия является кандидатом на вступление в Европейский союз, что остаётся её стратегической целью, поддерживает тесное партнёрство с НАТО в рамках соглашения IPAP и соглашения о свободном транзите войск, одновременно не вводит санкции против России и сохраняет прямое авиасообщение с Российской Федерацией. Особое внимание было уделено «железной дружбе» с Китаем, тогда как отношения с США остаются сложными из-за 35-процентных пошлин и санкций против Нефтяной индустрии Сербии.',
    'Студенты с большим вниманием восприняли часть выступления, посвящённую экономическим показателям. Лектор представил данные Народного банка Сербии о притоке прямых иностранных инвестиций в период с 2010 по 2025 год, а также статистику Республиканского статистического управления о доле отдельных партнёров во внешней торговле страны за период с января 2019 по январь 2026 года. Было подчёркнуто, что Сербия одновременно имеет соглашения о свободной торговле с Европейским союзом, Китаем, Россией и Евразийским экономическим союзом, однако ЕС по-прежнему остаётся её важнейшим экономическим партнёром.',
    'Особый интерес вызвал раздел лекции, посвящённый военному нейтралитету. Филипович отметил, что Сербия имеет статус наблюдателя в ОДКБ, однако провела значительно больше совместных учений с НАТО, чем с Россией и Китаем. До начала 2020-х годов основным поставщиком военной техники для Сербии являлась Россия, после чего эту роль всё чаще стали играть Китай, Франция, Германия и Израиль. Сербия стала первой европейской страной, закупившей высокотехнологичную китайскую военную технику, что вызывает критику со стороны Брюсселя и Вашингтона.',
    'В качестве наиболее серьёзных региональных угроз безопасности лектор назвал сепаратистские силы в Косово и Метохии, фактический военно-политический союз Загреба, Тираны и временных приштинских институтов, направленный против Сербии, болгарские инициативы в отношении Северной Македонии, турецкие устремления на Балканах, которые, по его мнению, противоречат сербским интересам, а также нестабильность в Боснии и Герцеговине, оказывающую давление на Республику Сербскую.',
    'После лекции состоялась оживлённая дискуссия. Студенты задавали вопросы о перспективах вступления Сербии в Европейский союз. Филипович ответил, что полноценное членство страны в ЕС в течение следующего десятилетия маловероятно, главным образом по финансовым причинам. Он также выразил мнение, что военно-техническое сотрудничество с НАТО будет продолжено, отношения с Китаем и Израилем будут развиваться, а в отношениях с Россией существенных изменений не произойдёт до нормализации отношений между Москвой и Западом. В завершение выступления он подчеркнул необходимость разработки и публикации официальной балканской стратегии России как части её внешнеполитического курса.',
    'Оценивая реакцию аудитории, гость из Белграда выразил удовлетворение глубокими и аргументированными вопросами студентов ТулГУ, которые свидетельствуют о серьёзном интересе к внешней политике Сербии и сложному геополитическому позиционированию страны.'
  ],
  
  highlight1: 'Доктор политических наук Алекса Филипович выступил в Туле с лекцией о балансировании внешней политики Сербии между Европейским союзом, США, Россией и Китаем в условиях современного многополярного мира.',
  highlight2: 'Студенты Тульского государственного университета проявили большой интерес к вопросам военного нейтралитета, экономического сотрудничества и геополитического положения Сербии на Балканах и в Европе.',
}

export default function AleksaFilipovicPredavanjeUTuliPage() {
  const images = [
  '/static/images/aleksa-1.jpeg',
  '/static/images/aleksa-2.jpeg',
  '/static/images/aleksa-3.jpeg',
  '/static/images/aleksa-4.jpeg',
  '/static/images/aleksa-5.jpeg',
]

const [currentImage, setCurrentImage] = useState(0)

const nextImage = () => {
  setCurrentImage((prev) => (prev + 1) % images.length)
}

const prevImage = () => {
  setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
}
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
  className="relative mb-8 overflow-hidden rounded-3xl border border-white/10"
>
  <img
    src={images[currentImage]}
    alt={`${content.title} ${currentImage + 1}`}
    className="h-auto w-full object-cover transition-all duration-300"
  />

  <button
    onClick={prevImage}
    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl text-white backdrop-blur hover:bg-black"
  >
    ‹
  </button>

  <button
    onClick={nextImage}
    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/70 px-4 py-2 text-2xl text-white backdrop-blur hover:bg-black"
  >
    ›
  </button>

  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`h-3 w-3 rounded-full transition ${
          currentImage === index
            ? 'bg-yellow-400'
            : 'bg-white/40'
        }`}
      />
    ))}
  </div>
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

          <CommentsSection postSlug="aleksa-filipovic-predavanje-u-tuli" />
        </motion.div>
      </article>
    </main>
  )
}