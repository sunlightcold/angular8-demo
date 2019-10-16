import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.scss']
})
export class Renderer2Component implements OnInit {

  constructor(private r2: Renderer2) { }

  ngOnInit() {
  }
}
