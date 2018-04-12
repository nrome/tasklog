import { Component, OnInit } from '@angular/core';

// import services
import { LogService } from '../../services/log.service';
// import data models/interface
import { Log } from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  // define properties
  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
      if(clear) {
        this.selectedLog = {id: '', text: '', date: ''};
      }
    });

    // get logs
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      // initially set to true
      this.loaded = true;
    });
  }

  onSelect(log: Log) {
    console.log(log);
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if(confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }

}
