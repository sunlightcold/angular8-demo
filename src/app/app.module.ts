import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { SanitizerComponent } from './components/sanitizer/sanitizer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    Renderer2Component,
    SanitizerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
