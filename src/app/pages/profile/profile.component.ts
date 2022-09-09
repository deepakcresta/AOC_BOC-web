import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = new User();
  userid: any;
  userRole: any;
  adminRole: any;
  constructor(private loginService: LoginService, private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    // this.userRole = this.loginService.getUserRole();
    if(this.loginService.getUserRole() == 'ADMIN')
    this.userRole = true;  
  }

  // navigatetoUpdate(id: any) {
  //   if (this.loginService.getUserRole() == 'ADMIN'){
  //     this.userid = id;
  //     this.router.navigate(['/admin-dashboard/update-user/'], id);
  //   }
  //   else {
  //   this.router.navigate(['/user-dashboard/update-user/'], id);
  //   }
  // }

  goBack() {
    this.location.back();
  }
}
