import { Component, OnInit } from '@angular/core';

// import services
import { LogService } from '../../services/log.service';
// import data models/interface
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  constructor(private logService: LogService) { }

  ngOnInit() {

    // subscribe to selectedLog observable
    // call from sibling component
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

}
