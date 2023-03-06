// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

// если использовать Set то это супер просто
function unique(arr) {
  return Array.from(new Set(arr));
}
// или так
function unique(arr) {
  return arr.filter((item, index, array) => index === array.indexOf(item));
}

// или добавлять элементы в новый массив предварительно проверяя нет ли там такого же значения
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
