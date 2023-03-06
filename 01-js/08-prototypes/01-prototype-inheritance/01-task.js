/*
Работа с прототипами
важность: 5
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
*/

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // ? (1) true, берётся из rabbit

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) null, берётся из animal

delete animal.jumps;

alert(rabbit.jumps); // ? (3) undefined, нет ни в rabbit ни в animal
// Должно быть 3 ответа.
