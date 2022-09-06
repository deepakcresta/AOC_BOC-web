import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventService } from 'src/app/services/events.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AngularEditorModule } from '@kolkov/angular-editor';

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
   MatButtonModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   AngularEditorModule
  ],
  providers:[EventService, authInterceptorProviders],
})
export class EventsModule {}
