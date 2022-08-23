import { NgModule } from '@angular/core';
import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      ClientSideComponent,
      HomeComponent,
      AboutUsComponent,
      EventsComponent,
      GalleryComponent,
      AttendanceComponent,
      ContactUsComponent,
      NavbarComponent
    ],
    exports: [],
    imports: [
      ClientSideRoutingModule,
      ReactiveFormsModule
    ],
  })
  export class ClientSideModule {}
