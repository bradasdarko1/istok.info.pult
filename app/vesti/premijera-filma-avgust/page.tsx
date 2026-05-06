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
  title: 'PREMIJERA RUSKE VOJNE DRAME „AVGUST“ U RUSKOM DOMU U BEOGRADU',
  date: 'Objavljeno: 6. maj 2026.',
  lead: 'Povodom Dana Pobede, u subotu 9. maja sa početkom u 19.00 časova u Ruskom domu u Beogradu biće održana premijerna projekcija nove ruske vojne drame „Avgust“ (2025, 16+) sa srpskim titlovima.',
  paragraphs: [
    'Glavnu ulogu u filmu tumači Sergej Bezrukov, poznat srpskoj publici po brojnim ulogama u ruskim filmovima i serijama, među kojima su „Sašina ekipa“, „Admiral“ i „Vazduh“.',
    'Novo ostvarenje ruske kinematografije snimljeno je uz podršku ruskog Fonda kino i Prvog kanala, a tokom prikazivanja u ruskim bioskopima film je pogledalo više od 2,3 miliona gledalaca. Projekcija u Beogradu predstavlja prvo prikazivanje filma srpskoj publici.',
    'Radnja filma smeštena je u avgust 1944. godine, u šumama zapadne Belorusije, na nedavno oslobođenoj teritoriji gde i dalje deluju neprijateljske diverzantske grupe. Dok sovjetske trupe napreduju ka državnoj granici, jedini koji mogu sprečiti napad iz pozadine jesu kontraobaveštajci SMERŠ-a.',
    'Film je snimljen po motivima romana Vladimira Bogomolova „Trenutak istine“, koji se smatra jednim od najznačajnijih dela o radu sovjetske kontraobaveštajne službe tokom Drugog svetskog rata. Roman je zasnovan na istinitim događajima i dokumentima iz tog perioda.',
    '„Trenutak istine“ u kontraobaveštajnim operacijama označava trenutak kada se od zarobljenog agenta dobijaju ključne informacije koje omogućavaju otkrivanje čitave neprijateljske mreže.',
    'Reditelji filma su Nikita Visocki i Ilja Lebedev, dok produkciju potpisuju Konstantin Ernst i Anatolij Maksimov.',
    'Pored Sergeja Bezrukova, u filmu igraju i Nikita Kologrivi, Pavel Tabakov, a u jednoj od uloga pojavljuje se i srpska glumica Tina Stojiljković.',
    'Projekcija će biti održana na ruskom jeziku sa srpskim titlovima.'
  ],
  
  highlight1: 'Nova ruska ratna drama „Avgust“ biće premijerno prikazana srpskoj publici 9. maja u Ruskom domu, uz srpske titlove.',
  highlight2: 'Film je snimljen po motivima kultnog romana Vladimira Bogomolova „Trenutak istine“, zasnovanog na stvarnim događajima iz Drugog svetskog rata.',
}

const ruText = {
  category: 'Новости',
  title: 'ПРЕМЬЕРА ВОЕННОЙ ДРАМЫ «АВГУСТ» В РУССКОМ ДОМЕ В БЕЛГРАДЕ',
  date: 'Опубликовано: 6 мая 2026 г.',
  lead: 'В честь Дня Победы в субботу, 9 мая, в 19:00 в Русском доме в Белграде состоится премьерный показ новой российской военной драмы «Август» (2025, 16+) с сербскими субтитрами.',
  paragraphs: [
    'Главную роль в фильме исполнил Сергей Безруков, хорошо известный сербской публике по фильмам и сериалам «Бригада», «Адмирал» и «Воздух».',
    'Новая картина российской кинематографии создана при поддержке Фонда кино и Первого канала. Во время проката в российских кинотеатрах фильм посмотрели более 2,3 миллиона зрителей. Показ в Белграде станет первой премьерой фильма для широкой сербской аудитории.',
    'Действие фильма разворачивается в августе 1944 года в лесах Западной Белоруссии, на недавно освобождённой территории, где продолжают действовать вражеские диверсионные группы. Пока советские войска продвигаются к государственной границе, предотвратить удар из тыла могут только сотрудники контрразведки СМЕРШ.',
    'Фильм снят по мотивам романа Владимира Богомолова «Момент истины», который считается одним из самых известных произведений о деятельности советской контрразведки во время Второй мировой войны. В основе книги лежат реальные события и архивные документы того периода.',
    '«Момент истины» в контрразведывательных операциях — это момент, когда от захваченного агента получают информацию, позволяющую раскрыть всю вражескую сеть.',
    'Режиссёрами фильма выступили Никита Высоцкий и Илья Лебедев, продюсерами — Константин Эрнст и Анатолий Максимов.',
    'Помимо Сергея Безрукова, в фильме сыграли Никита Кологривый, Павел Табаков, а одну из ролей исполнила сербская актриса Тина Стоилькович.',
    'Показ фильма состоится на русском языке с сербскими субтитрами.'
  ],
  
  highlight1: 'Новая российская военная драма «Август» будет впервые показана сербской публике 9 мая в Русском доме с сербскими субтитрами.',
  highlight2: 'Фильм снят по мотивам культового романа Владимира Богомолова «Момент истины», основанного на реальных событиях Второй мировой войны.',
}

export default function PremijeraFilmaAvgustPage() {
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
            src="/static/images/avgust.jpg"
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

          <CommentsSection postSlug="premijera-filma-avgust" />
        </motion.div>
      </article>
    </main>
  )
}