function positionAt(anchor, position, elem) {
  let coords = anchor.getBoundingClientRect();

  if (position == "top-out") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top - elem.offsetHeight + "px";
  } else if (position == "top-in") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top + "px";
  } else if (position == "right-out") {
    elem.style.left = coords.right + "px";
    elem.style.top = coords.top + "px";
  } else if (position == "right-in") {
    elem.style.left = coords.right - elem.offsetWidth + "px";
    elem.style.top = coords.top + "px";
  } else if (position == "bottom-out") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.bottom + "px";
  } else if (position == "bottom-in") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.bottom - elem.offsetHeight + "px";
  }
}
