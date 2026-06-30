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
  title: 'Crkva Samodreža – svetinja u kojoj se, prema predanju, knez Lazar pričestio pred Kosovski boj',
  date: 'Objavljeno: 30. jun 2026.',
  lead: 'Crkva Samodreža nalazi se u istoimenom selu nadomak Vučitrna i posvećena je Svetom Jovanu Krstitelju. U srpskoj tradiciji smatra se jednom od najznačajnijih svetinja vezanih za događaje koji su prethodili Kosovskom boju 1389. godine.',
  paragraphs: [
    'Prema narodnom predanju i crkvenoj tradiciji, upravo u ovoj crkvi knez Lazar Hrebeljanović pričestio se zajedno sa svojim vojnicima neposredno pre odlaska u boj na Kosovu. Takođe se veruje da je nakon bitke u Samodreži sahranjen i legendarni srpski junak Miloš Obilić.',
    'Iznad crkve nalazi se brdo Gradina, gde se nalaze ostaci utvrđenja koje se u predanju vezuje za Vuka Brankovića. Veruje se da je upravo na tom mestu knez Lazar održao poslednju večeru sa svojim vojvodama, kada je izgovorio poznatu „Lazarevu kletvu“, čiji su stihovi kasnije uklesani na crkvi Lazarici u Kruševcu.',
    'Tokom viševekovne osmanske vlasti crkva je gotovo potpuno porušena. Prema istorijskim zapisima i lokalnom predanju, olovni krov iskorišćen je za pokrivanje jedne džamije, dok je kamen sa zidova odnošen i korišćen za druge građevine.',
    'Obnova hrama započela je u vreme Kraljevine Jugoslavije, a među donatorima bio je i znameniti srpski naučnik Mihajlo Pupin.',
    'U Drugom svetskom ratu crkva je ponovo teško stradala. Opljačkana je, uništen je ikonostas, oštećene su freske, a prozori i vrata su uklonjeni. Prema svedočenjima, pokušano je i skidanje bakarnog krova, ali taj poduhvat nije završen.',
    'Tokom perioda SFRJ hram nije ozbiljnije obnavljan sve do 1989. godine, kada su izvedeni radovi na uređenju prilaznog puta i obnovi objekta.',
    'Nakon sukoba na Kosovu i Metohiji 1999. godine, srpsko stanovništvo iz Samodreže bilo je primorano da napusti selo, dok je crkva ponovo bila izložena devastaciji. Danas Crkva Samodreža ostaje jedno od najznačajnijih mesta srpske duhovne i istorijske baštine na Kosovu i Metohiji, kao simbol stradanja, opstanka i sećanja na Kosovski boj.'
  ],
  
  highlight1: 'Crkva Svetog Jovana Krstitelja u Samodreži vekovima zauzima posebno mesto u srpskoj istoriji i narodnom predanju vezanom za Kosovski boj 1389. godine.',
  highlight2: 'Ova svetinja više puta je rušena i obnavljana, ostajući jedan od najznačajnijih simbola srpskog duhovnog i istorijskog nasleđa na Kosovu i Metohiji.',
}

const ruText = {
  category: 'Новости',
  title: 'Церковь Самодрежа — святыня, где, согласно преданию, князь Лазарь причастился перед Косовской битвой',
  date: 'Опубликовано: 30 июня 2026 г.',
  lead: 'Церковь Самодрежа расположена в одноимённом селе недалеко от Вучитрна и посвящена Святому Иоанну Крестителю. В сербской традиции она считается одной из важнейших святынь, связанных с событиями, предшествовавшими Косовской битве 1389 года.',
  paragraphs: [
    'Согласно народному преданию и церковной традиции, именно в этом храме князь Лазарь Хребелянович вместе со своим войском причастился перед выступлением на Косово поле. Также существует предание, что после битвы здесь был погребён легендарный сербский герой Милош Обилич.',
    'Над церковью находится холм Градина, где сохранились остатки укрепления, которое народная традиция связывает с Вуком Бранковичем. Считается, что именно здесь князь Лазарь провёл свой последний ужин с воеводами и произнёс знаменитое «Лазарево проклятие», слова которого позднее были высечены на стене церкви Лазарица в Крушеваце.',
    'Во времена многовекового османского владычества храм был почти полностью разрушен. Согласно историческим свидетельствам и местным преданиям, свинцовая кровля была использована для покрытия одной из мечетей, а камень со стен разобрали для строительства других сооружений.',
    'В период Королевства Югославии церковь была восстановлена. Одним из жертвователей на её восстановление стал выдающийся сербский учёный Михаило Пупин.',
    'Во время Второй мировой войны храм вновь подвергся разрушению. Он был разграблен, иконостас уничтожен, фрески повреждены, двери и окна сняты. По свидетельствам очевидцев, предпринималась попытка снять и медную кровлю, однако она не была завершена.',
    'В социалистический период Югославии серьёзные восстановительные работы долгое время не проводились. Лишь в 1989 году были выполнены работы по благоустройству подъездной дороги и частичному восстановлению храма.',
    'После событий 1999 года сербское население Самодрежи было вынуждено покинуть село, а церковь вновь подверглась разрушениям. Сегодня церковь Самодрежа остаётся одним из важнейших памятников духовного и исторического наследия сербского народа в Косове и Метохии, символизируя память о Косовской битве, страдания и многовековую стойкость народа.'
  ],
  
  highlight1: 'Церковь Святого Иоанна Крестителя в Самодреже занимает особое место в сербской истории и народной традиции, связанной с Косовской битвой 1389 года.',
  highlight2: 'На протяжении веков храм неоднократно разрушался и восстанавливался, оставаясь одним из важнейших символов духовного и исторического наследия сербского народа в Косове и Метохии.',
}

export default function CrkvaSamodrezaPage() {
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
            src="/static/images/crkva-samodrez.jpeg"
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

          <CommentsSection postSlug="crkva-samodreza" />
        </motion.div>
      </article>
    </main>
  )
}