/*
Свойство функции после bind
важность: 5
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
*/
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // ? undefined так как .bind вернет другой обьект у которого нет свойства test
