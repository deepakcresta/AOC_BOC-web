import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  currentUser = null;

  constructor(private router: Router, public loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn)
      this.currentUser = this.loginService.getUser().username;

    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      if (this.isLoggedIn)
        this.currentUser = this.loginService.getUser().username;
    });
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }

  navigateRegister() {
    this.router.navigate(['/signup']);
  }

  navigateProfile() {
    if (this.loginService.getUserRole() == 'ADMIN')
      this.router.navigate(['/admin-dashboard/profile']);
    else {
      this.router.navigate(['/user-dashboard/profile']);
    }
  }

  navigateHome() {
    if (this.loginService.getUserRole() == 'ADMIN')
      this.router.navigate(['/admin-dashboard']);
    else {
      this.router.navigate(['/user-dashboard/0']);
    }
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
