import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Admin} from '../../ObjectDb/Admin';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-admin-controller',
  templateUrl: './admin-controller.component.html',
  styleUrls: ['./admin-controller.component.css']
})
export class AdminControllerComponent implements OnInit {

  adminName: string;
  admin2: Observable<string>;
  @Input() admin: Admin;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.adminName = localStorage.getItem('admin');

    if (this.adminName == null) {
      alert('YOU ARE NOT AUTHORIZED!');
      this.router.navigate(['/']);
    } else {
      alert('WELCOME ' + this.adminName.toUpperCase() + '!');
    }

  }

}
