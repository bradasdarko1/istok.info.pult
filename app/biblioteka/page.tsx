'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import { track } from '@vercel/analytics'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

export default function BibliotekaPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

  const isCyr = script === 'cyr'

  const content = {
    sr: {
      title: isCyr ? 'БИБЛИОТЕКА' : 'BIBLIOTEKA',
      intro: isCyr
        ? 'Ова секција је посвећена књигама, публикацијама и материјалима од значаја за образовање, културу и историју.'
        : 'Ova sekcija je posvećena knjigama, publikacijama i materijalima od značaja za obrazovanje, kulturu i istoriju.',
      bookTitle: isCyr
        ? 'ИСТОРИЈА СРПСКО-РУСКИХ ПОЛИТИЧКИХ ОДНОСА'
        : 'ISTORIJA SRPSKO-RUSKIH POLITIČKIH ODNOSA',
      bookAuthor: isCyr ? 'АУТОР: МИЛАН СТОЈАНОВИЋ' : 'AUTOR: MILAN STOJANOVIĆ',
      bookDescription: isCyr
        ? 'Књига приказује историјски развој политичких односа између српског и руског народа од XVIII века до савременог доба, са посебним освртом на утицај великих сила и кључне историјске догађаје.'
        : 'Knjiga prikazuje istorijski razvoj političkih odnosa između srpskog i ruskog naroda od XVIII veka do savremenog doba, sa posebnim osvrtom na uticaj velikih sila i ključne istorijske događaje.',
      button: isCyr ? 'ПОГЛЕДАЈ / ПРЕУЗМИ' : 'POGLEDAJ / PREUZMI',
    },
    ru: {
      title: 'БИБЛИОТЕКА',
      intro:
        'Этот раздел посвящен книгам, публикациям и материалам, имеющим значение для образования, культуры и истории.',
      bookTitle: 'ИСТОРИЯ СЕРБСКО-РУССКИХ ПОЛИТИЧЕСКИХ ОТНОШЕНИЙ',
      bookAuthor: 'АВТОР: МИЛАН СТОЯНОВИЧ',
      bookDescription:
        'Книга показывает историческое развитие политических отношений между сербским и русским народами с XVIII века до современности, с особым акцентом на влияние великих держав и ключевые исторические события.',
      button: 'ОТКРЫТЬ / СКАЧАТЬ',
    },
  }

  const t = content[language]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/static/images/background.jpg')] bg-cover bg-center opacity-40" />

      <div className="relative z-10 px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-5xl rounded-2xl border border-yellow-500/30 bg-black/70 p-8 shadow-2xl backdrop-blur"
        >
          <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-wide text-yellow-400 md:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-200 md:text-xl">
            {t.intro}
          </p>

          <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/60">
              <img
                src="/static/images/istorija-srpsko-ruskih-odnosa.jpg"
                alt={t.bookTitle}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-yellow-500/20 bg-black/60 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                {t.bookAuthor}
              </p>

              <h2 className="mb-4 text-2xl font-bold uppercase text-white md:text-3xl">
                {t.bookTitle}
              </h2>

              <p className="mb-6 text-base leading-8 text-gray-300 md:text-lg">
                {t.bookDescription}
              </p>

              <div>
                <a
  href="/static/files/Istorija-srpsko-ruskih-odnosa.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => track('download_knjiga')}
  className="inline-block rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300"
>
  {t.button}
</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
