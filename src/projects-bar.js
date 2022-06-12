import { tasksDinamicContainer } from "./add-buttons";
import { createElement, loadImage } from "./create-elements";
import { Project, projects, inboxStatic, allTasksStatic } from "./create-todo";
import { createProjectPage } from "./project-page";
import projectImage from "./project.svg";
import { mainContent } from "./index";
import { refReplacer, storageAvailable } from "./localStorage";

function createAddProjectButton(location, dinamicContainer, plusSignButton) {
  location.appendChild(dinamicContainer);
  location.appendChild(plusSignButton);
  plusSignButton.addEventListener("click", () => {
    createProjectForm(location, plusSignButton, dinamicContainer);
  });
}

function createProjectForm(mainContainer, plusSignButton, dinamicContainer) {
  let projectForm = document.createElement("input");
  let addFormButton = createElement("button", "project-button", "", "Add");
  projectForm.setAttribute("type", "text");
  projectForm.setAttribute("placeholder", "Project name");
  projectForm.classList.add("project-form");
  mainContainer.appendChild(projectForm);
  mainContainer.removeChild(plusSignButton);
  mainContainer.appendChild(addFormButton);
  addFormButton.addEventListener("click", () => {
    setupProjectContainer(
      projectForm.value,
      mainContainer,
      addFormButton,
      projectForm,
      plusSignButton,
      dinamicContainer
    );
  });
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && projectForm.value != "") {
      setupProjectContainer(
        projectForm.value,
        mainContainer,
        addFormButton,
        projectForm,
        plusSignButton,
        dinamicContainer
      );
    }
  });
}

function setupProjectContainer(
  title,
  mainContainer,
  addFormButton,
  projectForm,
  plusSignButton,
  dinamicContainer
) {
  if (projectForm.value != "") {
    let newProject = new Project(title);
    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects, refReplacer()));
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(projectForm);
    mainContainer.appendChild(plusSignButton);
    projectForm.value = "";
    printProject(newProject, dinamicContainer);
  }
}

function printProject(project, dinamicContainer) {
  let newProjectLine = createElement("div", "project-line", "", "");
  dinamicContainer.appendChild(newProjectLine);
  newProjectLine.appendChild(loadImage(projectImage, "project-image"));
  let projectTitle = createElement(
    "div",
    "project-title-bar",
    "",
    project.title
  );
  newProjectLine.appendChild(projectTitle);

  newProjectLine.addEventListener("click", () => {
    createProjectPage(mainContent, project, tasksDinamicContainer);
  });

  let removeButton = createElement("div", "remove-button", "", "x");
  newProjectLine.appendChild(removeButton);
  newProjectLine.addEventListener("mouseenter", () => {
    highlight(true, newProjectLine, removeButton);
  });
  newProjectLine.addEventListener("mouseleave", () => {
    highlight(false, newProjectLine, removeButton);
  });
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dinamicContainer.removeChild(newProjectLine);
    project.deleteProject();
    createProjectPage(mainContent, inboxStatic, tasksDinamicContainer);
    project.tasksList.forEach((task) => {
      allTasksStatic.tasksList = allTasksStatic.tasksList.filter((el) => {
        return el != task;
      });
    });
    project.tasksList = [];
  });
}

function highlight(add, line, removeButton) {
  if (add) {
    line.classList.add("highlight");
    removeButton.classList.add("show");
  } else {
    line.classList.remove("highlight");
    removeButton.classList.remove("show");
  }
}

function createProjectBar(location, dinamicContainer, plusSignButton) {
  createAddProjectButton(location, dinamicContainer, plusSignButton);
  console.log(projects);
  projects.forEach((project) => {
    if (project.title == "Inbox") {
    } else printProject(project, dinamicContainer);
  });
}

export { createProjectBar };
