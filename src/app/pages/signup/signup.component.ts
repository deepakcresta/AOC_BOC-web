import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  // used in form
  user: User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      fullName: [undefined, Validators.required],
      password: [undefined, Validators.required],
      post: [undefined, Validators.required],
      crewName: [undefined, Validators.required],
      address: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.email]],
      phone: [undefined, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  registerUser(user: any) {
    if (this.userForm.valid) {
      this.userService.addNewUser(user).subscribe(
        (response: any) => {
          Swal.fire(
            'Success',
            'New Member: <b>' +
              response.username +
              '</b> registered successfully!!!<br/><i>Redirecting to home page</i>.',
            'success'
          ).then(() => {
            this.router.navigate(['/']);
          });
        },
        (error) => {
          Swal.fire(
            'Error !!!',
            'Something went wrong. Try again !!!',
            'error'
          );
        }
      );
    }
  }
}
