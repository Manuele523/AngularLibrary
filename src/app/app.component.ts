import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  callAdmin: boolean;
  title = 'jsAngular';

  constructor(private router: Router) {
    this.callAdmin = this.router.url.localeCompare('/admin') ? false : true;

    console.log(this.router.url + ' ' +  this.callAdmin );
  }

}
