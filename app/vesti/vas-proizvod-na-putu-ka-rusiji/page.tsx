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
  title: 'Vaš proizvod na putu ka Rusiji',
  date: 'Objavljeno: 22. maj 2026.',
  lead: 'Imate proizvod ili ideju koju želite da predstavite na velikom tržištu? Ovo je vaša prilika da napravite konkretan iskorak ka saradnji sa partnerima iz Rusije.',
  paragraphs: [
    'Opis akcije:',
    'Ako posedujete gotov proizvod, proizvod u razvoju ili poslovnu ideju sa potencijalom za plasman, pozivamo vas da je predstavite kroz naš konkurs i ostvarite direktan kontakt sa ruskim partnerima.',

    'Poziv je otvoren za:',
    '- mikro, mala i srednja preduzeća,',
    '- velike kompanije,',
    '- pojedince i inovatore,',
    '- startap timove',
    
    'Potrebno je dostaviti:',
    '- opis proizvoda ili ideje,',
    '- fotografije ili katalog,',
    '- tehničke specifikacije,',
    '- cenovnik (ukoliko postoji),',
    '- kontakt informacije',

    'Dokumentaciju možete poslati putem našeg mejla: istokinfopult@gmail.com ili dostaviti lično u našu kancelariju.',

    'Po završetku tro-nedeljnog konkursa, biće organizovani online sastanci sa partnerima iz Rusije, gde ćete imati priliku da direktno predstavite svoj projekat i otvorite vrata konkretnoj saradnji.',
    
    'Poziv na akciju:',
    'Predstavite svoju ideju onima koji aktivno traže nove proizvode, inovacije i pouzdane partnere.'
  ],
  
  highlight1: 'Otvoren konkurs za kompanije i pojedince koji žele plasman proizvoda na rusko tržište.',
  highlight2: 'Najbolji projekti dobijaju priliku za direktne online sastanke sa partnerima iz Rusije.',
}

const ruText = {
  category: 'Новости',
  title: 'Ваш продукт на пути в Россию',
  date: 'Опубликовано: 22 мая 2026 г.',
  lead: 'У вас есть продукт или идея, которую вы хотите представить на крупном рынке? Это ваш шанс сделать конкретный шаг к сотрудничеству с партнёрами из России.',
  paragraphs: [
    'Описание инициативы:',
    'Если у вас есть готовый продукт, продукт в разработке или бизнес-идея с потенциалом выхода на рынок, мы приглашаем вас принять участие в нашем конкурсе и установить прямой контакт с российскими партнёрами.',

    'Приглашаются:',
    '- микро-, малые и средние предприятия,',
    '- крупные компании,',
    '- частные лица и новаторы,',
    '- стартап-команды',

    'Необходимо предоставить:',
    '- описание продукта или идеи,',
    '- фотографии или каталог',
    '- технические характеристики,',
    '- прайс-лист (при наличии),',
    '- контактные данные.',

    'Документацию можно отправить через нашу электронную почту: istokinfopult@gmail.com или передать лично в наш офис.',

    'По завершении трёхнедельного конкурса будут организованы онлайн-встречи с партнёрами из России, где вы сможете напрямую представить свой проект и открыть возможности для реального сотрудничества.',

    'Призыв к действию:',
    'Представьте свою идею тем, кто активно ищет новые продукты, инновации и надёжных партнёров.'
  ],
  
  highlight1: 'Открыт конкурс для компаний и частных лиц, желающих выйти на российский рынок.',
  highlight2: 'Лучшие проекты получат возможность прямых онлайн-встреч с партнёрами из России.',
}

export default function VasProizvodNaPutuKaRusijiPage() {
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

  const email = 'istokinfopult@gmail.com'

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
            src="/static/images/saradnja-sa-rusijom.jpeg"
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
            {content.paragraphs.map((paragraph, index) => {
              if (paragraph.includes(email)) {
                const parts = paragraph.split(email)

                return (
                  <p key={index}>
                    {parts[0]}
                    <a
                      href={`mailto:${email}`}
                      className="font-semibold text-yellow-400 transition hover:text-yellow-300"
                    >
                      {email}
                    </a>
                    {parts[1]}
                  </p>
                )
              }

              return <p key={index}>{paragraph}</p>
            })}
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

          <CommentsSection postSlug="vas-proizvod-na-putu-ka-rusiji" />
        </motion.div>
      </article>
    </main>
  )
}
