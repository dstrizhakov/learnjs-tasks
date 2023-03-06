// createTextNode vs innerHTML vs textContent
// важность: 5
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text)); //? добавляет текст в конец элемента
elem.innerHTML = text; //? добавляет текст как HTML в элемент
elem.textContent = text; //? добавляет текст в элемент

//? 1 и 3 делают одно и то же, так как elem по условию пустой
// ? 2 вставит как HTML
