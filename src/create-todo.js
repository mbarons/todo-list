let projects = [];

class Task {
  constructor(title, dueDate, priority, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
  finishTask() {
    allTasksStatic.tasksList = allTasksStatic.tasksList.filter((el) => {
      return el != this;
    });
    this.project.tasksList = this.project.tasksList.filter((el) => {
      return el != this;
    });
  }

  changeProject(newProject) {
    this.project.tasksList = this.project.tasksList.filter((el) => {
      return el != this;
    }); //filtered array that returns all values that are different from this object
    newProject = projects.find((element) => {
      return element.title == newProject;
    });
    newProject.tasksList.push(this);
    this.project = newProject;
  }
}
class Project {
  constructor(title) {
    this.title = title;
    this.tasksList = [];
  }
  deleteProject() {
    projects = projects.filter((el) => {
      return el != this;
    });
  }
}

let inboxStatic = new Project("Inbox");
projects.push(inboxStatic);
let todayStatic = new Project("Today");
let allTasksStatic = new Project("All Tasks");

let priorities = ["red", "yellow", "green", ""];

export {
  Task,
  Project,
  projects,
  inboxStatic,
  todayStatic,
  allTasksStatic,
  priorities,
};
