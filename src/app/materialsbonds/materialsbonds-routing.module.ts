import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialsbondsPage } from './materialsbonds.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialsbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialsbondsPageRoutingModule {}
