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
  title: 'Na današnji dan ubijen knez Mihailo Obrenović – vladar koji je oslobodio srpske gradove od turskih garnizona',
  date: 'Objavljeno: 10. jun 2026.',
  lead: 'Na današnji dan, 10. juna 1868. godine, u Košutnjaku kod Beograda izvršen je atentat na kneza Mihaila Obrenovića, jednog od najznačajnijih srpskih vladara XIX veka. Sin kneza Miloša Obrenovića ostao je upamćen kao državnik koji je vodio Srbiju putem modernizacije i jačanja njene samostalnosti.',
  paragraphs: [
    'Tokom svoje vladavine knez Mihailo ostvario je jedan od najvažnijih političkih uspeha tog vremena – povlačenje turskih garnizona iz srpskih gradova 1867. godine. Time je Srbija načinila veliki korak ka punoj nezavisnosti od Osmanskog carstva.',
    'Pored unutrašnjih reformi, knez Mihailo je radio i na ideji oslobađanja i ujedinjenja srpskog naroda. U tom cilju sklopljen je i tajni sporazum sa crnogorskim knjazom Nikolom Petrovićem, kojim je predviđena zajednička borba za oslobođenje srpskih krajeva pod osmanskom vlašću i njihovo objedinjavanje u jednu državu.',
    'Prema odredbama tog sporazuma, knjaz Nikola bi u budućoj zajedničkoj državi priznao kneza Mihaila za vrhovnog vladara ujedinjenog srpskog naroda, dok bi porodici Petrović bilo očuvano kneževsko dostojanstvo i visok položaj u novoj državnoj zajednici.',
    'Atentat u Košutnjaku prekinuo je mnoge političke planove kneza Mihaila, ali je njegovo delo ostalo trajno zapisano u srpskoj istoriji. Danas se smatra jednim od najznačajnijih državnika svog vremena i simbolom borbe za slobodu i državnu samostalnost Srbije.'
  ],
  
  highlight1: 'Knez Mihailo Obrenović ubijen je 10. juna 1868. godine u Košutnjaku, u trenutku kada je radio na jačanju i ujedinjenju srpskih zemalja.',
  highlight2: 'Njegova politika oslobađanja od osmanske vlasti i planovi za okupljanje srpskog naroda ostavili su dubok trag u istoriji Srbije i Balkana.',
}

const ruText = {
  category: 'Новости',
  title: 'В этот день был убит князь Михаил Обренович — правитель, добившийся вывода турецких гарнизонов из сербских городов',
  date: 'Опубликовано: 10 июня 2026 г.',
  lead: '10 июня 1868 года в Кошутняке, недалеко от Белграда, был совершен атентат на князя Михаила Обреновича — одного из наиболее значимых сербских правителей XIX века. Сын князя Милоша Обреновича вошёл в историю как государственный деятель, который проводил политику модернизации страны и укрепления её самостоятельности.',
  paragraphs: [
    'Во время своего правления князь Михаил добился одного из важнейших политических успехов того времени — вывода турецких гарнизонов из сербских городов в 1867 году. Этот шаг стал важной вехой на пути Сербии к полной независимости от Османской империи.',
    'Помимо внутренних реформ, князь Михаил активно поддерживал идею освобождения и объединения сербского народа. С этой целью был заключён тайный договор с черногорским князем Николой Петровичем, предусматривавший совместную борьбу за освобождение сербских земель, находившихся под властью Османской империи, и их объединение в единое государство.',
    'Согласно условиям соглашения, князь Никола должен был признать Михаила верховным правителем объединённого сербского государства, а династии Петровичей гарантировались сохранение княжеского достоинства и высокий статус в будущем государственном устройстве.',
    'Гибель князя Михаила в Кошутняке прервала многие его политические планы, однако его деятельность оставила глубокий след в истории Сербии. Сегодня он считается одним из самых выдающихся сербских государственных деятелей и символом борьбы за свободу и независимость страны.'
  ],
  
  highlight1: '10 июня 1868 года в Кошутняке был убит князь Михаил Обренович, один из самых выдающихся государственных деятелей Сербии XIX века.',
  highlight2: 'Его политика освобождения от османского влияния и стремление к объединению сербского народа оставили заметный след в истории Сербии и Балкан.',
}

export default function NaDanasnjiDanUbijenKnezMihailoObrenovicPage() {
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
            src="/static/images/knez-mihailo-obrenovic.jpeg"
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

          <CommentsSection postSlug="na-danasnji-dan-ubijen-knez-mihailo-obrenovic" />
        </motion.div>
      </article>
    </main>
  )
}