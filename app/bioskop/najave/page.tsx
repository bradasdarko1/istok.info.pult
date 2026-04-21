'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

export default function RepertoarPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

  const isCyr = script === 'cyr'

  const content = {
    sr: {
      title: isCyr ? 'НОЋ НА ЗАПОРОШКОМ ФРОНТУ' : 'NOĆ NA ZAPOROŠKOM FRONTU',
      subtitle: isCyr
        ? 'Премијерно у уторак 21.04. у биоскопу ISTOK INFO PULT'
        : 'Premijerno u utorak 21.04. u bioskopu ISTOK INFO PULT',

      movieTitle: isCyr
        ? 'ПРВА СВЕЧАНА ПРОЈЕКЦИЈА'
        : 'PRVA SVEČANA PROJEKCIJA',

      time: isCyr ? 'Уторак 21.04. од 20:00 часова' : 'Utorak 21.04. od 20:00 časova',

      desc: isCyr
        ? 'Позивамо све љубитеље филма да присуствују првој свечаној пројекцији у оквиру новоотвореног биоскопског програма.'
        : 'Pozivamo sve ljubitelje filma da prisustvuju prvoj svečanoj projekciji u okviru novootvorenog bioskopskog programa.',

      highlight1: isCyr
        ? 'ПОЧЕТАК НОВЕ ЕРЕ БИОСКОПА'
        : 'POČETAK NOVE ERE BIOSKOPA',

      highlight2: isCyr
        ? 'ФИЛМСКО ВЕЧЕ ЗА ПАМЋЕЊЕ'
        : 'FILMSKO VEČE ZA PAMĆENJE',

      back: isCyr ? '← Назад на Биоскоп' : '← Nazad na Bioskop',
    },

    ru: {
      title: 'НОЧЬ НА ЗАПОРОЖСКОМ ФРОНТЕ',
      subtitle: 'Премьера во вторник, 21.04, в кинотеатре ISTOK INFO PULT.',
      movieTitle: 'ПЕРВАЯ ТОРЖЕСТВЕННАЯ ПРЕМЬЕРА',
      time: 'Вторник, 21.04. с 20:00 часов',
      desc: 'Приглашаем всех любителей кино на первый торжественный показ в рамках нового кинопрограммы.',
      highlight1: 'НАЧАЛО НОВОЙ ЭПОХИ КИНО',
      highlight2: 'КИНОВЕЧЕР, КОТОРЫЙ ЗАПОМНИТСЯ',
      back: '← Назад в раздел Кино',
    },
  }

  const t = content[language]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-yellow-500/20 bg-black/70 p-6 md:p-10 backdrop-blur-xl"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          ISTOK INFO PULT
        </p>

        <h1 className="text-4xl font-black tracking-wide text-white md:text-6xl">
          {t.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-300 md:text-xl">{t.subtitle}</p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-yellow-500/20">
          <img
            src="/static/images/bioskop.jpg"
            alt="Repertoar"
            className="h-[260px] w-full object-cover md:h-[420px]"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-zinc-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              PREMIJERA
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              {t.movieTitle}
            </h2>

            <p className="mt-4 text-lg font-semibold text-yellow-300">
              {t.time}
            </p>

            <p className="mt-5 leading-8 text-zinc-300">{t.desc}</p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-xl font-bold text-yellow-300">
              {t.highlight1}
            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-xl font-bold text-yellow-300">
              {t.highlight2}
            </div>
          </div>
        </div>

        <Link
          href="/bioskop"
          className="mt-10 inline-block rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-500/20"
        >
          {t.back}
        </Link>
      </motion.div>
    </div>
  )
}
