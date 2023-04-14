import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  counter = 0;
  disableDecremnt=true;

  toDos:Array<{
    id:number,
    text:string
  }>=[];
  curTask='';

  handleIncrement() {
    this.counter++;
    if(this.counter>0) {
      this.disableDecremnt=false;
    }
  }
  handleDecrement() {
    this.counter--;
    if(this.counter === 0) {
      this.disableDecremnt=true;
    }
  }


  addToDo() {
    this.toDos.push({id:this.toDos.length, text:this.curTask});
    this.curTask = '';
  }

  deleteToDo(id:number) {
    this.toDos.splice(id, 1);
  }

  deleteTask(event) {
    const index = this.toDos.findIndex(element=> element.id === event.id);
    this.toDos.splice(index, 1);
  } 
}
