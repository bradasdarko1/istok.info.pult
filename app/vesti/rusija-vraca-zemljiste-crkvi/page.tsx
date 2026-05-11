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
  title: 'RUSIJA VRAĆA ZEMLJIŠTE MANASTIRA VOJLOVICA SRPSKOJ PRAVOSLAVNOJ CRKVI',
  date: 'Objavljeno: 11. maj 2026.',
  lead: 'U krugu rafinerije Pančevo potpisan je sporazum od velikog značaja za Srpsku pravoslavnu crkvu i srpsko-ruske odnose. Zemljište manastira Vojlovica, koje se godinama nalazilo u okviru kompleksa NIS-a, biće vraćeno u vlasništvo Srpske pravoslavne crkve.',
  paragraphs: [
    'Ugovor su potpisali mitropolit banatski Nikanor i generalni direktor NIS-a Kiril Tjurdenjev, dok su svečanom činu prisustvovali patrijarh srpski Porfirije, mitropolit budimljansko-nikšićki Metodije, mitropolit zvorničko-tuzlanski Fotije, mitropolit bački Irinej Bulović, kao i ambasador Ruske Federacije u Srbiji Aleksandar Bocan-Harčenko.',
    'Prema dostupnim informacijama, odluka o vraćanju zemljišta doneta je pre finalizacije prodaje NIS-a, kako bi nekadašnje vlasništvo manastira Vojlovica bilo vraćeno Srpskoj pravoslavnoj crkvi, a ne preneto na budućeg kupca kompanije.',
    'Ovaj potez mnogi vide kao snažnu simboličnu i duhovnu poruku, ali i kao još jednu potvrdu bliskih istorijskih, kulturnih i duhovnih veza srpskog i ruskog naroda.'
  ],
  
  highlight1: '„Pre finalizacije prodaje NIS-a, doneta je odluka da zemljište koje je nekada pripadalo manastiru Vojlovica bude vraćeno Srpskoj pravoslavnoj crkvi, a ne novom vlasniku.“',
  highlight2: '„Potpisivanju istorijskog sporazuma prisustvovali su patrijarh Porfirije, visoki arhijereji SPC, ruski ambasador Aleksandar Bocan-Harčenko i rukovodstvo NIS-a.“',
}

const ruText = {
  category: 'Новости',
  title: 'РОССИЯ ВОЗВРАЩАЕТ ЗЕМЛЮ МОНАСТЫРЯ ВОЙЛОВИЦА СЕРБСКОЙ ПРАВОСЛАВНОЙ ЦЕРКВИ',
  date: 'Опубликовано: 11 мая 2026 г.',
  lead: 'На территории нефтеперерабатывающего завода в Панчево было подписано соглашение, имеющее большое значение для Сербской православной церкви и сербско-российских отношений. Земля монастыря Войловица, которая долгие годы находилась в составе комплекса NIS, будет возвращена Сербской православной церкви.',
  paragraphs: [
    'Соглашение подписали митрополит Банатский Никанор и генеральный директор NIS Кирилл Тюрденев. На церемонии присутствовали Патриарх Сербский Порфирий, митрополит Будимлянско-Никшичский Мефодий, митрополит Зворницко-Тузланский Фотий, митрополит Бачский Ириней Булович, а также посол Российской Федерации в Сербии Александр Боцан-Харченко.',
    'Согласно опубликованной информации, решение о возвращении земли было принято до окончательной продажи NIS, чтобы историческая собственность монастыря Войловица была возвращена Сербской православной церкви, а не передана будущему покупателю компании.',
    'Многие рассматривают этот шаг как сильный духовный и символический жест, а также как очередное подтверждение тесных исторических, культурных и духовных связей между сербским и русским народами.'
  ],
  
  highlight1: '«До завершения продажи компании NIS было принято решение вернуть землю, ранее принадлежавшую монастырю Войловица, Сербской православной церкви, а не новому владельцу.»',
  highlight2: '«На подписании исторического соглашения присутствовали Патриарх Порфирий, архиереи СПЦ, посол России Александр Боцан-Харченко и руководство компании NIS.»',
}

export default function RusijaVracaZemljisteCrkviPage() {
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
            src="/static/images/rusija-daje-zemljiste.jpg"
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

          <CommentsSection postSlug="rusija-vraca-zemljiste-crkvi" />
        </motion.div>
      </article>
    </main>
  )
}