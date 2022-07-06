import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuralwarrantiesPage } from './structuralwarranties.page';

const routes: Routes = [
  {
    path: '',
    component: StructuralwarrantiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructuralwarrantiesPageRoutingModule {}
