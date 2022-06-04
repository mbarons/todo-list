import "./style.css";
import { createProjectPage } from "./project-page";
import { addTaskPlusSign, tasksDinamicContainer } from "./add-buttons";
import {
  Task,
  inboxStatic,
  todayStatic,
  upcomingStatic,
  undoneTasks,
} from "./create-todo";

let mainContent = document.querySelector(".main-content");

createProjectPage(
  mainContent,
  inboxStatic,
  tasksDinamicContainer,
  addTaskPlusSign
);
