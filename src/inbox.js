import { createElement } from "./create-elements";
import {
  Task,
  inboxStatic,
  todayStatic,
  upcomingStatic,
  undoneTasks,
} from "./create-todo";

let mainContent = document.querySelector(".main-content");
let taskForm = document.createElement("input");
let addTask = createElement(
  "div",
  "add-task",
  "",
  "<span class='plus-sign'>+</span> Add Task"
);
let tasksContainer = createElement("div", "tasks-container", "", "");
let addButton = createElement("button", "submit-button", "", "Add");

function createInboxTitle() {
  let inboxTitle = createElement("div", "inbox-title", "", "Inbox");
  mainContent.appendChild(inboxTitle);
}

function createAddButton() {
  mainContent.appendChild(tasksContainer);
  mainContent.appendChild(addTask);
  addTask.addEventListener("click", createTaskForm);
}

function createTaskForm() {
  taskForm.setAttribute("type", "text");
  taskForm.setAttribute("placeholder", "Type your task here");
  taskForm.classList.add("task-form");
  mainContent.appendChild(taskForm);
  mainContent.removeChild(addTask);
  mainContent.appendChild(addButton);
  addButton.addEventListener("click", printTask);
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskForm.value != "") {
      printTask();
    }
  });
}

function priorityFlow(task, redPriority, yellowPriority, greenPriority) {
  redPriority.addEventListener("click", () => {
    if (task.priority == "red") {
      task.priority = "";
      redPriority.classList.remove("active");
    } else {
      task.priority = "red";
      redPriority.classList.add("active");
      yellowPriority.classList.remove("active");
      greenPriority.classList.remove("active");
    }
  });
  yellowPriority.addEventListener("click", () => {
    if (task.priority == "yellow") {
      task.priority = "";
      yellowPriority.classList.remove("active");
    } else {
      task.priority = "yellow";
      yellowPriority.classList.add("active");
      redPriority.classList.remove("active");
      greenPriority.classList.remove("active");
    }
  });
  greenPriority.addEventListener("click", () => {
    if (task.priority == "green") {
      task.priority = "";
      greenPriority.classList.remove("active");
    } else {
      task.priority = "green";
      greenPriority.classList.add("active");
      yellowPriority.classList.remove("active");
      redPriority.classList.remove("active");
    }
  });
}

function printTask() {
  if (taskForm.value != "") {
    let newTask = new Task(taskForm.value, "", "grey", inboxStatic);
    inboxStatic.tasksList.push(newTask);
    undoneTasks.push(newTask);
    mainContent.removeChild(addButton);
    mainContent.removeChild(taskForm);
    taskForm.value = "";
    mainContent.appendChild(addTask);
    let newTaskLine = createElement("div", "task", newTask.title + "line", "");
    tasksContainer.appendChild(newTaskLine);
    let checkbox = createElement(
      "div",
      "checkbox",
      newTask.title + "checkbox",
      ""
    );
    newTaskLine.appendChild(checkbox);
    let taskTitle = createElement(
      "div",
      "task-title",
      newTask.title + "title",
      newTask.title
    );
    newTaskLine.appendChild(taskTitle);
    checkbox.addEventListener("click", () => {
      tasksContainer.removeChild(newTaskLine);
      newTask.finishTask();
    });
    let priorityContainer = createElement("div", "priority-container", "", "");
    newTaskLine.appendChild(priorityContainer);
    let priorityText = createElement("div", "priority-text", "", "priority:");
    let redPriority = createElement("div", "red-priority", "", "!");
    let yellowPriority = createElement("div", "yellow-priority", "", "!");
    let greenPriority = createElement("div", "green-priority", "", "!");
    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(redPriority);
    priorityContainer.appendChild(yellowPriority);
    priorityContainer.appendChild(greenPriority);
    priorityFlow(newTask, redPriority, yellowPriority, greenPriority);
  }
}

export { createInboxTitle, createAddButton };
