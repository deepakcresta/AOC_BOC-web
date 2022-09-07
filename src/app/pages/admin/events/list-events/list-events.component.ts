import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/events.service';
import { Events } from 'src/app/model/events.model';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  event: Events[] = [];
  toggleArray: { toggled: boolean }[] = [];
  showShortDesciption = true;
  total: number = 0;
  eventContent: string = '';
  status: string = '';

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  public getEvent() {
    this.eventService
      .listAllEvents(this.status)
      .subscribe((response: any) => {
        this.event = response.events;
        this.total=response.total;
        this.event?.forEach(() =>
          this.toggleArray.push({ toggled: false })
        );
      });
  }

  onDeleteEvent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.eventService.deleteEventById(id).subscribe(
        (response: any) => {
          // this.toastrService.success('Testimonial deleted successfully!!!');
          this.ngOnInit();
        },
        (error: any) => {
          // this.toastrService.error('Something went wrong!!!');
        }
      );
    }
  }

  onEditEventDetails(id: any) {
    this.router.navigate(['/events/edit-details', id]);
  }

  safeDescription(value: any) {
    if (value == null) {
      return '';
    }
    return value.replace(/(<([^>]+)>)/gi, '');
  }

  onFilterStatusData(event: any) {
    this.status = event;
    this.getEvent();
  }

}
