import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = new User();

  constructor(private loginService: LoginService, private location: Location) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  goBack() {
    this.location.back();
  }
}
