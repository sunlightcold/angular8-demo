import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-banner',
  templateUrl: './two-banner.component.html',
  styleUrls: ['./two-banner.component.scss']
})
export class TwoBannerComponent implements OnInit {
  @Output()
  press = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPress($event) {
    this.press.emit('abc');
  }

}
