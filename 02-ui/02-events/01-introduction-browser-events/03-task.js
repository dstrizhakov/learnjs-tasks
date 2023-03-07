button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// будет выполнены оба обработчика alert("1") и alert(2)
// так как мы не удалили первый обработчик
