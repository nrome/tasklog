import { Injectable } from '@angular/core';

// import data models/interface
import { Log } from '../models/Log';

@Injectable()
export class LogService {

  // define properties
  logs: Log[];

  constructor() { 
    this.logs = [
      {id: '1', text: 'Setup devlog git repo', date: new Date
      ('04/10/2018 15:45:10')},
      {id: '1', text: 'Generated components', date: new Date
      ('04/11/2018 12:54:23')},
      {id: '1', text: 'Customized log-form', date: new Date
      ('04/11/2018 13:25:54')}
    ]
  }

  getLogs() {
    return this.logs;
  }

}
