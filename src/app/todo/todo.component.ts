import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  myToDos: Array<{ id: number, task: string }> = [];
  inputTask = '';
  taskId = 0;


  addTask() {
    this.myToDos.push({ id: this.taskId++, task: this.inputTask });
  }

  deleteTask(eventData) {
    let index = this.myToDos.findIndex(element => element.id === eventData.id);
    this.myToDos.splice(index, 1);
  }

}
