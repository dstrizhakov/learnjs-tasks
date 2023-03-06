// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// вариант через Object.values и цикл for..of
function sumSalaries(salaries) {
  let summ = 0;
  for (let salary of Object.values(salaries)) {
    summ += salary;
  }
  return summ;
}

console.log(sumSalaries(salaries));

// вариант четез reduce выглядит лучше
function sumSalariesReduce(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

console.log(sumSalariesReduce(salaries));
