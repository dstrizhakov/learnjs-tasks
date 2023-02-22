if ("0") {
  alert( 'Привет' );
}

//Выведется ли alert? // -да

let answer = prompt('Какое «официальное» название JavaScript?', '')

if (answer === 'ECMAScript') {
	alert('Верно!')
} else {
	alert('Не знаете? ECMAScript!')
}

///------------------
let value = prompt('Введите число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//--------------
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = a + b < 4 ? 'Мало': 'Много';

//--------------
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = (login == 'Сотрудник') ? 'Привет'
					: (login == 'Директор') ? 'Здравствуйте'
					: (login == '') ? 'Нет логина'
					:	''