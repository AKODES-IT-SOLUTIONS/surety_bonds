import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalformsPage } from './proposalforms.page';

const routes: Routes = [
  {
    path: '',
    component: ProposalformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalformsPageRoutingModule {}
