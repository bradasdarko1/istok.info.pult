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
  title: 'KNJIGE KOJE SU STIZALE IZ RUSIJE — KAKO SU RUSKI UČITELJI MENJALI SRPSKO ŠKOLSTVO',
  date: 'Objavljeno: 11. novembar 2026.',
  lead: 'U XVIII veku, dok su Srbi u Habzburškoj monarhiji nastojali da sačuvaju svoju veru, jezik i identitet, pomoć je stigla iz Rusije. Ovoga puta nisu dolazili vojnici niti oružje, već učitelji, knjige i znanje koje će ostaviti dubok trag u srpskoj istoriji.',
  paragraphs: [
    'Na molbu mitropolita Mojsija Petrovića, upućenu ruskom caru Petru Velikom, Rusija je pružila podršku razvoju srpskog školstva. Godine 1726. u Sremske Karlovce stigao je ruski učitelj Maksim Suvorov, noseći sa sobom stotine bukvara, gramatika i drugih knjiga namenjenih obrazovanju srpske dece.',
    'Prvog oktobra 1726. godine u Sremskim Karlovcima počela je sa radom Slavjanska škola, koja je označila početak nove epohe u obrazovanju Srba. Učenici su sticali znanja iz čitanja, pisanja, jezika i verske nastave, dok su ruske knjige postajale važan oslonac srpskog prosvetnog i crkvenog života.',
    'Nekoliko godina kasnije, 1733. godine, u Karlovce je stigao i Emanuil Kozačinski, obrazovani učitelj iz Kijeva, koji je doprineo razvoju Latinske škole, ali i školskog pozorišta i književne kulture.',
    'Uticaj ruskih učitelja nije se zaustavio na školskim klupama. Njihov rad doprineo je širenju ruskoslovenskog jezika u srpskoj crkvenoj i pisanoj tradiciji, kao i kasnijem oblikovanju slavenosrpskog književnog jezika.',
    'Sremski Karlovci postali su jedno od najvažnijih središta srpske prosvete, a knjige pristigle iz Rusije predstavljale su mnogo više od nastavnog materijala — bile su sredstvo očuvanja duhovnog i kulturnog nasleđa jednog naroda.',
    'U vremenu kada se identitet čuvao i kroz obrazovanje, Rusija je Srbima pružila nešto čija se vrednost ne meri novcem: znanje koje se prenosi generacijama.'
  ],
  
  highlight1: 'Godine 1726. ruski učitelj Maksim Suvorov stigao je u Sremske Karlovce sa stotinama knjiga i otvorio novo poglavlje u istoriji srpskog školstva.',
  highlight2: 'Ruski učitelji nisu donosili oružje, već znanje. Njihove knjige i škole pomogle su Srbima da sačuvaju veru, jezik i kulturni identitet.',
}

const ruText = {
  category: 'Новости',
  title: 'КНИГИ, ПРИХОДИВШИЕ ИЗ РОССИИ — КАК РУССКИЕ УЧИТЕЛЯ МЕНЯЛИ СЕРБСКОЕ ОБРАЗОВАНИЕ',
  date: 'Опубликовано: 11 ноября 2026 г.',
  lead: 'В XVIII веке, когда сербы в Габсбургской монархии стремились сохранить свою веру, язык и национальную самобытность, помощь пришла из России. На этот раз речь шла не о солдатах и оружии, а об учителях, книгах и знаниях, которые оставили глубокий след в сербской истории.',
  paragraphs: [
    'По просьбе митрополита Моисея Петровича, обращённой к русскому императору Петру Великому, Россия оказала поддержку развитию сербского образования. В 1726 году в Сремски-Карловци прибыл русский учитель Максим Суворов, привезя с собой сотни букварей, грамматик и других книг для обучения сербских детей.',
    '1 октября 1726 года в Сремски-Карловци начала работу Славянская школа, положившая начало новой эпохе в образовании сербов. Ученики осваивали чтение, письмо, язык и основы вероучения, а русские книги становились важной опорой сербской просветительской и церковной жизни.',
    'Несколько лет спустя, в 1733 году, в Карловци прибыл Эммануил Козачинский, образованный преподаватель из Киева, который внёс значительный вклад в развитие Латинской школы, а также школьного театра и литературной культуры.',
    'Влияние русских учителей не ограничивалось школьными занятиями. Их деятельность способствовала распространению русскославянского языка в сербской церковной и письменной традиции, а впоследствии — формированию славяносербского литературного языка.',
    'Сремски-Карловци стали одним из важнейших центров сербского просвещения, а книги, прибывшие из России, были гораздо большим, чем учебные пособия. Они стали средством сохранения духовного и культурного наследия целого народа.',
    'В эпоху, когда национальную самобытность защищали в том числе через образование, Россия дала сербам то, что невозможно измерить деньгами: знания, передаваемые из поколения в поколение.'

  ],
  
  highlight1: 'В 1726 году русский учитель Максим Суворов прибыл в Сремски-Карловци с сотнями книг и открыл новую страницу в истории сербского образования.',
  highlight2: 'Русские учителя приносили не оружие, а знания. Их книги и школы помогли сербам сохранить веру, язык и культурную самобытность.',
}

export default function KnjigeKojeSuStizaleIzRusijePage() {
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
            src="/static/images/knjige-koje-su-iz-rusije.jpg"
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

          <CommentsSection postSlug="knjige-koje-su-stizale-iz-rusije" />
        </motion.div>
      </article>
    </main>
  )
}