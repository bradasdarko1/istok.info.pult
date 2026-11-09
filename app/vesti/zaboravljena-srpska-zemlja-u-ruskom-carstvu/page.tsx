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
  title: 'ZABORAVLJENA SRPSKA ZEMLJA U RUSKOM CARSTVU — NOVA SRBIJA I SLAVENOSRBIJA',
  date: 'Objavljeno: 09. novembar 2026.',
  lead: 'Malo je poznato da su sredinom XVIII veka, na prostoru današnje Ukrajine, postojale dve oblasti koje su nosile srpsko ime — Nova Srbija i Slavenosrbija. Njihovi stanovnici bili su Srbi koji su napustili svoje domove u Habzburškoj monarhiji, tražeći sigurnost, zemlju i budućnost pod zaštitom Ruskog carstva.',
  paragraphs: [
    'Sve je počelo 1751. godine, kada je grupa srpskih graničara, predvođena oficirem Jovanom Horvatom, krenula put Rusije. Nezadovoljni promenama u austrijskom vojnom sistemu i gubitkom dotadašnjih privilegija, mnogi Srbi videli su u pravoslavnoj Rusiji priliku za novi početak.',
    'Ruska carica Jelisaveta Petrovna prihvatila je doseljenike, dodelivši im zemlju i vojničke dužnosti na južnim granicama carstva.',
    'Tako je 1752. godine nastala Nova Srbija, sa središtem u Novomirgorodu, dok je 1753. formirana Slavenosrbija, pod vođstvom Jovana Ševića i Rajka Preradovića.',
    'U ovim oblastima nastajala su vojnička naselja, a pojedina mesta ponela su imena zavičaja iz kojih su doseljenici stigli — Sombor, Subotica, Pančevo, Bečej i druga.',
    'Srpski vojnici čuvali su granice Ruskog carstva, podizali naselja i sa svojim porodicama započinjali život daleko od stare domovine.',
    'Međutim, 1764. godine obe oblasti izgubile su poseban administrativni status reformama carice Katarine Velike. Tokom narednih generacija, potomci doseljenika postepeno su se utapali u rusko i ukrajinsko stanovništvo, a srpski jezik i zaseban identitet sve više su nestajali.',
    'Ipak, ostali su tragovi u istorijskim dokumentima, prezimenima i geografskim nazivima.',
    'Nova Srbija i Slavenosrbija danas su gotovo zaboravljene, ali njihova priča svedoči o vremenu kada su Srbi, daleko od Balkana, stvarali novi dom i ostavljali svoj trag u istoriji Ruskog carstva.'
  ],
  
  highlight1: 'Malo ko danas zna da su sredinom XVIII veka, na prostoru današnje Ukrajine, postojale dve oblasti sa srpskim imenom — Nova Srbija i Slavenosrbija, koje su osnovali srpski doseljenici u Ruskom carstvu.',
  highlight2: 'Iako su Nova Srbija i Slavenosrbija izgubile poseban status već 1764. godine, njihovo nasleđe ostalo je sačuvano u istorijskim dokumentima, nazivima naselja i sećanju na Srbe koji su svoj novi dom pronašli daleko od otadžbine.',
}

const ruText = {
  category: 'Новости',
  title: 'ЗАБЫТАЯ СЕРБСКАЯ ЗЕМЛЯ В РОССИЙСКОЙ ИМПЕРИИ — НОВАЯ СЕРБИЯ И СЛАВЯНОСЕРБИЯ',
  date: 'Опубликовано: 09 ноября 2026 г.',
  lead: 'Мало кому известно, что в середине XVIII века на территории современной Украины существовали две области, носившие сербские названия, — Новая Сербия и Славяносербия. Их жителями стали сербы, покинувшие свои дома в Габсбургской монархии в поисках безопасности, земли и будущего под защитой Российской империи.',
  paragraphs: [
    'Всё началось в 1751 году, когда группа сербских пограничников во главе с офицером Иваном Хорватом отправилась в Россию. Недовольные изменениями в австрийской военной системе и утратой прежних привилегий, многие сербы увидели в православной России возможность начать новую жизнь.',
    'Российская императрица Елизавета Петровна приняла переселенцев, предоставив им земли и поручив военную службу на южных границах империи.',
    'Так в 1752 году возникла Новая Сербия с центром в Новомиргороде, а в 1753 году была образована Славяносербия под руководством Ивана Шевича и Райко Прерадовича.',
    'В этих областях создавались военные поселения, некоторые из которых получили названия родных мест переселенцев — Сомбор, Суботица, Панчево, Бечей и другие.',
    'Сербские солдаты охраняли границы Российской империи, строили поселения и вместе со своими семьями начинали новую жизнь вдали от исторической родины.',
    'Однако в 1764 году обе области утратили особый административный статус в результате реформ императрицы Екатерины Великой. В последующие поколения потомки переселенцев постепенно ассимилировались среди русского и украинского населения, а сербский язык и отдельная национальная идентичность постепенно исчезали.',
    'Тем не менее их наследие сохранилось в исторических документах, фамилиях и географических названиях.',
    'Сегодня Новая Сербия и Славяносербия почти забыты, однако их история напоминает о времени, когда сербы вдали от Балкан создавали новый дом и оставляли свой след в истории Российской империи.'

  ],
  
  highlight1: 'Мало кто сегодня знает, что в середине XVIII века на территории современной Украины существовали две области с сербскими названиями — Новая Сербия и Славяносербия, основанные сербскими переселенцами в Российской империи.',
  highlight2: 'Хотя Новая Сербия и Славяносербия утратили особый статус уже в 1764 году, их наследие сохранилось в исторических документах, названиях поселений и памяти о сербах, нашедших новый дом вдали от родины.',
}

export default function ZaboravljenaSrpskaZemljaURuskomCarstvuPage() {
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
            src="/static/images/zaboravljena-srpska-zemlja.jpg"
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

          <CommentsSection postSlug="zaboravljena-srpska-zemlja-u-ruskom-carstvu" />
        </motion.div>
      </article>
    </main>
  )
}