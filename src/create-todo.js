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

  changeProject(currentProject, newProject) {
    currentProject.tasksList = currentProject.tasksList.filter((el) => {
      return el != this;
    }); //filtered array that returns all values that are different from this object
    newProject.tasksList.push(this);
    this.project = newProject;
  }
}

const Project = (title) => {
  let tasksList = [];
  return { title, tasksList };
};

let inboxStatic = Project("Inbox");
let todayStatic = Project("Today");
let allTasksStatic = Project("All Tasks");

export { Task, Project, projects, inboxStatic, todayStatic, allTasksStatic };
