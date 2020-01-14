import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface TodoListModel {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input()
  todoList: TodoListModel[];

  @Input()
  num: string;

  constructor() {}

  ngOnInit() {}
}
