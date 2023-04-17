export class toDoService {
  myToDos: Array<{ id: number; task: string; status: string }> = [];
  taskId = 0;
  page = 1;
  currentPageTodos = [];
  totalPages = 0;
  addTask(task: string) {
    this.myToDos.push({ id: this.taskId++, task: task, status: 'TODO' });
  }

  changeStatus(id) {
    let index = this.myToDos.findIndex((element) => element.id === id);
    this.myToDos[index].status = 'DONE';
  }
}
