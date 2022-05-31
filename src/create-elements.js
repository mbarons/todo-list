function createElement(type, className, id, text) {
  let element = document.createElement(type);
  element.classList.add(className);
  element.setAttribute("id", id);
  element.innerHTML = text;

  return element;
}

export {createElement};