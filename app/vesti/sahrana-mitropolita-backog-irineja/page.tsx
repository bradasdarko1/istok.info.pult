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
  title: 'SAHRANA MITROPOLITA BAČKOG IRINEJA U NOVOM SADU — OPELO SLUŽI PATRIJARH PORFIRIJE',
  date: 'Objavljeno: 27. novembar 2026.',
  imageAlt:
    'AI ilustracija: pravoslavni hram u Novom Sadu u jutarnjoj izmaglici, sa upaljenim svećama',
  lead: 'U Novom Sadu danas se održava molitveni ispraćaj arhiepiskopa novosadskog i mitropolita bačkog Irineja (Bulovića), koji se upokojio 24. novembra 2026. godine. Opelo služi patrijarh srpski Porfirije.',
  paragraphs: [
    'Kako je saopštila Eparhija bačka, u hramu Sveta Tri Jerarha u Novom Sadu, poznatijem kao Almaški hram, sveta zaupokojna liturgija služi se u 9 časova, a opelo u 12 časova. Opelo nad odrom mitropolita Irineja služi patrijarh Porfirije, uz sasluženje otačastvenih arhijereja i arhijereja sestrinskih pravoslavnih crkava.',
    'Posle opela predviđena je litija od Almaškog hrama do Saborne crkve, gde će mitropolit Irinej biti sahranjen u kripti Sabornog hrama Svetog velikomučenika Georgija.',
    'Kako prenosi Tanjug, kovčeg sa telom mitropolita izložen je u Almaškom hramu, gde se vernici i sveštenstvo opraštaju od svog arhipastira. Ispred hrama postavljen je video-bim, kako bi građani koji ne uspeju da uđu mogli da prate bogosluženje.',
    'Molitvenom ispraćaju, prema istom izvoru, prisustvuju delegacije pomesnih pravoslavnih crkava, među kojima su mitropolit čeških zemalja i Slovačke Rastislav, mitropolit volokolamski Antonije, mitropolit berlinski Marko, episkop štutgartski Jov, mitropolit krfski Nektarije, mitropolit prespansko-pelagonijski Petar i mitropolit strumički Naum. U službi učestvuju i brojni arhijereji, sveštenstvo i monaštvo Srpske pravoslavne crkve.',
    'Zbog litijske povorke privremeno je obustavljen saobraćaj u Almaškoj ulici, ulici Koče Kolarova i Tekelijinoj ulici. Izmena režima saobraćaja važi od 7 do 15 časova.',
    'Mitropolit Irinej upokojio se u utorak, 24. novembra, na Institutu za onkologiju Vojvodine u Sremskoj Kamenici. Na čelu Eparhije bačke nalazio se od 1990. godine.',
  ],

  highlight1: 'Opelo mitropolitu bačkom Irineju služi patrijarh srpski Porfirije, uz sasluženje arhijereja Srpske i sestrinskih pravoslavnih crkava.',
  highlight2: 'Mitropolit Irinej biće sahranjen u kripti Sabornog hrama Svetog velikomučenika Georgija u Novom Sadu.',
}

const imageAltCyr =
  'AI илустрација: православни храм у Новом Саду у јутарњој измаглици, са упаљеним свећама'

const ruText = {
  category: 'Новости',
  title: 'ПОГРЕБЕНИЕ МИТРОПОЛИТА БАЧСКОГО ИРИНЕЯ В НОВИ-САДЕ — ОТПЕВАНИЕ СОВЕРШАЕТ ПАТРИАРХ ПОРФИРИЙ',
  date: 'Опубликовано: 27 ноября 2026 г.',
  imageAlt:
    'ИИ-иллюстрация: православный храм в Нови-Саде в утренней дымке, с зажжёнными свечами',
  lead: 'В Нови-Саде сегодня проходит молитвенное прощание с архиепископом Нови-Садским и митрополитом Бачским Иринеем (Буловичем), почившим 24 ноября 2026 года. Отпевание совершает Патриарх Сербский Порфирий.',
  paragraphs: [
    'Как сообщила Бачская епархия, в храме Трёх Святителей в Нови-Саде, известном как Алмашский храм, заупокойная литургия совершается в 9 часов, а отпевание — в 12 часов. Отпевание митрополита Иринея совершает Патриарх Порфирий при сослужении архиереев Сербской Православной Церкви и братских Православных Церквей.',
    'После отпевания предусмотрен крестный ход от Алмашского храма до кафедрального собора, где митрополит Ириней будет погребён в крипте собора святого великомученика Георгия.',
    'Как передаёт Танюг, гроб с телом митрополита установлен в Алмашском храме, где верующие и духовенство прощаются со своим архипастырем. Перед храмом установлен видеоэкран, чтобы горожане, которые не смогут войти, могли следить за богослужением.',
    'По данным того же источника, в молитвенном прощании участвуют делегации Поместных Православных Церквей, в том числе митрополит Чешских земель и Словакии Ростислав, митрополит Волоколамский Антоний, митрополит Берлинский Марк, епископ Штутгартский Иов, митрополит Керкирский Нектарий, митрополит Преспанско-Пелагонийский Петр и митрополит Струмицкий Наум. В богослужении участвуют также многочисленные архиереи, духовенство и монашество Сербской Православной Церкви.',
    'В связи с крестным ходом временно перекрыто движение на улицах Алмашской, Коче Коларова и Текелиевой. Изменённый режим движения действует с 7 до 15 часов.',
    'Митрополит Ириней скончался во вторник, 24 ноября, в Институте онкологии Воеводины в Сремской-Каменице. Бачскую епархию он возглавлял с 1990 года.',
  ],

  highlight1: 'Отпевание митрополита Бачского Иринея совершает Патриарх Сербский Порфирий при сослужении архиереев Сербской и братских Православных Церквей.',
  highlight2: 'Митрополит Ириней будет погребён в крипте кафедрального собора святого великомученика Георгия в Нови-Саде.',
}

export default function SahranaMitropolitaBackogIrinejaPage() {
  const { language, script } = useLanguage()

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            imageAlt: imageAltCyr,
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
            src="/static/images/mitropolit-backi-irinej-sahrana.jpg"
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

          <CommentsSection postSlug="sahrana-mitropolita-backog-irineja" />
        </motion.div>
      </article>
    </main>
  )
}