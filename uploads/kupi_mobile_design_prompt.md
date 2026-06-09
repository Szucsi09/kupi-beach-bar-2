# KuPi Beach Bar — Mobile-First Weboldal Design Prompt

## A feladat

Tervezd meg a KuPi Beach Bar **mobile-first**, egyoldalas, görgetős weboldalát. Az oldal elsősorban mobilra készül (375–430px szélesség), és tablettre/desktopon is jól működik.

A design alapelve: **nagy képek, szabad elrendezés, scrapbook/collage hangulat** — az elemek nem követnek szigorú rácsot, szabadon úsznak, kicsit forgatva, átfedve, mint egy ragasztós nyári képesalbum.

---

## A hely karaktere

A KuPi egy türkizre festett faházas strandbüfé természetes tó partján. String lights, fehér faszerkezetes terasz, fonott székek, briós zsemle, nyüzsgő nyári hangulat. Nem tipikus strandbüfé — gondosan csinálják, és büszkék rá.

**Kulcsszavak:** türkiz faház · string lights · tóparti árnyék · briós zsemle · scrapbook nyár · gondosan tálalt · visszajönnek az emberek

---

## Vizuális identitás

### Színek — a `kupiBB1.jpg` képből kinyert paletta alapján

| Szerep | Szín | Hex |
|---|---|---|
| Elsődleges | Türkiz | `#34ccd7` |
| Alap | Fehér | `#ffffff` |
| Akcentus | Lime-zöld | `#bbdd1e` |
| Szöveg | Mélytürkiz | `#0a4a4e` |

Az alap háttér **tiszta fehér** — a képek és a türkiz akcentusok viszik a karaktert.

### Betűtípusok

- **Headline font:** `Pacifico` (Google Fonts) — retro, kézírásos, meleg
- **Body font:** `DM Sans` (Google Fonts) — modern, olvasható

### Logó

Fájl: `kupiBB_logo.png` — a logót a navigációban és a footerben használd. Türkiz felületen fehér verzió, fehér alapon az eredeti színes verzió.

---

## Design karakter — scrapbook/collage

- A képek **enyhén el vannak forgatva** (±2°–5° random rotation) mint egy ragasztós fotoalbumban
- A képek **részben takarják egymást** — nincs közöttük egyforma rés
- **Nincs szigorú grid** — az elemek szabadon úsznak, aszimmetriával
- A szövegblokkok és képek **felváltva, de nem szabályosan** követik egymást
- Egyes képeken **fehér photo-border** (4–8px fehér keret + enyhe box-shadow) mint egy kinyomtatott fotón
- Az oldal hangulatát a **képek dominálják**, a szöveg kísér — nem fordítva
- **Enyhe parallax:** görgetéskor a collage képek különböző sebességgel mozdulnak el (0.2–0.4-es szorzóval), mélységérzetet adva

---

## Képhasználati útmutató

| Fájlnév | Tartalom | Hol használd |
|---|---|---|
| `kupiBB1.jpg` | Türkiz faház frontálisan | **Hero — középső, legnagyobb kép** |
| `kupiBB5.jpg` | Terasz tóval, string lights | Hero collage + Hangulat szekció |
| `kupiBB3.jpg` | Terasz gyerekekkel, kék ég | Hero collage + Familia szekció |
| `kupiBB8.jpg` | Burger briós zsemlével közelről | Hero collage + Menü szekció |
| `kupiBB7.jpg` | Sliders + rizs felülnézetből | Menü szekció |
| `kupiBB2.jpg` | Csirkés és halas tányér | Menü szekció |
| `kupiBB4.jpg` | Külső nézet, fehér pergola | Rólunk szekció |
| `kupiBB9.jpg` | Türkiz faház, kék égbolt | Galéria / záró szekció |

**Fontos:** valódi fotók, ne generált képek. A photo-border és rotation a kisebb collage képeken legyen, a fullwidth képeken ne.

---

## Az oldal struktúrája

---

### 01 — Navigation

- Sticky, fehér háttér
- Bal: `kupiBB_logo.png`
- Jobb: hamburger ikon (mobilon), ami kinyit egy fullscreen menüt
- A menü türkiz háttérrel nyílik ki, Pacifico betűtípussal, nagy betűkkel

---

### 02 — Hero szekció — collage layout

**Háttér:** fehér

**Elrendezés — pontosan a Pearl Idea referencia alapján, de KuPi tartalommal:**

A képek szabadon úsznak, részben takarják egymást, enyhén forgatva. A középső kép a legnagyobb és egyenes (nem forgatott).

```
Képek elhelyezése mobilon (relatív pozícionálással):

[bal felső, -3° forgatva, kisebb]     [jobb felső, +2° forgatva, kisebb]
       kupiBB5.jpg                            kupiBB3.jpg

         [KÖZÉPSŐ — nagy, egyenes, photo-border]
                    kupiBB1.jpg
               (türkiz faház frontálisan)

[bal alsó, +4° forgatva, kisebb]      [jobb alsó, -2° forgatva, kisebb]
       kupiBB8.jpg                            kupiBB7.jpg (opcionális)
```

- A középső kép kb. 65–70% oldal szélesség, fehér kerettel, enyhe árnyékkal
- A saroképek kb. 45–50% szélesség, átfednek a középső képen
- Az egész collage blokk magassága mobilon kb. 520–580px

**Szöveg a collage ALATT — semmi más, csak ez:**

```
(Pacifico, 56–64px, mélytürkiz, bal igazítás)
Igazi ételek
a vízparton.
```

Alatta egyetlen CTA gomb (lime): „Megnézem a menüt →"

---

### 03 — Fullwidth hangulatkép

**Egy fullwidth kép, teljes szélességen, nincs keret:**
- `kupiBB5.jpg` — terasz tóval, string lights
- Magasság: 280px mobilon
- Felette lebegő kis türkiz szövegkártya: „A tó partján, nem mellette"
- Photo-border nincs, ez egy erős vizuális szünet

---

### 04 — Rólunk — szöveg + úszó kép

**Háttér:** fehér
**Elrendezés:** szöveg blokk, mellette/alatta egy enyhén forgatott kép

**Szöveg:**
> Nem azért vagyunk itt, mert a strandon mindenki eszik valamit.
>
> Azért vagyunk itt, mert úgy gondoljuk, hogy a vízparton is lehet valóban jót enni.

- `kupiBB4.jpg` — fehér photo-borderrel, +3° forgatással, a szöveg jobb oldalán vagy alatt úszik

---

### 05 — Három erősség

**Háttér:** fehér
**Elrendezés:** NEM kártyarács — három egymás utáni sor, alternálva:
- Bal: ikon + cím + szöveg → Jobb: enyhén forgatott kis kép
- Bal: enyhén forgatott kis kép → Jobb: ikon + cím + szöveg
- Bal: ikon + cím + szöveg → (nincs kép, helyette türkiz akcentus vonal)

**Tartalom:**
1. **Frissen készül, nem csak melegítve** — Nem tartjuk melegen, amíg meg nem rendeled. Amikor rendelsz, akkor kezdjük.
2. **Helyi alapanyagok, szezonális ízek** — Amit a tájék ad, azzal dolgozunk. Ezért változik a menü — és ezért érdemes visszajönni.
3. **A víz partján, nem mellette** — Van pár hely, ahol igazán jó leülni. Mi ott vagyunk.

---

### 06 — Menü szekció

**Háttér:** türkiz (`#34ccd7`), faléc textúrával:
```css
background-image: repeating-linear-gradient(
  180deg,
  transparent, transparent 46px,
  rgba(255,255,255,0.09) 46px,
  rgba(255,255,255,0.09) 48px
);
```

**Fejléc (Pacifico, fehér):** „Ma ezt ajánljuk"
**Alfelirat (fehér):** „Amit ma reggel hoztak, ma el is fogy."

**Elrendezés:** fehér kártyák egymás alatt mobilon, enyhén eltolva (nem középre igazítva — az egyik kártya 12px-rel jobbra tolva, a következő 8px-rel balra):

- `kupiBB8.jpg` · **KuPi Burger** · Briós zsemle, házi BBQ szósz, karamellizált hagyma, coleslaw
- `kupiBB2.jpg` · **Rántott hal tányér** · Ropogós bundában, friss citrommal, házi sültkrumplival
- `kupiBB7.jpg` · **Havi különlegesség** · Minden hónapban más — kérdezd meg a személyzetet

**Link (lime):** „Teljes menü →"

---

### 07 — Vendégvélemények

**Háttér:** fehér
**Elrendezés:** egymás alatt, NEM vízszintesen — minden idézet egy úszó kártya, enyhén forgatva (±2°), mint egy kitépett cetli

**Idézetek:**

> „A gyerekeim általában mindennel szemben kritikusak — itt kétszer kértek."
> — **Ági**, két gyerekkel nyaralt a tónál

> „Nem számítottam rá, hogy a nyaralás legjobb étkezése egy strandbüfében lesz."
> — **Bence**, első alkalommal járt a tónál

> „Évek óta ez a kedvenc helyünk. A minőség nem változott — csak egyre jobb lett."
> — **Zsuzsa**, helyi lakos

Csillagos értékelés **nincs** — csak szöveges idézetek, türkiz nagy idézőjellel.

---

### 08 — Záró kép + CTA

**Elrendezés:** `kupiBB9.jpg` fullwidth, felette türkiz overlay (`rgba(52,204,215,0.85)`), faléc textúrával

**Szöveg (Pacifico, fehér, 48px):**
> Meglepődsz, mit lehet kapni a vízparton.

**CTA gomb (lime):** „Megnézem a menüt →"

---

### 09 — Helyszín

**Háttér:** fehér
**Fejléc (Pacifico):** „Megtalálsz minket"
**Bevezető:** „A tó partján vagyunk — ha látod a vizet, már majdnem itt is vagy."

- Nyitvatartás sorok ikonokkal
- Google Maps embed placeholder
- Cím és telefonszám placeholder

---

### 10 — Footer

**Háttér:** `#0a4a4e`
- Logó fehér verzió
- Facebook + Instagram ikonok
- © 2025 KuPi Beach Bar

---

## Animációk

- **Collage képek belépője:** görgetésre a képek különböző irányból csúsznak be (`translateX` ±20px + `translateY` ±10px), 0.5–0.8s ease-out, staggered
- **Parallax a collage-on:** görgetéskor a saroképek 0.3-as szorzóval mozdulnak — mélységérzet
- **Kártyák belépője:** enyhe `scale(0.97)`-ről `scale(1)`-re + fade-in
- **Fullwidth képek:** `scale(1.05)`-ről `scale(1)`-re zoom-in belépőként
- **Mobil-safe:** `background-attachment: fixed` helyett JavaScript scroll listener

---

## Technikai megjegyzések

- **Mobile-first:** 375px az alap, tablet és desktop progresszív bővítéssel
- **Collage pozícionálás:** CSS `position: relative/absolute` vagy `transform: rotate()` + `translate()` kombinációval
- **Photo-border:** `border: 6px solid white` + `box-shadow: 0 4px 16px rgba(0,0,0,0.12)`
- **Képek:** csak feltöltött valódi fotók — generált képek tilosak
- **Szövegek:** pontosan a megadott szövegek — ne parafrazálj

---

## Amit különösen figyelj

- Az oldal **érezze magát**: egy nyári képesalbum, amit valaki szeretettel rakott össze — nem egy sablon
- A KuPi türkiz faháza (`kupiBB1.jpg`) az oldal vizuális szíve — a hero közepén, a legnagyobb képként
- **Prémium + játékos egyszerre** — a scrapbook hangulat nem jelent alacsony minőséget
- A lime (`#bbdd1e`) ne legyen túl sok — csak CTA gombok és akcentusok
