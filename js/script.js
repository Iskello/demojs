'use strict';


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

  


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/* function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count > 30) {
		alert('Вы киноман');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Вы классический зритель');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonalLevel();



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = +prompt('На сколько оцените его?', '');
			
		if (a != null && b != null && a != '' && b != '' && a.length < 51) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

rememberMyFilms(); */

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
		if (genre != null && genre != '' && genre.length < 51) {
			personalMovieDB.genres[i] = genre;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

writeYourGenres();

function ShowMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

ShowMyDB(personalMovieDB.privat);





//------------------------------------------------------------------------------------------------------------------------------------------


/* let i = 0; 

while (i < 2) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '');
		
	if (a != null && b != null && a != '' && b != '' && a.length < 51) {
		personalMovieDB.movies[a] = b;
		console.log('done');
		i++;
	} else {
		console.log('Error');		
	}
} */





/* let i = 0; 


do {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 51) {
		personalMovieDB.movies[a] = b;
		console.log('done');
		i++;
	} else {
		console.log('Error');		
	}
}
while (i < 2);  */




//--------------------------------------------------------------------------------------------------------

/* let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
}

showFirstMessage('Hello Oleksii');
console.log(num);



console.log(calc(4, 3));
console.log(calc(79, 81));


function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);
 


const logger = function() {
	console.log('anotherNum');
};
logger();



const calc = (a, b) => a + b; */


/* const usdExsHkd = 7.81;
const uahExsUsd = 40;

function convert(amount, curr1, curr2) {
	console.log(amount / curr1 * curr2 ); 
}

convert(85, usdExsHkd, uahExsUsd); */

/* const usdCurr = 40; 
const eurCurr = 41;
const discount = 0.9;

function convert(amount, curr) {
	console.log(curr * amount);
	return curr * amount;
}

let num = 500;

function promotion(result) {
	console.log(result * discount); 
}

promotion(convert(num, usdCurr))

function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return
	}
	console.log('Done')
}

test();

function doNothing() {};
console.log(doNothing() === undefined);


console.log();


const str = 'test';
const arr = [1, 15, 38];
//console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg = 'Hello world, abra kadabra';
console.log(logg.length);
console.log(logg.indexOf('kadabra'));
console.log(logg.slice(18, 26));
console.log(logg.substring(18, 26));
console.log(logg.substr(18, 7));

const num = 12.375213;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */