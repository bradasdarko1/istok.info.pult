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
  title: 'Sećanje na Vasu Čubrilovića: Najmlađi učesnik Sarajevskog atentata i jedan od najvećih srpskih istoričara',
  date: 'Objavljeno: 11. jun 2026.',
  lead: 'Na današnji dan, 11. juna 1990. godine, preminuo je Vaso Čubrilović, srpski istoričar, univerzitetski profesor i akademik, poznat kao najmlađi učesnik Sarajevskog atentata na austrougarskog prestolonaslednika Franca Ferdinanda 1914. godine.',
  paragraphs: [
    'Kao gimnazijalac pristupio je nacionalno-revolucionarnoj organizaciji Mlada Bosna. Zbog učešća u Sarajevskom atentatu osuđen je na 16 godina najstrožeg zatvora, a kaznu je izdržavao sve do sloma Austro-Ugarske na kraju Prvog svetskog rata.',
    'Tokom Drugog svetskog rata bio je zatočen u logoru na Banjici. Nakon rata posvetio se naučnom radu i postao jedan od najuglednijih srpskih istoričara. Studirao je filozofiju na Beogradskom univerzitetu, gde je doktorirao 1927. godine. Posle oslobođenja zemlje obavljao je dužnost direktora Balkanološkog instituta.',
    'Čubrilović je ostavio dubok trag u srpskoj istoriografiji. Njegov rad odlikovao se izuzetnim darom za istorijsku sintezu, a iza sebe je ostavio više od 70 knjiga i naučnih studija. Među najpoznatijim delima nalaze se „Bosanski ustanak 1875–1878. godine“, „Poreklo muslimanskog plemstva u Bosni i Hercegovini“, „Prvi srpski ustanak i bosanski Srbi“, „Politička prošlost Hrvata“, „Istorija političke misli u Srbiji devetnaestog veka“ i „Odabrani istorijski radovi“.',
    'Kao učenik šestog razreda gimnazije postao je član Mlade Bosne. Nakon demonstrativnog napuštanja školske svetosavske priredbe 1914. godine u Tuzli, nastavio je školovanje u Sarajevu, gde se povezao sa Danilom Ilićem i drugim pripadnicima organizacije koji su pripremali atentat na Franca Ferdinanda.',
    'Na Vidovdan, 28. juna 1914. godine, bio je deo grupe zaverenika raspoređenih duž trase kojom se kretao austrougarski prestolonaslednik. Kod Više devojačke škole čekao je sa bombom i revolverom, ali nije dobio priliku da izvrši napad. Nakon atentata uhapšen je u Bosanskoj Dubici i sproveden u Sarajevo na suđenje.',
    'Pošto u vreme atentata nije bio punoletan, izbegao je smrtnu kaznu i osuđen je na 16 godina zatvora. Veći deo kazne proveo je u teškim uslovima, uključujući više od tri godine samice. Bio je jedan od svega petorice osuđenika koji su preživeli austrougarske kazamate.',
    'Njegova porodica takođe je teško stradala zbog povezanosti sa revolucionarnim pokretom. Brat Veljko Čubrilović osuđen je na smrt vešanjem, dok je brat Branko osuđen na dugogodišnju robiju. Zbog pisma u kojem je veličala Veljkovu hrabrost, na zatvorsku kaznu osuđena je i njihova sestra Staka.',
    'Vaso Čubrilović ostao je upamćen kao jedna od najznačajnijih ličnosti srpske istorije 20. veka – čovek koji je od mladobosanskog revolucionara postao ugledni naučnik, akademik i autor dela koja i danas predstavljaju nezaobilaznu literaturu za proučavanje istorije Balkana.'
  ],
  
  highlight1: 'Na današnji dan 1990. godine preminuo je Vaso Čubrilović, najmlađi učesnik Sarajevskog atentata na Franca Ferdinanda.',
  highlight2: 'Od osuđenika na 16 godina robije do akademika SANU i autora više od 70 istorijskih dela.',
}

const ruText = {
  category: 'Новости',
  title: 'Память о Васо Чубриловиче: самый молодой участник Сараевского покушения и выдающийся сербский историк',
  date: 'Опубликовано: 11 июня 2026 г.',
  lead: '11 июня 1990 года скончался Васо Чубрилович — сербский историк, профессор Белградского университета, академик и самый молодой участник Сараевского покушения на австро-венгерского наследника престола Франца Фердинанда в 1914 году.',
  paragraphs: [
    'Ещё гимназистом он вступил в национально-революционную организацию «Млада Босна». За участие в Сараевском покушении Чубрилович был приговорён к 16 годам строгого заключения и оставался в тюрьме до распада Австро-Венгрии в конце Первой мировой войны.',
    'Во время Второй мировой войны он находился в заключении в лагере Баница. После войны посвятил себя научной деятельности и стал одним из наиболее известных сербских историков. Он окончил философский факультет Белградского университета и защитил докторскую диссертацию в 1927 году. После освобождения страны возглавлял Балканологический институт.',
    'Васо Чубрилович оставил значительное наследие в исторической науке. Его труды отличались способностью к глубокому историческому анализу и обобщению. Он является автором более 70 книг и научных исследований, среди которых «Боснийское восстание 1875–1878 годов», «Происхождение мусульманской знати в Боснии и Герцеговине», «Первое сербское восстание и боснийские сербы», «Политическое прошлое хорватов», «История политической мысли в Сербии XIX века» и «Избранные исторические труды».',
    'В 1914 году, будучи учеником гимназии, он присоединился к организации «Млада Босна». После демонстративного ухода с школьного праздника в Тузле продолжил обучение в Сараеве, где познакомился с Данилом Иличем и другими участниками заговора против Франца Фердинанда.',
    '28 июня 1914 года Чубрилович находился среди заговорщиков, расположенных вдоль маршрута следования наследника престола. Он ожидал кортеж возле Высшей женской школы, имея при себе бомбу и револьвер. После покушения был арестован в Босанской Дубице и доставлен в Сараево для суда.',
    'Поскольку на момент покушения он был несовершеннолетним, смертная казнь к нему не применялась. Суд приговорил его к 16 годам заключения. Значительную часть срока он провёл в крайне тяжёлых условиях, более трёх лет находясь в одиночной камере. Из всех осуждённых участников заговора он оказался одним из немногих, кто пережил заключение.',
    'Тяжёлые последствия коснулись и его семьи. Его брат Велько Чубрилович был казнён через повешение, брат Бранко получил длительный срок заключения, а сестра Стака была осуждена за письмо, в котором с уважением отзывалась о мужестве своего погибшего брата.',
    'Васо Чубрилович вошёл в историю как одна из самых значимых фигур сербской общественной и научной жизни XX века — человек, прошедший путь от молодого революционера до выдающегося учёного, академика и автора фундаментальных трудов по истории Балкан.'
  ],
  
  highlight1: '11 июня 1990 года ушёл из жизни Васо Чубрилович — самый молодой участник покушения на Франца Фердинанда в Сараево.',
  highlight2: 'От приговора к 16 годам тюрьмы до академика и автора более 70 исторических трудов.',
}

export default function SecanjeNaVasuCubrilovicaPage() {
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
            src="/static/images/vaso-cubrilovic.jpeg"
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

          <CommentsSection postSlug="secanje-na-vasu-cubrilovica" />
        </motion.div>
      </article>
    </main>
  )
}