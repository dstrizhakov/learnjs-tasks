/*
Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

// ?Используя setInterval:
function printNumbersInterval(from, to) {
  let count = from;
  const intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > to) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printNumbersInterval(5, 10);

// ?Используя рекурсивный setTimeout:
function printNumbersTimeout(from, to) {
  let count = from;
  const timeoutId = setTimeout(function run() {
    console.log(count);
    count++;
    if (count > to) {
      clearTimeout(timeoutId);
    } else {
      setTimeout(run, 1000);
    }
  }, 1000);
}

printNumbersTimeout(5, 10);

// чтобы обрать первую задержку в 1с нужно запускать таймер так:
function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);
