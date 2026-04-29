'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import ShareButtons from '@/components/ShareButtons'
import CommentsSection from '@/components/CommentsSection'

type LanguageType = 'sr' | 'ru'
type ScriptType = 'lat' | 'cyr'

const SPUTNIK_URL =
  'https://sputnikportal.rs/20250420/dina-blagojevic-spartak-moskva-intervju-sport-tenis-1184223394.html'

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
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч', Ć: 'Ћ', D: 'Д', Đ: 'Ђ', E: 'Е', F: 'Ф',
    G: 'Г', H: 'Х', I: 'И', J: 'Ј', K: 'К', L: 'Л', M: 'М', N: 'Н', O: 'О',
    P: 'П', R: 'Р', S: 'С', Š: 'Ш', T: 'Т', U: 'У', V: 'В', Z: 'З', Ž: 'Ж',
    a: 'а', b: 'б', c: 'ц', č: 'ч', ć: 'ћ', d: 'д', đ: 'ђ', e: 'е', f: 'ф',
    g: 'г', h: 'х', i: 'и', j: 'ј', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о',
    p: 'п', r: 'р', s: 'с', š: 'ш', t: 'т', u: 'у', v: 'в', z: 'з', ž: 'ж',
  }

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}

function latinToCyrillicPreserveUrl(text: string) {
  if (!text.includes(SPUTNIK_URL)) return latinToCyrillic(text)

  const [before, after] = text.split(SPUTNIK_URL)

  return `${latinToCyrillic(before)}${SPUTNIK_URL}${after ? latinToCyrillic(after) : ''}`
}

function RenderParagraphWithLink({ paragraph }: { paragraph: string }) {
  if (!paragraph.includes(SPUTNIK_URL)) {
    return <>{paragraph}</>
  }

  const [before, after] = paragraph.split(SPUTNIK_URL)

  return (
    <>
      {before}
      <a
        href={SPUTNIK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-yellow-300 underline underline-offset-4 hover:text-yellow-200"
      >
        {SPUTNIK_URL}
      </a>
      {after}
    </>
  )
}

const srLatin = {
  category: 'Vesti',
  title:
    'DINA BLAGOJEVIĆ: SRPSKA FUDBALERKA U TIMU RUSKOG SPARTAKA',
  date: 'Objavljeno: 29. april 2026.',
  lead:
    'Dina Blagojević, srpska reprezentativka, zasijala je poput zvezde nad Moskvom nakon pobede sa timom ruskog Spartaka na ženskom fudbalskom prvenstvu Rusije 2025. godine. Dina je mesec dana pre slavne pobede dočekala svoj 28. rođendan na terenu uz poklike navijača Spartaka o vekovnom bratstvu dva naroda „Srbi i Rusi braća zauvek“.',
  paragraphs: [
    '„Ovo je bio prvi put da sam povela navijanje. Pamtiću ovaj rođendan jako dugo baš zbog slavlja sa navijačima. Spartak ima jako puno pristalica, ti ljudi koji vole klub, ne podržavaju samo muški klub nego i ženski. Bilo koji sport vezan za Spartak je dobro propraćen. U poslednje vreme kako se svet okrenuo protiv Rusije, Rusija se okrenula sama sebi. Ljudi moraju da gledaju sadržaj koji imaju. Na naše utakmice, kako domaće tako i na strani dolazi jako puno ljudi.“, istakla je Blagojevićeva za Sputnjik.',
    'Dina je u intervjuu za SPUTNJIK govorila o tome kako je iz Bajer Leverkuzena prešla u Spartak i sa kakvim reakcijama se suočavala zbog te odluke, koliko je ona zavolela Rusiju i Rusija nju, o vatrenim navijačima Spartaka, atmosferi u timu i saigračici Tijani Filipović, ženskim pravima i ravnopravnosti u fudbalu, Novaku Đokoviću, Evropskom prvenstvu i svojim planovima za budućnost.',
    'Nakon šest godina provedenih u nemačkoj fudbalskoj ligi, Dina dobija ponudu da pređe u Spartak i potpisuje dvogodišnji ugovor sa ruskim klubom. Kroz dve nedelje ona je shvatila da je to najbolja odluka koju je mogla da donese i da će se odlično odraziti ne samo na dalju karijeru, nego i na sve segmente njenog života. Zajedno sa Dinom u Spartaku je igrala još jedna srpska zvezda ženskog fudbala, njena prijateljica i saigračica Tijana Filipović.',
    '„Zahvalna sam Bogu, univerzumu, menadžeru i Spartaku što su nas spojili. Dugo smo imale želju da igramo zajedno, dobro se razumemo na terenu i van njega. Poklopile su se kockice. Meni je srce na mestu od trenutka kada sam napustila Nemačku. Moram da istaknem da sam u Rusiji mirna u duši i glavi i mogu da zamislim nastavak saradnje sa trenutnim klubom. Došla sam ovde sa nekim predrasudama, imala sam malu bojazan jer su mi ljudi oko mene pričali da su ljudi hladni i da nije dobra situacija. Uvukli su me u razmišljanje da li sam napravila dobar potez, međutim ja sam kroz dve nedelje shvatila da je ovo sve što mi je bilo potrebno u životu“, za Sputnjik je izjavila Blagojević.',
    'Tijana Filipović je srpska fudbalerka, članica ženske kadetske reprezentacije, o njoj je Blagojević izjavila sledeće za Sputnjik:',
    '„Tića je zavladala ruskim fudbalom. Mnogo puta se šalim da su nju kupili da donosi rezultate, a mene za atmosferu. Kada se pogleda statistika ona je daleko ispred mene. Poznajemo se 15 godina, živimo zajedno, dođe mi kao mlađa sestra. Ne gledam na nju kao da mi je pomoć nego kao da mi je član porodice. Sve prolazimo zajedno. Bila sam šest godina u Nemačkoj, nisam imala nikoga. Čovek kada nema da podeli sa nekim sreću i tugu džaba sve. Mnogo sam puta u Nemačkoj bila i srećna i tužna. Kada si tužan okej, ali prava tuga je kada nemaš sreću sa kim da podeliš“.',
    'Rusija i ruski narod su toplinom duha i gostoprimljivošću brzo osvojili Dinino srce, a tome je svakako doprinela podrška vernih navijača Spartaka i atmosfera u timu.',
    '„Ja sam neko ko jako voli društveni život, volim da pratim energiju drugih ljudi. U Nemačkoj me je to limitiralo, bila sam tužna. Ako se neko dodirnuo sa hladnoćom to sam ja. Kada su mi pričali da su Rusi hladni bila sam skeptična. Međutim, ispostavilo se da su Rusi toliko topli, nežni, društveni i uvek spremni da pomognu i stvarno nemam nijednu zamerku“, dodala je Blagojević za Sputnjik.',
    'O atmosferi u klubu i podršci navijača imala je samo reči hvale.',
    'Dina Blagojević je kao član ženske fudbalske reprezentacije Srbije učestvovala u kvalifikacijama za Svetsko prvenstvo 2023. godine, kvalifikacijama za Evropsko prvenstvo 2025. godine i nastupala u mečevima Lige nacija održanih u aprilu 2026. godine. Trenutno igra na poziciji veznog igrača u ruskom klubu Spartak.',
    'Dina je hrabra devojka, istrajna u ostvarivanju ciljeva, sa dovoljno smelosti da nezaustavljivo napreduje ka vrhu svetskog fudbala i ostvaruje svoje snove. Rusija i klub Spartak su joj na tom putu pružili ruku i pomogli da započne novi život u Moskvi. Dina se osim fudbala može pohvaliti i drugim kvalitetima, s obzirom da govori četiri jezika, što u odnosu na zaradu i medijsku pažnju smatra svojom prednošću u svetu koji sa više naklonosti prati muški fudbal. Zaključak o osobinama koje je krase može se izvesti iz činjenice da ona svojim uzorom smatra najboljeg tenisera sveta Novaka Đokovića, što je izjavila u intervjuu za Sputnjik.',
    `Intervju sa Dinom Blagojević u celosti možete pročitati na zvaničnom portalu Sputnjik Vesti, preko linka u prilogu: ${SPUTNIK_URL}`,
    'Kolektiv Istok Info Pulta od srca Dini Blagojević želi uspeha u daljoj karijeri i životu!'
  ],
  highlight1:
    'Dina Blagojević je u Moskvi pronašla novu snagu, mir i podršku — u klubu koji je prihvatila kao svoju fudbalsku porodicu.',
  highlight2:
    'Od Srbije do Rusije, kroz rad, veru i istrajnost, Dina pokazuje da se veliki snovi ostvaruju onda kada se srce ne odrekne svog puta.',
}

const ruText = {
  category: 'Новости',
  title:
    'ДИНА БЛАГОЕВИЧ: СЕРБСКАЯ ФУТБОЛИСТКА В СОСТАВЕ МОСКОВСКОГО «СПАРТАКА»',
  date: 'Опубликовано: 29. апреля 2026 г.',
  lead:
    'Дина Благоевич, игрок сборной Сербии, засияла как звезда над Москвой после победы вместе с московским «Спартаком» в чемпионате России по женскому футболу 2025 года. За месяц до этого триумфа Дина отметила свой 28-й день рождения на поле под скандирование болельщиков о вековом братстве двух народов: «Сербы и русские — братья навсегда».',
  paragraphs: [
    '«Это был первый раз, когда я сама повела фанатское скандирование. Этот день рождения я запомню надолго именно благодаря празднованию с болельщиками. У “Спартака” очень много поклонников — они поддерживают не только мужскую команду, но и женскую. Любой вид спорта, связанный со “Спартаком”, хорошо освещается. В последнее время, когда мир отвернулся от России, Россия обратилась к самой себе. Люди смотрят тот контент, который у них есть. На наши матчи приходит очень много зрителей — как дома, так и на выезде», — отметила Благоевич в интервью Sputnik.',
    'В интервью Sputnik Дина рассказала о переходе из «Байера» Леверкузен в «Спартак», о реакции на это решение, о своей любви к России и взаимной симпатии, о болельщиках «Спартака», атмосфере в команде и своей партнерше по команде Тияне Филипович, а также о правах женщин в футболе, Новаке Джоковиче, чемпионате Европы и планах на будущее.',
    'После шести лет в немецкой лиге Дина получила предложение перейти в «Спартак» и подписала двухлетний контракт. Уже через две недели она поняла, что это было лучшее решение в ее жизни, которое положительно скажется не только на карьере, но и на всех аспектах ее жизни. Вместе с Диной в «Спартаке» играла еще одна сербская футболистка — ее подруга и партнерша Тияна Филипович.',
    '«Я благодарна Богу, вселенной, менеджеру и “Спартаку” за то, что нас объединили. Мы давно хотели играть вместе, хорошо понимаем друг друга как на поле, так и вне его. Всё сложилось идеально. С момента отъезда из Германии мое сердце на месте. В России я спокойна душой и разумом и могу представить продолжение карьеры здесь. Я приехала с предубеждениями, немного боялась, потому что мне говорили, что люди здесь холодные и ситуация сложная. Но уже через две недели я поняла, что это именно то, что мне было нужно», — сказала Благоевич.',
    'О Тияне Филипович она добавила:',
    '«Тича покорила российский футбол. Я часто шучу, что ее купили ради результатов, а меня — ради атмосферы. По статистике она намного сильнее меня. Мы знакомы 15 лет, живем вместе, она мне как младшая сестра. Это не просто помощь — это семья. Мы всё переживаем вместе. Шесть лет в Германии я была одна. Когда тебе не с кем разделить радость и грусть — это тяжело. Настоящая грусть — это когда тебе не с кем разделить счастье».',
    'Россия и ее народ быстро покорили сердце Дины своей теплотой и гостеприимством, чему способствовали и болельщики «Спартака», и атмосфера в команде.',
    '«Я очень люблю общение и энергию людей. В Германии мне этого не хватало, я была грустной. Если кто и сталкивался с холодностью — так это я. Но оказалось, что русские очень теплые, добрые и отзывчивые люди, всегда готовые помочь», — добавила она.',
    'Дина Благоевич выступала за сборную Сербии в квалификации к чемпионату мира 2023 года, чемпионату Европы 2025 года и в матчах Лиги наций в апреле 2026 года. Сейчас она играет на позиции полузащитника в московском «Спартаке».',
    'Дина — смелая и целеустремленная спортсменка, которая уверенно движется к вершине мирового футбола. Россия и «Спартак» помогли ей начать новую жизнь в Москве. Помимо футбола, она владеет четырьмя языками, что считает своим преимуществом в мире, где больше внимания уделяется мужскому футболу. Ее кумир — лучший теннисист мира Novak Đoković.',
    `Полный текст интервью доступен на портале Sputnik: ${SPUTNIK_URL}`,
    'Коллектив Istok Info Pult от всего сердца желает Дине Благоевич успехов в дальнейшей карьере и жизни!'
  ],
  highlight1:
    'Дина Благоевич в Москве обрела новую силу, душевный покой и поддержку — в клубе, который стала считать своей футбольной семьёй.',
  highlight2:
    'От Сербии до России, через труд, веру и настойчивость, Дина доказывает, что большие мечты сбываются, когда сердце не отказывается от своего пути.',
}

export default function DinaBlagojevicPage() {
  const { language, script } = useLanguage() as {
    language: LanguageType
    script: ScriptType
  }

  const content =
    language === 'ru'
      ? ruText
      : script === 'cyr'
        ? {
            category: latinToCyrillic(srLatin.category),
            title: latinToCyrillic(srLatin.title),
            date: latinToCyrillic(srLatin.date),
            lead: latinToCyrillic(srLatin.lead),
            paragraphs: srLatin.paragraphs.map(latinToCyrillicPreserveUrl),
            highlight1: latinToCyrillic(srLatin.highlight1),
            highlight2: latinToCyrillic(srLatin.highlight2),
          }
        : srLatin

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-8 md:py-12">
      <article className="mx-auto max-w-4xl">
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

        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/static/images/dina-blagojevic.jpg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
          <p className="mb-6 text-lg font-medium leading-8 text-gray-200 md:text-xl">
            {content.lead}
          </p>

          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            {content.paragraphs.map((paragraph, index) => {
              const isPinned = paragraph.startsWith('📌')

              if (isPinned) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-4 text-white"
                  >
                    <p className="text-base font-medium leading-8 md:text-lg">
                      {paragraph}{' '}
                      <a
                        href="https://tally.so/r/rjL71v"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-yellow-300 underline underline-offset-4 hover:text-yellow-200"
                      >
                        {language === 'ru'
                          ? 'ПОДПИСАТЬ ЗДЕСЬ'
                          : script === 'cyr'
                            ? 'ПОТПИШИ ОВДЕ'
                            : 'POTPIŠI OVDE'}
                      </a>
                    </p>
                  </div>
                )
              }

              return (
                <p key={index} className="text-base leading-8 text-gray-300 md:text-lg">
                  <RenderParagraphWithLink paragraph={paragraph} />
                </p>
              )
            })}
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

          <CommentsSection postSlug="dina-blagojevic" />
        </div>
      </article>
    </main>
  )
}
