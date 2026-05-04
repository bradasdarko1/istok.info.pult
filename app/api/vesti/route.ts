import { NextResponse } from 'next/server'

export async function GET() {
  const vesti = [
    {
      href: '/vesti/sport/srbija-okuplja-tim-za-ligu-nacija',
      slug: 'srbija-okuplja-tim-za-ligu-nacija',
      category: 'Vesti - 04.05.2026.',
      title: 'SRBIJA OKUPLJA TIM ZA LIGU NACIJA: TRI IGRAČA IZ RUSKOG PRVENSTVA',
      excerpt:
        'Trojica srpskih odbojkaša iz ruskog prvenstva dobili su poziv u reprezentaciju Srbije za Ligu nacija.',
      image: 'https://istokinfopult.rs/static/images/liga-nacije.jpg',
    },
    {
      href: '/vesti/razvoj-saradnje-srbije-i-stavropolja',
      slug: 'razvoj-saradnje-srbije-i-stavropolja',
      category: 'Vesti - 30.04.2026.',
      title: 'STAVROPOLJ I SRBIJA JAČAJU SARADNJU',
      excerpt:
        'Saradnja između Srbije i Stavropoljskog kraja dobija konkretne obrise — fokus je na poljoprivredi, zajedničkim projektima i razmeni stručnjaka.',
      image: 'https://istokinfopult.rs/static/images/saradnja.jpg',
    },
    {
      href: '/vesti/murino',
      slug: 'murino',
      category: 'Vesti - 30.04.2026.',
      title: 'MURINO – 27 GODINA OD TRAGEDIJE KOJA NE SME DA SE ZABORAVI',
      excerpt:
        '27 godina od bombardovanja mosta u Murinu, gde je poginulo šest civila, među njima troje dece — sećanje koje ne sme biti zaboravljeno.',
      image: 'https://istokinfopult.rs/static/images/murino-1.jpeg',
    },
    {
      href: '/vesti/dina-blagojevic',
      slug: 'dina-blagojevic',
      category: 'Vesti - 29.04.2026.',
      title: 'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA',
      excerpt:
        'Srpska fudbalerka Dina Blagojević osvaja Moskvu sa Spartakom — priča o uspehu, snazi i novom početku.',
      image: 'https://istokinfopult.rs/static/images/dina-blagojevic.jpg',
    },
    {
      href: '/vesti/intervju-sa-ocem-aleksandra-bijelica',
      slug: 'intervju-sa-ocem-aleksandra-bijelica',
      category: 'Intervju - 29.04.2026.',
      title:
        '„HVALA TI, SINE“ — OTAC HEROJA ALEKSANDRA BIJELIĆA: REČI KOJE LEDE KRV U ŽILAMA',
      excerpt:
        'Potresno svedočanstvo oca o sinu oficiru, o časti, bolu i ponosu. Intervju koji nikoga ne ostavlja ravnodušnim.',
      image: 'https://istokinfopult.rs/static/images/otac-aleksandra-bijelica.jpeg',
    },
    {
      href: '/vesti/pismo-pjer-anri-binel',
      slug: 'pismo-pjer-anri-binel',
      category: 'Vesti - 28.04.2026.',
      title:
        'PISMO I PORUKA PJERA ANRIJA BINELA SRPSKOM NARODU: REČI PRIJATELJA KOJI JE STAO UZ SRBIJU',
      excerpt:
        'Pjer Anri Binel ostavio je srpskom narodu snažnu poruku o časti, istini i prijateljstvu. Reči čoveka koji nije pristao da ćuti pred nepravdom.',
      image: 'https://istokinfopult.rs/static/images/pismo-srbiji.jpeg',
    },
    {
      href: '/vesti/osnovan-klub-mladih-ruskog-istorijskog-drustva',
      slug: 'osnovan-klub-mladih-ruskog-istorijskog-drustva',
      category: 'Vesti - 28.04.2026.',
      title:
        'U SRBIJI OSNOVAN KLUB MLADIH RUSKOG ISTORIJSKOG DRUŠTVA: NOVA SNAGA ZA OČUVANJE PAMĆENJA',
      excerpt:
        'U Beogradu održana osnivačka konvencija Kluba mladih RID. Mladi preuzimaju ključnu ulogu u očuvanju istorijskog pamćenja i jačanju srpsko-ruskih veza.',
      image: 'https://istokinfopult.rs/static/images/izlozba-7.jpeg',
    },
    {
      href: '/vesti/pjer-anri-binel',
      slug: 'pjer-anri-binel',
      category: 'Vesti - 27.04.2026.',
      title:
        'FRANCUZ KOJI JE RIZIKOVAO SVE ZBOG SRBIJE: PJER ANRI BINEL ISTINSKI HEROJ',
      excerpt:
        'Bivši major francuske vojne obaveštajne službe žrtvovao je karijeru kako bi pomogao Srbiji u teškim danima. Sutra objavljujemo i njegovo pismo.',
      image: 'https://istokinfopult.rs/static/images/pjer.jpeg',
    },
    {
      href: '/vesti/balkanski-most-u-ivanovu',
      slug: 'balkanski-most-u-ivanovu',
      category: 'Vesti - 27.04.2026.',
      title:
        'SRPSKI ISTORIČAR ODUŠEVIO RUSIJU: MILAN STOJANOVIĆ U IVANOVU PREDSTAVIO KNJIGU',
      excerpt:
        'Na forumu „Balkanski most“ u Ivanovu Milan Stojanović predstavio je knjigu „Balkan: istorija i perspektive“ i izazvao veliko interesovanje publike.',
      image: 'https://istokinfopult.rs/static/images/ivanovo-3.jpeg',
    },
    {
      href: '/vesti/slucaj-banjska',
      slug: 'slucaj-banjska',
      category: 'Vesti - 25.04.2026.',
      title: 'DOŽIVOTNE KAZNE POTRESLE SRPSKI NAROD: VREME JE ZA JEDINSTVO I PODRŠKU',
      excerpt:
        'Izrečene presude Blagoju Spasojeviću, Vladimiru Toliću i Dušanu Maksimoviću snažno su odjeknule među Srbima.',
      image: 'https://istokinfopult.rs/static/images/banjska.jpg',
    },
    {
      href: '/vesti/madjarski-izbori-i-buducnost-desnice',
      slug: 'madjarski-izbori-i-buducnost-desnice',
      category: 'Vesti - 24.04.2026.',
      title: 'U NOVOM SADU TRIBINA O MAĐARSKIM IZBORIMA I BUDUĆNOSTI DESNICE',
      excerpt:
        '25. aprila u Istok Info Pultu biće održana otvorena tribina uz učešće dr Dušana Dostanića.',
      image: 'https://istokinfopult.rs/static/images/dusan-dostanic.jpeg',
    },
    {
      href: '/vesti/spomenik-nikolaju-u-srbiji',
      slug: 'spomenik-nikolaju-u-srbiji',
      category: 'Vesti - 24.04.2026.',
      title: 'U MOSKVI PREDSTAVLJEN SPOMENIK RUSKOM HEROJU KOJI ĆE BITI PODIGNUT U SRBIJI',
      excerpt:
        'Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.',
      image: 'https://istokinfopult.rs/static/images/spomenik-nikolaju.jpeg',
    },
    {
      href: '/vesti/tula-forum',
      slug: 'tula-forum',
      category: 'Vesti - 24.04.2026.',
      title: 'RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI',
      excerpt:
        'U Tulskom državnom univerzitetu održan je međunarodni forum o zajedničkoj pobedi nad nacizmom, gde su snažne govore održali predstavnici Srbije.',
      image: 'https://istokinfopult.rs/static/images/tula-forum-3.jpeg',
    },
    {
      href: '/vesti/otvaranje-ruskog-konzulata-u-novom-sadu',
      slug: 'otvaranje-ruskog-konzulata-u-novom-sadu',
      category: 'Vesti - 23.04.2026.',
      title: 'NOVI SAD DOBIO POČASNI KONZULAT RUSIJE',
      excerpt:
        'Svečano otvaranje Počasnog konzulata Ruske Federacije održano je u ulici Branka Bajića broj 2, uz prisustvo crkvenih velikodostojnika, diplomatskih zvaničnika i brojnih gostiju.',
      image: 'https://istokinfopult.rs/static/images/otvaranje-ruskog-konzulata.jpeg',
    },
    {
      href: '/konkursi/letnji-univerzitet',
      slug: 'letnji-univerzitet',
      category: 'Konkursi - 23.04.2026.',
      title: 'LETNJI UNIVERZITET U RUSIJI OTVARA VRATA STRANIM STUDENTIMA',
      excerpt:
        'Međunarodni program za studente završnih godina. Put, smeštaj, ishrana i ekskurzije su pokriveni.',
      image: 'https://istokinfopult.rs/static/images/letnji-univerzitet.jpeg',
    },
    {
      href: '/vesti/aleksandar-bijelic',
      slug: 'aleksandar-bijelic',
      category: 'Vesti - 22.04.2026.',
      title: 'SRPSKI OFICIR KOJI JE POGINUO KAO HEROJ',
      excerpt:
        'Ime Aleksandra Bijelića ostaje simbol časti, žrtve i vernosti dužnosti.',
      image: 'https://istokinfopult.rs/static/images/aleksandar-bijelic.jpeg',
    },
    {
      href: '/vesti/ruski-konzulat',
      slug: 'ruski-konzulat',
      category: 'Vesti - 22.04.2026.',
      title: 'U NOVOM SADU SE OTVARA POČASNI KONZULAT RUSIJE',
      excerpt:
        'Otvaranje Počasnog konzulata Rusije jača diplomatske i ekonomske veze između Srbije i Rusije.',
      image: 'https://istokinfopult.rs/static/images/ruski-konzulat.jpeg',
    },
    {
      href: '/konkursi/letnji-institut',
      slug: 'letnji-institut',
      category: 'Konkursi - 21.04.2026.',
      title: 'LETNJI INSTITUT OTVARA VRATA MLADIM NAUČNICIMA',
      excerpt:
        'Program u Rusiji za nastavnike i istraživače do 35 godina. Sve troškove pokrivaju organizatori.',
      image: 'https://istokinfopult.rs/static/images/letnji-institut.jpeg',
    },
    {
      href: '/vesti/rusija-otvara-vrata',
      slug: 'rusija-otvara-vrata',
      category: 'Vesti - 21.04.2026.',
      title: 'RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA',
      excerpt:
        'Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka.',
      image: 'https://istokinfopult.rs/static/images/rusija-otvara-vrata.jpeg',
    },
    {
      href: '/vesti/fondacija-gorcakov',
      slug: 'fondacija-gorcakov',
      category: 'Vesti - 20.04.2026.',
      title:
        'BEOGRAD DOMAĆIN BUDUĆNOSTI: OTVORENE PRIJAVE ZA BALKANSKI DIJALOG 2026',
      excerpt:
        'Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.',
      image: 'https://istokinfopult.rs/static/images/dijalog.jpeg',
    },
    {
      href: '/bioskop/najave',
      slug: 'noc-na-zaporoskom-frontu',
      category: 'Bioskop - 20.04.2026.',
      title: 'NOĆ NA ZAPOROŠKOM FRONTU',
      excerpt:
        'Premijerna projekcija filma biće održana u utorak 21.04. od 20:00 časova u bioskopu ISTOK INFO PULT. Pozivamo sve ljubitelje filma na svečanu projekciju.',
      image: 'https://istokinfopult.rs/static/images/bioskop.jpg',
    },
    {
      href: '/vesti/novi-sad-ustao',
      slug: 'novi-sad-ustao',
      category: 'Vesti - 20.04.2026.',
      title: 'NOVI SAD USTAO ZA PAMĆENJE',
      excerpt:
        'Tokom prethodna četiri dana građanska udruženja sprovela su veliku akciju na pijacama Novog Sada. Već u sredu sledi nova akcija na stadionu Karađorđe.',
      image: 'https://istokinfopult.rs/static/images/pijaca-2.jpeg',
    },
    {
      href: '/vesti/balkanski-most',
      slug: 'balkanski-most',
      category: 'Vesti - 16.04.2026.',
      title: 'BALKANSKI MOST SEĆANJA',
      excerpt:
        'Na Tulskom državnom univerzitetu premijerno je u Rusiji prikazan film „Ustaški Alkazar“, uz razgovor o zajedničkim korenima genocida nad slovenskim narodima.',
      image: 'https://istokinfopult.rs/static/images/balkanski-most-1.jpeg',
    },
    {
      href: '/vesti/zbog-ljubavi-otisao-u-rusiju',
      slug: 'zbog-ljubavi-otisao-u-rusiju',
      category: 'Vesti - 16.04.2026.',
      title: 'ZBOG LJUBAVI OTIŠAO U RUSIJU',
      excerpt:
        'Intervju sa Milanom Stojanovićem o životu u Rusiji, Srbiji, mladima, veri, pozivu i snažnim vezama dva bratska naroda.',
      image: 'https://istokinfopult.rs/static/images/zbog-ljubavi-rusija-1.jpeg',
    },
    {
      href: '/vesti/peticija-riblja',
      slug: 'peticija-riblja',
      category: 'Vesti - 15.04.2026.',
      title: 'POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU',
      excerpt:
        'Organizacija Istok Info Pult poziva građane Novog Sada da 16. aprila od 9 časova na Ribljoj pijaci podrže inicijativu za podizanje spomenika žrtvama NATO agresije.',
      image: 'https://istokinfopult.rs/static/images/riblja-share.jpg',
    },
    {
      href: '/vesti/peticija-spomenik',
      slug: 'peticija-spomenik',
      category: 'Vesti - 14.04.2026.',
      title: 'POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU',
      excerpt:
        'Organizacija Istok Info Pult nastavlja svoju građansku inicijativu i poziva sve Novosađane i ljude dobre volje da daju svoj potpis podrške za podizanje spomenika žrtvama NATO agresije.',
      image: 'https://istokinfopult.rs/static/images/pijaca.jpg',
    },
    {
      href: '/vesti/izbori-madjarska',
      slug: 'izbori-madjarska',
      category: 'Vesti - 13.04.2026.',
      title: 'MAĐAR OSVOJIO MAĐARSKU',
      excerpt:
        'Smena Orbana nakon 16 godina na vlasti i početak nove političke etape u Mađarskoj.',
      image: 'https://istokinfopult.rs/static/images/madjarska.jpg',
    },
    {
      href: '/vesti/hristos-voskrese',
      slug: 'hristos-voskrese',
      category: 'Vesti - 12.04.2026.',
      title: 'SVETLO VASKRSENJA DONOSI NADU I NOVI POČETAK',
      excerpt:
        'Pravoslavni vernici širom sveta danas obeležavaju najveći hrišćanski praznik – Vaskrs, dan pobede života nad smrću, svetlosti nad tamom i vere nad beznađem.',
      image: 'https://istokinfopult.rs/static/images/vaskrs.jpeg',
    },
    {
      href: '/vesti/veliki-petak',
      slug: 'veliki-petak',
      category: 'Vesti - 10.04.2026.',
      title: 'Veliki petak – dan stradanja, tišine i molitve',
      excerpt:
        'Danas pravoslavni vernici obeležavaju Veliki petak, najtužniji dan u hrišćanskom kalendaru, posvećen sećanju na stradanje i raspeće Isusa Hrista.',
      image: 'https://istokinfopult.rs/static/images/petak.jpg',
    },
    {
      href: '/vesti/ambasador',
      slug: 'ambasador',
      category: 'Vesti - 10.04.2026.',
      title: 'Iran nema nuklearnu bombu niti je želi',
      excerpt:
        'Gost ambasador Irana u prostorijama ISTOK INFO PULTA, podržava i spomenik žrtvama NATO agresije',
      image: 'https://istokinfopult.rs/static/images/iran-11.JPG',
    },
    {
      href: '/vesti/kosare',
      slug: 'kosare',
      category: 'Vesti - 09.04.2026.',
      title: 'Herojstvo za nezaborav',
      excerpt:
        '9. aprila 1999. godine počela je Bitka za Košare — simbol odbrane otadžbine.',
      image: 'https://istokinfopult.rs/static/images/kosare.jpeg',
    },
    {
      href: '/kultura/dogadjaji/podmornicari',
      slug: 'podmornicari',
      category: 'Kultura - 09.04.2026.',
      title: 'Obeležen Dan podmorničara u prostorijama ISTOK INFO PULTA',
      excerpt:
        'Događaj je upotpunjen poetskim nastupom Srpsko-ruskog udruženja građana "Svet bez granica" Sombor.',
      image: 'https://istokinfopult.rs/static/images/pod-1.JPG',
    },
    {
      href: '/vesti/vesti-istok/rusija-predavanje',
      slug: 'rusija-predavanje',
      category: 'Istok vesti - 09.04.2026.',
      title: 'Ruski lekari na Balkanu: predavanje u Tuli o sećanju i bratstvu',
      excerpt:
        'Na univerzitetu u Tuli održano je predavanje o ruskim medicinskim misijama u Srbiji.',
      image: 'https://istokinfopult.rs/static/images/rusija-2.jpeg',
    },
    {
      href: '/vesti/sport/pobeda-vosa',
      slug: 'pobeda-vose',
      category: 'Sport - 09.04.2026.',
      title: 'Vojvodina pobedila Radnički rezultatom 3:2',
      excerpt:
        'Fudbaleri Vojvodine ostvarili važnu pobedu protiv Radničkog iz Niša.',
      image: 'https://istokinfopult.rs/static/images/vosa.jpg',
    },
    {
      href: '/vesti/potpisi',
      slug: 'potpisi',
      category: 'Vesti - 09.04.2026.',
      title:
        'Navijači FK Vojvodina podržali peticiju za podizanje spomenika žrtvama NATO agresije',
      excerpt:
        'Navijači FK Vojvodina pridružili su se inicijativi i podržali peticiju.',
      image: 'https://istokinfopult.rs/static/images/stadion-3.jpg',
    },
    {
      href: '/vesti/sport/dusko-vujosevic',
      slug: 'dusko-vujosevic',
      category: 'Sport - 08.04.2026.',
      title: 'PREMINUO TRENER DUŠKO VUJOŠEVIĆ',
      excerpt:
        'Legendarni košarkaški trener Duško Vujošević preminuo je danas, 08.04.2026. godine u Beogradu.',
      image: 'https://istokinfopult.rs/static/images/dusko.jpg',
    },
    {
      href: '/vesti/stadion-peticija',
      slug: 'stadion-peticija',
      category: 'Vesti - 08.04.2026.',
      title:
        'Danas na Karađorđu podržite inicijativu za podizanje spomenika žrtvama NATO agresije!',
      excerpt: '',
      image: 'https://istokinfopult.rs/static/images/stadion.jpg',
    },
  ]

  return NextResponse.json(vesti)
}