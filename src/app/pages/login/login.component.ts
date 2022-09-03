import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userLoginForm.controls;
  }

  loginUser(userData: any) {
    if (this.userLoginForm.valid) {
      this.loginService.generateToken(userData).subscribe(
        (data: any) => {
          // Login...
          this.loginService.loginUser(data.token);

          this.loginService.getCurrentUser().subscribe((user: any) => {
            this.loginService.setUser(user);
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigateByUrl('/admin-dashboard');
              this.loginService.loginStatusSubject.next(true);
            } else if (this.loginService.getUserRole()) {
              this.router.navigateByUrl('/user-dashboard');
              this.loginService.loginStatusSubject.next(true);
            } else {
              this.loginService.logout();
            }
          });
        },
        (error) => {
          console.log('Error: ', error);
          Swal.fire('Invalid Details', 'Something went wrong !!!', 'error');
        }
      );
    }
  }

  initForm() {
    this.userLoginForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }
}
