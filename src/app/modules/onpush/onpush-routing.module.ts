import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnpushDemoComponent } from './components/onpush-demo/onpush-demo.component';

const routes: Routes = [
  {
    path: 'demo',
    component: OnpushDemoComponent,
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
export class OnpushRoutingModule {}
