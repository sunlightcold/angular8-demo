import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.scss']
})
export class SanitizerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getHref() {
    return this.sanitizer.bypassSecurityTrustUrl('javascript:void(0);');
  }

}
