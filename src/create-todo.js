let undoneTasks = [];

class Task  {
  constructor (title, dueDate, priority, project) { 
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
    this.project = project;
  };
  finishTask() {
    this.done = true;
    undoneTasks = currentProject.tasksList.filter(el => {return el != this});
  };
  /*putInProject(project) {
    project.tasksList.push(this);
    this.project = project;
  };*/
  changeProject(currentProject, newProject) {
    currentProject.tasksList = currentProject.tasksList.filter(el => {return el != this}); //filtered array that returns all values that are different from this object
    newProject.tasksList.push(this);
    this.project = newProject;
  }
};

const Project = (title) => {

  let tasksList = [];
  return { title, tasksList };
};

let inboxStatic = Project("Inbox");
let todayStatic = Project("Today");
let upcomingStatic = Project("Upcoming");

export {
  Task,
  Project,
  undoneTasks,
  inboxStatic,
  todayStatic,
  upcomingStatic
};
