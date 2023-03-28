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


/* const hamburger = 5;
const fries = null;

if (hamburger && fries) {
	console.log('Yeeeh');
} else {
	console.log('lol')
}

console.log((hamburger && fries)); */


const hamburger = 1;
const fries = 3;
const cola = 2;

if (hamburger ===3 && cola === 2 || fries === 3 && cola === 2) {
	console.log('Замовляємо');
} else {
	console.log('Йдемо в інше місце');
}

console.log(hamburger >=3 && cola >=2);
console.log(fries >= 3 && cola >= 2);
console.log(hamburger ===3 && cola === 2 || fries === 3 && cola === 2);

console.log(!0);








console.log(hamburger || cola  || fries);

if (hamburger || cola  || fries) {
	console.log('Замовляємо');
} else {
	console.log('Йдемо в інше місце');
}


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0);
console.log(0 && 'lalka');


let johnReport, samReport, mariaReport = 'done';
console.log(johnReport || samReport || mariaReport);



console.log(NaN || 2  || undefined);
console.log(NaN && 2  && undefined);
console.log(1 && 2  && 3);
console.log(!1 && 2  || !3);
console.log(25 || null  && !3);


console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} else {
	console.log('Lol');
}




