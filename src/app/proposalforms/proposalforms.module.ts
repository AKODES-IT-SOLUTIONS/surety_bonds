import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposalformsPageRoutingModule } from './proposalforms-routing.module';

import { ProposalformsPage } from './proposalforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposalformsPageRoutingModule
  ],
  declarations: [ProposalformsPage]
})
export class ProposalformsPageModule {}
