import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentbondsPageRoutingModule } from './rentbonds-routing.module';

import { RentbondsPage } from './rentbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentbondsPageRoutingModule
  ],
  declarations: [RentbondsPage]
})
export class RentbondsPageModule {}
