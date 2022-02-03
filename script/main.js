"use strict";

//1. "Сколько фильмов Вы уже посмотрели?"

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");

//2. Create object "personalMovieDB"

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//3.Два вопроса

let lastFilm = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");

console.log(personalMovieDB);
