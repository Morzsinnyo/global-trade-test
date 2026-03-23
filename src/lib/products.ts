import { Product } from '@/types/product';

export const products: Product[] = [
  // === PIZZA & SNACKS ===
  {
    id: 'full-pizza-30',
    name: { hu: 'Egész Pizza — 30cm', en: 'Full Pizza — 30cm' },
    description: {
      hu: 'Nápolyi stílusú, kézzel nyújtott pizza — prémium minőség ipari méretben.',
      en: 'Neapolitan-style handstretched pizza — premium quality at industrial scale.',
    },
    category: 'pizza',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: false,
    weight: '410–450g/db',
    packaging: '8 db/karton',
    flavors: {
      hu: ['Sonkás', 'Szalámis', 'Dolce', 'Quattro Formaggi'],
      en: ['Ham', 'Salami', 'Dolce', 'Four Cheese'],
    },
  },
  {
    id: 'dia-pizza-30',
    name: { hu: 'Dia-Wellness Pizza — 30cm', en: 'Dia-Wellness Pizza — 30cm' },
    description: {
      hu: 'Dia-Wellness pizza — egészségtudatos választás.',
      en: 'Dia-Wellness pizza — health-conscious choice.',
    },
    category: 'pizza',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: true,
    weight: '410–450g/db',
    packaging: '7 db/karton',
    flavors: {
      hu: ['Popeye', 'Quattro Formaggi', 'Single Lady', 'Single Man'],
      en: ['Popeye', 'Four Cheese', 'Single Lady', 'Single Man'],
    },
  },
  {
    id: 'pizza-slice',
    name: { hu: 'Pizza szelet', en: 'Pizza Slice' },
    description: {
      hu: 'Kézzel nyújtott nápolyi pizza, szeletelésre optimalizálva. Ideális pékségekbe és grab-and-go értékesítésre.',
      en: 'Hand-stretched Neapolitan pizza, slice-optimized. Ideal for bakery display & grab-and-go.',
    },
    category: 'pizza',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: false,
    weight: '110g/db',
    packaging: '32 db/karton',
    flavors: {
      hu: ['Szalámis', 'Sonkás'],
      en: ['Salami', 'Ham'],
    },
  },
  {
    id: 'papucs',
    name: { hu: 'Papucs', en: 'Papucs (Shoe-Shaped)' },
    description: {
      hu: 'Kézzel formázott, tökéletes grab-and-go snack.',
      en: 'Hand-shaped, perfect one-handed grab-and-go snack.',
    },
    category: 'pizza',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: false,
    weight: '95g/db',
    packaging: '60 db/karton',
    flavors: {
      hu: ['Sajtos (Bestseller)', 'Sonkás', 'Szalámis/Pepperoni'],
      en: ['Cheese (Bestseller)', 'Ham', 'Salami/Pepperoni'],
    },
  },
  {
    id: 'mini-pizza',
    name: { hu: 'Mini Pizza — Piccolino', en: 'Mini Pizza — Piccolino' },
    description: {
      hu: 'Kézzel formázott mini pizzák. 4–6 perc alatt kész.',
      en: 'Hand-shaped mini pizzas. Ready in 4–6 min.',
    },
    category: 'pizza',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: false,
    weight: '90–105g/db',
    packaging: '60 db/karton',
    flavors: {
      hu: ['Sonkás', 'Szalámis', 'Bolognai', 'Lazacos', 'Csirkés'],
      en: ['Ham', 'Salami', 'Bolognese', 'Salmon', 'Chicken'],
    },
    
  },
  {
    id: 'hot-sandwich',
    name: { hu: 'Melegszendvics', en: 'Hot Sandwiches' },
    description: {
      hu: 'Melegszendvicsek.',
      en: 'Hot sandwiches.',
    },
    category: 'pizza',
    servingType: ['bake-off'],
    isDiaWellness: false,
    weight: '110g/db',
    packaging: '40 db/karton',
    flavors: {
      hu: ['Sonkás', 'Szalámis'],
      en: ['Ham', 'Salami'],
    },
    
  },

  // === FROZEN BAKERY ===
  {
    id: 'bejgli',
    name: { hu: 'Bejgli', en: 'Bejgli' },
    description: {
      hu: 'Klasszikus magyar bejgli — vajas, omlós tészta, magas töltési arány. "Nagymama bejglije ipari megbízhatósággal."',
      en: 'Classic Hungarian bejgli — buttery, flaky pastry, high filling ratio. "Grandmother\'s bejgli at industrial reliability."',
    },
    category: 'bakery',
    servingType: ['ready-to-serve'],
    isDiaWellness: false,
    weight: '500g/db',
    packaging: '20 db/karton',
    flavors: {
      hu: ['Mákos', 'Diós'],
      en: ['Poppy Seed', 'Walnut'],
    },
  },
  {
    id: 'aranygaluska',
    name: { hu: 'Aranygaluska', en: 'Aranygaluska' },
    description: {
      hu: 'Hagyományos aranygaluska.',
      en: 'Traditional Hungarian golden dumplings.',
    },
    category: 'bakery',
    servingType: ['ready-to-serve'],
    isDiaWellness: false,
    weight: '1kg/csomag',
    packaging: '6x1kg/karton',
    flavors: { hu: [], en: [] },
    
  },
  {
    id: 'retes',
    name: { hu: 'Rétes', en: 'Rétes (Strudel)' },
    description: {
      hu: 'Leveles tésztás rétes, élesztőmentes, fagyasztott.',
      en: 'Puff pastry strudel, yeast-free, frozen baked.',
    },
    category: 'bakery',
    servingType: ['bake-off'],
    isDiaWellness: false,
    flavors: {
      hu: ['Túrós', 'Almás', 'Meggyes', 'Mákos', 'Belga csokis-túrós', 'Belga csokis-tejbegrizes', 'Meggy-mákos', 'Zserbó', 'Sonkás-sajtos', 'Bolognai', 'Spenótos-fetás', 'Sztrapacska stílusú (burgonyás-juhtúrós)'],
      en: ['Cottage Cheese', 'Apple', 'Cherry', 'Poppy Seed', 'Belgian Chocolate-Cottage Cheese', 'Belgian Chocolate-Rice Pudding', 'Cherry-Poppy', 'Zserbó', 'Ham & Cheese', 'Bolognese', 'Spinach & Feta', 'Sztrapacska-style (Potato Dumplings & Sheep Cheese)'],
    },
    
  },

  // === DESSERTS & PASTRY ===
  {
    id: 'pite',
    name: { hu: 'Pite', en: 'Pite (Hungarian Pie)' },
    description: {
      hu: 'Magas töltési arány — nem a tészta, hanem a tartalom a lényeg. Igazi „házi íz."',
      en: 'High filling ratio — not dough-focused, but content-rich. Real "home taste."',
    },
    category: 'desserts',
    servingType: ['ready-to-serve'],
    isDiaWellness: false,
    weight: '110g / 400g / 1500g',
    packaging: '50 / 16 / 3 db/karton',
    flavors: {
      hu: ['Almás', 'Almás-diós', 'Meggyes', 'Mákos', 'Túrós', 'Áfonyás', 'Kókuszos'],
      en: ['Apple', 'Apple-Walnut', 'Cherry', 'Poppy Seed', 'Cottage Cheese', 'Blueberry', 'Coconut'],
    },
  },
  {
    id: 'palacsinta',
    name: { hu: 'Palacsinta', en: 'Palacsinta (Crepes)' },
    description: {
      hu: 'Felolvasztás → tálalás → kész. Házi jelleg, kézműves karakter.',
      en: 'Thaw → serve → done. Homestyle texture, artisan character.',
    },
    category: 'desserts',
    servingType: ['ready-to-serve'],
    isDiaWellness: false,
    flavors: {
      hu: ['Töltött és töltetlen változatok'],
      en: ['Filled and unfilled versions available'],
    },
    
  },

  // === DIA-WELLNESS ===
  {
    id: 'dia-papucs',
    name: { hu: 'Dia-Wellness Papucs', en: 'Dia-Wellness Papucs' },
    description: {
      hu: 'Dia-Wellness változatú papucs — egészségtudatos snack.',
      en: 'Dia-Wellness variant papucs — health-conscious snack.',
    },
    category: 'wellness',
    servingType: ['bake-off', 'ready-to-serve'],
    isDiaWellness: true,
    flavors: { hu: [], en: [] },
    
  },
  {
    id: 'dia-pite',
    name: { hu: 'Dia-Wellness Pite', en: 'Dia-Wellness Pite' },
    description: {
      hu: 'Dia-Wellness változatú pite.',
      en: 'Dia-Wellness variant Hungarian pie.',
    },
    category: 'wellness',
    servingType: ['ready-to-serve'],
    isDiaWellness: true,
    flavors: { hu: [], en: [] },
    
  },
  {
    id: 'dia-bejgli',
    name: { hu: 'Dia-Wellness Bejgli', en: 'Dia-Wellness Bejgli' },
    description: {
      hu: 'Dia-Wellness változatú bejgli.',
      en: 'Dia-Wellness variant bejgli.',
    },
    category: 'wellness',
    servingType: ['ready-to-serve'],
    isDiaWellness: true,
    flavors: { hu: [], en: [] },
    
  },
];
