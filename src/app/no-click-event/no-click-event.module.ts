import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoClickEventPageRoutingModule } from './no-click-event-routing.module';

import { NoClickEventPage } from './no-click-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoClickEventPageRoutingModule
  ],
  declarations: [NoClickEventPage]
})
export class NoClickEventPageModule {}
