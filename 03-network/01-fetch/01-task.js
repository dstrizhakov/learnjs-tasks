// Мое решение:
async function getUsers(names) {
  let results = [];
  let baseUrl = "https://api.github.com/users/";

  names.forEach((name) => {
    let response = fetch(baseUrl + name).then(
      (res) => {
        return res.ok ? res.json() : null;
      },
      (req) => {
        return null;
      }
    );
    results.push(response);
  });

  return await Promise.all(results);
}

// или понравилось решение короче:
async function getUsers(users) {
  let requests = users.map((user) => {
    return fetch(`https://api.github.com/users/${user}`).then((response) =>
      response.ok ? response.json() : null
    );
  });
  return (await Promise.all(requests)).filter(Boolean);
}

// Boolean() - функция, возвращающая логические значения.
// filter(Boolean) равноценно filter(e=>Boolean(e))
// filter() в конце нужен, чтобы отсеять null-евые элементы массива requests
