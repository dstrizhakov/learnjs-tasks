// Можно ли "перевыполнить" промис?
// Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1); // ?сразу вернет этот resolve

  setTimeout(() => resolve(2), 1000); //! будет проигнорирован
});

promise.then(alert);