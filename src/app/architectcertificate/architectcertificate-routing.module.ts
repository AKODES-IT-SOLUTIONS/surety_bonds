import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitectcertificatePage } from './architectcertificate.page';

const routes: Routes = [
  {
    path: '',
    component: ArchitectcertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchitectcertificatePageRoutingModule {}
