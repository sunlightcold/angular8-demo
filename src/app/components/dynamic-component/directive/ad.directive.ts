import { Directive, ViewContainerRef, Input, OnInit, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { AdItem } from '../model/ad.model';
import { interval } from 'rxjs';
import { OneBannerComponent } from '../one-banner/one-banner.component';
import { TwoBannerComponent } from '../two-banner/two-banner.component';

@Directive({
  selector: '[appAd]'
})
export class AdDirective implements OnInit {
  @Input()
  adItems: AdItem<OneBannerComponent | TwoBannerComponent>[];

  private currentIndex = -1;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    interval(1000).subscribe(() => this.loadComponent());
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.adItems.length;
    const adItem = this.adItems[this.currentIndex];
    // tslint:disable-next-line: max-line-length
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = adItem.data;

    componentRef.instance.press.subscribe((res: any) => {
      console.log(res);
    });
  }
}
