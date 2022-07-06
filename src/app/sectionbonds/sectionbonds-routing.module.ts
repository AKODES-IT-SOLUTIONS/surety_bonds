import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionbondsPage } from './sectionbonds.page';

const routes: Routes = [
  {
    path: '',
    component: SectionbondsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionbondsPageRoutingModule {}
