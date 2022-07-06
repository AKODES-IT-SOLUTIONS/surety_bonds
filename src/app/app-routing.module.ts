import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'suretybonds',
    loadChildren: () => import('./suretybonds/suretybonds.module').then( m => m.SuretybondsPageModule)
  },
  {
    path: 'insurancebackedgurantee',
    loadChildren: () => import('./insurancebackedgurantee/insurancebackedgurantee.module').then( m => m.InsurancebackedguranteePageModule)
  },
  {
    path: 'structuralwarranties',
    loadChildren: () => import('./structuralwarranties/structuralwarranties.module').then( m => m.StructuralwarrantiesPageModule)
  },
  {
    path: 'jctcovers',
    loadChildren: () => import('./jctcovers/jctcovers.module').then( m => m.JctcoversPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'proposalforms',
    loadChildren: () => import('./proposalforms/proposalforms.module').then( m => m.ProposalformsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'termsandcondition',
    loadChildren: () => import('./termsandcondition/termsandcondition.module').then( m => m.TermsandconditionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'performancebonds',
    loadChildren: () => import('./performancebonds/performancebonds.module').then( m => m.PerformancebondsPageModule)
  },
  {
    path: 'sectionbonds',
    loadChildren: () => import('./sectionbonds/sectionbonds.module').then( m => m.SectionbondsPageModule)
  },
  {
    path: 'retentionbonds',
    loadChildren: () => import('./retentionbonds/retentionbonds.module').then( m => m.RetentionbondsPageModule)
  },
  {
    path: 'advancedpaymentbonds',
    loadChildren: () => import('./advancedpaymentbonds/advancedpaymentbonds.module').then( m => m.AdvancedpaymentbondsPageModule)
  },
  {
    path: 'dutydefermentbonds',
    loadChildren: () => import('./dutydefermentbonds/dutydefermentbonds.module').then( m => m.DutydefermentbondsPageModule)
  },
  {
    path: 'rentbonds',
    loadChildren: () => import('./rentbonds/rentbonds.module').then( m => m.RentbondsPageModule)
  },
  {
    path: 'materialsbonds',
    loadChildren: () => import('./materialsbonds/materialsbonds.module').then( m => m.MaterialsbondsPageModule)
  },
  {
    path: 'brokers',
    loadChildren: () => import('./brokers/brokers.module').then( m => m.BrokersPageModule)
  },
  {
    path: 'latentdefectinsurance',
    loadChildren: () => import('./latentdefectinsurance/latentdefectinsurance.module').then( m => m.LatentdefectinsurancePageModule)
  },
  {
    path: 'selfbuildinsurance',
    loadChildren: () => import('./selfbuildinsurance/selfbuildinsurance.module').then( m => m.SelfbuildinsurancePageModule)
  },
  {
    path: 'architectcertificate',
    loadChildren: () => import('./architectcertificate/architectcertificate.module').then( m => m.ArchitectcertificatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
