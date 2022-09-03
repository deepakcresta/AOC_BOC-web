import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberService } from 'src/app/services/members.service';
import { AddMembersComponent } from './add-members/add-members.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembersRoutingModule } from './members-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ListMembersComponent,
    EditMembersComponent,
    AddMembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
     ReactiveFormsModule,
     FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers:[MemberService, authInterceptorProviders],
})
export class MembersModule {}
