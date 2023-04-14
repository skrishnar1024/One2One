import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnDestroy, OnChanges {

  @Input() toDoItemTask: { id: number, task: string, status: string };

  @Output() deleteTaskEvent = new EventEmitter<{ id: number }>();

  count = 19;

  constructor() {
    console.log('count is ', this.count)
    console.log('Constructor is called', this.toDoItemTask);
  }
  ngOnDestroy(): void {
    console.log('This component is getting destroyed', this.toDoItemTask);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called', this.toDoItemTask);
    this.toDoItemTask = {...this.toDoItemTask, task: 'TASK : ' + this.toDoItemTask.task}
  }
  
   ngOnChanges(changes: SimpleChanges): void {
      console.log('Input got changed ', changes);
      
   }

  completedTask() {
    this.deleteTaskEvent.emit({ id: this.toDoItemTask.id });
  }

}
