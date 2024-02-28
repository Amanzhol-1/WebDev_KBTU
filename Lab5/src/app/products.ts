export interface Product {
  likes: number;
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string[];
  rating: number;
  kaspiUrl: string;
  isRemoved: boolean;
}
export const products : Product[] = [
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium"],
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 294626,
    description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128.0 ГБ емкость аккумулятора: 3095.0 мАч",
    rating: 5.0,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    isRemoved: false
  },
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium"],
    id: 2,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    price: 374385 ,
    description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 128.0 ГБ емкость аккумулятора: 3279.0 мАч',
    rating: 4.6,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    isRemoved: false
  },
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium"],
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 287768,
    description: 'технология NFC: Да    цвет: белый    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 5,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium"],
    id: 4,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
    price: 615796,
    description: 'технология NFC: Да цвет: синий тип экрана: OLED, Super Retina XDR display диагональ: 6.7 дюйм  размер оперативной памяти: 8 ГБ процессор: 6-ядерный Apple A17 Pro  объем встроенной памяти: 256.0 ГБ  емкость аккумулятора: 4422.0 мАч',
    rating: 5,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=gallery-medium"],
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb starlight',
    price: 320756 ,
    description: 'технология NFC: Да    цвет: starlight    тип экрана: OLED, Super Retina XDR display    диагональ: 6.1 дюйм    размер оперативной памяти: 6 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3279.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-starlight-106363144/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium"],
    id: 6,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 247708,
    description: 'технология NFC: Да    цвет: черный    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A13 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3110.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium"],
    id: 7,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 288386,
    description: 'технология NFC: Да    цвет: зеленый    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 4.8,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h02/h35/83559605960734.png?format=gallery-medium"],
    id: 8,
    name: 'Смартфон Apple iPhone 15 Pro 128Gb черный',
    price: 513953,
    description: 'технология NFC: Да    цвет: черный    тип экрана: OLED, Super Retina XDR display   диагональ: 6.1 дюйм    размер оперативной памяти: 8 ГБ    процессор: 6-ядерный Apple A17 Pro    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3279.0 мАч',
    rating: 4.7,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium"],
    id: 9,
    name: 'Смартфон Apple iPhone 13 128Gb синий',
    price: 287244 ,
    description: 'технология NFC: Да    цвет: синий    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 4.6,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium"],
    id: 10,
    name: 'Смартфон Apple iPhone SE 2022 64Gb черный',
    price: 233597,
    description: 'технология NFC: Да    цвет: черный    тип экрана: IPS, емкостный, мультитач, Retina HD Display    диагональ: 4.7 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 64.0 ГБ   емкость аккумулятора: 1821.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000",
    isRemoved: false
  },
  {
  likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium"],
    id: 11,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 104626,
    description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128.0 ГБ емкость аккумулятора: 3095.0 мАч",
    rating: 5.0,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    isRemoved: false
  },
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium"],
    id: 12,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    price: 374000 ,
    description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 128.0 ГБ емкость аккумулятора: 3279.0 мАч',
    rating: 4.6,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    isRemoved: false
  },
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium"],
    id: 13,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 287768,
    description: 'технология NFC: Да    цвет: белый    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 5,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium"],
    id: 14,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
    price: 600006,
    description: 'технология NFC: Да цвет: синий тип экрана: OLED, Super Retina XDR display диагональ: 6.7 дюйм  размер оперативной памяти: 8 ГБ процессор: 6-ядерный Apple A17 Pro  объем встроенной памяти: 256.0 ГБ  емкость аккумулятора: 4422.0 мАч',
    rating: 5,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=gallery-medium"],
    id: 15,
    name: 'Смартфон Apple iPhone 14 128Gb starlight',
    price: 320056 ,
    description: 'технология NFC: Да    цвет: starlight    тип экрана: OLED, Super Retina XDR display    диагональ: 6.1 дюйм    размер оперативной памяти: 6 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3279.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-starlight-106363144/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium"],
    id: 16,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 200708,
    description: 'технология NFC: Да    цвет: черный    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A13 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3110.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium"],
    id: 17,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 300386,
    description: 'технология NFC: Да    цвет: зеленый    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 4.8,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h02/h35/83559605960734.png?format=gallery-medium"],
    id: 18,
    name: 'Смартфон Apple iPhone 15 Pro 128Gb черный',
    price: 603953,
    description: 'технология NFC: Да    цвет: черный    тип экрана: OLED, Super Retina XDR display   диагональ: 6.1 дюйм    размер оперативной памяти: 8 ГБ    процессор: 6-ядерный Apple A17 Pro    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3279.0 мАч',
    rating: 4.7,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium"],
    id: 19,
    name: 'Смартфон Apple iPhone 13 128Gb синий',
    price: 307244 ,
    description: 'технология NFC: Да    цвет: синий    тип экрана: OLED, Super Retina XDR    диагональ: 6.1 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 128.0 ГБ    емкость аккумулятора: 3095.0 мАч',
    rating: 4.6,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000",
    isRemoved: false
  }
  ,
  {
    likes: 0,
    imagePath: ["https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium"],
    id: 20,
    name: 'Смартфон Apple iPhone SE 2022 64Gb черный',
    price: 433597,
    description: 'технология NFC: Да    цвет: черный    тип экрана: IPS, емкостный, мультитач, Retina HD Display    диагональ: 4.7 дюйм    размер оперативной памяти: 4 ГБ    процессор: 6-ядерный Apple A15 Bionic    объем встроенной памяти: 64.0 ГБ   емкость аккумулятора: 1821.0 мАч',
    rating: 4.9,
    kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000",
    isRemoved: false
  }
];

