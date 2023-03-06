/*
Разница между вызовами
важность: 5
Давайте создадим новый объект rabbit:
*/
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

//Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // выводит Alert "Rabbit"
Rabbit.prototype.sayHi(); // выводит Alert "undefined"
Object.getPrototypeOf(rabbit).sayHi(); // выводит Alert "undefined"
rabbit.__proto__.sayHi(); // выводит Alert "undefined"
