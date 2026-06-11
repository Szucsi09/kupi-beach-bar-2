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
  dishes: [
    {
      image: "/images/kupiBB8.jpg",
      imageAlt: "KuPi Burger",
      title: "KuPi Burger",
      description:
        "Briós zsemle, házi BBQ szósz, karamellizált hagyma, coleslaw",
    },
    {
      image: "/images/kupiBB2.jpg",
      imageAlt: "Rántott hal tányér",
      title: "Rántott hal tányér",
      description:
        "Ropogós bundában, friss citrommal, házi sültkrumplival",
    },
    {
      image: "/images/kupiBB7.jpg",
      imageAlt: "Havi különlegesség",
      title: "Havi különlegesség",
      description: "Minden hónapban más — kérdezd meg a személyzetet",
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
