'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function PeticijaPage() {
  const { language, script } = useLanguage()

  const content = {
    label:
      language === 'ru'
        ? 'ИСТОК ИНФО ПУЛЬТ'
        : script === 'cyr'
          ? 'ИСТОК ИНФО ПУЛТ'
          : 'Istok Info Pult',

    title:
      language === 'ru'
        ? 'Петиция о возведении памятника жертвам'
        : script === 'cyr'
          ? 'Петиција за подизање споменика жртвама'
          : 'Peticija za podizanje spomenika žrtvama',

    text:
      language === 'ru'
        ? 'Мы призываем граждан, друзей и всех людей доброй воли своей подписью поддержать инициативу по возведению памятника жертвам агрессии НАТО. Ваша подпись является поддержкой культуры памяти и этой гражданской инициативы.'
        : script === 'cyr'
          ? 'Позивамо грађане, пријатеље и све људе добре воље да својим потписом подрже иницијативу за подизање споменика жртвама НАТО агресије. Ваш потпис представља подршку култури сећања и овој грађанској иницијативи.'
          : 'Pozivamo građane, prijatelje i sve ljude dobre volje da svojim potpisom podrže inicijativu za podizanje spomenika žrtvama NATO agresije. Vaš potpis predstavlja podršku kulturi sećanja i ovoj građanskoj inicijativi.',

    button:
      language === 'ru'
        ? 'Открыть онлайн-подписание'
        : script === 'cyr'
          ? 'Отвори online потписивање'
          : 'Otvori online potpisivanje',

    note:
      language === 'ru'
        ? 'Нажатием на кнопку откроется онлайн-форма для подписания петиции. Данные используются исключительно для учёта поддержки и не будут опубликованы без согласия.'
        : script === 'cyr'
          ? 'Кликом на дугме отвориће се online форма за потписивање петиције. Подаци се користе искључиво за евиденцију подршке и неће бити јавно објављени без сагласности.'
          : 'Klikom na dugme otvoriće se online forma za potpisivanje peticije. Podaci se koriste isključivo za evidenciju podrške i neće biti javno objavljeni bez saglasnosti.',
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-yellow-500/40 bg-black/65 px-6 py-10 text-center shadow-[0_0_35px_rgba(234,179,8,0.12)] backdrop-blur-md sm:px-10 sm:py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300/90 sm:text-sm">
            {content.label}
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {content.title}
          </h1>

          <div className="mx-auto my-6 h-px w-28 bg-yellow-400/40" />

          <p className="mx-auto max-w-3xl text-lg font-medium leading-8 text-yellow-300 drop-shadow-[0_0_6px_rgba(234,179,8,0.35)]">
            {content.text}
          </p>

          <div className="mt-10">
            <a
              href="https://tally.so/r/rjL71v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
            >
              {content.button}
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-gray-400">
            {content.note}
          </p>
        </div>
      </div>
    </main>
  )
}
