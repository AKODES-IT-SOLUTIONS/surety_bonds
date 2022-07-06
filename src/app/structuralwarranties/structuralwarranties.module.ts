import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StructuralwarrantiesPageRoutingModule } from './structuralwarranties-routing.module';

import { StructuralwarrantiesPage } from './structuralwarranties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StructuralwarrantiesPageRoutingModule
  ],
  declarations: [StructuralwarrantiesPage]
})
export class StructuralwarrantiesPageModule {}
