import "./style.css";
import {
  createNoButtonPage,
  createProjectPage,
  createTodayPage,
} from "./project-page";
import {
  addProjectPlusSign,
  projectsBar,
  projectsContainer,
  tasksDinamicContainer,
} from "./add-buttons";
import { inboxStatic, todayStatic, allTasksStatic } from "./create-todo";
import { createProjectBar } from "./projects-bar";

let mainContent = document.querySelector(".main-content");
let inboxButton = document.querySelector("#inbox");
let todayButton = document.querySelector("#today");
let allTasksButton = document.querySelector("#all-tasks");

inboxButton.addEventListener("click", () => {
  createProjectPage(mainContent, inboxStatic, tasksDinamicContainer);
});

todayButton.addEventListener("click", () => {
  createTodayPage(mainContent, tasksDinamicContainer);
});

allTasksButton.addEventListener("click", () => {
  createNoButtonPage(mainContent, allTasksStatic, tasksDinamicContainer);
});

createProjectPage(mainContent, inboxStatic, tasksDinamicContainer);
createProjectBar(projectsBar, projectsContainer, addProjectPlusSign);

export { mainContent };
