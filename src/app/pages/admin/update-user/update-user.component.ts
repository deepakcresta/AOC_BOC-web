import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  user = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
  };

  id: number = 0;
  userRole: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.loadUser();
  }

  loadUser() {
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        this.user.id = this.id;
        this.user.username = data.username;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.gender = data.gender;
        this.user.email = data.email;
        this.user.phone = data.phone;

        //setting user role
        this.userRole = data.authorities[0].authority;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        Swal.fire('Updated !', 'User updated successfully', 'success').then(
          (e) => {
            if (this.userRole === 'ADMIN') this.loginService.logout();
            else this.router.navigate(['admin-dashboard/users']);
          }
        );
      },
      (error) => {
        Swal.fire('Error !', 'Error in updating user.', 'error');
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
