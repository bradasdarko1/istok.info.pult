# CLAUDE.md — Istok Info Pult (istokinfopult.rs)

Uputstvo za Claude Code u repozitorijumu `bradasdarko1/istok.info.pult`.
Glavni zadatak: priprema novih vesti i njihovo predlaganje kroz GitHub Pull Request isključivo ka grani `main`.

---

## 1. O projektu

- **Sajt:** https://www.istokinfopult.rs (kanonski URL je sa `www`)
- **Stack:** Next.js 15.5.12 (App Router), React 19.2.4, TypeScript ^5.9.3, Tailwind CSS 4, Contentlayer2
- **Paket menadžer:** Yarn 3.6.1 (`.yarn/releases/yarn-3.6.1.cjs`). Ne koristiti npm ni pnpm.
- **Produkciona grana:** `main`, zaštićena GitHub pravilom „ISTOK - Zastita main grane“: obavezan Pull Request, zabranjen force push i zabranjeno brisanje grane.
- **Hosting:** Vercel, povezan preko Vercel kontrolne table (u repozitorijumu nema `vercel.json`). Spajanje u `main` pokreće produkcioni deploy, pa PR spaja **isključivo urednik**.
- **Jezici:** srpski (latinica i ćirilica) i ruski, preko `useLanguage()` iz `@/components/LanguageProvider` (`language`: `'sr' | 'ru'`, `script`: `'lat' | 'cyr'`).

### Ključni fajlovi

| Fajl | Uloga | Sme da se menja? |
|---|---|---|
| `app/vesti/<slug>/page.tsx` | sadržaj članka | samo za novu vest |
| `app/vesti/<slug>/layout.tsx` | SEO metadata i NewsArticle JSON-LD | samo za novu vest |
| `data/articlesSeo.ts` | SEO registar (koriste ga `app/sitemap.ts` i `RelatedArticles`) | samo dodavanje unosa na vrh |
| `components/VestiDanas.tsx` | lista vesti (naslovna prikazuje prvih 6, prvi unos je istaknut) | samo dodavanje unosa na početak niza |
| `public/static/images/` | naslovne slike | samo odobrena slika |
| `app/vesti/layout.tsx`, `lib/articleSeo.ts`, ostale `components/*`, `app/layout.tsx`, `app/sitemap.ts`, `next.config.js`, `package.json`, `yarn.lock`, `.github/`, `.husky/` | globalno | **ne, bez posebnog odobrenja** |

---

## 2. Osnovna pravila (obavezna)

1. **Nikada ne menjaj direktno granu `main`.** Nema commit-a ni push-a na `main`, nema force push-a, nema brisanja grana i nema zaobilaženja zaštite grane.
2. **Svaka vest dobija novu granu `vest/<slug>`** od najnovijeg `origin/main`. Ako Claude Code cloud okruženje ne dozvoljava push na `vest/<slug>`, koristi se automatski dodeljena grana `claude/...`. U oba slučaja **Pull Request ide isključivo ka `main`** (odeljak 4).
3. **Kao šablon koristi postojeće članke.** Referentni članak je `app/vesti/od-san-stefana-do-berlina/`.
4. **Za svaku vest pripremi unos u `data/articlesSeo.ts` i `components/VestiDanas.tsx`.**
5. **Kategorija mora biti ista** u `page.tsx`, `VestiDanas.tsx` i SEO strukturiranim podacima (JSON-LD `articleSection`). Koriste se samo postojeće kategorije (tabela u 7.4).
6. **Naslovna slika:** dodaje se samo stvarna slika koju je urednik dostavio ili izričito odobrio. Slike se ne generišu, ne preuzimaju sa interneta bez odobrenja i ne koristi se placeholder. **Bez odobrene slike sme se pripremiti nacrt članka i kod, ali se ne kreira Pull Request** dok slika ne bude odobrena.
7. **Ne izmišljaj izvore, izjave, citate, imena, brojke, datume ni činjenice.** Nepotvrđene tvrdnje se ne predstavljaju kao potvrđene (odeljak 3).
8. **Vesti iz ISTOK MONITOR-a:** samostalno istraži originalni izvor i druge dostupne pouzdane izvore. Ne oslanjaj se samo na dostavljeni sažetak (odeljak 3).
9. **Ne menjaj stare vesti, globalne komponente ni konfiguraciju bez posebnog odobrenja.** Uočene greške samo prijavi.
10. **Pre svakog PR-a prođi kontrolnu listu** (odeljak 6).
11. **Koristi Yarn 3.6.1 i pokreni TypeScript i Next.js build provere** (odeljak 5). **Rezultat se uvek prijavljuje.** Ako provera nije izvršena, jasno navedi razlog.
12. **Ne prikrivaj greške.** Bez `@ts-ignore`, `any`, gašenja provera, menjanja konfiguracije i `--no-verify`.
13. **Ne pokreći produkcioni deploy** (bez `vercel` CLI-ja, deploy hook-ova i ručnog pokretanja workflow-a).
14. **Nikada ne spajaj PR i ne uključuj auto-merge.**
15. **Dva odvojena odobrenja za svaku vest:**
    - **Odobrenje 1 — sadržaj:** urednik odobrava tekst (sr-lat, sr-cyr, ru), naslov, kategoriju, datum, izvore, sliku i SEO podatke.
    - **Odobrenje 2 — commit, push i Pull Request:** traži se posebno, tek posle odobrenog sadržaja, odobrene slike i izveštaja o proverama.
    Odobrenje se ne prenosi sa jedne vesti na drugu. Odobrenje sadržaja nije odobrenje za commit, push ili PR.

---

## 3. Istraživanje i provera činjenica

Važi za svaku vest, a obavezno za vesti iz **ISTOK MONITOR-a**.

1. **Pronađi originalni izvor** (zvanično saopštenje, sajt institucije, prvobitni medijski izveštaj, video ili dokument) i pročitaj ga, a ne samo sažetak.
2. **Potraži druge dostupne pouzdane izvore** koji potvrđuju ključne činjenice: ko, šta, kada, gde, brojke i citate.
3. **Razvrstaj tvrdnje:**
   - **potvrđeno:** nalazi se u originalnom izvoru ili u više nezavisnih pouzdanih izvora
   - **nepotvrđeno:** samo jedan izvor ili samo sažetak. U tekstu se pripisuje izvoru („prema navodima…“, „kako prenosi…“) ili se izostavlja.
   - **protivrečno:** izvori se razlikuju. Ne bira se jedna verzija; razlika se prijavljuje uredniku.
4. **Citati** se prenose samo ako postoje u izvoru, tačno i sa navedenim autorom izjave. Tekst izvora se ne kopira u celini; članak je sopstvena obrada.
5. **Ako originalni izvor nije dostupan** (nedostupan sajt, paywall, blokirana mreža), to se jasno navodi. Vest se ne predstavlja kao potvrđena samo na osnovu sažetka.
6. **U nacrtu za urednika** uvek se navodi:
   - spisak korišćenih izvora (naslov, medij ili institucija, URL, datum)
   - koje su tvrdnje potvrđene, koje su nepotvrđene i postoje li protivrečnosti
   - šta iz sažetka ISTOK MONITOR-a nije moglo da se potvrdi
7. Linkovi ka izvorima ulaze u sam članak samo ako urednik tako odluči. U opisu PR-a se navode uvek.

---

## 4. Grane

### 4.1 Pravila za slug
- mala slova, latinica bez dijakritika: č/ć→`c`, š→`s`, ž→`z`, đ→`dj`, dž→`dz`
- reči odvojene crticom, bez razmaka, interpunkcije i duplih crtica
- kratak i opisan, npr. `od-san-stefana-do-berlina`
- ne sme da postoji kao `app/vesti/<slug>/` ni kao ključ u `articlesSeo.ts`

```bash
ls app/vesti/<slug> 2>/dev/null && echo "POSTOJI"
```

```bash
grep -n "'<slug>':" data/articlesSeo.ts
```

```bash
git ls-remote --heads origin vest/<slug>
```

### 4.2 Pravljenje grane

Podrazumevano:

```bash
git fetch origin main
```

```bash
git checkout -b vest/<slug> origin/main
```

**Rezervna varijanta (cloud okruženje):** ako okruženje dozvoljava push samo na automatski dodeljenu granu `claude/...`, postojeća dodeljena grana sme da se koristi **samo ako su ispunjena sva tri uslova**:

1. **radno stablo je čisto**, osim unapred odobrenog novog fajla
2. **nema nepovezanih commit-a**: grana ne sadrži commit-e koji nisu deo ovog zadatka
3. **grana je zasnovana na najnovijem `origin/main`**

Provera (samo čitanje):

```bash
git fetch origin main
```

```bash
git status --porcelain
```

```bash
git log --oneline origin/main..HEAD
```

```bash
git merge-base --is-ancestor origin/main HEAD && echo "zasnovana na najnovijem origin/main"
```

**Ako bilo koji uslov nije ispunjen, postupak se zaustavlja i problem se prijavljuje uredniku.** Postojeće grane se ne resetuju, izmene se ne brišu i ne koristi se force push (bez `git checkout -B`, `git reset --hard`, `git push --force`, `git clean` ni brisanja grana).

U izveštaju i opisu PR-a navodi se koja je grana korišćena i zašto.

### 4.3 Pravila
- Grana se uvek pravi od **najnovijeg** `origin/main`, nikada od druge grane vesti.
- Jedna grana = jedna vest = jedan PR.
- **PR uvek ide ka `main`**, bez obzira na ime grane.
- Kod konflikta sa `main` (najčešće u `articlesSeo.ts` ili `VestiDanas.tsx`): `git merge origin/main` na grani vesti i prijava uredniku. Bez rebase-a sa force push-om.

---

## 5. Tehničke provere (TypeScript i Next.js build)

```bash
yarn install --immutable
```

```bash
yarn tsc --noEmit
```

```bash
yarn build
```

Pravila:
- `yarn install --immutable` ne sme da menja `yarn.lock`. Ako to traži, zaustavi se i prijavi.
- `yarn build` pokreće Contentlayer i `next build`. Lint nije deo build-a (`eslint.ignoreDuringBuilds: true`).
- **Rezultat se uvek prijavljuje** u izveštaju uredniku i u opisu PR-a, za svaku komandu posebno:
  - ✅ **prošlo**
  - ❌ **palo**, sa relevantnim izlazom greške
  - ⚠️ **nije izvršeno**, sa jasnim razlogom (npr. nema mreže za instalaciju paketa, nedostaju promenljive okruženja, vremensko ograničenje)
- „Nije izvršeno“ se nikada ne prijavljuje kao „prošlo“.
- Ako provera padne i na čistom `origin/main`, greška je postojeća. Prijavljuje se odvojeno i ne ispravlja u PR-u vesti.
- Posle provera `git status` mora pokazati samo fajlove vesti. `.next/`, `.contentlayer/` i `node_modules/` se ne commit-uju.
- **Husky / lint-staged:** pri commit-u se pokreću `eslint --fix` i `prettier --write`. Posle commit-a proveri `git show --stat HEAD`. Ako je hook preformatirao nepovezane delove `articlesSeo.ts` ili `VestiDanas.tsx`, prijavi to pre push-a.

---

## 6. SEO i kontrolna lista pre PR-a

### 6.1 Provera usklađenosti (samo čitanje)

```bash
grep -rn "<slug>" app/vesti/<slug>/ data/articlesSeo.ts components/VestiDanas.tsx
```

```bash
ls -la public/static/images/<ime-slike>.jpg
```

```bash
git diff --stat origin/main...HEAD
```

### 6.2 Kontrolna lista

- [ ] **Slug** je isti u imenu foldera, `SLUG` u `layout.tsx`, ključu i `slug` polju u `articlesSeo.ts`, `slug` i `href` u `VestiDanas.tsx` i u `<CommentsSection postSlug="<slug>" />`
- [ ] **Kategorija** je postojeća (tabela u 7.4) i ista u `page.tsx` (`srLatin.category`, `ruText.category`), `VestiDanas.tsx` (sva tri jezika) i JSON-LD `articleSection`
- [ ] **Datum** je isti u `articlesSeo.publishedAt`, `article.publishedAt`, JSON-LD `datePublished`, `VestiDanas` (`date` i datum u `category`) i tekstu „Objavljeno:“ / „Опубликовано:“. Tačno vreme se navodi samo ako je poznato.
- [ ] **Jezici:** postoje sr-lat, sr-cyr i ru tekstovi; ćirilica je proverena (strana imena i skraćenice); ruski nema sadržaj kojeg nema u originalu
- [ ] **Izvori:** originalni izvor je pronađen ili je navedeno zašto nije; nepotvrđene tvrdnje su pripisane izvoru ili izostavljene
- [ ] **SEO title** ima sufiks `| Istok Info Pult` (orijentaciono do ~70 znakova pre sufiksa)
- [ ] **SEO description** je činjeničan (orijentaciono 140–200 znakova)
- [ ] **Canonical** je `https://www.istokinfopult.rs/vesti/<slug>`
- [ ] **OpenGraph i Twitter:** `type: 'article'`, `locale: 'sr_RS'`, `alternateLocale: ['ru_RU']`, slika je apsolutni URL
- [ ] **JSON-LD:** `@type: 'NewsArticle'`, `headline`, `datePublished`, `dateModified`, `author`, `publisher` (logo `/static/images/logo.jpg`), `inLanguage`, `articleSection`; `about` sadrži samo entitete iz teksta
- [ ] **Keywords** na sr-lat, sr-cyr i ru, relevantni za tekst
- [ ] **Slika je odobrena**, postoji u `public/static/images/`, putanja je ista na sva četiri mesta, a `width`/`height` odgovaraju stvarnoj slici. **Bez odobrene slike nema PR-a.**
- [ ] **Komentari:** `CommentsSection` je prisutan sa tačnim `postSlug`
- [ ] **Provere:** rezultati `install`, `tsc` i `build` su zapisani (prošlo / palo / nije izvršeno uz razlog)
- [ ] **Opseg:** diff sadrži samo novi folder vesti, sliku i dodate unose u `articlesSeo.ts` i `VestiDanas.tsx`

---

## 7. Struktura fajlova nove vesti

### 7.1 `app/vesti/<slug>/page.tsx`
Po šablonu `od-san-stefana-do-berlina/page.tsx`:
- `'use client'`; uvozi `motion`, `useLanguage`, `ShareButtons`, `CommentsSection`
- lokalna funkcija `latinToCyrillic()`
- `srLatin` i `ruText` sa poljima `category`, `title`, `date`, `lead`, `paragraphs[]`, `highlight1`, `highlight2`
- `category` je ista kao u `VestiDanas.tsx` i JSON-LD-u (npr. `'Istorija'` / `'История'`)
- ćirilica se izvodi iz `srLatin` preko `latinToCyrillic()`
- datum: `Objavljeno: 18. novembar 2026.` / `Опубликовано: 18 ноября 2026 г.`
- ime komponente u PascalCase-u od slug-a + `Page`
- `<img src="/static/images/<ime-slike>.jpg" ...>` sa odobrenom slikom
- `<CommentsSection postSlug="<slug>" />`

### 7.2 `app/vesti/<slug>/layout.tsx`
Po šablonu `od-san-stefana-do-berlina/layout.tsx`:
- konstante `SITE_URL`, `SLUG`, `ARTICLE_URL`, `IMAGE_PATH`, `IMAGE_URL`
- `article` → `createArticleSeo(article)` iz `@/lib/articleSeo`
- `metadata`: `keywords`, `robots`, `alternates.canonical`, `openGraph`, `twitter`
- NewsArticle JSON-LD sa `articleSection` jednakim kategoriji, ubačen preko `<script type="application/ld+json">` sa `.replace(/</g, '\\u003c')`
- datum bez izmišljenog sata; ako je sat poznat: `+01:00` zimi, `+02:00` leti

### 7.3 `data/articlesSeo.ts`
Novi unos **na vrh** objekta:

```ts
'<slug>': {
  slug: '<slug>',

  title:
    '<SEO naslov> | Istok Info Pult',

  description:
    '<SEO opis>',

  image:
    '/static/images/<ime-slike>.jpg',

  publishedAt: 'YYYY-MM-DD',

  author: 'Istok Info Pult',
},
```

### 7.4 `components/VestiDanas.tsx`
Novi unos **na prvo mesto** niza `danasnjeVesti`:

```ts
{
  href: '/vesti/<slug>',
  slug: '<slug>',

  category:
    language === 'ru'
      ? '<Категория> - DD.MM.YYYY.'
      : script === 'cyr'
        ? '<Категорија> - DD.MM.YYYY.'
        : '<Kategorija> - DD.MM.YYYY.',

  title:
    language === 'ru'
      ? '<НАСЛОВ RU>'
      : script === 'cyr'
        ? '<НАСЛОВ ЋИР>'
        : '<NASLOV LAT>',

  excerpt:
    language === 'ru'
      ? '<izvod RU>'
      : script === 'cyr'
        ? '<izvod ĆIR>'
        : '<izvod LAT>',

  image:
    '/static/images/<ime-slike>.jpg',

  date: 'YYYY-MM-DD',
},
```

**Postojeće kategorije (koriste se samo ove):**

| Latinica | Ćirilica | Ruski |
|---|---|---|
| Vesti | Вести | Новости |
| Istorija | Историја | История |
| Kultura | Култура | Культура |
| Društvo | Друштво | Общество |
| Konkursi | Конкурси | Конкурсы |
| Intervju | Интервју | Интервью |
| Bioskop | Биоскоп | Кино |
| Duhovni razgovori | Духовни разговори | Духовные беседы |

---

## 8. Tok rada

| # | Korak | Menja repozitorijum? |
|---|---|---|
| 1 | Prijem materijala (urednik ili ISTOK MONITOR) | ne |
| 2 | Istraživanje izvora i provera činjenica (odeljak 3) | ne |
| 3 | Predlog slug-a i kategorije, provera da slug ne postoji | ne |
| 4 | Nacrt u razgovoru: tekst na tri pisma/jezika, SEO, unosi, izvori, status slike, otvorena pitanja | ne |
| ⏸ | **Odobrenje 1 — sadržaj** | |
| 5 | Grana `vest/<slug>` (ili dodeljena `claude/...`) od najnovijeg `origin/main` | lokalno |
| 6 | Izrada fajlova (odeljak 7) | lokalno |
| 7 | Tehničke provere (odeljak 5) i kontrolna lista (odeljak 6) | ne |
| 8 | Izveštaj: diff, rezultati provera, status slike, otvorena pitanja | ne |
| ⏸ | **Čeka se odobrena slika** (ako još nije dostavljena) | |
| ⏸ | **Odobrenje 2 — commit, push i Pull Request** | |
| 9 | Commit, push i PR ka `main` (odeljak 9) | da, samo grana vesti |
| 10 | Kraj. PR pregleda i spaja urednik. | |

Ako urednik traži izmene posle koraka 8, rade se na istoj grani. Za commit i push izmena na već otvoren PR ponovo se traži potvrda.

---

## 9. Pull Request ka `main`

Preduslovi: **Odobrenje 1**, **odobrena slika** i **Odobrenje 2**.

```bash
git add app/vesti/<slug>/ data/articlesSeo.ts components/VestiDanas.tsx public/static/images/<ime-slike>.jpg
```

```bash
git commit -m "Add <slug>"
```

```bash
git push -u origin <grana-vesti>
```

- Dodaju se samo imenovani fajlovi, nikada `git add -A` ili `git add .`
- PR se otvara preko GitHub integracije: `head: <grana-vesti>`, **`base: main`**
- **Naslov PR-a:** `Nova vest: <naslov na latinici>`
- **Opis PR-a:**
  ```
  ## Vest
  - Slug: <slug>
  - Kategorija: <lat / ćir / ru>
  - Datum objave: <DD.MM.YYYY.>
  - Slika: <putanja> (odobrena)
  - Grana: <vest/<slug> | claude/... (razlog)>

  ## Izvori
  - <naslov — medij/institucija — URL — datum>
  - Nepotvrđene ili protivrečne tvrdnje: <spisak ili „nema“>

  ## Izmenjeni fajlovi
  - app/vesti/<slug>/page.tsx (novo)
  - app/vesti/<slug>/layout.tsx (novo)
  - data/articlesSeo.ts (+ unos)
  - components/VestiDanas.tsx (+ unos)
  - public/static/images/<ime-slike>.jpg (novo)

  ## Provere
  - yarn install --immutable: ✅ prošlo | ❌ palo (izlaz) | ⚠️ nije izvršeno (razlog)
  - yarn tsc --noEmit: …
  - yarn build: …

  ## Kontrolna lista
  <popunjena lista iz odeljka 6.2>

  ## Otvorena pitanja
  <ako ih ima>
  ```
- Posle otvaranja PR-a uredniku se šalje link. PR se **ne spaja**, auto-merge se **ne uključuje**.
- Vercel Preview deployment (ako ga Vercel napravi za PR) nije produkcija. Link se može proslediti uredniku radi pregleda.

---

## 10. Zabranjeno bez izričitog odobrenja

- commit ili push na `main`, force push, brisanje grana, zaobilaženje zaštite grane
- PR ka bilo kojoj grani osim `main`
- spajanje PR-a ili uključivanje auto-merge-a
- PR bez odobrene naslovne slike
- deploy na produkciju na bilo koji način
- izmene postojećih vesti, globalnih komponenti, `lib/`, konfiguracije, zavisnosti i CI-ja
- nove kategorije
- izmišljanje sadržaja, izvora, izjava i datuma, i predstavljanje nepotvrđenih tvrdnji kao potvrđenih
- `--no-verify`, `@ts-ignore` i gašenje provera
- brisanje ili premeštanje postojećih fajlova (npr. `app/vesti.zip`)
