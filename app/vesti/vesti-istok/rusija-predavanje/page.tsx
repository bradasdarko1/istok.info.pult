'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

function latinToCyrillic(text: string) {
  const multiMap: Record<string, string> = {
    'Dž': 'Џ',
    'DŽ': 'Џ',
    'dž': 'џ',
    'Lj': 'Љ',
    'LJ': 'Љ',
    'lj': 'љ',
    'Nj': 'Њ',
    'NJ': 'Њ',
    'nj': 'њ',
  }

  let result = text

  Object.entries(multiMap).forEach(([latin, cyr]) => {
    result = result.split(latin).join(cyr)
  })

  const singleMap: Record<string, string> = {
    A: 'А',
    B: 'Б',
    C: 'Ц',
    Č: 'Ч',
    Ć: 'Ћ',
    D: 'Д',
    Đ: 'Ђ',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Ј',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    R: 'Р',
    S: 'С',
    Š: 'Ш',
    T: 'Т',
    U: 'У',
    V: 'В',
    Z: 'З',
    Ž: 'Ж',
    a: 'а',
    b: 'б',
    c: 'ц',
    č: 'ч',
    ć: 'ћ',
    d: 'д',
    đ: 'ђ',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'и',
    j: 'ј',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    š: 'ш',
    t: 'т',
    u: 'у',
    v: 'в',
    z: 'з',
    ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

const images = [
  '/static/images/rusija-2.jpeg',
  '/static/images/rusija-1.jpeg',
  '/static/images/rusija-3.jpeg',
  '/static/images/rusija-4.jpeg',
  '/static/images/rusija-5.jpeg',
  '/static/images/rusija-6.jpeg',
]

const srLatin = {
  category: 'Istok vesti',
  title:
    'Ruski lekari na Balkanu: Predavanje o sećanju i bratstvu održano na Državnom univerzitetu u Tuli',
  date: 'Objavljeno: 9. april 2026.',
  lead:
    'Dana 4. aprila, na Državnom univerzitetu u Tuli održano je onlajn predavanje posvećeno ruskim medicinskim misijama u Srbiji tokom Balkanskih ratova i Prvog svetskog rata.',
  paragraphs: [
    'Studenti, profesori i svi koji su zabrinuti za budućnost rusko-srpskih odnosa okupili su se u zgradi petog korpusa univerziteta. Događaj su organizovali Rusko-balkanski centar za poslovnu saradnju i kulturu, projekat Rusko-balkanski dijalog i Katedra za istoriju države i prava.',

    'Gostujući predavač bio je Vladimir Nikolajevič Kulik, lekar i pisac. Njegova izabrana tema retko se čuje u učionicama: „Ruske medicinske misije u Srbiji tokom Balkanskih ratova i Prvog svetskog rata“.',

    'Kulik je počeo sa Balkanskim ratovima 1912–1913. U to vreme, Rusija i Srbija su bile saveznice u borbi protiv Osmanskog carstva. Ali ako su se vojske borile bajonetima, ruske medicinske sestre i lekari borili su se skalpelima i molitvom. Dobrovoljci su hrlili u Srbiju: diplomci medicine, sestre Crvenog krsta, ljudi za koje pomaganje pravoslavnoj braći nije bilo pitanje politike, već dužnost.',

    'Kada je počeo Prvi svetski rat (1914–1918), obim pomoći se eksponencijalno povećao. Predavač je podsetio na brojku: od 59 nezavisnih država tog vremena, 38 je ušlo u rat. Srbija se našla u epicentru. Njena vojska je krvarila, tifus je desetkovao civilno stanovništvo, a austrougarske trupe su okupirale gradove. U tim uslovima, ruske medicinske misije bile su pravo čudo – radile su u bolnicama u Nišu i Beogradu, i u poljskim bolnicama pod vatrom.',

    'Jedna od najdirljivijih stranica predavanja bila je priča o Darji Aleksandrovni Korobkini. Imala je samo 26 godina. Umrla je 2. oktobra 1914. Vladimir Nikolajevič je opisao okolnosti njene smrti kao istovremeno tragične i herojske.',

    'Vladimir Nikolajevič je pokazao fotografiju snimljenu 2. oktobra 2025. u Ruskom domu u Beogradu. Slika prikazuje ceremoniju dodele srpske medicinske nagrade koja nosi ime Darje Korobkine. Srpski lekari dobijaju nagradu nazvanu u čast ruske devojke, 111 godina nakon njene smrti. „To je ono što znači istinsko sećanje“, prokomentarisao je predavač. „Ne spomen-ploča, već živo delo.“',

    'Publika je videla retku fotografiju: ruski lekari u Nišu (1914–1915). Grupa lekara u vojnim uniformama — bez patetike, bez poziranja. Jednostavno ljudi koji su došli da spasu strance. Još jedan slajd prikazuje Srpsko lekarsko društvo. Ploča na zgradi navodi godine 1912–1917. Kuliк je objasnio da je nakon Revolucije 1917. godine organizovana pomoć iz Rusije prestala, ali su mnogi ruski lekari trajno ostali u Srbiji, integrišući se u lokalnu medicinu.',

    'Vrhunac događaja bio je razgovor o spomeniku ruskim i srpskim vojnicima palim u Prvom svetskom ratu. Otkri­ven je 19. septembra 2014. godine u tvrđavi Kalemegdan u Beogradu. Predavač je primetio: „Spomenik se pojavio tačno sto godina nakon početka rata. To je znak da Srbi nisu zaboravili ko je stajao uz njih u njihovom najstrašnijem času.“',

    'Vladimir Nikolajevič je pozvao publiku da ide dalje od jednokratnih komemorativnih događaja. „Danas smo čuli priču“, zaključio je. „Sutra, svako od vas može da je ispriča svojim prijateljima. Prekosutra napišite članak. Sećanje nisu samo spomenici. To su naše reči i dela.“',

    'Predavanje je završeno gromoglasnim aplauzom. Organizatori su obećali da će susreti sa Vladimirom Kulikom postati redovni događaji, jer tema tako snažno odjekuje kod mladih ljudi.',
  ],
  highlight1: 'SEĆANJE NISU SAMO SPOMENICI',
  highlight2: 'TO SU NAŠE REČI I DELA',
}

const ruText = {
  category: 'Новости Востока',
  title:
    'Русские врачи на Балканах: лекция о памяти и братстве прошла в Тульском государственном университете',
  date: 'Опубликовано: 4 апреля 2026 г.',
  lead:
    '4 апреля в Тульском государственном университете состоялась онлайн-лекция, посвящённая русским медицинским миссиям в Сербии во время Балканских войн и Первой мировой войны.',
  paragraphs: [
    'Студенты, преподаватели и все, кому небезразлично будущее русско-сербских отношений, собрались в здании пятого корпуса университета. Мероприятие организовали Русско-балканский центр делового сотрудничества и культуры, проект «Русско-балканский диалог» и кафедра истории государства и права.',

    'Приглашённым лектором стал Владимир Николаевич Кулик, врач и писатель. Выбранная им тема редко звучит в аудиториях: «Русские медицинские миссии в Сербии во время Балканских войн и Первой мировой войны».',

    'Кулик начал с Балканских войн 1912–1913 годов. В то время Россия и Сербия были союзниками в борьбе против Османской империи. Но если армии сражались штыками, то русские медицинские сёстры и врачи боролись скальпелями и молитвой. Добровольцы устремлялись в Сербию: выпускники медицинских факультетов, сёстры Красного Креста, люди, для которых помощь православным братьям была не вопросом политики, а долгом.',

    'Когда началась Первая мировая война (1914–1918), масштаб помощи увеличился многократно. Лектор напомнил цифру: из 59 независимых государств того времени 38 вступили в войну. Сербия оказалась в эпицентре. Её армия истекала кровью, тиф уничтожал гражданское население, а австро-венгерские войска оккупировали города. В этих условиях русские медицинские миссии стали настоящим чудом — они работали в больницах Ниша и Белграда, а также в полевых госпиталях под огнём.',

    'Одной из самых трогательных страниц лекции стал рассказ о Дарье Александровне Коробкиной. Ей было всего 26 лет. Она умерла 2 октября 1914 года. Владимир Николаевич описал обстоятельства её гибели как одновременно трагические и героические.',

    'Владимир Николаевич показал фотографию, сделанную 2 октября 2025 года в Русском доме в Белграде. На снимке запечатлена церемония вручения сербской медицинской награды, носящей имя Дарьи Коробкиной. Сербские врачи получают награду, названную в честь русской девушки, спустя 111 лет после её смерти. «Вот что значит подлинная память, — отметил лектор. — Не мемориальная доска, а живое дело».',

    'Публика увидела редкую фотографию: русские врачи в Нише (1914–1915). Группа врачей в военной форме — без пафоса, без позирования. Просто люди, приехавшие спасать чужих. Ещё один слайд показывает Сербское врачебное общество. На табличке на здании указаны годы 1912–1917. Кулик объяснил, что после революции 1917 года организованная помощь из России прекратилась, но многие русские врачи навсегда остались в Сербии, интегрировавшись в местную медицину.',

    'Кульминацией мероприятия стал разговор о памятнике русским и сербским воинам, павшим в Первой мировой войне. Он был открыт 19 сентября 2014 года в крепости Калемегдан в Белграде. Лектор отметил: «Памятник появился ровно через сто лет после начала войны. Это знак того, что сербы не забыли, кто стоял рядом с ними в их самый страшный час».',

    'Владимир Николаевич призвал аудиторию идти дальше разовых памятных мероприятий. «Сегодня мы услышали историю, — заключил он. — Завтра каждый из вас может пересказать её своим друзьям. Послезавтра напишите статью. Память — это не только памятники. Это наши слова и дела».',

    'Лекция завершилась громкими аплодисментами. Организаторы пообещали, что встречи с Владимиром Куликом станут регулярными, поскольку эта тема так сильно откликается у молодёжи.',
  ],
  highlight1: 'ПАМЯТЬ — ЭТО НЕ ТОЛЬКО ПАМЯТНИКИ',
  highlight2: 'ЭТО НАШИ СЛОВА И ДЕЛА',
}

export default function RusijaPredavanjePage() {
  const { language, script } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)

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
      <article className="mx-auto max-w-5xl">
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
          <button
            type="button"
            onClick={() => setSelected(0)}
            className="group block w-full text-left"
            aria-label="Otvori glavnu fotografiju"
          >
            <img
              src={images[0]}
              alt={content.title}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-10"
        >
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {language === 'ru'
                ? 'Фотографии с мероприятия'
                : script === 'cyr'
                  ? 'Фотографије са предавања'
                  : 'Fotografije sa predavanja'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.slice(1).map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setSelected(i + 1)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label={`Otvori fotografiju ${i + 2}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${content.title} ${i + 2}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </article>

      {selected !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelected(null)}
            aria-label="Zatvori pregled slike"
          />

          <div className="relative z-10 w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {language === 'ru' ? 'Закрыть' : script === 'cyr' ? 'Затвори' : 'Zatvori'}
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={images[selected]}
                alt={`${content.title} ${selected + 1}`}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setSelected((selected - 1 + images.length) % images.length)}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Prethodna slika"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => setSelected((selected + 1) % images.length)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-black/60"
                  aria-label="Sledeća slika"
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 text-center text-sm text-white/70">
              {selected + 1} / {images.length}
            </div>
            <CommentsSection postSlug="rusija-predavanja" />
          </div>
        </div>
      )}
    </main>
  )
}
