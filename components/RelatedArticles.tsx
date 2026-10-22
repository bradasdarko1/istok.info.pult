
'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { articlesSeo } from '@/data/articlesSeo'

// =====================================
// PRETVARANJE SRPSKE LATINICE U ĆIRILICU
// =====================================

function latinToCyrillic(text: string): string {
  const digraphs: Record<string, string> = {
    'DŽ': 'Џ', 'Dž': 'Џ', 'dž': 'џ',
    'LJ': 'Љ', 'Lj': 'Љ', 'lj': 'љ',
    'NJ': 'Њ', 'Nj': 'Њ', 'nj': 'њ',
  }

  let result = text.replace(
    /DŽ|Dž|dž|LJ|Lj|lj|NJ|Nj|nj/g,
    (match) => digraphs[match] || match
  )

  const map: Record<string, string> = {
    A: 'А', B: 'Б', C: 'Ц', Č: 'Ч',
    Ć: 'Ћ', D: 'Д', Đ: 'Ђ', E: 'Е',
    F: 'Ф', G: 'Г', H: 'Х', I: 'И',
    J: 'Ј', K: 'К', L: 'Л', M: 'М',
    N: 'Н', O: 'О', P: 'П', R: 'Р',
    S: 'С', Š: 'Ш', T: 'Т', U: 'У',
    V: 'В', Z: 'З', Ž: 'Ж',

    a: 'а', b: 'б', c: 'ц', č: 'ч',
    ć: 'ћ', d: 'д', đ: 'ђ', e: 'е',
    f: 'ф', g: 'г', h: 'х', i: 'и',
    j: 'ј', k: 'к', l: 'л', m: 'м',
    n: 'н', o: 'о', p: 'п', r: 'р',
    s: 'с', š: 'ш', t: 'т', u: 'у',
    v: 'в', z: 'з', ž: 'ж',
  }

  return [...result]
    .map((char) => map[char] ?? char)
    .join('')
}

// =====================================
// PRETVARANJE SRPSKE ĆIRILICE U LATINICU
// =====================================

function cyrillicToLatin(text: string): string {
  const map: Record<string, string> = {
    А: 'A', Б: 'B', В: 'V', Г: 'G',
    Д: 'D', Ђ: 'Đ', Е: 'E', Ж: 'Ž',
    З: 'Z', И: 'I', Ј: 'J', К: 'K',
    Л: 'L', Љ: 'Lj', М: 'M', Н: 'N',
    Њ: 'Nj', О: 'O', П: 'P', Р: 'R',
    С: 'S', Т: 'T', Ћ: 'Ć', У: 'U',
    Ф: 'F', Х: 'H', Ц: 'C', Ч: 'Č',
    Џ: 'Dž', Ш: 'Š',

    а: 'a', б: 'b', в: 'v', г: 'g',
    д: 'd', ђ: 'đ', е: 'e', ж: 'ž',
    з: 'z', и: 'i', ј: 'j', к: 'k',
    л: 'l', љ: 'lj', м: 'm', н: 'n',
    њ: 'nj', о: 'o', п: 'p', р: 'r',
    с: 's', т: 't', ћ: 'ć', у: 'u',
    ф: 'f', х: 'h', ц: 'c', ч: 'č',
    џ: 'dž', ш: 'š',
  }

  return [...text]
    .map((char) => map[char] ?? char)
    .join('')
}

// =====================================
// POVEZANI ČLANCI
// =====================================

const relatedArticles: Record<string, string[]> = {
  'gavrilo-princip': [
    'aleksandar-bijelic',
    'sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu',
  ],

  'aleksandar-bijelic': [
    'gavrilo-princip',
  ],

  'razgovori-u-istoku': [
    'razgovori-u-istoku-002',
  ],

  'razgovori-u-istoku-002': [
    'razgovori-u-istoku',
  ],
}

// =====================================
// RUSKI PREVODI ČLANAKA
// =====================================

// Za svaki novi članak dodajemo pravi ruski prevod.
// Ako prevod ne postoji, članak ostaje na srpskom
// dok prevod ne bude pripremljen.

const russianArticles: Record<
  string,
  { title: string; description: string }
> = {
  'aleksandar-bijelic': {
    title:
      'Сербский офицер Александр Биелич — герой, которого нельзя забывать',
    description:
      'История Александра Биелича, сербского офицера сербско-русского происхождения, его жизни, воинской чести и подвига.',
  },

  'sestorica-mornara-koji-su-zauvek-ostali-u-novom-sadu': {
    title:
      'Шестеро моряков, навсегда оставшихся в Нови-Саде',
    description:
      'У стен бывшей казармы «Александар Берич» находится небольшое военное кладбище, где покоятся шестеро советских моряков.',
  },

  'gavrilo-princip': {
    title:
      'Гаврило Принцип — выстрел, изменивший ход истории',
    description:
      'История Гаврило Принципа, Сараевского покушения 1914 года и событий, предшествовавших Первой мировой войне.',
  },
}

// =====================================
// KOMPONENTA
// =====================================

type RelatedArticlesProps = {
  slug: string
}

export default function RelatedArticles({
  slug,
}: RelatedArticlesProps) {
  const { language, script } = useLanguage()

  const isRussian = language === 'ru'
  const isLatin = language === 'sr' && script === 'lat'

  
  // Ručno izabrane povezane vesti imaju prednost.
  const manualSlugs = relatedArticles[slug] || []

  // Automatski biramo najnovije druge vesti.
  const latestSlugs = Object.values(articlesSeo)
    .filter((article) => article.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt || 0).getTime() -
        new Date(a.publishedAt || 0).getTime()
    )
    .map((article) => article.slug)

  // Prvo ručno povezane, zatim automatski izabrane.
  const relatedSlugs = [
    ...new Set([...manualSlugs, ...latestSlugs]),
  ].filter((item) => item !== slug)

  const articles = relatedSlugs
    .map((item) => articlesSeo[item])
    .filter((item) => Boolean(item))
    .slice(0, 2)

  if (articles.length === 0) return null


  const labels = isRussian
    ? {
        heading: 'Читайте также',
        subtitle:
          'Другие интересные материалы Исток Инфо Пульта',
        readMore: 'Читать далее',
        allNews: 'Все новости',
      }
    : isLatin
      ? {
          heading: 'Pročitajte i',
          subtitle:
            'Još zanimljivih priča sa Istok Info Pulta',
          readMore: 'Pročitaj više',
          allNews: 'Sve vesti',
        }
      : {
          heading: 'Прочитајте и',
          subtitle:
            'Још занимљивих прича са Исток Инфо Пулта',
          readMore: 'Прочитај више',
          allNews: 'Све вести',
        }

  // =====================================
  // TEKST PREMA JEZIKU
  // =====================================

  const getArticleText = (
    article: (typeof articles)[number]
  ) => {
    if (isRussian) {
      const translation = russianArticles[article.slug]

      if (translation) {
        return translation
      }

      return {
        title: latinToCyrillic(article.title),
        description: latinToCyrillic(article.description),
      }
    }

    if (isLatin) {
      return {
        title: cyrillicToLatin(article.title),
        description: cyrillicToLatin(article.description),
      }
    }

    return {
      title: latinToCyrillic(article.title),
      description: latinToCyrillic(article.description),
    }
  }

  return (
    <section
      className="mx-auto mt-12 max-w-4xl px-4 pb-12 sm:px-6"
      aria-labelledby="related-articles-title"
    >
      <div className="mb-6 border-b border-yellow-400/30 pb-4">
        <h2
          id="related-articles-title"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          {labels.heading}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {labels.subtitle}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {articles.map((article) => {
          const text = getArticleText(article)

          return (
            <Link
              key={article.slug}
              href={`/vesti/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="aspect-video overflow-hidden bg-black/30">
                {article.image && (
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="line-clamp-3 text-lg font-bold leading-snug text-white transition group-hover:text-yellow-300">
                  {text.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                  {text.description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-yellow-400">
                  {labels.readMore} →
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/vesti"
          className="inline-flex rounded-xl border border-yellow-400/40 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
        >
          {labels.allNews}
        </Link>
      </div>
    </section>
  )
}
