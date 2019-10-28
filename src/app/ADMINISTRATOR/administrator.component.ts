import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class ADMINISTRATORComponent implements OnInit {

  logIsNotDisabledLog: boolean;
  logIsNotDisabledController: boolean;


  constructor() {
    this.logIsNotDisabledLog = true;
    this.logIsNotDisabledController = true;
  }

  ngOnInit() {
  }

}
