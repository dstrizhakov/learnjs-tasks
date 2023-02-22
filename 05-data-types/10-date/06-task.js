// Сколько сегодня прошло секунд?
// важность: 5
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// текущее время это уже и так время с начала суток, просто нужно пересчитать в секунды
function getSecondsToday() {
  let now = new Date();
  let seconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  return seconds;
}

setInterval(() => {
  console.log(getSecondsToday());
}, 1000);
