import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-two-banner',
  templateUrl: './two-banner.component.html',
  styleUrls: ['./two-banner.component.scss']
})
export class TwoBannerComponent implements OnInit {
  @Output()
  press = new EventEmitter();

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

  onPress($event) {
    this.press.emit('two-banner');
  }

}
