import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, AfterViewInit{
  @ViewChild('span', { static: true }) span: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(this.span.nativeElement.clientWidth, this.span.nativeElement.scrollWidth);
  }
}
