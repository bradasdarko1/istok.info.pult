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
  title: 'OD SAN STEFANA DO BERLINA — RUSIJA, SRBIJA I GRANICE BALKANA',
  date: 'Objavljeno: 18. novembar 2026.',
  lead: 'Kraj XIX veka doneo je velike promene na Balkanu. Slabljenje Osmanskog carstva, oslobodilačke težnje balkanskih naroda i sukob interesa evropskih sila doveli su do Rusko-osmanskog rata 1877–1878. godine. Njegov ishod promenio je političku kartu Balkana, ali i pokazao da ratne pobede nisu uvek značile i diplomatske dobitke.',
  paragraphs: [
    'Rusija je u aprilu 1877. godine objavila rat Osmanskom carstvu, nastojeći da ojača svoj položaj na Balkanu i podrži oslobađanje hrišćanskih naroda od osmanske vlasti. Srbija, koja je prethodno ratovala protiv Osmanlija 1876. godine, ponovo je stupila u rat u decembru 1877. Srpska vojska oslobodila je Niš, Pirot, Vranje i druge krajeve južne Srbije.',
    'Sanstefanski mir, potpisan 3. marta 1878. godine između Rusije i Osmanskog carstva, doneo je neočekivano razočaranje Srbiji. Sporazum je predviđao stvaranje velike autonomne Bugarske, koja bi obuhvatala i pojedine teritorije koje je srpska vojska osvojila, uključujući Pirot i Vranje.',
    'Iako je Rusija bila važan saveznik Srbije, Sanstefanski mir pokazao je da se interesi dve države nisu uvek podudarali. Ruska diplomatija nastojala je da preko snažne Bugarske učvrsti svoj uticaj na Balkanu, dok je Srbija težila međunarodnom priznanju nezavisnosti i očuvanju teritorija oslobođenih u ratu.',
    'Takvo rešenje izazvalo je protivljenje Velike Britanije i Austrougarske, koje su strahovale od prevelikog ruskog uticaja. Zbog toga je od 13. juna do 13. jula 1878. godine održan Berlinski kongres, pod predsedavanjem nemačkog kancelara Ota fon Bizmarka.',
    'Berlinski kongres doneo je Srbiji međunarodno priznatu nezavisnost i teritorijalno proširenje. Srbiji su pripali Niš, Pirot, Vranje i Toplica, dok je prvobitni projekat velike Bugarske značajno smanjen. Istovremeno, Austrougarskoj je omogućeno da okupira i upravlja Bosnom i Hercegovinom, koja je formalno ostala pod osmanskim suverenitetom.',
    'Za Srbiju je 1878. godina predstavljala istorijsku prekretnicu — posle vekova osmanske vlasti i decenija borbe, stekla je punu međunarodno priznatu državnu nezavisnost. Ipak, odluke velikih sila ostavile su brojna nacionalna i teritorijalna pitanja nerešenim.',
    'Put od San Stefana do Berlina pokazao je da su sudbinu Balkana oblikovale ne samo borbe njegovih naroda za slobodu, već i strateški interesi velikih sila. Srbija i Rusija ostale su istorijski povezane, ali je 1878. godina jasno pokazala da savezništvo ne znači uvek i podudarnost državnih interesa.'
  ],
  
  highlight1: 'Sanstefanski mir iz 1878. godine pokazao je da se interesi Srbije i Rusije nisu uvek podudarali. Dok je Srbija očekivala teritorijalno proširenje nakon ratnih pobeda, ruska diplomatija dala je prednost stvaranju velike Bugarske.',
  highlight2: 'Na Berlinskom kongresu 1878. godine Srbija je dobila međunarodno priznatu nezavisnost i teritorije Niša, Pirota, Vranja i Toplice. Ipak, granice Balkana nisu određivale samo pobede na bojištu, već i interesi evropskih velikih sila.',
}

const ruText = {
  category: 'Новости',
  title: 'ОТ САН-СТЕФАНО ДО БЕРЛИНА — РОССИЯ, СЕРБИЯ И ГРАНИЦЫ БАЛКАН',
  date: 'Опубликовано: 18 ноября 2026 г.',
  lead: 'Конец XIX века принёс Балканам масштабные политические перемены. Ослабление Османской империи, стремление балканских народов к освобождению и столкновение интересов европейских держав привели к Русско-турецкой войне 1877–1878 годов. Её итоги изменили политическую карту региона, но одновременно показали, что военные победы не всегда гарантируют дипломатические успехи.',
  paragraphs: [
    'В апреле 1877 года Россия объявила войну Османской империи, стремясь укрепить свои позиции на Балканах и поддержать освобождение христианских народов от османского владычества. Сербия, уже воевавшая против османов в 1876 году, вновь вступила в войну в декабре 1877 года. Сербская армия освободила Ниш, Пирот, Вране и другие районы южной Сербии.',
    'Сан-Стефанский мирный договор, подписанный 3 марта 1878 года между Россией и Османской империей, стал неожиданным разочарованием для Сербии. Договор предусматривал создание крупного автономного Болгарского княжества, в состав которого должны были войти и некоторые территории, занятые сербской армией, включая Пирот и Вране.',
    'Несмотря на то что Россия была важным союзником Сербии, Сан-Стефанский договор продемонстрировал, что интересы двух государств не всегда совпадали. Российская дипломатия стремилась укрепить своё влияние на Балканах посредством создания сильной Болгарии, тогда как Сербия добивалась международного признания независимости и сохранения освобождённых территорий.',
    'Подобное решение вызвало противодействие Великобритании и Австро-Венгрии, опасавшихся чрезмерного усиления российского влияния. В результате с 13 июня по 13 июля 1878 года состоялся Берлинский конгресс под председательством германского канцлера Отто фон Бисмарка.',
    'Берлинский конгресс принёс Сербии международное признание независимости и территориальное расширение. В состав Сербии вошли Ниш, Пирот, Вране и Топлица, а первоначальный проект Великой Болгарии был существенно сокращён. Одновременно Австро-Венгрия получила право оккупировать Боснию и Герцеговину и управлять ею, при формальном сохранении османского суверенитета.',
    'Для Сербии 1878 год стал историческим рубежом: после столетий османского господства и десятилетий борьбы страна обрела полную международно признанную государственную независимость. Однако решения великих держав оставили множество национальных и территориальных вопросов нерешёнными.',
    'Путь от Сан-Стефано до Берлина показал, что судьба Балкан определялась не только борьбой местных народов за свободу, но и стратегическими интересами великих держав. Сербия и Россия сохранили исторические связи, однако события 1878 года наглядно продемонстрировали, что союзнические отношения не всегда означают совпадение государственных интересов.'

  ],
  
  highlight1: 'Сан-Стефанский мир 1878 года показал, что интересы Сербии и России не всегда совпадали. В то время как Сербия рассчитывала на территориальное расширение после военных побед, российская дипломатия отдала предпочтение созданию Великой Болгарии.',
  highlight2: 'На Берлинском конгрессе 1878 года Сербия получила международное признание независимости и территории Ниша, Пирота, Вране и Топлицы. Однако границы Балкан определялись не только победами на полях сражений, но и интересами великих европейских держав.',
}

export default function OdSanStefanaDoBerlinaPage() {
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
            src="/static/images/od-san-stefana-do-berlina.jpg"
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

          <CommentsSection postSlug="od-san-stefana-do-berlina" />
        </motion.div>
      </article>
    </main>
  )
}