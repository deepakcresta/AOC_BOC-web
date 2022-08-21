import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members/list-members.component';
import { AddMembersComponent } from './add-members/add-members/add-members.component';
const routes: Routes = [
  {
    path: '',
    component: ListTeacherComponent,
  },
  {
    path: 'add-details',
    component: AddTeacherComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
