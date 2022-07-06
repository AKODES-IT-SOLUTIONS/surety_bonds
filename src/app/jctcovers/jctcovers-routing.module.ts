import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JctcoversPage } from './jctcovers.page';

const routes: Routes = [
  {
    path: '',
    component: JctcoversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JctcoversPageRoutingModule {}
