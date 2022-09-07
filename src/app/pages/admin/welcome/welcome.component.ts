import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  total: any;

  constructor(
    private userService: UserService,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.initWelcome();
  }

  public initWelcome(){
    this.userService.getAllUsers().subscribe((response: any) => {
      this.total=response.total;
    });
  }
}
