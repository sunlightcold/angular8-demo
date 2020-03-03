import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DIRoutingModule } from './di-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [DemoComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    DIRoutingModule
  ]
})
export class DIModule { }
