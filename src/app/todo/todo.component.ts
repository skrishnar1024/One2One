import { ChangeDetectorRef, Component } from '@angular/core';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

constructor(){}

  myToDos: Array<{ id: number, task: string, status: string }> = [];
  currentPageToDos:  Array<{ id: number, task: string, status: string }> = [];
  inputTask = '';
  taskId = 0;
  taskIndex=0;
  page=1;
  previousPageDisable=false;
  nextPageDisable=false;

  addTask() {
    this.myToDos.push({ id: this.taskId++, task: this.inputTask, status:'TODO' });
  }

  taskCompleted(eventData) {
    let index = this.myToDos.findIndex(element => element.id === eventData.id);
    //this.myToDos.splice(index, 1);
    let completedTask= this.myToDos[index];
    this.myToDos.splice(index, 1, { ...completedTask, status: 'DONE' });
  }
  
  nextPage(){
    this.page++;

    
  }
  previousPage(){
    this.page--;

    }
}

