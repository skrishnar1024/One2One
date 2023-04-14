import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() toDoItemTask:{id: number, task:string};

  deleteTask() {
    console.log(this.toDoItemTask);
  }

}
