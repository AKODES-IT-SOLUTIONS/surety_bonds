import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatentdefectinsurancePage } from './latentdefectinsurance.page';

const routes: Routes = [
  {
    path: '',
    component: LatentdefectinsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatentdefectinsurancePageRoutingModule {}
