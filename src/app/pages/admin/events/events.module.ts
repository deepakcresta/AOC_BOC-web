import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventService } from 'src/app/services/events.service';
@NgModule({
  declarations: [
    ListEventsComponent,
    AddEventsComponent,
    EditEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
     ReactiveFormsModule,
     FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers:[EventService, authInterceptorProviders],
})
export class EventsModule {}
