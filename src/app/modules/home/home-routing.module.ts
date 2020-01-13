import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: 'onPush',
        loadChildren: () => import('../onpush/onpush.module').then(module => module.OnpushModule),
      },
      {
        path: 'form',
        loadChildren: () => import('../form/form.module').then(module => module.FormModule),
      },
      {
        path: '',
        redirectTo: 'onPush',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
