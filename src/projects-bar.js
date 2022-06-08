import { tasksDinamicContainer } from "./add-buttons";
import { createElement, loadImage } from "./create-elements";
import { Project, projects } from "./create-todo";
import { createProjectPage } from "./project-page";
import projectImage from "./project.svg";
import { mainContent } from "./index";

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
    printProject(
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
      printProject(
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

function printProject(
  title,
  mainContainer,
  addFormButton,
  projectForm,
  plusSignButton,
  dinamicContainer
) {
  if (projectForm.value != "") {
    let newProject = Project(title);
    projects.push(newProject);
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(projectForm);
    mainContainer.appendChild(plusSignButton);
    let newProjectLine = createElement("div", "project-line", "", "");
    dinamicContainer.appendChild(newProjectLine);
    newProjectLine.appendChild(loadImage(projectImage, "project-image"));
    let projectTitle = createElement(
      "div",
      "project-title-bar",
      "",
      projectForm.value
    );
    newProjectLine.appendChild(projectTitle);
    projectForm.value = "";
    newProjectLine.addEventListener("click", () => {
      createProjectPage(mainContent, newProject, tasksDinamicContainer);
    });
  }
}

function createProjectBar(location, dinamicContainer, plusSignButton) {
  createAddProjectButton(location, dinamicContainer, plusSignButton);
}

export { createProjectBar };
