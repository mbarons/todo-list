import { createElement } from "./create-elements";

let addTaskPlusSign = createElement(
  "div",
  "add-task",
  "",
  "<span class='plus-sign'>+</span> Add Task"
);
let tasksDinamicContainer = createElement("div", "tasks-container", "", "");

export { addTaskPlusSign, tasksDinamicContainer };
