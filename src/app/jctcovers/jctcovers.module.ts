import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JctcoversPageRoutingModule } from './jctcovers-routing.module';

import { JctcoversPage } from './jctcovers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JctcoversPageRoutingModule
  ],
  declarations: [JctcoversPage]
})
export class JctcoversPageModule {}
