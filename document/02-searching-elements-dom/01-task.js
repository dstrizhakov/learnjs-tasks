// Как найти?…

// Таблицу с id="age-table".
let table = document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три).
let labels = table.getElementsByTagName("label");
// Первый td в этой таблице (со словом «Age»).
let firstTd = table.getElementsByTagName("td")[0];
// Форму form с именем name="search".
let form = document.getElementsByName("search")[0];
// Первый input в этой форме.
form.getElementsByTagName("input")[0];
// Последний input в этой форме.
let inputs = form.getElementsByTagName("input");
let lastInput = inputs[inputs.length - 1];
