import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatentdefectinsurancePageRoutingModule } from './latentdefectinsurance-routing.module';

import { LatentdefectinsurancePage } from './latentdefectinsurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatentdefectinsurancePageRoutingModule
  ],
  declarations: [LatentdefectinsurancePage]
})
export class LatentdefectinsurancePageModule {}
