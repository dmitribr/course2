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

//задача 11 массивы.
//вернуть строку "Семья состоит из (перечисление из массива)"
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length === 0) {
        return `Семья пуста`;
    } else {
        let name = 'Семья состоит из:';
        for (let key of arr) {
            name += ` ${key}`;
        }
        console.log(name);
        return name;
    }
}
showFamily(family);

//вернуть свойства массива строками в нижнем регистре.
function standardizeStrings(arr) {
    let str = '';
    for (let key of arr) {
        str += `${key.toLowerCase()}\n`;
        console.log(str);
    }
}
standardizeStrings(family);

//задача 12
//перевернуть строку и вернуть.
const someString = '!акбишо';

function reverse(str) {
    if (typeof(str) === 'string') {
        console.log(str.split('').reverse().join(''));
    } else {
        console.log('ошибка');
        return 'Ошибка';
    }
}
reverse(someString);

//вернуть доступные валюты,выбирая из двух разных массивов. первый аргумент массив валют, второй аргумент отсутсвующие валюты.
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let der = [...baseCurrencies, ...additionalCurrencies];
function availableCurr(arr, missingCurr) {
        let volume = 'Доступные валюты:';
        if (arr.length === 0) {
            return 'Нет доступных валют';
        } for (let key of arr) {
            if (key !== missingCurr) {
                volume += `\n${key}`;
            } 
        }
        console.log(volume);

}
availableCurr(der, 'RUB');

//36 ООП. прототипно ориентированное программирование
const solder = {
    head: 100,
    body: 100
};
const lastSolder = Object.create(solder);   //создание прототипа. 
console.log(lastSolder.body);

const solder2 = {};
Object.setPrototypeOf(solder2, lastSolder);    //можно создавать прототип при помощи такой конструкции
console.log(solder2.body);

//37 
//задача 13. рассчитать хватит ли тороговому центру бюджета на оплату отопления. 
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let sum = 0;
    for (let i = 0; i < data.shops.length ; i++) {
        sum += data.shops[i].width * data.shops[i].length;
    }
    sum = data.budget / (sum * data.height * data.moneyPer1m3);
    (sum >= 1) ? console.log('Бюджета достаточно') : console.log('Бюджета недостаточно');
};
isBudgetEnough(shoppingMallData);

//задача 14 отсортировать и распределить 3 команды по 3 человека, остальных выписать в строку
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
let group = [[],[],[], 'Оставшиеся студенты:'];

function sortStudentsByGroups(arr) {
    let mass = arr.sort();
    let j = 0;
    for (let i = 1 ; i <= 3 ; i++) {
        for (j ; j < i * 3 ; j++) {
            group[i - 1].push(mass[j]);
        }
    }
    for (let p = 0 ; p < mass.length - 9 ; p++) {
        group[3] += ` ${mass[p + 9]}`;
    }
    console.log(group);
};
sortStudentsByGroups(students);

//38 отлавливаем ошибки. Breakpoints
//39 Динамическая типизация в JS
//преобразование в string - String(); 43 + ''
//преобразование в number - Number(); parseInt('12px', 10) вторым указывается ситсема счисления; и при помощи +'32'
//преобразование в boolean - Boolean(); !!любое значение.
//40 Замыкание и лексическое окружение
//Вызов функции это каждый раз создание нового лексического окружения.

function nub() {
    let ger = 0;
    const ler = function() {          //если создать function ler(), и return ler(). не работает.
        ger = ger + 1;
        return ger;
    }
    return ler;
}
const rer = nub();
let a1 = rer(); let a2 = rer(); let a3 = rer();
console.log(a1, a2, a3);

//41 Задачи.
// задача 15 Дебаг
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

//проверить открыт ли ресторан
function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}
console.log(isOpen(restorantData.openNow));

//рассчитать средний чек
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price, 10) + parseInt(sDish.price, 10) < parseInt(average, 10)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0],
                                    restorantData.menu[1],
                                    restorantData.averageLunchPrice));

//создание копии объекта и новых значений.
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

//42 получение элеменов со страницы
//старые методы
document.getElementById('nameID');
document.getElementsByClassName('nameClass'); //создаёт протатип массива, нельзя обратиться на прямую
document.getElementsByTagName('button');  //создаёт протатип массива.
//современные
let name1 = document.querySelectorAll('.className')  //получим псевдомассив. нужно указывать . или при id #
name1.forEach(item => {        //пробежимся по массиву (перебор).
    console.log(item);
});
document.querySelector('#id');  // получим 1 элемент

//43 действия с элементами на странице.
const hr = document.getElementById('nameID');
hr.style.backgroundColor = 'red';
hr.style.width = '120px';
//или
hr.style.cssText = 'text-align = center; color: blue';

const hrw = document.getElementsByClassName('nameClass');
hrw[2].style.borderRadius = '10%';                       //так как элементов несколько обращаемся по индексу

hrw.forEach(item => {                                    //перебор всего псевдомассива и присваевание к каждому элементу css
    item.style.cssText = 'font-size: 20px;';
})

const div = document.createElement('div');    //создали элемент
div.classList.add('black');       //добавили класс элементу 
document.body.append(div);    //добавляем наш элемент в конец html.
document.querySelector('.grid').append(div); //добавление в определённый класс на html, prepend в начала класса.

hrw[1].after(div);  //добавление после определённого элемента, before до элемента
hrw[0].remove(); //удаление

hrw[4].replaceWith(hrw[2]);  //заменить один элемент на другой
wrpper.insertBefore(div, hrw[0]); //старая запись. первый аргумент это то что нужно добавить, второй перед каким элементом

div.innerHTML = '<h1>Привет</h1>';
div.textContent = 'Просто текст';
div.insertAdjacentHTML('afterbegin', '<h2>текст</h2>');  //добавление html. 1 аргумент куда будем добавлять.

//45 события и их обработчики
const but = document.querySelector('button');           //если SelectorAll это псевдомассив, вешать обработчик событий
but.addEventListener('mouseenter', (event) => {         //через but.forEach(buts => {but.addEventListener('click', функция)});
    console.log('Привет');
});

//или
let i = 0;
const even = (e) => {                  //создаём отдельно функцию. e - это событие.
    console.log(e.target);
    i++;
    if (i == 2) {
        but.removeEventListener('click', even);     //если нажали два раза то обработчик событий удаляется
    }
}

but.addEventListener('click', even, false);   //3 аргумент это опция, например {once: true} - обработчик событий выполнится только 1 раз

//работа с ссылкой и отмена перехода по ней
const  link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();          //отменяем переход по ссылке
    console.log(event.type);     //выведем тип события
});

//46 навигация по дом
//47 рекурсия
//возведение в степень обычная функция.
function pow1(x, n) {
    let res = 1;
    for (let i = 0 ; i < n ; i++) {
        res *= x;
    } console.log(res);
}
pow1(0, 5);

function pow(x, n) {
    if (n === 1) {
        
        return x;
    } else { 
    return x * pow(x, n - 1);   //метод рекурсии, когда внутри функции вызывается сама функция.
    } 
};
console.log(pow(2, 4));

//пример из курса
const students = {
    js: [{
       name: 'John',
       progress: 100
    }, {
       name: 'Ivan',
       progress: 60
    }],
  
    html: {
       basic: [{
          name: 'Peter',
          progress: 20
       }, {
          name: 'Ann',
          progress: 18
       }],
  
       pro: [{
          name: 'Sam',
          progress: 10
       }],
  
       semi: {
          students: [{
             name: 'Test',
             progress: 100
          }]
       }
    }
 };
  
 function getTotalProgressByIteration(data) {
    if (Array.isArray(data)) {
       let total = 0;
          for (let i = 0 ; i < data.length ; i++) {
            total += data[i].progress;
            return [total, data.length];
          }
       } else {
            let total = [0, 0];
            for (let key of Object.values(data)) {
                let tr = getTotalProgressByIteration(key);
                total[0] += tr[0];
                total[1] += tr[1];
            } 
                return total;
     }   
    }
    
 
  

 console.log(getTotalProgressByIteration(students));

//задача 16
//выполнить рекурсию вычеслив факториал
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else if (typeof(n) !== 'number' || n % 1 !== 0) {
        return 'не число';
    } else {
        return n *(factorial(n - 1));
    }
    
}
console.log(factorial(4));

//48 практика
//49 события на мобильных устройствах
//touchenter срабатывает как только палец скользил и дошёл до элемента
//touchleave срабатывает когда палец скользил и ушёл за пределы обрабатываемого элемента
//touchcancel когда палец окжается за пределами приложения
window.addEventListener('DOMContenrLoaded'), () => {        //ждём пока страница загрузится
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {             //touchstart срабатывет при касании к объекту
        e.preventDefault();
        console,log('start');
    });

    box.addEventListener('touchmove', (e) => {             //touchmove срабатывет при движении пальца на объекте
        e.preventDefault();
        console,log('move');
    });

    box.addEventListener('touchend', (e) => {             //touchend срабатывет как только палец оторвался от объекта
        e.preventDefault();
        console,log('end');
    })
}
//touches, targetTouches, changedTouches число пальцев на элементе

//50 Async, defer, динамические скрипты
//defer загружает js в фоновом режиме, и когда DOM загрузится полностью, запускает js
//acynct загружается и запускается в фоновом режиме не дожидаясь загрузки DOM дерева.
<html>
    <script defer src="js/jsscript.js"></script>
    <script async src="js/jsscript.js"></script>
</html>
//динамические встраиваются в js файл
function addjs (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
addjs('js/jsscripts.js');



//РАЗДЕЛ 3 дополнительные основы
//53 Оепратор нулевого слияния (Nullish, ??)
//оператор ?? реагирует только на Null и undefined, остальные значения будут true
//в остальном работает как оператор или ||
let rest1;
let frend = 0;
console.log(rest1 ?? frend ?? 'Defolt');

//54 Оператор опциональной цепочки ?.
//проверят существет ли элемент и возвращает undefined, но не ошибку
const users = {
    name: 'Het',
    age: 44,
    lastName: 0,
    city: (e) => {
        return `${users.name} is liven ${e}`;
    }
}
console.log(users.city('Moscow'));
console.log(users.go?.());          //вернёт undefined

//55 Живые коллекции и полезные методы
const tot3 = document.querySelectorAll('.box');  //статические коллекции, показывает коллекцию на момент того как она была вызвана
const tot2 = document.getElementsByClassName('box'); //живые коллекции, формируется после выполнения метода

//56 Symbol - скрытые при обычном доступе свойства
const sym = {
    name: 'RR',
    age: 31,
    [Symbol['id']]: 34343
}
console.log(sym['id']);    //в консоль вернёт undefined

for ( let key in sym) {
    console.log(key);       //при переборе клчей объекта Symbol id вернёт как undefined
}

//57 дескрипторы свойств (атрибуты - фланги)
//writable  - если значение true то свойство в объекте можно будет изменеть, false нет
//enumerable - если true то своство будет перечилсяться в циклах, если false то нет
//configurable - если ture то свойство можно удалить, а атрибуты можно изменить, если false - нет
console.log(Object.getOwnPropertyDescriptor(sym, 'age')); //чтобы вывести в консоль значение атрибутов

Object.defineProperty(sym, 'name', {writable: false});  //изменение значения атрибута writable

Object.defineProperty(sym, 'gender', {value: 'male'});  //создание нового свойства в объекте, при таком создании
//все атрибуты создаваемого свойства будут со значением false (если их не указать изначально), при обычном создании объекта
//его свойств и значений все атрибуты будут со значением true

//58 Итерируемые конструкции
//конструкции for of перебирают значения, но не может быть применена к объекту.
//конструкция for in переберает свойства объекта.

//59 Map()

const shopd = [
    {apple: 5},
    {oil: 8},
    {bread: 9}
];

const newMap = new Map();   //создаём карту

newMap.set(shopd[0], 500)     //добавляем значения, объекты из масива shopd становаться ключами
        .set(shopd[1], 340)
        .set(shopd[2], 110);

console.log(newMap);

const plus = [500, 340, 110];

shopd.forEach((shop, i) => {        //если значений много, то можно восполльзоваться перебором forEach
    newMap.set(shop, plus[i]);
})
console.log(newMap);
console.log(newMap.get(shopd[0])); //при помощи get можно получить значение
console.log(newMap.has(shopd[5])); //has проверяем существует ли данный объект, вернуть true или false
// newMap.delete(key);  удаление определённого ключа у карты
// newMap.clear();      очистить карту
//newMap.size;          сколько элементов имеет данная карта

const newMap2 = new Map([       //добавляем значение в map, значения в карте это массив с массивами.
        [{peper: 300}, 800 ]
]);

for (let i of newMap.keys()) { //с помощью keys мы можем получить все ключи у map
    console.log(i);
}

for (let i of newMap.values()) { //с помощью values узнаем значение ключей в map
    console.log(i);
}

for (let i of newMap.entries()) { //перечилсяет в отдельных массивах [ключ, значени]
    console.log(i);
}

newMap.forEach((key, value, map) => {   //перебираем карту при помощи forEach
    console.log(key, value);
})

const objectMap = new Map(Object.entries(user)); //саздаём из объекта user карту
const newObjUser = Object.fromEntries(objectMap); //превращает карту в обычный объект

//60 Set() особый вид коллекци по типу массива с уникальными значениями

const mass = [1, 1, 3, 5, 4, 7, 7];

const setMass = new Set(mass);
console.log(setMass);              //будет иметь только уникальнеые значения

setMass.add(9).add(22);     //добавление новых значений

// setMass.delete(9);      удаление значения
// setMass.has(3);     проверять имеется ли данное значение
// setMass.clear();    очистить set
// setMass.size;       узнать количество значений

setMass.forEach((value, valueAgaing, set) => {      //перебор сета
    console.log(value, valueAgaing);
})

for (let value of setMass) {
    console.log(value);
}

console.log(setMass.values());  //отобразит все значения

function Arr(arr) {
    return Array.from(new Set(arr));  //функция для фильтрации массивов, возвращает массив с уникальными значениями
}

//61 BigInt взаимодействия с большими числами
//bigint нельзя смешивать с другими типами, так же нельзя воспользоваться методами Math
const big = 2184239748748377777433266856836573674367n;          //создание bigint двумя способами.
const big2 = BigInt(18423485899498547774367);
console.log(big, big2);

//задача 17
//Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
function amountOfPages(summary){
    let sum = 0;
    for (let i = 0; i <= summary; i++) {
        sum += String(i).length;
        if (sum > summary) {
            console.log(i);
            break;
        }
    }
}
amountOfPages(9);

//задача 18
//Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение.
//Если строка является панграммой - вернется true, если нет - false.
function isPangram(string) {
    let setStr = new Set(string.toLocaleLowerCase().split('').sort());
    let en = [' ', 'a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q',
                'r', 's', 't', 'u', 'v', 'w',
                'x', 'y', 'z']
    console.log(Array.from(setStr).toString() ===  en.toString());
}
isPangram('The quick brown fo');

//задача 19
//Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы.
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++)
    if (Array.isArray(a[i])) {
        count += deepCount(a[i]);
    }
    return count;
}
console.log(deepCount([32, 3, 43, [45, [4]]]));

//63 ClassList и делегирование событий
const btn = document.querySelectorAll('button');

console.log(btn[0].classList.length);  //покажет количество классов
console.log(btn[0].classList.item(1));  //item получает класс под определённым индексом
console.log(btn[2].classList.add('red'));   //добавит класс
console.log(btn[0].classList.remove('blue'));   //удалит класс
console.log(btn[0].classList.toggle('green'));  //проверит есть ли такой класс, если есть то удалит, если нет то добавит.

if (btn[2].classList.contains('red')) {        //проверяем имеет ли объект данный класс
    console.log('red');         
}

btn[0].addEventListener('click', () => {
    if (!btn[2].classList.contains('red')) {        //если данного класса нет
        console.log(btn[2].classList.add('red'));      //то добавлем его.
    } else {                                            //можно сделать через btn[0].classList.toggle('red')
        console.log(btn[2].classList.remove('red'));
    }
})
//обработчик событий
const wrapper = document.querySelector('.btn');  //доступ к div с множеством кнопок
wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == 'BUTTON') {  //если элемент существует, и тег равен BUTTON
        console.log('hello button');
    }
    if(event.target && event.target.classList.contains('red')) {   //если элемент существует и его класс red
        console.log('Hello red');
    }
})