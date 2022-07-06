import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfbuildinsurancePageRoutingModule } from './selfbuildinsurance-routing.module';

import { SelfbuildinsurancePage } from './selfbuildinsurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfbuildinsurancePageRoutingModule
  ],
  declarations: [SelfbuildinsurancePage]
})
export class SelfbuildinsurancePageModule {}
