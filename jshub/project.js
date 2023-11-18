'use strict'
// let numberOfFilms;

//     function start() {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//     }
// } 
// start()
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function remember() {
//     for (let i = 0 ; i < 2 ; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?').trim();
//         const b = +prompt('На сколько оцените его?');

//         if (!isNaN(b) && a != null && b != null && a !== '' && b !== '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('получилось');
//         } else {
//             console.log('ошибка');
//             i--;
//         }
//     }
// }
// remember();

// function detectPersonalLevel () {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов.');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель.');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман.');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB() {                             //2 решение showMyDB(luboe) { if (!luboe) {console.log() }}
//     if (personalMovieDB.privat === false){        //если передаётся значение false то console.log срабаотывает.
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

// function writeYouGenres() {
//         let gen;
//     for (let i = 0 ; i < 3 ; i++) {
//         gen = prompt(`Ваш любимый жанр под номером ${i + 1} ?`).trim();
//         console.log(gen);
//      if (gen == '' || gen == null || gen.length > 50 || !isNaN(gen)) {
//         console.log(i);
//         i--;
//     } else {
//         personalMovieDB.genres[i] = gen;
//         console.log(personalMovieDB.genres);
//     }}
// }
// writeYouGenres();
// console.log(personalMovieDB);

'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    }},
    remember: function() {
    for (let i = 0 ; i < 2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?').trim();
        const b = +prompt('На сколько оцените его?');

        if (!isNaN(b) && a != null && b != null && a !== '' && b !== '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('получилось');
        } else {
            console.log('ошибка');
            i--;
    }}},
    detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель.');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман.');
    } else {
        console.log('Произошла ошибка');
    }},
    showMyDB: function() {                             //2 решение showMyDB(luboe) { if (!luboe) {console.log() }}
    if (personalMovieDB.privat === false){        //если передаётся значение false то console.log срабаотывает.
        console.log(personalMovieDB);
    }},
    writeYouGenres: function() {
        let gen;
    for (let i = 0 ; i < 3 ; i++) {
        gen = prompt(`Ваш любимый жанр под номером ${i + 1} ?`).trim();
        console.log(gen);
     if (gen == '' || gen == null || gen.length > 50 || !isNaN(gen)) {
        console.log('Вы ввели не корректные данные');
        i--;
    } else {
        personalMovieDB.genres[i] = gen;
    }
}
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
},
    toggleVisibleMyDB: function() {
        (personalMovieDB.privat === false) ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    }
};

