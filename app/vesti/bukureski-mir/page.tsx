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
  title: 'BUKUREŠKI MIR — KADA SU SUDBINU SRBIJE ODLUČIVALE VELIKE SILE',
  date: 'Objavljeno: 13. novembar 2026.',
  lead: 'Godine 1812. sudbina Prvog srpskog ustanka nije se odlučivala samo na bojnim poljima Srbije, već i za pregovaračkim stolom u Bukureštu. Dok su srpski ustanici pod vođstvom Karađorđa nastojali da sačuvaju teško izvojevanu slobodu, evropske sile pripremale su se za sukob koji će promeniti tok istorije.',
  paragraphs: [
    'Rusija, najvažniji vojni i diplomatski saveznik srpskih ustanika, nalazila se pred ogromnom opasnošću. Napoleon Bonaparta pripremao je pohod na Rusko carstvo, zbog čega je car Aleksandar I nastojao da što pre okonča rat protiv Osmanskog carstva, koji je trajao od 1806. godine.',
    'Dana 28. maja 1812. godine potpisan je Bukureški mir, kojim je završen rusko-osmanski rat. Rusija je dobila Besarabiju, ali je morala da odustane od dela svojih ranijih zahteva. Srbija nije bila neposredan učesnik pregovora, iako se jedna od najvažnijih odredaba sporazuma odnosila upravo na njenu budućnost.',
    'Osmi član Bukureškog mira predviđao je opštu amnestiju za srpske ustanike i određeni stepen unutrašnje samouprave, o čijem je uređenju Osmansko carstvo trebalo da se sporazume sa Srbima. Međutim, istovremeno je predviđeno vraćanje tvrđava pod osmansku kontrolu i ponovno prisustvo osmanskih garnizona.',
    'Za Karađorđa i srpske ustanike takvi uslovi bili su teško prihvatljivi. Posle osam godina borbe, povratak osmanske vojske u utvrđene gradove doživljavan je kao ozbiljna pretnja tek stečenoj slobodi.',
    'Samo nekoliko nedelja nakon potpisivanja mira, Napoleon je započeo invaziju na Rusiju. Ruska vojska morala je da se usredsredi na odbranu sopstvene zemlje, dok su ruske jedinice povučene iz Srbije. Ustanici su ostali bez neposredne vojne podrške svog najvažnijeg saveznika.',
    'Osmansko carstvo iskoristilo je promenjene okolnosti. Tokom 1813. godine pokrenuta je velika ofanziva na ustaničku Srbiju, koja se završila slomom Prvog srpskog ustanka i povratkom osmanske vlasti.',
    'Ipak, Bukureški mir nije predstavljao samo poraz srpskih očekivanja. Njegov istorijski značaj ogleda se u tome što je pitanje srpske samouprave postalo deo međunarodnog ugovora. Time je stvoren važan diplomatski osnov za buduću borbu Srbije za autonomiju, a kasnije i nezavisnost.',
    'Bukureški mir ostao je istorijska prekretnica koja pokazuje koliko je sudbina malih naroda često zavisila od interesa velikih sila. Za Srbiju, 1812. godina bila je bolno podsećanje da vojničke pobede nisu uvek dovoljne kada se o budućnosti naroda odlučuje za diplomatskim stolom.'
  ],
  
  highlight1: 'Bukureški mir iz 1812. godine obećao je Srbima amnestiju i unutrašnju samoupravu, ali je istovremeno predvideo povratak osmanskih garnizona u srpske tvrđave. Sudbina ustaničke Srbije rešavana je bez njenog neposrednog učešća u pregovorima.',
  highlight2: 'Napoleonov pohod na Rusiju primorao je ruskog saveznika da se okrene odbrani sopstvene zemlje. Bez neposredne ruske vojne podrške, Srbija se 1813. suočila sa velikom osmanskom ofanzivom i slomom Prvog srpskog ustanka.',
}

const ruText = {
  category: 'Новости',
  title: 'БУХАРЕСТСКИЙ МИР — КОГДА СУДЬБУ СЕРБИИ РЕШАЛИ ВЕЛИКИЕ ДЕРЖАВЫ',
  date: 'Опубликовано: 13 ноября 2026 г.',
  lead: 'В 1812 году судьба Первого сербского восстания решалась не только на полях сражений в Сербии, но и за столом переговоров в Бухаресте. Пока сербские повстанцы под руководством Карагеоргия стремились сохранить с таким трудом завоёванную свободу, европейские державы готовились к противостоянию, которому предстояло изменить ход истории.',
  paragraphs: [
    'Россия, важнейший военный и дипломатический союзник сербских повстанцев, оказалась перед лицом огромной опасности. Наполеон Бонапарт готовил вторжение в Российскую империю, поэтому император Александр I стремился как можно скорее завершить войну против Османской империи, продолжавшуюся с 1806 года.',
    '28 мая 1812 года был подписан Бухарестский мирный договор, завершивший русско-турецкую войну. Россия получила Бессарабию, однако была вынуждена отказаться от части своих прежних требований. Сербия не участвовала непосредственно в переговорах, хотя одно из важнейших положений договора касалось именно её будущего.',
    'Восьмая статья Бухарестского договора предусматривала всеобщую амнистию для сербских повстанцев и определённую степень внутреннего самоуправления, условия которого Османская империя должна была согласовать с сербами. Однако одновременно предусматривались возвращение крепостей под османский контроль и восстановление в них османских гарнизонов.',
    'Для Карагеоргия и сербских повстанцев такие условия были крайне тяжёлыми. После восьми лет борьбы возвращение османских войск в укреплённые города воспринималось как серьёзная угроза завоёванной свободе.',
    'Всего через несколько недель после заключения мира Наполеон начал вторжение в Россию. Российская армия была вынуждена сосредоточиться на защите собственной страны, а русские воинские подразделения были выведены из Сербии. Повстанцы лишились непосредственной военной поддержки своего главного союзника.',
    'Османская империя воспользовалась изменившимися обстоятельствами. В 1813 году началось крупное наступление на восставшую Сербию, завершившееся поражением Первого сербского восстания и восстановлением османской власти.',
    'Однако Бухарестский мир не был лишь поражением сербских надежд. Его историческое значение заключалось в том, что вопрос сербского самоуправления стал частью международного договора. Это создало важную дипломатическую основу для дальнейшей борьбы Сербии за автономию, а впоследствии и за независимость.',
    'Бухарестский мир стал историческим рубежом, показавшим, насколько судьбы малых народов зависели от интересов великих держав. Для Сербии 1812 год стал болезненным напоминанием о том, что военных побед не всегда достаточно, когда будущее народа определяется за столом дипломатических переговоров.'

  ],
  
  highlight1: 'Бухарестский мир 1812 года обещал сербам амнистию и внутреннее самоуправление, но одновременно предусматривал возвращение османских гарнизонов в сербские крепости. Судьба восставшей Сербии решалась без её непосредственного участия в переговорах.',
  highlight2: 'Поход Наполеона на Россию вынудил российского союзника сосредоточиться на защите собственной страны. Оставшись без непосредственной военной поддержки России, Сербия в 1813 году столкнулась с масштабным османским наступлением и поражением Первого сербского восстания.',
}

export default function BukureskiMirPage() {
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
            src="/static/images/bukureski-mir.jpg"
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

          <CommentsSection postSlug="bukureski-mir" />
        </motion.div>
      </article>
    </main>
  )
}