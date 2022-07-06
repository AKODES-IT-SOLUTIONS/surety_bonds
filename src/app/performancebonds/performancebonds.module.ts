import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancebondsPageRoutingModule } from './performancebonds-routing.module';

import { PerformancebondsPage } from './performancebonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformancebondsPageRoutingModule
  ],
  declarations: [PerformancebondsPage]
})
export class PerformancebondsPageModule {}
