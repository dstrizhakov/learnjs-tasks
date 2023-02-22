// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат? // ?рузультат undefined

// ?вот так будет работать так как вернем текущий объект this
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

alert(user.ref().name); // John
