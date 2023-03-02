/*
Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
*/
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
/*
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без? //?решение через цикл мне нравится больше...
*/

// ?решение с рекурсией
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);

// ?решение через цикл:
function printListFor(list) {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
printListFor(list);

/*
Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания 
Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

// ?решение с рекурсией
function printRevList(list) {
  if (list.next) {
    printRevList(list.next);
  }
  console.log(list.value);
}
printRevList(list);

// ?решение через цикл:
function printRevListFor(list) {
  let current = list;
  let arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  arr.reverse().forEach((element) => console.log(element));
}
printRevListFor(list);
