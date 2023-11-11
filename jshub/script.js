"use strict"

// const obj = {
//     name: "Vika",
//     age: 33,
//     city: "Vladivostok",
//     test: {
//         test2: {
//             userName: "Grisha"
//         }
//     }
// };

// obj.lastName = 4544;

// console.log(obj["test"].test2.userName);

// //массив частный случай объекта
// let arr = ["tre", "dfhf", 3, "bbb"];
// console.log(arr[3]);

// //task:1
// const storeName = "Newshop";
// const storeDescription = {
//     budget: 10000,
//     employees: ['Jon', 'Tom', 'Luis'],
//     products: {
//         apple: 145,
//         orange: 98
//     },
//     open: true
// };

// //#13
// //alert("no js");
// //const result = confirm('why?');
// //const result = prompt('Ваш возраст', '18'); //возвращает всегда строковое значение.если перед prompt поставить + то вернёт number
// const result = [];

// result[0] = prompt('Ваше имя');
// result[1] = prompt('Ваша фамилия');
// result[2] = prompt('Ваш возраст');

// document.write(result);
//19lesson

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?');
const rating = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastMovie] = rating;

//21 логические операторы
console.log(personalMovieDB);
const lerr = 'ffdf';
console.log(lerr[2] === 'w' || 'q' || 'w');  //возвращает первое если имеет true.

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

//answer 2 nan 3 false 25 5 5 true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
};
//22 циклы
let nnn = 1;
do {
    console.log(nnn);
    nnn++;
} while (nnn <= 24);

for (i = 20; i >= 12 ; i--) {
    if (i === 15) {               
        //break;        в цикл добавили break на нужном значении.
        continue;        //или continue для значения,которое хочем пропустить при том что цикл продолжет выполнятся
    }
    console.log(i);
};
//23

