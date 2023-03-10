/*
Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. 
То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 
1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) {... }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) 
должен занимать не более доли секунды.
*/

// ?Для скорости лучше использовать цикл
function fib(n) {
  if (n < 1) return null;
  let [prev, current] = [0, 1];
  for (let i = 1; i < n; i++) {
    [prev, current] = [current, prev + current];
  }
  return current;
}

console.log(fib(1), " === 1", fib(1) === 1);
console.log(fib(2), " === 1", fib(2) === 1);
console.log(fib(3), " === 2", fib(3) === 2);
console.log(fib(7), " === 13", fib(7) === 13);
console.log(fib(77), " === 5527939700884757", fib(77) === 5527939700884757);
console.log(
  fib(1000),
  " === 4.346655768693743e+208",
  fib(1000) === 4.346655768693743e208
);

// ?рекурсивный метод, на 77 вешает мой ноут:
function recFib(n) {
  return n <= 1 ? n : recFib(n - 1) + recFib(n - 2);
}
console.log(recFib(3), " === 2", recFib(3) === 2);
console.log(recFib(7), " === 13", recFib(7) === 13);
console.log(recFib(40), " === 102334155", recFib(40) === 102334155);
