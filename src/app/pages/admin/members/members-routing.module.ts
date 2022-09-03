import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
const routes: Routes = [
  {
    path: '',
    component: ListMembersComponent,
  },
  {
    path: 'add-details',
    component: AddMembersComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditMembersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
