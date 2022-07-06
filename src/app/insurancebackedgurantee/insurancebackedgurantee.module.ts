import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsurancebackedguranteePageRoutingModule } from './insurancebackedgurantee-routing.module';

import { InsurancebackedguranteePage } from './insurancebackedgurantee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsurancebackedguranteePageRoutingModule
  ],
  declarations: [InsurancebackedguranteePage]
})
export class InsurancebackedguranteePageModule {}
