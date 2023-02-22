// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

// можно через цикл for in
function count(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

// вариант с преобразованием в массив и получением lenght
function countLen(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
console.log(countLen(user)); // 2

// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
