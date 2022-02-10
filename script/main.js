"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


// 1. Сколько фильмов Вы уже просмотрели? + 3. Проверка на киномана

personalMovieDB.count = +prompt(
  "Сколько фильмов Вы уже посмотрели?",
  "Введите число");

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов...");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert ("Вы киноман однако :)");
} else {
  alert("Произошла ошибка :(");
}

// 1.2. Автоматизация вопросов

let cyclesNum = +prompt("Сколько фильмов Вы хотите оценить?");

for (let i = 1; i <= cyclesNum; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?");
  personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");
}



// const userQuestDo = []
// let lastFilm = "";

// for(let i = 0; i < userQuest.length; i++){
//   if (i === 0 ) {
   
//     console.log(personalMovieDB.count);
//   } else if(i === 1){
//       lastFilm = prompt(userQuest[i]);
//     } else if ( i === 2 ){
//       personalMovieDB.movies[`'${lastFilm}'`] = prompt(userQuest[i]);
//     } else {break;} 
  
// }

// numberOfFilms = +prompt(
//   "Сколько фильмов Вы уже посмотрели?",
//   "Введите число"
// );

// let lastFilm = prompt("Один из последних просмотренных фильмов?");
// personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");

console.log(personalMovieDB);
