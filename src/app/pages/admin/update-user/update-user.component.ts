import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  // user = {
  //   id: 0,
  //   username: '',
  //   firstName: '',
  //   lastName: '',
  //   gender: '',
  //   email: '',
  //   phone: '',
  // };

  id: any;
  userRole: string = '';
  user: User = new User();
  editUserForm: FormGroup = new FormGroup({});
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  get forms(): { [key: string]: AbstractControl } {
    return this.editUserForm.controls;
  }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
      password: [undefined, Validators.required],
      post: [undefined, Validators.required],
      crewName: [undefined, Validators.required],
      address: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.email]],
      phone: [undefined, [Validators.required]],
    });
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.initUserById(this.id);
    this.loadUser();
  }

  initUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      (response: any) => {
        this.user = response;
        this.editUserForm.patchValue(this.user);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  loadUser() {
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        this.user.id = this.id;
        this.user.username = data.username;
        this.user.fullName = data.fullName;
        this.user.email = data.email;
        this.user.phone = data.phone;
        this.user.authorities= data.authorities.authority;
        console.log(this.user.authorities);
        // this.userRole = data.authorities[0].authority;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (data: any) => {
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
