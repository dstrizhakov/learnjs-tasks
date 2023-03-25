
//==================== пример асинхронного генератора =================

/*функция-генератор, параметр count - кол-во запросов*/
async function* generator(count) {
  for (let index = 1; index < count; index++) {
/*делаем запрос на сервер*/
    let responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`);
/*получаем результат в json формате*/
    let data = await responce.json();
/*возвращаем результат запроса*/
    yield data;
        
  }
}
(async() => {
  let gen = generator(34);
/*перебираем генератор и получаем все значения*/
  for await (const iterator of gen)
  {
/*выводим полученные данные*/
    console.log(`Id:${iterator.id}\nValue:${iterator.title}\n\nFuncCompleted${iterator.completed}`);
  }
})();

