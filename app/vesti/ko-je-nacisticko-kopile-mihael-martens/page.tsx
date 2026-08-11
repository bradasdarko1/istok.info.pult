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
  title: 'USRED BEOGRADA PITAO KAKO „UBITI VIŠE RUSA“ — KO JE NACISTIČKO KOPILE MIHAEL MARTENS?',
  date: 'Objavljeno: 11. avgust 2026.',
  lead: 'Postoje reči koje se teško mogu opravdati nespretnom formulacijom. A postoje rečenice koje, kada se izgovore u određenom gradu, pred narodom koji dobro pamti svoju istoriju, dobijaju daleko veću težinu. Upravo jedna takva rečenica izgovorena je u Beogradu.',
  paragraphs: [
    'Nemački novinar Mihael Martens, dugogodišnji dopisnik lista „Frankfurter algemajne cajtung“ (FAZ), pitao je ukrajinskog predsednika Volodimira Zelenskog šta Evropljani konkretno mogu da učine kako bi pomogli Ukrajini da „ubije više Rusa“, nakon čega je dodao — „više ruskih vojnika“.',
    'Da te sramotne reči izgovorene su u sred Beograda. U prestonici Srbije. U zemlji u kojoj veliki deo naroda Ruse i danas smatra bratskim narodom.',
    'KO JE BESRAMNI MIHAEL MARTENS?',
    'Mihael Martens je nemački novinar i autor, rođen 1973. godine u Hamburgu. Godinama prati Balkan, Srbiju, Kosovo i Metohiju i političke prilike u jugoistočnoj Evropi.',
    'DEDA MU JE BIO OFICIR VERMAHTA',
    'Martens potiče iz nacističke porodice: Njegov deda Hans-Herman Martens je bio član nacističke partije i visokorangirani oficir u Vrhovnoj komandi Vermahta pod komandom Alfreda Jodla, osuđenog u Nirnbergu za zločine protiv čovečnosti.',
    'Martens je objašnjavao da je upravo preko porodične istorije, istorija Trećeg rajha za njega prestala da bude nešto apstraktno i postala lično pitanje, te da je to doprinelo njegovom interesovanju za nemačku i evropsku istoriju. Ali upravo zbog poznavanja sopstvene porodične prošlosti moglo bi se očekivati da Martens bude među onima koji najbolje razumeju koliku težinu u Evropi imaju reči o ubijanju pripadnika drugog naroda. Posebno Rusa. I posebno kada te reči izgovara Nemac u Beogradu.',
    'A ONDA JE STIGLO „OPRAVDANjE“',
    'Martens je za nedeljnik „Vreme“ objasnio šta smatra svojom greškom. I tu priča postaje još kontroverznija. Martens nije rekao da je pogrešio zato što je govorio o „ubijanju više Rusa“. Kao svoju veliku grešku naveo je upotrebu reči „mi“ u formulaciji „mi Evropljani“. Objasnio je da kao novinar ne može da govori u ime Evropljana i da je novinarski ispravnije bilo pitati: „Šta evropske zemlje mogu da učine?“ Drugim rečima, njegova primedba samom sebi odnosila se pre svega na to u čije ime je postavio pitanje. Ne na suštinu onoga što je rekao. MARTENS: VEĆ MESECIMA RADIM NA ESEJU „UBIJANjE RUSA“. Martens je potom za „Vreme“ otkrio još nešto. Rekao je da već mesecima radi na eseju čiji je naslov „Ubijanje Rusa“, sa podnaslovom „Šta Evropa mora da uradi“. Kao istorijsku inspiraciju naveo je priču o Vinstonu Čerčilu i britanskom oficiru Ficroju Maklejnu, koji je tokom Drugog svetskog rata bio britanska veza sa Titovim partizanima.',
    'Martens je svoj stav povezao sa ratnom logikom prema kojoj je cilj bio nanošenje što većih gubitaka nemačkim snagama. Zatim je svoj stav preneo na današnji rat u Ukrajini. Prema njegovom objašnjenju, odgovorni zapadni političari trebalo bi da razmišljaju o tome kako ruskoj vojsci naneti tolike gubitke da Putin više ne može da ih nadoknađuje i bude prinuđen na okončanje rata. To je, dakle, mnogo više od slučajno izabrane reči na konferenciji. To je političko-vojna teza koju je Martens naknadno javno branio. Jsvno je branio svoju mržnju i poziv na istrebljenje jednog naroda.',
    'ZAŠTO OVO POSEBNO ODJEKUJE U SRBIJI?',
    'Možda neko van Srbije ne razume zašto ovakve reči ovde izazivaju toliko ogorčenja. Ali Srbi nisu zaboravili svoju istoriju. Nismo zaboravili 1914. godinu i odluku Ruske imperije da stane uz Srbiju u trenutku kada je Austrougarska krenula na našu zemlju. Nismo zaboravili ogromnu cenu koju je Sovjetski Savez platio u borbi protiv nacističke Nemačke. Nismo zaboravili ni vojnike Crvene armije koji su 1944. godine, zajedno sa jugoslovenskim snagama, učestvovali u borbama za oslobođenje Beograda. Rusi za mnoge Srbe nisu bezimene figure na televizijskoj mapi ratišta. To je narod koji veliki deo Srbije već generacijama naziva bratskim.',
    'SRBIJA IMA PRAVO DA KAŽE — NE U NAŠE IME',
    'Srbija, zemlja koja je tokom 20. veka izgubila ogroman broj ljudi u ratovima, ima poseban razlog da bude osetljiva kada se smrt pretvara u političku računicu. Zato iz Beograda treba da se čuje jednostavna poruka: Ne u naše ime. Ne želimo „više mrtvih Rusa“. Nećemo ćutati kada neko u prestonici Srbije govori o ubijanju pripadnika naroda koji veliki broj Srba smatra bratskim. Politika prolazi. Vlade se menjaju. Granice i savezi kroz istoriju dolaze i odlaze. Ali narod pamti.',
    'I zato Srbija pamti ko je sa njom delio najteže trenutke njene istorije - bratska naša Rusija.',
    'Istok Info Pult',
    'Čuvamo srpsku istoriju, kulturu i sećanje od zaborava.'
  ],
  
  highlight1: 'USRED BEOGRADA PITAO KAKO „UBITI VIŠE RUSA“!? Nemački novinar Mihael Martens pitao je ukrajinskog predsednika Volodimira Zelenskog šta Evropljani mogu da učine kako bi pomogli Ukrajini da „ubije više Rusa“, potom precizirajući — „više ruskih vojnika“. Reči su izgovorene u Beogradu — u zemlji u kojoj veliki deo naroda Ruse i danas smatra bratskim narodom.',
  highlight2: 'SRBIJA PAMTI — NE U NAŠE IME! Nismo zaboravili 1914. godinu i odluku Ruske imperije da stane uz Srbiju. Nismo zaboravili ogromnu cenu koju je Sovjetski Savez platio u borbi protiv nacističke Nemačke, niti vojnike Crvene armije koji su 1944. učestvovali u borbama za oslobođenje Beograda. Politika prolazi. Vlade i savezi se menjaju. Ali narod pamti. Ne u naše ime.',
}

const ruText = {
  category: 'Новости',
  title: 'ПОСРЕДИ БЕЛГРАДА СПРОСИЛ, КАК «УБИТЬ БОЛЬШЕ РУССКИХ» — КТО ТАКОЙ МИХАЭЛЬ МАРТЕНС?',
  date: 'Опубликовано: 30 июль 2026 г.',
  lead: 'Есть слова, которые трудно оправдать неудачной формулировкой. А есть фразы, которые, будучи произнесёнными в определённом городе, перед народом, хорошо помнящим свою историю, приобретают гораздо больший вес.',
  paragraphs: [
    'Именно такая фраза прозвучала в Белграде.',
    'Немецкий журналист Михаэль Мартенс, многолетний корреспондент газеты «Frankfurter Allgemeine Zeitung» (FAZ), спросил президента Украины Владимира Зеленского, что конкретно европейцы могут сделать, чтобы помочь Украине «убить больше русских», после чего уточнил — «больше российских солдат».',
    'Да, эти позорные слова прозвучали прямо в Белграде. В столице Сербии. В стране, где значительная часть народа и сегодня считает русских братским народом.',
    'КТО ТАКОЙ БЕССТЫДНЫЙ МИХАЭЛЬ МАРТЕНС?',
    'Михаэль Мартенс — немецкий журналист и автор, родившийся в 1973 году в Гамбурге. На протяжении многих лет он освещает события на Балканах, в Сербии, Косово и Метохии, а также политическую ситуацию в Юго-Восточной Европе.',
    'ЕГО ДЕД БЫЛ ОФИЦЕРОМ ВЕРМАХТА',
    'Мартенс происходит из семьи, связанной с нацистским прошлым: его дед Ханс-Херман Мартенс был членом нацистской партии и высокопоставленным офицером Верховного командования Вермахта под командованием Альфреда Йодля, осуждённого в Нюрнберге за преступления против человечности.',
    'Мартенс объяснял, что именно благодаря истории собственной семьи история Третьего рейха перестала быть для него чем-то абстрактным и стала личным вопросом, что способствовало его интересу к немецкой и европейской истории.',
    'Но именно потому, что Мартенс хорошо знаком с прошлым собственной семьи, можно было бы ожидать, что он будет среди тех, кто лучше других понимает, какой вес в Европе имеют слова об убийстве представителей другого народа. Особенно русских. И особенно когда эти слова произносит немец в Белграде.',
    'А ЗАТЕМ ПОЯВИЛОСЬ «ОПРАВДАНИЕ»',
    'В интервью еженедельнику «Vreme» Мартенс объяснил, в чём он видит свою ошибку.',
    'И здесь история становится ещё более спорной.',
    'Мартенс не сказал, что ошибся, говоря об «убийстве большего количества русских». Своей большой ошибкой он назвал употребление слова «мы» в формулировке «мы, европейцы».',
    'Он объяснил, что как журналист не может говорить от имени европейцев и что с журналистской точки зрения правильнее было бы спросить: «Что могут сделать европейские страны?» Другими словами, его замечание в собственный адрес касалось прежде всего того, от чьего имени был задан вопрос, а не самой сути сказанного.',
    'МАРТЕНС: Я УЖЕ НЕСКОЛЬКО МЕСЯЦЕВ РАБОТАЮ НАД ЭССЕ «УБИЙСТВО РУССКИХ»',
    'Затем Мартенс рассказал журналу «Vreme» ещё кое-что.',
    'По его словам, уже несколько месяцев он работает над эссе под названием «Убийство русских» с подзаголовком «Что должна сделать Европа».',
    'В качестве исторического вдохновения он привёл историю Уинстона Черчилля и британского офицера Фицроя Маклейна, который во время Второй мировой войны был британским связным при партизанах Тито.',
    'Мартенс связал свою позицию с военной логикой, согласно которой целью было нанесение как можно больших потерь немецким силам. Затем он перенёс эту логику на нынешнюю войну на Украине.',
    'Согласно его объяснению, ответственные западные политики должны задуматься о том, как нанести российской армии такие потери, которые Путин больше не сможет восполнять и из-за которых будет вынужден прекратить войну.',
    'Таким образом, речь идёт о гораздо большем, чем случайно выбранные слова на пресс-конференции.',
    'Это политико-военный тезис, который Мартенс впоследствии публично защищал. Он публично защищал свою ненависть и призыв к истреблению одного народа.',
    'ПОЧЕМУ ЭТО ОСОБЕННО СИЛЬНО ОТЗЫВАЕТСЯ В СЕРБИИ?',
    'Возможно, кто-то за пределами Сербии не понимает, почему подобные слова вызывают здесь такое возмущение.',
    'Но сербы не забыли свою историю.',
    'Мы не забыли 1914 год и решение Российской империи встать на сторону Сербии в тот момент, когда Австро-Венгрия пошла войной на нашу страну.',
    'Мы не забыли огромную цену, которую Советский Союз заплатил в борьбе против нацистской Германии.',
    'Мы не забыли и солдат Красной армии, которые в 1944 году вместе с югославскими силами участвовали в боях за освобождение Белграда.',
    'Для многих сербов русские — не безымянные фигуры на телевизионной карте боевых действий.',
    'Это народ, который значительная часть Сербии на протяжении поколений называет братским.',
    'СЕРБИЯ ИМЕЕТ ПРАВО СКАЗАТЬ — НЕ ОТ НАШЕГО ИМЕНИ',
    'Сербия — страна, потерявшая в войнах XX века огромное количество людей, — имеет особую причину быть чувствительной к тому, когда смерть превращают в политический расчёт.',
    'Поэтому из Белграда должен прозвучать простой посыл: Не от нашего имени.',
    'Мы не хотим «больше мёртвых русских».',
    'Мы не будем молчать, когда кто-то в столице Сербии говорит об убийстве представителей народа, который огромное количество сербов считает братским.',
    'Политика проходит.',
    'Правительства меняются.',
    'Границы и союзы на протяжении истории возникают и исчезают.',
    'Но народ помнит.',
    'И поэтому Сербия помнит, кто разделял с ней самые тяжёлые моменты её истории — наша братская Россия.',
    'Istok Info Pult',
    'Сохраняем сербскую историю, культуру и память от забвения.'
  ],
  
  highlight1: 'ПОСРЕДИ БЕЛГРАДА СПРОСИЛ, КАК «УБИТЬ БОЛЬШЕ РУССКИХ». Немецкий журналист Михаэль Мартенс спросил президента Украины Владимира Зеленского, что европейцы могут сделать, чтобы помочь Украине «убить больше русских», после чего уточнил — «больше российских солдат». Эти слова прозвучали в Белграде — в стране, где значительная часть народа и сегодня считает русских братским народом.',
  highlight2: 'СЕРБИЯ ПОМНИТ — НЕ ОТ НАШЕГО ИМЕНИ. Мы не забыли 1914 год и решение Российской империи встать на сторону Сербии. Мы не забыли огромную цену, которую Советский Союз заплатил в борьбе против нацистской Германии, и солдат Красной армии, участвовавших в 1944 году в боях за освобождение Белграда. Политика проходит. Правительства и союзы меняются. Но народ помнит. Не от нашего имени.',
}

export default function KoJeNacistickoKopileMihaelMartensPage() {
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
            src="/static/images/mihael-martens.jpeg"
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

          <CommentsSection postSlug="ko-je-nacisticko-kopile-mihael-martens" />
        </motion.div>
      </article>
    </main>
  )
}