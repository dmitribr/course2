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
//23 вложенные циклы
for (i = 0; i <= 5 ; i++) {
    console.log(`Привет${i}`);
    for (j = 0; j <= 2 ; j++) {    //на каждом цикле i выполняется весь цикл j
    console.log(`ответ ${j}`);
    } 
}
//задача на построение треугольника.
let pry = '';
for (i = 0; i < 10 ; i++) {
    let j = '*';
    pry = `${pry}${j}`
    console.log(pry)
    
};
//решение с вложенным циклом
let result = '';
let line = 7;

for (i = 0 ; i <= line ; i++) {
    
    for (j = 0 ; j < i ; j++) {
    result += '*';
    }
    result += '\n';
}
console.log(result);

//метки для остановки цикла
let result = '';
let line = 7;

gra: for (i = 0 ; i <= line ; i++) {
    
    for (j = 0 ; j < i ; j++) {
     result += '*';
    if (j === 2) continue gra;    //continue прекращает только этот цикл и переходит к метке.
    }                             //если указать break то перестанет выпалнятся весь цикл где указана метка.
    result += '\n';
}
console.log(result);
//задачи 23 (1 раздел)
for (i = 5 ; i <= 10 ; i++) {
    console.log(i);
}


for (i = 20 ; i >= 10 ; i--) {
    if (i === 13) break;
    console.log(i);
}


for (i = 2 ; i <= 10 ; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


for (let i = 2; i <= 16; i++) {
         if (i % 2 === 0) {
             continue;
         } else {
             console.log(i);
         }
     }

    function fourthTask() {
        let i = 2;
    
        while (i <= 16) {
            if (i % 2 === 0) {
                i++;
                continue;
            } else {
                console.log(i);
            }
            i++;
        }
    }
    fourthTask();





const arrayOfNumbers = [];
for (i = 5 ; i <= 10 ; i++) {
    let num = 0;
    arrayOfNumbers[num] = i;
    num += 1;
    console.log(arrayOfNumbers);
}

// задача 2 раздел
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (i = 0 ; i < arr.length ; i++) {
        result[i] = arr[i];
        console.log(result);
    }
    
}
firstTask();


//2.2

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (i = 0 ; i < data.length ; i++) {
        if (typeof(data[i]) === "string") {
            data[i] += " - done";
            console.log(data);
        } else {
            data[i] = data[i] * 2;
            console.log(data);
        }
    }
     return data;
};
secondTask();
  
//2.3

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let num = data.length - 1;
    
    for (i = 0 ; i < data.length ; i++) {
        
        result[i] = data[num];
        num--;
        console.log(result);
    }
    
}
thirdTask();

//задача ёлочка. 3

const lines = 5;
let result = '';
let dot = '*';
let doto = dot;    
let prom = '';

for (i = 0 ; i < lines ; i++) {
    for (j = i ; j < lines - 1 ; j++){
        prom = `${prom} `;
    }
    
    result = `${result}${prom}${dot}\n`;
    dot = `${dot}${doto}${doto}`;
    prom = '';
    
};
console.log(result);

//25

