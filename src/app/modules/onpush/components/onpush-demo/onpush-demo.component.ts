import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TodoListModel } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-onpush-demo',
  templateUrl: './onpush-demo.component.html',
  styleUrls: ['./onpush-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushDemoComponent implements OnInit {
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

  // 基本类型
  num = 100;

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.num = 1000;
      this.todoList.push({
        title: `任务${this.todoList.length + 1}`,
        description: 'abc',
      });
      this.changeRef.markForCheck();
      console.log('插入数据', this.todoList);
    }, 2000);
    setTimeout(() => {
      this.todoList.push({
        title: `任务${this.todoList.length + 1}`,
        description: 'abc',
      });
      // this.changeRef.detectChanges();
      console.log('插入数据', this.todoList);
    }, 4000);
  }

  onEnterPress(value: string) {
    this.todoList.push({
      title: `任务${this.todoList.length + 1}`,
      description: value,
    });
  }

  onButtonPress() {
    this.todoList = [].concat(this.todoList);
  }
}
