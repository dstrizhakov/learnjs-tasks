// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения
// сегодняшней даты.

// всего секунд в сутках 24*3600 и задача сводится к вычитанию (всего секунд) - (прошло секунд)
function getSecondsToTomorrow() {
  let now = new Date();
  let seconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  return 24 * 3600 - seconds;
}

setInterval(() => {
  console.log(getSecondsToTomorrow());
}, 1000);
