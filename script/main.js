"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const userQuest = ["Сколько фильмов Вы уже посмотрели?", 
"Один из последних просмотренных фильмов?", 
"На сколько оцените его?"];

// const userQuestDo = []
let lastFilm = "";

for(let i = 0; i < userQuest.length; i++){
  if (i === 0 ) {
    personalMovieDB.count = +prompt(
      userQuest[i],
      "Введите число");
    console.log(personalMovieDB.count);
  } else if(i === 1){
      lastFilm = prompt(userQuest[i]);
    } else if ( i === 2 ){
      personalMovieDB.movies[`'${lastFilm}'`] = prompt(userQuest[i]);
    } else {break;} 
  
}

// numberOfFilms = +prompt(
//   "Сколько фильмов Вы уже посмотрели?",
//   "Введите число"
// );

// let lastFilm = prompt("Один из последних просмотренных фильмов?");
// personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");

console.log(personalMovieDB);
