// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";

function ucFirst(string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
}
