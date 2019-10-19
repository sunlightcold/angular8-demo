import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { SanitizerComponent } from './components/sanitizer/sanitizer.component';
import { InputComponent } from './components/input/input.component';
import { AdBannerComponent } from './components/dynamic-component/directive/ad-banner/ad-banner.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'renderer2',
    component: Renderer2Component
  },
  {
    path: 'sanitizer',
    component: SanitizerComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'dynamic/component',
    component: AdBannerComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
