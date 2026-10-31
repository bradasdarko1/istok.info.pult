'use client'

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
  title: 'Od oltara do građevine u tuđini: Teška sudbina Nikole Simića nakon crkvenog postupka',
  date: 'Objavljeno: 31. oktobar 2026.',
  lead: 'Priča o Nikoli Simiću, nekadašnjem svešteniku Eparhije šumadijske, otvara bolna pitanja o odnosu crkvene discipline, slobode savesti i odgovornosti prema čoveku. Nakon sukoba sa crkvenim vlastima, zabrane sveštenosluženja i postupka koji je, prema dostupnim navodima, završen njegovim raščinjenjem, Simić se suočio sa teškim životnim okolnostima.',
  paragraphs: [
    'Nikola Simić postao je poznat široj javnosti kao jedan od sveštenika koji su otvoreno podržali proteste protiv kompanije Rio Tinto, a potom i studentske proteste pokrenute nakon tragedije u Novom Sadu. Svoje javno angažovanje obrazlagao je hrišćanskom savešću i uverenjem da sveštenik ne sme ostati nem pred nepravdom.',
    'Pored društvenih pitanja, Simić je javno govorio i o problemima unutar pravoslavnog sveta, kritikujući ekumenističke tendencije i političke uticaje na crkveni život. U martu 2025. godine učestvovao je na međunarodnoj konferenciji u Beogradu posvećenoj delovanju Carigradske patrijaršije, gde je govorio o crkvenim podelama i položaju pravoslavnih vernika u Ukrajini.',
    
    'Sukob sa crkvenim vlastima',
    'Od 1. marta 2025. godine Simiću je zabranjeno sveštenosluženje i protiv njega je pokrenut postupak pred Crkvenim sudom Eparhije šumadijske.',
    'Dok je Simić tvrdio da je njegova podrška građanskim i studentskim protestima doprinela sukobu sa crkvenim vlastima, Eparhija šumadijska odbacila je političku pozadinu slučaja, navodeći kršenje crkvenih propisa, disciplinske prestupe i nepravilnosti u materijalno-finansijskom poslovanju crkvene opštine.',
    'Slučaj je izazvao veliko interesovanje javnosti, a brojni vernici organizovali su skupove podrške u Vučkovici i Kragujevcu.',
    'Posebnu pažnju izazvao je događaj od 25. aprila 2025. godine, kada je Simić, prema sopstvenom svedočenju, sa suprugom i četvorogodišnjom ćerkom proveo četiri sata u policijskoj stanici u Aranđelovcu, povodom prijave koja se odnosila na bezbednost episkopa šumadijskog Jovana.',

    'Najteža crkvena kazna i život daleko od Srbije',
    'Prema navodima o konačnom ishodu postupka, Veliki crkveni sud Srpske pravoslavne crkve potvrdio je 16. jula 2026. godine presudu kojom je Nikola Simić lišen svešteničkog čina.',
    'Time je čovek koji je godine proveo služeći Crkvi ostao bez mogućnosti da nastavi sveštenički poziv.',
    'Prema informacijama iznetim o njegovoj sadašnjoj situaciji, nakon gubitka službe i prihoda Simić je otišao u inostranstvo, gde radi na građevini kako bi izdržavao suprugu i troje dece.',
    'U fizičkom radu nema ničeg sramnog. Naprotiv, svaki čovek koji pošteno zarađuje za svoju porodicu zaslužuje poštovanje. Ipak, teško je zanemariti ljudsku dimenziju priče u kojoj nekadašnji sveštenik, odvojen od svog dotadašnjeg života i poziva, mora da potraži egzistenciju daleko od otadžbine.',

    'Gde prestaje disciplina, a počinje odgovornost?',
    'Crkva ima pravo da čuva svoj kanonski poredak, ali se istovremeno nameće pitanje da li svaka disciplinska odluka mora da bude praćena tako teškim posledicama po čoveka i njegovu porodicu.',
    'Odgovornost za ovaj slučaj ne može se posmatrati samo kroz odluke Eparhije šumadijske i episkopa Jovana, već i kroz postupanje Velikog crkvenog suda, kojim je, prema navodima o presudi, predsedavao mitropolit bački Irinej.',
    'Da li su bile iscrpljene sve mogućnosti pomirenja? Da li je najstroža sankcija bila srazmerna utvrđenim prestupima? I koliko je prilikom odlučivanja uzeta u obzir sudbina porodice sa troje dece?',
    'Odgovori na ta pitanja važni su ne samo za Nikolu Simića, već i za poverenje vernika u pravičnost crkvenih institucija.',
    'Na kraju, iza svih presuda, saopštenja i javnih polemika ostaje sudbina jednog čoveka i njegove porodice.',
    'Nikola Simić danas, prema dostupnim navodima, umesto u oltaru radi na gradilištu u tuđini. A pitanje koje ostaje pred svima nama jeste da li smo, u raspravama o pravilima, autoritetu i poslušnosti, zaboravili ono što bi moralo da bude u središtu hrišćanskog života — čoveka, milosrđe i ljubav prema bližnjem.'
  ],
  
  highlight1: 'Nekadašnji sveštenik Nikola Simić, koji je javno podržavao proteste protiv Rio Tinta i studentske zahteve, nakon sukoba sa crkvenim vlastima suočio se sa gubitkom svešteničke službe i teškim životnim okolnostima.',
  highlight2: 'Prema navodima o njegovoj sudbini, Simić danas radi na građevini u inostranstvu kako bi izdržavao suprugu i troje dece. Njegov slučaj otvara pitanje gde su granice crkvene discipline i koliko mesta u njoj ostaje za milosrđe.',
}

const ruText = {
  category: 'Новости',
  title: 'От алтаря до стройки на чужбине: тяжёлая судьба Николы Симича после церковного разбирательства',
  date: 'Опубликовано: 31 октябрь 2026 г.',
  lead: 'История Николы Симича, бывшего священника Шумадийской епархии Сербской православной церкви, поднимает непростые вопросы о соотношении церковной дисциплины, свободы совести и ответственности перед человеком. После конфликта с церковным руководством, запрета на священнослужение и разбирательства, которое, согласно имеющимся сведениям, завершилось лишением его священного сана, Симич оказался в тяжёлых жизненных обстоятельствах.',
  paragraphs: [
    'Никола Симич стал известен широкой общественности как один из священников, открыто поддержавших протесты против компании Rio Tinto, а позднее и студенческие выступления, начавшиеся после трагедии в Нови-Саде. Свою общественную позицию он объяснял христианской совестью и убеждением, что священник не должен молчать перед лицом несправедливости.',
    'Помимо общественных вопросов, Симич открыто высказывался и о проблемах внутри православного мира, критикуя экуменические тенденции и политическое влияние на церковную жизнь. В марте 2025 года он принял участие в международной конференции в Белграде, посвящённой деятельности Константинопольского патриархата, где говорил о церковных расколах и положении православных верующих на Украине.',
    
    'Конфликт с церковным руководством',
    'С 1 марта 2025 года Симичу было запрещено совершать богослужения, а в отношении него началось разбирательство в Церковном суде Шумадийской епархии.',
    'Сам Симич утверждал, что его поддержка гражданских и студенческих протестов способствовала обострению конфликта с церковным руководством. Шумадийская епархия, в свою очередь, отвергала политическую подоплёку дела, указывая на нарушения церковных правил, дисциплинарные проступки и нарушения порядка ведения финансово-хозяйственной деятельности церковной общины.',
    'Дело вызвало широкий общественный резонанс. Верующие организовали акции поддержки священника в Вучковице и Крагуеваце.',
    'Особое внимание привёл к себе инцидент 25 апреля 2025 года, когда Симич, по его собственным словам, вместе с супругой и четырёхлетней дочерью провёл четыре часа в полицейском участке в Аранджеловаце. Причиной стало заявление, связанное с опасениями за безопасность Шумадийского епископа Иоанна.',

    'Лишение сана и жизнь вдали от Родины',
    'Согласно сведениям об окончательном решении, 16 июля 2026 года Высший церковный суд Сербской православной церкви подтвердил приговор о лишении Николы Симича священного сана.',
    'Таким образом, человек, посвятивший годы служению Церкви, лишился возможности продолжать своё священническое призвание.',
    'По имеющейся информации о его нынешнем положении, после потери служения и дохода Симич был вынужден уехать за границу, где работает на стройке, чтобы содержать супругу и троих детей.',
    'В физическом труде нет ничего постыдного. Напротив, каждый человек, честно зарабатывающий на жизнь своей семьи, заслуживает уважения. Однако трудно остаться равнодушным к судьбе бывшего священника, который оказался вынужден искать средства к существованию вдали от Родины, оставив прежнюю жизнь и служение.',
    
    'Где заканчивается дисциплина и начинается ответственность?',
    'Церковь имеет право защищать свой канонический порядок. Однако возникает вопрос: должны ли дисциплинарные решения сопровождаться столь тяжёлыми последствиями для человека и его семьи?',
    'Ответственность за это дело нельзя рассматривать исключительно в контексте решений Шумадийской епархии и епископа Иоанна. Вопросы возникают и к Высшему церковному суду, который, согласно сведениям о приговоре, заседал под председательством Бачского митрополита Иринея.',
    'Были ли исчерпаны все возможности для примирения? Соответствовало ли самое суровое наказание установленным нарушениям? И насколько при принятии решения учитывалась судьба семьи с тремя детьми?',
    'Ответы на эти вопросы важны не только для Николы Симича, но и для доверия верующих к справедливости церковных институтов.',
    'В конечном счёте за судебными решениями, официальными заявлениями и общественными спорами остаётся судьба конкретного человека и его семьи.',
    'Сегодня Никола Симич, согласно имеющимся сведениям, вместо служения у алтаря работает на строительной площадке за границей. И перед всеми нами остаётся вопрос: не забыли ли мы в спорах о правилах, авторитете и послушании о том, что должно находиться в самом центре христианской жизни, — о человеке, милосердии и любви к ближнему?'

  ],
  
  highlight1: 'Бывший священник Никола Симич, открыто поддерживавший протесты против Rio Tinto и требования студентов, после конфликта с церковным руководством столкнулся с потерей священнического служения и тяжёлыми жизненными обстоятельствами.',
  highlight2: 'Согласно сообщениям о его судьбе, сегодня Симич работает на стройке за границей, чтобы содержать супругу и троих детей. Его история поднимает вопрос о границах церковной дисциплины и о том, какое место в ней остаётся для милосердия.',
}

export default function TeskaSudbinaNikoleSimicaNakonCrkvenogPostupkaPage() {
  const { language, script } = useLanguage()

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
            src="/static/images/nikola-simic.jpg"
            alt={content.title}
            className="h-auto w-full object-cover"
          />
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

          <CommentsSection postSlug="teska-sudbina-nikole-simica-nakon-crkvenog-postupka" />
        </motion.div>
      </article>
    </main>
  )
}