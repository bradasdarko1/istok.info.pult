---
name: istok-ai-redakcija
description: Kompletna priprema nove vesti za ISTOK INFO PULT (istokinfopult.rs) od izbora vesti iz ISTOK MONITOR-a do GitHub Pull Request-a ka main. Koristi kada urednik dostavi vest iz ISTOK MONITOR-a (naslov, link, ili broj stavke uz izveštaj), traži novu vest za sajt, ili kaže "istok-ai-redakcija". Obuhvata proveru izvora, članak na srpskom (latinica/ćirilica) i ruskom, highlights, SEO, page.tsx/layout.tsx, articlesSeo.ts, VestiDanas.tsx, promptove za naslovne slike 16:9 i 9:16, proveru ručno dostavljenih slika, Yarn/TypeScript/build provere i PR. Nikada ne spaja PR.
---

# ISTOK AI REDAKCIJA

Ovaj skill objedinjuje ISTOK NOVINAR (istraživanje i tekst) i Claude Code (kod, provere, GitHub).
**CLAUDE.md u korenu repozitorijuma ima prednost.** Ovaj skill opisuje redosled rada. Pravila za slug, kategorije, strukturu fajlova, kontrolnu listu i šablon PR-a uzimaju se iz CLAUDE.md i ovde se ne ponavljaju. Skill ne uvodi nove kategorije i ne menja postojeća urednička pravila.

## 0. Ulaz i odobrenja

Prihvatljiv ulaz:

- link ka vesti ili originalnom izvoru, uz naslov,
- naslov vesti iz ISTOK MONITOR-a,
- broj stavke iz ISTOK MONITOR izveštaja **uz sam izveštaj**. Ako je dat samo broj, traži izveštaj.

Izbor vesti od strane urednika je odobrenje za istraživanje, nacrt i lokalne tehničke izmene na radnoj grani.
Izbor vesti **nije** Odobrenje 1 (sadržaj) ni Odobrenje 2 (commit, push, PR). **Oba ostaju obavezna** (CLAUDE.md, pravilo 15).

**Nikada:** spajanje PR-a, uključivanje auto-merge-a, produkcioni deploy, izmena postojećih članaka, kategorija ili globalnih komponenti bez posebnog odobrenja.

## 1. Sesija, grana i mreža (samo čitanje)

1. **Jedan Claude Code cloud zadatak = jedna vest = jedna grana = jedan PR.**
2. `git fetch origin main`, zatim provera grane po CLAUDE.md 4.2. Dodeljena `claude/...` grana sme da se koristi samo ako je `git log --oneline origin/main..HEAD` prazan. Ako grana već nosi drugu vest (npr. otvoren PR), **stani** i traži novi zadatak.
3. Ako je host potreban za istraživanje blokiran mrežnim pravilima okruženja, traži proširenje okruženja i ne nadomeštaj izvor izmišljenim sadržajem.

## 2. Istraživanje i provera činjenica (CLAUDE.md, odeljak 3)

1. Pronađi i **pročitaj** originalni izvor: saopštenje, sajt institucije ili prvobitni medijski izveštaj. Sažetak ISTOK MONITOR-a nije izvor.
2. Nađi bar jedan nezavisan pouzdan izvor za svaku ključnu tvrdnju: ko, šta, kada, gde, brojke, citati.
3. Ako je original nedostupan (paywall, captcha, blokada), **ne zaobilazi zaštitu**. Koristi medij koji ga doslovno prenosi i pripiši izjavu oba izvora, na primer „…izjavio je listu X, prenosi Y“. Nikad ne tvrdi da je original pregledan.
4. Napravi tabelu tvrdnji: ✅ potvrđeno / ⚠️ jedan izvor (pripisano) / ❌ nepotvrđeno / ↔ protivrečno.
5. **STOP:** ako glavna tvrdnja vesti nije potvrđena ni direktno ni preko pouzdanog posrednog izvora, zaustavi postupak, prijavi problem i predloži naslov i tekst zasnovan samo na proverljivim činjenicama.
6. Reči koje pojačavaju izjavu („tek“, „samo“, „hitno“, „ultimatum“) koriste se samo ako stoje u izvoru.

## 3. Da li vest već postoji

- Provere u projektu:
  ```bash
  ls app/vesti/<slug>
  ```
  ```bash
  grep -n "'<slug>':" data/articlesSeo.ts
  ```
  ```bash
  git ls-remote --heads origin
  ```
- Na sajtu: `https://www.istokinfopult.rs/sitemap.xml` (pretraga po ključnim rečima, ne samo po slug-u) i `https://www.istokinfopult.rs/vesti/<slug>` (očekuje se 404).
- Pregledaj poslednjih ~20 unosa u `components/VestiDanas.tsx`, jer ista tema može postojati pod drugim slug-om.
- Ako slična vest postoji, stani i pitaj urednika.

## 4. Nacrt za urednika (u razgovoru, bez izmena repozitorijuma)

Na srpskoj latinici i ruskom; ćirilica se izvodi automatski preko `latinToCyrillic`:

- kategorija, samo iz tabele u CLAUDE.md 7.4,
- naslov, excerpt, lead, pasusi, Highlight 1, Highlight 2,
- predlog slug-a (CLAUDE.md 4.1),
- SEO title (do ~70 znakova + ` | Istok Info Pult`), description (orijentaciono 140–200 znakova, CLAUDE.md 6.2), keywords na sr-lat, sr-cyr i ru,
- alt tekst slike na tri jezika. AI slika: „AI ilustracija: …“ / „AI илустрација: …“ / „ИИ-иллюстрация: …“. Vidljivi potpis ispod slike se ne dodaje, osim ako urednik to traži.
- tabela provere činjenica i spisak izvora (naslov, medij, URL, datum),
- **dva prompta za naslovne slike, 16:9 i 9:16** (odeljak 5).

Pravila za tekst:

- sopstvena obrada, bez kopiranja izvora; citati samo doslovno i sa autorom,
- ruski tekst ne sme da sadrži nijedan podatak kojeg nema u srpskom,
- ćirilica: proveri strana imena, skraćenice i latinične oznake („X“ se piše „Iks“; „AI“ ostaje latinicom samo ako je upisano ručno, van `latinToCyrillic`),
- datum bez izmišljenog sata.

⏸ **Čeka se Odobrenje 1 (sadržaj).** Posle izmena urednika prikaži samo izmenjene delove.

## 5. Naslovne slike (ručno, preko ChatGPT-a)

Slike generiše **urednik ručno u ChatGPT-u** na osnovu promptova iz ovog koraka i dostavlja ih Claude-u.
**Nema OpenAI API integracije:** ne povezuj OpenAI Images API ni drugi servis za slike, ne traži niti dodaj API ključeve i ne instaliraj biblioteke za generisanje ili obradu slika.
Placeholder, slika sa interneta bez odobrenja i „privremena“ slika su zabranjeni.

### 5.1 Promptovi (pripremaju se uz nacrt)

Pripremi **dva detaljna prompta**, svaki u sopstvenom bloku koda, spremna za kopiranje u ChatGPT:

```
[16:9 — NASLOVNA SLIKA ZA SAJT]
Horizontalna ilustracija u odnosu 16:9 (cilj: 1600×900 px), fotorealistična, novinska naslovna slika.
Tema: <jedna rečenica o suštini vesti>.
Scena: <konkretni motivi, mesto, doba dana, svetlo, atmosfera>.
Kompozicija: glavni motiv u centru ili levoj trećini; gornji desni ugao ostaviti miran za logo; bez važnih detalja uz ivice (sajt može blago da iseče).
Logo: u gornjem desnom uglu postaviti priloženi logo ISTOK INFO PULT tačno kakav jeste (ćirilični natpis „ИСТОК ИНФО ПУЛТ“ i trobojna linija ispod), ceo, čitljiv, bez izmene slova i boja.
Zabranjeno: bilo kakav drugi tekst, natpisi, brojevi i vodeni žigovi; logotipi drugih medija ili firmi; prepoznatljive stvarne osobe; lažni dokumenti; scene koje bi izgledale kao autentična fotografija samog događaja.
Stil: <npr. dramatično večernje svetlo, prirodne boje>.
```

```
[9:16 — VERTIKALNA SLIKA ZA DRUŠTVENE MREŽE]
Vertikalna ilustracija u odnosu 9:16 (cilj: 1080×1920 px), ista tema, motivi i stil kao horizontalna verzija, prilagođeni uskom kadru.
Kompozicija: glavni motiv u srednjoj trećini; gornjih i donjih ~15% ostaviti bez važnih detalja (prostor za elemente aplikacija).
Logo: priloženi logo ISTOK INFO PULT u gornjem delu, iznad glavnog motiva, ceo i čitljiv, bez izmene slova i boja.
Zabranjeno: isto kao za 16:9.
```

Uz promptove napomeni uredniku da u ChatGPT priloži zvanični logo (`public/static/images/logo.png`) kao referencu.

### 5.2 Provera dostavljenih slika

Za **obe** slike:

- **Dimenzije i format:**
  - 16:9 mora na kraju biti JPG tačno 1600×900, do oko 400 KB.
  - 9:16 se proverava na odnos 9:16 (cilj 1080×1920).
  - Ako odnos stranica odgovara, a dimenzije ne, prijavi uredniku. Proporcionalno smanjenje bez sečenja radi se samo uz njegovo odobrenje i samo alatima koji su već dostupni u okruženju, bez instaliranja novih.
  - Ako odnos ne odgovara, traži novu sliku. Sečenje je dozvoljeno samo uz odobrenje.
- **Sadržaj:** otvori sliku i proveri da motiv odgovara vesti, da nema prepoznatljivih stvarnih osoba prikazanih kao fotografija događaja, nema lažnih dokumenata, drugih logotipa ni besmislenog teksta.
- **Logo:** ISTOK INFO PULT je prisutan, ceo, čitljiv i neizobličen (slova „ИСТОК ИНФО ПУЛТ“). Ako logo nedostaje ili je pogrešan, **traži novu sliku**. Logo se ne dodaje naknadno nikakvim alatom.
- Prikaži rezultat provere uredniku. Svaku konkretnu sliku urednik mora izričito da odobri.

### 5.3 Gde idu slike

- **16:9:** samo odobrena slika ide u `public/static/images/<slug>.jpg`. Koristi je sajt na četiri mesta: `page.tsx`, `layout.tsx`, `articlesSeo.ts` i `VestiDanas.tsx`.
- **9:16:** **ostaje van repozitorijuma** i služi za društvene mreže. Ne kopira se u radno stablo i ne dodaje se u git; samo se prijavljuje rezultat provere.

**Bez odobrene slike 16:9 nema PR-a.** Nacrt i kod smeju da se pripreme.

## 6. Izrada fajlova (lokalno, posle Odobrenja 1)

Po šablonu `app/vesti/od-san-stefana-do-berlina/` i CLAUDE.md, odeljak 7:

1. `app/vesti/<slug>/page.tsx`
2. `app/vesti/<slug>/layout.tsx`
3. unos na vrh `data/articlesSeo.ts` (samo dodati redovi)
4. unos na početak niza `danasnjeVesti` u `components/VestiDanas.tsx` (samo dodati redovi)
5. `public/static/images/<slug>.jpg` (samo odobrena slika 16:9)

Unose ubacuj posle tačno jednog sidra i proveri da `git diff` za ova dva fajla nema nijedan obrisan red.

## 7. Tehničke provere (CLAUDE.md, odeljak 5)

```bash
yarn install --immutable
```

```bash
yarn build
```

```bash
yarn tsc --noEmit
```

- `yarn.lock` ne sme da se promeni.
- **Next.js build mora da prođe.** Ako `yarn build` padne, postupak se zaustavlja i greška se prijavljuje.
- `tsc` se prijavljuje **posle** build-a, jer pre build-a nedostaje `contentlayer/generated`.
- **TS2742 u `eslint.config.mjs`:** sme da se označi kao postojeći problem **samo ako je u istoj sesiji potvrđena na neizmenjenom `origin/main`**:
  ```bash
  git archive origin/main | tar -x -C <scratchpad>/baseline-main
  ```
  Zatim u `<scratchpad>/baseline-main` napravi simbolički link ka postojećem `node_modules`, kopiraj `.contentlayer` iz radnog stabla (samo ako vest ne menja `data/blog` ni `contentlayer.config.ts`) i pokreni `node node_modules/typescript/bin/tsc --noEmit -p tsconfig.json`. Prijavi commit osnovne grane i rezultat, a kopiju posle provere obriši. Ako greška na osnovnoj grani **nije** potvrđena, ili postoji bilo koja druga `tsc` greška, **stani** i prijavi.
- **Usputne promene build-a se vraćaju.** Build ponovo generiše `app/tag-data.json` i pravi `tsconfig.tsbuildinfo`. To nisu fajlovi vesti: vrati fajl sa `git restore app/tag-data.json`, obriši `tsconfig.tsbuildinfo` i prijavi. Isto važi za svaku drugu izmenu praćenog fajla ili novi fajl van gitignore-a koji nastane tokom provera: vrati ga i prijavi.
- Na kraju `git status --porcelain` sme da pokaže samo pet fajlova vesti.

Prođi kontrolnu listu iz CLAUDE.md 6.2 i prikaži izveštaj: diff (stat i ključni delovi), rezultati provera, status obe slike, otvorena pitanja.

⏸ **Čeka se odobrena slika 16:9** (ako još nije dostavljena).
⏸ **Čeka se Odobrenje 2 (commit, push, PR).**

## 8. GitHub (posle Odobrenja 2)

```bash
git add app/vesti/<slug>/page.tsx app/vesti/<slug>/layout.tsx data/articlesSeo.ts components/VestiDanas.tsx public/static/images/<slug>.jpg
```

```bash
git commit -m "Add <slug>"
```

```bash
git push -u origin <radna-grana>
```

- Samo imenovani fajlovi; nikad `git add -A` ni `git add .`.
- Posle commit-a pokreni `git show --stat HEAD`: tačno pet fajlova i nula obrisanih redova u postojećim fajlovima.
- Husky hook u cloud klonu nije aktivan (`core.hooksPath` nije podešen); to se navodi u PR-u.
- PR se otvara alatom `mcp__github__create_pull_request` (`base: main`, `head: <radna-grana>`). Naslov je `Nova vest: <naslov latinicom>`, a telo ide po šablonu iz CLAUDE.md, odeljak 9. U opis obavezno ulaze izvori, rezultati provera (i provere osnovne grane za TS2742), napomena da je slika AI ilustracija i otvorena pitanja.
- Ako push ne uspe zbog mreže: do 4 pokušaja sa pauzom. Ako je push odbijen: **bez force push-a**; `git fetch` i `git merge`, pa prijava uredniku (CLAUDE.md 4.3).
- Svaki naknadni commit, push ili izmena opisa na već otvorenom PR-u traži novu potvrdu urednika.
- **Zabranjeni alati i komande:** `mcp__github__merge_pull_request`, `mcp__github__enable_pr_auto_merge`, `mcp__github__actions_run_trigger`, `git push --force`, `vercel`, deploy hook-ovi.
- Posle otvaranja PR-a pošalji uredniku broj i link PR-a i stani. PR pregleda i spaja **isključivo urednik**.
