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
  
//2.3 перевернуть массив

function thirdTask() {
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

//ёлочка решение из курса.
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

//25
function tr() {           //создаётся до начала выполнения скрипта, можно вызывать перед объявлением. Declaration
    console.log(434);
}
tr();

let rey = function() {   //создаётся при подходе потока, можно вызывать только после создания. Expression
    console.log(43);
}
rey();

let top = () => {      //стрелочная не имеет своего контекста.
    console.log(544);
}
top();

//задача 27 - 1
function sayHello(name) {
    return `Привет, ${name}!`;
};
console.log(sayHello('Ness'));

//27 - 2
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
};
console.log(returnNeighboringNumbers(9));

//27 - 3 вернуть прогрессию
let result = 0;
let text = '';
function getMathResult(num1, num2) {
    if (typeof(num2) !== "number" || num2 <= 0) {
        return num1;
    } else {
        for (i = 0 ; i < num2 ; i++) {
            result = result + num1;
            text = `${text}${result}`;
            if (i === num2 - 1) {}
            else { 
                text += '---';
            }
            
        }
        return text;
    }
};
console.log(getMathResult(8, 3));

// решение из курса вернуть прогрессию
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;   // str = str + num * i + "---"
        }
    }
    return str;
}
console.log(getMathResult(10, 5));

//28 методы и свойства

//задчи 1.1 вычисление объёма куба и площади поверхности.
function calculateVolumeAndArea(num) {
    let result = '';
    if (typeof(num) === 'string' || num <= 0 || num % 1 !== 0) {
        result = 'При вычислении произошла ошибка';
        return result;
    } else {
        result = `Объем куба:${num * num * num}, площадь всей поверхности: ${(num * num) * 6}`
        return result;
    }
}
calculateVolumeAndArea();

//задача 1.2 проверка ряда места в вагоне
function getCoupeNumber(num) {
    let result;
    if (typeof(num) !== 'number' || num < 0 || num % 1 !== 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        result = 'Ошибка. Проверьте правильность введенного номера места';
        return(result);
    } else if (num === 0 || num > 36) {
        console.log('Таких мест в вагоне не существует');
        result = "Таких мест в вагоне не существует";
        return(result);
    } else {
        result = Math.ceil(num / 4);
        console.log(result);
        return(result);
    }
}
getCoupeNumber(33);

//задача 8 2.1 перевод минут в часы и минуты.
function getTimeFromMinutes(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        console.log('Ошибка, проверьте данные');
        return 'Ошибка, проверьте данные';
    } else if (num < 60) {
        console.log(`Это 0 часов и ${num} минут`);
        return `Это 0 часов и ${num} минут`;
    } else {
        let hour = Math.floor(num / 60);
        let minute = num - (hour * 60);
        switch (hour) {
            case 1:
            case 21:
            case 31:
            case 41:
            case 51:
            case 61:
            case 71:
            case 81:
            case 91:
            case 101:
            case 201:
                console.log(`Это ${hour} час и ${minute} минут`);
                return `Это ${hour} час и ${minute} минут`;
            case 2:
            case 3:
            case 4:
            case 102:
            case 103:
            case 104:
            case 202:
            case 203:
            case 204:
                console.log(`Это ${hour} часa и ${minute} минут`);
                return `Это ${hour} часa и ${minute} минут`;
            default:
                console.log(`Это ${hour} часов и ${minute} минут`);
                return `Это ${hour} часов и ${minute} минут`;
        }
    }
        
}
getTimeFromMinutes(325);

// задача 8 2.2 вычислем наибольшее число из аргументов, минимум 4 аргумента
function findMaxNumber(num1, num2, num3, num4) {

    if (typeof(num1 + num2 + num3 + num4) !== 'number' || typeof(num4) === 'undefined') {
        console.log('yt dsik');
        return 0;
    }   else {
        console.log(Math.max(num1, num2, num3, num4));
        return Math.max(num1, num2, num3, num4);
     }
}
findMaxNumber(3, 8, 29);

//задача 9 3.1

let resul = '';
let result = '';
let mass = [0, 1];
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        // return '';
        console.log('fgf');
    }    else {
    for (i = 1; i <= num ; i++) {
        mass[i + 1] = mass[i] + mass[i - 1];
        resul += `${mass[i - 1]}`;
        result = `${resul}`;
        resul += ' ';
    }
    // return result;
    console.log(result);
}
}
fib(20);
// решение из курса 
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}
fib(5)

//30 метод trim() удаляет пробелы сначала строки и с конца.
console.log('     ffdgfdg    gfdf    '.trim());

//31 callback функции
function learnJS(number, callback) {
    console.log(`Пункт номер ${number}`);
    callback();
}

function done() {
    console.log('Передача done');
}

learnJS(8, done);   //указываем без скобок, так как мы не вызываем её. можно указать целиком всю функцию в аргументе.

//32 объекты, деструктуризация объектов

const options = {
    name: 'logi',
    width: 143,
    height: 500,
    colors: {
        background: 'red',
        border: 'green'
    }
};
delete options.name;   //удаление пункта name из объекта options
console.log(options);

for (let key in options) {       //перебор свойств и значений в объекте. key принимает свойство по порядку.
        if (typeof(options[key]) === 'object') {             //если key объект, то перебираем объект где 
            for (let key2 in options[key]) {                    //key2 присваеваем свойство в объекте.
                console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
            }
        } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`); 
}
}

console.log(Object.keys(options));    //вернёт все свойства объекта, в конце можно добавить length чтобы получить число

//создание собственного метода
const pop = {
    size: 5,
    width: 90,
    toy: function() {
        console.log('метод');
    }
}
  pop.toy();

// деструктуризация объекта
const options2 = {
    name: 'logi',
    width: 143,
    height: 500,
    colors: {
        background: 'red',
        border: 'green'
    }
};
const {background, border} = options2.colors;   // деструктуризация

console.log(background);

//33 массивы и псевдомассивы.

const arr = [1, 2, 5, 65, 7, 9];

arr.pop();    //удаляет последний элемент в массиве
arr.push(133);   //добавляет элемент в конец массива

console.log(arr);

for (let value of arr) {   //перебор массива, так же можно перебрать при помощи обычного цикла, указава arr.length
    console.log(value);      //при помощи конструкции for of можем перебрать строку, массив, map и set
}

//перебор массива при помощи метода 

arr.forEach(function (item, i, arr) {
        console.log(`Индекс массива ${i} имеет значение ${item} в объекте ${arr}`);
});

//name.split(', ')  метод сформирует массив из строки
//name.join(' ; ')  метод сформирует строку из массива через ' ; ' 

console.log(arr.sort(compareNum)); //сортирует массив по первой букве, если массив чисел то нужен callback

function compareNum(a, b) {
    return a - b;
};

//35 передача по ссылке или по значению spread, клонирование объектов.
let obje = {
    a: 1,
    b: 74,
    c: {
        c1: 545,
        c2: 455
    }
};

let obje2 = {};                              
function jet(ob) {                               //поверхностная копия объекта, не копирует вложенные свойства и значения
    for (let key in ob) {                          //а оставляет ссылку.
        obje2[key] = ob[key];
    }
    return obje2;
}
console.log(jet(obje)); 

// объединение объектов при помощи метода
let obje = {
    a: 1,
    b: 74,
    c: {
        c1: 545,
        c2: 455
    }
};
let obje2 = {
    d: 54,
    f: 555,
    h: 'рп'
};
console.log(Object.assign(obje, obje2));  //поместили obje2 в obje, если будут одинаковые свойства, то они перетянутся с obje2.
const copy = Object.assign({}, obje2);  //копирование объекта.
console.log(copy);            

//клонирование массива при помощи метода slice()
const oldArray = ['fg', 'gfggg', 'fggggeee'];
const newArray = oldArray.slice();
console.log(newArray);

//создание копии при помощи спред оператора ...
let obje2 = {
    d: 54,
    f: 555,
    h: 'рп',
    g: {
        gt: 32,
        rt: 99
    }
};
let gr = {...obje2};   //так же ... работает и с массивом.
console.log(gr);

//задача 10 
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {                 //создание метода которые возвращает возраст и языки
    console.log(`Мне ${plan['age']} и я владею языками: ${plan['skills']['languages'].join().toUpperCase()}`);
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// вернуть из объекта значение exp при помощи деструктуризации.
function showExperience(plan) {
    const {exp} = plan.skills;            
    console.log(exp);
    return exp;
}
showExperience(personalPlanPeter);


//вернуть "язык изучен на", если нет свойств то вернуть пустую строку.
function showProgrammingLangs(plan) {
    let perem = '';
    if (Object.keys(plan.skills.programmingLangs).length > 0) {
    for (let key in plan.skills.programmingLangs) {
        perem += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }console.log(perem);
    }  else {
    console.log('неучь');
    return '';}

}
showProgrammingLangs(personalPlanPeter);
