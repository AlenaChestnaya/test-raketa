'use strict';

var cards = [
    {
        id: 1,
        image: 'img/econom.jpg',
        title: 'Эконом',
        size: '',
        area: '0,63 м2',
        areaNumber: 0.63,
        equipment: [
            {
                id: 1,
                icon: 'img/sprite-empty.svg',
                text: 'Пустой номер'
            }
        ],
        price: 100
    },
    {
        id: 2,
        image: 'img/econom-plus.jpg',
        title: 'Эконом плюс',
        size: '90х100х180 см',
        area: '0,90 м2',
        areaNumber: 0.90,
        equipment: [
            {
                id: 2,
                icon: 'img/sprite-bed.svg',
                text: 'Лежак'
            },
            {
                id: 3,
                icon: 'img/sprite-scratcher.svg',
                text: 'Когтеточка'
            }
        ],
        price: 200
    },
    {
        id: 3,
        image: 'img/comfort.jpg',
        title: 'Комфорт',
        size: '100х125х180 см',
        area: '1,13 м2',
        areaNumber: 1.13,
        equipment: [
            {
                id: 2,
                icon: 'img/sprite-bed.svg',
                text: 'Лежак'
            },
            {
                id: 3,
                icon: 'img/sprite-scratcher.svg',
                text: 'Когтеточка'
            },
            {
                id: 4,
                icon: 'img/sprite-game.svg',
                text: 'Игровой комплекс'
            }
        ],
        price: 250
    },
    {
        id: 4,
        image: 'img/suit.jpg',
        title: 'Сьют',
        size: '125х125х180 см',
        area: '1,56 м2',
        areaNumber: 1.56,
        equipment: [
            {
                id: 2,
                icon: 'img/sprite-bed.svg',
                text: 'Лежак'
            },
            {
                id: 3,
                icon: 'img/sprite-scratcher.svg',
                text: 'Когтеточка'
            },
            {
                id: 4,
                icon: 'img/sprite-game.svg',
                text: 'Игровой комплекс'
            }
        ],
        price: 350
    },
    {
        id: 5,
        image: 'img/lux.jpg',
        title: 'Люкс',
        size: '160х160х180 см',
        area: '2,56 м2',
        areaNumber: 2.56,
        equipment: [
            {
                id: 2,
                icon: 'img/sprite-bed.svg',
                text: 'Лежак'
            },
            {
                id: 3,
                icon: 'img/sprite-scratcher.svg',
                text: 'Когтеточка'
            },
            {
                id: 4,
                icon: 'img/sprite-game.svg',
                text: 'Игровой комплекс'
            },
            {
                id: 5,
                icon: 'img/sprite-house.svg',
                text: 'Домик'
            }
        ],
        price: 500
    },
    {
        id: 6,
        image: 'img/super-lux.jpg',
        title: 'Супер-Люкс',
        size: '180х160х180 см',
        area: '2,88 м2',
        areaNumber: 2.88,
        equipment: [
            {
                id: 2,
                icon: 'img/sprite-bed.svg',
                text: 'Лежак'
            },
            {
                id: 3,
                icon: 'img/sprite-scratcher.svg',
                text: 'Когтеточка'
            },
            {
                id: 4,
                icon: 'img/sprite-game.svg',
                text: 'Игровой комплекс'
            },
            {
                id: 5,
                icon: 'img/sprite-house.svg',
                text: 'Домик'
            }
        ],
        price: 600
    }
];

var app = new Vue({
  el: '#catalog',
  data: {
    cards: cards
  },
  methods: {
  
  },
  computed: {
    
  },
  mounted() {
  
  }
});



// тоггл класс у сорт-листа
// тоггл класс у бургера