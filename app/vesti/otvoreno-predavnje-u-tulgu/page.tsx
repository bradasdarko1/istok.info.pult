'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

  return result
    .split('')
    .map((char) => singleMap[char] ?? char)
    .join('')
}


const srLatin = {
  category: 'Vesti',
  title: 'Otvoreno predavanje na TulGU: Evropa između liberalizma i tradicionalnih vrednosti',
  date: 'Objavljeno: 1. jun 2026.',
  lead: 'Tula, 27. maj 2026. godine – U petom korpusu Tulskog državnog univerziteta održano je otvoreno predavanje doktora istorijskih nauka, poznatog slaviste Marka Štefana Petersa. Tema – „Trijumf liberalne demokratije? Razmišljanja o političkoj situaciji u Evropi nakon parlamentarnih izbora u Mađarskoj“ – privukla je veliku pažnju studenata i profesora.',
  paragraphs: [
    'Peters, koji već duže vreme sarađuje sa TulGU, detaljno je analizirao izbore održane 12. aprila 2026. godine. Na njima je vladajuća partija „FIDES“ Viktora Orbana izgubila vlast od opozicione „Partije poštovanja i slobode“ (TISZA) na čijem je čelu Peter Mađar. Predavač je posebno istakao kako je liberalna transnacionalna grupa „Evropska demokratska partija“ (EDP) u predizbornoj kampanji oživela slogan iz mađarskog ustanka 1956. godine – „Ruszkik haza!“ („Rusi, idite kući!“). To je, po Petersovom mišljenju, jasan pokazatelj rastuće antiruske retorike u Evropi.',
    
    'Orbanov „neliberalni“ put',
    'Peters je podsetio da je Viktor Orban, iako je 1989. godine dobio stipendiju Džordža Soroša, od 2014. dosledno zastupao „neliberalnu“ koncepciju vlasti. U čuvenom govoru u rumunskom Baile Tušnad (26. jula 2014.) hvalio je Rusiju i Kinu, kritikujući liberalnu demokratiju. Tokom svoje vladavine, Orban je blokirao pomoć EU kijevskom režimu i branio tradicionalne vrednosti – pre svega porodicu. Upravo su ga ti stavovi učinili metom stalnih napada Brisela.',
    
    'Ko je Peter Mađar?',
    'Novi premijer Mađarske, Peter Mađar, bivši je član FIDES-a koji se 2024. odvojio kao disident i osnovao TISZA. Peters je naglasio da je Mađar razvedeni muž bivše ministarke pravde Judit Varge, te da je njegova pobeda izazvala oduševljenje u svim liberalno-demokratskim krugovima EU. Prema procenama predavača, Brisel je uložio značajna sredstva da podrži Mađara, a sada očekuje ispunjenje nekoliko uslova: promenu zakona o vladavini prava u Mađarskoj, antikoruptivne mere, ukidanje mađarskog veta na sankcije Rusiji i na pakete pomoći Kijevu.',
    
    'Finansijski pritisak EU',
    'Peters je detaljno objasnio mehanizam pritiska: Mađarska je zbog Orbanove politike od 2012., a posebno od 2022. godine, bila izložena zamrzavanju značajnih sredstava iz evropskih fondova. Sada oslobađanje tog novca direktno zavisi od toga da li će Mađar ispuniti očekivanja Brisela. Peters je iznio i spekulativnu, ali intrigantnu mogućnost: da li je moguće da su Mađar i TISZA samo odvraćajući manevar FIDES-a, pripremljen kada je postalo jasno da će Orban izgubiti izbore? Ipak, priznaje da je to samo teorija – realističnije je očekivati da će Mađar pokleknuti pred zahtevima EU.',

    'Medijski teatar i „smena sistema“',
    'Posebno je zanimaljiv bio deo predavanja u kome je Peters kritikovao zapadne medije zbog preterane upotrebe termina „smena sistema“ za izborni poraz FIDES-a. Prema njegovim rečima, FIDES će i kao opozicija ostati uticajna snaga, a nazvati to smenom sistema jeste i netaktično – naročito kada se podsetimo stvarnih smena sistema 1989/1990. godine.',
    'Peters je pomenuo i emocionalni post na društvenim mrežama, gde je fotografija uličnih scena u Budimpešti pre izbora postavljena na melodiju balade „Wind of Change“ nemačke grupe Scorpions. Originalna pesma iz 1989. govorila je o prevazilaženju jaza između Istoka i Zapada. Peters je ispričao da ga je i tada, pre 35 godina, engleski jezik u toj pesmi podsećao na buduću globalnu dominaciju SAD. Danas je grupa Scorpions napisala alternativni tekst usmeren protiv ruskih interesa i time izrazila solidarnost sa kijevskim režimom. Autor pomenutog posta, iako možda nije želio, time se priklonio zapadnoj propagandi koja svaku promenu vlasti u Orbanovoj bivšoj zemlji predstavlja kao istorijski prelom.',

    'Militarizacija Evrope pod izgovorom „odbrane“',
    'Peters je upozorio na pravu, opipljivu prijetnju – ne onu koju mediji konstruišu kao „rusku opasnost“, već na stvarno naoružavanje Zapada. Navodi primere: baltičke zemlje i Poljska šire granična utvrđenja, Švedska razvija koncept „Totalna odbrana“ (Totalförsvar), Francuska menja zakon o vojnom planiranju, a u Nemačkoj je kapetan fregate Kurt Leonards (komandant Državne komande u Hamburgu) razradio planove za raspoređivanje budućih ratnih zarobljenika na teritoriji Nemačke i Evrope. Peters je istakao da se iza fraze „odbrana“ krije klauzevičevska logika: „Napad je najbolja odbrana“ – pojednostavljena, ali veoma popularna formula.',
    
    'Prava pretnja: jačanje konzervativne opozicije',
    'Na kraju je predavač izneo tezu da „druga stvarna pretnja“ liberalnim elitama nije Rusija, već jačanje pravih opozicionih partija širom Evrope – poput nemačke „Alternative za Nemačku“ (AfD) ili Austrijske partije slobode (FPÖ). Ove partije zastupaju tradicionalne vrednosti i zalažu se za politiku razumevanja s Rusijom, upravo ono što je zastupao Orbanov FIDES. Peters smatra da izbori u Mađarskoj nisu konačni trijumf liberalizma, već samo privremena pobeda – jer rejtinzi AfD i FPÖ rastu iz dana u dan. Upravo zato Ursula fon der Lajen želi da ukine princip jednoglasnosti pri glasanju u EU: da bi se ubuduće onemogućilo da jedna zemlja (poput Mađarske) blokira odluke.',

    'Diskusija i utisci studenata',
    'Nakon predavanja usledila je živa diskusija. Studenti su postavljali pitanja o budućnosti odnosa Rusije i EU, o ulozi Nemačke, o mehanizmima cenzure u Evropi, o perspektivama konzervativnih partija. Mnogi su rekli da su prvi put čuli detaljnu analizu pritisaka Brisela na jednu članicu EU, kao i podatke o tome kako zapadni mediji svesno preuveličavaju događaje kako bi privukli pažnju. „Navikli smo da evropsku politiku gledamo očima zapadnih medija – a Peters nam je pokazao drugu stranu: mehanizme manipulacije, tabu teme i stvarne odnose snage“, rekao je jedan od učesnika.',
    'Mark Štefan Peters je zahvalio publici na pažnji i najavio da će u predstojećem zimskom semestru na TulGU održati ciklus od tri povezana predavanja o savremenim tendencijama u zapadnoj nauci i medijima. „Vidimo se ponovo – uz Božju pomoć“, rekao je na kraju, uz osmeh.'
  ],
  
  highlight1: 'Poznati slavista i istoričar Mark Štefan Peters održao je na Tulskom državnom univerzitetu predavanje o političkim promenama u Evropi nakon parlamentarnih izbora u Mađarskoj.',
  highlight2: 'U središtu predavanja našla su se pitanja odnosa Mađarske i Evropske unije, medijskih narativa i budućeg razvoja političkih procesa na evropskom kontinentu.',
}

const ruText = {
  category: 'Новости',
  title: 'Открытая лекция в Тульском государственном университете: Европа между либерализмом и традиционными ценностями',
  date: 'Опубликовано: 1 июня 2026 г.',
  lead: 'Тула, 27 мая 2026 г. – В пятом корпусе Тульского государственного университета состоялась открытая лекция доктора исторических наук, известного слависта Марка Стефана Петерса. Тема – «Триумф либеральной демократии? Размышления о политической ситуации в Европе после парламентских выборов в Венгрии» – привлекла большое внимание студентов и преподавателей.',
  paragraphs: [
    'Петерс, давно сотрудничающий с Тульским государственным университетом, подробно проанализировал выборы, состоявшиеся 12 апреля 2026 года. На них правящая партия «FIDES» Виктора Орбана уступила власть оппозиционной «Партии уважения и свободы» (TISZA) во главе с Петером Мадьяром. Лектор особо подчеркнул, как либеральная транснациональная группа «Европейская демократическая партия» (ЕДП) возродила в ходе избирательной кампании лозунг венгерского восстания 1956 года — «Русские, уходите домой!». Это, по мнению Петерса, является явным показателем растущей антироссийской риторики в Европе.',
    
    '«Нелиберальный» путь Орбана',
    'Петерс напомнил, что Виктор Орбан, несмотря на то, что в 1989 году получил стипендию Джорджа Сороса, с 2014 года последовательно отстаивает «нелиберальную» концепцию власти. В своей известной речи в румынском городе Байле-Тушнад (26 июля 2014 года) он восхвалял Россию и Китай, критикуя либеральную демократию. Во время своего правления Орбан блокировал помощь ЕС киевскому режиму и защищал традиционные ценности — прежде всего, семью. Именно эти взгляды сделали его мишенью постоянных нападок со стороны Брюсселя.',

    'Кто такой Петер Мадьяр?',
    'Новый премьер-министр Венгрии Петер Мадьяр — бывший член партии «Фидес», отделившийся от неё в 2024 году и основавший TISZA. Петер подчеркнул, что венгр является бывшим мужем бывшего министра юстиции Юдит Варга, и что его победа вызвала энтузиазм во всех либерально-демократических кругах ЕС. По словам лектора, Брюссель вложил значительные ресурсы в поддержку венгра и теперь ожидает выполнения ряда условий: изменений в законодательстве Венгрии о верховенстве права, мер по борьбе с коррупцией и снятия венгерского вето на санкции против России и пакеты помощи Киеву.',

    'Финансовое давление ЕС',
    'Петерс подробно объяснил механизм давления: Венгрия с 2012 года, и особенно с 2022 года, подвергается замораживанию значительных объемов европейских фондов из-за политики Орбана. Теперь высвобождение этих денег напрямую зависит от того, выполнит ли Венгрия ожидания Брюсселя. Петерс также поднял спекулятивную, но интригующую возможность: возможно ли, что Венгрия и TISZA — это всего лишь отвлекающий маневр FIDES, подготовленный, когда стало ясно, что Орбан проиграет выборы? Однако он признает, что это всего лишь теория — более реалистично ожидать, что Венгрия уступит требованиям ЕС.',

    'Медиатеатр и «смена системы»',
    'Особенно интересной была часть лекции, в которой Петерс критиковал западные СМИ за чрезмерное использование термина «смена системы» для описания поражения FIDES на выборах. По его словам, FIDES останется влиятельной силой даже в качестве оппозиции, и называть это сменой режима — бестактно, особенно если вспомнить реальные смены режимов в 1989/1990 годах.',
    'Петерс также упомянул эмоциональный пост в социальных сетях, где фотография уличных сцен в Будапеште перед выборами была наложена на мелодию баллады «Ветер перемен» немецкой группы Scorpions. Оригинальная песня 1989 года говорила о преодолении разрыва между Востоком и Западом. Петерс сказал, что даже тогда, 35 лет назад, английский язык в этой песне напоминал ему о будущем глобальном господстве Соединенных Штатов. Сегодня группа Scorpions написала альтернативный текст, направленный против российских интересов, и тем самым выразила солидарность с киевским режимом. Автор вышеупомянутого поста, хотя, возможно, и непреднамеренно, тем самым поддался западной пропаганде, которая представляет каждую смену власти в бывшей стране Орбана как исторический поворотный момент.',

    'Милитаризация Европы под предлогом «обороны»',
    'Петерс предупредил о реальной, ощутимой угрозе – не той, которую СМИ конструируют как «российскую угрозу», а реальном вооружении Запада. Он приводит примеры: страны Балтии и Польша расширяют пограничные укрепления, Швеция разрабатывает концепцию «тотальной обороны» (Totalförsvar), Франция меняет закон о военном планировании, а в Германии капитан фрегата Курт Леонардс (командующий Государственным командованием в Гамбурге) разработал планы распределения будущих военнопленных по территории Германии и Европы. Петерс отметил, что за фразой «оборона» скрывается логика Клаузевица: «Нападение — лучшая защита» — упрощенная, но очень популярная формула.',

    'Реальная угроза: усиление консервативной оппозиции',
    'Наконец, лектор выдвинул тезис о том, что «другая реальная угроза» для либеральной элиты — это не Россия, а усиление реальных оппозиционных партий по всей Европе — таких как немецкая «Альтернатива для Германии» (AfD) или австрийская Партия свободы (FPÖ). Эти партии представляют традиционные ценности и выступают за политику взаимопонимания с Россией, именно то, за что выступала партия «Фидес» Орбана. Петерс считает, что выборы в Венгрии — это не окончательный триумф либерализма, а лишь временная победа, поскольку рейтинги «Альтернативы для Германии» и «Францисской партии Ольстера» растут день от дня. Именно поэтому Урсула фон дер Ляйен хочет отменить принцип единогласия.'
  ],
  
  highlight1: 'Известный славист и историк Марк Штефан Петерс выступил в Тульском государственном университете с лекцией о политических изменениях в Европе после парламентских выборов в Венгрии.',
  highlight2: 'В центре лекции оказались вопросы отношений Венгрии и Европейского союза, роли медиа и перспектив дальнейшего развития политических процессов в Европе.',
}

const galleryImages = [
  { src: '/static/images/otvoreno-predavnje-u-tulgu-4.jpeg', alt: 'slika 1' },
  { src: '/static/images/otvoreno-predavnje-u-tulgu-1.jpeg', alt: 'slika 2' },
  { src: '/static/images/otvoreno-predavnje-u-tulgu-2.jpeg', alt: 'slika 3' },
  { src: '/static/images/otvoreno-predavnje-u-tulgu-3.jpeg', alt: 'slika 4' },
  { src: '/static/images/otvoreno-predavnje-u-tulgu-5.jpeg', alt: 'slika 5' },
 
  
]

export default function OtvorenoPredavnjeUTulguPage() {
  const { language, script } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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
      <article className="mx-auto max-w-4xl">
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
          <img
            src="/static/images/otvoreno-predavnje-u-tulgu-4.jpeg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
          </motion.div>
                  <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
            {language === 'ru'
              ? 'Галерея'
              : script === 'cyr'
                ? 'Галерија'
                : 'Galerija'}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
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

          <CommentsSection postSlug="otvoreno-predavnje-u-tulgu" />
        </motion.div>
      </article>
            {selectedIndex !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
    
    {/* CLOSE */}
    <button
      onClick={() => setSelectedIndex(null)}
      className="absolute top-5 right-5 z-50 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20"
    >
      ✕
    </button>

    {/* LEFT */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        setSelectedIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
        )
      }}
      className="absolute left-5 z-50 text-4xl text-white hover:scale-110"
    >
      ‹
    </button>

    {/* IMAGE */}
    <img
      src={galleryImages[selectedIndex].src}
      alt="Galerija"
      className="max-h-[85vh] max-w-5xl rounded-3xl border border-white/10 object-contain shadow-2xl"
    />

    {/* RIGHT */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        setSelectedIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
        )
      }}
      className="absolute right-5 z-50 text-4xl text-white hover:scale-110"
    >
      ›
    </button>
  </div>
)}
    </main>
  )
}