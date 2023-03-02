/*
Вычислить факториал
важность: 4
Факториал натурального числа – это число, умноженное на "себя минус один", 
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

// рекурсивное решение
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(3) === 6);
console.log(factorial(4) === 24);
console.log(factorial(5) === 120);

// решение через цикл будет работать быстрее
function factorialFor(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialFor(1) === 1);
console.log(factorialFor(2) === 2);
console.log(factorialFor(3) === 6);
console.log(factorialFor(4) === 24);
console.log(factorialFor(5) === 120);
