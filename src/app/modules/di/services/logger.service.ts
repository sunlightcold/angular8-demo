import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private logs: string[] = [];

  addLog(log: string) {
    this.logs.push(log);
  }

  getLogs() {
    return this.logs;
  }
}
