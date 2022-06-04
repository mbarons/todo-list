import { createElement } from "./create-elements";
import { Task, undoneTasks } from "./create-todo";

function createTitle(location, project) {
  let projectTitle = createElement("div", "project-title", "", project.title);
  location.appendChild(projectTitle);
}

function createAddButton(location, dinamicContainer, plusSignButton, project) {
  location.appendChild(dinamicContainer);
  location.appendChild(plusSignButton);
  plusSignButton.addEventListener("click", () => {
    createTaskForm(location, plusSignButton, project, dinamicContainer);
  });
}

function createTaskForm(
  mainContainer,
  plusSignButton,
  project,
  dinamicContainer
) {
  let taskForm = document.createElement("input");
  let addFormButton = createElement("button", "submit-button", "", "Add");
  taskForm.setAttribute("type", "text");
  taskForm.setAttribute("placeholder", "Type your task here");
  taskForm.classList.add("task-form");
  mainContainer.appendChild(taskForm);
  mainContainer.removeChild(plusSignButton);
  mainContainer.appendChild(addFormButton);
  addFormButton.addEventListener("click", () => {
    printTask(
      project,
      mainContainer,
      taskForm,
      addFormButton,
      plusSignButton,
      dinamicContainer
    );
  });
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskForm.value != "") {
      printTask(
        project,
        mainContainer,
        taskForm,
        addFormButton,
        plusSignButton,
        dinamicContainer
      );
    }
  });
}

function printTask(
  project,
  mainContainer,
  taskForm,
  addFormButton,
  plusSignButton,
  dinamicContainer
) {
  if (taskForm.value != "") {
    let newTask = new Task(taskForm.value, "", "", project);
    project.tasksList.push(newTask);
    undoneTasks.push(newTask);
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(taskForm);
    taskForm.value = "";
    mainContainer.appendChild(plusSignButton);
    let newTaskLine = createElement("div", "task", newTask.title + "line", "");
    dinamicContainer.appendChild(newTaskLine);
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
    let calendar = document.createElement("input");
    calendar.setAttribute("type", "date");
    calendar.classList.add("calendar");
    calendar.addEventListener("change", () => {
      newTask.dueDate = calendar.value;
    });
    newTaskLine.appendChild(calendar);
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

function createProjectPage(
  location,
  project,
  dinamicContainer,
  plusSignButton
) {
  createTitle(location, project);
  createAddButton(location, dinamicContainer, plusSignButton, project);
}

export { createProjectPage };
