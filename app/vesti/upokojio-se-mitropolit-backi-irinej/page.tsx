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
  title: 'UPOKOJIO SE MITROPOLIT BAČKI IRINEJ — SRPSKA PRAVOSLAVNA CRKVA OSTALA BEZ ISTAKNUTOG ARHIJEREJA',
  date: 'Objavljeno: 24. novembar 2026.',
  lead: 'Njegovo Visokopreosveštenstvo Arhiepiskop novosadski i Mitropolit bački gospodin Irinej (Bulović) upokojio se u Gospodu danas, 24. novembra 2026. godine, u 79. godini života, na praznik Svetog kralja Stefana Dečanskog.',
  paragraphs: [
    'Kako je saopštila Eparhija bačka, mitropolit Irinej upokojio se u jutarnjim časovima na Institutu za onkologiju Vojvodine u Sremskoj Kamenici.',
    'Njegov odlazak predstavlja veliki gubitak za Srpsku pravoslavnu crkvu, verni narod Eparhije bačke i celokupni pravoslavni svet.',
    'Mitropolit Irinej, svetovnog imena Mirko Bulović, rođen je 11. februara 1947. godine u Stanišiću kod Sombora. Bogoslovski fakultet završio je u Beogradu 1969. godine, a monaški postrig primio je od svog duhovnog oca, Svetog Justina Ćelijskog. U svešteničke činove rukopoložio ga je tadašnji episkop raško-prizrenski Pavle, potonji patrijarh srpski.',
    'Doktorirao je 1980. godine na Bogoslovskom fakultetu Univerziteta u Atini. Kao dugogodišnji profesor i dekan Pravoslavnog bogoslovskog fakulteta u Beogradu, učestvovao je u obrazovanju brojnih generacija sveštenika i bogoslova.',
    'Na čelu Eparhije bačke nalazio se od 1990. godine, dok je 2024. godine uzdignut u dostojanstvo arhiepiskopa novosadskog i mitropolita bačkog.',
    'Tokom više od tri i po decenije arhijerejske službe ostavio je dubok trag u duhovnom, bogoslovskom i crkvenom životu srpskog naroda. Svoj život posvetio je služenju Bogu, Crkvi, očuvanju pravoslavne vere i obrazovanju budućih naraštaja.',
    'Eparhija bačka saopštila je da će danas u 12 časova u svim njenim hramovima biti služen pomen povodom upokojenja mitropolita Irineja. O vremenu i mestu sahrane javnost će biti naknadno obaveštena.',
    'Redakcija ISTOK INFO PULT-a izražava duboko saučešće Srpskoj pravoslavnoj crkvi, sveštenstvu, monaštvu i vernom narodu Eparhije bačke.',
    'Neka Gospod upokoji dušu novoprestavljenog mitropolita Irineja u Carstvu nebeskom, tamo gde nema bola, tuge ni uzdisanja, nego gde je život beskonačni.',
    'Večan mu spomen!'
  ],
  
  highlight1: 'Mitropolit bački Irinej upokojio se na praznik Svetog kralja Stefana Dečanskog, nakon više od tri i po decenije službe na čelu Eparhije bačke.',
  highlight2: 'Učenik Svetog Justina Ćelijskog, istaknuti bogoslov i arhijerej, mitropolit Irinej ostavio je dubok trag u duhovnom i crkvenom životu srpskog naroda.',
}

const ruText = {
  category: 'Новости',
  title: 'ПОЧИЛ О ГОСПОДЕ МИТРОПОЛИТ БАЧСКИЙ ИРИНЕЙ — СЕРБСКАЯ ПРАВОСЛАВНАЯ ЦЕРКОВЬ ПОТЕРЯЛА ВЫДАЮЩЕГОСЯ АРХИПАСТЫРЯ',
  date: 'Опубликовано: 24 ноября 2026 г.',
  lead: 'Сегодня, 24 ноября 2026 года, в день памяти святого благоверного короля Стефана Дечанского, на 80-м году жизни почил о Господе Его Высокопреосвященство Архиепископ Новисадский и Митрополит Бачский Ириней (Булович).',
  paragraphs: [
    'Как сообщила Бачская епархия, митрополит Ириней скончался в утренние часы в Институте онкологии Воеводины в Сремской Каменице.',
    'Его кончина стала большой утратой для Сербской православной церкви, верующих Бачской епархии и всего православного мира.',
    'Митрополит Ириней, в миру Мирко Булович, родился 11 февраля 1947 года в Станишиче близ Сомбора. В 1969 году окончил Богословский факультет в Белграде и принял монашеский постриг от своего духовного отца, преподобного Иустина Челийского. В священные саны его рукоположил тогдашний епископ Рашско-Призренский Павел, впоследствии Патриарх Сербский.',
    'В 1980 году защитил докторскую диссертацию на Богословском факультете Афинского университета. На протяжении многих лет был профессором и деканом Православного богословского факультета в Белграде, участвуя в воспитании целых поколений священнослужителей и богословов.',
    'С 1990 года возглавлял Бачскую епархию, а в 2024 году был возведён в достоинство Архиепископа Новисадского и Митрополита Бачского.',
    'За более чем три с половиной десятилетия архипастырского служения владыка Ириней оставил глубокий след в духовной, богословской и церковной жизни сербского народа. Он посвятил свою жизнь служению Богу и Церкви, сохранению православной веры и духовному просвещению будущих поколений.',
    'Бачская епархия сообщила, что сегодня в 12 часов во всех её храмах состоятся заупокойные богослужения по почившему митрополиту Иринею. О времени и месте погребения будет сообщено дополнительно.',
    'Редакция «ИСТОК ИНФО ПУЛТ» выражает глубокие соболезнования Сербской православной церкви, духовенству, монашеству и верующим Бачской епархии.',
    'Да упокоит Господь душу новопреставленного митрополита Иринея в Царствии Небесном, где нет ни болезни, ни печали, ни воздыхания, но жизнь бесконечная.',
    'Вечная память!'

  ],
  
  highlight1: 'Митрополит Бачский Ириней почил о Господе в день памяти святого короля Стефана Дечанского, после более чем трёх с половиной десятилетий архипастырского служения во главе Бачской епархии.',
  highlight2: 'Духовный ученик преподобного Иустина Челийского и выдающийся православный богослов, митрополит Ириней оставил неизгладимый след в духовной, богословской и церковной жизни сербского народа.',
}

export default function UpokojioSeMitropolitBackiIrinejPage() {
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
            src="/static/images/mitropolit-backi-irinej.jpg"
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

          <CommentsSection postSlug="upokojio-se-mitropolit-backi-irinej" />
        </motion.div>
      </article>
    </main>
  )
}