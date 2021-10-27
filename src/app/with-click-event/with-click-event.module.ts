import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithClickEventPageRoutingModule } from './with-click-event-routing.module';

import { WithClickEventPage } from './with-click-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithClickEventPageRoutingModule
  ],
  declarations: [WithClickEventPage]
})
export class WithClickEventPageModule {}
