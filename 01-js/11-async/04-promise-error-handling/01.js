// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//? нет. так как ошибка будет проброшена уже после того как промис будет исполнен


// ? а вот так ошибка будет поймана
new Promise(function (resolve, reject) {
	setTimeout(() => {
	// throw new Error("Whoops!");
	reject(new Error("Whoops!"));
	}, 1000);
	}).catch(alert);