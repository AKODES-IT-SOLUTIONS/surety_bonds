import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformancebondsPage } from './performancebonds.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancebondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancebondsPageRoutingModule {}
