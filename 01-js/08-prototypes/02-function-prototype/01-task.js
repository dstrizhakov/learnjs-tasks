/*
Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:
*/
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

//Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // ?true так как значение Rabbit.prototype было измерено после создания rabbit

// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // ?false так как значение Rabbit.prototype.eats было изменено

// Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // ?true так как rabbit.eats не удаляет метод .eats в прототипе

//Или, наконец, такой:
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ? undefined удалили Rabbit.prototype.eats (метод в прототипе)
