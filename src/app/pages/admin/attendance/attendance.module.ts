import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
import { EditAttendanceComponent } from './edit-attendance/edit-attendance.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceService } from 'src/app/services/attendance.service';
@NgModule({
  declarations: [
    ListAttendanceComponent,
    EditAttendanceComponent,
    AddAttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
     ReactiveFormsModule,
     FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers:[AttendanceService, authInterceptorProviders],
})
export class AttendanceModule {}
