import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserAttendanceComponent } from './pages/user/user-attendance/user-attendance.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserEventsComponent } from './pages/user/user-events/user-events.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'update-user/:id',
        component: UpdateUserComponent,
      },
      {
        path: 'members',
        loadChildren: () => import('./pages/admin/members/members.module').then(m => m.MembersModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./pages/admin/events/events.module').then(m => m.EventsModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./pages/admin/attendance/attendance.module').then(m => m.AttendanceModule)
      }
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: UserWelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'events',
        component: UserEventsComponent
      },
      {
        path: 'attendance',
        component: UserAttendanceComponent
      },
      {
        path: 'update-user/:id',
        component: UpdateUserComponent,
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
