'use strict';



/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами */

  


/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30) {
	alert('Вы киноман');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else {
	alert('Произошла ошибка');
}

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
console.log(personalMovieDB);
*/

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

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	num = 20;
}

showFirstMessage('Hello Oleksii');
console.log(num);











