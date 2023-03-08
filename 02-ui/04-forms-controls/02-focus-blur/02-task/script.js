let table = document.getElementById("bagua-table");

table.addEventListener("click", editTd);

function editTd(event) {
  let td = event.target.closest("td");
  if (!td) return;

  let coords = td.getBoundingClientRect();

  //удаляем слушатель чтобы игнорировать повторые клики
  table.removeEventListener("click", editTd);
  // создадим textarea c такими же размерами как и ячейка td
  const textarea = document.createElement("textarea");
  textarea.classList.add("edit");
  textarea.style.width = td.offsetWidth + "px";
  textarea.style.height = td.offsetHeight + "px";
  textarea.value = td.innerHTML;

  td.replaceWith(textarea);
  textarea.focus();

  // Добавим кнопки
  let actions = document.createElement("div");
  actions.className = "actions";
  let ok = document.createElement("button");
  let cancel = document.createElement("button");
  ok.innerText = "OK";
  cancel.innerText = "CANCEL";

  actions.append(ok);
  actions.append(cancel);
  actions.style.left = coords.left + "px";
  actions.style.top = coords.bottom + "px";

  document.body.append(actions);

  actions.addEventListener("click", action);

  function action(event) {
    if (event.target !== ok && event.target !== cancel) return;
    if (event.target === ok) {
      td.innerHTML = textarea.value;
    }
    textarea.replaceWith(td);
    table.addEventListener("click", editTd);
    actions.remove();
  }
}
