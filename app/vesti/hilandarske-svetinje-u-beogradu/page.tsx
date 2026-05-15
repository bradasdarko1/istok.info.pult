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
  title: 'Hilandarske svetinje stižu u Beograd: istorijski događaj povodom 850 godina od rođenja Svetog Save',
  date: 'Objavljeno: 15. maj 2026.',
  lead: 'Povodom velikog jubileja – 850 godina od rođenja Svetog Save – Beograd će imati čast da ugosti dragocene svetinje iz Manastir Hilandar, jednog od najvažnijih duhovnih centara srpskog naroda.',
  paragraphs: [
    'Reč je o događaju izuzetnog značaja koji prevazilazi granice klasične izložbe i predstavlja susret sa najdubljim slojevima istorije, vere i tradicije.',
    'Posetioci će imati priliku da vide niz svetinja koje su vekovima čuvane u Hilandaru:',
    '- mozaičnu ikonu Bogorodice Odigitrije, pred kojom je poslednje dane proveo Simeon Mirotočivi',
    '- ikonu Bogorodice Mlekopitateljnice',
    '- predstavu Hrista Pantokratora',
    '- ikonu Sveti Sava i Simeon Mirotočivi',
    '- repliku igumanskog štapa iz Hilandara',
    '- repliku paterice Sava Osvećeni',
    '- Karejski tipik – jedan od najvažnijih duhovnih spisa',
    '- repliku čuvene ikone Bogorodice Trojeručice',
    'Izložba pod nazivom „Sveti Sava“, u organizaciji Muzeja Srpske pravoslavne crkve, biće postavljena u Galeriji Srpska akademija nauka i umetnosti i trajaće od 15. maja do 19. jula.'
  ],
  
  highlight1: 'Retka prilika da se na jednom mestu vide svetinje koje vekovima nisu napuštale Manastir Hilandar',
  highlight2: 'Izložba posvećena Svetom Savi donosi susret sa korenima srpske vere i identiteta',
}

const ruText = {
  category: 'Новости',
  title: 'Святыни Хиландара прибывают в Белград: историческое событие к 850-летию со дня рождения Святого Саввы',
  date: 'Опубликовано: 15 мая 2026 г.',
  lead: 'В честь 850-летия со дня рождения Sveti Sava Белград примет уникальные святыни из Manastir Hilandar — одного из главных духовных центров Сербии.',
  paragraphs: [
    'Это событие выходит за рамки обычной выставки и представляет собой глубокое соприкосновение с историей, верой и культурным наследием.',
    'Посетители смогут увидеть святыни, которые на протяжении веков хранились в Хиландаре:',
    '- мозаичную икону Богородицы Одигитрии, перед которой завершил свой земной путь Simeon Mirotočivi',
    '- икону Богородицы Млекопитательницы',
    '- икону Христа Пантократора',
    '- икону Sveti Sava и Simeon Mirotočivi',
    '- реплику игуменского посоха Хиландара',
    '- реплику посоха Sava Osvećeni',
    '- Карейский типик — важнейший духовный документ',
    '- реплику иконы Богородицы Троеручицы',
    'Выставка под названием «Святой Савва», организованная Музеем Сербской православной церкви, пройдёт в Галерее Srpska akademija nauka i umetnosti с 15 мая по 19 июля.'
  ],
  
  highlight1: 'Уникальная возможность увидеть святыни, которые веками не покидали Manastir Hilandar',
  highlight2: 'Выставка, посвящённая Sveti Sava, открывает доступ к духовным корням сербского народа',
}

export default function HilandarskeSvetinjeUBeograduPage() {
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
            src="/static/images/hilandarske-svetinje.jpg"
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

          <CommentsSection postSlug="hilandarske-svetinje-u-beogradu" />
        </motion.div>
      </article>
    </main>
  )
}