import { Component, Input } from '@angular/core';
import { toDoService } from '../toDo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {

  @Input() toDoItemTask: { id: number, task: string, status: string };


  constructor(private toDoService: toDoService)
  {}

  ChangeStatus()
  {
    this.toDoService.changeStatus(this.toDoItemTask.id);
  }
}
