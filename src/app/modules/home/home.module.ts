import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [HomeContainerComponent, AsideComponent, MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
