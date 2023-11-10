"use strict"

const obj = {
    name: "Vika",
    age: 33,
    city: "Vladivostok",
    test: {
        test2: {
            userName: "Grisha"
        }
    }
};

obj.lastName = 4544;

console.log(obj["test"].test2.userName);

//массив частный случай объекта
let arr = ["tre", "dfhf", 3, "bbb"];
console.log(arr[3]);

//task:1
const storeName = "Newshop";
const storeDescription = {
    budget: 10000,
    employees: ['Jon', 'Tom', 'Luis'],
    products: {
        apple: 145,
        orange: 98
    },
    open: true
};

//#13
//alert("no js");
//const result = confirm('why?');
//const result = prompt('Ваш возраст', '18'); //возвращает всегда строковое значение.если перед prompt поставить + то вернёт number
const result = [];

result[0] = prompt('Ваше имя');
result[1] = prompt('Ваша фамилия');
result[2] = prompt('Ваш возраст');

document.write(result);

