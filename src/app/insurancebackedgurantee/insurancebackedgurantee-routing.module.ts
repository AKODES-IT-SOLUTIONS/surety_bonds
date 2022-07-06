import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancebackedguranteePage } from './insurancebackedgurantee.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancebackedguranteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancebackedguranteePageRoutingModule {}
