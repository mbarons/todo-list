import { createElement } from "./create-elements";

let addTaskPlusSign = createElement(
  "div",
  "add-task",
  "",
  "<span class='plus-sign'>+</span> Add Task"
);
let tasksDinamicContainer = createElement("div", "tasks-container", "", "");

let projectsBar = document.querySelector(".projects");
let projectsContainer = createElement("div", "projects-container", "", "");
let addProjectPlusSign = createElement(
  "div",
  "add-project",
  "",
  "<span class='plus-sign'>+</span> Add Project"
);

export {
  addTaskPlusSign,
  tasksDinamicContainer,
  projectsBar,
  projectsContainer,
  addProjectPlusSign,
};
