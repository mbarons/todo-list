import { createElement } from "./create-elements";
import { Project, projects } from "./create-todo";

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
  let newProject = Project(title);
  projects.push(newProject);
  mainContainer.removeChild(addFormButton);
  mainContainer.removeChild(projectForm);
  projectForm.value = "";
  mainContainer.appendChild(plusSignButton);
  let newProjectLine = createElement("div", "project-line", "", "");
  dinamicContainer.appendChild(newProjectLine);
  //add things now to the project line
}

function createProjectBar(location, dinamicContainer, plusSignButton) {
  createAddProjectButton(location, dinamicContainer, plusSignButton);
}

export { createProjectBar };
