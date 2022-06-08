import { addTaskPlusSign } from "./add-buttons";
import { createElement } from "./create-elements";
import { Task, all, allTasksStatic, Project } from "./create-todo";
import { isToday, parseISO } from "date-fns";

function clearPage(location, dinamicContainer) {
  while (location.lastElementChild) {
    location.removeChild(location.lastElementChild);
  }
  while (dinamicContainer.lastElementChild) {
    dinamicContainer.removeChild(dinamicContainer.lastElementChild);
  }
}

function createTitle(location, project) {
  let projectTitle = createElement("div", "project-title", "", project.title);
  location.appendChild(projectTitle);
}

function createAddButton(location, dinamicContainer, project) {
  let plusSignButton = createElement(
    "div",
    "add-task",
    "",
    "<span class='plus-sign'>+</span> Add Task"
  );
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
    setupTaskContainer(
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
      setupTaskContainer(
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

function setupTaskContainer(
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
    allTasksStatic.tasksList.push(newTask);
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(taskForm);
    taskForm.value = "";
    mainContainer.appendChild(plusSignButton);
    printTask(newTask, dinamicContainer);
  }
}

function printTask(task, dinamicContainer) {
  let newTaskLine = createElement("div", "task", task.title + "line", "");
  dinamicContainer.appendChild(newTaskLine);
  let checkbox = createElement("div", "checkbox", task.title + "checkbox", "");
  newTaskLine.appendChild(checkbox);
  let taskTitle = createElement(
    "div",
    "task-title",
    task.title + "title",
    task.title
  );
  newTaskLine.appendChild(taskTitle);
  checkbox.addEventListener("click", () => {
    dinamicContainer.removeChild(newTaskLine);
    task.finishTask();
  });
  let calendar = document.createElement("input");
  calendar.setAttribute("type", "date");
  calendar.classList.add("calendar");
  calendar.value = task.dueDate;
  calendar.addEventListener("change", () => {
    task.dueDate = calendar.value;
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
  priorityFlow(task, redPriority, yellowPriority, greenPriority);
}

function priorityFlow(task, redPriority, yellowPriority, greenPriority) {
  if (task.priority == "red") {
    colorPriority(task, "red", redPriority, yellowPriority, greenPriority);
  } else if (task.priority == "yellow") {
    colorPriority(task, "yellow", yellowPriority, redPriority, greenPriority);
  } else if (task.priority == "green") {
    colorPriority(task, "green", greenPriority, yellowPriority, redPriority);
  }
  redPriority.addEventListener("click", () => {
    if (task.priority == "red") {
      task.priority = "";
      redPriority.classList.remove("active");
    } else {
      colorPriority(task, "red", redPriority, yellowPriority, greenPriority);
    }
  });
  yellowPriority.addEventListener("click", () => {
    if (task.priority == "yellow") {
      task.priority = "";
      yellowPriority.classList.remove("active");
    } else {
      colorPriority(task, "yellow", yellowPriority, redPriority, greenPriority);
    }
  });
  greenPriority.addEventListener("click", () => {
    if (task.priority == "green") {
      task.priority = "";
      greenPriority.classList.remove("active");
    } else {
      colorPriority(task, "green", greenPriority, yellowPriority, redPriority);
    }
  });
}

function colorPriority(
  task,
  color,
  clickedPriority,
  otherPriority,
  otherPriority2
) {
  task.priority = color;
  clickedPriority.classList.add("active");
  otherPriority.classList.remove("active");
  otherPriority2.classList.remove("active");
}

function createProjectPage(location, project, dinamicContainer) {
  clearPage(location, dinamicContainer);
  createTitle(location, project);
  createAddButton(location, dinamicContainer, project);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createNoButtonPage(location, project, dinamicContainer) {
  clearPage(location, dinamicContainer);
  createTitle(location, project);
  location.appendChild(dinamicContainer);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createTodayPage(location, dinamicContainer) {
  let today = Project("Today");
  clearPage(location, dinamicContainer);
  createTitle(location, today);
  location.appendChild(dinamicContainer);
  today.tasksList = allTasksStatic.tasksList.filter(function (task) {
    return isToday(parseISO(task.dueDate, 1));
  });
  today.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

export { createProjectPage, createNoButtonPage, createTodayPage, printTask };
