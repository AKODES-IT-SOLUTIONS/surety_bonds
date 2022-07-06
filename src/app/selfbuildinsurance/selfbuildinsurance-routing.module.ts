import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfbuildinsurancePage } from './selfbuildinsurance.page';

const routes: Routes = [
  {
    path: '',
    component: SelfbuildinsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfbuildinsurancePageRoutingModule {}
