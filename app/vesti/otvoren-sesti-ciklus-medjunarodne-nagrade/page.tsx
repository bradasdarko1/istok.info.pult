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
  title: 'Otvoren šesti ciklus Međunarodne nagrade #WEARETOGETHER za humanitarne, volonterske i ekološke projekte',
  date: 'Objavljeno: 9. jun 2026.',
  lead: 'Otvoren je prijem prijava za šesti ciklus Međunarodne nagrade #WEARETOGETHER, priznanja namenjenog pojedincima, organizacijama i inicijativama koje svojim radom doprinose društvu i pomažu ljudima kojima je podrška najpotrebnija.',
  paragraphs: [
    'Nagrada okuplja humanitarne, volonterske, društvene i ekološke projekte iz različitih zemalja, sa ciljem da promoviše solidarnost, međusobnu pomoć i društvenu odgovornost.',
    'Pravo učešća imaju predstavnici nevladinih i neprofitnih organizacija, volonterski pokreti i udruženja, kao i pojedinci koji svojim angažovanjem doprinose razvoju zajednice i pružaju podršku ugroženim grupama.',
    'Kandidati mogu da prijave projekte u više kategorija, među kojima se izdvajaju „Kod milosrđa“, namenjena humanitarnim i volonterskim inicijativama, i „Održiva budućnost“, koja je usmerena na zaštitu životne sredine i razvoj ekoloških projekata.',
    'Laureate očekuju putovanje u Moskvu na svečanu ceremoniju dodele nagrada, pristup obrazovnim programima i mogućnostima za profesionalno usavršavanje, podrška u daljem razvoju projekata, kao i članstvo u međunarodnoj zajednici aktivnih i posvećenih ljudi.',
    'Prošle godine među dobitnicima priznanja našla se i učesnica omladinskih programa Ruski dom, osnivačica i direktorka izdavačke kuće Bitije, Đina Vesić iz Srbije.'
  ],
  
  highlight1: 'Prijave za šesti ciklus međunarodne nagrade #WEARETOGETHER otvorene su do 14. juna za pojedince, organizacije i volonterske inicijative iz celog sveta.',
  highlight2: 'Pobednike očekuju putovanje u Moskvu, obrazovni programi, podrška razvoju projekata i članstvo u međunarodnoj zajednici društveno odgovornih ljudi.',
}

const ruText = {
  category: 'Новости',
  title: 'Открыт приём заявок на шестой сезон Международной премии #МЫВМЕСТЕ',
  date: 'Опубликовано: 9 июня 2026 г.',
  lead: 'Начался приём заявок на участие в шестом сезоне Международной премии #МЫВМЕСТЕ, которая присуждается людям и организациям, реализующим проекты в сфере благотворительности, добровольчества, социальной поддержки и экологии.',
  paragraphs: [
    'Премия объединяет инициативы из разных стран мира и направлена на поддержку проектов, которые помогают людям, укрепляют общественную солидарность и способствуют устойчивому развитию.',
    'Участниками могут стать представители некоммерческих и неправительственных организаций, волонтёрские движения, общественные объединения, а также все, кто реализует социально значимые проекты и оказывает помощь нуждающимся.',
    'Заявки принимаются по нескольким направлениям. Среди основных категорий — «Код милосердия», предназначенная для гуманитарных и волонтёрских проектов, а также «Устойчивое будущее», ориентированная на охрану окружающей среды и развитие экологических инициатив.',
    'Победители будут приглашены в Москву на торжественную церемонию награждения, получат доступ к образовательным программам и возможностям профессионального развития, а также поддержку в реализации своих проектов. Кроме того, лауреаты станут частью международного сообщества активных и неравнодушных людей.',
    'В прошлом году одной из лауреатов премии стала участница молодёжных программ Русский дом, основатель и директор издательства Битие Джина Весич из Сербии.'
  ],
  
  highlight1: 'Приём заявок на шестой сезон Международной премии #МЫВМЕСТЕ продлится до 14 июня. Участвовать могут волонтёры, общественные организации и авторы социально значимых инициатив со всего мира.',
  highlight2: 'Победителей ждут поездка в Москву, образовательные программы, поддержка развития проектов и возможность стать частью международного сообщества активных и неравнодушных людей.',
}

export default function OtvorenSestiCkilusMedjunarodneNagradePage() {
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
            src="/static/images/medjunarodne-nagrade.jpeg"
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

  <p>
    {language === 'ru'
      ? 'Заявки подаются через официальный сайт премии: '
      : script === 'cyr'
        ? 'Пријаве се подносе путем званичног сајта: '
        : 'Prijave se podnose putem zvaničnog sajta: '}
    <a
      href="https://wearetogetherprize.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-yellow-400 underline transition hover:text-yellow-300"
    >
      wearetogetherprize.com
    </a>
  </p>
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

          <CommentsSection postSlug="otvoren-sesti-ckilus-medjunarodne-nagrade" />
        </motion.div>
      </article>
    </main>
  )
}