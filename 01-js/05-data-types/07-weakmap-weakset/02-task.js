// Хранение времени прочтения
// важность: 5
// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для
// хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
// Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении
// «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые
// мы разберём позднее.

// так как кроме статуса прочтено/не прочтено нужно хранить какие-то данные используем WeakSet

let readDate = new WeakMap();

readDate.set(messages[0], Date.now());

// запишем данные в WeakSet с задержкой для наглядности
timeout = setTimeout(() => {
  readDate.set(messages[1], Date.now());
}, 100);

timeout = setTimeout(() => {
  readDate.set(messages[2], Date.now());
}, 200);

timeout = setTimeout(() => {
  messages.splice(0, 2); // удалим два сообщения
}, 300);

setTimeout(() => {
  console.log(`Сообщение 0 прочтено: ${readDate.get(messages[0])}`); // date
  console.log(`Сообщение 1 прочтено: ${readDate.get(messages[1])}`); // date
  console.log(`Сообщение 2 прочтено: ${readDate.get(messages[2])}`); // date
}, 250);

setTimeout(() => {
  console.log(`Сообщение 0 прочтено: ${readDate.get(messages[0])}`); // date
  console.log(`Сообщение 1 прочтено: ${readDate.get(messages[1])}`); // undefined
  console.log(`Сообщение 2 прочтено: ${readDate.get(messages[2])}`); // undefined
}, 350);
