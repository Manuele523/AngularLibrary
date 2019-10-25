import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.css']
})
export class NavigationSectionComponent implements OnInit {

  isDisabled: boolean;
  navScroll: string;

  constructor(private router: Router) {
    this.isDisabled = true;
  }

  ngOnInit() {
    console.log('NavigationSectionComponent');
  }


  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event) {
    if (window.pageYOffset > 1) {
      this.navScroll = 'navbar-scrolled-down';
    } else {
      this.navScroll = 'navbar-scrolled-up';
    }

  }

}
