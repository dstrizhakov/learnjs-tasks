// Преобразуйте объект в JSON, а затем обратно в обычный объект
// важность: 5
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35,
};

let jsonUser = JSON.stringify(user);

console.log(typeof jsonUser); // String

let userCopy = JSON.parse(jsonUser);

console.log(typeof userCopy); // Object
