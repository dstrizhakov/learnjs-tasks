// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let max = 0;
  let nameTopSalary = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      nameTopSalary = name;
      max = Math.max(max, salary); // тут конечно Math.max лишний... можно просто max = salary;
    }
  }
  return nameTopSalary;
}

console.log(topSalary(salaries));
