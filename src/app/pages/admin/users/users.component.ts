import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private location: Location) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  goBack() {
    this.location.back();
  }

  deleteUser(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure want to delete this user ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(
          (response) => {
            this.users = this.users.filter((user) => user.id != id);
            Swal.fire('Deleted !!!', 'User deleted Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error !!!', 'Error deleting user.', 'error');
          }
        );
      }
    });
  }
}
