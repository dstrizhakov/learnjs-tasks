/*
Почему наедаются оба хомяка?
важность: 5
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/

let hamster = {
  stomach: [], // "живот" прототипа был общий для двух хомяков
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [], //? добавлено свойство - "живот" хомяка speedy
  __proto__: hamster,
};

let lazy = {
  stomach: [], //? добавлено свойство - "живот" хомяка lazy
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте //? исправлено
alert(lazy.stomach); // apple
