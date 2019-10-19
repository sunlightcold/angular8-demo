import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one-banner',
  templateUrl: './one-banner.component.html',
  styleUrls: ['./one-banner.component.scss']
})
export class OneBannerComponent implements OnInit {
  @Input()
  data: any;

  @Output()
  press = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPress($event) {
    this.press.emit('test');
  }
}
