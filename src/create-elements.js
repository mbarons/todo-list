function createElement(type, className, id, text) {
  let element = document.createElement(type);
  element.classList.add(className);
  element.setAttribute("id", id);
  element.innerHTML = text;

  return element;
}

function loadImage(icon, className) {
  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.classList.add(className);
  return myIcon;
}

export { createElement, loadImage };
