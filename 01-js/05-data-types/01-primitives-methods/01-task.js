// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// 01 В момент обращения к свойству str создаётся «объект-обёртка».
// 02 В строгом режиме, попытка изменения этого объекта выдаёт ошибку.
// 03 Без строгого режима, операция продолжается, объект получает свойство test,
// но после этого он удаляется, так что на последней линии str больше не имеет свойства test.

// ?undefined в нестрогом режиме
// ?error в строгом режиме