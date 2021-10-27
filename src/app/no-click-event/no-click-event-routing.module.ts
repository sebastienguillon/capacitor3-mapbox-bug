import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoClickEventPage } from './no-click-event.page';

const routes: Routes = [
  {
    path: '',
    component: NoClickEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoClickEventPageRoutingModule {}
