import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSelectLocationComponent } from './user-select-location/user-select-location.component';
import { ListLocationSelectedComponent } from './list-location-selected/list-location-selected.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserSelectLocationComponent,
  },
  {
    path: 'list-location-selected-component',
    component: ListLocationSelectedComponent,
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
