import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionbondsPageRoutingModule } from './sectionbonds-routing.module';

import { SectionbondsPage } from './sectionbonds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionbondsPageRoutingModule
  ],
  declarations: [SectionbondsPage]
})
export class SectionbondsPageModule {}
