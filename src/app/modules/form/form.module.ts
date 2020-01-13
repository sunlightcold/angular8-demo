import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormDemoComponent } from './components/form-demo/form-demo.component';


@NgModule({
  declarations: [FormDemoComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
