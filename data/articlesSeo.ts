import type { ArticleSeoData } from '@/lib/articleSeo'

// Datum objavljivanja se navodi samo ako je potvrđen iz fajla članka.
// Proveri AUDIT.csv pre objavljivanja.
export const articlesSeo: Record<string, ArticleSeoData> = {

'teska-sudbina-nikole-simica-nakon-crkvenog-postupka': {
  slug: 'teska-sudbina-nikole-simica-nakon-crkvenog-postupka',

  title:
    'Od oltara do građevine u tuđini: Teška sudbina Nikole Simića | Istok Info Pult',

  description:
    'Nikola Simić, nekadašnji sveštenik Eparhije šumadijske, nakon crkvenog postupka ostao je bez svešteničkog čina. Njegova sudbina otvara pitanja slobode savesti, crkvene discipline i milosrđa.',

  image:
    '/static/images/nikola-simic.jpg',

  publishedAt: '2026-10-31',

  author: 'Istok Info Pult',
},
'mica-zivojinovic-o-drazi-mihajlovicu': {
  slug: 'mica-zivojinovic-o-drazi-mihajlovicu',

  title:
    'Mića Živojinović otkriva tajne o Draži Mihailoviću | Istok Info Pult',

  description:
    'Mića Živojinović u podkastu Razgovori u Istoku najavljuje dosad neobjavljena saznanja o generalu Draži Mihailoviću. Saznajte šta donosi nova epizoda.',

  image:
    '/static/images/mica-zivojinovic-o-drazi-mihajlovicu.jpg',

  publishedAt: '2026-10-29',

  author: 'Istok Info Pult',
},
'novak-djokovic-o-izborima-u-srbiji': {
  slug: 'novak-djokovic-o-izborima-u-srbiji',

  title:
    'Novak Đoković o izborima u Srbiji: Studenti su probudili nadu',

  description:
    'Novak Đoković komentarisao pobedu Studentske liste na izborima u Srbiji 25. oktobra 2026. godine. Pohvalio studente i izrazio nadu u bolju budućnost Srbije.',

  image:
    '/static/images/novak-djokovic.jpg',

  publishedAt: '2026-10-28',

  author: 'Istok Info Pult',
},
  
'razgovori-u-istoku-003-marija-jovovic': {
  slug: 'razgovori-u-istoku-003-marija-jovovic',

  title:
    'Marija Jovović o Blagoju Jovoviću, atentatu na Pavelića i životu u Argentini | Razgovori u Istoku 003',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, u trećoj epizodi podkasta Razgovori u Istoku govori o atentatu na Antu Pavelića, životu u Argentini, porodičnim tajnama i istorijskom nasleđu svog oca.',

  image:
    '/static/images/razgovori-u-istoku-003-marija-jovovic.jpg',

  publishedAt: '2026-10-26',

  author: 'Istok Info Pult',
},

'marija-jovovic-razgovori-u-istoku-price-koje-do-sada-niste-culi': {
  slug: 'marija-jovovic-razgovori-u-istoku-price-koje-do-sada-niste-culi',

  title:
    'Marija Jovović o Blagoju Jovoviću – neispričane priče | Istok Info Pult',

  description:
    'Marija Jovović, ćerka Blagoja Jovovića, u podkastu Razgovori u Istoku otkriva neispričane priče o svom ocu, porodičnoj istoriji i nasleđu koje nosi.',

  image:
    '/static/images/istina-o-blagoju-jovovicu.jpg',

  publishedAt: '2026-10-26',

  author: 'Istok Info Pult',
},
 
'novi-sad-je-sinoc-disao-slobodu-ponovo-ce-procvetati-bozur': {
  slug: 'novi-sad-je-sinoc-disao-slobodu-ponovo-ce-procvetati-bozur',

  title:
    'Novi Sad je sinoć disao slobodu – ponovo će procvetati božur',

  description:
    'Novi Sad je na Trgu slobode proslavio pobedu Studentske liste uz pesmu, kolo i srpske zastave. Šesnaest minuta tišine posvećeno je žrtvama pada nadstrešnice.',

  image: '/static/images/srbija-je-slobodna.jpg',

  publishedAt: '2026-10-26',

  author: 'Istok Info Pult',
},
'srbija-je-slobodna-studenska-lista-odnela-pobedu': {
  slug: 'srbija-je-slobodna-studenska-lista-odnela-pobedu',
  title:
    'Studentska lista pobedila na izborima u Srbiji – Vučić priznao poraz',
  description:
    'Studentska lista osvojila je oko 52 odsto glasova prema prvim projekcijama CeSID-a. Aleksandar Vučić priznao izborni poraz na parlamentarnim izborima 2026.',
  image: '/static/images/studentska-lista-odnela-pobedu.jpg',
  publishedAt: '2026-10-25',
},

'intervju-u-istoku-mirko-poledica': {
  slug: 'intervju-u-istoku-mirko-poledica',

  title:
    'Mirko Poledica o stanju u srpskom fudbalu | Intervju u Istoku',

  description:
    'Mirko Poledica, predsednik Sindikata profesionalnih fudbalera „Nezavisnost“, govori o stanju u srpskom fudbalu, pravima igrača i problemima fudbalskog sistema.',

  image: '/static/images/mirko-poledica.jpg',

  publishedAt: '2026-10-24',

  author: 'Istok Info Pult',
},
  
"istok-info-pult-i-srpsko-ruski-centar-majak-ozvanicili-saradnju": {
  slug: "istok-info-pult-i-srpsko-ruski-centar-majak-ozvanicili-saradnju",

  title:
    "Istok Info Pult i Srpsko-ruski centar Majak ozvaničili saradnju",

  description:
    "Istok Info Pult i Srpsko-ruski centar Majak potpisali su protokol o saradnji u oblasti kulture, istorije i očuvanja srpsko-ruskog prijateljstva.",

  image: "/static/images/potpisan-protokol-o-saradnji.jpeg",

  publishedAt: "2026-10-23",
},

  "aleksa-filipovic-predavanje-u-tuli": {
    slug: "aleksa-filipovic-predavanje-u-tuli",
    title: "Dr Aleksa Filipović održao predavanje u Tuli: Spoljna politika Srbije između četiri stuba",
    description: "Dr Aleksa Filipović govorio je u Tuli o spoljnoj politici Srbije, odnosima sa EU, SAD, Rusijom i Kinom, vojnoj neutralnosti i savremenim geopolitičkim izazovima.",
    image: "/static/images/aleksa-1.jpeg",
    publishedAt: "2026-06-02",
  },
  "aleksandar-bijelic": {
    slug: "aleksandar-bijelic",
    title: "Српски официр Александар Бијелић – херој који не сме бити заборављен",
    description: "Прича о Александру Бијелићу, српском официру српско-руског порекла, његовом животу, војничкој части и жртви која не сме бити заборављена.",
    image: "/static/images/aleksandar-bijelic.jpeg",
    publishedAt: "2026-04-22",
  },
  "ambasador": {
    slug: "ambasador",
    title: "Iran nema nuklearnu bombu niti je želi",
    description: "Gost ambasador Irana u prostorijama ISTOK INFO PULTA, podržava i spomenik žrtvama NATO agresije",
    image: "/static/images/iran-11.JPG",
    publishedAt: "2026-04-10",
  },
  "auto-kolona-u-nisu": {
    slug: "auto-kolona-u-nisu",
    title: "Auto-kolona u Nišu povodom Dana Rusije 11. juna",
    description: "Društvo rusko-srpskog prijateljstva „Bratstvo“ iz Niša organizuje svečanu auto-kolonu 11. juna u susret Danu Rusije i poziva građane da se pridruže događaju.",
    image: "/static/images/auto-kolona-u-nisu.jpeg",
    publishedAt: "2026-06-09",
  },
  "balkanski-most": {
    slug: "balkanski-most",
    title: "Balkanski most sećanja u Rusiji",
    description: "Na Tulskom državnom univerzitetu premijerno je u Rusiji prikazan film „Ustaški Alkazar“, uz razgovor o zajedničkim korenima genocida nad Slovenima.",
    image: "/static/images/balkanski-most-1.jpeg",
    publishedAt: "2026-04-16",
  },
  "balkanski-most-u-ivanovu": {
    slug: "balkanski-most-u-ivanovu",
    title: "Srpski istoričar oduševio Rusiju: Milan Stojanović u Ivanovu predstavio knjigu koja spaja Balkan i Rusiju",
    description: "Na VI forumu-festivalu „Balkanski most“ u Ivanovu, srpski istoričar Milan Stojanović predstavio je knjigu „Balkan: istorija i perspektive“.",
    image: "/static/images/ivanovo-3.jpeg",
    publishedAt: "2026-04-27",
  },
  "balksanski-most": {
    slug: "balksanski-most",
    title: "Balkanski most sećanja u Rusiji",
    description: "Na Tulskom državnom univerzitetu premijerno je u Rusiji prikazan film „Ustaški Alkazar“, uz razgovor o zajedničkim korenima genocida nad Slovenima.",
    image: "/static/images/balkanski-most-1.jpeg",
    publishedAt: "2026-04-16",
  },
  "besplatna-prilika-za-ucenje-ruskog-jezika": {
    slug: "besplatna-prilika-za-ucenje-ruskog-jezika",
    title: "Besplatna prilika za učenje ruskog jezika: HSE Sankt Peterburg poziva na onlajn Razgovorni klub",
    description: "Nacionalni istraživački univerzitet „Visoka škola ekonomije“ iz Sankt Peterburga organizuje besplatan onlajn Razgovorni klub za sve koji žele da započnu učenje ruskog jezika.",
    image: "/static/images/besplatna-prilika-za-ucenje-ruskog-jezika.png",
    publishedAt: "2026-06-17",
  },
  "bitka-na-pastriku": {
    slug: "bitka-na-pastriku",
    title: "PAŠTRIK — DAN KADA JE SRBIJA ODBRANJENA POD KIŠOM VATRE I ČELIKA",
    description: "Na današnji dan, 27. maja 1999. godine, započela je jedna od najtežih i najslavnijih bitaka u novijoj istoriji Srbije — Bitka na Paštriku.",
    image: "/static/images/bitka-pastrik.jpg",
    publishedAt: "2026-05-27",
  },
  "bogorodicin-pojas-krenuo-ka-srbiji": {
    slug: "bogorodicin-pojas-krenuo-ka-srbiji",
    title: "Bogorodičin pojas krenuo ka Srbiji — vernici sa nestrpljenjem očekuju svetinju",
    description: "Velika pravoslavna svetinja — Bogorodičin pojas — krenula je ka Srbiji, gde se očekuje dolazak koji će okupiti hiljade vernika iz celog regiona.",
    image: "/static/images/bogorodicin-pojas.jpeg",
    publishedAt: "2026-05-20",
  },
  "cegar-sloboda-placena-zivotima": {
    slug: "cegar-sloboda-placena-zivotima",
    title: "Čegar – mesto gde je sloboda plaćena životom: 217 godina od podviga Stevana Sinđelića",
    description: "Na Čegaru kod Niša obeležena je 217. godišnjica slavne Čegarske bitke, jednog od najznačajnijih događaja Prvog srpskog ustanka i simbol srpskog junaštva.",
    image: "/static/images/cegar.jpg",
    publishedAt: "2026-06-01",
  },
  "crkva-samodreza": {
    slug: "crkva-samodreza",
    title: "Crkva Samodreža – svetinja u kojoj se, prema predanju, knez Lazar pričestio pred Kosovski boj",
    description: "Crkva Samodreža kod Vučitrna, posvećena Svetom Jovanu Krstitelju, zauzima posebno mesto u srpskoj istoriji i narodnom predanju. Prema tradiciji, upravo u ovoj svetinji knez Lazar pričestio se sa vojskom pred Kosovski boj 1389. godine.",
    image: "/static/images/crkva-samodrez.jpeg",
    publishedAt: "2026-06-30",
  },
  "dan-kada-se-srpska-zastava-zavijorila-iznad-bele-kuce": {
    slug: "dan-kada-se-srpska-zastava-zavijorila-iznad-bele-kuce",
    title: "Dan kada se srpska zastava zavijorila iznad Bele kuće",
    description: "Dana 28. jula 1918. godine u Sjedinjenim Američkim Državama obeležen je „Srpski dan“, a zastava Kraljevine Srbije zavijorila se iznad Bele kuće u čast srpskog naroda i njegovih žrtava u Velikom ratu.",
    image: "/static/images/srpska-zastava.jpg",
    publishedAt: "2026-07-30",
  },
  "dan-vojske-republike-srpske": {
    slug: "dan-vojske-republike-srpske",
    title: "Srpska obeležava Dan Vojske Republike Srpske – sećanje na 23.659 poginulih boraca",
    description: "Republika Srpska obeležava Dan Vojske Republike Srpske i Dan Trećeg pešadijskog puka, uz parastose, polaganje venaca i svečanosti u Banjaluci i Bijeljini.",
    image: "/static/images/dan-vojske-rs.jpg",
    publishedAt: "2026-05-12",
  },
  "dina-blagojevic": {
    slug: "dina-blagojevic",
    title: "DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA",
    description: "Srpska reprezentativka Dina Blagojević zasijala u Moskvi sa Spartakom. Priča o uspehu, hrabrosti i novom životu u Rusiji.",
    image: "/static/images/dina-blagojevic.jpg",
    publishedAt: "2026-04-29",
  },
  "fondacija-gorcakov": {
    slug: "fondacija-gorcakov",
    title: "Beograd domaćin budućnosti: Otvorene prijave za Balkanski dijalog 2026",
    description: "Fondacija Gorčakov otvara prijave za godišnji obrazovni program „Balkanski Dijalog – 2026“, koji će se održati od 2. do 6. juna u Beogradu.",
    image: "/static/images/dijalog.jpeg",
    publishedAt: "2026-04-20",
  },
  "gavrilo-princip": {
    slug: "gavrilo-princip",
    title: "Гаврило Принцип – метак који је променио ток историје",
    description: "Гаврило Принцип, Сарајевски атентат 1914. године и догађаји који су претходили Првом светском рату. Историјска прича на Исток Инфо Пулту.",
    image: "/static/images/gavrilo-princip.jpg",
    publishedAt: "2026-07-25",
  },
  "hilandarske-svetinje-u-beogradu": {
    slug: "hilandarske-svetinje-u-beogradu",
    title: "Hilandarske svetinje stižu u Beograd: istorijski događaj povodom 850 godina od rođenja Svetog Save",
    description: "Povodom 850 godina od rođenja Svetog Save, u Beograd stižu najznačajnije svetinje iz Manastira Hilandara. Izložba „Sveti Sava“ biće održana u Galeriji SANU od 15. maja do 19. jula.",
    image: "/static/images/hilandarske-svetinje.jpg",
    publishedAt: "2026-05-15",
  },
  "hristos-voskrese": {
    slug: "hristos-voskrese",
    title: "SVETLO VASKRSENJA DONOSI NADU I NOVI POČETAK",
    description: "Pravoslavni vernici širom sveta danas obeležavaju najveći hrišćanski praznik – Vaskrs, dan pobede života nad smrću, svetlosti nad tamom i vere nad beznađem.",
    image: "/static/images/vaskrs.jpeg",
    publishedAt: "2026-04-12",
  },
  "idealogija-ukrajinskog-nacizma": {
    slug: "idealogija-ukrajinskog-nacizma",
    title: "„IDEOLOGIJA UKRAJINSKOG NACIZMA“ — istorijska analiza Sergeja Vladimiroviča Fedosejeva",
    description: "Istoričar Sergej Vladimirovič Fedosejev donosi detaljnu analizu nastanka ukrajinskog integralnog nacionalizma, uloge unijatstva i političkih procesa koji su oblikovali savremenu ukrajinsku krizu.",
    image: "/static/images/fedosejev.jpeg",
    publishedAt: "2026-05-29",
  },
  "incident-na-cukur-cesmi": {
    slug: "incident-na-cukur-cesmi",
    title: "Na današnji dan: Incident na Čukur česmi koji je ubrzao oslobođenje Srbije",
    description: "Na današnji dan 1862. godine dogodio se incident na Čukur česmi u Beogradu, jedan od ključnih događaja koji je doprineo konačnom oslobođenju Srbije od osmanske vlasti.",
    image: "/static/images/incident-na-cukur-cesmi.jpeg",
    publishedAt: "2026-06-15",
  },
  "inicijativa-za-spomenik": {
    slug: "inicijativa-za-spomenik",
    title: "NOVI SAD USTAO ZA PAMĆENJE: HILJADE GRAĐANA PODRŽALE INICIJATIVU",
    description: "Tokom prethodna četiri dana, Udruženje građana Lokalitet, Istok Info Pult i Novosađani 1989 uspešno su sproveli veliku akciju razgovora sa građanima i prikupljanja podrške na pijacama širom Novog Sada.",
    image: "/static/images/pijaca-2.jpeg",
    publishedAt: "2026-04-20",
  },
  "intervju-sa-ocem-aleksandra-bijelica": {
    slug: "intervju-sa-ocem-aleksandra-bijelica",
    title: "„Hvala ti, sine“ — Otac heroja Aleksandra Bijelića",
    description: "Potresan intervju sa ocem Aleksandra Bijelića o sinu, hrabrosti, vojničkoj časti, bolu koji ne prolazi i rečenici koju bi mu danas rekao.",
    image: "/static/images/otac-aleksandra-bijelica.jpeg",
    publishedAt: "2026-04-29",
  },
  "istok-klub-stize-u-novi-sad": {
    slug: "istok-klub-stize-u-novi-sad",
    title: "ISTOK KLUB stiže u Novi Sad – Više od kafe, više od druženja!",
    description: "Novi Sad uskoro dobija novo mesto susreta, kulture i druženja! ISTOK KLUB na adresi Maksima Gorkog 2A donosi vrhunsku kafu, prijatan ambijent, podkaste, kvizove znanja, karaoke večeri i bogat kulturno-zabavni program.",
    image: "/static/images/istok-klub.jpg",
    publishedAt: "2026-10-12",
  },
  "italijanski-general-koji-je-stao-uz-srpske-svetinje": {
    slug: "italijanski-general-koji-je-stao-uz-srpske-svetinje",
    title: "ITALIJANSKI GENERAL KOJI JE STAO UZ SRPSKE SVETINJE — ČAST U VREMENU POGROMA",
    description: "Priča o italijanskom generalu Rafaeleu Iubiniju i italijanskim padobrancima KFOR-a koji su tokom martovskog pogroma 2004. godine stali u odbranu Pećke patrijaršije, srpskih svetinja i nevinih ljudi.",
    image: "/static/images/italijanski-general.jpg",
    publishedAt: "2026-05-21",
  },
  "izbori-madjarska": {
    slug: "izbori-madjarska",
    title: "MAĐAR OSVOJIO MAĐARSKU",
    description: "SMENA ORBANA NAKON 16 GODINA NA VLASTI",
    image: "/static/images/madjarska.jpg",
    publishedAt: "2026-04-13",
  },
  "junaci-koje-je-grad-gotovo-zaboravio": {
    slug: "junaci-koje-je-grad-gotovo-zaboravio",
    title: "Ruski trag u Novom Sadu: Junaci koje je grad gotovo zaboravio",
    description: "Portal Istok Info pokreće serijal priča o ruskim oficirima, inženjerima, lekarima, profesorima, umetnicima i mornarima koji su svojim radom, znanjem i žrtvom ostavili dubok trag u istoriji Novog Sada.",
    image: "/static/images/ruski-trag-u-novom-sadu.jpg",
    publishedAt: "2026-07-24",
  },
  "kej-zrtava-racije": {
    slug: "kej-zrtava-racije",
    title: "Na Keju žrtava racije: sportisti i predstavnici Ruske Federacije zajedno za spomenik žrtvama NATO agresije",
    description: "U subotu, 4. aprila 2026. godine, na Keju žrtava racije u Novom Sadu održan je događaj sa ciljem potpisivanja peticije za podizanje spomenika žrtvama NATO agresije.",
    image: "/static/images/kej-1.jpg",
    publishedAt: "2026-04-06",
  },
  "ko-je-nacisticko-kopile-mihael-martens": {
    slug: "ko-je-nacisticko-kopile-mihael-martens",
    title: "Usred Beograda pitao kako „ubiti više Rusa“ — ko je Mihael Martens?",
    description: "Nemački novinar Mihael Martens pitao je u Beogradu šta Evropljani mogu da učine kako bi pomogli Ukrajini da „ubije više Rusa“, nakon čega je precizirao — „više ruskih vojnika“. Ko je Martens i kako je naknadno objasnio svoje reči?",
    image: "/static/images/mihael-martens.jpeg",
    publishedAt: "2026-08-11",
  },
  "kosare": {
    slug: "kosare",
    title: "Herojstvo za nezaborav",
    description: "Na današnji dan 1999. godine počela je Bitka za Košare, jedna od najtežih i najsimboličnijih borbi u novijoj istoriji srpske vojske.",
    image: "/static/images/kosare.jpeg",
    publishedAt: "2026-04-09",
  },
  "madjarski-izbori-i-buducnost-desnice": {
    slug: "madjarski-izbori-i-buducnost-desnice",
    title: "Tribina u Novom Sadu: Mađarski izbori i budućnost desnice",
    description: "U subotu 25. aprila u 19 časova u Istok Info Pultu u Novom Sadu biće održana tribina „Mađarski izbori i budućnost desnice“. Govori dr Dušan Dostanić.",
    image: "/static/images/dusan-dostanic.jpeg",
    publishedAt: "2026-04-24",
  },
  "madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu": {
    slug: "madjarski-premijer-izvrsio-samoubistvo-i-time-usao-u-legendu",
    title: "Mađarski premijer izvršio samoubistvo i time ušao u legendu",
    description: "Potresna priča o Palu Telekiju, mađarskom premijeru koji je 3. aprila 1941. godine izvršio samoubistvo, suočen sa Hitlerovim zahtevom da Mađarska učestvuje u napadu na Kraljevinu Jugoslaviju.",
    image: "/static/images/pal-teleki.jpg",
    publishedAt: "2026-10-20",
  },
  "masakr-u-dojinci": {
    slug: "masakr-u-dojinci",
    title: "26. jun 1999: Masakr u Dojincu – zločin nad srpskim civilima koji ne sme biti zaboravljen",
    description: "Na današnji dan, 26. juna 1999. godine, u selu Dojince kod Prizrena ubijeno je 16 srpskih civila, među kojima devet žena. Nakon masakra selo je spaljeno, a preživeli stanovnici primorani da napuste svoje domove.",
    image: "/static/images/dojince.jpeg",
    publishedAt: "2026-06-26",
  },
  "murino": {
    slug: "murino",
    title: "Murino – 27 godina od zločina koji ne sme da se zaboravi",
    description: "Navršilo se 27 godina od bombardovanja mosta u Murinu, gde je 30. aprila 1999. godine poginulo šest civila, među njima troje dece.",
    image: "/static/images/murino-1.jpeg",
    publishedAt: "2026-04-30",
  },
  "na-danasnji-dan-ubijen-knez-mihailo-obrenovic": {
    slug: "na-danasnji-dan-ubijen-knez-mihailo-obrenovic",
    title: "Na današnji dan ubijen knez Mihailo Obrenović – vladar koji je oslobodio srpske gradove od turskih garnizona",
    description: "Na današnji dan 1868. godine u Košutnjaku je ubijen knez Mihailo Obrenović, jedan od najznačajnijih srpskih vladara XIX veka i državnik koji je iz srpskih gradova povukao turske garnizone.",
    image: "/static/images/knez-mihailo-obrenovic.jpeg",
    publishedAt: "2026-06-10",
  },
  "nagrada-evroazije-2026": {
    slug: "nagrada-evroazije-2026",
    title: "Nagrada Evroazije 2026: Otvorene prijave za najbolje projekte iz celog sveta",
    description: "Prijave za Međunarodnu nagradu Evroazije za 2026. godinu su zvanično otvorene. Autori projekata, kompanije, mediji, obrazovne organizacije i individualni preduzetnici iz različitih zemalja, starosti od 14 do 60 godina, imaju priliku da učestvuju.",
    image: "/static/images/nagrada-evroazije.png",
    publishedAt: "2026-05-05",
  },
  "napad-na-studentski-dom-u-starobeljsku": {
    slug: "napad-na-studentski-dom-u-starobeljsku",
    title: "Napad na studentski dom u Starobeljsku: raste broj žrtava, navodi o gađanju civilnog objekta",
    description: "Broj poginulih nakon napada na studentski dom u Starobeljsku porastao je na 18, dok spasioci nastavljaju potragu za preživelima pod teškim uslovima.",
    image: "/static/images/studentski-dom-starobeljski.jpg",
    publishedAt: "2026-05-25",
  },
  "nepobedjeni-27-godina-od-bitke-na-kosarama": {
    slug: "nepobedjeni-27-godina-od-bitke-na-kosarama",
    title: "Nepobeđeni: 27 godina od završetka Bitke na Košarama",
    description: "Na današnji dan pre 27 godina završena je Bitka na Košarama, jedna od najznačajnijih i najtežih bitaka tokom sukoba na Kosovu i Metohiji. Tokom 67 dana borbi pripadnici Vojske Jugoslavije branili su državnu granicu.",
    image: "/static/images/kosaree.jpeg",
    publishedAt: "2026-06-10",
  },
  "nevesinjska-puska-1875": {
    slug: "nevesinjska-puska-1875",
    title: "Nevesinjska puška 1875: Iskra slobode koja je pokrenula oslobođenje srpskog naroda",
    description: "Na današnji dan 1875. godine izbio je Nevesinjski ustanak, poznat kao Nevesinjska puška. Događaj koji je otvorio Istočno pitanje i najavio oslobođenje srpskog naroda od osmanske vlasti.",
    image: "/static/images/nevesinjska-bitka.jpeg",
    publishedAt: "2026-06-24",
  },
  "nikola-tesla-dobio-orden-svetog-save": {
    slug: "nikola-tesla-dobio-orden-svetog-save",
    title: "Na današnji dan: Nikola Tesla stigao u Beograd i dobio Orden Svetog Save",
    description: "Veliki srpski i svetski naučnik Nikola Tesla doputovao je u Beograd 2. juna 1892. godine, kada je odlikovan Ordenom Svetog Save drugog stepena.",
    image: "/static/images/nikola-tesla.jpeg",
    publishedAt: "2026-06-02",
  },
  "nikolaj-II-romanov": {
    slug: "nikolaj-II-romanov",
    title: "Car koji je voleo Srbiju više nego politiku: Na današnji dan rođen Nikolaj II Romanov",
    description: "Na današnji dan 1868. godine rođen je ruski car Nikolaj II Romanov, poslednji car Rusije i istorijski simbol bratstva Srbije i Rusije.",
    image: "/static/images/nikolaj-II-romanov.jpg",
    publishedAt: "2026-05-19",
  },
  "novac-za-vojni-rok-preusmeren-na-sport-i-kulturu": {
    slug: "novac-za-vojni-rok-preusmeren-na-sport-i-kulturu",
    title: "Novac za vojni rok preusmeren na sport i kulturu",
    description: "Vlada Srbije preusmerila je skoro 300 miliona dinara, prvobitno namenjenih za realizaciju obaveznog vojnog roka, ministarstvima sporta i kulture.",
    image: "/static/images/novac-za-vojni-rok.jpg",
    publishedAt: "2026-05-11",
  },
  "novak-ujedinitelj": {
    slug: "novak-ujedinitelj",
    title: "Novak ujedinitelj",
    description: "Poziv Novaku Đokoviću da svojim ugledom, autoritetom i međunarodnim prijateljstvima pomogne u ujedinjenju naroda i očuvanju Srbije.",
    image: "/static/images/novak.jpeg",
    publishedAt: "2026-05-17",
  },
  "novi-sad-ustao": {
    slug: "novi-sad-ustao",
    title: "NOVI SAD USTAO ZA PAMĆENJE: HILJADE GRAĐANA PODRŽALE INICIJATIVU",
    description: "Tokom prethodna četiri dana, Udruženje građana Lokalitet, Istok Info Pult i Novosađani 1989 uspešno su sproveli veliku akciju razgovora sa građanima i prikupljanja podrške na pijacama širom Novog Sada.",
    image: "/static/images/pijaca-2.jpeg",
    publishedAt: "2026-04-20",
  },
  "obustavljena-nastava-ruskog-jezika": {
    slug: "obustavljena-nastava-ruskog-jezika",
    title: "Da li je ruski jezik devedesetih bio sistemski potisnut i zašto?”",
    description: "Tokom perioda 1993–1996. godine u brojnim školama došlo je do naglog smanjenja zastupljenosti ruskog jezika u nastavi. Pozivamo bivše učenike, profesore i istraživače da podele svoja svedočenja i dokumenta.",
    image: "/static/images/obustavljena-nastava-ruskog-jezika.jpeg",
    publishedAt: "2026-06-18",
  },
  "odlazi-zelenski": {
    slug: "odlazi-zelenski",
    title: "Odlazi, Zelenski: infopartner RIA „Voronjež“ ispričao kako je dočekao kolonu ukrajinskog predsednika u Beogradu",
    description: "Aktivisti pokreta „Izbor Naš!“ dočekali su kolonu Vladimira Zelenskog u Beogradu transparentima sa porukom „Odlazi, Zelenski“. Lider pokreta Dane Čanković govorio je o poseti ukrajinskog predsednika Srbiji i odnosima Srbije i Rusije.",
    image: "/static/images/odlazi-zelenski.jpeg",
    publishedAt: "2026-08-12",
  },
  "okrugli-sto-u-tuli": {
    slug: "okrugli-sto-u-tuli",
    title: "Okrugli sto u Tuli: Istorijsko pamćenje na udaru falsifikata",
    description: "Na Tulskom državnom univerzitetu održan je međunarodni okrugli sto o očuvanju istorijskog pamćenja i suprotstavljanju falsifikovanju istorije.",
    image: "/static/images/okrugli-sto-3.jpeg",
    publishedAt: "2026-05-19",
  },
  "osnovan-klub-mladih-ruskog-istorijskog-drustva": {
    slug: "osnovan-klub-mladih-ruskog-istorijskog-drustva",
    title: "Osnovan Klub mladih Ruskog istorijskog društva u Srbiji",
    description: "U Beogradu je održana osnivačka konvencija Kluba mladih predstavništva Ruskog istorijskog društva u Srbiji.",
    image: "/static/images/izlozba-7.jpeg",
    publishedAt: "2026-04-28",
  },
  "osnovci-koji-pamte": {
    slug: "osnovci-koji-pamte",
    title: "Deca koja pamte: Osnovci iz Novog Sada u srcu Kosova i Metohije",
    description: "Osnovci iz Novog Sada proveli su nezaboravne dane na Kosovu i Metohiji, gde su kroz druženje sa vršnjacima i obilazak svetinja upoznali istoriju, veru i identitet sopstvenog naroda.",
    image: "/static/images/deca-koja-pamte.jpg",
    publishedAt: "2026-05-18",
  },
  "otkazan-humanitarni-dogadjaj-u-kuli": {
    slug: "otkazan-humanitarni-dogadjaj-u-kuli",
    title: "Otkazan humanitarni događaj u Kuli za Kosovo i Metohiju — policija odobrila, opština zabranila",
    description: "Humanitarni kulturno-umetnički događaj za prikupljanje pomoći za srpsku decu na Kosovu i Metohiji, koji je trebalo da bude održan 29. avgusta 2026. godine u Kuli, otkazan je svega nekoliko dana pre održavanja.",
    image: "/static/images/saopstenje.jpg",
    publishedAt: "2026-08-26",
  },
  "otvaranje-ruskog-konzulata-u-novom-sadu": {
    slug: "otvaranje-ruskog-konzulata-u-novom-sadu",
    title: "Novi Sad dobio Počasni konzulat Rusije: svečano otvaranje uz prisustvo crkvenih velikodostojnika",
    description: "U Novom Sadu svečano je otvoren Počasni konzulat Ruske Federacije za teritoriju Vojvodine, u Bobar zgradi u ulici Branka Bajića, uz prisustvo zvaničnika, sveštenstva i brojnih zvanica.",
    image: "/static/images/otvaranje-ruskog-konzulata.jpeg",
    publishedAt: "2026-04-23",
  },
  "otvoren-sesti-ciklus-medjunarodne-nagrade": {
    slug: "otvoren-sesti-ciklus-medjunarodne-nagrade",
    title: "Otvoren šesti ciklus Međunarodne nagrade #WEARETOGETHER",
    description: "Otvoren je prijem prijava za šesti ciklus Međunarodne nagrade #WEARETOGETHER namenjene humanitarnim, volonterskim, društvenim i ekološkim projektima iz celog sveta.",
    image: "/static/images/medjunarodne-nagrade.jpeg",
    publishedAt: "2026-06-09",
  },
  "otvoreno-predavnje-u-tulgu": {
    slug: "otvoreno-predavnje-u-tulgu",
    title: "Otvoreno predavanje na TulGU: Evropa između liberalizma i tradicionalnih vrednosti",
    description: "Na Tulskom državnom univerzitetu održano je otvoreno predavanje doktora istorijskih nauka i slaviste Marka Štefana Petersa o političkim promenama u Evropi nakon parlamentarnih izbora u Mađarskoj.",
    image: "/static/images/otvoreno-predavnje-u-tulgu-4.jpeg",
    publishedAt: "2026-06-01",
  },
  "pakla-38-dana-za-srpske-vojnike": {
    slug: "pakla-38-dana-za-srpske-vojnike",
    title: "38 dana pakla: dvojica srpskih vojnika preživela torturu od Košara do tajnih zatvora u Nemačkoj",
    description: "Priča o Šefku Tairoviću iz Niša i Bobanu Milenkoviću iz Vranja, srpskim vojnicima zarobljenim 1999. godine kod Junika, koji su prošli kroz 38 dana torture u logorima na Kosmetu, Albaniji i zatvorima u Nemačkoj.",
    image: "/static/images/dvojica-srpskih-vojnika.jpg",
    publishedAt: "2026-05-18",
  },
  "parada-pobede-u-moskvi": {
    slug: "parada-pobede-u-moskvi",
    title: "Parada pobede u Moskvi završena vazdušnim spektaklom",
    description: "Parada pobede u Moskvi završena je impresivnim vazdušnim spektaklom, uz manevar „Kubanski dijamant“ i prelet aviona Su-25 u bojama ruske zastave.",
    image: "/static/images/parada-pobede-u-moskvi.jpg",
    publishedAt: "2026-05-11",
  },
  "peticija-riblja": {
    slug: "peticija-riblja",
    title: "POTPISIVANJE PETICIJE NA RIBLJOJ PIJACI U NOVOM SADU",
    description: "Istok Info Pult poziva građane da 16. aprila od 9 časova na Ribljoj pijaci u Novom Sadu podrže inicijativu za podizanje spomenika žrtvama NATO agresije.",
    image: "/static/images/riblja-share.jpg",
    publishedAt: "2026-04-15",
  },
  "peticija-spomenik": {
    slug: "peticija-spomenik",
    title: "POTPISIVANJE PETICIJE NA PIJACAMA U NOVOM SADU",
    description: "Istok Info Pult nastavlja građansku inicijativu i poziva građane da podrže podizanje spomenika žrtvama NATO agresije.",
    image: "/static/images/pijaca.jpg",
    publishedAt: "2026-04-14",
  },
  "petrus-zaboravljena-tvrdjava": {
    slug: "petrus-zaboravljena-tvrdjava",
    title: "Petrus – zaboravljena tvrđava koja i dalje čuva duh srpske istorije",
    description: "Nedaleko od Paraćina nalaze se ostaci tvrđave Petrus, jednog od tihih, ali snažnih svedoka srpske istorije i duhovnog nasleđa Petruške oblasti.",
    image: "/static/images/petrus-tvrdjava.jpg",
    publishedAt: "2026-05-13",
  },
  "pismo-pjer-anri-binel": {
    slug: "pismo-pjer-anri-binel",
    title: "Pismo i poruka Pjera Anrija Binela srpskom narodu",
    description: "Pismo Pjera Anrija Binela srpskom narodu — reči prijatelja koji je stao uz Srbiju i ostavio snažnu poruku o časti, istini i prijateljstvu.",
    image: "/static/images/pismo-srbiji.jpeg",
    publishedAt: "2026-04-28",
  },
  "pjer-anri-binel": {
    slug: "pjer-anri-binel",
    title: "Francuz koji je rizikovao sve zbog Srbije: Pjer Anri Binel istinski heroj",
    description: "Priča o Pjeru Anriju Binelu, bivšem majoru francuske vojne obaveštajne službe koji je rizikovao karijeru kako bi pomogao Srbiji.",
    image: "/static/images/pjer.jpeg",
    publishedAt: "2026-04-27",
  },
  "pocinje-petrovski-post": {
    slug: "pocinje-petrovski-post",
    title: "Počinje Petrovski (Apostolski) post",
    description: "Od prvog ponedeljka nakon Duhova počinje Petrovski ili Apostolski post. Ove godine traje od 8. juna do 12. jula, u čast svetih apostola Petra i Pavla.",
    image: "/static/images/petrovski-post-1.jpeg",
    publishedAt: "2026-06-08",
  },
  "potpisi": {
    slug: "potpisi",
    title: "Navijači FK Vojvodina podržali peticiju za podizanje spomenika žrtvama NATO agresije",
    description: "U sredu 08.04.2026. ispred stadiona FK Vojvodine u Novom Sadu, održana je akcije potpisivanje peticije za podizanje spomenika žrtvama NATO agresije.",
    image: "/static/images/stadion-2.jpg",
    publishedAt: "2026-04-09",
  },
  "premijera-filma-avgust": {
    slug: "premijera-filma-avgust",
    title: "Premijera ruske vojne drame „Avgust“ u Ruskom domu u Beogradu",
    description: "Nova ruska vojna drama „Avgust“ biće premijerno prikazana srpskoj publici 9. maja u Ruskom domu u Beogradu, uz srpske titlove.",
    image: "/static/images/avgust.jpg",
    publishedAt: "2026-05-06",
  },
  "premijera-filma-rat-za-nezavisnost-srbije": {
    slug: "premijera-filma-rat-za-nezavisnost-srbije",
    title: "Premijera novog dokumentarnog filma „Rat za nezavisnost Srbije 1876“ u Ruskom domu",
    description: "U Ruskom domu biće održana premijera dokumentarnog filma „Rat za nezavisnost Srbije 1876“, povodom 150 godina od izbijanja Prvog srpsko-turskog rata.",
    image: "/static/images/rat-za-nezavisnost-srbije.jpeg",
    publishedAt: "2026-06-15",
  },
  "razgovori-u-istoku": {
    slug: "razgovori-u-istoku",
    title: "Dragana Trifković prva gošća podkasta „Razgovori u Istoku“",
    description: "Istok Info Pult započeo je novi podkast „Razgovori u Istoku“. Prva gošća Dragana Trifković govorila je o geopolitici, međunarodnim odnosima i izazovima savremenog sveta u Istok klubu u Novom Sadu.",
    image: "/static/images/dragana-trifkovic.jpeg",
    publishedAt: "2026-10-21",
  },
  "razgovori-u-istoku-002": {
    slug: "razgovori-u-istoku-002",
    title:
  "Razgovori u Istoku 002 – Karlo Dulović i Milan Glamočanin",
description:
  "Karlo Dulović i Milan Glamočanin u podkastu „Razgovori u Istoku“ govore o obaveštajnoj operaciji 1987. godine u Švajcarskoj i dokumentima o Jugoslaviji.",
    image: "/static/images/razgovori-u-istoku-002.jpeg",
    publishedAt: "2026-10-21",
  },
  "razgovori-u-istoku-gost-marija-jovovic": {
    slug: "razgovori-u-istoku-gost-marija-jovovic",
    title: "Marija Jovović gošća treće epizode podkasta „Razgovori u Istoku“",
    description: "Marija Jovović, ćerka Blagoja Jovovića, gošća je treće epizode podkasta „Razgovori u Istoku“. Razgovor o knjizi, porodičnom nasleđu, istoriji i odgovornosti koju nosi prezime Jovović.",
    image: "/static/images/marija-jovovic.jpeg",
    publishedAt: "2026-10-22",
  },
  "razvoj-saradnje-srbije-i-stavropolja": {
    slug: "razvoj-saradnje-srbije-i-stavropolja",
    title: "STAVROPOLJ I SRBIJA JAČAJU SARADNJU: NOVE ŠANSE ZA POLJOPRIVREDU I PRIVREDU",
    description: "Saradnja između Srbije i Stavropoljskog kraja dobija konkretne obrise – fokus je na poljoprivredi, zajedničkim projektima i razmeni stručnjaka.",
    image: "/static/images/saradnja.jpg",
    publishedAt: "2026-04-30",
  },
  "rusi-koji-su-gradili-novi-sad": {
    slug: "rusi-koji-su-gradili-novi-sad",
    title: "Šetate pored njihovih zgrada svaki dan, a gotovo niko ne zna da su ih projektovali Rusi koji su izgubili svoju domovinu",
    description: "Posle Oktobarske revolucije hiljade ruskih emigranata pronašle su novi dom u Srbiji. Arhitekte, inženjeri, lekari i profesori ostavili su dubok trag u razvoju Novog Sada, a njihove građevine i danas predstavljaju deo identiteta grada.",
    image: "/static/images/rusi-koji-su-gradili-novi-sad.jpg",
    publishedAt: "2026-07-30",
  },
  "rusija-otvara-vrata": {
    slug: "rusija-otvara-vrata",
    title: "RUSIJA OTVARA VRATA STRANIM STRUČNJACIMA",
    description: "Otvorena je nova digitalna usluga za privlačenje stranih stručnjaka koji žele da žive i rade u Rusiji.",
    image: "/static/images/rusija-otvara-vrata.jpeg",
    publishedAt: "2026-04-21",
  },
  "rusija-vraca-zemljiste-crkvi": {
    slug: "rusija-vraca-zemljiste-crkvi",
    title: "Rusija vraća zemljište manastira Vojlovica Srpskoj pravoslavnoj crkvi",
    description: "Zemljište manastira Vojlovica, koje se nalazi u krugu rafinerije Pančevo, biće vraćeno Srpskoj pravoslavnoj crkvi nakon sporazuma koji su potpisali mitropolit banatski Nikanor i generalni direktor NIS-a Kiril Tjurdenjev.",
    image: "/static/images/rusija-daje-zemljiste.jpg",
    publishedAt: "2026-05-11",
  },
  "ruski-konzulat": {
    slug: "ruski-konzulat",
    title: "Novi Sad dobija Počasni konzulat Rusije",
    description: "U četvrtak 23.04. u Novom Sadu se otvara, po nalogu Ministarstva spoljnih poslova Ruske Federacije, Počasni konzulat Rusije.",
    image: "/static/images/ruski-konzulat.jpeg",
    publishedAt: "2026-04-22",
  },
  "saradnja-izmedju-srbije-i-ukrajine": {
    slug: "saradnja-izmedju-srbije-i-ukrajine",
    title: "POTPISANI „ANTIRUSKI“ MEMORANDUMI U BEOGRADU?",
    description: "Potpisivanje sporazuma između Srbije i Ukrajine izazvalo je različite reakcije u javnosti i otvorilo pitanje spoljnopolitičkog kursa Srbije.",
    image: "/static/images/srbija-ukrajina.jpeg",
    publishedAt: "2026-05-25",
  },
  "secanje-na-vasu-cubrilovica": {
    slug: "secanje-na-vasu-cubrilovica",
    title: "Sećanje na Vasu Čubrilovića: Najmlađi učesnik Sarajevskog atentata i jedan od najvećih srpskih istoričara",
    description: "Na današnji dan, 11. juna 1990. godine, preminuo je Vaso Čubrilović, najmlađi učesnik Sarajevskog atentata, profesor Beogradskog univerziteta i akademik SANU.",
    image: "/static/images/vaso-cubrilovic.jpeg",
    publishedAt: "2026-06-11",
  },
  "secanje-na-vojvodu-putnika": {
    slug: "secanje-na-vojvodu-putnika",
    title: "Sećanje na vojvodu Radomira Putnika — stratega koji je obeležio istoriju Srbije",
    description: "Sećanje na vojvodu Radomira Putnika, jednog od najvećih srpskih vojskovođa, načelnika Vrhovne komande i simbola časti, discipline i služenja otadžbini.",
    image: "/static/images/radomir-putnik.jpg",
    publishedAt: "2026-05-19",
  },
  "sest-godina-zajednicke-borbe": {
    slug: "sest-godina-zajednicke-borbe",
    title: "Da li bi Prvi srpski ustanak opstao bez Rusije? Šest godina zajedničke borbe",
    description: "Rusko carstvo pružilo je vojnu, diplomatsku i finansijsku pomoć Prvom srpskom ustanku od 1806. do 1812. godine. Saznajte kako je zajednička borba Srbije i Rusije oblikovala tok srpske istorije.",
    image: "/static/images/bratski-narod.jpg",
    publishedAt: "2026-08-04",
  },
  "sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu": {
    slug: "sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu",
    title: "Šestorica mornara koji su zauvek ostali u Novom Sadu",
    description: "Iza zidina nekadašnje kasarne „Aleksandar Berić“ nalazi se malo vojno groblje na kojem počivaju šestorica sovjetskih mornara — četvorica sa sačuvanim imenima i dvojica nepoznatih.",
    image: "/static/images/sestorica-mornara.jpg",
    publishedAt: "2026-07-25",
  },
  "slucaj-banjska": {
    slug: "slucaj-banjska",
    title: "Doživotne kazne koje su potresle srpski narod",
    description: "Vest o izricanju doživotnih kazni Blagoju Spasojeviću i Vladimiru Toliću, dok je Dušan Maksimović osuđen na 30 godina zatvora, duboko je potresla javnost.",
    image: "/static/images/banjska.jpg",
    publishedAt: "2026-04-25",
  },
  "spasovdan": {
    slug: "spasovdan",
    title: "Spasovdan – praznik Hristovog vaznesenja",
    description: "Srpska pravoslavna crkva i vernici obeležavaju Spasovdan, praznik Hristovog vaznesenja, jedan od najvažnijih datuma u hrišćanskom kalendaru.",
    image: "/static/images/spasovdan.jpg",
    publishedAt: "2026-05-21",
  },
  "spomenik-27-godina": {
    slug: "spomenik-27-godina",
    title: "27 GODINA SE ČEKALO NA OVAJ SPOMENIK???",
    description: "Posle 27 godina od NATO agresije na SRJ, pokreće se inicijativa za podizanje spomenika žrtvama NATO agresije u Novom Sadu.",
    image: "/static/images/spomenik.jpg",
    publishedAt: "2026-04-02",
  },
  "spomenik-nikolaju-u-srbiji": {
    slug: "spomenik-nikolaju-u-srbiji",
    title: "U Moskvi predstavljen spomenik ruskom heroju koji će biti podignut u Srbiji",
    description: "Sećanje na pukovnika Nikolaja Rajevskog, ruskog heroja koji je položio život za Srbiju, dobija novo obeležje kroz spomenik predstavljen u Moskvi.",
    image: "/static/images/spomenik-nikolaju.jpeg",
    publishedAt: "2026-04-24",
  },
  "spomenik-vladimiru-sergevic-ostrivnom": {
    slug: "spomenik-vladimiru-sergevic-ostrivnom",
    title: "Pokrenuta akcija za podizanje spomenika Vladimiru Ostrivnom na groblju Orlovača",
    description: "Posle višegodišnjih administrativnih prepreka obezbeđena je dozvola za postavljanje spomenika ruskom državljaninu Vladimiru Sergejeviču Ostrivnom, ubijenom u Beogradu 2018. godine.",
    image: "/static/images/spomenik-vladimiru-1.jpg",
    publishedAt: "2026-06-01",
  },
  "srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan": {
    slug: "srpska-pravoslavna-crkva-danas-proslavlja-ivanjdan",
    title: "Srpska pravoslavna crkva danas proslavlja Ivanjdan – Rođenje Svetog Jovana Preteče",
    description: "Srpska pravoslavna crkva i vernici danas proslavljaju Ivanjdan, praznik posvećen Rođenju Svetog Jovana Preteče i Krstitelja, jednog od najpoštovanijih svetitelja u hrišćanstvu.",
    image: "/static/images/sveti-jovan.jpeg",
    publishedAt: "2026-07-07",
  },
  "srpska-sela-kod-srebrenice-u-plamenu": {
    slug: "srpska-sela-kod-srebrenice-u-plamenu",
    title: "Srpska sela kod Srebrenice u plamenu: 34 godine od „Majskih lomača”",
    description: "Na dan Svetog Vasilija Ostroškog, 12. maja 1992. godine, srpska sela Međe, Osredak, Viogor i Orahovica kod Srebrenice pretrpela su jedan od najtežih napada nad srpskim stanovništvom u Podrinju.",
    image: "/static/images/srpska-sela-kod-srebrenice.jpg",
    publishedAt: "2026-05-12",
  },
  "stadion-peticija": {
    slug: "stadion-peticija",
    title: "DANAS OD 16 ČASOVA — SVI NA KARAĐORĐE!",
    description: "Danas od 16 časova pozivamo sve građane dobre volje, braću i prijatelje da dođu kod blagajne na Karađorđu ili na ulazu-istok i svojim prisustvom podrže zajedničku poruku sećanja i dostojanstva.",
    image: "/static/images/stadion.jpg",
    publishedAt: "2026-04-08",
  },
  "trka-slobode-voznja-ratnim-stazama": {
    slug: "trka-slobode-voznja-ratnim-stazama",
    title: "Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO",
    description: "U subotu, 13. juna, biće održana biciklistička manifestacija „Trka slobode – vožnja ratnim stazama 3. raketnog diviziona PVO“ sa startom ispred kasarne u Jakovu.",
    image: "/static/images/trka-slobode.jpeg",
    publishedAt: "2026-06-12",
  },
  "tula-forum": {
    slug: "tula-forum",
    title: "RAME UZ RAME KROZ VEKOVE: U TULI ODRŽAN FORUM O MNOGONACIONALNOJ POBEDI",
    description: "U Tulskom državnom univerzitetu održan je forum posvećen zajedničkoj borbi naroda protiv nacizma, uz snažan srpski glas i poruku da se istorijska istina ne sme zaboraviti.",
    image: "/static/images/tula-forum-3.jpeg",
    publishedAt: "2026-04-24",
  },
  "u-nisu-mural-nikolaju-rajevskom": {
    slug: "u-nisu-mural-nikolaju-rajevskom",
    title: "U Nišu otkriven mural ruskom heroju Nikolaju Rajevskom",
    description: "U Nišu je otkriven mural posvećen ruskom pukovniku Nikolaju Rajevskom, heroju Srpsko-turskog rata i simbolu rusko-srpskog bratstva.",
    image: "/static/images/nikolaj-rajevski-mural.jpeg",
    publishedAt: "2026-05-20",
  },
  "ustaski-zlocin-nad-srbima": {
    slug: "ustaski-zlocin-nad-srbima",
    title: "Navršile se 83 godine od ustaškog zločina nad Srbima u Srebrenici, Zalažju i Vitlovcima",
    description: "Kod Spomen-kosturnice u Srebrenici danas će biti služen parastos i obeležene 83 godine od jednog od najtragičnijih zločina počinjenih nad srpskim stanovništvom tokom Drugog svetskog rata.",
    image: "/static/images/srebrenica.jpg",
    publishedAt: "2026-06-01",
  },
  "vas-proizvod-na-putu-ka-rusiji": {
    slug: "vas-proizvod-na-putu-ka-rusiji",
    title: "Vaš proizvod na putu ka Rusiji",
    description: "Otvoren konkurs za kompanije, startap timove, inovatore i pojedince koji žele da predstave svoje proizvode i ideje partnerima iz Rusije.",
    image: "/static/images/saradnja-sa-rusijom.jpeg",
    publishedAt: "2026-05-22",
  },
  "vece-za-kosovo-i-metohiju": {
    slug: "vece-za-kosovo-i-metohiju",
    title: "Veče za Kosovo i Metohiju u Kuli — pesma, istorija i humanost na jednom mestu",
    description: "Na otvorenim bazenima u Kuli 29. avgusta 2026. godine biće održano posebno veče posvećeno Kosovu i Metohiji, srpskoj istoriji, kulturi i humanosti. Početak programa je u 15 časova, a događaj ima i humanitarni karakter.",
    image: "/static/images/kosovo-i-metohija.jpg",
    publishedAt: "2026-08-18",
  },
  "vece-za-kosovo-i-metohiju-u-kuli": {
    slug: "vece-za-kosovo-i-metohiju-u-kuli",
    title: "Veče za Kosovo i Metohiju u Kuli — pesma, istorija i humanost na jednom mestu",
    description: "Na otvorenim bazenima u Kuli 29. avgusta 2026. godine biće održano posebno veče posvećeno Kosovu i Metohiji, srpskoj istoriji, kulturi, veri i humanosti. Početak programa je u 15 časova.",
    image: "/static/images/vece-za-kosovo.jpg",
    publishedAt: "2026-07-31",
  },
  "veliki-petak": {
    slug: "veliki-petak",
    title: "Veliki petak – dan stradanja, tišine i molitve",
    description: "Danas pravoslavni vernici obeležavaju Veliki petak, najtužniji dan u hrišćanskom kalendaru, posvećen sećanju na stradanje i raspeće Isusa Hrista.",
    image: "/static/images/petak.jpg",
    publishedAt: "2026-04-10",
  },
  "zaboravljena-cast-iz-1941": {
    slug: "zaboravljena-cast-iz-1941",
    title: "Mađarski premijer koji je životom branio datu reč",
    description: "Priča o časti i datoj reči. Mađarski premijer Pal Teleki oduzeo je sebi život 3. aprila 1941. godine, suočen sa kršenjem Sporazuma o večnom prijateljstvu sa Kraljevinom Jugoslavijom.",
    image: "/static/images/zaboravljena-cast-iz-1941.jpg",
    publishedAt: "2026-10-23",
  },
  "zbog-ljubavi-otisao-u-rusiju": {
    slug: "zbog-ljubavi-otisao-u-rusiju",
    title: "Zbog ljubavi u Rusiji: Milan Stojanović o životu, radu i srpsko-ruskim vezama",
    description: "Ekskluzivni razgovor sa Milanom Stojanovićem o životu u Rusiji, odnosu Rusa prema Srbima, mogućnostima za mlade i značaju srpsko-ruskih veza.",
    image: "/static/images/zbog-ljubavi-rusija-1.jpeg",
    publishedAt: "2026-04-16",
  },
}

export function getArticleSeo(slug: string): ArticleSeoData {
  const data = articlesSeo[slug]
  if (!data) throw new Error(`Nema SEO podataka za: ${slug}`)
  return data
}
