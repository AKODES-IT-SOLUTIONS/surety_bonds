import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetentionbondsPageRoutingModule } from './retentionbonds-routing.module';

import { RetentionbondsPage } from './retentionbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetentionbondsPageRoutingModule
  ],
  declarations: [RetentionbondsPage]
})
export class RetentionbondsPageModule {}
