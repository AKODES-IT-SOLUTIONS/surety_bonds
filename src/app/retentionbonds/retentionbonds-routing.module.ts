import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetentionbondsPage } from './retentionbonds.page';

const routes: Routes = [
  {
    path: '',
    component: RetentionbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetentionbondsPageRoutingModule {}
