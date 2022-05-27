import { Task, Project } from "./create-todo"

let inboxProject = Project("inbox");


let myTask = new Task("Wash the dishes", "Wash the dishes for gramma", "Tommorow", "Important");

console.log(myTask);
myTask.finishTask();
console.log(myTask)