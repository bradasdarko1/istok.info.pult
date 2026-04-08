'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { title } from 'node:process'

const cities = [
  { key: 'newSad', timeZone: 'Europe/Belgrade' },
  { key: 'beijing', timeZone: 'Asia/Shanghai' },
  { key: 'moscow', timeZone: 'Europe/Moscow' },
  { key: 'minsk', timeZone: 'Europe/Minsk' },
] as const

export default function VestiDanas() {
  const { t, language, script } = useLanguage()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (timeZone: string) =>
    new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : 'sr-RS', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(now)

  const danasnjeVesti = [
    {
      slug: 'stadion-peticija',
      title:
        language === 'ru'
         ? 'Сегодня на Карађорђе поддержите инициативу по установке памятника жертвам агрессии НАТО!'
         : script === 'cyr'
           ? 'Данас на Карађорђу подржите иницијативу за подизање споменика жртавама НАТО агресије!'
           : 'Danas na Karađorđu podržite inicijativu za podzinje spomenika žrtvama NATO agresije!',
      excerpt: '',
      image: '/static/images/stadion.jpg'     

    },
    {
      slug: 'kej-zrtava-racije',
      title:
        language === 'ru'
          ? 'На набережной Жертв рейда: инициатива по установке памятника'
          : script === 'cyr'
            ? 'На Кеју жртава рације: иницијатива за споменик'
            : 'Na Keju žrtava racije: inicijativa za spomenik',
      excerpt:
        language === 'ru'
          ? 'Спортсмены и представители Российской Федерации поддержали петицию в Нови-Саде.'
          : script === 'cyr'
            ? 'Спортисти и представници Руске Федерације подржали петицију у Новом Саду.'
            : 'Sportisti i predstavnici Ruske Federacije podržali peticiju u Novom Sadu.',
      image: '/static/images/kej-6.JPG',
    },
    {
      slug: 'spomenik-27-godina',
      title:
        language === 'ru'
          ? '27 ЛЕТ ЖДАЛИ ЭТОГО ПАМЯТНИКА???'
          : script === 'cyr'
            ? '27 ГОДИНА СЕ ЧЕКАЛО НА ОВАЈ СПОМЕНИК???'
            : '27 GODINA SE ČEKALO NA OVAJ SPOMENIK???',
      excerpt: '',
      image: '/static/images/spomenik.jpg',
    },
    {
      slug: 'srbija-pamti',
      title:
        language === 'ru'
          ? 'Сербия ПОМНИТ!'
          : script === 'cyr'
            ? 'Србија ПАМТИ!'
            : 'Srbija PAMTI!',
      excerpt: '',
      image: '/static/images/srbijapamti.jpg',
    },
  ]

  return (
    <div className="relative mx-auto w-full max-w-7xl px-3 py-5 sm:px-6">
      <h1 className="mb-5 text-2xl font-bold sm:text-4xl">{t('todayNews')}</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:pr-[300px]">
        {danasnjeVesti.map((vest) => (
          <Link key={vest.slug} href={`/vesti/${vest.slug}`}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-[160px] sm:h-[220px] overflow-hidden">
                <img
                  src={vest.image}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h2 className="text-base font-bold sm:text-lg">
                  {vest.title}
                </h2>

                {vest.excerpt && (
                  <p className="mt-2 text-sm text-white/70">
                    {vest.excerpt}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SAT - MOBILE */}
      <div className="mt-6 xl:hidden">
        <div className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
          <h2 className="mb-3 text-lg font-bold">{t('time')}</h2>

          <div className="space-y-2">
            {cities.map((city) => (
              <div key={city.key} className="flex justify-between text-sm">
                <span>{t(city.key)}</span>
                <span>{formatTime(city.timeZone)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAT - DESKTOP */}
      <div className="hidden xl:block">
        <div className="fixed top-52 right-6 w-[260px]">
          <aside className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
            <h2 className="mb-4 text-lg font-bold">{t('time')}</h2>

            {cities.map((city) => (
              <div key={city.key} className="flex justify-between mb-2">
                <span>{t(city.key)}</span>
                <span>{formatTime(city.timeZone)}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  )
}
