import { Injectable } from '@angular/core';

// import reactive extensions rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import data models/interface
import { Log } from '../models/Log';

@Injectable()
export class LogService {

  // define properties
  logs: Log[];

  // source
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable(); 


  constructor() { 
    this.logs = [
      {id: '01', text: 'Setup devlog git repo', date: new Date
      ('04/10/2018 15:45:10')},
      {id: '02', text: 'Generated components', date: new Date
      ('04/11/2018 12:54:23')},
      {id: '03', text: 'Customized log-form', date: new Date
      ('04/11/2018 13:25:54')}
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

}
