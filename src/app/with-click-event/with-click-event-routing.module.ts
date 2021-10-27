import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithClickEventPage } from './with-click-event.page';

const routes: Routes = [
  {
    path: '',
    component: WithClickEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithClickEventPageRoutingModule {}
