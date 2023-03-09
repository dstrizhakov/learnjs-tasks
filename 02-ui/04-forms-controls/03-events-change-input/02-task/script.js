const show = document.querySelector(".show");
show.addEventListener("click", () =>
  showPrompt("Введите что-нибудь... еще", function (value) {
    alert(value);
  })
);

const container = document.getElementById("prompt-form-container");
const form = document.getElementById("prompt-form");
const message = document.getElementById("prompt-message");

showPrompt("Введите что-нибудь...", function (value) {
  alert(value);
});

function showPrompt(html, callback) {
  document.body.style.overflow = "hidden";
  container.style.display = "block";
  container.style.backgroundColor = "rgba(0, 0, 0, .1)";
  message.innerHTML = html;
  form.text.focus();

  form.addEventListener("click", clickHandler);
  document.addEventListener("keydown", keyDownHandler);

  function clickHandler(e) {
    const target = e.target;

    e.preventDefault();

    const okBtn = form.querySelector('[type="submit"]');
    const text = form.text.value;

    if (target === okBtn && text) {
      callback(`Вы ввели: ${text}`);
      hidePrompt();
    }

    if (target === form.cancel) {
      callback(`Вы ввели: ${null}`);
      hidePrompt();
    }
  }

  function keyDownHandler(e) {
    if (e.code === "Escape") {
      callback(`Вы ввели: ${null}`);
      hidePrompt();
    }
  }

  const firstElem = form.elements[0];
  const lastElem = form.elements[form.elements.length - 1];

  lastElem.addEventListener("keydown", tabHandler);

  function tabHandler(e) {
    if (e.code === "Tab" && !e.shiftKey) {
      e.preventDefault();
      firstElem.focus();
    }
  }

  function hidePrompt() {
    container.style.display = "none";
    document.body.style.overflow = "auto";
    form.removeEventListener("click", clickHandler);
    document.removeEventListener("keydown", keyDownHandler);
    lastElem.removeEventListener("keydown", tabHandler);
  }
}
