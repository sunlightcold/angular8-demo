import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { CustomFormControlComponent } from './components/custom-form-control/custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormValidatorComponent } from './components/custom-form-validator/custom-form-validator.component';


@NgModule({
  declarations: [FormDemoComponent, CustomFormControlComponent, CustomFormValidatorComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
