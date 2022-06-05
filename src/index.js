import "./style.css";
import { createProjectPage } from "./project-page";
import {
  addProjectPlusSign,
  addTaskPlusSign,
  projectsBar,
  projectsContainer,
  tasksDinamicContainer,
} from "./add-buttons";
import {
  Task,
  inboxStatic,
  todayStatic,
  upcomingStatic,
  undoneTasks,
} from "./create-todo";
import { createProjectBar } from "./projects-bar";

let mainContent = document.querySelector(".main-content");

createProjectPage(
  mainContent,
  inboxStatic,
  tasksDinamicContainer,
  addTaskPlusSign
);

createProjectBar(projectsBar, projectsContainer, addProjectPlusSign);
