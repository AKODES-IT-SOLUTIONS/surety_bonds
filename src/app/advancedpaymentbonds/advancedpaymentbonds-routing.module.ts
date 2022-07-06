import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedpaymentbondsPage } from './advancedpaymentbonds.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedpaymentbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedpaymentbondsPageRoutingModule {}
