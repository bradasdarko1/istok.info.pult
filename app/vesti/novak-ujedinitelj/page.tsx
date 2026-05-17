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
  title: 'NOVAK UJEDINITELJ',
  date: 'Objavljeno: 17. maj 2026.',
  lead: 'Kao nevladina organizacija koja se bavi podizanjem kvaliteta života lokalnog stanovništva kroz povezivanje sa istočnim zemljama, ne možemo da se pravimo gluvi i nemi na događaje koji, uoči velikih promena, prete da duboko oštete naš narod i našu državu, kad kažemo državu mislimo na celovitu, sada, Republiku Srbiju nasleđenu od naših svetih predaka.',
  paragraphs: [
    'Ogromna podeljenost, pred-ratno stanje na ulicama i sve veći naboj, opravdanog, nezadovoljstva stvorio je atmosferu gotovo nemoguću za normalno funkcionisanje i „normalan“ život.',
    'U situaciji u kojoj se nalazimo nije lako pronaći rešenje za naše probleme i ujediniti duboko podeljeni narod u želji i borbi za bolju i lepšu Srbiju, za pravednije i empatičnije društvo, za kvalitetnije institucije i savesnije sudove.',
    'Analizirajući celu našu trenutnu situaciju uviđamo da je neophodan neko ko bi ujedinio narod i svojim ugledom i međunarodnim prijateljstvima uspeo da očuva državu, čiji je opstanak sad već doveden do krajnjih ivica.',
    'Čitajući ovo svi ste već zaključili da govorimo o našem, a najvećem svetskom sportisti i dobrotvoru, Novaku Đokoviću. Njegova uloga je ključna za opstanak naše zemlje i smatramo da bi njegov politički angažman doneo ogromne benefite našem narodu, sabrao bi svu našu rasejanu braću i sestre po čitavom svetu u jedno.',
    'Uz njegovo uključenje u rešavanje ove kritične situacije i „finalni meč“ u njegovoj karijeri za opstanak Srbije, studenti, profesori i ostali dobronamerni ljudi bi imali dobre šanse da obnove i očuvaju duboko razorenu zemlju i na taj način spasu nasleđe koje nam je u amanet ostavio Sveti Simeon (Stefan Nemanja) sa svojim naslednicima.',
    '*Šampione, nadamo se skorom susretu i tvom povratku u otadžbinu!',
    'Živela Srbija i živeo srpski narod!'
  ],
  
  highlight1: 'Duboka podeljenost i rastuće nezadovoljstvo doveli su društvo do tačke pucanja — Srbija ulazi u najopasniji period u novijoj istoriji.',
  highlight2: 'Poziv upućen Novaku Đokoviću — simbolu jedinstva i poverenja — da preuzme ključnu ulogu u „finalnom meču“ za opstanak države.',
}

const ruText = {
  category: 'Новости',
  title: 'НОВАК — ОБЪЕДИНИТЕЛЬ',
  date: 'Опубликовано: 17 мая 2026 г.',
  lead: 'Как неправительственная организация, занимающаяся повышением качества жизни местного населения через сотрудничество со странами Востока, мы не можем оставаться глухими и безмолвными к событиям, которые накануне больших перемен угрожают нанести глубокий ущерб нашему народу и нашему государству. Под государством мы подразумеваем целостную Республику Сербия, унаследованную от наших святых предков.',
  paragraphs: [
    'Огромное разделение общества, предвоенная обстановка на улицах и нарастающее, во многом оправданное, недовольство создали атмосферу, практически невозможную для нормального функционирования и «нормальной» жизни.',
    'В сложившейся ситуации нелегко найти решение наших проблем и объединить глубоко разделённый народ в стремлении к лучшей и более справедливой Сербии, к более человечному обществу, к качественным институтам и ответственным судам.',
    'Анализируя текущее положение, мы приходим к выводу, что необходим человек, способный объединить народ и благодаря своему авторитету и международным связям сохранить государство, существование которого уже поставлено на грань.',
    'Читая это, вы уже поняли, что речь идёт о нашем и величайшем спортсмене мира и благотворителе — Новаке Джоковиче. Его роль может стать ключевой для выживания нашей страны, и мы считаем, что его политическое участие принесло бы огромную пользу нашему народу, объединив всех наших соотечественников, рассеянных по всему миру.',
    'С его участием в решении этой критической ситуации и «финальном матче» его карьеры за будущее Сербии студенты, преподаватели и все доброжелательные люди получили бы шанс восстановить и сохранить глубоко разрушенную страну и тем самым спасти наследие, оставленное нам Святым Симеоном (Стефаном Неманей) и его потомками.',
    '*Чемпион, надеемся на скорую встречу и твоё возвращение на Родину!',
    'Да здравствует Сербия и сербский народ!'
  ],
  
  highlight1: 'Duboka podeljenost i rastuće nezadovoljstvo doveli su društvo do tačke pucanja — Srbija ulazi u najopasniji period u novijoj istoriji.',
  highlight2: 'Poziv upućen Novak Đoković — simbolu jedinstva i poverenja — da preuzme ključnu ulogu u „finalnom meču“ za opstanak države.',
}

export default function NovakUjediniteljPage() {
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
            src="/static/images/novak.jpeg"
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

          <CommentsSection postSlug="novak-ujedinitelj" />
        </motion.div>
      </article>
    </main>
  )
}