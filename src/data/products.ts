
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  details: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Espresso",
    price: 15000,
    description: "Kopi hitam pekat dengan cita rasa bold",
    details: "Shot tunggal espresso murni dengan crema yang sempurna. Cocok untuk pecinta kopi sejati yang menyukai rasa kopi yang kuat dan autentik.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e0a?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 20000,
    description: "Perpaduan espresso, steamed milk, dan foam",
    details: "Kombinasi sempurna antara espresso yang kuat dengan susu yang dikukus dan foam lembut. Dilengkapi dengan taburan bubuk coklat di atasnya.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Latte",
    price: 22000,
    description: "Espresso dengan susu yang creamy",
    details: "Espresso yang dipadukan dengan susu steamed dalam proporsi yang tepat, menciptakan rasa yang lembut dan creamy dengan sedikit foam di atasnya.",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Americano",
    price: 18000,
    description: "Espresso yang diencerkan dengan air panas",
    details: "Shot espresso ganda yang diencerkan dengan air panas, memberikan rasa kopi yang rich namun tidak terlalu pekat. Perfect untuk segala waktu.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Mocha",
    price: 25000,
    description: "Kombinasi espresso, coklat, dan susu",
    details: "Perpaduan mewah antara espresso, sirup coklat premium, dan steamed milk. Topped dengan whipped cream dan chocolate shavings.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 20000,
    description: "Kopi dingin dengan rasa smooth dan less acidic",
    details: "Kopi yang diseduh dengan metode cold brew selama 12 jam, menghasilkan rasa yang smooth, manis alami, dan rendah asam. Disajikan dengan es batu.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
  }
];
