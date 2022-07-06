import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedpaymentbondsPageRoutingModule } from './advancedpaymentbonds-routing.module';

import { AdvancedpaymentbondsPage } from './advancedpaymentbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedpaymentbondsPageRoutingModule
  ],
  declarations: [AdvancedpaymentbondsPage]
})
export class AdvancedpaymentbondsPageModule {}
