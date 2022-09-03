import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { EditAttendanceComponent } from './edit-attendance/edit-attendance.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
const routes: Routes = [
  {
    path: '',
    component: ListAttendanceComponent,
  },
  {
    path: 'add-details',
    component: AddAttendanceComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
