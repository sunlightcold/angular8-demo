import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.scss']
})
export class SanitizerComponent implements OnInit {
  public name: string;

  constructor(private sanitizer: DomSanitizer, private store: StoresService) {}

  ngOnInit() {}

  getHref() {
    return this.sanitizer.bypassSecurityTrustUrl('javascript:void(0);');
  }

  onClick($event) {
    this.store.setName('abc');
    this.name = this.store.getName();
    window.open('/sanitizer');
  }
}
