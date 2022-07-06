import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialsbondsPageRoutingModule } from './materialsbonds-routing.module';

import { MaterialsbondsPage } from './materialsbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialsbondsPageRoutingModule
  ],
  declarations: [MaterialsbondsPage]
})
export class MaterialsbondsPageModule {}
