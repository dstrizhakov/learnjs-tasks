/*
Связанная функция как метод
важность: 5
Что выведет функция?
*/

"use strict";
function f() {
  console.log(this);
  alert(this);
  // ? Возвращает обьект global в nodejs и Window в браузере
  // ? хотя в учебнике написано, что должны получить null
  // ? так происходит из-за того, что я проверял без "use strict"
}

let user = {
  g: f.bind(null),
};

user.g();
