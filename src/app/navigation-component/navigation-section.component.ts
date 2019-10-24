import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.css']
})
export class NavigationSectionComponent implements OnInit {

  isDisabled: boolean;

  constructor() {
    this.isDisabled = true;
  }

  ngOnInit() {
    console.log('NavigationSectionComponent');
  }

  onClick() {
    this.isDisabled = false;
  }
}
