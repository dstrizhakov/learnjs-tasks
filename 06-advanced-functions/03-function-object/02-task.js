/*
Сумма с произвольным количеством скобок
важность: 2
Напишите функцию sum, которая бы работала следующим образом:
*/
//P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

function sum(a) {
  sum.result = sum.result || 0;
  sum.result += a;
  sum.toString = function () {
    const result = sum.result;
    sum.result = 0;
    return result;
  };
  return sum;
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15

// todo: предыдущий sum.result не обнуляется, console.log выводит функцию как объект

function decorator(func) {
  return (val) => func.call(this, String(val));
}
let console_log = decorator(console.log);

console_log(sum(1)(2)); // 3
console_log(sum(5)(-1)(2)); // 6
console_log(sum(6)(-1)(-2)(-3)); // 0
console_log(sum(0)(1)(2)(3)(4)(5)); // 15
