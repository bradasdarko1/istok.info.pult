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
  title: 'Vojvodina gostuje Radniku u Surdulici: „Pravi test je pred nama“',
  date: 'Objavljeno: 27. novembar 2026.',
  imageAlt: 'AI ilustracija: fudbalski stadion u Surdulici pred utakmicu',
  lead: 'Fudbaleri Vojvodine u subotu, 28. novembra, od 14 časova gostuju Radniku na Gradskom stadionu u Surdulici, u 17. kolu Superlige Srbije. Novosađani su drugi na tabeli sa 35 bodova, a domaćin je sedmi sa 23 boda.',
  paragraphs: [
    'Vojvodina je iz 16 utakmica ostvarila 11 pobeda, dva nerešena rezultata i tri poraza, uz gol-razliku 35:14. Isti broj bodova ima i Železničar, dok je Crvena zvezda na vrhu sa 46.',
    '„Stara dama“ u Surdulicu dolazi posle pobede nad Mačvom u Šapcu rezultatom 5:1 u prethodnom kolu.',
    'Radnik je na svom terenu ove sezone neporažen: od osam utakmica u Surdulici dobio je pet, a tri su završene nerešeno, uključujući 0:0 protiv Crvene zvezde i 4:4 protiv Partizana. U prvom međusobnom duelu ove sezone, na Karađorđu, Vojvodina je slavila 2:1.',
    'Pomoćni trener Vojvodine Slobodan Medojević, za klupski sajt: „Radnik je veoma dobra ekipa. Prošle godine su bili hit u prvenstvu, a i ove sezone pokazuju da imaju kvalitet i da napreduju kao klub. Dobro su vođeni od strane kolege Rendulića i veoma su organizovani. Niko ih nije pobedio na njihovom terenu, domaćinska su ekipa, tako da je pred nama pravi test.“',
    '„Moramo da odgovorimo na njihovu agresivnost. Naš pristup je maksimalan, imamo veliko poštovanje prema rivalu, ali gledamo sebe i želimo da nametnemo našu igru“, rekao je Medojević. Dodao je da Vojvodinu do kraja kalendarske godine čekaju još dve utakmice.',
  ],
  highlight1: 'Radnik – Vojvodina, subota 28. novembar, 14 časova, Gradski stadion u Surdulici',
  highlight2: '„Niko ih nije pobedio na njihovom terenu … pred nama je pravi test.“ — Slobodan Medojević',
}

const ruText = {
  category: 'Новости',
  title: '«Войводина» в гостях у «Радника» в Сурдулице: «Нас ждёт настоящее испытание»',
  date: 'Опубликовано: 27 ноября 2026 г.',
  imageAlt: 'ИИ-иллюстрация: футбольный стадион в Сурдулице перед матчем',
  lead: 'Футболисты «Войводины» в субботу, 28 ноября, в 14:00 сыграют в гостях с «Радником» на Городском стадионе в Сурдулице в 17-м туре Суперлиги Сербии. Новосадцы занимают второе место с 35 очками, хозяева — седьмые с 23 очками.',
  paragraphs: [
    'В 16 матчах «Войводина» одержала 11 побед, дважды сыграла вничью и потерпела три поражения при разнице мячей 35:14. Столько же очков у «Железничара», а лидирует «Црвена звезда» с 46 очками.',
    '«Старая дама» приезжает в Сурдулицу после победы над «Мачвой» в Шабаце со счётом 5:1 в предыдущем туре.',
    '«Радник» в этом сезоне не проигрывает на своём поле: из восьми матчей в Сурдулице он выиграл пять, а три завершились вничью, в том числе 0:0 с «Црвеной звездой» и 4:4 с «Партизаном». В первой очной встрече этого сезона, на стадионе «Караджордже», победила «Войводина» — 2:1.',
    'Помощник главного тренера «Войводины» Слободан Медоевич в интервью клубному сайту: «„Радник“ — очень хорошая команда. В прошлом году они были хитом чемпионата, и в этом сезоне показывают, что обладают качеством и развиваются как клуб. Коллега Рендулич хорошо ими руководит, они очень организованы. Никто не обыграл их на их поле, это домашняя команда, так что нас ждёт настоящее испытание».',
    '«Мы должны ответить на их агрессивность. Наш настрой максимальный, мы с большим уважением относимся к сопернику, но смотрим на себя и хотим навязать свою игру», — сказал Медоевич. Он добавил, что до конца календарного года «Войводину» ждут ещё два матча.',
  ],
  highlight1: '«Радник» — «Войводина», суббота, 28 ноября, 14:00, Городской стадион в Сурдулице',
  highlight2: '«Никто не обыграл их на их поле… нас ждёт настоящее испытание». — Слободан Медоевич',
}

export default function RadnikVojvodinaNajavaSurdulicaPage() {
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
            imageAlt: 'AI илустрација: фудбалски стадион у Сурдулици пред утакмицу',
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
            src="/static/images/radnik-vojvodina-najava-surdulica.jpg"
            alt={content.imageAlt}
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

          <CommentsSection postSlug="radnik-vojvodina-najava-surdulica" />
        </motion.div>
      </article>
    </main>
  )
}
