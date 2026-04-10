'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

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
      href: 'vesti/veliki-petak',
      slug: 'veliki-petak',

      category:
      language === 'ru'
      ? 'Новости - 10.04.2026.'
      : script === 'cyr'
        ? 'Вести - 10.04.2026.'
        : 'Vesti - 10.04.2026.',

      title:
      language === 'ru'
      ? 'Великая пятница – день страдания, тишины и молитвы'
      : script === 'cyr'
        ? 'Велики петак - дан страдања, тишине и молитве'
        : 'Veliki petak – dan stradanja, tišine i molitve',

      excerpt:
    language === 'ru'
      ? 'Сегодня православные верующие отмечают Великую пятницу — самый скорбный день в христианском календаре, посвящённый воспоминанию страданий и распятия Иисуса Христа.'
      : script === 'cyr'
        ? 'Данас православни верници обележавају Велики петак, најтужнији дан у хришћанском календару, посвећен сећању на страдање и распеће Исуса Христа.'
        : 'Danas pravoslavni vernici obeležavaju Veliki petak, najtužniji dan u hrišćanskom kalendaru, posvećen sećanju na stradanje i raspeće Isusa Hrista.',

        image: '/static/images/petak.jpg',
    },
    {
      href: 'vesti/ambasador',
      slug: 'ambasador',

      category:
      language === 'ru'
      ? 'Новости - 10.04.2026.'
      : script === 'cyr'
        ? 'Вести - 10.04.2026.'
        : 'Vesti - 10.04.2026.',

      title:
      language === 'ru'
      ? 'У Ирана нет ядерной бомбы, и он не хочет её иметь'
      : script === 'cyr'
        ? 'Иран нема нуклеарну бомбу нити је жели'
        : 'Iran nema nuklearnu bombu niti je želi',
      
      excerpt:
    language === 'ru'
      ? 'Приглашенный посол Ирана в офисе информационного центра ISTOK также поддерживает памятник жертвам агрессии НАТО.'
      : script === 'cyr'
        ? 'Гост амбасадор Ирана у просторијама ИСТОК ИНФО ПУЛТА, подржава и споменик жртвама НАТО агресије'
        : 'Gost ambasador Irana u prostorijama ISTOK INFO PULTA, podržava i spomenik žrtvama NATO agresije',

       image: '/static/images/iran-11.JPG', 


    },
    {
  href: '/vesti/kosare',
  slug: 'kosare',

  category:
    language === 'ru'
      ? 'Новости - 09.04.2026.'
      : script === 'cyr'
        ? 'Вести - 09.04.2026.'
        : 'Vesti - 09.04.2026.',

  title:
    language === 'ru'
      ? 'Героизм, который не забывается'
      : script === 'cyr'
        ? 'Херојство за незаборав'
        : 'Herojstvo za nezaborav',

  excerpt:
    language === 'ru'
      ? '9 апреля 1999 года началась Битва за Кошаре — символ защиты Родины и жертвы сербских солдат.'
      : script === 'cyr'
        ? '9. априла 1999. године почела је Битка за Кошаре — симбол одбране отаџбине.'
        : '9. aprila 1999. godine počela je Bitka za Košare — simbol odbrane otadžbine.',

  image: '/static/images/kosare.jpeg',
},
    {
      href: '/kultura/dogadjaji/podmornicari',
      slug: 'podmornicari',
      category:
        language === 'ru'
          ? 'Культура - 09.04.2026.'
          : script === 'cyr'
            ? 'Култура - 09.04.2026.'
            : 'Kultura - 09.04.2026.',

      title:
        language === 'ru'
          ? 'В помещениях ISTOK INFO PULTA отметили День подводника'
          : script === 'cyr'
            ? 'Обележен Дан подморничара у просторијама ISTOK INFO PULTA'
            : 'Obeležen Dan podmorničara u prostorijama ISTOK INFO PULTA',

      excerpt:
        language === 'ru'
          ? 'Мероприятие было дополнено поэтическим выступлением Сербско-русского объединения граждан «Мир без границ» из Сомбора.'
          : script === 'cyr'
            ? 'Догађај је употпуњен поетским наступом Српско-руског удружења грађана "Свет без граница" Сомбор.'
            : 'Događaj je upotpunjen poetskim nastupom Srpsko-ruskog udruženja građana "Svet bez granica" Sombor.',

      image: '/static/images/pod-1.JPG',
    },
    {
      href: '/vesti/vesti-istok/rusija-predavanje',
      slug: 'rusija-predavanje',

      category:
        language === 'ru'
          ? 'Новости Востока'
          : script === 'cyr'
            ? 'Исток Вести - 09.04.2026.'
            : 'Istok vesti - 09.04.2026.',

      title:
        language === 'ru'
          ? 'Русские врачи на Балканах: лекция в Туле о памяти и братстве'
          : script === 'cyr'
            ? 'Руски лекари на Балкану: предавање у Тули о сећању и братству'
            : 'Ruski lekari na Balkanu: predavanje u Tuli o sećanju i bratstvu',

      excerpt:
        language === 'ru'
          ? 'В Тульском университете прошло предавање о русских медицинских миссиях в Сербии.'
          : script === 'cyr'
            ? 'На универзитету у Тули одржано је предавање о руским медицинским мисијама у Србији.'
            : 'Na univerzitetu u Tuli održano je predavanje o ruskim medicinskim misijama u Srbiji.',

      image: '/static/images/rusija-2.jpeg',
    },
    {
      href: '/vesti/sport/pobeda-vosa',
      slug: 'pobeda-vose',
      category:
        language === 'ru'
          ? 'Спорт-09.04.2026.'
          : script === 'cyr'
            ? 'Спорт-09.04.2026.'
            : 'Sport-09.04.2026.',

      title:
        language === 'ru'
          ? '«Войводина» победила «Раднички» со счётом 3:2'
          : script === 'cyr'
            ? 'Војводина победила Раднички резултатом 3:2'
            : 'Vojvodina pobedila Radnički rezultatom 3:2',

      excerpt:
        language === 'ru'
          ? 'Футболисты «Войводины» одержали важную победу над «Раднички» из Ниша.'
          : script === 'cyr'
            ? 'Фудбалери Војводине остварили важну победу против Радничког из Ниша.'
            : 'Fudbaleri Vojvodine ostvarili važnu pobedu protiv Radničkog iz Niša.',

      image: '/static/images/vosa.jpg',
    },
    {
      href: '/vesti/potpisi',
      slug: 'potpisi',
      category:
        language === 'ru'
          ? 'Новости-09.04.2026.'
          : script === 'cyr'
            ? 'Вести-09.04.2026.'
            : 'Vesti-09.04.2026.',
      title:
        language === 'ru'
          ? 'Болельщики ФК «Войводина» поддержали петицию о возведении памятника жертвам агрессии НАТО'
          : script === 'cyr'
            ? 'Навијачи ФК Војводина подржали петицију за подизање споменика жртвама НАТО агресије'
            : 'Navijači FK Vojvodina podržali peticiju za podizanje spomenika žrtvama NATO agresije',
      excerpt:
        language === 'ru'
          ? 'Болельщики ФК «Войводина» присоединились к инициативе и поддержали петицию.'
          : script === 'cyr'
            ? 'Навијачи ФК Војводина придружили су се иницијативи и подржали петицију.'
            : 'Navijači FK Vojvodina pridružili su se inicijativi i podržali peticiju.',
      image: '/static/images/stadion-3.jpg',
    },
    {
      href: '/vesti/sport/dusko-vujosevic',
      slug: 'dusko-vujosevic',
      category:
        language === 'ru'
          ? 'Спорт-08.04.2026.'
          : script === 'cyr'
            ? 'Спорт-08.04.2026.'
            : 'Sport-08.04.2026.',
      title:
        language === 'ru'
          ? 'СКОНЧАЛСЯ ТРЕНЕР ДУШКО ВУЙОШЕВИЧ'
          : script === 'cyr'
            ? 'ПРЕМИНУО ТРЕНЕР ДУШКО ВУЈОШЕВИЋ'
            : 'PREMINUO TRENER DUŠKO VUJOŠEVIĆ',
      excerpt:
        language === 'ru'
          ? 'Легендарный баскетбольный тренер Душко Вуйошевич скончался сегодня, 08.04.2026 года, в Белграде.'
          : script === 'cyr'
            ? 'Легендарни кошаркашки тренер Душко Вујошевић преминуо је данас, 08.04.2026. године у Београду.'
            : 'Legendarni košarkaški trener Duško Vujošević preminuo je danas, 08.04.2026. godine u Beogradu.',
      image: '/static/images/dusko.jpg',
    },
    {
      href: '/vesti/stadion-peticija',
      slug: 'stadion-peticija',
      category:
        language === 'ru'
          ? 'Новости-08.04.2026.'
          : script === 'cyr'
            ? 'Вести-08.04.2026.'
            : 'Vesti-08.04.2026.',
      title:
        language === 'ru'
          ? 'Сегодня на Карађорђе поддержите инициативу по установке памятника жертвам агрессии НАТО!'
          : script === 'cyr'
            ? 'Данас на Карађорђу подржите иницијативу за подизање споменика жртвама НАТО агресије!'
            : 'Danas na Karađorđu podržite inicijativu za podizanje spomenika žrtvama NATO agresije!',
      excerpt: '',
      image: '/static/images/stadion.jpg',
    },
    {
      href: '/vesti/kej-zrtava-racije',
      slug: 'kej-zrtava-racije',
      category:
        language === 'ru'
          ? 'Новости'
          : script === 'cyr'
            ? 'Вести'
            : 'Vesti',
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
      href: '/vesti/spomenik-27-godina',
      slug: 'spomenik-27-godina',
      category:
        language === 'ru'
          ? 'Новости'
          : script === 'cyr'
            ? 'Вести'
            : 'Vesti',
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
      href: '/vesti/srbija-pamti',
      slug: 'srbija-pamti',
      category:
        language === 'ru'
          ? 'Новости'
          : script === 'cyr'
            ? 'Вести'
            : 'Vesti',
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:pr-[300px]">
        {danasnjeVesti.map((vest) => (
          <Link key={vest.href} href={vest.href}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-[160px] overflow-hidden sm:h-[220px]">
                <img
                  src={vest.image}
                  alt={vest.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-3 sm:p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  {vest.category}
                </p>

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

      <div className="hidden xl:block">
        <div className="fixed top-52 right-6 w-[260px]">
          <aside className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
            <h2 className="mb-4 text-lg font-bold">{t('time')}</h2>

            {cities.map((city) => (
              <div key={city.key} className="mb-2 flex justify-between">
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
