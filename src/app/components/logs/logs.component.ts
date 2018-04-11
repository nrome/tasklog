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

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
    });
  }

  onSelect(log: Log) {
    console.log(log);
    this.logService.setFormLog(log);
  }


  
}
