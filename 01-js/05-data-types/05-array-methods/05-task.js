// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let tempArr = arr;
  return tempArr.sort((a, b) => a.localCompare(b)); // return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
