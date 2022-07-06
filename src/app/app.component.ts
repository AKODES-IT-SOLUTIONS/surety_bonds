import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activepage: any;
  show = false;
  show1 = false;
  maintitle = 'Surety Bonds'
  appsubPages = []
  appsubPages1 = [];
  public appPages = [
    { title: 'Home', url: '/home', img: '/assets/imgs/icons/home.svg' },
    { title: 'About', url: '/about', img: '/assets/imgs/icons/about.svg' },
    { title: 'Surety Bonds', url: '/suretybonds', img: '/assets/imgs/icons/noun-contract.svg' },
    { title: 'Insurance Backed Guarantees', url: '/insurancebackedgurantee', img: '/assets/imgs/icons/insurance.svg' },
    { title: 'Structural Warranties', url: '/structuralwarranties', img: '/assets/imgs/icons/noun-certified.svg' },
    { title: 'JCT Covers', url: '/jctcovers', img: '/assets/imgs/icons/building.svg' },
    { title: 'News', url: '/news', img: '/assets/imgs/icons/news.svg' },
    { title: 'Proposal Forms', url: '/proposalforms', img: '/assets/imgs/icons/tasksquare.svg' },
    { title: 'Contact Us', url: '/contactus', img: '/assets/imgs/icons/Calling.svg' },
    { title: 'Privacy Policy', url: '/privacypolicy', img: '/assets/imgs/icons/privacy-policy.svg' },
    { title: 'Terms & Conditions', url: '/termsandcondition', img: '/assets/imgs/icons/termsandconditions.svg' },
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public navCtrl: NavController,
    public router: Router,
    public menuctrl: MenuController) {

  }

  gotohome() {
    this.menuctrl.toggle();
    this.navCtrl.navigateRoot('home')
  }
  openpage(p) {
    console.log('page===', p.title);

    this.activepage = p.title
    this.menuctrl.close();
    this.show = false;
    this.show1 = false;
  }
  ionViewWillEnter() {
    console.log('dasdsadasdsadsadsa=====')
    this.show = false
  }

  showhide() {
    if (this.show == false) {
      this.show = true;
      this.show1 = false
      this.appsubPages = [

        { title: 'Performance Bonds', url: '/performancebonds' },
        { title: 'Section bonds', url: '/sectionbonds' },
        { title: 'Retention bonds', url: '/retentionbonds' },
        { title: 'Advanced Payment bonds', url: '/advancedpaymentbonds' },
        { title: 'DUTY DEFERMENT BONDS', url: '/dutydefermentbonds' },
        { title: 'RENT BONDS', url: '/rentbonds' },
        { title: 'MATERIALS BOND', url: '/materialsbonds' },

      ];
    } else {
      this.appsubPages = []
      this.show = false
    }
  }
  showhide1() {
    if (this.show1 == false) {
      this.show1 = true;
      this.show = false
      this.appsubPages1 = [

        { title: 'LATENT DEFECT INSURANCE', url: '/latentdefectinsurance' },
        { title: 'SELF-BUILD INSURANCE', url: '/selfbuildinsurance' },
        { title: 'ARCHITECTS CERTIFICATE', url: '/architectcertificate' },
      ];
    } else {
      this.appsubPages = []
      this.show1 = false
    }
  }
}
