import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { SanitizerComponent } from './components/sanitizer/sanitizer.component';
import { InputComponent } from './components/input/input.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
