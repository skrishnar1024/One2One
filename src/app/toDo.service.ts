import { Task } from "./task";

export class toDoService {
  myToDos: Array<Task> = [];
  taskId : number= 0;

  addTask(task: string): void {
    this.myToDos.push({ id: this.taskId++, task: task, status: 'TODO' });
  }

  changeStatus(id): void {
    let index = this.myToDos.findIndex((element) => element.id === id);
    this.myToDos[index].status = 'DONE';
  }
}
