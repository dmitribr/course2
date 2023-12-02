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

but.addEventListener('click', even, false);   //3 аргумент это опция, например {one: true} - обработчик событий выполнится только 1 раз

//работа с ссылкой и отмена перехода по ней
const  link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();          //отменяем переход по ссылке
    console.log(event.type);     //выведем тип события
});
