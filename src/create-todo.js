class Task  {
  constructor (title, description, dueDate, priority) { 
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  };
  finishTask() {this.done = true};
};

const Project = (title) => {

  let tasksList = [];
  return { title, tasksList };
};

export {
  Task,
  Project
};
