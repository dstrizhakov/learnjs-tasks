// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age
// и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// через forEach
function getAverageAge(arr) {
  let avg = 0;
  arr.forEach((user) => {
    avg += user.age;
  });
  return avg / arr.length;
}

//или через reduce
function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}
