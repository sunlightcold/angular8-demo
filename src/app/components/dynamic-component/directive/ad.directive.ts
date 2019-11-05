import { Directive, ViewContainerRef, Input, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from '../model/ad.model';
import { interval } from 'rxjs';

@Directive({
  selector: '[appAd]'
})
export class AdDirective implements OnInit {
  @Input()
  adItems: AdItem[];

  private currentIndex = -1;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    interval(1000).subscribe(() => this.loadComponent());
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.adItems.length;
    const adItem = this.adItems[this.currentIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = adItem.data;
  }
}
