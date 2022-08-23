import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ClientSideComponent } from './client-side.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
      path: '',
      component: ClientSideComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
        },
        {
            path: 'about-us',
            component: AboutUsComponent,
        },
        {
            path: 'attendance',
            component: AttendanceComponent,
        },
        {
            path: 'contact-us',
            component: ContactUsComponent,
        },
        {
            path: 'events',
            component: EventsComponent,
        },
        {
            path: 'gallery',
            component: GalleryComponent,
        },
        {
          path: 'members',
          loadChildren: () =>
            import('./members/members.module').then(
              (m) => m.MembersModule
            ),
        },
        // {
        //     path: 'members',
        //     component: MembersComponent,
        // },

      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ClientSideRoutingModule {}