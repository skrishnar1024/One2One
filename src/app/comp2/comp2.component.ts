import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
    @Input() task: {id: number, text: string};

    @Output() deleteTask = new EventEmitter<{id: number}>();


    constructor() {

    }

    raiseDeleteTaskEvent() {
      this.deleteTask.emit({id: this.task.id})
    }
}
