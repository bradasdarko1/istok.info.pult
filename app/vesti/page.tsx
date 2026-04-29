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
  href: '/vesti/dina-blagojevic',
  slug: 'dina-blagojevic',

  category:
    language === 'ru'
      ? 'Новости - 29.04.2026.'
      : script === 'cyr'
        ? 'Вести - 29.04.2026.'
        : 'Vesti - 29.04.2026.',

  title:
    language === 'ru'
      ? 'ДИНА БЛАГОЕВИЧ: СЕРБСКАЯ ФУТБОЛИСТКА В СОСТАВЕ МОСКОВСКОГО «СПАРТАКА»'
      : script === 'cyr'
        ? 'ДИНА БЛАГОЈЕВИЋ: СРПСКА ФУДБАЛЕРКА У ТИМУ РУСКОГ СПАРТАКА'
        : 'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA',

  excerpt:
    language === 'ru'
      ? 'Сербская футболистка Дина Благоевич покоряет Москву вместе со «Спартаком» — история успеха, силы и нового начала.'
      : script === 'cyr'
        ? 'Српска фудбалерка Дина Благојевић осваја Москву са Спартаком — прича о успеху, снази и новом почетку.'
        : 'Srpska fudbalerka Dina Blagojević osvaja Moskvu sa Spartakom — priča o uspehu, snazi i novom početku.',

  image: '/static/images/dina-blagojevic.jpg',
},
    {
  href: '/vesti/intervju-sa-ocem-aleksandra-bijelica',
  slug: 'intervju-sa-ocem-aleksandra-bijelica',

  category:
    language === 'ru'
      ? 'Интервью - 29.04.2026.'
      : script === 'cyr'
        ? 'Интервју - 29.04.2026.'
        : 'Intervju - 29.04.2026.',

  title:
    language === 'ru'
      ? '«СПАСИБО ТЕБЕ, СЫН»: ОТЕЦ ГЕРОЯ АЛЕКСАНДРА БИЕЛИЧА — СЛОВА, КОТОРЫЕ РАЗБИВАЮТ СЕРДЦЕ'
      : script === 'cyr'
        ? '„ХВАЛА ТИ, СИНЕ“ — ОТАЦ ХЕРОЈА АЛЕКСАНДРА БИЈЕЛИЋА: РЕЧИ КОЈЕ ЛЕДЕ КРВ У ЖИЛАМА'
        : '„HVALA TI, SINE“ — OTAC HEROJA ALEKSANDRA BIJELIĆA: REČI KOJE LEDE KRV U ŽILAMA',

  excerpt:
    language === 'ru'
      ? 'Эмоциональное свидетельство отца о сыне-офицере, о чести, боли и гордости. Интервью, которое невозможно прочитать без эмоций.'
      : script === 'cyr'
        ? 'Потресно сведочанство оца о сину официра, о части, болу и поносу. Интервју који никога не оставља равнодушним.'
        : 'Potresno svedočanstvo oca o sinu oficiru, o časti, bolu i ponosu. Intervju koji nikoga ne ostavlja ravnodušnim.',

  image: '/static/images/otac-aleksandra-bijelica.jpeg',
},
    {
  href: '/vesti/pismo-pjer-anri-binel',
  slug: 'pismo-pjer-anri-binel',

  category:
    language === 'ru'
      ? 'Новости - 28.04.2026.'
      : script === 'cyr'
        ? 'Вести - 28.04.2026.'
        : 'Vesti - 28.04.2026.',

  title:
    language === 'ru'
      ? 'ПИСЬМО И ПОСЛАНИЕ ПЬЕРА АНРИ БИНЕЛЯ СЕРБСКОМУ НАРОДУ: СЛОВА ДРУГА, КОТОРЫЙ ВСТАЛ НА СТОРОНУ СЕРБИИ'
      : script === 'cyr'
        ? 'ПИСМО И ПОРУКА ПЈЕРА АНРИЈА БИНЕЛА СРПСКОМ НАРОДУ: РЕЧИ ПРИЈАТЕЉА КОЈИ ЈЕ СТАО УЗ СРБИЈУ'
        : 'PISMO I PORUKA PJERA ANRIJA BINELA SRPSKOM NARODU: REČI PRIJATELJA KOJI JE STAO UZ SRBIJU',

  excerpt:
    language === 'ru'
      ? 'Пьер Анри Бинель оставил сербскому народу сильное послание о чести, правде и дружбе. Слова человека, который не согласился молчать перед несправедливостью.'
      : script === 'cyr'
        ? 'Пјер Анри Бинел оставио је српском народу снажну поруку о части, истини и пријатељству. Речи човека који није пристао да ћути пред неправдом.'
        : 'Pjer Anri Binel ostavio je srpskom narodu snažnu poruku o časti, istini i prijateljstvu. Reči čoveka koji nije pristao da ćuti pred nepravdom.',

  image: '/static/images/pismo-srbiji.jpeg',
},
    {
  href: '/vesti/osnovan-klub-mladih-ruskog-istorijskog-drustva',
  slug: 'osnovan-klub-mladih-ruskog-istorijskog-drustva',

  category:
    language === 'ru'
      ? 'Новости - 28.04.2026.'
      : script === 'cyr'
        ? 'Вести - 28.04.2026.'
        : 'Vesti - 28.04.2026.',

  title:
    language === 'ru'
      ? 'В СЕРБИИ СОЗДАН КЛУБ МОЛОДЁЖИ РОССИЙСКОГО ИСТОРИЧЕСКОГО ОБЩЕСТВА: НОВЫЙ ШАГ В СОХРАНЕНИИ ПАМЯТИ'
      : script === 'cyr'
        ? 'У СРБИЈИ ОСНОВАН КЛУБ МЛАДИХ РУСКОГ ИСТОРИЈСКОГ ДРУШТВА: НОВА СНАГА ЗА ОЧУВАЊЕ ПАМЋЕЊА'
        : 'U SRBIJI OSNOVAN KLUB MLADIH RUSKOG ISTORIJSKOG DRUŠTVA: NOVA SNAGA ZA OČUVANJE PAMĆENJA',

  excerpt:
    language === 'ru'
      ? 'В Белграде прошла учредительная конференция Клуба молодёжи РИО. Молодёжь берёт на себя важную роль в сохранении исторической памяти и укреплении российско-сербских связей.'
      : script === 'cyr'
        ? 'У Београду одржана оснивачка конвенција Клуба младих РИД. Млади преузимају кључну улогу у очувању историјског памћења и јачању српско-руских веза.'
        : 'U Beogradu održana osnivačka konvencija Kluba mladih RID. Mladi preuzimaju ključnu ulogu u očuvanju istorijskog pamćenja i jačanju srpsko-ruskih veza.',

  image: '/static/images/izlozba-7.jpeg',
},
    {
  href: '/vesti/pjer-anri-binel',
  slug: 'pjer-anri-binel',

  category:
    language === 'ru'
      ? 'Новости - 27.04.2026.'
      : script === 'cyr'
        ? 'Вести - 27.04.2026.'
        : 'Vesti - 27.04.2026.',

  title:
    language === 'ru'
      ? 'ФРАНЦУЗ, КОТОРЫЙ РИСКНУЛ ВСЕМ РАДИ СЕРБИИ: ПЬЕР АНРИ БИНЕЛ — НАСТОЯЩИЙ ГЕРОЙ'
      : script === 'cyr'
        ? 'ФРАНЦУЗ КОЈИ ЈЕ РИЗИКОВАО СВЕ ЗБОГ СРБИЈЕ: ПЈЕР АНРИ БИНЕЛ ИСТИНСКИ ХЕРОЈ'
        : 'FRANCUZ KOJI JE RIZIKOVAO SVE ZBOG SRBIJE: PJER ANRI BINEL ISTINSKI HEROJ',

  excerpt:
    language === 'ru'
      ? 'Бывший майор французской военной разведки пожертвовал карьерой, чтобы помочь Сербии в тяжёлые дни. Завтра публикуем и его письмо.'
      : script === 'cyr'
        ? 'Бивши мајор француске војне обавештајне службе жртвовао је каријеру како би помогао Србији у тешким данима. Сутра објављујемо и његово писмо.'
        : 'Bivši major francuske vojne obaveštajne službe žrtvovao je karijeru kako bi pomogao Srbiji u teškim danima. Sutra objavljujemo i njegovo pismo.',

  image: '/static/images/pjer.jpeg',
},
    {
  href: '/vesti/balkanski-most-u-ivanovu',
  slug: 'balkanski-most-u-ivanovu',

  category:
    language === 'ru'
      ? 'Новости - 27.04.2026.'
      : script === 'cyr'
        ? 'Вести - 27.04.2026.'
        : 'Vesti - 27.04.2026.',

  title:
    language === 'ru'
      ? 'СЕРБСКИЙ ИСТОРИК ПОКОРИЛ РОССИЮ: МИЛАН СТОЯНОВИЧ В ИВАНОВО ПРЕДСТАВИЛ КНИГУ'
      : script === 'cyr'
        ? 'СРПСКИ ИСТОРИЧАР ОДУШЕВИО РУСИЈУ: МИЛАН СТОЈАНОВИЋ У ИВАНОВУ ПРЕДСТАВИО КЊИГУ'
        : 'SRPSKI ISTORIČAR ODUŠEVIO RUSIJU: MILAN STOJANOVIĆ U IVANOVU PREDSTAVIO KNJIGU',

  excerpt:
    language === 'ru'
      ? 'На форуме «Балканский мост» в Иваново Милан Стоянович представил книгу «Балкан: история и перспективы» и вызвал большой интерес публики.'
      : script === 'cyr'
        ? 'На форуму „Балкански мост“ у Иванову Милан Стојановић представио је књигу „Балкан: историја и перспективе“ и изазвао велико интересовање публике.'
        : 'Na forumu „Balkanski most“ u Ivanovu Milan Stojanović predstavio je knjigu „Balkan: istorija i perspektive“ i izazvao veliko interesovanje publike.',

  image: '/static/images/ivanovo-3.jpeg',
},
    {
  href: '/vesti/slucaj-banjska',
  slug: 'slucaj-banjska',

  category:
    language === 'ru'
      ? 'Новости - 25.04.2026.'
      : script === 'cyr'
        ? 'Вести - 25.04.2026.'
        : 'Vesti - 25.04.2026.',

  title:
    language === 'ru'
      ? 'ПОЖИЗНЕННЫЕ ПРИГОВОРЫ ПОТРЯСЛИ СЕРБСКИЙ НАРОД: ВРЕМЯ ЕДИНСТВА И ПОДДЕРЖКИ'
      : script === 'cyr'
        ? 'ДОЖИВОТНЕ КАЗНЕ ПОТРЕСЛЕ СРПСКИ НАРОД: ВРЕМЕ ЈЕ ЗА ЈЕДИНСТВО И ПОДРШКУ'
        : 'DOŽIVOTNE KAZNE POTRESLE SRPSKI NAROD: VREME JE ZA JEDINSTVO I PODRŠKU',

  excerpt:
    language === 'ru'
      ? 'Вынесенные приговоры Благою Спасоевичу, Владимиру Толичу и Душану Максимовичу вызвали сильный отклик среди сербов.'
      : script === 'cyr'
        ? 'Изречене пресуде Благоју Спасојевићу, Владимиру Толићу и Душану Максимовићу снажно су одјекнуле међу Србима.'
        : 'Izrečene presude Blagoju Spasojeviću, Vladimiru Toliću i Dušanu Maksimoviću snažno su odjeknule među Srbima.',

  image: '/static/images/banjska.jpg',
},
    {
  href: '/vesti/madjarski-izbori-i-buducnost-desnice',
  slug: 'madjarski-izbori-i-buducnost-desnice',

  category:
    language === 'ru'
      ? 'Новости - 24.04.2026.'
      : script === 'cyr'
        ? 'Вести - 24.04.2026.'
        : 'Vesti - 24.04.2026.',

  title:
    language === 'ru'
      ? 'В НОВОМ САДУ СОСТОИТСЯ ТРИБУНА О ВЫБОРАХ В ВЕНГРИИ И БУДУЩЕМ ПРАВЫХ СИЛ'
      : script === 'cyr'
        ? 'У НОВОМ САДУ ТРИБИНА О МАЂАРСКИМ ИЗБОРИМА И БУДУЋНОСТИ ДЕСНИЦЕ'
        : 'U NOVOM SADU TRIBINA O MAĐARSKIM IZBORIMA I BUDUĆNOSTI DESNICE',

  excerpt:
    language === 'ru'
      ? '25 апреля в Исток Инфо Пулт пройдет открытая трибуна с участием др Душана Достанића.'
      : script === 'cyr'
        ? '25. априла у Исток Инфо Пулту биће одржана отворена трибина уз учешће др Душана Достанића.'
        : '25. aprila u Istok Info Pultu biće održana otvorena tribina uz učešće dr Dušana Dostanića.',

  image: '/static/images/dusan-dostanic.jpeg',
},
    {
  href: '/vesti/spomenik-nikolaju-u-srbiji',
  slug: 'spomenik-nikolaju-u-srbiji',

  category:
    language === 'ru'
      ? 'Новости - 24.04.2026.'
      : script === 'cyr'
        ? 'Вести - 24.04.2026.'
        : 'Vesti - 24.04.2026.',

  title:
    language === 'ru'
      ? 'В МОСКВЕ ПРЕДСТАВЛЕН ПАМЯТНИК РУССКОМУ ГЕРОЮ, КОТОРЫЙ БУДЕТ УСТАНОВЛЕН В СЕРБИИ'
      : script === 'cyr'
        ? 'У МОСКВИ ПРЕДСТАВЉЕН СПОМЕНИК РУСКОМ ХЕРОЈУ КОЈИ ЋЕ БИТИ ПОДИГНУТ У СРБИЈИ'
        : 'U MOSKVI PREDSTAVLJEN SPOMENIK RUSKOM HEROJU KOJI ĆE BITI PODIGNUT U SRBIJI',

  excerpt:
    language === 'ru'
      ? 'Память о полковнике Николае Раевском, русском герое, отдавшем жизнь за Сербию, получает новое воплощение в памятнике, представленном в Москве.'
      : script === 'cyr'
        ? 'Сећање на пуковника Николаја Рајевског, руског хероја који је положио живот за Србију, добија ново обележје кроз споменик представљен у Москви.'
        : 'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.',

  image: '/static/images/spomenik-nikolaju.jpeg',
},
    {
  href: '/vesti/tula-forum',
  slug: 'tula-forum',

  category:
    language === 'ru'
      ? 'Новости - 24.04.2026.'
      : script === 'cyr'
        ? 'Вести - 24.04.2026.'
        : 'Vesti - 24.04.2026.',

  title:
    language === 'ru'
      ? 'ПЛЕЧОМ К ПЛЕЧУ СКВОЗЬ ВЕКА: В ТУЛЕ ПРОШЁЛ ФОРУМ О МНОГОНАЦИОНАЛЬНОЙ ПОБЕДЕ'
      : script === 'cyr'
        ? 'РАМЕ УЗ РАМЕ КРОЗ ВЕКОВЕ: У ТУЛИ ОДРЖАН ФОРУМ О МНОГОНАЦИОНАЛНОЈ ПОБЕДИ'
        : 'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI',

  excerpt:
    language === 'ru'
      ? 'В Тульском государственном университете прошёл международный форум о совместной победе над нацизмом, где прозвучали сильные выступления представителей Сербии.'
      : script === 'cyr'
        ? 'У Тулском државном универзитету одржан је међународни форум о заједничкој победи над нацизмом, где су снажне говоре одржали представници Србије.'
        : 'U Tulskom državnom univerzitetu održan je međunarodni forum o zajedničkoj pobedi nad nacizmom, gde su snažne govore održali predstavnici Srbije.',

  image: '/static/images/tula-forum-3.jpeg',
},
    {
  href: '/vesti/otvaranje-ruskog-konzulata-u-novom-sadu',
  slug: 'otvaranje-ruskog-konzulata-u-novom-sadu',

  category:
    language === 'ru'
      ? 'Новости - 23.04.2026.'
      : script === 'cyr'
        ? 'Вести - 23.04.2026.'
        : 'Vesti - 23.04.2026.',

  title:
    language === 'ru'
      ? 'НОВИ-САД ПОЛУЧИЛ ПОЧЁТНОЕ КОНСУЛЬСТВО РОССИИ'
      : script === 'cyr'
        ? 'НОВИ САД ДОБИО ПОЧАСНИ КОНЗУЛАТ РУСИЈЕ'
        : 'NOVI SAD DOBIO POČASNI KONZULAT RUSIJE',

  excerpt:
  language === 'ru'
    ? 'Торжественное открытие Почётного консульства Российской Федерации прошло на улице Бранка Баича, дом 2, при участии церковных иерархов, дипломатических представителей и многочисленных гостей.'
    : script === 'cyr'
      ? 'Свечано отварање Почасног конзулата Руске Федерације одржано је у улици Бранка Бајића број 2, уз присуство црквених великодостојника, дипломатских званичника и бројних гостију.'
      : 'Svečano otvaranje Počasnog konzulata Ruske Federacije održano je u ulici Branka Bajića broj 2, uz prisustvo crkvenih velikodostojnika, diplomatskih zvaničnika i brojnih gostiju.',
  image: '/static/images/otvaranje-ruskog-konzulata.jpeg',
},
    {
  href: '/konkursi/letnji-univerzitet',
  slug: 'letnji-univerzitet',

  category:
    language === 'ru'
      ? 'Конкурсы - 23.04.2026.'
      : script === 'cyr'
        ? 'Конкурси - 23.04.2026.'
        : 'Konkursi - 23.04.2026.',

  title:
    language === 'ru'
      ? 'ЛЕТНИЙ УНИВЕРСИТЕТ В РОССИИ ОТКРЫВАЕТ ДВЕРИ ИНОСТРАННЫМ СТУДЕНТАМ'
      : script === 'cyr'
        ? 'ЛЕТЊИ УНИВЕРЗИТЕТ У РУСИЈИ ОТВАРА ВРАТА СТРАНИМ СТУДЕНТИМА'
        : 'LETNJI UNIVERZITET U RUSIJI OTVARA VRATA STRANIM STUDENTIMA',

  excerpt:
    language === 'ru'
      ? 'Международная программа для студентов выпускных курсов. Проезд, проживание, питание и экскурсии оплачиваются.'
      : script === 'cyr'
        ? 'Међународни програм за студенте завршних година. Пут, смештај, исхрана и екскурзије су покривени.'
        : 'Međunarodni program za studente završnih godina. Put, smeštaj, ishrana i ekskurzije su pokriveni.',

  image: '/static/images/letnji-univerzitet.jpeg',
},
    {
  href: '/vesti/aleksandar-bijelic',
  slug: 'aleksandar-bijelic',

  category:
    language === 'ru'
      ? 'Новости - 22.04.2026.'
      : script === 'cyr'
        ? 'Вести - 22.04.2026.'
        : 'Vesti - 22.04.2026.',

  title:
    language === 'ru'
      ? 'СЕРБСКИЙ ОФИЦЕР, ПОГИБШИЙ КАК ГЕРОЙ'
      : script === 'cyr'
        ? 'СРПСКИ ОФИЦИР КОЈИ ЈЕ ПОГИНУО КАО ХЕРОЈ'
        : 'SRPSKI OFICIR KOJI JE POGINUO KAO HEROJ',

  excerpt:
    language === 'ru'
      ? 'Имя Александра Биелича остаётся символом чести, жертвы и верности долгу.'
      : script === 'cyr'
        ? 'Име Александра Бијелића остаје симбол части, жртве и верности дужности.'
        : 'Ime Aleksandra Bijelića ostaje simbol časti, žrtve i vernosti dužnosti.',

  image: '/static/images/aleksandar-bijelic.jpeg',
},
    {
  href: '/vesti/ruski-konzulat',
  slug: 'ruski-konzulat',

  category:
    language === 'ru'
      ? 'Новости - 22.04.2026.'
      : script === 'cyr'
        ? 'Вести - 22.04.2026.'
        : 'Vesti - 22.04.2026.',

  title:
    language === 'ru'
      ? 'В НОВОМ САДУ ОТКРЫВАЕТСЯ ПОЧЁТНОЕ КОНСУЛЬСТВО РОССИИ'
      : script === 'cyr'
        ? 'У НОВОМ САДУ СЕ ОТВАРА ПОЧАСНИ КОНЗУЛАТ РУСИЈЕ'
        : 'U NOVOM SADU SE OTVARA POČASNI KONZULAT RUSIJE',

  excerpt:
    language === 'ru'
      ? 'Открытие Почётного консульства России укрепляет дипломатические и экономические связи между Сербией и Россией.'
      : script === 'cyr'
        ? 'Отварање Почасног конзулата Русије јача дипломатске и економске везе између Србије и Русије.'
        : 'Otvaranje Počasnog konzulata Rusije jača diplomatske i ekonomske veze između Srbije i Rusije.',

  image: '/static/images/ruski-konzulat.jpeg',
},
    {
  href: '/konkursi/letnji-institut',
  slug: 'letnji-institut',

  category:
    language === 'ru'
      ? 'Конкурсы - 21.04.2026.'
      : script === 'cyr'
        ? 'Конкурси - 21.04.2026.'
        : 'Konkursi - 21.04.2026.',

  title:
    language === 'ru'
      ? 'ЛЕТНИЙ ИНСТИТУТ ОТКРЫВАЕТ ДВЕРИ ДЛЯ МОЛОДЫХ УЧЕНЫХ'
      : script === 'cyr'
        ? 'ЛЕТЊИ ИНСТИТУТ ОТВАРА ВРАТА МЛАДИМ НАУЧНИЦИМА'
        : 'LETNJI INSTITUT OTVARA VRATA MLADIM NAUČNICIMA',

  excerpt:
    language === 'ru'
      ? 'Программа в России для преподавателей и исследователей до 35 лет. Все расходы покрываются организаторами.'
      : script === 'cyr'
        ? 'Програм у Русији за наставнике и истраживаче до 35 година. Све трошкове покривају организатори.'
        : 'Program u Rusiji za nastavnike i istraživače do 35 godina. Sve troškove pokrivaju organizatori.',

  image: '/static/images/letnji-institut.jpeg',
},
    {
       href: '/vesti/rusija-otvara-vrata',
  slug: 'rusija-otvara-vrata',

  category:
    language === 'ru'
      ? 'Новости - 21.04.2026.'
      : script === 'cyr'
        ? 'Вести - 21.04.2026.'
        : 'Vesti - 21.04.2026.',

  title:
    language === 'ru'
      ? 'РОССИЯ ОТКРЫВАЕТ ДВЕРИ ДЛЯ ИНОСТРАННЫХ ЭКСПЕРТОВ'
      : script === 'cyr'
        ? 'РУСИЈА ОТВАРА ВРАТА СТРАНИМ СТРУЧЊАЦИМА'
        : 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',

  excerpt:
    language === 'ru'
      ? 'Запущен новый цифровой сервис для привлечения иностранных специалистов.'
      : script === 'cyr'
        ? 'Отворена је нова дигитална услуга за привлачење страних стручњака.'
        : 'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka.',

  image: '/static/images/rusija-otvara-vrata.jpeg',


    },
    {
      href: '/vesti/fondacija-gorcakov',
  slug: 'fondacija-gorcakov',

  category:
    language === 'ru'
      ? 'Новости - 20.04.2026.'
      : script === 'cyr'
        ? 'Вести - 20.04.2026.'
        : 'Vesti - 20.04.2026.',

  title:
    language === 'ru'
      ? 'БЕЛГРАД СТАНЕТ ПЛОЩАДКОЙ БУДУЩЕГО: ОТКРЫТ ПРИЁМ ЗАЯВОК НА «БАЛКАНСКИЙ ДИАЛОГ 2026»'
      : script === 'cyr'
        ? 'БЕОГРАД ДОМАЋИН БУДУЋНОСТИ: ОТВОРЕНЕ ПРИЈАВЕ ЗА БАЛКАНСКИ ДИЈАЛОГ 2026'
        : 'BEOGRAD DOMAĆIN BUDUĆNOSTI: OTVORENE PRIJAVE ZA BALKANSKI DIJALOG 2026',

  excerpt:
    language === 'ru'
      ? 'Фонд Горчакова открывает приём заявок на ежегодную образовательную программу «Балканский Диалог – 2026», которая пройдёт со 2 по 6 июня в Белграде.'
      : script === 'cyr'
        ? 'Фондација Горчаков отвара пријаве за годишњи образовни програм „Балкански Дијалог – 2026“, који ће се одржати од 2. до 6. јуна у Београду.'
        : 'Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.',

  image: '/static/images/dijalog.jpeg',

    },
    
    {
  href: '/bioskop/najave',
  slug: 'noc-na-zaporoskom-frontu',

  category:
    language === 'ru'
      ? 'Кино - 20.04.2026.'
      : script === 'cyr'
        ? 'Биоскоп - 20.04.2026.'
        : 'Bioskop - 20.04.2026.',

  title:
    language === 'ru'
      ? 'НОЧЬ НА ЗАПОРОЖСКОМ ФРОНТЕ'
      : script === 'cyr'
        ? 'НОЋ НА ЗАПОРОШКОМ ФРОНТУ'
        : 'NOĆ NA ZAPOROŠKOM FRONTU',

  excerpt:
    language === 'ru'
      ? 'Премьерный показ фильма состоится во вторник, 21.04, в 20:00 в кинотеатре ISTOK INFO PULT. Приглашаем всех любителей кино на торжественный показ.'
      : script === 'cyr'
        ? 'Премијерна пројекција филма биће одржана у уторак 21.04. од 20:00 часова у биоскопу ISTOK INFO PULT. Позивамо све љубитеље филма на свечану пројекцију.'
        : 'Premijerna projekcija filma biće održana u utorak 21.04. od 20:00 časova u bioskopu ISTOK INFO PULT. Pozivamo sve ljubitelje filma na svečanu projekciju.',

  image: '/static/images/bioskop.jpg',
},
    {
  href: '/vesti/novi-sad-ustao',
  slug: 'novi-sad-ustao',

  category:
    language === 'ru'
      ? 'Новости - 20.04.2026.'
      : script === 'cyr'
        ? 'Вести - 20.04.2026.'
        : 'Vesti - 20.04.2026.',

  title:
    language === 'ru'
      ? 'НОВИ-САД ПОДНЯЛСЯ РАДИ ПАМЯТИ'
      : script === 'cyr'
        ? 'НОВИ САД УСТАО ЗА ПАМЋЕЊЕ'
        : 'NOVI SAD USTAO ZA PAMĆENJE',

  excerpt:
    language === 'ru'
      ? 'За последние четыре дня гражданские объединения провели масштабную акцию на рынках Нови-Сада. Уже в среду новая акция состоится на стадионе Караджордже.'
      : script === 'cyr'
        ? 'Током претходна четири дана грађанска удружења спровела су велику акцију на пијацама Новог Сада. Већ у среду следи нова акција на стадиону Карађорђе.'
        : 'Tokom prethodna četiri dana građanska udruženja sprovela su veliku akciju na pijacama Novog Sada. Već u sredu sledi nova akcija na stadionu Karađorđe.',

  image: '/static/images/pijaca-2.jpeg',
},
    {
  href: '/vesti/balkanski-most',
  slug: 'balkanski-most',

  category:
    language === 'ru'
      ? 'Новости - 16.04.2026.'
      : script === 'cyr'
        ? 'Вести - 16.04.2026.'
        : 'Vesti - 16.04.2026.',

  title:
    language === 'ru'
      ? 'БАЛКАНСКИЙ МОСТ ПАМЯТИ'
      : script === 'cyr'
        ? 'БАЛКАНСКИ МОСТ СЕЋАЊА'
        : 'BALKANSKI MOST SEĆANJA',

  excerpt:
    language === 'ru'
      ? 'В Тульском государственном университете впервые в России был показан фильм «Усташский Алказар», а также обсуждены общие корни геноцида над славянскими народами.'
      : script === 'cyr'
        ? 'На Тулском државном универзитету премијерно је у Русији приказан филм „Усташки Алказар“, уз разговор о заједничким коренима геноцида над словенским народима.'
        : 'Na Tulskom državnom univerzitetu premijerno je u Rusiji prikazan film „Ustaški Alkazar“, uz razgovor o zajedničkim korenima genocida nad slovenskim narodima.',

  image: '/static/images/balkanski-most-1.jpeg',
},
    {
  href: '/vesti/zbog-ljubavi-otisao-u-rusiju',
  slug: 'zbog-ljubavi-otisao-u-rusiju',

  category:
    language === 'ru'
      ? 'Новости - 16.04.2026.'
      : script === 'cyr'
        ? 'Вести - 16.04.2026.'
        : 'Vesti - 16.04.2026.',

  title:
    language === 'ru'
      ? 'ИЗ-ЗА ЛЮБВИ ОН УЕХАЛ В РОССИЮ'
      : script === 'cyr'
        ? 'ЗБОГ ЉУБАВИ ОТИШАО У РУСИЈУ'
        : 'ZBOG LJUBAVI OTIŠAO U RUSIJU',

  excerpt:
    language === 'ru'
      ? 'Интервью с Миланом Стояновичем о жизни в России, Сербии, молодёжи, вере, призвании и прочных связях двух братских народов.'
      : script === 'cyr'
        ? 'Интервју са Миланом Стојановићем о животу у Русији, Србији, младима, вери, позиву и снажним везама два братска народа.'
        : 'Intervju sa Milanom Stojanovićem o životu u Rusiji, Srbiji, mladima, veri, pozivu i snažnim vezama dva bratska naroda.',

  image: '/static/images/zbog-ljubavi-rusija-1.jpeg',
},
    {
      href: '/vesti/peticija-riblja',
      slug: 'peticija-riblja',

      category:
        language === 'ru'
          ? 'Новости - 15.04.2026.'
          : script === 'cyr'
            ? 'Вести - 15.04.2026.'
            : 'Vesti - 15.04.2026.',

      title:
        language === 'ru'
          ? 'СБОР ПОДПИСЕЙ НА РЫБНОМ РЫНКЕ В НОВИ-САДЕ – 16 АПРЕЛЯ С 9:00'
          : script === 'cyr'
            ? 'ПОТПИСИВАЊЕ ПЕТИЦИЈЕ НА РИБЉОЈ ПИЈАЦИ У НОВОМ САДУ'
            : 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',

      excerpt:
        language === 'ru'
          ? 'Организация Istok Info Pult приглашает жителей Нови-Сада 16 апреля с 9:00 на Рыбный рынок, чтобы поддержать инициативу по установке памятника жертвам агрессии НАТО.'
          : script === 'cyr'
            ? 'Организација Исток Инфо Пулт позива грађане Новог Сада да 16. априла од 9 часова на Рибљој пијаци подрже иницијативу за подизање споменика жртвама НАТО агресије.'
            : 'Organizacija Istok Info Pult poziva građane Novog Sada da 16. aprila od 9 časova na Ribljoj pijaci podrže inicijativu za podizanje spomenika žrtvama NATO agresije.',

      image: '/static/images/riblja-share.jpg',
    },
    {
      href: '/vesti/peticija-spomenik',
      slug: 'peticija-spomenik',

      category:
        language === 'ru'
          ? 'Новости - 14.04.2026.'
          : script === 'cyr'
            ? 'Вести - 14.04.2026.'
            : 'Vesti - 14.04.2026.',

      title:
        language === 'ru'
          ? 'СБОР ПОДПИСЕЙ НА РЫНКАХ НОВИ-САДА'
          : script === 'cyr'
            ? 'ПОТПИСИВАЊЕ ПЕТИЦИЈЕ НА ПИЈАЦАМА У НОВОМ САДУ'
            : 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',

      excerpt:
        language === 'ru'
          ? 'Организация Istok Info Pult продолжает свою гражданскую инициативу и приглашает всех жителей Нови-Сада и людей доброй воли поддержать сбор подписей за установку памятника жертвам агрессии НАТО.'
          : script === 'cyr'
            ? 'Организација Исток Инфо Пулт наставља своју грађанску иницијативу и позива све Новосађане и људе добре воље да дају свој потпис подршке за подизање споменика жртвама НАТО агресије.'
            : 'Organizacija Istok Info Pult nastavlja svoju građansku inicijativu i poziva sve Novosađane i ljude dobre volje da daju svoj potpis podrške za podizanje spomenika žrtvama NATO agresije.',

      image: '/static/images/pijaca.jpg',
    },
    {
      href: '/vesti/izbori-madjarska',
      slug: 'izbori-madjarska',

      category:
        language === 'ru'
          ? 'Новости - 13.04.2026.'
          : script === 'cyr'
            ? 'Вести - 13.04.2026.'
            : 'Vesti - 13.04.2026.',

      title:
        language === 'ru'
          ? 'ВЕНГР ЗАВОЕВАЛ ВЕНГРИЮ'
          : script === 'cyr'
            ? 'МАЂАР ОСВОЈИО МАЂАРСКУ'
            : 'MAĐAR OSVOJIO MAĐARSKU',

      excerpt:
        language === 'ru'
          ? 'Смена Орбана после 16 лет у власти и почетак новой политической эпохи в Венгрии.'
          : script === 'cyr'
            ? 'Смена Орбана након 16 година на власти и почетак нове политичке етапе у Мађарској.'
            : 'Smena Orbana nakon 16 godina na vlasti i početak nove političke etape u Mađarskoj.',

      image: '/static/images/madjarska.jpg',
    },
    {
      href: 'vesti/hristos-voskrese',
      slug: 'hristos-voskrese',

      category:
        language === 'ru'
          ? 'Новости - 12.04.2026.'
          : script === 'cyr'
            ? 'Вести - 12.04.2026.'
            : 'Vesti - 12.04.2026.',

      title:
        language === 'ru'
          ? 'СВЕТ ВОСКРЕСЕНИЯ ПРИНОСИТ НАДЕЖДУ И НОВОЕ НАЧАЛО'
          : script === 'cyr'
            ? 'СВЕТЛО ВАСКРСЕЊА ДОНОСИ НАДУ И НОВИ ПОЧЕТАК'
            : 'SVETLO VASKRSENJA DONOSI NADU I NOVI POČETAK',

      excerpt:
        language === 'ru'
          ? 'Православные верующие по всему миру сегодня отмечают величайший христианский праздник — Пасху, день победы жизни над смертью, света над тьмой и веры над отчаянием.'
          : script === 'cyr'
            ? 'Православни верници широм света данас обележавају највећи хришћански праник - Васкрс, дан победе живота над смрћу, светлости над тамом и вере над безнађем.'
            : 'Pravoslavni vernici širom sveta danas obeležavaju najveći hrišćanski praznik – Vaskrs, dan pobede života nad smrću, svetlosti nad tamom i vere nad beznađem.',

      image: '/static/images/vaskrs.jpeg',
    },
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

      <div className="mt-12 xl:pr-[300px]">
        <h2 className="mb-5 text-2xl font-bold uppercase tracking-wide text-yellow-400 sm:text-3xl">
          {language === 'ru'
            ? 'БИБЛИОТЕКА'
            : script === 'cyr'
              ? 'БИБЛИОТЕКА'
              : 'BIBLIOTEKA'}
        </h2>

        <Link href="/biblioteka">
          <div className="overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)]">
              <div className="h-[280px] md:h-full">
                <img
                  src="/static/images/istorija-srpsko-ruskih-odnosa.jpg"
                  alt={
                    language === 'ru'
                      ? 'История сербско-русских политических отношений'
                      : script === 'cyr'
                        ? 'Историја српско-руских политичких односа'
                        : 'Istorija srpsko-ruskih političkih odnosa'
                  }
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                  {language === 'ru'
                    ? 'НОВО У БИБЛИОТЕЦИ'
                    : script === 'cyr'
                      ? 'НОВО У БИБЛИОТЕЦИ'
                      : 'NOVO U BIBLIOTECI'}
                </p>

                <h3 className="mb-3 text-xl font-bold uppercase text-white sm:text-3xl">
                  {language === 'ru'
                    ? 'ИСТОРИЯ СЕРБСКО-РУССКИХ ПОЛИТИЧЕСКИХ ОТНОШЕНИЙ'
                    : script === 'cyr'
                      ? 'ИСТОРИЈА СРПСКО-РУСКИХ ПОЛИТИЧКИХ ОДНОСА'
                      : 'ISTORIJA SRPSKO-RUSKIH POLITIČKIH ODNOSA'}
                </h3>

                <p className="mb-5 text-sm leading-7 text-white/75 sm:text-base">
                  {language === 'ru'
                    ? 'Книга о развитии политических и исторических связей между сербским и русским народами, от XVIII века до современности.'
                    : script === 'cyr'
                      ? 'Књига о развоју политичких и историјских веза између српског и руског народа, од XVIII века до савременог доба.'
                      : 'Knjiga o razvoju političkih i istorijskih veza između srpskog i ruskog naroda, od XVIII veka do savremenog doba.'}
                </p>

                <div>
                  <span className="inline-block rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300">
                    {language === 'ru'
                      ? 'ОТВОРИ БИБЛИОТЕКУ'
                      : script === 'cyr'
                        ? 'ОТВОРИ БИБЛИОТЕКУ'
                        : 'OTVORI BIBLIOTEKU'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
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
