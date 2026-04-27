'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

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
    A:'А',B:'Б',C:'Ц',Č:'Ч',Ć:'Ћ',D:'Д',Đ:'Ђ',E:'Е',F:'Ф',G:'Г',H:'Х',I:'И',
    J:'Ј',K:'К',L:'Л',M:'М',N:'Н',O:'О',P:'П',R:'Р',S:'С',Š:'Ш',T:'Т',U:'У',
    V:'В',Z:'З',Ž:'Ж',a:'а',b:'б',c:'ц',č:'ч',ć:'ћ',d:'д',đ:'ђ',e:'е',f:'ф',
    g:'г',h:'х',i:'и',j:'ј',k:'к',l:'л',m:'м',n:'н',o:'о',p:'п',r:'р',s:'с',
    š:'ш',t:'т',u:'у',v:'в',z:'з',ž:'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const srLatin = {
  category: 'Vesti',
  title:
    'FRANCUZ KOJI JE RIZIKOVAO SVE ZBOG SRBIJE: PJER ANRI BINEL ISTINSKI HEROJ',
  date: 'Objavljeno: 27. april 2026.',
  lead:
    'Junak o kome se u Srbiji nedovoljno govori, Pjer Anri Binel, bivši major francuske vojne obaveštajne službe, ostao je upamćen kao čovek koji je, vođen ličnim uverenjem i osećajem pravde, rizikovao sopstvenu karijeru kako bi pomogao Srbiji u jednom od najtežih trenutaka njene novije istorije.',
  paragraphs: [
    'Kao predstavnik Francuske pri NATO-u krajem devedesetih godina, imao je pristup poverljivim informacijama, uključujući i planove za bombardovanje Savezne Republike Jugoslavije.',
    'Prema svedočenjima, 1998. godine Binel je došao u posed tih planova i odlučio da ih iznese iz sedišta NATO-a u Briselu.',
    'Planovi su diplomatskim kanalima prosleđeni u Beograd, a smatra se da je tim činom bombardovanje odloženo za određeno vreme.',
    'Iako nije uspeo da spreči agresiju, Binel je otvoreno govorio o tom napadu, nazivajući ga kriminalnim činom i ratnim zločinom.',
    'Posledice njegovog postupka bile su ozbiljne. Francuski sud ga je osudio zbog špijunaže, oduzet mu je čin.',
    '„Nimalo ne žalim zbog onoga što sam uradio. Sve bih isto ponovio“, poručio je Binel.',
    'Sa posebnim ponosom isticao je i priznanje koje je dobio od Srbije — medalju „Miloš Obilić“.',
    'Govorio je i o dubokoj povezanosti sa srpskim narodom, te da mu je Srbija ostala u srcu.',
    'Životna priča Pjera Anrija Binela ostaje primer lične žrtve u ime časti, savesti i moralnih principa.',
    'Sutra na našem portalu objavljujemo i pismo Pjera Anrija Binela upućeno srpskom narodu.',
    '📌 Podrži peticiju za izgradnju spomenika žrtvama NATO agresije:',
  ],
  highlight1:
    'Dok je NATO pripremao napad na Srbiju, jedan francuski oficir odlučio je da stane na stranu pravde i istine.',
  highlight2:
    'Zbog pomoći Srbiji izgubio je čin, odlikovanja i karijeru — ali nikada čast.',
}

const ruText = {
  category: 'Новости',
  title:
    'ФРАНЦУЗ, КОТОРЫЙ РИСКНУЛ ВСЕМ РАДИ СЕРБИИ: ПЬЕР АНРИ БИНЕЛ — НАСТОЯЩИЙ ГЕРОЙ',
  date: 'Опубликовано: 27 апреля 2026 г.',
  lead:
    'Герой, о котором в Сербии говорят недостаточно, Пьер Анри Бинель остался в памяти как человек, который рискнул карьерой ради помощи Сербии.',
  paragraphs: [
    'Будучи представителем Франции при НАТО, он имел доступ к секретной информации.',
    'Согласно свидетельствам, в 1998 году Бинель получил документы и передал их Белграду.',
    'Считается, что этим шагом начало бомбардировки было отложено.',
    'Хотя он не смог остановить агрессию, Бинель резко осуждал нападение.',
    'Французский суд осудил его за шпионаж, он был лишён звания.',
    '«Я совершенно не жалею о том, что сделал», — говорил Бинель.',
    'С особой гордостью он вспоминал сербскую награду.',
    'Он подчёркивал глубокую связь с сербским народом.',
    'История жизни Пьера Анри Бинеля остаётся примером личной жертвы.',
    'Завтра на нашем портале мы опубликуем и письмо Пьера Анри Бинеля.',
    '📌 Поддержите петицию о строительстве памятника жертвам агрессии НАТО:',
  ],
  highlight1:
    'Когда НАТО готовил нападение на Сербию, один французский офицер решил встать на сторону правды.',
  highlight2:
    'За помощь Сербии он лишился звания и карьеры — но не чести.',
}

export default function PjerAnriBinelPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            {content.category}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {content.title}
          </h1>

          <p className="text-sm text-white/60 md:text-base">{content.date}</p>

          <ShareButtons
            title={content.title}
            text="Pogledaj ovu vest na sajtu Istok Info Pult"
          />
        </motion.div>

        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/static/images/pjer.jpeg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => {
              const isPinned = paragraph.startsWith('📌')

              if (isPinned) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-4 text-white"
                  >
                    <p className="text-base font-medium leading-8 md:text-lg">
                      {paragraph}{' '}
                      <a
                        href="https://tally.so/r/rjL71v"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-yellow-300 underline underline-offset-4 hover:text-yellow-200"
                      >
                        {language === 'ru'
                          ? 'ПОДПИСАТЬ ЗДЕСЬ'
                          : script === 'cyr'
                          ? 'ПОТПИШИ ОВДЕ'
                          : 'POTPIŠI OVDE'}
                      </a>
                    </p>
                  </div>
                )
              }

              return (
                <p key={index} className="text-base leading-8 text-gray-300 md:text-lg">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
              {content.highlight1}
            </p>

            <div className="mx-auto my-4 h-px w-24 bg-yellow-400/40" />

            <p className="text-lg font-bold uppercase tracking-wide text-yellow-300 md:text-xl">
              {content.highlight2}
            </p>
          </div>

          <CommentsSection postSlug="pjer-anri-binel" />
        </div>
      </article>
    </main>
  )
}
