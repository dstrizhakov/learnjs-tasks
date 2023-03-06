/*
Добавьте функциям декорирующий метод "defer()"
важность: 4
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:
*/
// Function.prototype.defer = function (ms) {
//   let func = this;
//   // return function () {
//   //   setTimeout(() => func.apply(this, arguments), ms);
//   // };
//   //или можно передать аргуметны через setTimeout:
//   return function () {
//     setTimeout(func, ms, ...arguments);
//   };
// };
// или так(стрелочная функция не имеет this и внутри setTimeout он не теряется):
Function.prototype.defer = function (ms) {
  return (...args) => setTimeout(this, ms, ...args);
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
//Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
