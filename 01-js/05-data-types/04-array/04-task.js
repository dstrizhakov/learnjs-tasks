// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let arr = [];
  let number;
  for (;;) {
    number = prompt("Введите число", "");
    //условие выхода
    if (number === null || number === "" || !isFinite(number)) break;
    arr.push(+number);
  }
  return arr.reduce((acc, num) => acc + num);
}