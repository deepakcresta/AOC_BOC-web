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
  totalUser: any;
  totalEvent: any;
  totalContact = 0;
 status: any;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    // private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.initWelcome();
  }

  public initWelcome(){
    this.userService.getAllUsers().subscribe((response: any) => {
      this.totalUser=response.length;
    });

  this.eventService.listAllEvents(this.status).subscribe((response: any) => {
    this.totalEvent = response.total;
  });

  // this.contactService.listAllContactMessages().subscribe((response: any) => {
  //   console.log(response);
  //   this.totalContact = response.total;
  // });
}
}
