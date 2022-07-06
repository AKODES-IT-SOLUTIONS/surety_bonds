import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchitectcertificatePageRoutingModule } from './architectcertificate-routing.module';

import { ArchitectcertificatePage } from './architectcertificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitectcertificatePageRoutingModule
  ],
  declarations: [ArchitectcertificatePage]
})
export class ArchitectcertificatePageModule {}
