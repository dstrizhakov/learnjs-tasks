// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно:
// "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
alert(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00

function formatDate(date) {
  let now = new Date();
  let diff = now - date;
  let seconds = Math.floor(diff / 1000);
  let mins = Math.floor(seconds / 60);

  if (diff < 1000) {
    return "прямо сейчас";
  }
  if (seconds < 60) {
    return `${seconds} сек. назад;`;
  }
  if (mins < 60) {
    return `${mins} мин. назад;`;
  }

  // используем options в toLocaleDateString для преобразования даты к нужному виду
  let outputDate = date.toLocaleDateString("ru", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  // используем options в toLocaleTimeString для преобразования времени к нужному виду
  let outputTime = date.toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${outputDate} ${outputTime}`;
}

// console.log(formatDate(new Date(new Date() - 1)));
// console.log(formatDate(new Date(new Date() - 30 * 1000)));
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));
