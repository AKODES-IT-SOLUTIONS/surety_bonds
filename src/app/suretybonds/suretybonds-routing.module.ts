import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuretybondsPage } from './suretybonds.page';

const routes: Routes = [
  {
    path: '',
    component: SuretybondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuretybondsPageRoutingModule {}
