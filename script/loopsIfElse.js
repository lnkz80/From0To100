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
  alert ("Вы классический зритель!");
} else {
  alert("Вы киноман однако :)");
}

// 1.2. Автоматизация вопросов

let cyclesNum = +prompt("Сколько фильмов Вы хотите оценить?");

for (let i = 1; i <= cyclesNum; i++) {

  const lastFilm = prompt("Один из последних просмотренных фильмов?"),
        lastFilmRate = prompt("На сколько оцените его?");  
  
  if (lastFilm == "" || lastFilmRate == ""){
    alert("Строка пустая."); 
    i--;
    continue;   
  } else if (lastFilm.length > 50){
    alert("Строка содержит больше 50 символов.");
    i--;
    continue;
  } else if (lastFilm == null || lastFilmRate == null){
    alert("Нельзя нажимать кнопку 'Отмена'");
    i--;
    continue;
  }
  personalMovieDB.movies[lastFilm] = lastFilmRate;
  // personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");
}

console.log(personalMovieDB);
