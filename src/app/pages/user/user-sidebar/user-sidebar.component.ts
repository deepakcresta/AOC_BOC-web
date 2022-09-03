import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  categories: any;

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // this.categoryService.categories().subscribe(
    //   (data) => {
    //     this.categories = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  logout() {
    this.loginService.logout();
  }
}
