import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { OnpushDemoComponent } from './components/onpush-demo/onpush-demo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';


@NgModule({
  declarations: [OnpushDemoComponent, TodoListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    OnpushRoutingModule
  ]
})
export class OnpushModule { }
