'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

  return result.split('').map((char) => singleMap[char] ?? char).join('')
}

const images = [
  '/static/images/tula-forum-3.jpeg',
  '/static/images/tula-forum-4.jpeg',
  '/static/images/tula-forum-1.jpeg',
  '/static/images/tula-forum-2.jpeg',
  '/static/images/tula-forum-5.jpeg'
]

const srLatin = {
  category: 'Vesti',
  title: 'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI',
  date: 'Objavljeno: 24. april 2026.',
  lead:
    'U Tulskom državnom univerzitetu održan je forum posvećen zajedničkoj borbi naroda protiv nacizma, uz snažan srpski glas i poruku da se istorijska istina ne sme zaboraviti.',
  highlight1: 'SRBI I RUSI NA ISTOJ STRANI ISTORIJE',
  highlight2: 'POBEDA KOJA PRIPADA SVIM NARODIMA',
  paragraphs: [
    '23. aprila 2026. godine u prostorijama Tulskog državnog univerziteta održan je Sversuski forum sa međunarodnim učešćem „Veliki rat – mnogonacionalna pobeda“. Skup je okupio predstavnike trinaest nacionalnih dijaspora, studente, istoričare i inostrane goste, kako bi se još jednom potvrdilo da su u poraz nacizma ugrađeni životi svih naroda Sovjetskog Saveza i njihovih saveznika.',

    'Otvarajući forum u prepunoj sali Naučno-istraživačkog centra BioHemTeh, zamenik guvernera Tulske oblasti Aleksej Faritovič Davletšin i prorektorka TulGU Marina Olegovna Panferova istakli su da ovakvi susreti nisu puko odavanje počasti prošlosti, već najvažniji instrument odbrane istorijske istine u vremenima kada neko uporno pokušava da je prekraja.',

    'Geografija učesnika ove godine bila je šira: zahvaljujući video-linku, sa Tulom su se povezale Nemačka i Srbija. Nemački profesor Štefan Bolinger napomenuo je da je važno sačuvati antifašizam i boriti se protiv današnjeg nacizma, koji je sve jači u Evropi.',

    'Posebno snažan emotivni odjek među prisutnima izazvali su nastupi predstavnika bratskog srpskog naroda – Bojana Vulina i studentkinje Beogradskog univerziteta Dijane Tošić.',

    'Sekretar Ruskog istorijskog društva u Srbiji i Republici Srpskoj Bojan Vulin obratio se učesnicima nadahnutim govorom, u kome je povukao istorijsku paralelu od Prvog srpskog ustanka do specijalne vojne operacije.',

    '„Nas, Srbe i Ruse, često pokušavaju da predstave drugačije, ali mi nikada nismo bili među onima koji ratuju protiv istine,“ naglasio je gospodin Vulin. „Kada su od nas tražili da ratujemo protiv Rusije ili da joj uvedemo sankcije, Srbija je uvek odgovarala velikim NE. Naše narode vezuju zajednička krv, zajednička vera i, što je najvažnije, zajednička sudbina u rovovima.“',

    'Bojan Vulin podsetio je okupljene u Tuli na malo poznatu činjenicu o forsiranju Dunava od strane Crvene armije kod srpskog grada Kladova. „Kada gledate u Dunav, nemojte se sećati bečkih valcera, već kako su ruski vojnik i jugoslovenski partizan zajedno jurišali uz poklič ’URA!’, oslobađajući našu zemlju. Sremski front, bitka za Beograd – tu slobodu platili smo zajedničkim kostima,“ poručio je istoričar.',

    'Posebno oštro Vulin je govorio o pokušajima savremene Evrope da prekraja ishode rata: „Nas ne peče savest zato što smo bili agresori, jer to nikada nismo ni bili. Bili smo oslobodioci. I kako je rekao maršal Žukov: ’Nikada nam neće oprostiti što smo ih oslobodili.’ Tu nezahvalnost Srbi i Rusi osećaju na svojoj koži i danas.“',

    'Ništa manji utisak ostavio je video-nastup studentkinje Dijane Tošić. Njen referat bio je posvećen doprinosu jugoslovenskog otpora zajedničkoj pobedi i stradanju civilnog stanovništva.',

    '„Za moj narod Drugi svetski rat nije samo stranica u udžbeniku. To je svakodnevna borba za život i dostojanstvo pod okupatorskom čizmom,“ rekla je Dijana. „Narodi Jugoslavije jasno su stali na stranu Sovjetskog Saveza. To nije bio samo politički, već i duboko ljudski izbor.“',

    'Studentkinja je podsetila slušaoce da je cena slobode za Jugoslaviju bila stravična. Posebno se osvrnula na tragediju logora Jasenovac, nazvavši ga „simbolom stradanja nevinih ljudi“.',

    '„Danas smo mi, mladi, dužni da pamtimo tu solidarnost,“ istakla je Dijana Tošić. „Pobeda u Drugom svetskom ratu bila je zajednička. Upravo ta nit, skovana u krvi, povezuje naše narode i danas. Sećanje na rat – to je naša odgovornost za budući mir.“',

    'Povodom ovog događaja, profesor Tulskog državnog univerziteta i istoričar Milan Stojanović istakao je značaj očuvanja zajedničkog sećanja.',

    '„Važno je da se u Rusiji čuje da su Srbi učestvovali na strani pobednika u Drugom svetskom ratu. Takođe je važno da se još jednom čuje o našim srpsko-ruskim odnosima kroz vekove, o ruskoj pomoći nama za vreme mnogobrojnih naših ratova za oslobođenje. Ta veza je neraskidiva između naša dva naroda i mi smo dužni da je dalje čuvamo.“',

    'Na kraju foruma, organizatori su izrazili uverenost da će se reči Bojana Vulina pokazati proročkim: „Sunce za nas i dalje izlazi ne sa Zapada, nego sa strane Rusije.“ A to znači da će istorijska istina i sećanje na mnogonacionalni podvig pobednika živeti.',
  ],
}

const ruText = {
  category: 'Новости',
  title: 'ПЛЕЧОМ К ПЛЕЧУ СКВОЗЬ ВЕКА: В ТУЛЕ ПРОШЁЛ ФОРУМ О МНОГОНАЦИОНАЛЬНОЙ ПОБЕДЕ',
  date: 'Опубликовано: 24 апреля 2026 г.',
  lead:
    'В Тульском государственном университете прошёл форум, посвящённый общей борьбе народов против нацизма, с сильным сербским голосом и ясным посланием: историческую правду нельзя забывать.',
  highlight1: 'СЕРБЫ И РУССКИЕ НА ОДНОЙ СТОРОНЕ ИСТОРИИ',
  highlight2: 'ПОБЕДА, ПРИНАДЛЕЖАЩАЯ ВСЕМ НАРОДАМ',
  paragraphs: [
    '23 апреля 2026 года в Тульском государственном университете состоялся Всероссийский форум с международным участием «Великая война – многонациональная победа». Мероприятие объединило представителей тринадцати национальных диаспор, студентов, историков и иностранных гостей, чтобы ещё раз подтвердить: в разгром нацизма были вложены жизни всех народов Советского Союза и их союзников.',

    'Открывая форум в переполненном зале Научно-исследовательского центра БиоХимТех, заместитель губернатора Тульской области Алексей Фаритович Давлетшин и проректор ТулГУ Марина Олеговна Панферова подчеркнули, что такие встречи являются не только данью памяти прошлому, но и важнейшим инструментом защиты исторической правды в эпоху, когда её всё чаще пытаются переписать.',

    'География участников в этом году стала шире: благодаря видеосвязи к Туле присоединились Германия и Сербия. Немецкий профессор Штефан Боллингер отметил важность сохранения антифашизма и борьбы с современным нацизмом, который, по его словам, всё сильнее проявляется в Европе.',

    'Особенно сильный эмоциональный отклик у присутствующих вызвали выступления представителей братского сербского народа – Бояна Вулина и студентки Белградского университета Дианы Тошич.',

    'Секретарь Русского исторического общества в Сербии и Республике Сербской Боян Вулин обратился к участникам с вдохновляющей речью, проведя историческую параллель от Первого сербского восстания до специальной военной операции.',

    '«Нас, сербов и русских, часто пытаются представить иначе, но мы никогда не были среди тех, кто воюет против правды», – подчеркнул господин Вулин. «Когда от нас требовали воевать против России или ввести против неё санкции, Сербия всегда отвечала большим НЕТ. Наши народы связывают общая кровь, общая вера и, что самое важное, общая судьба в окопах».',

    'Боян Вулин напомнил собравшимся в Туле малоизвестный факт о форсировании Дуная Красной армией у сербского города Кладово. «Когда вы смотрите на Дунай, вспоминайте не венские вальсы, а то, как русский солдат и югославский партизан вместе шли в атаку с криком “УРА!”, освобождая нашу страну. Сремский фронт, битва за Белград – эту свободу мы оплатили общими костями», – сказал историк.',

    'Особенно резко Вулин высказался о попытках современной Европы переписать итоги войны: «Нас не мучает совесть за то, что мы были агрессорами, потому что мы ими никогда не были. Мы были освободителями. И, как сказал маршал Жуков: “Они никогда не простят нам того, что мы их освободили”. Эту неблагодарность сербы и русские ощущают на себе и сегодня».',

    'Не меньшее впечатление произвело видео-выступление студентки Дианы Тошич. Её доклад был посвящён вкладу югославского сопротивления в общую победу и страданиям мирного населения.',

    '«Для моего народа Вторая мировая война – это не просто страница в учебнике. Это ежедневная борьба за жизнь и достоинство под сапогом оккупанта», – сказала Диана. «Народы Югославии ясно встали на сторону Советского Союза. Это был не только политический, но и глубоко человеческий выбор».',

    'Студентка напомнила слушателям, что цена свободы для Югославии была страшной. Особое внимание она уделила трагедии лагеря Ясеновац, назвав его «символом страданий невинных людей».',

    '«Сегодня мы, молодые, обязаны помнить эту солидарность», – подчеркнула Диана Тошич. «Победа во Второй мировой войне была общей. Именно эта нить, выкованная в крови, связывает наши народы и сегодня. Память о войне – это наша ответственность за будущий мир».',

    'По случаю этого события профессор Тульского государственного университета и историк Милан Стоянович подчеркнул значение сохранения общей памяти.',

    '«Важно, чтобы в России звучало, что сербы участвовали на стороне победителей во Второй мировой войне. Также важно, чтобы ещё раз прозвучало о наших сербско-русских отношениях сквозь века, о русской помощи нам во время многочисленных войн за освобождение. Эта связь между нашими народами неразрывна, и мы обязаны сохранять её дальше».',

    'В завершение форума организаторы выразили уверенность, что слова Бояна Вулина окажутся пророческими: «Солнце для нас по-прежнему восходит не с Запада, а со стороны России». А это значит, что историческая правда и память о многонациональном подвиге победителей будут жить.',
  ],
}

export default function TulaForumPage() {
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
          <p className="mb-8 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-6 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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
                  ? 'Фотографије са догађаја'
                  : 'Fotografije sa događaja'}
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

        <div className="mt-12">
          <CommentsSection postSlug="tula-forum" />
        </div>
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
          </div>
        </div>
      )}
    </main>
  )
}
