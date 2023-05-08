'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', '').trim();
            const b = prompt('На сколько оцените его?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;   
            } else {
                i--;
            }
        }
    },
    start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for( let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под под номером ${i + 1}`);

            if(genre === null || genre === '') {
                console.log('Некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${genre}`);
        });
    }
};