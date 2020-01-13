import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { OnpushDemoComponent } from './components/onpush-demo/onpush-demo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterTodoComponent } from './components/enter-todo/enter-todo.component';


@NgModule({
  declarations: [OnpushDemoComponent, TodoListComponent, EnterTodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnpushRoutingModule
  ]
})
export class OnpushModule { }
