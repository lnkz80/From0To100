"use_strict";

// Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно
  
  // 1. Сколько фильмов Вы уже просмотрели? + 3. Проверка на киномана
  
  let numberOfFilms;
  
  function start(){
    numberOfFilms= +prompt(
        "Сколько фильмов Вы уже посмотрели?",
        "Введите число");
      while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms= +prompt(
            "Сколько фильмов Вы уже посмотрели?",
            "Введите число");
      }
  }

// start();

  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };
  
  function detectViewerLevel () {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов...");
      } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert ("Вы классический зритель!");
      } else {
        alert("Вы киноман однако :)");
      }
  }

// detectViewerLevel();   
  
  // 1.2. Автоматизация вопросов
  
function rateMyFilms(){
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
  }
  
//   rateMyFilms();

const writeYourGenres = numberOfGenres => {
    for (let i = 0; i < numberOfGenres; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
};
  
writeYourGenres(3);
  

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
showMyDB();