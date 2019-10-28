import {Component, OnInit} from '@angular/core';
import {Admin} from '../../ObjectDb/Admin';
import {AdminService} from '../../Service/AdminService.model';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {

  validationAdmin: Admin;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(admin: Admin) {
    this.adminService.logAdmin(admin).subscribe((data) => {
      data == null ? alert('USERNAME OR PASSWORD DENIED!') : this.goToAdminPage(data);
    });
  }

  goToAdminPage(admin) {
    localStorage.setItem('admin', admin.username);
    console.log(admin);

    const navigationExtras: NavigationExtras = {
      queryParams: {adminInfo: admin},
      fragment: 'anchor'
    };

  }

}
