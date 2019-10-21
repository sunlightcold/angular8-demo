import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {
  public value = '复制的内容';

  constructor() {}

  ngOnInit() {}

  onClick(textarea) {
    // textarea.select();
    // document.execCommand('copy');
  }
}
