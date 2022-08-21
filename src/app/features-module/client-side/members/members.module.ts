import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListMembersComponent } from './list-members/list-members/list-members.component';
import { EditMembersComponent } from './edit-members/edit-members/edit-members.component';
import { AddMembersComponent } from './add-members/add-members/add-members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientSideModule} from "../../client-side/client-side.module";

@NgModule({
  declarations: [
    ListMembersComponent,
    EditMembersComponent,
    AddMembersComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ClientSideModule
  ],
})
export class MembersModule {}
