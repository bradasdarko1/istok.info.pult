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
  title: 'Šestorica mornara koji su zauvek ostali u Novom Sadu',
  date: 'Objavljeno: 25. jul 2026.',
  lead: 'Dok danas prolazimo pored nekadašnje kasarne „Aleksandar Berić“, retko ko zna da se iza njenih zidova nalazi malo vojno groblje. Na njemu počivaju šestorica sovjetskih mornara – četvorica čija su imena sačuvana i dvojica čiji identitet ni danas nije poznat',
  paragraphs: [
    'Njihova priča počinje u jesen 1944. godine, kada je Dunav bio jedna od najopasnijih linija fronta u Evropi. Povlačeći se, nemačke snage ostavljale su za sobom minska polja, potopljene brodove i prepreke koje su pretvarale svaki prolazak rekom u borbu za život.',
    'U tim danima sovjetska Rečna flotila, zajedno sa jedinicama Jugoslovenske armije, učestvovala je u oslobađanju Novog Sada i čišćenju Dunava kako bi reka ponovo postala prohodna. Posao je bio izuzetno opasan – jedna mina ili jedan pogrešan potez bili su dovoljni da čitava posada nestane u vodi.',
    'Mnogi mornari dočekali su kraj rata i vratili se svojim porodicama.',
    'Njih šestorica nisu.',
    'Najstariji među njima bio je Pavel Ivanovič Denisov, kapetan III ranga, rođen 1918. godine. Iskusni mornarički oficir poginuo je 1945. godine, kada je rat u Evropi već ulazio u svoje poslednje dane.',
    'Pored njega počiva Aleksej Stoljarev, takođe rođen 1918. godine. Život je izgubio još tokom 1944, u vreme kada su borbe na Dunavu bile među najžešćima.',
    'Tu je i Grigorij Ivanovič Pečerski, rođen 1926. godine. Imao je svega devetnaest godina kada je poginuo – samo godinu dana stariji od mnogih današnjih srednjoškolaca.',
    'Pored njega leži Vjačeslav Žuk, njegov vršnjak, takođe rođen 1926. godine. Ni on nije dočekao kraj svoje mladosti.',
    'A onda dolazimo do poslednje dvojice.',
    'Na njihovim obeležjima ne stoje imena. Nema prezimena, nema godine rođenja, nema podataka koji bi otkrili ko su bili. Ostali su upamćeni samo kao mornari koji su dali život na Dunavu.',
    'Možda su imali dvadeset godina.',
    'Možda trideset.',
    'Možda ih je neko čekao kod kuće.',
    'To danas više niko ne zna.',
    'Više od osam decenija kasnije, šestorica mornara i dalje počivaju u Novom Sadu. Četvorica sa svojim imenima, a dvojica kao nepoznati junaci čiji identitet istorija nije uspela da sačuva.',
    'Možda upravo zato njihova priča zaslužuje da se ponovo ispriča.',
    'Jer dok god neko izgovara njihova imena – Pavel Ivanovič Denisov, Aleksej Stoljarev, Grigorij Ivanovič Pečerski i Vjačeslav Žuk – i dok se pitamo ko su bila ona dvojica čija su imena zauvek izgubljena, oni neće biti zaboravljeni.'
  ],
  
  highlight1: 'ŠESTORICA MORNARA. JEDNO GROBLJE. JEDNA ZABORAVLJENA PRIČA',
  highlight2: 'ČETVORICA IMAJU IME. DVOJICA SU OSTALA NEPOZNATA',
}

const ruText = {
  category: 'Новости',
  title: 'Шесть моряков, навсегда оставшихся в Нови-Саде',
  date: 'Опубликовано: 25 июль 2026 г.',
  lead: 'Сегодня, проходя мимо бывшей казармы «Александар Берич», немногие знают, что за её стенами находится небольшое военное кладбище. Здесь покоятся шестеро советских моряков — четверо, чьи имена удалось сохранить, и двое, чьи личности остаются неизвестными и по сей день.',
  paragraphs: [
    'Их история начинается осенью 1944 года, когда Дунай был одной из самых опасных линий фронта в Европе. Отступая, немецкие войска оставляли после себя минные поля, затопленные суда и многочисленные препятствия, превращавшие каждое плавание по реке в смертельно опасную задачу.',
    'В те дни Советская Дунайская военная флотилия вместе с подразделениями Югославской армии участвовала в освобождении Нови-Сада и разминировании Дуная, чтобы вновь сделать реку судоходной. Эта работа была чрезвычайно опасной — одной мины или одной ошибки было достаточно, чтобы весь экипаж исчез под водой.',
    'Многие моряки встретили конец войны и вернулись домой к своим семьям.',
    'Этим шестерым этого сделать не удалось.',
    'Самым старшим среди них был Павел Иванович Денисов, капитан 3-го ранга, родившийся в 1918 году. Опытный морской офицер погиб в 1945 году, когда война в Европе уже приближалась к своему завершению.',
    'Рядом с ним покоится Алексей Столярев, также родившийся в 1918 году. Он погиб ещё в 1944 году, в период самых ожесточённых боёв на Дунае.',
    'Здесь же похоронен Григорий Иванович Печерский, родившийся в 1926 году. Ему было всего девятнадцать лет, когда он погиб — лишь на год старше многих современных школьников.',
    'Рядом лежит Вячеслав Жук, его ровесник, также родившийся в 1926 году. Он тоже не успел прожить свою молодость.',
    'А затем мы подходим к двум последним могилам.',
    'На их памятниках нет имён. Нет фамилий, нет года рождения, нет никаких сведений, которые могли бы рассказать, кем они были. В памяти они остались лишь как моряки, отдавшие свою жизнь на Дунае.',
    'Возможно, им было двадцать лет.',
    'Возможно, тридцать.',
    'Возможно, дома их кто-то ждал.',
    'Сегодня этого уже никто не знает.',
    'Спустя более восьмидесяти лет шестеро моряков по-прежнему покоятся в Нови-Саде. Четверо — со своими именами, двое — как неизвестные герои, чьи личности история так и не смогла сохранить.',
    'Именно поэтому их история заслуживает того, чтобы её рассказывали снова.',
    'Пока звучат имена Павла Ивановича Денисова, Алексея Столярева, Григория Ивановича Печерского и Вячеслава Жука, и пока мы задаёмся вопросом, кем были те двое, чьи имена навсегда потеряны, они не будут забыты.'
  ],
  
  highlight1: 'ШЕСТЬ МОРЯКОВ. ОДНО КЛАДБИЩЕ. ОДНА ЗАБЫТАЯ ИСТОРИЯ',
  highlight2: 'ЧЕТВЕРО ИМЕЮТ ИМЕНА. ДВОЕ ТАК И ОСТАЛИСЬ НЕИЗВЕСТНЫМИ',
}

export default function SestoricaMornaraKojiSuZauvekOstaliUNovomSaduPage() {
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
            src="/static/images/sestorica-mornara.jpg"
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

          <CommentsSection postSlug="sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu" />
        </motion.div>
      </article>
    </main>
  )
}