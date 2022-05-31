import { createElement } from "./create-elements";

let mainContent = document.querySelector(".main-content");

function createInboxTitle(){
  let inboxTitle = createElement("div", "inbox-title", "", "Inbox");
  mainContent.appendChild(inboxTitle);
}

function createAddButton() {
  let addTask = createElement("div", "add-task", "", "<span class='plus-sign'>+</span> Add Task");
  mainContent.appendChild(addTask);
  addTask.addEventListener("click", createTaskForm);


  function createTaskForm(){
    let taskForm = document.createElement("input");
    taskForm.setAttribute("type", "text");
    taskForm.setAttribute("placeholder", "Type your task here");
    taskForm.classList.add("task-form");
    mainContent.appendChild(taskForm);
    mainContent.removeChild(addTask);
    let addButton = createElement("button", "submit-button", "", "Add");
    mainContent.appendChild(addButton);
  }
}

export { createInboxTitle, createAddButton };