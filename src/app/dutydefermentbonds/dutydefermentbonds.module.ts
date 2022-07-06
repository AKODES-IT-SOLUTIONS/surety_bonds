import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DutydefermentbondsPageRoutingModule } from './dutydefermentbonds-routing.module';

import { DutydefermentbondsPage } from './dutydefermentbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DutydefermentbondsPageRoutingModule
  ],
  declarations: [DutydefermentbondsPage]
})
export class DutydefermentbondsPageModule {}
