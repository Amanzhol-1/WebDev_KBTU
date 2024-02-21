export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string[]; 
  rating: number;
  link: string; 
}

export const products = [
  {
    id: 1,
    name: 'Книга Декарт Р.: Рассуждения о методе',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/he4/hd8/63975860568094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he3/h31/63975864172574.jpg?format=gallery-medium'],
    rating: 5,
    price: 2.3,
    description: 'Классическое произведение Рене Декарта, в котором философ излагает основы научного метода исследования и знаменитое утверждение "Я мыслю, следовательно, существую".',
    link: 'https://kaspi.kz/shop/p/dekart-r-rassuzhdenija-o-metode-100271358/?c=750000000'
  },
  {
    id: 2,
    name: 'Книга Пидоренко И.:Почему я не сменил фамилию',
    img: ['https://cs7.pikabu.ru/post_img/2017/12/17/8/1513515307122711179.jpg'],
    rating: 100,
    price: 100,
    description: 'Автобиографическая книга Игоря Пидоренко, рассказывающая о жизненных испытаниях, внутренней силе и поиске собственной идентичности в обществе с предвзятыми взглядами.',
    link: 'https://pikabu.ru/story/ya_dumayu_mnogie_slyishali_ob_yetom_pisatele_no_kto_chital_yetu_knigu_5565170'
  },
  {
    id: 3,
    name: 'Книга Ницше Ф.: Так говорил Заратустра',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h0e/hfa/63907107143710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h5a/63907109109790.jpg?format=gallery-medium'],
    rating: 5,
    price: 2,
    description: 'Философский роман Фридриха Ницше, представляющий собой глубокий и метафоричный разбор моральных и этических принципов через образ мудреца Заратустры, исследующего природу человека и общества.',
    link: 'https://kaspi.kz/shop/p/nitsshe-f-v-tak-govoril-zaratustra-100271277/?c=750000000'
  },
  {
    id: 4,
    name: 'Книга Ницше Ф.: Человеческое, слишком человеческое',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h86/h2e/63833775767582.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h99/h22/63833779568670.jpg?format=gallery-medium'],
    rating: 4,
    price: 2.2,
    description: 'Книга представляет собой критический взгляд на традиционные ценности и верования, призывая к новому пониманию свободы, разума и индивидуальности.',
    link: 'https://kaspi.kz/shop/p/nitsshe-f-chelovecheskoe-slishkom-chelovecheskoe-100423083/?c=750000000'
  },
  {
    id: 5,
    name: 'Книга Кант И.: Основы метафизики нравственности',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/ha9/hfc/83334138036254.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h88/83334140067870.jpg?format=gallery-medium'],
    rating: 3,
    price: 2.5,
    description: 'Книга представляет собой глубокий анализ природы добродетели, долга и морального выбора, акцентируя внимание на автономии воли и необходимости поступать из уважения к моральному закону.',
    link: 'https://kaspi.kz/shop/p/kant-i-osnovy-metafiziki-nravstvennosti-112940437/?c=750000000'
  },
  {
    id: 6,
    name: 'Книга Гегель Г. В. Ф.: Логика',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/h5f/63965823139870.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/63965826023454.jpg?format=gallery-medium'],
    rating: 5,
    price: 3,
    description: 'Гегель переосмысливает традиционное понимание логики, видя в ней не просто формальную дисциплину, но глубокий анализ структур бытия и мышления.',
    link: 'https://kaspi.kz/shop/p/gegel-g-v-f-logika-100295650/?c=750000000'
  },
  {
    id: 7,
    name: 'Книга Ницше Ф.: По ту сторону добра и зла',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hd0/ha8/63957371093022.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h23/h25/63957373517854.jpg?format=gallery-medium'],
    rating: 5,
    price: 1.5,
    description: 'Ницше исследует природу власти, культурные предрассудки и происхождение ценностей, призывая к переосмыслению того, что считается добром и злом, и выступая за аффирмацию жизни в её полноте.',
    link: 'https://kaspi.kz/shop/p/nitsshe-f-po-tu-storonu-dobra-i-zla-100625063/?c=750000000'
  },
  {
    id: 8,
    name: 'Книга Юнг К. Г.: Отношения между эго и бессознательным',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/h7c/64161046855710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/had/h79/64161082310686.jpg?format=gallery-medium'],
    rating: 3,
    price: 4,
    description: 'Книга раскрывает концепции персона и анимы/анимуса, а также процесс индивидуации как путь к самореализации. Юнг подчеркивает важность работы с бессознательным для развития глубинной психологии и лучшего понимания себя.',
    link: 'https://kaspi.kz/shop/p/jung-k-g-otnoshenija-mezhdu-ego-i-bessoznatel-nym-103331377/?c=750000000'
  },
  {
    id: 9,
    name: 'Книга Ницше Ф. В.: Веселая наука',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h55/hcc/64342973972510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hee/64343009755166.jpg?format=gallery-medium'],
    rating: 5,
    price: 1,
    description: 'Книга изобилует афоризмами, поэтическими рассуждениями и критикой современной науки, религии и морали. Ницше исследует возможности освобождения человеческого духа от устаревших убеждений и подчеркивает ценность творчества, радости и интеллектуальной смелости в поиске новых ценностей и смыслов.',
    link: 'https://kaspi.kz/shop/p/nitsshe-f-v-veselaja-nauka-101475300/?c=750000000'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/