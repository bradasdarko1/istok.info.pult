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
  title: 'Dan kada se srpska zastava zavijorila iznad Bele kuće',
  date: 'Objavljeno: 30. jul 2026.',
  lead: 'Istorija Srbije pamti mnoge datume koji svedoče o velikim stradanjima, ali i o velikom međunarodnom poštovanju koje je srpski narod stekao svojom borbom za slobodu.',
  paragraphs: [
    'Jedan od njih jeste 28. jul 1918. godine, kada su Sjedinjene Američke Države obeležile „Srpski dan“, a srpska zastava prvi put zavijorila iznad Bele kuće.',
    'Datum nije izabran slučajno. Tog dana navršile su se četiri godine od kada je Austrougarska objavila rat Kraljevini Srbiji, čime je započeo Prvi svetski rat. U znak sećanja na srpsku borbu i ogromne žrtve koje je Srbija podnela tokom rata, predsednik Sjedinjenih Američkih Država Vudro Vilson uputio je posebnu poruku američkom narodu.',
    'Njegovo obraćanje čitano je u crkvama širom Amerike i objavljeno u gotovo svim značajnim američkim dnevnim listovima. U njemu je istaknuto da je srpski narod podneo nezapamćene žrtve u borbi za slobodu, dok je državni sekretar Robert Lansing poručio da je „hrabri srpski narod žrtvovao sve za svoju slobodu i nezavisnost“.',
    'Kao simbol tog priznanja, srpska trobojka podignuta je na Beloj kući, ali i na brojnim zgradama državnih institucija u Vašingtonu. Time je Srbiji ukazana izuzetna čast kakvu je u to vreme dobio veoma mali broj savezničkih država.',
    'Ideju o obeležavanju „Srpskog dana“ pokrenuo je tadašnji srpski poslanik u Sjedinjenim Američkim Državama Ljubomir Mihailović, koji je početkom juna 1918. godine uputio predlog američkom Stejt departmentu. U svom pismu istakao je da 28. jul predstavlja datum kada su Centralne sile objavile rat civilizovanom svetu, a ne samo Srbiji.',
    'Predlog je naišao na veliko razumevanje predsednika Vudroa Vilsona, a značajnu ulogu u jačanju američko-srpskih odnosa imao je i veliki srpski naučnik Mihajlo Pupin, tada jedan od najuglednijih profesora Univerziteta Kolumbija i lični prijatelj američkog predsednika.',
    'Podrška Srbiji nije se ogledala samo u simbolici. Od početka Prvog svetskog rata građani Sjedinjenih Američkih Država, humanitarne organizacije i američka vlada organizovali su značajnu pomoć Srbiji. U našu zemlju stizali su hrana, lekovi, seme za setvu, poljoprivredni alat, medicinski materijal i pomoć za izbeglice.',
    'Posebno mesto zauzimaju američki lekari i medicinske sestre koji su, u okviru misija Crvenog krsta, dolazili u Srbiju kako bi lečili ranjenike i obolele tokom epidemije tifusa. Već u jesen 1914. godine u Srbiju je stigla savremeno opremljena američka poljska bolnica pod rukovodstvom dr Edvarda Greja, čiji su članovi pružili nemerljiv doprinos spasavanju hiljada života.',
    'Danas, više od jednog veka kasnije, 28. jul 1918. godine ostaje jedan od najsvetlijih trenutaka međunarodnog ugleda Srbije, podsećajući da su hrabrost, žrtva i istrajnost srpskog naroda bili prepoznati i poštovani širom sveta.'
  ],
  
  highlight1: 'Na četvrtu godišnjicu početka Prvog svetskog rata, 28. jula 1918. godine, predsednik SAD Vudro Vilson proglasio je „Srpski dan“, odajući priznanje Srbiji za ogromne žrtve i doprinos savezničkoj pobedi',
  highlight2: 'Tog dana srpska trobojka prvi put je podignuta iznad Bele kuće i na državnim institucijama u Vašingtonu, što predstavlja jedno od najvećih međunarodnih priznanja koje je Srbija dobila tokom Velikog rata.',
}

const ruText = {
  category: 'Новости',
  title: 'День, когда сербский флаг поднялся над Белым домом',
  date: 'Опубликовано: 30 июль 2026 г.',
  lead: 'История Сербии хранит немало дат, напоминающих не только о тяжёлых испытаниях, но и о глубоком уважении, которое сербский народ заслужил своей борьбой за свободу.',
  paragraphs: [
    'Одной из таких дат является 28 июля 1918 года, когда в Соединённых Штатах Америки был официально отмечен «Сербский день», а сербский флаг впервые поднялся над Белым домом.',
    'Дата была выбрана не случайно. Именно в этот день исполнилось четыре года с момента объявления Австро-Венгрией войны Королевству Сербия — события, положившего начало Первой мировой войне. В знак признания огромных жертв, понесённых Сербией, и её вклада в победу союзников президент США Вудро Вильсон обратился с особым посланием к американскому народу.',
    'Это обращение зачитывалось в церквях по всей стране и публиковалось в ведущих американских газетах. В нём подчёркивалось, что сербский народ понёс исключительные жертвы в борьбе за свободу, а государственный секретарь Роберт Лансинг заявил, что «храбрый сербский народ пожертвовал всем ради своей свободы и независимости».',
    'В знак этого признания сербский триколор был поднят над Белым домом, а также над многими государственными учреждениями Вашингтона. Это стало одной из самых высоких международных почестей, оказанных Сербии в годы Великой войны.',
    'Инициатором проведения «Сербского дня» стал сербский дипломат Любомир Михайлович, который летом 1918 года обратился с соответствующим предложением в Государственный департамент США. В своём письме он подчеркнул, что 28 июля стал днём, когда Центральные державы объявили войну всему цивилизованному миру, а не только Сербии.',
    'Предложение получило поддержку президента Вильсона. Значительную роль в укреплении отношений между Сербией и Соединёнными Штатами сыграл и великий сербский учёный Михаило Пупин, профессор Колумбийского университета и близкий знакомый американского президента.',
    'Поддержка Сербии выражалась не только в символических жестах. С начала Первой мировой войны американское правительство, благотворительные организации и граждане США направляли в Сербию продовольствие, медикаменты, сельскохозяйственные материалы и гуманитарную помощь для населения и беженцев.',
    'Особое место занимают американские врачи и медицинские сёстры, прибывшие в Сербию в составе миссий Красного Креста. Уже осенью 1914 года начала работу современно оснащённая американская полевой госпиталь под руководством доктора Эдварда Грея, сотрудники которой спасли тысячи человеческих жизней во время эпидемии тифа и боевых действий.',
    'Спустя более века 28 июля 1918 года остаётся символом международного признания Сербии, её мужества, стойкости и огромной жертвы, принесённой во имя свободы.'
  ],
  
  highlight1: '28 июля 1918 года президент США Вудро Вильсон объявил «Сербский день», отдав дань уважения огромным жертвам Сербии и её вкладу в победу союзников в Первой мировой войне.',
  highlight2: 'В этот день сербский триколор впервые был поднят над Белым домом и государственными учреждениями Вашингтона — это стало одним из самых значимых международных признаний Сербии во время Великой войны.',
}

export default function DanKadaSeSrpskaZastavaZavijorilaIznadBeleKucePage() {
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
            src="/static/images/srpska-zastava.jpg"
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

          <CommentsSection postSlug="dan-kada-se-srpska-zastava-zavijorila-iznad-bele-kuce" />
        </motion.div>
      </article>
    </main>
  )
}