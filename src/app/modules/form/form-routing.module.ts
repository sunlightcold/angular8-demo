import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDemoComponent } from './components/form-demo/form-demo.component';

const routes: Routes = [
  {
    path: 'demo',
    component: FormDemoComponent,
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
