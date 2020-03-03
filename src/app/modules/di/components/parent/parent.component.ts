import { LoggerService } from './../../services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [LoggerService],
})
export class ParentComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}

  ngOnInit() {}

  addLog() {
    this.loggerService.addLog('parent Component');
  }
}
