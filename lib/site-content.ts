export const navLinks = [
  { href: "#hero", label: "Kezdőlap" },
  { href: "#about", label: "Rólunk" },
  { href: "#menu", label: "Menü" },
  { href: "#reviews", label: "Vélemények" },
  { href: "#location", label: "Helyszín" },
] as const;

export const heroContent = {
  titleLine1: "Prémium fogások",
  titleLine2: "a vízparton",
  cta: "Megnézem az étlapot",
} as const;

export const fullwidthBreak = {
  image: "/images/kupiBB25.jpg",
  imageAlt: "Terasz a tóval, string lights",
  floatCard: "Első étterem a tó felől",
} as const;

export const aboutContent = {
  eyebrow: "Ismerős érzés?",
  paragraphs: [
    "A strandbüfék nagy része gyors, olcsó, felejthető. De te nem ezért jöttél ide.",
    "Azért vagyunk itt, mert úgy gondoljuk, hogy a vízparton is lehet valóban jót enni.",
  ],
  images: [
    {
      src: "/images/kupiBB15.jpg",
      alt: "KuPi kívülről, fehér pergola",
    },
    {
      src: "/images/kupiBB16.jpg",
      alt: "KuPi kívülről, fehér pergola",
    },
    {
      src: "/images/kupiBB21.jpg",
      alt: "KuPi kívülről, fehér pergola",
    },
    {
      src: "/images/kupiBB23.jpg",
      alt: "KuPi kívülről, fehér pergola",
    },
  ],
  imageAlt: "KuPi kívülről, fehér pergola",
} as const;

export const strengths = [
  {
    num: "01",
    title: "Angus és szürkemarha hamburgerek",
    description:
      "Vigyázat! A nyugalom megzavarására alkalmasak!",
    image: "/images/kupiBB26.jpg",
    imageAlt: "Frissen sült tányér",
    reverse: false,
    hasImage: true,
    rotationClass: "r1",
  },
  {
    num: "02",
    title: "Lazac, Halloumi, Tofu saláták",
    description:
      "Némelyeknél függőséget okoznak!",
    image: "/images/kupiBB17.jpg",
    imageAlt: "Szezonális sliders",
    reverse: true,
    hasImage: true,
    rotationClass: "r2",
  },
  {
    num: "03",
    title: "Dínó menü, Gyerek burger, Mac & Cheese",
    description: "Hogy a család legkritikusabb tagjai is jóllakjanak.",
    image: "/images/kupiBB27.jpg",
    imageAlt: "KuPi terasz",
    reverse: false,
    hasImage: true,
    rotationClass: "r3",
  },
] as const;

export const menuContent = {
  title: "Étlapunk",
  // subtitle: "KuPi Gasztro Akadémia — frissen, gondosan, a tó partján.",
  categories: [
    {
      id: "eloetelek",
      label: "Előételek",
      dishes: [
        {
          image: "/images/kupiBB10.jpg",
          imageAlt: "KuPi válogatás",
          title: "KuPi válogatás",
          description:
            "hummusz, mangó salsa, paradicsomos szarvasgomba pástétom, füstölt lazac krém, citrom kaviár, marha tatár",
        },
        {
          image: "/images/kupiBB11.jpg",
          imageAlt: "Nacho-tál",
          title: "Nacho-tál",
          description: "nachos, marharagu, cheddar, jalapeno, tejföl",
        },
      ],
    },
    {
      id: "levesek",
      label: "Levesek",
      dishes: [
        {
          image: "/images/kupiBB12.jpg",
          imageAlt: "Pho-leves",
          title: "Pho-leves",
          description:
            "vietnámi marhahúsleves (min. 12 órán főzve), rizstészta, mungóbabcsíra, marha bélszín, marhacomb, koriander, újhagyma, friss lime",
        },
        {
          image: "/images/kupiBB13.jpg",
          imageAlt: "Tom Yum leves",
          title: "Tom Yum leves",
          description:
            "csirkemell, chili, lime, koriander, kókusztej, kaffir lime levél, citromnád, gomba, hagyma, paprika, rizs",
        },
        {
          image: "/images/kupiBB14.jpg",
          imageAlt: "Füstös burgonyakrémleves",
          title: "Füstös burgonyakrémleves",
          description:
            "tejfölhab, fekete fokhagymás ropogós, zöld olaj, kolbászmorzsa",
        },
      ],
    },
    {
      id: "gyermekeknek",
      label: "Gyermekeknek",
      dishes: [
        {
          image: "/images/kupiBB15.jpg",
          imageAlt: "Rántott sajt",
          title: "Rántott sajt",
          description: "sült krumpli",
        },
        {
          image: "/images/kupiBB16.jpg",
          imageAlt: "Dínó menü",
          title: "Dínó menü",
          description:
            "rántott csirkemell figurák (2 db), sült krumpli, ketchup",
        },
        {
          image: "/images/kupiBB17.jpg",
          imageAlt: "Gyerek burger",
          title: "Gyerek burger",
          description: "zsömle, házi szósz, húspogácsa",
        },
        {
          image: "/images/kupiBB18.jpg",
          imageAlt: "Gyerek burger menü",
          title: "Gyerek burger menü",
          description: "burger, sült krumpli, ketchup",
        },
        {
          image: "/images/kupiBB19.jpg",
          imageAlt: "Mac & Cheese",
          title: "Mac & Cheese",
          description: "klasszikus sajtos tészta",
        },
        {
          image: "/images/kupiBB20.jpg",
          imageAlt: "Rántott hús",
          title: "Rántott hús",
          description: "sült krumpli",
        },
      ],
    },
    {
      id: "foetelek",
      label: "Főételek",
      dishes: [
        {
          image: "/images/kupiBB21.jpg",
          imageAlt: "Punjena Vjesalica",
          title: "Punjena Vjesalica",
          description:
            "sajttal-sonkával töltött karaj, bacon, rusztikus burgonya, görög saláta, tejföl",
        },
        {
          image: "/images/kupiBB22.jpg",
          imageAlt: "Borjú bécsi szelet",
          title: "Borjú bécsi szelet",
          description: "szarvasgombás burgonya saláta",
        },
        {
          image: "/images/kupiBB23.jpg",
          imageAlt: "Maradona töltött csirke",
          title: "Maradona töltött csirke",
          description:
            "szalonna, ricotta, cotto sonka, pecorinos szarvasgomba krém, rántott csirkemellbe göngyölve, burgonyapüré, narancsos zöld saláta",
        },
        {
          image: "/images/kupiBB24.jpg",
          imageAlt: "Vajpuha szűzpecsenye",
          title: "Vajpuha szűzpecsenye",
          description:
            "parázsburgonya, mustáros besamelmártás, bacon chips, ecetes fejes saláta",
        },
        {
          image: "/images/kupiBB25.jpg",
          imageAlt: "Rántott sajt trió",
          title: "Rántott sajt trió",
          description:
            "rántott trappista, camembert, füstölt sajt, sült burgonya, zöld saláta",
        },
        {
          image: "/images/kupiBB10.jpg",
          imageAlt: "White lake szelet",
          title: "White lake szelet",
          description:
            "töltött karaj, kacsamáj, sonka, zöldalma chutney, friss sült burgonya, parmezános zöld saláta",
        },
        {
          image: "/images/kupiBB11.jpg",
          imageAlt: "Ínyenc karaj KuPi módra",
          title: 'Ínyenc karaj "KuPi módra"',
          description:
            "rántott karaj olasz Spianata szalámival, csemegeuborkával, vörös cheddarral és svájci Gruyére sajttal töltve, fűszeres csónakburgonya, tartármártás",
        },
        {
          image: "/images/kupiBB12.jpg",
          imageAlt: "Böbi féle lasagne",
          title: "Böbi féle lasagne",
          description:
            "marha ragu olaszosan, krémes besamel, San marzano paradicsom, Fior di latte mozzarella, zöld saláta",
        },
        {
          image: "/images/kupiBB13.jpg",
          imageAlt: "Pad thai",
          title: "Pad thai",
          description:
            "rizstészta, rák, zöldségek, friss lime, ropogós mogyoró",
        },
        {
          image: "/images/kupiBB14.jpg",
          imageAlt: "Bárány bélszín",
          title: "Bárány bélszín",
          description: "burgonyapüré, borjú glace, gomba, gránátalma",
        },
        {
          image: "/images/kupiBB15.jpg",
          imageAlt: "Roston csirkecomb",
          title: "Roston csirkecomb",
          description:
            "citromos vajmártás, jázminrizs, grillezett zöldségek",
        },
        {
          image: "/images/kupiBB16.jpg",
          imageAlt: "Mangós-szezámos saláta",
          title: "Mangós-szezámos saláta",
          description:
            "füstölt lazaccal, Halloumi sajttal vagy Tofuval választható feltét",
        },
        {
          image: "/images/kupiBB17.jpg",
          imageAlt: "Cordon bleu",
          title: "Cordon bleu",
          description: "pankómorzsa, sült burgonya",
        },
        {
          image: "/images/kupiBB18.jpg",
          imageAlt: "Steak tortilla",
          title: "Steak tortilla",
          description:
            "bélszín, Angus húspogácsa, vörös cheddar, Gruyère, fajita zöldség, édes majo, tortilla",
        },
      ],
    },
    {
      id: "kezmuves-burgerek",
      label: "Kézműves burgerek",
      dishes: [
        {
          image: "/images/kupiBB23.jpg",
          imageAlt: "Sajtos hamburger",
          title: "Sajtos hamburger",
          description:
            "kétszezámos buci, házi szósz, jégsaláta, lilahagyma, csemegeuborka, házi húspogácsa, vörös cheddar",
        },
        {
          image: "/images/kupiBB22.jpg",
          imageAlt: "Dupla hamburger",
          title: "Dupla hamburger",
          description:
            "kétszezámos buci, házi szósz, jégsaláta, lilahagyma, csemegeuborka, 2 db házi húspogácsa, vörös cheddar",
        },
        {
          image: "/images/kupiBB21.jpg",
          imageAlt: "Békönös hamburger",
          title: '"Békönös" hamburger',
          description:
            "kétszezámos buci, házi szósz, jégsaláta, lilahagyma, csemegeuborka, házi húspogácsa, vörös cheddar, bacon",
        },
        {
          image: "/images/kupiBB20.jpg",
          imageAlt: "Sajtos rettenet burger",
          title: "Sajtos rettenet burger",
          description:
            "kétszezámos buci, házi szósz, jégsaláta, lilahagyma, csemegeuborka, házi húspogácsa, vörös cheddar, parenyica, trappista sajt",
        },
        {
          image: "/images/kupiBB19.jpg",
          imageAlt: "Lila hamburger",
          title: "Lila hamburger",
          description:
            "kétszezámos buci, házi szósz, lilahagymalekvár, házi húspogácsa, parenyica, bacon",
        },
      ],
    },
    {
      id: "szurkemarha-burgerek",
      label: "Szürkemarha burgerek",
      dishes: [
        {
          image: "/images/kupiBB23.jpg",
          imageAlt: "Szürke burger",
          title: "Szürke burger",
          description:
            "kétszezámos buci, mustár, csemegeuborka, szürkemarha húspogácsa, dupla vörös cheddar, fűszeres ketchup, vöröshagyma kocka",
        },
        {
          image: "/images/kupiBB22.jpg",
          imageAlt: "Szárnyas Szürke burger",
          title: "Szárnyas Szürke burger",
          description:
            "kétszezámos buci, mustár, csalamádé, szürkemarha húspogácsa, trappista sajt, libamáj",
        },
        {
          image: "/images/kupiBB21.jpg",
          imageAlt: "Camembertes Szürke burger",
          title: "Camembertes Szürke burger",
          description:
            "kétszezámos buci, áfonya dzsem, lilahagymalekvár, szürkemarha húspogácsa, camembert sajt",
        },
        {
          image: "/images/kupiBB20.jpg",
          imageAlt: "Magyar Vándor burger",
          title: "Magyar Vándor burger",
          description:
            "fényes buci, házi koktél szósz, saláta, újhagyma, szarvasgombás vajkrém, pirított kolbász, szürkemarha húspogácsa, kézműves pikáns parenyica, Angus húspogácsával is kérhető",
        },
      ],
    },
    {
      id: "angusmarha-burgerek",
      label: "Angusmarha burgerek",
      dishes: [
        {
          image: "/images/kupiBB23.jpg",
          imageAlt: "White Lake burger",
          title: "White Lake burger",
          description:
            "kalács buci, libatepertős majonéz, Angus húspogácsa, fehér cheddar, maracujás zöldalma chutney, kacsamáj, rukkola, házi sült burgonya, tepertős majonéz",
        },
        {
          image: "/images/kupiBB24.jpg",
          imageAlt: "Flamenco burger",
          title: "Flamenco burger",
          description:
            "spanyol kovászos zsemle, fűszeres majonéz, saláta, avokádó krém, Angus húspogácsa, gouda sajt, füstölt kecskesajt, Serrano sonka, fajita zöldség, bélszín szeletek, chorizo, spanyol burgonya",
        },
        {
          image: "/images/kupiBB25.jpg",
          imageAlt: "Mangó Tangó burger",
          title: "Mangó Tangó burger",
          description:
            "spanyol kovászos zsemle, curry majo, Chorizo chips, Angus húspogácsa, parmezán, mangó salsa, rukkola, édesburgonya",
        },
      ],
    },
    {
      id: "egyeb-premium-burgerek",
      label: "Egyéb prémium burgerek",
      dishes: [
        {
          image: "/images/kupiBB23.jpg",
          imageAlt: "Kacsa burger",
          title: "Kacsa burger",
          description:
            "fényes buci, narancsos majo, almás párolt lilakáposzta, aszalt áfonya, kacsa húspogácsa (darált mell+comb), kéksajt, rukkola, házi sült burgonya, narancsos majo",
        },
        {
          image: "/images/kupiBB22.jpg",
          imageAlt: "Mac&cheese smash burger",
          title: "Mac&cheese smash burger",
          description:
            "fényes buci, Sriracha majonéz, csemege uborka, dupla smashed hús, vörös cheddar, Mac and cheese tészta, szalonna, friss hagyma karika, paradicsom, pirított hagyma",
        },
        {
          image: "/images/kupiBB21.jpg",
          imageAlt: "Vega burger",
          title: "Vega burger",
          description:
            "kétszezámos buci, házi szósz, jégsaláta, lilahagyma, csemegeuborka, paradicsom, szezámmagos sajtos karfiolos pogácsa, vörös cheddar",
        },
        {
          image: "/images/kupiBB20.jpg",
          imageAlt: "Halloumi Mangó Tangó vega",
          title: "Halloumi Mangó Tangó vega",
          description:
            "spanyol kovászos zsemle, curry majo, Halloumi sajt, mangó salsa, rukkola, édesburgonya",
        },
      ],
    },
  ],
} as const;

export const reviewsContent = {
  eyebrow: "Vendégvélemények",
  quotes: [
    {
      text: "A gyerekeim általában mindennel szemben kritikusak — itt kétszer kértek.",
      author: "Ági",
      detail: "két gyerekkel nyaralt a tónál",
    },
    {
      text: "Nem számítottam rá, hogy a nyaralás legjobb étkezése egy strandbüfében lesz.",
      author: "Bence",
      detail: "első alkalommal járt a tónál",
    },
    {
      text: "Évek óta ez a kedvenc helyünk. A minőség nem változott — csak egyre jobb lett.",
      author: "Zsuzsa",
      detail: "helyi lakos",
    },
  ],
} as const;

export const closingContent = {
  title: "Meglepődsz, mit lehet kapni a vízparton.",
  cta: "Megnézem a menüt",
  imageAlt: "KuPi türkiz faház, kék égbolt",
} as const;

export const locationContent = {
  title: "Itt találsz minket",
  intro:
    "A tó felől az első étterem vagyunk",
  hours: [
    { label: "Hétfő – Péntek", value: "14:00 – 21:00" },
    { label: "Szombat – Vasárnap", value: "11:00 – 22:00" },
    { label: "Szezon", value: "Május – Szeptember" },
  ],
  address: {
    name: "KuPi Beach Bar",
    street: "Tópart, Kunfehértó",
    phone: "+36 30 000 0000",
  },
} as const;

export const footerContent = {
  copyright: "© 2025 KuPi Beach Bar",
  menuFoot: "A tó partján · 14:00-tól nyitunk",
} as const;

export const collageImages = [
  {
    src: "/images/kupiBB17.jpg",
    alt: "Terasz a tóval",
    className: "c-tl",
    rot: -3,
    par: 0.32,
  },
  {
    src: "/images/kupiBB3.jpg",
    alt: "Terasz gyerekekkel",
    className: "c-tr",
    rot: 2.4,
    par: 0.4,
  },
  {
    src: "/images/kupiBB1.jpg",
    alt: "KuPi türkiz faház",
    className: "c-center",
    rot: 0,
    par: 0,
  },
  {
    src: "/images/kupiBB23.jpg",
    alt: "KuPi Burger",
    className: "c-bl",
    rot: 4,
    par: 0.28,
  },
  {
    src: "/images/kupiBB11.jpg",
    alt: "Sliders rizzsel",
    className: "c-br",
    rot: -2.2,
    par: 0.36,
  },
] as const;
