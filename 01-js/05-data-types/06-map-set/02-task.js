// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются
//  в другом порядке.
// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let mapKey = word.toLowerCase().split("").sort().join("");
    map.set(mapKey, word);
  }
  return Array.from(map.values());
}

// можно решить через Set
function aclean(arr) {
  let set = new Set();
  let result = [];
  for (let word of arr) {
    let setValue = word.toLowerCase().split("").sort().join("");
    if (!set.has(setValue)) result.push(word);
    set.add(setValue);
  }
  return result;
}