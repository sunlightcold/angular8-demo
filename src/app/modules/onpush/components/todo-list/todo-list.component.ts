import { Component, OnInit, ElementRef } from '@angular/core';
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
  todoList: TodoListModel[] = [
    {
      title: '任务1',
      description: '早上喝茶',
    },
    {
      title: '任务2',
      description: '中午吃饭',
    },
    {
      title: '任务3',
      description: '下午休息',
    },
  ];

  formControl = new FormControl('', []);

  constructor() {}

  ngOnInit() {}

  onEnterPress() {
    this.todoList.unshift({
      title: `${'任务'}${this.todoList.length + 1}`,
      description: this.formControl.value,
    });
    this.formControl.setValue('');
  }
}
