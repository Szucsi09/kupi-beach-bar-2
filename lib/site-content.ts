export const navLinks = [
  { href: "#hero", label: "Kezdőlap" },
  { href: "#about", label: "Rólunk" },
  { href: "#menu", label: "Menü" },
  { href: "#reviews", label: "Vélemények" },
  { href: "#location", label: "Helyszín" },
] as const;

export const heroContent = {
  titleLine1: "Igazi ételek",
  titleLine2: "a vízparton.",
  cta: "Megnézem a menüt",
} as const;

export const fullwidthBreak = {
  imageAlt: "Terasz a tóval, string lights",
  floatCard: "A tó partján, nem mellette",
} as const;

export const aboutContent = {
  eyebrow: "Rólunk",
  paragraphs: [
    "Nem azért vagyunk itt, mert a strandon mindenki eszik valamit.",
    "Azért vagyunk itt, mert úgy gondoljuk, hogy a vízparton is lehet valóban jót enni.",
  ],
  imageAlt: "KuPi kívülről, fehér pergola",
} as const;

export const strengths = [
  {
    num: "01",
    title: "Frissen készül, nem csak melegítve",
    description:
      "Nem tartjuk melegen, amíg meg nem rendeled. Amikor rendelsz, akkor kezdjük.",
    image: "/images/kupiBB2.jpg",
    imageAlt: "Frissen sült tányér",
    reverse: false,
    hasImage: true,
    rotationClass: "r1",
  },
  {
    num: "02",
    title: "Helyi alapanyagok, szezonális ízek",
    description:
      "Amit a tájék ad, azzal dolgozunk. Ezért változik a menü — és ezért érdemes visszajönni.",
    image: "/images/kupiBB7.jpg",
    imageAlt: "Szezonális sliders",
    reverse: true,
    hasImage: true,
    rotationClass: "r2",
  },
  {
    num: "03",
    title: "A víz partján, nem mellette",
    description: "Van pár hely, ahol igazán jó leülni. Mi ott vagyunk.",
    reverse: false,
    hasImage: false,
  },
] as const;

export const menuContent = {
  title: "Ma ezt ajánljuk",
  subtitle: "Amit ma reggel hoztak, ma el is fogy.",
  moreLink: "Teljes menü →",
  categories: [
    {
      id: "levesek",
      label: "Levesek",
      dishes: [
        {
          image: "/images/kupiBB2.jpg",
          imageAlt: "Halászlé",
          title: "Halászlé",
          description: "Dunai ponty, erős paprika, házi gyufatészta",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Gulyásleves",
          title: "Gulyásleves",
          description: "Marhalábszár, burgonya, csipetke, pirospaprika",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Tárkonyos raguleves",
          title: "Tárkonyos raguleves",
          description: "Csirkecomb, zöldségek, tárkony, tejföl",
        },
        {
          image: "/images/kupiBB4.jpg",
          imageAlt: "Zöldségkrémleves",
          title: "Zöldségkrémleves",
          description: "Szezonális zöldségek, frissen őrölt bors, pirított mag",
        },
      ],
    },
    {
      id: "gyermekeknek",
      label: "Gyermekeknek",
      dishes: [
        {
          image: "/images/kupiBB2.jpg",
          imageAlt: "Rántott csirkemell",
          title: "Rántott csirkemell",
          description: "Ropogós bunda, sültkrumpli, ketchup",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Sajtos tészta",
          title: "Sajtos tészta",
          description: "Friss tészta, vajas reszelt sajt",
        },
        {
          image: "/images/kupiBB8.jpg",
          imageAlt: "Mini sajtburger",
          title: "Mini sajtburger",
          description: "Puha zsemle, marhapogácsa, sajt",
        },
        {
          image: "/images/kupiBB4.jpg",
          imageAlt: "Rántott sajt",
          title: "Rántott sajt",
          description: "Trappista sajt, sültkrumpli, tartármártás",
        },
      ],
    },
    {
      id: "foetelek",
      label: "Főételek",
      dishes: [
        {
          image: "/images/kupiBB2.jpg",
          imageAlt: "Rántott hal tányér",
          title: "Rántott hal tányér",
          description: "Ropogós bundában, friss citrom, házi sültkrumpli",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Grillezett pisztráng",
          title: "Grillezett pisztráng",
          description: "Friss pisztráng, citrom, párolt zöldség, vajas burgonya",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Csirkemell roston",
          title: "Csirkemell roston",
          description: "Fűszeres csirkemell, grillzöldség, jázminrizs",
        },
        {
          image: "/images/kupiBB4.jpg",
          imageAlt: "Sült csülök",
          title: "Sült csülök",
          description: "Lassan sült csülök, párolt káposzta, házi mustár",
        },
        {
          image: "/images/kupiBB5.jpg",
          imageAlt: "Vegetáriánus tál",
          title: "Vegetáriánus tál",
          description: "Grillzöldségek, halloumi, házi humusz",
        },
      ],
    },
    {
      id: "kezmuves-burgerek",
      label: "Kézműves burgerek",
      dishes: [
        {
          image: "/images/kupiBB8.jpg",
          imageAlt: "KuPi Burger",
          title: "KuPi Burger",
          description:
            "Briós zsemle, házi BBQ szósz, karamellizált hagyma, coleslaw",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Füstölt csülkös burger",
          title: "Füstölt csülkös burger",
          description: "Pulled pork, savanyú uborka, házi BBQ szósz",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Csirkeburger",
          title: "Csirkeburger",
          description: "Rántott csirkemell, friss saláta, chilis majonéz",
        },
        {
          image: "/images/kupiBB2.jpg",
          imageAlt: "Halburger",
          title: "Halburger",
          description: "Ropogós halfilé, tartármártás, jégsaláta",
        },
        {
          image: "/images/kupiBB1.jpg",
          imageAlt: "Kecskesajtos burger",
          title: "Kecskesajtos burger",
          description: "Marhapogácsa, kecskesajt, lekváros hagyma",
        },
      ],
    },
    {
      id: "szurkemarha-burgerek",
      label: "Szürkemarha burgerek",
      dishes: [
        {
          image: "/images/kupiBB8.jpg",
          imageAlt: "Szürkemarha Classic",
          title: "Szürkemarha Classic",
          description: "Szürkemarha pogácsa, cheddar, friss saláta, paradicsom",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Szürkemarha BBQ",
          title: "Szürkemarha BBQ",
          description: "Szürkemarha pogácsa, füstölt szalonna, házi BBQ szósz",
        },
        {
          image: "/images/kupiBB1.jpg",
          imageAlt: "Szürkemarha Truffle",
          title: "Szürkemarha Truffle",
          description: "Szürkemarha pogácsa, szarvasgombás majonéz, rukkola",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Szürkemarha Blue",
          title: "Szürkemarha Blue",
          description: "Szürkemarha pogácsa, kékpenészes sajt, karamellizált hagyma",
        },
      ],
    },
    {
      id: "angusmarha-burgerek",
      label: "Angusmarha burgerek",
      dishes: [
        {
          image: "/images/kupiBB8.jpg",
          imageAlt: "Angus Double",
          title: "Angus Double",
          description: "Két angus pogácsa, dupla cheddar, bacon, BBQ szósz",
        },
        {
          image: "/images/kupiBB1.jpg",
          imageAlt: "Angus Classic",
          title: "Angus Classic",
          description: "Angus pogácsa, cheddar, saláta, paradicsom, hagyma",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Angus Jalapeño",
          title: "Angus Jalapeño",
          description: "Angus pogácsa, jalapeño, pepper jack sajt, chilis majonéz",
        },
        {
          image: "/images/kupiBB9.jpg",
          imageAlt: "Angus Mushroom",
          title: "Angus Mushroom",
          description: "Angus pogácsa, pirított gomba, svájci sajt",
        },
      ],
    },
    {
      id: "egyeb-premium-burgerek",
      label: "Egyéb prémium burgerek",
      dishes: [
        {
          image: "/images/kupiBB8.jpg",
          imageAlt: "Wagyu Signature",
          title: "Wagyu Signature",
          description:
            "Wagyu pogácsa, trüffel majonéz, karamellizált hagyma, rukkola",
        },
        {
          image: "/images/kupiBB1.jpg",
          imageAlt: "Bárányburger",
          title: "Bárányburger",
          description: "Fűszeres bárány pogácsa, tzatziki, friss menta",
        },
        {
          image: "/images/kupiBB7.jpg",
          imageAlt: "Kacsamell burger",
          title: "Kacsamell burger",
          description: "Konfitált kacsa, lekváros hagyma, kecskesajt",
        },
        {
          image: "/images/kupiBB2.jpg",
          imageAlt: "Tenger gyümölcsei burger",
          title: "Tenger gyümölcsei burger",
          description: "Garnélapogácsa, citromos majonéz, jégsaláta",
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
  title: "Megtalálsz minket",
  intro:
    "A tó partján vagyunk — ha látod a vizet, már majdnem itt is vagy.",
  hours: [
    { label: "Hétfő – Péntek", value: "14:00 – 21:00" },
    { label: "Szombat – Vasárnap", value: "11:00 – 22:00" },
    { label: "Szezon", value: "Május – Szeptember" },
  ],
  address: {
    name: "KuPi Beach Bar",
    street: "Strand sétány 1., a tó partján",
    phone: "+36 30 000 0000",
  },
} as const;

export const footerContent = {
  copyright: "© 2025 KuPi Beach Bar",
  menuFoot: "A tó partján · 14:00-tól nyitunk",
} as const;

export const collageImages = [
  {
    src: "/images/kupiBB5.jpg",
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
    src: "/images/kupiBB8.jpg",
    alt: "KuPi Burger",
    className: "c-bl",
    rot: 4,
    par: 0.28,
  },
  {
    src: "/images/kupiBB7.jpg",
    alt: "Sliders rizzsel",
    className: "c-br",
    rot: -2.2,
    par: 0.36,
  },
] as const;
