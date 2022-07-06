import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrokersPage } from './brokers.page';

const routes: Routes = [
  {
    path: '',
    component: BrokersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokersPageRoutingModule {}
