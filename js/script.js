'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = +prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


//--------------------------------------

if (4 == 9) {
	console.log('Ok');
} else {
	console.log('Nit');
}





if (num < 49) {
	console.log('Uu');
} else if (num > 100) {
	console.log('So much');
} else {
	console.log('Maybe');
}

(num === 50) ? console.log('Ok') : console.log('Error');


let x = 10;
let result = x > 10 ? 'більше 10' : 'менше або дорівнює 10';
console.log(result); // виведе "більше 10"


const num = '50';

switch (num) {
case '49':
	console.log('Невірно');
	break;
case '100':
	console.log('Невірно');
	break;
case '50':
	console.log('Так');
	break;
default:
	console.log('Шкода');
	break;
}
