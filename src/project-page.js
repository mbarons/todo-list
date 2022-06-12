import { createElement } from "./create-elements";
import {
  Task,
  all,
  allTasksStatic,
  Project,
  projects,
  priorities,
} from "./create-todo";
import { isToday, parseISO } from "date-fns";

function clearPage(location, dinamicContainer) {
  while (location.lastElementChild) {
    location.removeChild(location.lastElementChild);
  }
  while (dinamicContainer.lastElementChild) {
    dinamicContainer.removeChild(dinamicContainer.lastElementChild);
  }
}

function createTitle(location, project, dinamicContainer) {
  let projectPageHeader = createElement("div", "project-page-header", "", "");
  let projectTitle = createElement("div", "project-title", "", project.title);
  location.appendChild(projectPageHeader);
  projectPageHeader.appendChild(projectTitle);
  let sortContainer = createElement("div", "sort-container", "", "");
  projectPageHeader.appendChild(sortContainer);
  let sortText = createElement("div", "sort-text", "", "Sort by:");
  sortContainer.appendChild(sortText);
  let dateSort = createElement("button", "sort-button", "", "Due Date");
  let prioritySort = createElement("button", "sort-button", "", "Priority");
  sortContainer.appendChild(dateSort);
  sortContainer.appendChild(prioritySort);

  dateSort.addEventListener("click", () => {
    sortPage(project, location, dinamicContainer, "Due Date");
  });

  prioritySort.addEventListener("click", () => {
    sortPage(project, location, dinamicContainer, "Priority");
  });
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
  let projectDrop = document.createElement("select");
  projects.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.title;
    option.value = element.title;
    projectDrop.appendChild(option);
  });
  projectDrop.value = task.project.title;
  newTaskLine.appendChild(projectDrop);
  projectDrop.addEventListener("change", () => {
    task.changeProject(projectDrop.value);
  });
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
  createTitle(location, project, dinamicContainer);
  createAddButton(location, dinamicContainer, project);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createNoButtonPage(location, project, dinamicContainer) {
  clearPage(location, dinamicContainer);
  createTitle(location, project, dinamicContainer);
  location.appendChild(dinamicContainer);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createTodayPage(location, dinamicContainer) {
  let today = new Project("Today");
  clearPage(location, dinamicContainer);
  createTitle(location, today, dinamicContainer);
  location.appendChild(dinamicContainer);
  today.tasksList = allTasksStatic.tasksList.filter((task) => {
    return isToday(parseISO(task.dueDate, 1));
  });
  today.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function sortPage(project, location, dinamicContainer, sortType) {
  clearPage(location, dinamicContainer);
  createTitle(location, project, dinamicContainer);
  location.appendChild(dinamicContainer);
  if (sortType == "Due Date") {
    project.tasksList.sort(function (a, b) {
      if (a.dueDate == "") return 1;
      else if (b.dueDate == "") return -1;
      else return Date.parse(a.dueDate) - Date.parse(b.dueDate);
    });
    project.tasksList.forEach((task) => {
      printTask(task, dinamicContainer);
    });
    createAddButton(location, dinamicContainer, project);
  } else if (sortType == "Priority") {
    project.tasksList.sort(function (a, b) {
      return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
    });
    project.tasksList.forEach((task) => {
      printTask(task, dinamicContainer);
    });
    createAddButton(location, dinamicContainer, project);
  }
}

export { createProjectPage, createNoButtonPage, createTodayPage, printTask };
