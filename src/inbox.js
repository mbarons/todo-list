import { createElement } from "./create-elements";
import { Task, inboxStatic, todayStatic, upcomingStatic } from "./create-todo";

let mainContent = document.querySelector(".main-content");

function createInboxTitle(){
  let inboxTitle = createElement("div", "inbox-title", "", "Inbox");
  mainContent.appendChild(inboxTitle);
}



function createAddButton() {

  let tasksContainer = createElement("div", "tasks-container", "", "");
  mainContent.appendChild(tasksContainer);

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
    addButton.addEventListener("click", () => {
      let newTask = new Task (taskForm.value, "", "grey", inboxStatic );
      inboxStatic.tasksList.push(newTask);
      mainContent.removeChild(addButton);
      mainContent.removeChild(taskForm);
      mainContent.appendChild(addTask);
      let newTaskLine = createElement("div", "task", "", newTask.title);
      tasksContainer.appendChild(newTaskLine);
    })
  }
}

export { createInboxTitle, createAddButton };