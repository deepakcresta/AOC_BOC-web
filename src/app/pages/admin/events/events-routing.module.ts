import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventsComponent } from './add-events/add-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { ListEventsComponent } from './list-events/list-events.component';

const routes: Routes = [
  {
    path: '',
    component: ListEventsComponent,
  },
  {
    path: 'add-details',
    component: AddEventsComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
