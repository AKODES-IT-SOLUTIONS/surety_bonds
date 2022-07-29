import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    speed: 1000,
    autoplay: true,
  };
  // options: InAppBrowserOptions = {
  //   location: 'yes',//Or 'no'
  //   hidden: 'no', //Or  'yes'
  //   clearcache: 'yes',
  //   clearsessioncache: 'yes',
  //   zoom: 'yes',//Android only ,shows browser zoom controls
  //   hardwareback: 'yes',
  //   mediaPlaybackRequiresUserAction: 'no',
  //   shouldPauseOnSuspend: 'no', //Android only
  //   closebuttoncaption: 'Close', //iOS only
  //   disallowoverscroll: 'no', //iOS only
  //   toolbar: 'yes', //iOS only
  //   enableViewportScale: 'no', //iOS only
  //   allowInlineMediaPlayback: 'no',//iOS only
  //   presentationstyle: 'pagesheet',//iOS only
  //   fullscreen: 'yes',//Windows only
  // };
  constructor(public navCtrl: NavController,
    public iab: InAppBrowser,
    public platform: Platform) { }

  ngOnInit() {
  }

  goto() {
    console.log('url getting======')
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://suretybondsandguarantees.co.uk/default.aspx', '_system', options);
    browser.show();
  }

  openform() {
    var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
    let browser = this.iab.create('https://share.hsforms.com/13kYlFwtkQc68KgxCTucqFg5n81m', '_system', options);
    browser.show();
  }
  open() {
    this.navCtrl.navigateRoot('contactus');
  }
  perfromancebonds() {
    this.navCtrl.navigateRoot('performancebonds');
  }
  sectionbonds() {
    this.navCtrl.navigateRoot('sectionbonds');
  }
  retentionbonds() {
    this.navCtrl.navigateRoot('retentionbonds');
  }
  advancepaymentmethod() {
    this.navCtrl.navigateRoot('advancedpaymentbonds');
  }
  structuralwarranties() {
    this.navCtrl.navigateRoot('structuralwarranties');
  }
  insurancebackedgurantee() {
    this.navCtrl.navigateRoot('insurancebackedgurantee');
  }
  jctcovers() {
    this.navCtrl.navigateRoot('jctcovers');
  }

}
