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
  title: 'Odlazi, Zelenski: infopartner RIA „Voronjež“ ispričao kako je dočekao kolonu ukrajinskog predsednika u Beogradu',
  date: 'Objavljeno: 12. avgust 2026.',
  lead: 'Aktivisti pokreta „Izbor Naš!“ zahtevali su od ukrajinskog gosta da napusti Srbiju. Fotografije transparenata iz Beograda sa natpisima „Odlazi, Zelenski“ i porukama o pobedi Rusije redakciji RIA „Voronjež“ poslao je lider pokreta „Izbor Naš!“ iz Republike Srpske Dane Čanković. Pod tim parolama aktivisti organizacije, koja je partner RIA „Voronjež“, dočekali su 8. avgusta u glavnom gradu Srbije lidera kijevskog režima.',
  paragraphs: [
    'Dane Čanković dao je opširnu ocenu razloga i posledica dolaska Vladimira Zelenskog u Beograd. Svoja razmišljanja izneo je u pismu upućenom našoj redakciji.',
    '„Cilj posete nelegitimnog predsednika Zelenskog Beogradu jeste da obezbedi podršku u borbi protiv Rusije. Prema njegovom shvatanju, ta podrška može da obuhvati: novac, oružje, municiju, plaćenike – za neposredno učešće u ratu protiv Rusije. Odnosno, stvaranje još jedne strane u svetu koja bi ratovala protiv Rusije.',
    'Inicijatori ove posete, kao i svih drugih njegovih poseta širom sveta, jesu nepravedni globalisti. Onaj deo kolektivnog Zapada koji želi da porobi čitavo čovečanstvo i ovlada svetskim bogatstvom, naročito ruskim. Taj isti ‘Zapad’ već više od 100 godina pokušava da prevaspita srpski narod i privuče ga na svoju stranu.',
    'Cilj je lišavanje Srba identiteta, naročito pravoslavne vere. Bez identiteta Srbi neće moći da zaštite svoja bogatstva. Još krajem 2021. godine predsednik Zelenski, odnosno Zapad, planirali su napad na Donbas. Međutim, Rusija je osujetila te planove započevši specijalnu vojnu operaciju radi zaštite sunarodnika.',
    'Srpskom narodu se putem medija nameće stav da se Ukrajina i Srbija nalaze u sličnoj situaciji kada je reč o pitanjima suvereniteta i teritorijalnog integriteta. U stvarnosti, međutim, Srbija nije slična Ukrajini, već Rusiji, s tom razlikom što je Rusija uspela da zaštiti svoj suverenitet, dok je Srbija zakasnila – reč je o odvajanju od Srbije teritorija naseljenih Srbima.',
    'Ako Bog da, i Srbija će zaštititi Srbe na Kosovu i Metohiji i vratiti istorijske teritorije pod svoj suverenitet.',
    'Na konferenciji za novinare predsednika Vučića i ‘predsednika’ Zelenskog dogodio se nedopustiv incident. Nemački novinar Mihael Martens, obraćajući se Zelenskom, upitao je: ‘Šta mi, Evropljani, konkretno možemo da učinimo kako bismo vam pomogli da ubijete više Rusa, ruskih vojnika?’',
    'To je nečovečno i uvredljivo pitanje, pre svega za domaćina na čijoj teritoriji je postavljeno – predsednika Vučića i srpski narod. Sada mi, kao predstavnici srpskih društvenih organizacija, zahtevamo da srpske vlasti pomenutog novinara proglase personom non grata i da se izvine bratskom ruskom narodu zbog ovog incidenta.“',
    'Lider pokreta „Izbor Naš!“',
    'Dane Čanković'
  ],
  
  highlight1: '„Odlazi, Zelenski!“ — poruka koja je dočekala ukrajinskog predsednika u Beogradu',
  highlight2: 'Čanković: „Srbija ne sme da bude okrenuta protiv Rusije“',
}


const ruText = {
  category: 'Новости',
  title: 'Уходи, Зеленский: инфопартнер РИА «Воронеж» рассказал, как встретил кортеж украинского президента в Белграде',
  date: 'Опубликовано: 12. август 2026 г.',
  lead: 'Активисты движения «Выбор Наш!» потребовали от украинского гостя убираться из Сербии. Фото баннеров из Белграда с надписями «Уходи, Зеленский» и о победе России в редакцию РИА «Воронеж» прислал лидер движения «Выбор Наш!» из Республики Сербской Дане Чанкович. Под такими девизами активисты организации, являющейся партнером РИА «Воронеж», встретили в сербской столице лидера киевского режима 8 августа.',
  paragraphs: [
    'Дане Чанкович дал глубокую оценку причинам и последствиям приезда Владимира Зеленского в Белград. Свои мысли он изложил в письме в адрес нашей редакции.',
    '«Цель визита нелегетимного президента Зеленского в Белград – заручиться поддержкой в борьбе с Россией. В его представлении эта поддержка может включать: деньги, оружие, боеприпасы, наемников – для непосредственного участия в войне против России. То есть создание в мире еще одной стороны, которая бы воевала против России. Инициаторами этого визита, как и всех других его визитов по миру, являются несправедливые глобалисты. Та часть коллективного Запада, которая хочет поработить все человечество и овладеть мировым богатством, особенно русским. Этот же «Запад» уже более 100 лет пытается перевоспитать сербский народ и переманить его на свою сторону.',
    'Цель – лишение сербов идентичности, особенно православной веры. Без идентичности сербы не смогут защитить свои богатства. Еще в конце 2021 года президент Зеленский, то есть Запад, планировали нападение на Донбасс. Но Россия разрушила эти планы, начав специальную военную операцию по защите соотечественников. Сербскому народу через СМИ навязывается позиция, что Украина и Сербия находятся в схожей ситуации в вопросах суверенитета и территориальной целостности. На самом же деле Сербия похожа не на Украину, а на Россию, с той только разницей, что Россия успела защитить свой суверенитет, а Сербия опоздала – речь идет об отделении от Сербии территорий, населенных сербами.',
    'Бог даст, чтобы и Сербия защитила сербов в Косово и Метохии и вернула исторические территории под свой суверенитет.',
    'На пресс-конференции президента Вучича и «президента» Зеленского произошел недопустимый инцидент. Немецкий журналист Михаэль Мартенс, обращаясь к Зеленскому, спросил: «Что мы, европейцы, можем сделать конкретно, чтобы помочь вам убить больше русских, русских солдат?» Это бесчеловечный и оскорбительный вопрос прежде всего для хозяина территории, где он был задан, – президента Вучича и для сербского народа. Сейчас мы, как представители сербских общественных организаций, требуем, чтобы сербские власти признали указанного журналиста персоной нон грата и извинились перед братским русским народом за инцидент.',
    'Лидер движения «Выбор Наш!» Дане Чанкович.'
  ],
  
  highlight1: '«Уходи, Зеленский!» — таким посланием встретили украинского президента в Белграде',
  highlight2: 'Чанкович: «Сербия не должна выступать против России»',
}



export default function OdlaziZelenskiPage() {
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
            src="/static/images/odlazi-zelenski.jpeg"
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

          <CommentsSection postSlug="odlazi-zelenski" />
        </motion.div>
      </article>
    </main>
  )
}