import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { SanitizerComponent } from './components/sanitizer/sanitizer.component';
import { AdDirective } from './components/dynamic-component/directive/ad.directive';
import { AdBannerComponent } from './components/dynamic-component/ad-banner/ad-banner.component';
import { OneBannerComponent } from './components/dynamic-component/one-banner/one-banner.component';
import { TwoBannerComponent } from './components/dynamic-component/two-banner/two-banner.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    Renderer2Component,
    SanitizerComponent,
    AdDirective,
    AdBannerComponent,
    OneBannerComponent,
    TwoBannerComponent,
    FormComponent,
    ScrollComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OneBannerComponent, TwoBannerComponent]
})
export class AppModule {}
