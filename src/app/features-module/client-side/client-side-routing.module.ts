import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
      path: '',
      component: ClientSideComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
        }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ClientSideRoutingModule {}