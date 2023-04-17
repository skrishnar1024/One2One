import { Component, OnInit } from '@angular/core';
import { toDoService } from '../toDo.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [toDoService],
})
export class TodoComponent implements OnInit {
  myToDos: Array<{ id: number; task: string; status: string }> = [];

  inputTask = '';
  page = 1;
  currentPageTodos = [];
  totalPages = 0;
  constructor(
    private toDoService: toDoService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.myToDos = this.toDoService.myToDos;
  }

  addTask() {
    this.toDoService.addTask(this.inputTask);
    this.inputTask = '';

    //call some API

    this.httpClient
      .get('https://dummyjson.com/products11')
      .subscribe((response) => {
        console.log(response);
      });

    this.updatedListPerPage();
  }

  updatedListPerPage() {
    let topItem = (this.page - 1) * 3;
    let lastItem = topItem + 3;
    this.currentPageTodos = this.myToDos.slice(topItem, lastItem);
  }

  previous() {
    if (this.page > 1) {
      this.page--;
      this.updatedListPerPage();
    }
  }

  next() {
    this.totalPages = Math.ceil(this.myToDos.length / 3);
    if (this.page < this.totalPages) {
      this.page++;
      this.updatedListPerPage();
    }
  }
}
