import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverHomePage } from './driver-home.page';

const routes: Routes = [
  {
    path: '',
    component: DriverHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverHomePageRoutingModule {}
