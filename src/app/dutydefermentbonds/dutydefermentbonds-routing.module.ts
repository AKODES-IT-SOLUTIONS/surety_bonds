import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DutydefermentbondsPage } from './dutydefermentbonds.page';

const routes: Routes = [
  {
    path: '',
    component: DutydefermentbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DutydefermentbondsPageRoutingModule {}
