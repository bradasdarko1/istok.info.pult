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
  href: '/vesti/vas-proizvod-na-putu-ka-rusiji',
  slug: 'vas-proizvod-na-putu-ka-rusiji',

  category:
    language === 'ru'
      ? 'Новости - 22.05.2026.'
      : script === 'cyr'
        ? 'Вести - 22.05.2026.'
        : 'Vesti - 22.05.2026.',

  title:
    language === 'ru'
      ? 'ВАШ ПРОДУКТ НА ПУТИ В РОССИЮ — ОТКРЫТ КОНКУРС ДЛЯ БИЗНЕСА И ИНОВАТОРОВ'
      : script === 'cyr'
        ? 'ВАШ ПРОИЗВОД НА ПУТУ КА РУСИЈИ — ОТВОРЕН КОНКУРС ЗА БИЗНИС И ИНОВАТОРЕ'
        : 'VAŠ PROIZVOD NA PUTU KA RUSIJI — OTVOREN KONKURS ZA BIZNIS I INOVATORE',

  excerpt:
    language === 'ru'
      ? 'Открыт конкурс для компаний, стартапов и частных лиц, желающих представить свои продукты и идеи партнёрам из России и выйти на новое рынок.'
      : script === 'cyr'
        ? 'Отворен је конкурс за компаније, стартапове и појединце који желе да представе своје производе и идеје партнерима из Русије и изађу на ново тржиште.'
        : 'Otvoren je konkurs za kompanije, startapove i pojedince koji žele da predstave svoje proizvode i ideje partnerima iz Rusije i izađu na novo tržište.',

  image: '/static/images/saradnja-sa-rusijom.jpeg',
},
{
  href: '/vesti/srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan',
  slug: 'srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan',

  category:
    language === 'ru'
      ? 'Новости - 07.07.2026.'
      : script === 'cyr'
        ? 'Вести - 07.07.2026.'
        : 'Vesti - 07.07.2026.',

  title:
    language === 'ru'
      ? 'СЕРБСКАЯ ПРАВОСЛАВНАЯ ЦЕРКОВЬ ОТМЕЧАЕТ ИВАНОВ ДЕНЬ — РОЖДЕСТВО СВЯТОГО ИОАННА ПРЕДТЕЧИ'
      : script === 'cyr'
        ? 'СРПСКА ПРАВОСЛАВНА ЦРКВА ДАНАС ПРОСЛАВЉА ИВАЊДАН – РОЂЕЊЕ СВЕТОГ ЈОВАНА ПРЕТЕЧЕ'
        : 'SRPSKA PRAVOSLAVNA CRKVA DANAS PROSLAVLJA IVANJDAN – ROĐENJE SVETOG JOVANA PRETEČE',

  excerpt:
    language === 'ru'
      ? 'Сегодня Сербская Православная Церковь празднует Иванов день — Рождество святого Иоанна Предтечи, великого пророка, крестившего Иисуса Христа в реке Иордан и возвестившего Его пришествие.'
      : script === 'cyr'
        ? 'Српска православна црква и верници данас прослављају Ивањдан, празник посвећен Рођењу Светог Јована Претече, великог пророка који је крстио Исуса Христа у реци Јордан.'
        : 'Srpska pravoslavna crkva i vernici danas proslavljaju Ivanjdan, praznik posvećen Rođenju Svetog Jovana Preteče, velikog proroka koji je krstio Isusa Hrista u reci Jordan.',

  image: '/static/images/sveti-jovan.jpeg',
},
{
  href: '/vesti/crkva-samodreza',
  slug: 'crkva-samodreza',

  category:
    language === 'ru'
      ? 'Новости - 30.06.2026.'
      : script === 'cyr'
        ? 'Вести - 30.06.2026.'
        : 'Vesti - 30.06.2026.',

  title:
    language === 'ru'
      ? 'ЦЕРКОВЬ САМОДРЕЖА — СВЯТЫНЯ, ГДЕ, СОГЛАСНО ПРЕДАНИЮ, КНЯЗЬ ЛАЗАРЬ ПРИЧАСТИЛСЯ ПЕРЕД КОСОВСКОЙ БИТВОЙ'
      : script === 'cyr'
        ? 'ЦРКВА САМОДРЕЖА – СВЕТИЊА У КОЈОЈ СЕ, ПРЕМА ПРЕДАЊУ, КНЕЗ ЛАЗАР ПРИЧЕСТИО ПРЕД КОСОВСКИ БОЈ'
        : 'CRKVA SAMODREŽA – SVETINJA U KOJOJ SE, PREMA PREDANJU, KNEZ LAZAR PRIČESTIO PRED KOSOVSKI BOJ',

  excerpt:
    language === 'ru'
      ? 'Церковь Самодрежа возле Вучитрна считается одной из важнейших сербских святынь, связанных с Косовской битвой 1389 года. Согласно преданию, здесь князь Лазарь вместе со своим войском причастился перед битвой.'
      : script === 'cyr'
        ? 'Црква Самодрежа код Вучитрна сматра се једном од најзначајнијих српских светиња повезаних са Косовским бојем 1389. године. Према предању, управо овде кнез Лазар се причестио са својом војском пред полазак у бој.'
        : 'Crkva Samodreža kod Vučitrna smatra se jednom od najznačajnijih srpskih svetinja povezanih sa Kosovskim bojem 1389. godine. Prema predanju, upravo ovde knez Lazar se pričestio sa svojom vojskom pred polazak u boj.',

  image: '/static/images/crkva-samodrez.jpeg',
},
{
  href: '/vesti/masakr-u-dojinci',
  slug: 'masakr-u-dojinci',

  category:
    language === 'ru'
      ? 'Новости - 26.06.2026.'
      : script === 'cyr'
        ? 'Вести - 26.06.2026.'
        : 'Vesti - 26.06.2026.',

  title:
    language === 'ru'
      ? '26 ИЮНЯ 1999 ГОДА: МАССОВОЕ УБИЙСТВО В ДОЙИНЦЕ — ПРЕСТУПЛЕНИЕ, КОТОРОЕ НЕЛЬЗЯ ЗАБЫТЬ'
      : script === 'cyr'
        ? '26. ЈУН 1999: МАСАКР У ДОЈИНЦУ – ЗЛОЧИН НАД СРПСКИМ ЦИВИЛИМА КОЈИ НЕ СМЕ БИТИ ЗАБОРАВЉЕН'
        : '26. JUN 1999: MASAKR U DOJINCU – ZLOČIN NAD SRPSKIM CIVILIMA KOJI NE SME BITI ZABORAVLJEN',

  excerpt:
    language === 'ru'
      ? '26 июня 1999 года в селе Дойинце близ Призрена были убиты 16 сербских мирных жителей, после чего село было полностью сожжено, а выжившие жители были вынуждены покинуть свои дома.'
      : script === 'cyr'
        ? 'На данашњи дан 1999. године у селу Дојинце код Призрена убијено је 16 српских цивила, након чега је село спаљено, а преживели мештани приморани да напусте своје домове.'
        : 'Na današnji dan 1999. godine u selu Dojince kod Prizrena ubijeno je 16 srpskih civila, nakon čega je selo spaljeno, a preživeli meštani primorani da napuste svoje domove.',

  image: '/static/images/dojince.jpeg',
},
{
  href: '/vesti/nevesinjska-puska-1875',
  slug: 'nevesinjska-puska-1875',

  category:
    language === 'ru'
      ? 'Новости - 09.07.2026.'
      : script === 'cyr'
        ? 'Вести - 09.07.2026.'
        : 'Vesti - 09.07.2026.',

  title:
    language === 'ru'
      ? 'НЕВЕСИНСКОЕ ВОССТАНИЕ 1875 ГОДА: ИСКРА СВОБОДЫ, ПОЛОЖИВШАЯ НАЧАЛО ОСВОБОЖДЕНИЮ СЕРБСКОГО НАРОДА'
      : script === 'cyr'
        ? 'НЕВЕСИЊСКА ПУШКА 1875: ИСКРА СЛОБОДЕ КОЈА ЈЕ ПОКРЕНУЛА ОСЛОБОЂЕЊЕ СРПСКОГ НАРОДА'
        : 'NEVESINJSKA PUŠKA 1875: ISKRA SLOBODE KOJA JE POKRENULA OSLOBOĐENJE SRPSKOG NARODA',

  excerpt:
    language === 'ru'
      ? '9 июля 1875 года в Герцеговине вспыхнуло Невесинское восстание. Событие открыло Восточный вопрос и стало важным шагом на пути освобождения сербского народа от османского господства.'
      : script === 'cyr'
        ? 'На данашњи дан 1875. године избио је Невесињски устанак, познат као Невесињска пушка. Догађај је отворио Источно питање и најавио ослобођење српског народа од османске власти.'
        : 'Na današnji dan 1875. godine izbio je Nevesinjski ustanak, poznat kao Nevesinjska puška. Događaj je otvorio Istočno pitanje i najavio oslobođenje srpskog naroda od osmanske vlasti.',

  image: '/static/images/nevesinjska-bitka.jpeg',
},
{
  href: '/vesti/obustavljena-nastava-ruskog-jezika',
  slug: 'obustavljena-nastava-ruskog-jezika',

  category:
    language === 'ru'
      ? 'Новости - 18.06.2026.'
      : script === 'cyr'
        ? 'Вести - 18.06.2026.'
        : 'Vesti - 18.06.2026.',

  title:
    language === 'ru'
      ? 'БЫЛ ЛИ РУССКИЙ ЯЗЫК В 1990-Е ГОДЫ СИСТЕМАТИЧЕСКИ ВЫТЕСНЕН И ПОЧЕМУ?'
      : script === 'cyr'
        ? 'ДА ЛИ ЈЕ РУСКИ ЈЕЗИК ДЕВЕДЕСЕТИХ БИО СИСТЕМСКИ ПОТИСНУТ И ЗАШТО?'
        : 'DA LI JE RUSKI JEZIK DEVEDESETIH BIO SISTEMSKI POTISNUT I ZAŠTO?',

  excerpt:
    language === 'ru'
      ? 'В 1993–1996 годах во многих школах значительно сократилось преподавание русского языка. Бывшие ученики, преподаватели и исследователи приглашаются поделиться своими свидетельствами и документами.'
      : script === 'cyr'
        ? 'Током периода 1993–1996. године у бројним школама дошло је до наглог смањења наставе руског језика. Позивају се бивши ученици, професори и истраживачи да поделе своја сведочанства и документа.'
        : 'Tokom perioda 1993–1996. godine u brojnim školama došlo je do naglog smanjenja nastave ruskog jezika. Pozivaju se bivši učenici, profesori i istraživači da podele svoja svedočenja i dokumenta.',

  image: '/static/images/obustavljena-nastava-ruskog-jezika.jpeg',
},
{
  href: '/vesti/besplatna-prilika-za-ucenje-ruskog-jezika',
  slug: 'besplatna-prilika-za-ucenje-ruskog-jezika',

  category:
    language === 'ru'
      ? 'Новости - 17.06.2026.'
      : script === 'cyr'
        ? 'Вести - 17.06.2026.'
        : 'Vesti - 17.06.2026.',

  title:
    language === 'ru'
      ? 'НИУ ВШЭ ПРИГЛАШАЕТ НА БЕСПЛАТНЫЙ РАЗГОВОРНЫЙ КЛУБ ДЛЯ ИЗУЧАЮЩИХ РУССКИЙ ЯЗЫК'
      : script === 'cyr'
        ? 'БЕСПЛАТНА ПРИЛИКА ЗА УЧЕЊЕ РУСКОГ ЈЕЗИКА: ХСЕ САНКТ ПЕТЕРБУРГ ПОЗИВА НА ОНЛАЈН РАЗГОВОРНИ КЛУБ'
        : 'BESPLATNA PRILIKA ZA UČENJE RUSKOG JEZIKA: HSE SANKT PETERBURG POZIVA NA ONLAJN RAZGOVORNI KLUB',

  excerpt:
    language === 'ru'
      ? '19 июня Национальный исследовательский университет «Высшая школа экономики» приглашает начинающих изучать русский язык на бесплатную онлайн-встречу разговорного клуба.'
      : script === 'cyr'
        ? 'Национални истраживачки универзитет „Висока школа економије“ из Санкт Петербурга 19. јуна организује бесплатан онлајн Разговорни клуб за све који желе да уче руски језик.'
        : 'Nacionalni istraživački univerzitet „Visoka škola ekonomije“ iz Sankt Peterburga 19. juna organizuje besplatan onlajn Razgovorni klub za sve koji žele da uče ruski jezik.',

  image: '/static/images/besplatna-prilika-za-ucenje-ruskog-jezika.png',
},
{
  href: '/vesti/incident-na-cukur-cesmi',
  slug: 'incident-na-cukur-cesmi',

  category:
    language === 'ru'
      ? 'Новости - 15.06.2026.'
      : script === 'cyr'
        ? 'Вести - 15.06.2026.'
        : 'Vesti - 15.06.2026.',

  title:
    language === 'ru'
      ? 'В ЭТОТ ДЕНЬ: ИНЦИДЕНТ У ЧУКУР-ЧЕШМЫ, УСКОРИВШИЙ ОСВОБОЖДЕНИЕ СЕРБИИ'
      : script === 'cyr'
        ? 'НА ДАНАШЊИ ДАН: ИНЦИДЕНТ НА ЧУКУР ЧЕСМИ КОЈИ ЈЕ УБРЗАО ОСЛОБОЂЕЊЕ СРБИЈЕ'
        : 'NA DANAŠNJI DAN: INCIDENT NA ČUKUR ČESMI KOJI JE UBRZAO OSLOBOĐENJE SRBIJE',

  excerpt:
    language === 'ru'
      ? '15 июня 1862 года инцидент у Чукур-чешмы в Белграде стал одним из ключевых событий на пути Сербии к окончательному освобождению от османского владычества.'
      : script === 'cyr'
        ? 'Инцидент на Чукур чесми 15. јуна 1862. године постао је један од кључних догађаја на путу Србије ка коначном ослобођењу од османске власти.'
        : 'Incident na Čukur česmi 15. juna 1862. godine postao je jedan od ključnih događaja na putu Srbije ka konačnom oslobođenju od osmanske vlasti.',

  image: '/static/images/incident-na-cukur-cesmi.jpeg',
},
{
  href: '/vesti/premijera-filma-rat-za-nezavisnost-srbije',
  slug: 'premijera-filma-rat-za-nezavisnost-srbije',

  category:
    language === 'ru'
      ? 'Новости - 15.06.2026.'
      : script === 'cyr'
        ? 'Вести - 15.06.2026.'
        : 'Vesti - 15.06.2026.',

  title:
    language === 'ru'
      ? 'ПРЕМЬЕРА ДОКУМЕНТАЛЬНОГО ФИЛЬМА «ВОЙНА ЗА НЕЗАВИСИМОСТЬ СЕРБИИ. 1876» В РУССКОМ ДОМЕ'
      : script === 'cyr'
        ? 'ПРЕМИЈЕРА ДОКУМЕНТАРНОГ ФИЛМА „РАТ ЗА НЕЗАВИСНОСТ СРБИЈЕ 1876“ У РУСКОМ ДОМУ'
        : 'PREMIJERA DOKUMENTARNOG FILMA „RAT ZA NEZAVISNOST SRBIJE 1876“ U RUSKOM DOMU',

  excerpt:
    language === 'ru'
      ? 'В Русском доме состоится премьера документального фильма «Война за независимость Сербии. 1876», посвящённого 150-летию начала Первой сербско-турецкой войны.'
      : script === 'cyr'
        ? 'У Руском дому биће одржана премијера документарног филма „Рат за независност Србије 1876“, поводом 150 година од избијања Првог српско-турског рата.'
        : 'U Ruskom domu biće održana premijera dokumentarnog filma „Rat za nezavisnost Srbije 1876“, povodom 150 godina od izbijanja Prvog srpsko-turskog rata.',

  image: '/static/images/rat-za-nezavisnost-srbije.jpeg',
},
{
  href: '/vesti/trka-slobode-voznja-ratnim-stazama',
  slug: 'trka-slobode-voznja-ratnim-stazama',

  category:
    language === 'ru'
      ? 'Новости - 12.06.2026.'
      : script === 'cyr'
        ? 'Вести - 12.06.2026.'
        : 'Vesti - 12.06.2026.',

  title:
    language === 'ru'
      ? 'ГОНКА СВОБОДЫ – ВЕЛОПРОБЕГ ПО БОЕВЫМ МАРШРУТАМ 3-ГО РАКЕТНОГО ДИВИЗИОНА ПВО'
      : script === 'cyr'
        ? 'ТРКА СЛОБОДЕ – ВОЖЊА РАТНИМ СТАЗАМА 3. РАКЕТНОГ ДИВИЗИОНА ПВО'
        : 'TRKA SLOBODE – VOŽNJA RATNIM STAZAMA 3. RAKETNOG DIVIZIONA PVO',

  excerpt:
    language === 'ru'
      ? '13 июня состоится велосипедный пробег по маршруту Яково – Бечмен – Петровчич в память о 3-м ракетном дивизионе ПВО и его защитниках.'
      : script === 'cyr'
        ? 'У суботу, 13. јуна, биће одржана бициклистичка манифестација трасом Јаково – Бечмен – Петровчић у знак сећања на припаднике 3. ракетног дивизиона ПВО.'
        : 'U subotu, 13. juna, biće održana biciklistička manifestacija trasom Jakovo – Bečmen – Petrovčić u znak sećanja na pripadnike 3. raketnog diviziona PVO.',

  image: '/static/images/trka-slobode.jpeg',
},
{
  href: '/vesti/secanje-na-vasu-cubrilovica',
  slug: 'secanje-na-vasu-cubrilovica',

  category:
    language === 'ru'
      ? 'Новости - 11.06.2026.'
      : script === 'cyr'
        ? 'Вести - 11.06.2026.'
        : 'Vesti - 11.06.2026.',

  title:
    language === 'ru'
      ? 'ПАМЯТЬ О ВАСО ЧУБРИЛОВИЧЕ: САМЫЙ МОЛОДОЙ УЧАСТНИК САРАЕВСКОГО ПОКУШЕНИЯ'
      : script === 'cyr'
        ? 'СЕЋАЊЕ НА ВАСУ ЧУБРИЛОВИЋА: НАЈМЛАЂИ УЧЕСНИК САРАЈЕВСКОГ АТЕНТАТА'
        : 'SEĆANJE NA VASU ČUBRILOVIĆA: NAJMLAĐI UČESNIK SARAJEVSKOG ATENTATA',

  excerpt:
    language === 'ru'
      ? '11 июня 1990 года ушёл из жизни Васо Чубрилович — самый молодой участник Сараевского покушения, выдающийся сербский историк, академик и автор более 70 научных трудов.'
      : script === 'cyr'
        ? 'На данашњи дан 1990. године преминуо је Васо Чубриловић, најмлађи учесник Сарајевског атентата, истакнути српски историчар, академик и аутор више од 70 научних дела.'
        : 'Na današnji dan 1990. godine preminuo je Vaso Čubrilović, najmlađi učesnik Sarajevskog atentata, istaknuti srpski istoričar, akademik i autor više od 70 naučnih dela.',

  image: '/static/images/vaso-cubrilovic.jpeg',
},
{
  href: '/vesti/nepobedjeni-27-godina-od-bitke-na-kosarama',
  slug: 'nepobedjeni-27-godina-od-bitke-na-kosarama',

  category:
    language === 'ru'
      ? 'Новости - 10.06.2026.'
      : script === 'cyr'
        ? 'Вести - 10.06.2026.'
        : 'Vesti - 10.06.2026.',

  title:
    language === 'ru'
      ? 'НЕПОБЕЖДЕННЫЕ: 27 ЛЕТ СО ДНЯ ЗАВЕРШЕНИЯ БИТВЫ НА КОШАРАХ'
      : script === 'cyr'
        ? 'НЕПОБЕЂЕНИ: 27 ГОДИНА ОД ЗАВРШЕТКА БИТКЕ НА КОШАРАМА'
        : 'NEPOBEĐENI: 27 GODINA OD ZAVRŠETKA BITKE NA KOŠARAMA',

  excerpt:
    language === 'ru'
      ? '10 июня 1999 года завершилась битва на Кошарах после 67 дней непрерывных боёв. Она осталась символом мужества, стойкости и самоотверженности военнослужащих Армии Югославии.'
      : script === 'cyr'
        ? 'Битка на Кошарама окончана је 10. јуна 1999. године после 67 дана непрекидних борби и остала је симбол храбрости, истрајности и пожртвованости припадника Војске Југославије.'
        : 'Bitka na Košarama okončana je 10. juna 1999. godine posle 67 dana neprekidnih borbi i ostala je simbol hrabrosti, istrajnosti i požrtvovanosti pripadnika Vojske Jugoslavije.',

  image: '/static/images/kosaree.jpeg',
},
{
  href: '/vesti/na-danasnji-dan-ubijen-knez-mihailo-obrenovic',
  slug: 'na-danasnji-dan-ubijen-knez-mihailo-obrenovic',

  category:
    language === 'ru'
      ? 'Новости - 10.06.2026.'
      : script === 'cyr'
        ? 'Вести - 10.06.2026.'
        : 'Vesti - 10.06.2026.',

  title:
    language === 'ru'
      ? 'В ЭТОТ ДЕНЬ БЫЛ УБИТ КНЯЗЬ МИХАИЛ ОБРЕНОВИЧ — ПРАВИТЕЛЬ, ДОБИВШИЙСЯ ВЫВОДА ТУРЕЦКИХ ГАРНИЗОНОВ'
      : script === 'cyr'
        ? 'НА ДАНАШЊИ ДАН УБИЈЕН КНЕЗ МИХАИЛО ОБРЕНОВИЋ — ВЛАДАР КОЈИ ЈЕ ОСЛОБОДИО СРПСКЕ ГРАДОВЕ ОД ТУРСКИХ ГАРНИЗОНА'
        : 'NA DANAŠNJI DAN UBIJEN KNEZ MIHAILO OBRENOVIĆ – VLADAR KOJI JE OSLOBODIO SRPSKE GRADOVE OD TURSKIH GARNIZONA',

  excerpt:
    language === 'ru'
      ? '10 июня 1868 года в Кошутняке был убит князь Михаил Обренович, один из самых выдающихся сербских государственных деятелей XIX века.'
      : script === 'cyr'
        ? 'На данашњи дан 1868. године у Кошутњаку је убијен кнез Михаило Обреновић, један од најзначајнијих српских владара XIX века.'
        : 'Na današnji dan 1868. godine u Košutnjaku je ubijen knez Mihailo Obrenović, jedan od najznačajnijih srpskih vladara XIX veka.',

  image: '/static/images/knez-mihailo-obrenovic.jpeg',
},
{
  href: '/vesti/otvoren-sesti-ciklus-medjunarodne-nagrade',
  slug: 'otvoren-sesti-ciklus-medjunarodne-nagrade',

  category:
    language === 'ru'
      ? 'Новости - 09.06.2026.'
      : script === 'cyr'
        ? 'Вести - 09.06.2026.'
        : 'Vesti - 09.06.2026.',

  title:
    language === 'ru'
      ? 'ОТКРЫТ ПРИЁМ ЗАЯВОК НА ШЕСТОЙ СЕЗОН МЕЖДУНАРОДНОЙ ПРЕМИИ #МЫВМЕСТЕ'
      : script === 'cyr'
        ? 'ОТВОРЕН ПРИЈЕМ ПРИЈАВА ЗА ШЕСТИ ЦИКЛУС МЕЂУНАРОДНЕ НАГРАДЕ #МЫВМЕСТЕ'
        : 'OTVOREN ŠESTI CIKLUS MEĐUNARODNE NAGRADE #WEARETOGETHER',

  excerpt:
    language === 'ru'
      ? 'До 14 июня продолжается приём заявок на Международную премию #МЫВМЕСТЕ для волонтёров, общественных организаций и авторов социально значимых инициатив со всего мира.'
      : script === 'cyr'
        ? 'До 14. јуна отворене су пријаве за Међународну награду #МЫВМЕСТЕ намењену волонтерима, организацијама и ауторима друштвено корисних пројеката.'
        : 'Do 14. juna otvorene su prijave za Međunarodnu nagradu #WEARETOGETHER namenjenu volonterima, organizacijama i autorima društveno korisnih projekata.',

  image: '/static/images/medjunarodne-nagrade.jpeg',
},
{
  href: '/vesti/auto-kolona-u-nisu',
  slug: 'auto-kolona-u-nisu',

  category:
    language === 'ru'
      ? 'Новости - 09.06.2026.'
      : script === 'cyr'
        ? 'Вести - 09.06.2026.'
        : 'Vesti - 09.06.2026.',

  title:
    language === 'ru'
      ? 'АВТОКОЛОННА В НИШЕ В ЧЕСТЬ ДНЯ РОССИИ ПРОЙДЕТ 11 ИЮНЯ'
      : script === 'cyr'
        ? 'АУТО-КОЛОНА У НИШУ ПОВОДОМ ДАНА РУСИЈЕ 11. ЈУНА'
        : 'AUTO-KOLONA U NIŠU POVODOM DANA RUSIJE 11. JUNA',

  excerpt:
    language === 'ru'
      ? 'Общество русско-сербской дружбы «Братство» организует праздничную автоколонну в Нише 11 июня. Акция посвящена Дню России и открыта для всех желающих.'
      : script === 'cyr'
        ? 'Друштво руско-српског пријатељства „Братство“ организује свечану ауто-колону у Нишу 11. јуна поводом Дана Русије и позива грађане да се придруже.'
        : 'Društvo rusko-srpskog prijateljstva „Bratstvo“ organizuje svečanu auto-kolonu u Nišu 11. juna povodom Dana Rusije i poziva građane da se pridruže.',

  image: '/static/images/auto-kolona-u-nisu.jpeg',
},
{
  href: '/vesti/pocinje-petrovski-post',
  slug: 'pocinje-petrovski-post',

  category:
    language === 'ru'
      ? 'Новости - 08.06.2026.'
      : script === 'cyr'
        ? 'Вести - 08.06.2026.'
        : 'Vesti - 08.06.2026.',

  title:
    language === 'ru'
      ? 'НАЧИНАЕТСЯ ПЕТРОВ ПОСТ (АПОСТОЛЬСКИЙ ПОСТ)'
      : script === 'cyr'
        ? 'ПОЧИЊЕ ПЕТРОВСКИ (АПОСТОЛСКИ) ПОСТ'
        : 'POČINJE PETROVSKI (APOSTOLSKI) POST',

  excerpt:
    language === 'ru'
      ? 'С 8 июня начинается Апостольский пост, который продлится до 12 июля — дня памяти святых апостолов Петра и Павла. Время молитвы, поста и духовного укрепления.'
      : script === 'cyr'
        ? 'Од 8. јуна почиње Апостолски пост који траје до 12. јула, празника светих апостола Петра и Павла. Период молитве, поста и духовне припреме верника.'
        : 'Od 8. juna počinje Apostolski post koji traje do 12. jula, praznika svetih apostola Petra i Pavla. Period molitve, posta i duhovne pripreme vernika.',

  image: '/static/images/petrovski-post-1.jpeg',
},
{
  href: '/vesti/nikola-tesla-dobio-orden-svetog-save',
  slug: 'nikola-tesla-dobio-orden-svetog-save',

  category:
    language === 'ru'
      ? 'Новости - 02.06.2026.'
      : script === 'cyr'
        ? 'Вести - 02.06.2026.'
        : 'Vesti - 02.06.2026.',

  title:
    language === 'ru'
      ? 'В ЭТОТ ДЕНЬ: НИКОЛА ТЕСЛА ПРИБЫЛ В БЕЛГРАД И БЫЛ НАГРАЖДЁН ОРДЕНОМ СВЯТОГО САВВЫ'
      : script === 'cyr'
        ? 'НА ДАНАШЊИ ДАН: НИКОЛА ТЕСЛА СТИГАО У БЕОГРАД И ДОБИО ОРДЕН СВЕТОГ САВЕ'
        : 'NA DANAŠNJI DAN: NIKOLA TESLA STIGAO U BEOGRAD I DOBIO ORDEN SVETOG SAVE',

  excerpt:
    language === 'ru'
      ? '2 июня 1892 года великий сербский учёный Никола Тесла прибыл в Белград, где был награждён Орденом Святого Саввы II степени за выдающийся вклад в науку и технический прогресс.'
      : script === 'cyr'
        ? 'Велики српски научник Никола Тесла допутовао је у Београд 2. јуна 1892. године, где је одликован Орденом Светог Саве другог степена за изузетан допринос науци и техничком напретку.'
        : 'Veliki srpski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine, gde je odlikovan Ordenom Svetog Save drugog stepena za izuzetan doprinos nauci i tehničkom napretku.',

  image: '/static/images/nikola-tesla.jpeg',
},
{
  href: '/vesti/aleksa-filipovic-predavanje-u-tuli',
  slug: 'aleksa-filipovic-predavanje-u-tuli',

  category:
    language === 'ru'
      ? 'Новости - 02.06.2026.'
      : script === 'cyr'
        ? 'Вести - 02.06.2026.'
        : 'Vesti - 02.06.2026.',

  title:
    language === 'ru'
      ? 'ДОКТОР АЛЕКСА ФИЛИПОВИЧ ВЫСТУПИЛ С ЛЕКЦИЕЙ В ТУЛЕ: ВНЕШНЯЯ ПОЛИТИКА СЕРБИИ МЕЖДУ ЧЕТЫРЬМЯ ОПОРАМИ'
      : script === 'cyr'
        ? 'ДР АЛЕКСА ФИЛИПОВИЋ ОДРЖАО ПРЕДАВАЊЕ У ТУЛИ: СПОЉНА ПОЛИТИКА СРБИЈЕ ИЗМЕЂУ ЧЕТИРИ СТУБА'
        : 'DR ALEKSA FILIPOVIĆ ODRŽAO PREDAVANJE U TULI: SPOLJNA POLITIKA SRBIJE IZMEĐU ČETIRI STUBA',

  excerpt:
    language === 'ru'
      ? 'Доктор политических наук Алекса Филипович рассказал студентам ТулГУ о внешнеполитическом курсе Сербии, её отношениях с ЕС, США, Россией и Китаем, а также о вопросах военного нейтралитета.'
      : script === 'cyr'
        ? 'Др Алекса Филиповић говорио је студентима ТулГУ о спољнополитичком курсу Србије, односима са ЕУ, САД, Русијом и Кином, као и о питањима војне неутралности.'
        : 'Dr Aleksa Filipović govorio je studentima TulGU o spoljnopolitičkom kursu Srbije, odnosima sa EU, SAD, Rusijom i Kinom, kao i o pitanjima vojne neutralnosti.',

  image: '/static/images/aleksa-1.jpeg',
},
{
  href: '/vesti/cegar-sloboda-placena-zivotima',
  slug: 'cegar-sloboda-placena-zivotima',

  category:
    language === 'ru'
      ? 'Новости - 01.06.2026.'
      : script === 'cyr'
        ? 'Вести - 01.06.2026.'
        : 'Vesti - 01.06.2026.',

  title:
    language === 'ru'
      ? 'ЧЕГАР — МЕСТО, ГДЕ СВОБОДА БЫЛА ОПЛАЧЕНА ЖИЗНЬЮ: 217 ЛЕТ ПОДВИГУ СТЕВАНА СИНДЖЕЛИЧА'
      : script === 'cyr'
        ? 'ЧЕГАР – МЕСТО ГДЕ ЈЕ СЛОБОДА ПЛАЋЕНА ЖИВОТОМ: 217 ГОДИНА ОД ПОДВИГА СТЕВАНА СИНЂЕЛИЋА'
        : 'ČEGAR – MESTO GDE JE SLOBODA PLAĆENA ŽIVOTOM: 217 GODINA OD PODVIGA STEVANA SINĐELIĆA',

  excerpt:
    language === 'ru'
      ? 'На Чегаре возле Ниша отмечена 217-я годовщина знаменитого Чегарского сражения — одного из важнейших событий Первого сербского восстания и символа сербского героизма.'
      : script === 'cyr'
        ? 'На Чегру код Ниша обележена је 217. годишњица славне Чегарске битке, једног од најзначајнијих догађаја Првог српског устанка и симбола српског јунаштва.'
        : 'Na Čegaru kod Niša obeležena je 217. godišnjica slavne Čegarske bitke, jednog od najznačajnijih događaja Prvog srpskog ustanka i simbola srpskog junaštva.',

  image: '/static/images/cegar.jpg',
},
{
  href: '/vesti/ustaski-zlocin-nad-srbima',
  slug: 'ustaski-zlocin-nad-srbima',

  category:
    language === 'ru'
      ? 'Новости - 01.06.2026.'
      : script === 'cyr'
        ? 'Вести - 01.06.2026.'
        : 'Vesti - 01.06.2026.',

  title:
    language === 'ru'
      ? 'ИСПОЛНЯЕТСЯ 83 ГОДА СО ДНЯ УСТАШСКОГО ПРЕСТУПЛЕНИЯ ПРОТИВ СЕРБОВ В СРЕБРЕНИЦЕ, ЗАЛАЖЬЕ И ВИТЛОВЦАХ'
      : script === 'cyr'
        ? 'НАВРШИЛЕ СЕ 83 ГОДИНЕ ОД УСТАШКОГ ЗЛОЧИНА НАД СРБИМА У СРЕБРЕНИЦИ, ЗАЛАЖЈУ И ВИТЛОВЦИМА'
        : 'NAVRŠILE SE 83 GODINE OD USTAŠKOG ZLOČINA NAD SRBIMA U SREBRENICI, ZALAŽJU I VITLOVCIMA',

  excerpt:
    language === 'ru'
      ? 'В Сребренице пройдет панихида и памятные мероприятия по случаю 83-й годовщины гибели более 250 сербских мирных жителей, убитых усташами в июне 1943 года.'
      : script === 'cyr'
        ? 'У Сребреници ће бити служен парастос и обележене 83 године од страдања више од 250 српских цивила које су усташе убиле у јуну 1943. године.'
        : 'U Srebrenici će biti služen parastos i obeležene 83 godine od stradanja više od 250 srpskih civila koje su ustaše ubile u junu 1943. godine.',

  image: '/static/images/srebrenica.jpg',
},
{
  href: '/vesti/otvoreno-predavnje-u-tulgu',
  slug: 'otvoreno-predavnje-u-tulgu',

  category:
    language === 'ru'
      ? 'Новости - 01.06.2026.'
      : script === 'cyr'
        ? 'Вести - 01.06.2026.'
        : 'Vesti - 01.06.2026.',

  title:
    language === 'ru'
      ? 'ОТКРЫТАЯ ЛЕКЦИЯ В ТУЛГУ: ЕВРОПА МЕЖДУ ЛИБЕРАЛИЗМОМ И ТРАДИЦИОННЫМИ ЦЕННОСТЯМИ'
      : script === 'cyr'
        ? 'ОТВОРЕНО ПРЕДАВАЊЕ НА ТУЛГУ: ЕВРОПА ИЗМЕЂУ ЛИБЕРАЛИЗМА И ТРАДИЦИОНАЛНИХ ВРЕДНОСТИ'
        : 'OTVORENO PREDAVANJE NA TULGU: EVROPA IZMEĐU LIBERALIZMA I TRADICIONALNIH VREDNOSTI',

  excerpt:
    language === 'ru'
      ? 'В Тульском государственном университете состоялась открытая лекция известного слависта Марка Штефана Петерса, посвящённая политическим изменениям в Европе после парламентских выборов в Венгрии.'
      : script === 'cyr'
        ? 'На Тулском државном универзитету одржано је отворено предавање познатог слависте Марка Штефана Петерса о политичким променама у Европи након парламентарних избора у Мађарској.'
        : 'Na Tulskom državnom univerzitetu održano je otvoreno predavanje poznatog slaviste Marka Štefana Petersa o političkim promenama u Evropi nakon parlamentarnih izbora u Mađarskoj.',

  image: '/static/images/otvoreno-predavnje-u-tulgu-4.jpeg',
},
{
  href: '/vesti/spomenik-vladimiru-sergevic-ostrivnom',
  slug: 'spomenik-vladimiru-sergevic-ostrivnom',

  category:
    language === 'ru'
      ? 'Новости - 01.06.2026.'
      : script === 'cyr'
        ? 'Вести - 01.06.2026.'
        : 'Vesti - 01.06.2026.',

  title:
    language === 'ru'
      ? 'НАЧАТ СБОР СРЕДСТВ НА УСТАНОВКУ ПАМЯТНИКА ВЛАДИМИРУ ОСТРИВНОМУ'
      : script === 'cyr'
        ? 'ПОКРЕНУТА АКЦИЈА ЗА ПОДИЗАЊЕ СПОМЕНИКА ВЛАДИМИРУ ОСТРИВНОМ'
        : 'POKRENUTA AKCIJA ZA PODIZANJE SPOMENIKA VLADIMIRU OSTRIVNOM',

  excerpt:
    language === 'ru'
      ? 'Получено разрешение на установку памятника Владимиру Сергеевичу Остривному, погибшему в Белграде в 2018 году. Все желающие могут поддержать реализацию проекта добровольным пожертвованием.'
      : script === 'cyr'
        ? 'Добијена је дозвола за постављање споменика Владимиру Сергејевичу Остривном, који је убијен у Београду 2018. године. Сви који желе могу подржати реализацију пројекта добровољним прилогом.'
        : 'Dobijena je dozvola za postavljanje spomenika Vladimiru Sergejeviču Ostrivnom, koji je ubijen u Beogradu 2018. godine. Svi koji žele mogu podržati realizaciju projekta dobrovoljnim prilogom.',

  image: '/static/images/spomenik-vladimiru-1.jpg',
},
{
  href: '/vesti/idealogija-ukrajinskog-nacizma',
  slug: 'idealogija-ukrajinskog-nacizma',

  category:
    language === 'ru'
      ? 'Новости - 29.05.2026.'
      : script === 'cyr'
        ? 'Вести - 29.05.2026.'
        : 'Vesti - 29.05.2026.',

  title:
    language === 'ru'
      ? '«ИДЕОЛОГИЯ УКРАИНСКОГО НАЦИЗМА» — ИСТОРИЧЕСКИЙ АНАЛИЗ СЕРГЕЯ ФЕДОСЕЕВА'
      : script === 'cyr'
        ? '„ИДЕОЛОГИЈА УКРАЈИНСКОГ НАЦИЗМА“ — ИСТОРИЈСКА АНАЛИЗА СЕРГЕЈА ФЕДОСЕЈЕВА'
        : '„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — ISTORIJSKA ANALIZA SERGEJA FEDOSEJEVA',

  excerpt:
    language === 'ru'
      ? 'Историк Сергей Владимирович Федосеев представляет масштабное исследование происхождения украинского интегрального национализма, роли униатства и политических процессов, сформировавших современный украинский кризис.'
      : script === 'cyr'
        ? 'Историчар Сергеј Владимирович Федосејев представља опширну анализу настанка украјинског интегралног национализма, улоге унијатства и политичких процеса који су обликовали савремену украјинску кризу.'
        : 'Istoričar Sergej Vladimirovič Fedosejev predstavlja opširnu analizu nastanka ukrajinskog integralnog nacionalizma, uloge unijatstva i političkih procesa koji su oblikovali savremenu ukrajinsku krizu.',

  image: '/static/images/fedosejev.jpeg',
},
{
  href: '/vesti/bitka-na-pastriku',
  slug: 'bitka-na-pastriku',

  category:
    language === 'ru'
      ? 'Новости - 27.05.2026.'
      : script === 'cyr'
        ? 'Вести - 27.05.2026.'
        : 'Vesti - 27.05.2026.',

  title:
    language === 'ru'
      ? 'ПАШТРИК — ДЕНЬ, КОГДА СЕРБИЯ ВЫСТОЯЛА ПОД ДОЖДЁМ ОГНЯ И СТАЛИ'
      : script === 'cyr'
        ? 'ПАШТРИК — ДАН КАДА ЈЕ СРБИЈА ОДБРАЊЕНА ПОД КИШОМ ВАТРЕ И ЧЕЛИКА'
        : 'PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA',

  excerpt:
    language === 'ru'
      ? '27 мая 1999 года началась одна из самых тяжёлых и героических битв новейшей истории Сербии — битва на Паштрике.'
      : script === 'cyr'
        ? '27. маја 1999. године започела је једна од најтежих и најславнијих битака новије историје Србије — Битка на Паштрику.'
        : '27. maja 1999. godine započela je jedna od najtežih i najslavnijih bitaka novije istorije Srbije — Bitka na Paštriku.',

  image: '/static/images/bitka-pastrik.jpg',
},
{
  href: '/vesti/saradnja-izmedju-srbije-i-ukrajine',
  slug: 'saradnja-izmedju-srbije-i-ukrajine',

  category:
    language === 'ru'
      ? 'Новости - 25.05.2026.'
      : script === 'cyr'
        ? 'Вести - 25.05.2026.'
        : 'Vesti - 25.05.2026.',

  title:
    language === 'ru'
      ? 'В БЕЛГРАДЕ ПОДПИСАНЫ «АНТИРОССИЙСКИЕ» МЕМОРАНДУМЫ?'
      : script === 'cyr'
        ? 'ПОТПИСАНИ „АНТИРУСКИ“ МЕМОРАНДУМИ У БЕОГРАДУ?'
        : 'POTPISANI „ANTIRUSKI“ MEMORANDUMI U BEOGRADU?',

  excerpt:
    language === 'ru'
      ? 'Подписанные соглашения между Сербией и Украиной вызвали различные реакции и открыли вопрос о внешнеполитическом курсе страны.'
      : script === 'cyr'
        ? 'Потписани споразуми између Србије и Украјине изазвали су различите реакције и отворили питање спољнополитичког курса земље.'
        : 'Potpisani sporazumi između Srbije i Ukrajine izazvali su različite reakcije i otvorili pitanje spoljnopolitičkog kursa zemlje.',

  image: '/static/images/srbija-ukrajina.jpeg',
},
{
  href: '/vesti/napad-na-studentski-dom-u-starobeljsku',
  slug: 'napad-na-studentski-dom-u-starobeljsku',

  category:
    language === 'ru'
      ? 'Новости - 25.05.2026.'
      : script === 'cyr'
        ? 'Вести - 25.05.2026.'
        : 'Vesti - 25.05.2026.',

  title:
    language === 'ru'
      ? 'УДАР ПО СТУДЕНЧЕСКОМУ ОБЩЕЖИТИЮ В СТАРОБЕЛЬСКЕ: РАСТЁТ ЧИСЛО ЖЕРТВ'
      : script === 'cyr'
        ? 'НАПАД НА СТУДЕНТСКИ ДОМ У СТАРОБЕЉСКУ: РАСТЕ БРОЈ ЖРТАВА'
        : 'NAPAD NA STUDENTSKI DOM U STAROBELJSKU: RASTE BROJ ŽRTAVA',

  excerpt:
    language === 'ru'
      ? 'Число погибших в результате удара по студенческому общежитию достигло 18 человек, спасатели продолжают разбор завалов в сложных условиях.'
      : script === 'cyr'
        ? 'Број погинулих у нападу на студентски дом порастао је на 18, док спасиоци настављају потрагу за преживелима у тешким условима.'
        : 'Broj poginulih u napadu na studentski dom porastao je na 18, dok spasioci nastavljaju potragu za preživelima u teškim uslovima.',

  image: '/static/images/studentski-dom-starobeljski.jpg',
},
    {
  href: '/vesti/italijanski-general-koji-je-stao-uz-srpske-svetinje',
  slug: 'italijanski-general-koji-je-stao-uz-srpske-svetinje',

  category:
    language === 'ru'
      ? 'Новости - 21.05.2026.'
      : script === 'cyr'
        ? 'Вести - 21.05.2026.'
        : 'Vesti - 21.05.2026.',

  title:
    language === 'ru'
      ? 'ИТАЛЬЯНСКИЙ ГЕНЕРАЛ, КОТОРЫЙ ВСТАЛ НА ЗАЩИТУ СЕРБСКИХ СВЯТЫНЬ — ЧЕСТЬ ВО ВРЕМЯ ПОГРОМА'
      : script === 'cyr'
        ? 'ИТАЛИЈАНСКИ ГЕНЕРАЛ КОЈИ ЈЕ СТАО УЗ СРПСКЕ СВЕТИЊЕ — ЧАСТ У ВРЕМЕНУ ПОГРОМА'
        : 'ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA',

  excerpt:
    language === 'ru'
      ? 'Во время мартовского погрома 2004 года итальянские десантники KFOR во главе с генералом Иубини встали на защиту сербских святынь и мирного населения, предотвратив разрушение важного духовного наследия.'
      : script === 'cyr'
        ? 'Током мартовског погрома 2004. године, италијански падобранци КФОР-а предвођени генералом Иубинијем стали су у одбрану српских светиња и народа, спречивши уништење значајног духовног наслеђа.'
        : 'Tokom martovskog pogroma 2004. godine, italijanski padobranci KFOR-a predvođeni generalom Iubinijem stali su u odbranu srpskih svetinja i naroda, sprečivši uništenje značajnog duhovnog nasleđa.',

  image: '/static/images/italijanski-general.jpg',
},
    {
  href: '/vesti/spasovdan',
  slug: 'spasovdan',

  category:
    language === 'ru'
      ? 'Новости - 21.05.2026.'
      : script === 'cyr'
        ? 'Вести - 21.05.2026.'
        : 'Vesti - 21.05.2026.',

  title:
    language === 'ru'
      ? 'СПАСОВДАН — ПРАЗДНИК ВОЗНЕСЕНИЯ ХРИСТОВА, ОБЪЕДИНЯЮЩИЙ ВЕРУ, ИСТОРИЮ И ТРАДИЦИИ'
      : script === 'cyr'
        ? 'СПАСОВДАН — ПРАЗНИК ХРИСТОВОГ ВАЗНЕСЕЊА КОЈИ СПАЈА ВЕРУ, ИСТОРИЈУ И ТРАДИЦИЈУ'
        : 'SPASOVDAN – PRAZNIK HRISTOVOG VAZNESENJA KOJI SPAJA VERU, ISTORIJU I TRADICIJU',

  excerpt:
    language === 'ru'
      ? 'Сербская православная церковь отмечает Спасовдан — праздник Вознесения Христова, который символизирует завершение его земной миссии и начало распространения христианской веры.'
      : script === 'cyr'
        ? 'Српска православна црква обележава Спасовдан — празник Христовог вазнесења, који симболизује завршетак његовог земаљског послања и почетак ширења хришћанске вере.'
        : 'Srpska pravoslavna crkva obeležava Spasovdan — praznik Hristovog vaznesenja, koji simbolizuje završetak njegovog zemaljskog poslanja i početak širenja hrišćanske vere.',

  image: '/static/images/spasovdan.jpg',
},
    {
  href: '/vesti/bogorodicin-pojas-krenuo-ka-srbiji',
  slug: 'bogorodicin-pojas-krenuo-ka-srbiji',

  category:
    language === 'ru'
      ? 'Новости - 20.05.2026.'
      : script === 'cyr'
        ? 'Вести - 20.05.2026.'
        : 'Vesti - 20.05.2026.',

  title:
    language === 'ru'
      ? 'ПОЯС ПРЕСВЯТОЙ БОГОРОДИЦЫ НАПРАВИЛСЯ В СЕРБИЮ — ВЕРУЮЩИЕ С НЕТЕРПЕНИЕМ ОЖИДАЮТ СВЯТЫНЮ'
      : script === 'cyr'
        ? 'БОГОРОДИЧИН ПОЈАС КРЕНУО КА СРБИЈИ — ВЕРНИЦИ СА НЕСТРПЉЕЊЕМ ОЧЕКУЈУ СВЕТИЊУ'
        : 'BOGORODIČIN POJAS KRENUO KA SRBIJI — VERNICI SA NESTRPLJENJEM OČEKUJU SVETINJU',

  excerpt:
    language === 'ru'
      ? 'Пояс Пресвятой Богородицы отправился в Сербию, где ожидается событие, которое соберёт тысячи верующих. Это один из важнейших духовных моментов года.'
      : script === 'cyr'
        ? 'Богородичин појас кренуо је ка Србији, где се очекује долазак који ће окупити хиљаде верника. Ово је један од најзначајнијих духовних догађаја године.'
        : 'Bogorodičin pojas krenuo je ka Srbiji, gde se očekuje dolazak koji će okupiti hiljade vernika. Ovo je jedan od najznačajnijih duhovnih događaja godine.',

  image: '/static/images/bogorodicin-pojas.jpeg',
},
    {
  href: '/vesti/u-nisu-mural-nikolaju-rajevskom',
  slug: 'u-nisu-mural-nikolaju-rajevskom',

  category:
    language === 'ru'
      ? 'Новости - 20.05.2026.'
      : script === 'cyr'
        ? 'Вести - 20.05.2026.'
        : 'Vesti - 20.05.2026.',

  title:
    language === 'ru'
      ? 'В НИШЕ ОТКРЫТ МУРАЛ В ЧЕСТЬ РУССКОГО ГЕРОЯ НИКОЛАЯ РАЕВСКОГО'
      : script === 'cyr'
        ? 'У НИШУ ОТКРИВЕН МУРАЛ РУСКОМ ХЕРОЈУ НИКОЛАЈУ РАЈЕВСКОМ'
        : 'U NIŠU OTKRIVEN MURAL RUSKOM HEROJU NIKOLAJU RAJEVSKOM',

  excerpt:
    language === 'ru'
      ? 'В Нише состоялось торжественное открытие мурала, посвящённого герою Сербско-турецкой войны — полковнику Николаю Раевскому. Это событие стало частью подготовки к 150-летию начала войны и символом сербско-русского братства.'
      : script === 'cyr'
        ? 'У Нишу је свечано откривен мурал посвећен хероју Српско-турског рата, пуковнику Николају Рајевском. Овај догађај део је припрема за обележавање 150 година од почетка рата и представља симбол српско-руског братства.'
        : 'U Nišu je svečano otkriven mural posvećen heroju Srpsko-turskog rata, pukovniku Nikolaju Rajevskom. Ovaj događaj deo je priprema za obeležavanje 150 godina od početka rata i predstavlja simbol srpsko-ruskog bratstva.',

  image: '/static/images/nikolaj-rajevski-mural.jpeg',
},
    {
  href: '/vesti/nikolaj-II-romanov',
  slug: 'nikolaj-II-romanov',

  category:
    language === 'ru'
      ? 'Новости - 19.05.2026.'
      : script === 'cyr'
        ? 'Вести - 19.05.2026.'
        : 'Vesti - 19.05.2026.',

  title:
    language === 'ru'
      ? 'ЦАРЬ, КОТОРЫЙ ВСТАЛ ЗА СЕРБИЮ — ПАМЯТЬ О НИКОЛАЕ II РОМАНОВЕ'
      : script === 'cyr'
        ? 'ЦАР КОЈИ ЈЕ СТАО УЗ СРБИЈУ — СЕЋАЊЕ НА НИКОЛАЈА II РОМАНОВА'
        : 'CAR KOJI JE STAO UZ SRBIJU — SEĆANJE NA NIKOLAJA II ROMANOVA',

  excerpt:
    language === 'ru'
      ? '«Вы не будете на меня сердиться, господа, что я прежде всего русский…» Эти слова отражают личность императора Николая II Романова — правителя, который в судьбоносный момент встал на сторону Сербии. Его решение в 1914 году стало одним из ключевых событий начала Первой мировой войны и навсегда закрепило его имя в памяти сербского народа.'
      : script === 'cyr'
        ? '„Нећете ми замерити, господо, што сам пре свега Рус…“ Ове речи најбоље описују личност цара Николаја II Романова — владара који је у судбинском тренутку стао уз Србију. Његова одлука 1914. године постала је један од кључних момената почетка Првог светског рата и заувек га уписала у памћење српског народа.'
        : '„Nećete mi zameriti, gospodo, što sam pre svega Rus…“ Ove reči najbolje opisuju ličnost cara Nikolaja II Romanova — vladara koji je u sudbinskom trenutku stao uz Srbiju. Njegova odluka 1914. godine postala je jedan od ključnih momenata početka Prvog svetskog rata i zauvek ga upisala u pamćenje srpskog naroda.',

  image: '/static/images/nikolaj-II-romanov.jpg',
},
    {
  href: '/vesti/secanje-na-vojvodu-putnika',
  slug: 'secanje-na-vojvodu-putnika',

  category:
    language === 'ru'
      ? 'Новости - 19.05.2026.'
      : script === 'cyr'
        ? 'Вести - 19.05.2026.'
        : 'Vesti - 19.05.2026.',

  title:
    language === 'ru'
      ? 'ПАМЯТЬ О ВОЕВОДЕ РАДОМИРЕ ПУТНИКЕ — СТРАТЕГЕ, ОСТАВИВШЕМ СЛЕД В ИСТОРИИ СЕРБИИ'
      : script === 'cyr'
        ? 'СЕЋАЊЕ НА ВОЈВОДУ РАДОМИРА ПУТНИКА — СТРАТЕГА КОЈИ ЈЕ ОБЕЛЕЖИО ИСТОРИЈУ СРБИЈЕ'
        : 'SEĆANJE NA VOJVODU RADOMIRA PUTNIKA — STRATEGA KOJI JE OBELEŽIO ISTORIJU SRBIJE',

  excerpt:
    language === 'ru'
      ? '«Родину защищают знанием, честью и единством». Эти слова точно отражают наследие воеводы Radomir Putnik — одного из величайших военачальников в истории Сербии. В должности начальника Верховного командования он вел сербскую армию через самые тяжелые испытания Балканских войн и Первой мировой войны.'
      : script === 'cyr'
        ? '„Отаџбина се брани знањем, чашћу и слогом.“ Овим речима најпрецизније се описује наслеђе војводе Радомир Путник, једног од највећих војних умова које је Србија имала. Као начелник Врховне команде, предводио је српску војску кроз најтеже тренутке Балканских ратова и Првог светског рата, остављајући дубок траг у борби за слободу.'
        : '„Otadžbina se brani znanjem, čašću i slogom.“ Ovim rečima najpreciznije se opisuje nasleđe vojvode Radomir Putnik, jednog od najvećih vojnih umova koje je Srbija imala. Kao načelnik Vrhovne komande, predvodio je srpsku vojsku kroz najteže trenutke Balkanskih ratova i Prvog svetskog rata, ostavljajući dubok trag u borbi za slobodu.',

  image: '/static/images/radomir-putnik.jpg',
},
    {
  href: '/vesti/okrugli-sto-u-tuli',
  slug: 'okrugli-sto-u-tuli',

  category:
    language === 'ru'
      ? 'Новости - 19.05.2026.'
      : script === 'cyr'
        ? 'Вести - 19.05.2026.'
        : 'Vesti - 19.05.2026.',

  title:
    language === 'ru'
      ? 'КРУГЛЫЙ СТОЛ В ТУЛЕ: ИСТОРИЧЕСКАЯ ПАМЯТЬ ПОД УДАРОМ ФАЛЬСИФИКАЦИЙ'
      : script === 'cyr'
        ? 'Округли сто у Тули: Историјско памћење на удару фалсификата'
        : 'Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata',

  excerpt:
    language === 'ru'
      ? 'Тула, 15 мая 2026 г. – В Тульском государственном университете состоялся международный круглый стол на тему «Сохранение исторической памяти и противодействие фальсификации истории».'
      : script === 'cyr'
        ? 'Тула, 15. мај 2026. године – На Тулском државном универзитету одржан је међународни округли сто под називом „Очување историјског памћења и супротстављање фалсификовању историје”.'
        : 'Tula, 15. maj 2026. godine – Na Tulskom državnom univerzitetu održan je međunarodni okrugli sto pod nazivom „Očuvanje istorijskog pamćenja i suprotstavljanje falsifikovanju istorije”.',

  image: '/static/images/okrugli-sto-3.jpeg',
},
    {
  href: '/vesti/osnovci-koji-pamte',
  slug: 'osnovci-koji-pamte',

  category:
    language === 'ru'
      ? 'Новости - 18.05.2026.'
      : script === 'cyr'
        ? 'Вести - 18.05.2026.'
        : 'Vesti - 18.05.2026.',

  title:
    language === 'ru'
      ? 'ДЕТИ, КОТОРЫЕ ПОМНЯТ: ШКОЛЬНИКИ ИЗ НОВИ-САДА В СЕРДЦЕ КОСОВО И МЕТОХИИ'
      : script === 'cyr'
        ? 'ДЕЦА КОЈА ПАМТЕ: ОСНОВЦИ ИЗ НОВОГ САДА У СРЦУ КОСОВА И МЕТОХИЈЕ'
        : 'DECA KOJA PAMTE: OSNOVCI IZ NOVOG SADA U SRCU KOSOVA I METOHIJE',

  excerpt:
    language === 'ru'
      ? 'Школьники из Нови-Сада провели незабываемые дни в Косово и Метохии, где через общение со сверстниками и посещение святынь познакомились с историей, верой и идентичностью своего народа.'
      : script === 'cyr'
        ? 'Основци из Новог Сада провели су незаборавне дане на Косову и Метохији, где су кроз дружење са вршњацима и обилазак светиња упознали историју, веру и идентитет свог народа.'
        : 'Osnovci iz Novog Sada proveli su nezaboravne dane na Kosovu i Metohiji, gde su kroz druženje sa vršnjacima i obilazak svetinja upoznali istoriju, veru i identitet svog naroda.',

  image: '/static/images/deca-koja-pamte.jpg',
},
    {
  href: '/vesti/pakla-38-dana-za-srpske-vojnike',
  slug: 'pakla-38-dana-za-srpske-vojnike',

  category:
    language === 'ru'
      ? 'Новости - 18.05.2026.'
      : script === 'cyr'
        ? 'Вести - 18.05.2026.'
        : 'Vesti - 18.05.2026.',

  title:
    language === 'ru'
      ? '38 ДНЕЙ АДА: СЕРБСКИЕ СОЛДАТЫ ПРОШЛИ ЧЕРЕЗ ПЫТКИ ОТ КОШАР ДО ТАЙНЫХ ТЮРЕМ В ГЕРМАНИИ'
      : script === 'cyr'
        ? '38 ДАНА ПАКЛА: СРПСКИ ВОЈНИЦИ ПРОШЛИ КРОЗ ТОРТУРУ ОД КОШАРА ДО ТАЈНИХ ЗАТВОРА У НЕМАЧКОЈ'
        : '38 DANA PAKLA: SRPSKI VOJNICI PROŠLI KROZ TORTURU OD KOŠARA DO TAJNIH ZATVORA U NEMAČKOJ',

  excerpt:
    language === 'ru'
      ? 'Сербские солдаты Шефко Таирович и Бобан Миленкович пережили 38 дней жестоких пыток после захвата у Юника в 1999 году, но отказались подписать ложные признания.'
      : script === 'cyr'
        ? 'Српски војници Шефко Таировић и Бобан Миленковић преживели су 38 дана тешке тортуре након заробљавања код Јуника 1999. године, али су одбили да потпишу лажна признања.'
        : 'Srpski vojnici Šefko Tairović i Boban Milenković preživeli su 38 dana teške torture nakon zarobljavanja kod Junika 1999. godine, ali su odbili da potpišu lažna priznanja.',

  image: '/static/images/dvojica-srpskih-vojnika.jpg',
},
    {
  href: '/vesti/novak-ujedinitelj',
  slug: 'novak-ujedinitelj',

  category:
    language === 'ru'
      ? 'Новости - 17.05.2026.'
      : script === 'cyr'
        ? 'Вести - 17.05.2026.'
        : 'Vesti - 17.05.2026.',

  title:
    language === 'ru'
      ? 'НОВАК — ОБЪЕДИНИТЕЛЬ: ПОСЛЕДНЯЯ НАДЕЖДА НА ЕДИНСТВО СЕРБИИ?'
      : script === 'cyr'
        ? 'НОВАК — УЈЕДИНИТЕЉ: ПОСЛЕДЊА НАДА ЗА ЈЕДИНСТВО СРБИЈЕ?'
        : 'NOVAK UJEDINITELJ: POSLEDNJA NADA ZA JEDINSTVO SRBIJE?',

  excerpt:
    language === 'ru'
      ? 'В условиях глубокого общественного раскола всё чаще звучит призыв к Новаку Джоковичу — символу доверия и единства — включиться в судьбоносный процесс сохранения Сербии.'
      : script === 'cyr'
        ? 'У условима дубоке друштвене подељености све чешће се упућује позив Новаку Ђоковићу — симболу поверења и јединства — да се укључи у судбински процес очувања Србије.'
        : 'U uslovima duboke društvene podeljenosti sve češće se upućuje poziv Novaku Đokoviću — simbolu poverenja i jedinstva — da se uključi u sudbinski proces očuvanja Srbije.',

  image: '/static/images/novak.jpeg',
},
    {
  href: '/vesti/hilandarske-svetinje-u-beogradu',
  slug: 'hilandarske-svetinje-u-beogradu',

  category:
    language === 'ru'
      ? 'Новости - 15.05.2026.'
      : script === 'cyr'
        ? 'Вести - 15.05.2026.'
        : 'Vesti - 15.05.2026.',

  title:
    language === 'ru'
      ? 'СВЯТЫНИ ХИЛАНДАРА ПРИБЫВАЮТ В БЕЛГРАД: ИСТОРИЧЕСКОЕ СОБЫТИЕ К 850-ЛЕТИЮ СВЯТОГО САВВЫ'
      : script === 'cyr'
        ? 'СВЕТИЊЕ ХИЛАНДАРА СТИЖУ У БЕОГРАД: ИСТОРИЈСКИ ДОГАЂАЈ ПОВОДОМ 850 ГОДИНА СВЕТОГ САВЕ'
        : 'HILANDARSKE SVETINJE STIŽU U BEOGRAD: ISTORIJSKI DOGAĐAJ POVODOM 850 GODINA SVETOG SAVE',

  excerpt:
    language === 'ru'
      ? 'Белград примет уникальные святыни из Хиландара поводом 850-летия со дня рождения Святого Саввы — событие, имеющее огромное значение для сербского народа и православной веры.'
      : script === 'cyr'
        ? 'Београд ће угостити драгоцене светиње из Хиландара поводом 850 година од рођења Светог Саве — догађај од изузетног значаја за српски народ и православну веру.'
        : 'Beograd će ugostiti dragocene svetinje iz Hilandara povodom 850 godina od rođenja Svetog Save — događaj od izuzetnog značaja za srpski narod i pravoslavnu veru.',

  image: '/static/images/hilandarske-svetinje.jpg',
},
    {
  href: '/vesti/sport/finale-kupa-crvena-zvezda-vojvodina',
  slug: 'finale-kupa-crvena-zvezda-vojvodina',

  category:
    language === 'ru'
      ? 'Новости - 13.05.2026.'
      : script === 'cyr'
        ? 'Вести - 13.05.2026.'
        : 'Vesti - 13.05.2026.',

  title:
    language === 'ru'
      ? 'ФИНАЛ, КОТОРЫЙ ЗАЖИГАЕТ СЕРБИЮ: «ЦРВЕНА ЗВЕЗДА» ПРОТИВ «ВОЙВОДИНЫ»'
      : script === 'cyr'
        ? 'ФИНАЛЕ КОЈЕ ПАЛИ СРБИЈУ: ЗВЕЗДА И ВОЈВОДИНА У БОРБИ ЗА ТРОФЕЈ'
        : 'FINALE KOJE PALI SRBIJU: ZVEZDA I VOJVODINA U BORBI ZA TROFEJ',

  excerpt:
    language === 'ru'
      ? 'Сегодня вечером «Црвена звезда» и «Войводина» играют финал — один матч, один трофей, одна история.'
      : script === 'cyr'
        ? 'Вечерас Црвена звезда и Војводина играју финале — један меч, један трофеј, једна историја.'
        : 'Večeras Crvena zvezda i Vojvodina igraju finale — jedan meč, jedan trofej, jedna istorija.',

  image: '/static/images/finale-kupa.jpg',
},
    {
  href: '/vesti/petrus-zaboravljena-tvrdjava',
  slug: 'petrus-zaboravljena-tvrdjava',

  category:
    language === 'ru'
      ? 'Новости - 13.05.2026.'
      : script === 'cyr'
        ? 'Вести - 13.05.2026.'
        : 'Vesti - 13.05.2026.',

  title:
    language === 'ru'
      ? 'ПЕТРУС — ЗАБЫТАЯ КРЕПОСТЬ, КОТОРАЯ ВСЁ ЕЩЁ ХРАНИТ ДУХ СЕРБСКОЙ ИСТОРИИ'
      : script === 'cyr'
        ? 'ПЕТРУС – ЗАБОРАВЉЕНА ТВРЂАВА КОЈА И ДАЉЕ ЧУВА ДУХ СРПСКЕ ИСТОРИЈЕ'
        : 'PETRUS – ZABORAVLJENA TVRĐAVA KOJA I DALJE ČUVA DUH SRPSKE ISTORIJE',

  excerpt:
    language === 'ru'
      ? 'Недалеко от Парачина находятся остатки крепости Петрус — тихого, но мощного свидетеля сербской истории и духовного наследия Петрушской области.'
      : script === 'cyr'
        ? 'Недалеко од Параћина налазе се остаци тврђаве Петрус — тихог, али снажног сведока српске историје и духовног наслеђа Петрушке области.'
        : 'Nedaleko od Paraćina nalaze se ostaci tvrđave Petrus — tihog, ali snažnog svedoka srpske istorije i duhovnog nasleđa Petruške oblasti.',

  image: '/static/images/petrus-tvrdjava.jpg',
},
    {
  href: '/vesti/srpska-sela-kod-srebrenice-u-plamenu',
  slug: 'srpska-sela-kod-srebrenice-u-plamenu',

  category:
    language === 'ru'
      ? 'Новости - 12.05.2026.'
      : script === 'cyr'
        ? 'Вести - 12.05.2026.'
        : 'Vesti - 12.05.2026.',

  title:
    language === 'ru'
      ? 'СЕРБСКИЕ СЁЛА У СРЕБРЕНИЦЫ В ОГНЕ: 34 ГОДА СО ДНЯ «МАЙСКИХ КОСТРОВ»'
      : script === 'cyr'
        ? 'СРПСКА СЕЛА КОД СРЕБРЕНИЦЕ У ПЛАМЕНУ: 34 ГОДИНЕ ОД „МАЈСКИХ ЛОМАЧА“'
        : 'SRPSKA SELA KOD SREBRENICE U PLAMENU: 34 GODINE OD „MAJSKIH LOMAČA“',

  excerpt:
    language === 'ru'
      ? '12 мая 1992 года сербские сёла Медже, Осредак, Виогор и Ораховица возле Сребреницы подверглись тяжёлому нападению, в ходе которого были сожжены дома и убиты мирные жители.'
      : script === 'cyr'
        ? 'На дан Светог Василија Острошког 1992. године српска села код Сребренице претрпела су тежак напад у којем су спаљене куће и страдали бројни цивили.'
        : 'Na dan Svetog Vasilija Ostroškog 1992. godine srpska sela kod Srebrenice pretrpela su težak napad u kojem su spaljene kuće i stradali brojni civili.',

  image: '/static/images/srpska-sela-kod-srebrenice.jpg',
},
    {
  href: '/vesti/dan-vojske-republike-srpske',
  slug: 'dan-vojske-republike-srpske',

  category:
    language === 'ru'
      ? 'Новости - 12.05.2026.'
      : script === 'cyr'
        ? 'Вести - 12.05.2026.'
        : 'Vesti - 12.05.2026.',

  title:
    language === 'ru'
      ? 'РЕСПУБЛИКА СЕРБСКАЯ ОТМЕЧАЕТ ДЕНЬ АРМИИ — ПАМЯТЬ О 23 659 ПОГИБШИХ БОЙЦАХ'
      : script === 'cyr'
        ? 'РЕПУБЛИКА СРПСКА ОБЕЛЕЖАВА ДАН ВОЈСКЕ — СЕЋАЊЕ НА 23.659 ПОГИНУЛИХ БОРАЦА'
        : 'REPUBLIKA SRPSKA OBELEŽAVA DAN VOJSKE — SEĆANJE NA 23.659 POGINULIH BORACA',

  excerpt:
    language === 'ru'
      ? 'В Баня-Луке и Биелине проходят мероприятия по случаю Дня Армии Республики Сербской — панихиды, возложение венков и торжественное шествие в память о погибших бойцах.'
      : script === 'cyr'
        ? 'У Бањалуци и Бијељини обележава се Дан Војске Републике Српске уз парастосе, полагање венаца и свечани дефиле у част погинулих бораца.'
        : 'U Banjaluci i Bijeljini obeležava se Dan Vojske Republike Srpske uz parastose, polaganje venaca i svečani defile u čast poginulih boraca.',

  image: '/static/images/dan-vojske-rs.jpg',
},
    {
  href: '/vesti/rusija-vraca-zemljiste-crkvi',
  slug: 'rusija-vraca-zemljiste-crkvi',

  category:
    language === 'ru'
      ? 'Новости - 11.05.2026.'
      : script === 'cyr'
        ? 'Вести - 11.05.2026.'
        : 'Vesti - 11.05.2026.',

  title:
    language === 'ru'
      ? 'РОССИЯ ВОЗВРАЩАЕТ ЗЕМЛЮ МОНАСТЫРЯ ВОЙЛОВИЦА СЕРБСКОЙ ПРАВОСЛАВНОЙ ЦЕРКВИ'
      : script === 'cyr'
        ? 'РУСИЈА ВРАЋА ЗЕМЉИШТЕ МАНАСТИРА ВОЈЛОВИЦА СРПСКОЈ ПРАВОСЛАВНОЈ ЦРКВИ'
        : 'RUSIJA VRAĆA ZEMLJIŠTE MANASTIRA VOJLOVICA SRPSKOJ PRAVOSLAVNOJ CRKVI',

  excerpt:
    language === 'ru'
      ? 'Земля монастыря Войловица, расположенная на территории нефтеперерабатывающего завода в Панчево, будет возвращена Сербской православной церкви после подписания соглашения между митрополитом Банатским Никанором и генеральным директором NIS Кириллом Тюрденевым.'
      : script === 'cyr'
        ? 'Земљиште манастира Војловица, које се налази у кругу рафинерије Панчево, биће враћено Српској православној цркви након споразума који су потписали митрополит банатски Никанор и генерални директор НИС-а Кирил Тјурдењев.'
        : 'Zemljište manastira Vojlovica, koje se nalazi u krugu rafinerije Pančevo, biće vraćeno Srpskoj pravoslavnoj crkvi nakon sporazuma koji su potpisali mitropolit banatski Nikanor i generalni direktor NIS-a Kiril Tjurdenjev.',

  image: '/static/images/rusija-daje-zemljiste.jpg',
},
    {
  href: '/vesti/parada-pobede-u-moskvi',
  slug: 'parada-pobede-u-moskvi',

  category:
    language === 'ru'
      ? 'Новости - 11.05.2026.'
      : script === 'cyr'
        ? 'Вести - 11.05.2026.'
        : 'Vesti - 11.05.2026.',

  title:
    language === 'ru'
      ? 'ПАРАДА ПОБЕДЫ В МОСКВЕ ЗАВЕРШЕНА ВОЗДУШНЫМ СПЕКТАКЛЕМ'
      : script === 'cyr'
        ? 'ПАРАДА ПОБЕДЕ У МОСКВИ ЗАВРШЕНА ВАЗДУШНИМ СПЕКТАКЛОМ'
        : 'PARADA POBEDE U MOSKVI ZAVRŠENA VAZDUŠNIM SPEKTAKLOM',

  excerpt:
    language === 'ru'
      ? 'Парад Победы в Москве завершился впечатляющим воздушным спектаклем: авиационные группы «Русские витязи» и «Стрижи» выполнили манёвр «Кубанский бриллиант», а штурмовики Су-25 окрасили небо в цвета российского флага.'
      : script === 'cyr'
        ? 'Парада победе у Москви завршена је импресивним ваздушним спектаклом: акробатски тимови „Руски витезови“ и „Стрижи“ извели су маневар „Кубански дијамант“, а авиони Су-25 обојили су небо у боје руске заставе.'
        : 'Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom: akrobatski timovi „Ruski vitezovi“ i „Striži“ izveli su manevar „Kubanski dijamant“, a avioni Su-25 obojili su nebo u boje ruske zastave.',

  image: '/static/images/parada-pobede-u-moskvi.jpg',
},
    {
  href: '/vesti/novac-za-vojni-rok-preusmeren-na-sport-i-kulturu',
  slug: 'novac-za-vojni-rok-preusmeren-na-sport-i-kulturu',

  category:
    language === 'ru'
      ? 'Новости - 11.05.2026.'
      : script === 'cyr'
        ? 'Вести - 11.05.2026.'
        : 'Vesti - 11.05.2026.',

  title:
    language === 'ru'
      ? 'СРЕДСТВА ДЛЯ ВОЕННОЙ СЛУЖБЫ ПЕРЕНАПРАВЛЕНЫ НА СПОРТ И КУЛЬТУРУ'
      : script === 'cyr'
        ? 'НОВАЦ ЗА ВОЈНИ РОК ПРЕУСМЕРЕН НА СПОРТ И КУЛТУРУ'
        : 'NOVAC ZA VOJNI ROK PREUSMEREN NA SPORT I KULTURU',

  excerpt:
    language === 'ru'
      ? 'Правительство Сербии перенаправило около 2,5 миллиона евро, ранее предназначенных для реализации обязательной военной службы, Министерствам спорта и культуры.'
      : script === 'cyr'
        ? 'Влада Србије преусмерила је око 2,5 милиона евра, првобитно намењених за реализацију обавезног војног рока, министарствима спорта и културе.'
        : 'Vlada Srbije preusmerila je oko 2,5 miliona evra, prvobitno namenjenih za realizaciju obaveznog vojnog roka, ministarstvima sporta i kulture.',

  image: '/static/images/novac-za-vojni-rok.jpg',
},
    {
  href: '/vesti/premijera-filma-avgust',
  slug: 'premijera-filma-avgust',

  category:
    language === 'ru'
      ? 'Новости - 06.05.2026.'
      : script === 'cyr'
        ? 'Вести - 06.05.2026.'
        : 'Vesti - 06.05.2026.',

  title:
    language === 'ru'
      ? 'ПРЕМЬЕРА ВОЕННОЙ ДРАМЫ «АВГУСТ» В РУССКОМ ДОМЕ В БЕЛГРАДЕ'
      : script === 'cyr'
        ? 'ПРЕМИЈЕРА РУСКЕ ВОЈНЕ ДРАМЕ „АВГУСТ“ У РУСКОМ ДОМУ У БЕОГРАДУ'
        : 'PREMIJERA RUSKE VOJNE DRAME „AVGUST“ U RUSKOM DOMU U BEOGRADU',

  excerpt:
    language === 'ru'
      ? '9 мая в Русском доме в Белграде состоится премьерный показ новой российской военной драмы «Август» с сербскими субтитрами.'
      : script === 'cyr'
        ? '9. маја у Руском дому у Београду биће одржана премијерна пројекција нове руске војне драме „Август“ са српским титловима.'
        : '9. maja u Ruskom domu u Beogradu biće održana premijerna projekcija nove ruske vojne drame „Avgust“ sa srpskim titlovima.',

  image: '/static/images/avgust.jpg',
},
    {
  href: '/vesti/nagrada-evroazije-2026',
  slug: 'nagrada-evroazije-2026',

  category:
    language === 'ru'
      ? 'Новости - 05.05.2026.'
      : script === 'cyr'
        ? 'Вести - 05.05.2026.'
        : 'Vesti - 05.05.2026.',

  title:
    language === 'ru'
      ? 'ПРЕМИЯ «ЕВРАЗИЯ 2026»: ОТКРЫТ ПРИЁМ ЗАЯВОК НА ЛУЧШИЕ ПРОЕКТЫ СО ВСЕГО МИРА'
      : script === 'cyr'
        ? 'НАГРАДА ЕВРОАЗИЈЕ 2026: ОТВОРЕНЕ ПРИЈАВЕ ЗА НАЈБОЉЕ ПРОЈЕКТЕ ИЗ ЦЕЛОГ СВЕТА'
        : 'NAGRADA EVROAZIJE 2026: OTVORENE PRIJAVE ZA NAJBOLJE PROJEKTE IZ CELOG SVETA',

  excerpt:
    language === 'ru'
      ? 'Открыт приём заявок на международную премию «Евразия». Призовой фонд составляет 17 миллионов рублей, а финалисты представят проекты в Москве.'
      : script === 'cyr'
        ? 'Отворене су пријаве за међународну награду Евроазије. Наградни фонд износи 17 милиона рубаља, а финалисти ће представити пројекте у Москви.'
        : 'Otvorene su prijave za međunarodnu nagradu Evroazije. Nagradni fond iznosi 17 miliona rubalja, a finalisti će predstaviti projekte u Moskvi.',

  image: '/static/images/nagrada-evroazije.png',
},
    {
  href: '/vesti/sport/srbija-okuplja-tim-za-ligu-nacija',
  slug: 'srbija-okuplja-tim-za-ligu-nacija',

  category:
    language === 'ru'
      ? 'Новости - 04.05.2026.'
      : script === 'cyr'
        ? 'Вести - 04.05.2026.'
        : 'Vesti - 04.05.2026.',

  title:
    language === 'ru'
      ? 'СЕРБИЯ СОБИРАЕТ СОСТАВ НА ЛИГУ НАЦИЙ: ТРИ ИГРОКА ИЗ РОССИЙСКОГО ЧЕМПИОНАТА'
      : script === 'cyr'
        ? 'СРБИЈА ОКУПЉА ТИМ ЗА ЛИГУ НАЦИЈА: ТРИ ИГРАЧА ИЗ РУСКОГ ПРВЕНСТВА'
        : 'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA',

  excerpt:
    language === 'ru'
      ? 'Три сербских волейболиста из российского чемпионата получили вызов в сборную Сербии на Лигу наций.'
      : script === 'cyr'
        ? 'Тројица српских одбојкаша из руског првенства добили су позив у репрезентацију Србије за Лигу нација.'
        : 'Trojica srpskih odbojkaša iz ruskog prvenstva dobili su poziv u reprezentaciju Srbije za Ligu nacija.',

  image: '/static/images/liga-nacije.jpg',
},
    {
  href: '/vesti/razvoj-saradnje-srbije-i-stavropolja',
  slug: 'razvoj-saradnje-srbije-i-stavropolja',

  category:
    language === 'ru'
      ? 'Новости - 30.04.2026.'
      : script === 'cyr'
        ? 'Вести - 30.04.2026.'
        : 'Vesti - 30.04.2026.',

  title:
    language === 'ru'
      ? 'СТАВРОПОЛЬ И СЕРБИЯ УКРЕПЛЯЮТ СОТРУДНИЧЕСТВО'
      : script === 'cyr'
        ? 'СТАВРОПОЉ И СРБИЈА ЈАЧАЈУ САРАДЊУ'
        : 'STAVROPOLJ I SRBIJA JAČAJU SARADNJU',

  excerpt:
    language === 'ru'
      ? 'Сотрудничество между Сербией и Ставропольским краем выходит на новый уровень — акцент на сельском хозяйстве, совместных проектах и обмене специалистами.'
      : script === 'cyr'
        ? 'Сарадња између Србије и Ставропољског краја добија конкретне обрисе — фокус је на пољопривреди, заједничким пројектима и размени стручњака.'
        : 'Saradnja između Srbije i Stavropoljskog kraja dobija konkretne obrise — fokus je na poljoprivredi, zajedničkim projektima i razmeni stručnjaka.',

  image: '/static/images/saradnja.jpg',
},
    {
  href: '/vesti/murino',
  slug: 'murino',

  category:
    language === 'ru'
      ? 'Новости - 30.04.2026.'
      : script === 'cyr'
        ? 'Вести - 30.04.2026.'
        : 'Vesti - 30.04.2026.',

  title:
    language === 'ru'
      ? 'МУРИНО – 27 ЛЕТ СО ДНЯ ТРАГЕДИИ, КОТОРУЮ НЕЛЬЗЯ ЗАБЫТЬ'
      : script === 'cyr'
        ? 'МУРИНО – 27 ГОДИНА ОД ТРАГЕДИЈЕ КОЈА НЕ СМЕ ДА СЕ ЗАБОРАВИ'
        : 'MURINO – 27 GODINA OD TRAGEDIJE KOJA NE SME DA SE ZABORAVI',

  excerpt:
    language === 'ru'
      ? '27 лет со дня бомбардировки моста в Мурино, где погибли шесть мирных жителей, среди них трое детей — память, которую невозможно стереть.'
      : script === 'cyr'
        ? '27 година од бомбардовања моста у Мурину, где је погинуло шест цивила, међу њима троје деце — сећање које не сме бити заборављено.'
        : '27 godina od bombardovanja mosta u Murinu, gde je poginulo šest civila, među njima troje dece — sećanje koje ne sme biti zaboravljeno.',

  image: '/static/images/murino-1.jpeg',
},
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

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:max-w-4xl mx-auto">
        {danasnjeVesti.map((vest) => (
          <Link key={vest.href} href={vest.href}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-[120px] overflow-hidden sm:h-[280px]">
                <img
                  src={vest.image}
                  alt={vest.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-2 sm:p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  {vest.category}
                </p>

                <h2 className="text-xs font-bold leading-tight sm:text-lg">
                  {vest.title}
                </h2>

                {vest.excerpt && (
                  <p className="mt-1 hidden text-xs text-white/70 sm:block">
                    {vest.excerpt}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
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


      
    </div>
  )
}
