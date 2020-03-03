import { LoggerService } from './../../services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}

  ngOnInit() {}

  addLog() {
    this.loggerService.addLog('child Component');
  }
}
