"use_strict";
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



  const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start(){
        // this.filmCounter();
        // this.detectViewerLevel();
        // this.rateMyFilms();
        this.writeYourGenres(2);        
        // this.toggleVisibleMyDB();
        this.showMyDB();
                
    },
    filmCounter(){
        this.count= +prompt(
            "Сколько фильмов Вы уже посмотрели?",
            "Введите число");
          while(this.count == "" || this.count == null || isNaN(this.count)){
            this.count= +prompt(
                "Сколько фильмов Вы уже посмотрели?",
                "Введите число");
          }          
    },
    detectViewerLevel(){
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов...");
          } else if (this.count >= 10 && this.count < 30) {
            alert ("Вы классический зритель!");
          } else {
            alert("Вы киноман однако :)");
          }
    },
    rateMyFilms(){
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
          this.movies[lastFilm] = lastFilmRate;
          // personalMovieDB.movies[`'${lastFilm}'`] = prompt("На сколько оцените его?");
        }
      },
    writeYourGenres(numberOfGenres){
        for (let i = 0; i < numberOfGenres; i++){
            let questGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (questGenre != "" && questGenre != null){
                this.genres[i] = questGenre;
            } else {
                i--;
            }
        }
        this.genres.forEach((value, index)=>{
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    showMyDB(){
        if (!this.privat){
            console.log(this);
        }
    },
    toggleVisibleMyDB(){
        this.privat = !this.privat;
        // console.log(this.privat);        
    }
  };

  personalMovieDB.start();  