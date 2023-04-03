'use strict';


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
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count > 30) {
			alert('Вы киноман');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель');
		} else {
			alert('Произошла ошибка');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
				b = +prompt('На сколько оцените его?', '');
				
			if (a != null && b != null && a != '' && b != '' && a.length < 51) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('Error');
				i--;
			}
		}
	},
	writeYourGenres: function() {
		for (let i = 0; i < 1; i++) {
			/* 			const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '').trim();
			if (genre != null && genre != '' && genre.length < 51) {
				personalMovieDB.genres[i] = genre;
				console.log('Добре');
			} else {
				console.log('Ви ввели некоректні дані або не ввели нічого');
				i--;
			} */

			let genre = prompt('Введіть ваші найулюбленіші жанри через кому', '').toLowerCase().trim();
			if (genre != null && genre != '' && genre.length < 51) {
				personalMovieDB.genres = genre.split(', ');
				personalMovieDB.genres.sort();
				console.log('Добре');
			} else {
				console.log('Ви ввели некоректні дані або не ввели нічого');
				i--;
			}
		}
		personalMovieDB.genres.forEach ((item, i) => {
			console.log(`Любимый жанр ${i+1} - это ${item}`);
		});
	},
	ShowMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false; 
		} else {
			personalMovieDB.privat = true;
		}
	}
}; 








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


/* function first() {
	//do something
	setTimeout(function() {
		console.log(1);
	}, 500);
}


function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`I learn: ${lang}`);
	callback();
}

function done() {
	console.log('I finish this lesson');
}

learnJS('Java Script', done); */


/* 

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('Test');
	}
};

options.makeTest();

console.log(Object.keys(options)); */

/* console.log(options['colors']['border']); */ 

/* const {border, bg} = options.colors;
console.log(border); */


/* console.log(options.name);

delete options.name;

console.log(options); */


/* let counter = 0;

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Властивість ${i} має значення ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Властивість ${key} має значення ${options[key]}`);
		counter++;
	}	
}
console.log(counter); */







/* const arr = [5, 11, 17, 33, 57];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
	return a - b;
} */
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} всередині массиву ${arr}`);
});


for (let value of arr) {
	console.log(value);
}

arr.pop();

console.log(arr);

arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} */





/* const str = prompt('', '');
const products = str.split(', ');
console.log(products);
console.log(products.join('; ')); */


/* 

let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);






const obj = {
	a: 5,
	b: 1
}; */

/* const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};


const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers); 
console.log(numbers);


const add = {
	d: 17,
	e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;

console.log(clone);
console.log(add);





const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asdfghjkl';
console.log(newArray);
console.log(oldArray);



const video = ['youtube', 'vimeo', 'patreon'],
		blogs = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blogs, 'facebook', 'instagram'];

console.log(internet);


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);


const arr = ['a', 'b'];
const newArr = [...arr];
newArr[1] = 'bazuka';
console.log(newArr);
console.log(arr);


const q = {
	one: 1,
	two: 2
};
const newObj = {...q}; */



/* let str = 'some';
let strObj = new String(str);

console.dir ([1, 2, 3]);


const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('hello');
	}
};

const john = Object.create(soldier);

console.log(john.armor);
john.sayHello();




const auto = {
	speed: 100,
	mass: 1000,
	doorsValue: 4,
	baggageComp: true
};


const shcoda = Object.create(auto);
console.log(shcoda.mass); */
