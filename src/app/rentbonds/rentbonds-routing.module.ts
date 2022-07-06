import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentbondsPage } from './rentbonds.page';

const routes: Routes = [
  {
    path: '',
    component: RentbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentbondsPageRoutingModule {}
