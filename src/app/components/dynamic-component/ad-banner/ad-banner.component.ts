import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input, OnDestroy, Output, ViewContainerRef } from '@angular/core';
import { AdDirective } from '../directive/ad.directive';
import { AdItem } from '../model/ad.model';
import { OneBannerComponent } from '../one-banner/one-banner.component';
import { TwoBannerComponent } from '../two-banner/two-banner.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @ViewChild(AdDirective, { static: true })
  adHost: AdDirective;

  @ViewChild('template', { static: true, read: ViewContainerRef })
  template: ViewContainerRef;

  @Input()
  adItems: AdItem[] = [new AdItem(OneBannerComponent, { abc: 'abc' }), new AdItem(TwoBannerComponent, {})];

  private currentIndex = -1;

  private timerHandle: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.timerHandle = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerHandle);
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.adItems.length;
    const adItem = this.adItems[this.currentIndex];

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // this.template.clear();
    // const componentRef = this.template.createComponent(componentFactory);
    // componentRef.instance.data = adItem.data;

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // const containerRef = this.adHost.viewContainerRef;
    // containerRef.clear();

    // const componentRef = containerRef.createComponent(componentFactory);
    // componentRef.instance.data = adItem.data;

    // componentRef.instance.press.subscribe(res => {
    //   console.log(res);
    // });
  }

  onClick() {
    this.template.clear();
  }
}
